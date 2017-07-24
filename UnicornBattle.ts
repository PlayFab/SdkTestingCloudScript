var defaultCatalog = "CharacterClasses";
var GEM_CURRENCY_CODE = "GM";
var GOLD_CURRENCY_CODE = "AU";
var HEART_CURRENCY_CODE = "HT";

interface ICreateCharacter {
    characterName: string;
    catalogCode: string;
}
interface ILCharacterId {
    characterId: string;
}
interface ICCharacterId {
    CharacterId: string;
}
interface IItemIds {
    ItemIds: Array<string>;
}
interface IGetBaseClassForType {
    cCode: string;
}
interface ISaveProgress {
    CurrentPlayerData: ICharacterInfo;
    QuestProgress: IQuestProgress;
    LevelRamp: { [key: string]: number };
    PlayerVitals: IPlayerVitals;
}
interface ICharacterInfo {
    characterDetails?: ICharacterDetails;
    baseClass?: IClassDefinition;
    characterData?: ICharacterData;
    PlayerVitals?: IPlayerVitals;
}
interface ICharacterData { // here
    ClassDetails: IClassDetail;
    TotalExp: number;
    ExpThisLevel: number;
    Health: number;
    Mana: number;
    Defense: number;
    Speed: number;
    CharacterLevel: number;
    Spell1_Level: number;
    Spell2_Level: number;
    Spell3_Level: number;
    CustomAvatar: string,
}
interface IPlayerVitals {
    Health: number;
    Mana: number;
    Speed: number;
    Defense: number;
    ActiveStati: Array<ISpellStatus>;

    MaxHealth: number;
    MaxMana: number;
    MaxSpeed: number;
    MaxDefense: number;

    didLevelUp: boolean;
    skillSelected: number;
}
interface ISpellStatus {
    StatusName: string;
    Target: string;
    UpgradeReq: string;
    StatusDescription: string;
    StatModifierCode: string; // prbably need to map to an enum 
    ModifyAmount: number;
    ChanceToApply: number;
    Turns: number;
    Icon: string;
    FX: string;
}
interface IQuestProgress {
    XpCollected?: number;
    GoldCollected?: number;
}
interface IClassDefinition {
    DPLevelBonus: number;
    SPLevelBonus: number;
    MPLevelBonus: number;
    HPLevelBonus: number;
}
interface ICharacterDetails {
    CharacterId?: string;
}
interface IClassDetail {
    Description: string;
    CatalogCode: string;
    Icon: string;
    Spell1: string;
    Spell2: string;
    Spell3: string;
    BaseHP: number;
    BaseMP: number;
    BaseDP: number;
    BaseSP: number;
    HPLevelBonus: number;
    MPLevelBonus: number;
    DPLevelBonus: number;
    SPLevelBonus: number;
    Prereq: string;
    DisplayStatus: string;
}
interface IAchievementData {
    AchievementName: string;
    MatchingStatistic: string;
    SingleStat: boolean;
    Threshold: number;
    Icon: string;
}

///////////////////////// Cloud Script Handler Functions /////////////////////////
function CreateCharacter(args: ICreateCharacter): boolean {
    var grantItemsRequest: PlayFabServerModels.GrantItemsToUserRequest = {
        PlayFabId: currentPlayerId,
        CatalogVersion: defaultCatalog,
        ItemIds: [args.catalogCode]
    };
    server.GrantItemsToUser(grantItemsRequest);

    var grantCharRequest: PlayFabServerModels.GrantCharacterToUserRequest = {
        PlayFabId: currentPlayerId,
        CharacterName: args.characterName,
        CharacterType: args.catalogCode
    };
    var result = server.GrantCharacterToUser(grantCharRequest);
    InitializeNewCharacterData(result.CharacterId, args.catalogCode); // set up default character data
    return true;
}

function DeleteCharacter(args: ILCharacterId): boolean {
    var deleteRequest: PlayFabServerModels.DeleteCharacterFromUserRequest = {
        PlayFabId: currentPlayerId,
        CharacterId: args.characterId,
        SaveCharacterInventory: false
    };
    server.DeleteCharacterFromUser(deleteRequest);
    return true;
}

function GetBaseClassForType(args: IGetBaseClassForType): IClassDetail {
    var getTitleDataRequest: PlayFabServerModels.GetTitleDataRequest = { Keys: ["Classes"] };
    var result = server.GetTitleData(getTitleDataRequest);

    var classes: { [key: string]: IClassDetail } = JSON.parse(result.Data["Classes"]);
    for (var each in classes)
        if (classes[each].CatalogCode === args.cCode)
            return classes[each];
    return null;
}

function SaveProgress(args: ISaveProgress): void {
    args.CurrentPlayerData = !args.CurrentPlayerData ? {} : args.CurrentPlayerData;
    args.QuestProgress = !args.QuestProgress ? {} : args.QuestProgress;
    args.LevelRamp = !args.LevelRamp ? {} : args.LevelRamp;

    //check for level up
    var baseStats = args.CurrentPlayerData.baseClass;
    var characterData = args.CurrentPlayerData.characterData;
    var vitals = args.CurrentPlayerData.PlayerVitals;
    var questProgress = args.QuestProgress;
    var experienceLevel = "" + characterData.CharacterLevel;
    var experienceTarget: number = args.LevelRamp[experienceLevel]; // int

    if (vitals.didLevelUp) {
        // increment the spell
        if (vitals.skillSelected === 0)
            characterData.Spell1_Level++;
        else if (vitals.skillSelected === 1)
            characterData.Spell2_Level++;
        else
            characterData.Spell3_Level++;

        //Update stats
        characterData.CharacterLevel++;

        characterData.Defense += baseStats.DPLevelBonus;
        characterData.Speed += baseStats.SPLevelBonus;
        characterData.Mana += baseStats.MPLevelBonus;
        characterData.Health += baseStats.HPLevelBonus;
        characterData.TotalExp += questProgress.XpCollected;

        characterData.ExpThisLevel = characterData.TotalExp - experienceTarget;
    } else {
        characterData.ExpThisLevel += questProgress.XpCollected;
    }

    //check for achievements & offers
    EvaluateAchievements(args.CurrentPlayerData.characterDetails.CharacterId);

    // API params
    var updateDataRequest: PlayFabServerModels.UpdateCharacterDataRequest = {
        PlayFabId: currentPlayerId,
        CharacterId: args.CurrentPlayerData.characterDetails.CharacterId,
        Data: { CharacterData: JSON.stringify(characterData) },
        Permission: "Public"
    };

    server.UpdateCharacterReadOnlyData(updateDataRequest);

    // set up Gold VC
    var addVcRequest: PlayFabServerModels.AddUserVirtualCurrencyRequest = {
        PlayFabId: currentPlayerId,
        VirtualCurrency: GOLD_CURRENCY_CODE,
        Amount: questProgress.GoldCollected
    };
    server.AddUserVirtualCurrency(addVcRequest);
}

function RetriveQuestItems(args: IItemIds): string {
    var grantRequest: PlayFabServerModels.GrantItemsToUserRequest = {
        PlayFabId: currentPlayerId,
        ItemIds: args.ItemIds
    };
    var response = server.GrantItemsToUser(grantRequest);
    return JSON.stringify(response.ItemGrantResults);
}

function SubtractLife(): PlayFabServerModels.ModifyUserVirtualCurrencyResult {
    var subtractVcRequest: PlayFabServerModels.SubtractUserVirtualCurrencyRequest = {
        PlayFabId: currentPlayerId,
        VirtualCurrency: HEART_CURRENCY_CODE,
        Amount: 1
    };
    return server.SubtractUserVirtualCurrency(subtractVcRequest);
}

function EnableValentinesEvent(): void {
    SetEventActive("evalentine", true);
}

function DisableValentinesEvent(): void {
    SetEventActive("evalentine", false);
}

function EnablePresEvent(): void {
    SetEventActive("epresident", true);
}

function DisablePresEvent(): void {
    SetEventActive("epresident", false);
}

///////////////////////// HELPER FUNCTIONS (NOT DIRECTLY CALLABLE FROM THE CLIENT) /////////////////////////
function InitializeNewCharacterData(characterId: string, catalogItemId: string): void {
    var cDetails: IClassDetail = GetBaseClassForType({ cCode: catalogItemId });

    // default character properties
    var CharacterData: ICharacterData = {
        ClassDetails: cDetails,
        TotalExp: 0,
        ExpThisLevel: 0,
        Health: cDetails.BaseHP,
        Mana: cDetails.BaseMP,
        Defense: cDetails.BaseDP,
        Speed: cDetails.BaseSP,
        CharacterLevel: 1,
        Spell1_Level: 0,
        Spell2_Level: 0,
        Spell3_Level: 0,
        CustomAvatar: null
    };

    // Char Data
    var updateDataRequest: PlayFabServerModels.UpdateCharacterDataRequest = {
        PlayFabId: currentPlayerId,
        CharacterId: characterId,
        Data: { CharacterData: JSON.stringify(CharacterData) },
        Permission: "Public"
    };
    server.UpdateCharacterReadOnlyData(updateDataRequest);

    // set up Heart VC
    var vcHeartRequest: PlayFabServerModels.AddUserVirtualCurrencyRequest = {
        PlayFabId: currentPlayerId,
        VirtualCurrency: HEART_CURRENCY_CODE,
        Amount: 0
    };
    server.AddUserVirtualCurrency(vcHeartRequest);

    // set up Gold VC
    var vcGoldRequest: PlayFabServerModels.AddUserVirtualCurrencyRequest = {
        PlayFabId: currentPlayerId,
        VirtualCurrency: GOLD_CURRENCY_CODE,
        Amount: 0
    };
    server.AddUserVirtualCurrency(vcGoldRequest);

    // set up Gem VC
    var vcGemRequest: PlayFabServerModels.AddUserVirtualCurrencyRequest = {
        PlayFabId: currentPlayerId,
        VirtualCurrency: GEM_CURRENCY_CODE,
        Amount: 0
    };
    server.AddUserVirtualCurrency(vcGemRequest);
}

function HasAchievement(achievement: IAchievementData, playerStats: { [key: string]: number }): boolean {
    if (achievement.SingleStat) {
        for (var stat in playerStats)
            if (playerStats.hasOwnProperty(stat) && stat.indexOf(achievement.MatchingStatistic) > -1
                && playerStats[stat] >= achievement.Threshold)
                // Stat found and exceeds the achievement threshold
                return true;
    } else {
        // process aggregate stats
        var statTotal = 0;
        for (var stat in playerStats)
            if (playerStats.hasOwnProperty(stat) && stat.indexOf(achievement.MatchingStatistic) > -1)
                statTotal += playerStats[stat];

        if (statTotal >= achievement.Threshold)
            return true; // sum of stats found exceeds the achievement threshold
    }

    return false;
}

function EvaluateAchievements(characterId: string): void {
    // get the achievement thresholds set by TitleData
    var getTitleAchievementsRequest = { Keys: ["Achievements"] };
    var titleDataResult = server.GetTitleData(getTitleAchievementsRequest);
    var serverAchievements: { [key: string]: IAchievementData };
    if (titleDataResult.Data.hasOwnProperty("Achievements"))
        serverAchievements = JSON.parse(titleDataResult.Data["Achievements"]);
    else
        throw "Achievements not found on Server. Check TitleData[\"Achievements\"]";

    // get the character stats
    var statsRequest: PlayFabServerModels.GetCharacterStatisticsRequest = {
        PlayFabId: currentPlayerId,
        CharacterId: characterId,
    };
    var statsResult = server.GetCharacterStatistics(statsRequest);
    var charStats = statsResult.CharacterStatistics;

    // get the unlocked stats for the character
    var getCharDataRequest = {
        PlayFabId: currentPlayerId,
        CharacterId: characterId,
        Keys: ["Achievements"]
    };
    var charDataResult = server.GetCharacterReadOnlyData(getCharDataRequest);
    var awardedAchievements: Array<string>;
    if (charDataResult.Data.hasOwnProperty("Achievements"))
        awardedAchievements = JSON.parse(charDataResult.Data["Achievements"].Value);
    else
        awardedAchievements = []; // no achievements 

    // TODO -- need to track new achievements and toss them over to the offer evaluator
    var arrayCount = awardedAchievements.length;
    for (var achievementName in serverAchievements)
        // if the player does not already have the achievement, evaluate progress
        if (awardedAchievements.indexOf(achievementName) === -1 && HasAchievement(serverAchievements[achievementName], charStats))
            awardedAchievements.push(achievementName);

    // if we added some new achievements, save details to character data
    if (arrayCount < awardedAchievements.length) {
        var updateCharDataRequest: PlayFabServerModels.UpdateCharacterDataRequest = {
            PlayFabId: currentPlayerId,
            CharacterId: characterId,
            Data: { Achievements: JSON.stringify(awardedAchievements) },
            Permission: "Public"
        };
        server.UpdateCharacterReadOnlyData(updateCharDataRequest);
    }
}

var EVENT_TITLE_DATA_KEY: string = "ActiveEventKeys";
function SetEventActive(eventKey: string, isActive: boolean): void {
    var getRequest: PlayFabServerModels.GetTitleDataRequest = { Keys: [EVENT_TITLE_DATA_KEY] };
    var serverData = server.GetTitleData(getRequest);
    var eventKeys: Array<string> = JSON.parse(serverData.Data[EVENT_TITLE_DATA_KEY]);
    if (isActive)
        eventKeys.push(eventKey);
    else {
        var temp: Array<string> = [];
        for (var idx in eventKeys)
            if (eventKeys[idx] != eventKey)
                temp.push(eventKeys[idx]);
        eventKeys = temp;
    }

    var setRequest: PlayFabServerModels.SetTitleDataRequest = {
        Key: EVENT_TITLE_DATA_KEY,
        Value: JSON.stringify(eventKeys)
    };
    server.SetTitleData(setRequest);
}

///////////////////////// Define the handlers /////////////////////////
handlers["GetBaseClassForType"] = GetBaseClassForType;
handlers["CreateCharacter"] = CreateCharacter;
handlers["DeleteCharacter"] = DeleteCharacter;
handlers["SaveProgress"] = SaveProgress;
handlers["RetriveQuestItems"] = RetriveQuestItems;
handlers["SubtractLife"] = SubtractLife;
