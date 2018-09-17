/** Static object you add your CloudScript endpoints to */
declare var handlers: IPlayFabHandlers;
interface IPlayFabHandlers {
  [handlerId:string]: (args?:any, context?:IPlayFabContext) => any;
}

/** The playfab id for the user who called into CloudScript */
declare var currentPlayerId: string;

/**
 * Static object containing cloudscript logging functions
 * debug(message: string, exc?: any): void,
 * error(message: string, exc?: any): void,
 * info(message: string, exc?: any): void,
 */
declare var log: Logger;
interface Logger {
    debug(message: string, exc?: any): void,
    error(message: string, exc?: any): void,
    info(message: string, exc?: any): void,
}

/**
 * Static object containing cloudscript external request functions
 * request(url: string, method?: string, content?: string, contentType?: string): string
 */
declare var http: IPlayFabHttp;
interface IPlayFabHttp {
    request(url: string, method?: string, content?: string, contentType?: string, headers?: { [key: string]: string }): string
}

interface IPlayFabContext {
    playStreamEvent: PlayStreamModels.IBasePlayStreamEvent;
    playerProfile: IPlayFabPlayerProfile;
}

interface IPlayFabPlayerProfile {
    PlayerId: string;
    DisplayName: string;
}

declare var script: IPlayFabEnvironment;
interface IPlayFabEnvironment {
    revision: number;
    titleId: string;
}

interface IPlayFabError {
    cloudScriptErrorCode : string;
    stack : string;
    apiErrorInfo?: IApiErrorInfo;
}

interface IApiErrorInfo {
    api : string;
    request : any;
    result : any;
    apiError?: IApiError;
}

interface IApiError {
    code : number;
    status : string;
    error : string;
    errorCode : number;
    errorMessage : string;
    errorDetails?: { [index:string] : { message: string[] } };
}

/** Static object which allows access to PlayFab Classic Server API calls */
declare var server: IPlayFabServerAPI;
/** Static object which allows access to PlayFab Entity API calls */
declare var entity: IPlayFabEntityAPI;

/** ServerAPI.Models as interfaces */
declare namespace PlayFabServerModels {
    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AdCampaignAttribution */
    interface AdCampaignAttribution {
        /** UTC time stamp of attribution */
        AttributedAt: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** Attribution network name */
        Platform?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AdCampaignAttributionModel */
    interface AdCampaignAttributionModel {
        /** UTC time stamp of attribution */
        AttributedAt: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** Attribution network name */
        Platform?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddCharacterVirtualCurrencyRequest */
    interface AddCharacterVirtualCurrencyRequest {
        /**
         * Amount to be added to the character balance of the specified virtual currency. Maximum VC balance is Int32
         * (2,147,483,647). Any increase over this value will be discarded.
         */
        Amount: number,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** PlayFab unique identifier of the user whose virtual currency balance is to be incremented. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddFriendRequest */
    interface AddFriendRequest {
        /** Email address of the user being added. */
        FriendEmail?: string,
        /** The PlayFab identifier of the user being added. */
        FriendPlayFabId?: string,
        /** Title-specific display name of the user to being added. */
        FriendTitleDisplayName?: string,
        /** The PlayFab username of the user being added */
        FriendUsername?: string,
        /** PlayFab identifier of the player to add a new friend. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddPlayerTagRequest */
    interface AddPlayerTagRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique tag for player profile. */
        TagName: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddPlayerTagResult */
    interface AddPlayerTagResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddSharedGroupMembersRequest */
    interface AddSharedGroupMembersRequest {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[],
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddSharedGroupMembersResult */
    interface AddSharedGroupMembersResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddUserVirtualCurrencyRequest */
    interface AddUserVirtualCurrencyRequest {
        /**
         * Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647).
         * Any increase over this value will be discarded.
         */
        Amount: number,
        /** PlayFab unique identifier of the user whose virtual currency balance is to be increased. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AdvancedPushPlatformMsg */
    interface AdvancedPushPlatformMsg {
        /** The Json the platform should receive. */
        Json: string,
        /** The platform that should receive the Json. */
        Platform: PushNotificationPlatform,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AuthenticateSessionTicketRequest */
    interface AuthenticateSessionTicketRequest {
        /** Session ticket as issued by a PlayFab client login API. */
        SessionTicket: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AuthenticateSessionTicketResult */
    interface AuthenticateSessionTicketResult {
        /** Account info for the user whose session ticket was supplied. */
        UserInfo?: UserAccountInfo,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AwardSteamAchievementItem */
    interface AwardSteamAchievementItem {
        /** Unique Steam achievement name. */
        AchievementName: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Result of the award attempt (only valid on response, not on request). */
        Result: boolean,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AwardSteamAchievementRequest */
    interface AwardSteamAchievementRequest {
        /** Array of achievements to grant and the users to whom they are to be granted. */
        Achievements: AwardSteamAchievementItem[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AwardSteamAchievementResult */
    interface AwardSteamAchievementResult {
        /** Array of achievements granted. */
        AchievementResults?: AwardSteamAchievementItem[],
    }

    /**
     * Contains information for a ban.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanInfo
     */
    interface BanInfo {
        /** The active state of this ban. Expired bans may still have this value set to true but they will have no effect. */
        Active: boolean,
        /** The unique Ban Id associated with this ban. */
        BanId?: string,
        /** The time when this ban was applied. */
        Created?: string,
        /** The time when this ban expires. Permanent bans do not have expiration date. */
        Expires?: string,
        /** The IP address on which the ban was applied. May affect multiple players. */
        IPAddress?: string,
        /** The MAC address on which the ban was applied. May affect multiple players. */
        MACAddress?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
        /** The reason why this ban was applied. */
        Reason?: string,
    }

    /**
     * Represents a single ban request.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanRequest
     */
    interface BanRequest {
        /** The duration in hours for the ban. Leave this blank for a permanent ban. */
        DurationInHours?: number,
        /** IP address to be banned. May affect multiple players. */
        IPAddress?: string,
        /** MAC address to be banned. May affect multiple players. */
        MACAddress?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The reason for this ban. Maximum 140 characters. */
        Reason?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanUsersRequest */
    interface BanUsersRequest {
        /** List of ban requests to be applied. Maximum 100. */
        Bans: BanRequest[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanUsersResult */
    interface BanUsersResult {
        /** Information on the bans that were applied */
        BanData?: BanInfo[],
    }

    /**
     * A purchasable item from the item catalog
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItem
     */
    interface CatalogItem {
        /**
         * defines the bundle properties for the item - bundles are items which contain other items, including random drop tables
         * and virtual currencies
         */
        Bundle?: CatalogItemBundleInfo,
        /** if true, then an item instance of this type can be used to grant a character to a user. */
        CanBecomeCharacter: boolean,
        /** catalog version for this item */
        CatalogVersion?: string,
        /** defines the consumable properties (number of uses, timeout) for the item */
        Consumable?: CatalogItemConsumableInfo,
        /**
         * defines the container properties for the item - what items it contains, including random drop tables and virtual
         * currencies, and what item (if any) is required to open it via the UnlockContainerItem API
         */
        Container?: CatalogItemContainerInfo,
        /** game specific custom data */
        CustomData?: string,
        /** text description of item, to show in-game */
        Description?: string,
        /** text name for the item, to show in-game */
        DisplayName?: string,
        /**
         * If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited
         * edition item, this value determines the total number of instances to allocate for the title. Once this limit has been
         * reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of
         * false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less
         * than zero, it will be ignored.
         */
        InitialLimitedEditionCount: number,
        /** BETA: If true, then only a fixed number can ever be granted. */
        IsLimitedEdition: boolean,
        /**
         * if true, then only one item instance of this type will exist and its remaininguses will be incremented instead.
         * RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded
         */
        IsStackable: boolean,
        /** if true, then an item instance of this type can be traded between players using the trading APIs */
        IsTradable: boolean,
        /** class to which the item belongs */
        ItemClass?: string,
        /** unique identifier for this item */
        ItemId: string,
        /**
         * URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP
         * URL.
         */
        ItemImageUrl?: string,
        /** override prices for this item for specific currencies */
        RealCurrencyPrices?: { [key: string]: number },
        /** list of item tags */
        Tags?: string[],
        /** price of this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
        VirtualCurrencyPrices?: { [key: string]: number },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItemBundleInfo */
    interface CatalogItemBundleInfo {
        /** unique ItemId values for all items which will be added to the player inventory when the bundle is added */
        BundledItems?: string[],
        /**
         * unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and
         * add the relevant items to the player inventory when the bundle is added)
         */
        BundledResultTables?: string[],
        /** virtual currency types and balances which will be added to the player inventory when the bundle is added */
        BundledVirtualCurrencies?: { [key: string]: number },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItemConsumableInfo */
    interface CatalogItemConsumableInfo {
        /** number of times this object can be used, after which it will be removed from the player inventory */
        UsageCount?: number,
        /**
         * duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed
         * (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on
         * this item's details have completed)
         */
        UsagePeriod?: number,
        /**
         * all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values
         * added together, and share the result - when that period has elapsed, all the items in the group will be removed
         */
        UsagePeriodGroup?: string,
    }

    /**
     * Containers are inventory items that can hold other items defined in the catalog, as well as virtual currency, which is
     * added to the player inventory when the container is unlocked, using the UnlockContainerItem API. The items can be
     * anything defined in the catalog, as well as RandomResultTable objects which will be resolved when the container is
     * unlocked. Containers and their keys should be defined as Consumable (having a limited number of uses) in their catalog
     * defintiions, unless the intent is for the player to be able to re-use them infinitely.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItemContainerInfo
     */
    interface CatalogItemContainerInfo {
        /** unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked */
        ItemContents?: string[],
        /**
         * ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will
         * open the container, adding the contents to the player inventory and currency balances)
         */
        KeyItemId?: string,
        /**
         * unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables
         * will be resolved and add the relevant items to the player inventory)
         */
        ResultTableContents?: string[],
        /** virtual currency types and balances which will be added to the player inventory when the container is unlocked */
        VirtualCurrencyContents?: { [key: string]: number },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CharacterInventory */
    interface CharacterInventory {
        /** The id of this character. */
        CharacterId?: string,
        /** The inventory of this character. */
        Inventory?: ItemInstance[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CharacterLeaderboardEntry */
    interface CharacterLeaderboardEntry {
        /** PlayFab unique identifier of the character that belongs to the user for this leaderboard entry. */
        CharacterId?: string,
        /** Title-specific display name of the character for this leaderboard entry. */
        CharacterName?: string,
        /** Name of the character class for this entry. */
        CharacterType?: string,
        /** Title-specific display name of the user for this leaderboard entry. */
        DisplayName?: string,
        /** PlayFab unique identifier of the user for this leaderboard entry. */
        PlayFabId?: string,
        /** User's overall position in the leaderboard. */
        Position: number,
        /** Specific value of the user's statistic. */
        StatValue: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CharacterResult */
    interface CharacterResult {
        /** The id for this character on this player. */
        CharacterId?: string,
        /** The name of this character. */
        CharacterName?: string,
        /** The type-string that was given to this character on creation. */
        CharacterType?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CloudScriptRevisionOption */
    type CloudScriptRevisionOption = "Live"
        | "Latest"
        | "Specific";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ConsumeItemRequest */
    interface ConsumeItemRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Number of uses to consume from the item. */
        ConsumeCount: number,
        /** Unique instance identifier of the item to be consumed. */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ConsumeItemResult */
    interface ConsumeItemResult {
        /** Unique instance identifier of the item with uses consumed. */
        ItemInstanceId?: string,
        /** Number of uses remaining on the item. */
        RemainingUses: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ContactEmailInfo */
    interface ContactEmailInfo {
        /** The email address */
        EmailAddress?: string,
        /** The name of the email info data */
        Name?: string,
        /** The verification status of the email */
        VerificationStatus?: EmailVerificationStatus,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ContactEmailInfoModel */
    interface ContactEmailInfoModel {
        /** The email address */
        EmailAddress?: string,
        /** The name of the email info data */
        Name?: string,
        /** The verification status of the email */
        VerificationStatus?: EmailVerificationStatus,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ContinentCode */
    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CountryCode */
    type CountryCode = "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CreateSharedGroupRequest */
    interface CreateSharedGroupRequest {
        /** Unique identifier for the shared group (a random identifier will be assigned, if one is not specified). */
        SharedGroupId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CreateSharedGroupResult */
    interface CreateSharedGroupResult {
        /** Unique identifier for the shared group. */
        SharedGroupId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.Currency */
    type Currency = "AED"
        | "AFN"
        | "ALL"
        | "AMD"
        | "ANG"
        | "AOA"
        | "ARS"
        | "AUD"
        | "AWG"
        | "AZN"
        | "BAM"
        | "BBD"
        | "BDT"
        | "BGN"
        | "BHD"
        | "BIF"
        | "BMD"
        | "BND"
        | "BOB"
        | "BRL"
        | "BSD"
        | "BTN"
        | "BWP"
        | "BYR"
        | "BZD"
        | "CAD"
        | "CDF"
        | "CHF"
        | "CLP"
        | "CNY"
        | "COP"
        | "CRC"
        | "CUC"
        | "CUP"
        | "CVE"
        | "CZK"
        | "DJF"
        | "DKK"
        | "DOP"
        | "DZD"
        | "EGP"
        | "ERN"
        | "ETB"
        | "EUR"
        | "FJD"
        | "FKP"
        | "GBP"
        | "GEL"
        | "GGP"
        | "GHS"
        | "GIP"
        | "GMD"
        | "GNF"
        | "GTQ"
        | "GYD"
        | "HKD"
        | "HNL"
        | "HRK"
        | "HTG"
        | "HUF"
        | "IDR"
        | "ILS"
        | "IMP"
        | "INR"
        | "IQD"
        | "IRR"
        | "ISK"
        | "JEP"
        | "JMD"
        | "JOD"
        | "JPY"
        | "KES"
        | "KGS"
        | "KHR"
        | "KMF"
        | "KPW"
        | "KRW"
        | "KWD"
        | "KYD"
        | "KZT"
        | "LAK"
        | "LBP"
        | "LKR"
        | "LRD"
        | "LSL"
        | "LYD"
        | "MAD"
        | "MDL"
        | "MGA"
        | "MKD"
        | "MMK"
        | "MNT"
        | "MOP"
        | "MRO"
        | "MUR"
        | "MVR"
        | "MWK"
        | "MXN"
        | "MYR"
        | "MZN"
        | "NAD"
        | "NGN"
        | "NIO"
        | "NOK"
        | "NPR"
        | "NZD"
        | "OMR"
        | "PAB"
        | "PEN"
        | "PGK"
        | "PHP"
        | "PKR"
        | "PLN"
        | "PYG"
        | "QAR"
        | "RON"
        | "RSD"
        | "RUB"
        | "RWF"
        | "SAR"
        | "SBD"
        | "SCR"
        | "SDG"
        | "SEK"
        | "SGD"
        | "SHP"
        | "SLL"
        | "SOS"
        | "SPL"
        | "SRD"
        | "STD"
        | "SVC"
        | "SYP"
        | "SZL"
        | "THB"
        | "TJS"
        | "TMT"
        | "TND"
        | "TOP"
        | "TRY"
        | "TTD"
        | "TVD"
        | "TWD"
        | "TZS"
        | "UAH"
        | "UGX"
        | "USD"
        | "UYU"
        | "UZS"
        | "VEF"
        | "VND"
        | "VUV"
        | "WST"
        | "XAF"
        | "XCD"
        | "XDR"
        | "XOF"
        | "XPF"
        | "YER"
        | "ZAR"
        | "ZMW"
        | "ZWD";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteCharacterFromUserRequest */
    interface DeleteCharacterFromUserRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /**
         * If true, the character's inventory will be transferred up to the owning user; otherwise, this request will purge those
         * items.
         */
        SaveCharacterInventory: boolean,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteCharacterFromUserResult */
    interface DeleteCharacterFromUserResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeletePlayerRequest */
    interface DeletePlayerRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeletePlayerResult */
    interface DeletePlayerResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteSharedGroupRequest */
    interface DeleteSharedGroupRequest {
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteUsersRequest */
    interface DeleteUsersRequest {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[],
        /**
         * Unique identifier for the title, found in the Settings &gt; Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteUsersResult */
    interface DeleteUsersResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeregisterGameRequest */
    interface DeregisterGameRequest {
        /** Unique identifier for the Game Server Instance that is being deregistered. */
        LobbyId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeregisterGameResponse */
    interface DeregisterGameResponse {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EmailVerificationStatus */
    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EmptyResponse */
    interface EmptyResponse {
    }

    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EvaluateRandomResultTableRequest */
    interface EvaluateRandomResultTableRequest {
        /**
         * Specifies the catalog version that should be used to evaluate the Random Result Table. If unspecified, uses
         * default/primary catalog.
         */
        CatalogVersion?: string,
        /** The unique identifier of the Random Result Table to use. */
        TableId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EvaluateRandomResultTableResult */
    interface EvaluateRandomResultTableResult {
        /** Unique identifier for the item returned from the Random Result Table evaluation, for the given catalog. */
        ResultItemId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ExecuteCloudScriptResult */
    interface ExecuteCloudScriptResult {
        /** Number of PlayFab API requests issued by the CloudScript function */
        APIRequestsIssued: number,
        /** Information about the error, if any, that occurred during execution */
        Error?: ScriptExecutionError,
        ExecutionTimeSeconds: number,
        /** The name of the function that executed */
        FunctionName?: string,
        /** The object returned from the CloudScript function, if any */
        FunctionResult?: any,
        /**
         * Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
         * the total event size is larger than 350KB.
         */
        FunctionResultTooLarge?: boolean,
        /** Number of external HTTP requests issued by the CloudScript function */
        HttpRequestsIssued: number,
        /**
         * Entries logged during the function execution. These include both entries logged in the function code using log.info()
         * and log.error() and error entries for API and HTTP request failures.
         */
        Logs?: LogStatement[],
        /**
         * Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
         * event size is larger than 350KB after the FunctionResult was removed.
         */
        LogsTooLarge?: boolean,
        MemoryConsumedBytes: number,
        /**
         * Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
         * requests.
         */
        ProcessorTimeSeconds: number,
        /** The revision of the CloudScript that executed */
        Revision: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ExecuteCloudScriptServerRequest */
    interface ExecuteCloudScriptServerRequest {
        /** The name of the CloudScript function to execute */
        FunctionName: string,
        /** Object that is passed in to the function as the first argument */
        FunctionParameter?: any,
        /**
         * Generate a 'player_executed_cloudscript' PlayStream event containing the results of the function execution and other
         * contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager.
         */
        GeneratePlayStreamEvent?: boolean,
        /** The unique user identifier for the player on whose behalf the script is being run */
        PlayFabId: string,
        /**
         * Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live'
         * executes the current live, published revision, and 'Specific' executes the specified revision. The default value is
         * 'Specific', if the SpeificRevision parameter is specified, otherwise it is 'Live'.
         */
        RevisionSelection?: CloudScriptRevisionOption,
        /** The specivic revision to execute, when RevisionSelection is set to 'Specific' */
        SpecificRevision?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.FacebookInstantGamesPlayFabIdPair */
    interface FacebookInstantGamesPlayFabIdPair {
        /** Unique Facebook Instant Games identifier for a user. */
        FacebookInstantGamesId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook Instant Games identifier. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.FacebookPlayFabIdPair */
    interface FacebookPlayFabIdPair {
        /** Unique Facebook identifier for a user. */
        FacebookId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.FriendInfo */
    interface FriendInfo {
        /** Unique lobby identifier of the Game Server Instance to which this player is currently connected. */
        CurrentMatchmakerLobbyId?: string,
        /** Available Facebook information (if the user and PlayFab friend are also connected in Facebook). */
        FacebookInfo?: UserFacebookInfo,
        /** PlayFab unique identifier for this friend. */
        FriendPlayFabId?: string,
        /** Available Game Center information (if the user and PlayFab friend are also connected in Game Center). */
        GameCenterInfo?: UserGameCenterInfo,
        /** The profile of the user, if requested. */
        Profile?: PlayerProfileModel,
        /** Available PSN information, if the user and PlayFab friend are both connected to PSN. */
        PSNInfo?: UserPsnInfo,
        /** Available Steam information (if the user and PlayFab friend are also connected in Steam). */
        SteamInfo?: UserSteamInfo,
        /** Tags which have been associated with this friend. */
        Tags?: string[],
        /** Title-specific display name for this friend. */
        TitleDisplayName?: string,
        /** PlayFab unique username for this friend. */
        Username?: string,
        /** Available Xbox information, if the user and PlayFab friend are both connected to Xbox Live. */
        XboxInfo?: UserXboxInfo,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GameInstanceState */
    type GameInstanceState = "Open"
        | "Closed";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GenericErrorCodes */
    type GenericErrorCodes = "Success"
        | "UnkownError"
        | "InvalidParams"
        | "AccountNotFound"
        | "AccountBanned"
        | "InvalidUsernameOrPassword"
        | "InvalidTitleId"
        | "InvalidEmailAddress"
        | "EmailAddressNotAvailable"
        | "InvalidUsername"
        | "InvalidPassword"
        | "UsernameNotAvailable"
        | "InvalidSteamTicket"
        | "AccountAlreadyLinked"
        | "LinkedAccountAlreadyClaimed"
        | "InvalidFacebookToken"
        | "AccountNotLinked"
        | "FailedByPaymentProvider"
        | "CouponCodeNotFound"
        | "InvalidContainerItem"
        | "ContainerNotOwned"
        | "KeyNotOwned"
        | "InvalidItemIdInTable"
        | "InvalidReceipt"
        | "ReceiptAlreadyUsed"
        | "ReceiptCancelled"
        | "GameNotFound"
        | "GameModeNotFound"
        | "InvalidGoogleToken"
        | "UserIsNotPartOfDeveloper"
        | "InvalidTitleForDeveloper"
        | "TitleNameConflicts"
        | "UserisNotValid"
        | "ValueAlreadyExists"
        | "BuildNotFound"
        | "PlayerNotInGame"
        | "InvalidTicket"
        | "InvalidDeveloper"
        | "InvalidOrderInfo"
        | "RegistrationIncomplete"
        | "InvalidPlatform"
        | "UnknownError"
        | "SteamApplicationNotOwned"
        | "WrongSteamAccount"
        | "TitleNotActivated"
        | "RegistrationSessionNotFound"
        | "NoSuchMod"
        | "FileNotFound"
        | "DuplicateEmail"
        | "ItemNotFound"
        | "ItemNotOwned"
        | "ItemNotRecycleable"
        | "ItemNotAffordable"
        | "InvalidVirtualCurrency"
        | "WrongVirtualCurrency"
        | "WrongPrice"
        | "NonPositiveValue"
        | "InvalidRegion"
        | "RegionAtCapacity"
        | "ServerFailedToStart"
        | "NameNotAvailable"
        | "InsufficientFunds"
        | "InvalidDeviceID"
        | "InvalidPushNotificationToken"
        | "NoRemainingUses"
        | "InvalidPaymentProvider"
        | "PurchaseInitializationFailure"
        | "DuplicateUsername"
        | "InvalidBuyerInfo"
        | "NoGameModeParamsSet"
        | "BodyTooLarge"
        | "ReservedWordInBody"
        | "InvalidTypeInBody"
        | "InvalidRequest"
        | "ReservedEventName"
        | "InvalidUserStatistics"
        | "NotAuthenticated"
        | "StreamAlreadyExists"
        | "ErrorCreatingStream"
        | "StreamNotFound"
        | "InvalidAccount"
        | "PurchaseDoesNotExist"
        | "InvalidPurchaseTransactionStatus"
        | "APINotEnabledForGameClientAccess"
        | "NoPushNotificationARNForTitle"
        | "BuildAlreadyExists"
        | "BuildPackageDoesNotExist"
        | "CustomAnalyticsEventsNotEnabledForTitle"
        | "InvalidSharedGroupId"
        | "NotAuthorized"
        | "MissingTitleGoogleProperties"
        | "InvalidItemProperties"
        | "InvalidPSNAuthCode"
        | "InvalidItemId"
        | "PushNotEnabledForAccount"
        | "PushServiceError"
        | "ReceiptDoesNotContainInAppItems"
        | "ReceiptContainsMultipleInAppItems"
        | "InvalidBundleID"
        | "JavascriptException"
        | "InvalidSessionTicket"
        | "UnableToConnectToDatabase"
        | "InternalServerError"
        | "InvalidReportDate"
        | "ReportNotAvailable"
        | "DatabaseThroughputExceeded"
        | "InvalidGameTicket"
        | "ExpiredGameTicket"
        | "GameTicketDoesNotMatchLobby"
        | "LinkedDeviceAlreadyClaimed"
        | "DeviceAlreadyLinked"
        | "DeviceNotLinked"
        | "PartialFailure"
        | "PublisherNotSet"
        | "ServiceUnavailable"
        | "VersionNotFound"
        | "RevisionNotFound"
        | "InvalidPublisherId"
        | "DownstreamServiceUnavailable"
        | "APINotIncludedInTitleUsageTier"
        | "DAULimitExceeded"
        | "APIRequestLimitExceeded"
        | "InvalidAPIEndpoint"
        | "BuildNotAvailable"
        | "ConcurrentEditError"
        | "ContentNotFound"
        | "CharacterNotFound"
        | "CloudScriptNotFound"
        | "ContentQuotaExceeded"
        | "InvalidCharacterStatistics"
        | "PhotonNotEnabledForTitle"
        | "PhotonApplicationNotFound"
        | "PhotonApplicationNotAssociatedWithTitle"
        | "InvalidEmailOrPassword"
        | "FacebookAPIError"
        | "InvalidContentType"
        | "KeyLengthExceeded"
        | "DataLengthExceeded"
        | "TooManyKeys"
        | "FreeTierCannotHaveVirtualCurrency"
        | "MissingAmazonSharedKey"
        | "AmazonValidationError"
        | "InvalidPSNIssuerId"
        | "PSNInaccessible"
        | "ExpiredAuthToken"
        | "FailedToGetEntitlements"
        | "FailedToConsumeEntitlement"
        | "TradeAcceptingUserNotAllowed"
        | "TradeInventoryItemIsAssignedToCharacter"
        | "TradeInventoryItemIsBundle"
        | "TradeStatusNotValidForCancelling"
        | "TradeStatusNotValidForAccepting"
        | "TradeDoesNotExist"
        | "TradeCancelled"
        | "TradeAlreadyFilled"
        | "TradeWaitForStatusTimeout"
        | "TradeInventoryItemExpired"
        | "TradeMissingOfferedAndAcceptedItems"
        | "TradeAcceptedItemIsBundle"
        | "TradeAcceptedItemIsStackable"
        | "TradeInventoryItemInvalidStatus"
        | "TradeAcceptedCatalogItemInvalid"
        | "TradeAllowedUsersInvalid"
        | "TradeInventoryItemDoesNotExist"
        | "TradeInventoryItemIsConsumed"
        | "TradeInventoryItemIsStackable"
        | "TradeAcceptedItemsMismatch"
        | "InvalidKongregateToken"
        | "FeatureNotConfiguredForTitle"
        | "NoMatchingCatalogItemForReceipt"
        | "InvalidCurrencyCode"
        | "NoRealMoneyPriceForCatalogItem"
        | "TradeInventoryItemIsNotTradable"
        | "TradeAcceptedCatalogItemIsNotTradable"
        | "UsersAlreadyFriends"
        | "LinkedIdentifierAlreadyClaimed"
        | "CustomIdNotLinked"
        | "TotalDataSizeExceeded"
        | "DeleteKeyConflict"
        | "InvalidXboxLiveToken"
        | "ExpiredXboxLiveToken"
        | "ResettableStatisticVersionRequired"
        | "NotAuthorizedByTitle"
        | "NoPartnerEnabled"
        | "InvalidPartnerResponse"
        | "APINotEnabledForGameServerAccess"
        | "StatisticNotFound"
        | "StatisticNameConflict"
        | "StatisticVersionClosedForWrites"
        | "StatisticVersionInvalid"
        | "APIClientRequestRateLimitExceeded"
        | "InvalidJSONContent"
        | "InvalidDropTable"
        | "StatisticVersionAlreadyIncrementedForScheduledInterval"
        | "StatisticCountLimitExceeded"
        | "StatisticVersionIncrementRateExceeded"
        | "ContainerKeyInvalid"
        | "CloudScriptExecutionTimeLimitExceeded"
        | "NoWritePermissionsForEvent"
        | "CloudScriptFunctionArgumentSizeExceeded"
        | "CloudScriptAPIRequestCountExceeded"
        | "CloudScriptAPIRequestError"
        | "CloudScriptHTTPRequestError"
        | "InsufficientGuildRole"
        | "GuildNotFound"
        | "OverLimit"
        | "EventNotFound"
        | "InvalidEventField"
        | "InvalidEventName"
        | "CatalogNotConfigured"
        | "OperationNotSupportedForPlatform"
        | "SegmentNotFound"
        | "StoreNotFound"
        | "InvalidStatisticName"
        | "TitleNotQualifiedForLimit"
        | "InvalidServiceLimitLevel"
        | "ServiceLimitLevelInTransition"
        | "CouponAlreadyRedeemed"
        | "GameServerBuildSizeLimitExceeded"
        | "GameServerBuildCountLimitExceeded"
        | "VirtualCurrencyCountLimitExceeded"
        | "VirtualCurrencyCodeExists"
        | "TitleNewsItemCountLimitExceeded"
        | "InvalidTwitchToken"
        | "TwitchResponseError"
        | "ProfaneDisplayName"
        | "UserAlreadyAdded"
        | "InvalidVirtualCurrencyCode"
        | "VirtualCurrencyCannotBeDeleted"
        | "IdentifierAlreadyClaimed"
        | "IdentifierNotLinked"
        | "InvalidContinuationToken"
        | "ExpiredContinuationToken"
        | "InvalidSegment"
        | "InvalidSessionId"
        | "SessionLogNotFound"
        | "InvalidSearchTerm"
        | "TwoFactorAuthenticationTokenRequired"
        | "GameServerHostCountLimitExceeded"
        | "PlayerTagCountLimitExceeded"
        | "RequestAlreadyRunning"
        | "ActionGroupNotFound"
        | "MaximumSegmentBulkActionJobsRunning"
        | "NoActionsOnPlayersInSegmentJob"
        | "DuplicateStatisticName"
        | "ScheduledTaskNameConflict"
        | "ScheduledTaskCreateConflict"
        | "InvalidScheduledTaskName"
        | "InvalidTaskSchedule"
        | "SteamNotEnabledForTitle"
        | "LimitNotAnUpgradeOption"
        | "NoSecretKeyEnabledForCloudScript"
        | "TaskNotFound"
        | "TaskInstanceNotFound"
        | "InvalidIdentityProviderId"
        | "MisconfiguredIdentityProvider"
        | "InvalidScheduledTaskType"
        | "BillingInformationRequired"
        | "LimitedEditionItemUnavailable"
        | "InvalidAdPlacementAndReward"
        | "AllAdPlacementViewsAlreadyConsumed"
        | "GoogleOAuthNotConfiguredForTitle"
        | "GoogleOAuthError"
        | "UserNotFriend"
        | "InvalidSignature"
        | "InvalidPublicKey"
        | "GoogleOAuthNoIdTokenIncludedInResponse"
        | "StatisticUpdateInProgress"
        | "LeaderboardVersionNotAvailable"
        | "StatisticAlreadyHasPrizeTable"
        | "PrizeTableHasOverlappingRanks"
        | "PrizeTableHasMissingRanks"
        | "PrizeTableRankStartsAtZero"
        | "InvalidStatistic"
        | "ExpressionParseFailure"
        | "ExpressionInvokeFailure"
        | "ExpressionTooLong"
        | "DataUpdateRateExceeded"
        | "RestrictedEmailDomain"
        | "EncryptionKeyDisabled"
        | "EncryptionKeyMissing"
        | "EncryptionKeyBroken"
        | "NoSharedSecretKeyConfigured"
        | "SecretKeyNotFound"
        | "PlayerSecretAlreadyConfigured"
        | "APIRequestsDisabledForTitle"
        | "InvalidSharedSecretKey"
        | "PrizeTableHasNoRanks"
        | "ProfileDoesNotExist"
        | "ContentS3OriginBucketNotConfigured"
        | "InvalidEnvironmentForReceipt"
        | "EncryptedRequestNotAllowed"
        | "SignedRequestNotAllowed"
        | "RequestViewConstraintParamsNotAllowed"
        | "BadPartnerConfiguration"
        | "XboxBPCertificateFailure"
        | "XboxXASSExchangeFailure"
        | "InvalidEntityId"
        | "StatisticValueAggregationOverflow"
        | "EmailMessageFromAddressIsMissing"
        | "EmailMessageToAddressIsMissing"
        | "SmtpServerAuthenticationError"
        | "SmtpServerLimitExceeded"
        | "SmtpServerInsufficientStorage"
        | "SmtpServerCommunicationError"
        | "SmtpServerGeneralFailure"
        | "EmailClientTimeout"
        | "EmailClientCanceledTask"
        | "EmailTemplateMissing"
        | "InvalidHostForTitleId"
        | "EmailConfirmationTokenDoesNotExist"
        | "EmailConfirmationTokenExpired"
        | "AccountDeleted"
        | "PlayerSecretNotConfigured"
        | "InvalidSignatureTime"
        | "NoContactEmailAddressFound"
        | "InvalidAuthToken"
        | "AuthTokenDoesNotExist"
        | "AuthTokenExpired"
        | "AuthTokenAlreadyUsedToResetPassword"
        | "MembershipNameTooLong"
        | "MembershipNotFound"
        | "GoogleServiceAccountInvalid"
        | "GoogleServiceAccountParseFailure"
        | "EntityTokenMissing"
        | "EntityTokenInvalid"
        | "EntityTokenExpired"
        | "EntityTokenRevoked"
        | "InvalidProductForSubscription"
        | "XboxInaccessible"
        | "SubscriptionAlreadyTaken"
        | "SmtpAddonNotEnabled"
        | "APIConcurrentRequestLimitExceeded"
        | "XboxRejectedXSTSExchangeRequest"
        | "VariableNotDefined"
        | "TemplateVersionNotDefined"
        | "FileTooLarge"
        | "TitleDeleted"
        | "TitleContainsUserAccounts"
        | "TitleDeletionPlayerCleanupFailure"
        | "EntityFileOperationPending"
        | "NoEntityFileOperationPending"
        | "EntityProfileVersionMismatch"
        | "TemplateVersionTooOld"
        | "MembershipDefinitionInUse"
        | "PaymentPageNotConfigured"
        | "FailedLoginAttemptRateLimitExceeded"
        | "EntityBlockedByGroup"
        | "RoleDoesNotExist"
        | "EntityIsAlreadyMember"
        | "DuplicateRoleId"
        | "GroupInvitationNotFound"
        | "GroupApplicationNotFound"
        | "OutstandingInvitationAcceptedInstead"
        | "OutstandingApplicationAcceptedInstead"
        | "RoleIsGroupDefaultMember"
        | "RoleIsGroupAdmin"
        | "RoleNameNotAvailable"
        | "GroupNameNotAvailable"
        | "EmailReportAlreadySent"
        | "EmailReportRecipientBlacklisted"
        | "EventNamespaceNotAllowed"
        | "EventEntityNotAllowed"
        | "InvalidEntityType"
        | "NullTokenResultFromAad"
        | "InvalidTokenResultFromAad"
        | "NoValidCertificateForAad"
        | "InvalidCertificateForAad"
        | "DuplicateDropTableId"
        | "MultiplayerServerError"
        | "MultiplayerServerTooManyRequests"
        | "MultiplayerServerNoContent"
        | "MultiplayerServerBadRequest"
        | "MultiplayerServerUnauthorized"
        | "MultiplayerServerForbidden"
        | "MultiplayerServerNotFound"
        | "MultiplayerServerConflict"
        | "MultiplayerServerInternalServerError"
        | "MultiplayerServerUnavailable"
        | "ExplicitContentDetected"
        | "PIIContentDetected"
        | "InvalidScheduledTaskParameter"
        | "PerEntityEventRateLimitExceeded"
        | "TitleDefaultLanguageNotSet"
        | "EmailTemplateMissingDefaultVersion"
        | "FacebookInstantGamesIdNotLinked"
        | "InvalidFacebookInstantGamesSignature"
        | "FacebookInstantGamesAuthNotConfiguredForTitle"
        | "MatchmakingEntityInvalid"
        | "MatchmakingPlayerAttributesInvalid"
        | "MatchmakingCreateRequestMissing"
        | "MatchmakingCreateRequestCreatorMissing"
        | "MatchmakingCreateRequestCreatorIdMissing"
        | "MatchmakingCreateRequestUserListMissing"
        | "MatchmakingCreateRequestGiveUpAfterInvalid"
        | "MatchmakingTicketIdMissing"
        | "MatchmakingMatchIdMissing"
        | "MatchmakingMatchIdIdMissing"
        | "MatchmakingQueueNameMissing"
        | "MatchmakingTitleIdMissing"
        | "MatchmakingTicketIdIdMissing"
        | "MatchmakingPlayerIdMissing"
        | "MatchmakingJoinRequestUserMissing"
        | "MatchmakingQueueConfigNotFound"
        | "MatchmakingMatchNotFound"
        | "MatchmakingTicketNotFound"
        | "MatchmakingCreateTicketServerIdentityInvalid"
        | "MatchmakingCreateTicketClientIdentityInvalid"
        | "MatchmakingGetTicketUserMismatch"
        | "MatchmakingJoinTicketServerIdentityInvalid"
        | "MatchmakingJoinTicketUserIdentityMismatch"
        | "MatchmakingCancelTicketServerIdentityInvalid"
        | "MatchmakingCancelTicketUserIdentityMismatch"
        | "MatchmakingGetMatchIdentityMismatch"
        | "MatchmakingPlayerIdentityMismatch"
        | "MatchmakingAlreadyJoinedTicket"
        | "MatchmakingTicketAlreadyCompleted"
        | "MatchmakingQueueNameInvalid"
        | "MatchmakingQueueConfigInvalid"
        | "MatchmakingMemberProfileInvalid"
        | "WriteAttemptedDuringExport"
        | "NintendoSwitchDeviceIdNotLinked"
        | "MatchmakingNotEnabled";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetAllSegmentsRequest */
    interface GetAllSegmentsRequest {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetAllSegmentsResult */
    interface GetAllSegmentsResult {
        /** Array of segments for this title. */
        Segments?: GetSegmentResult[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCatalogItemsRequest */
    interface GetCatalogItemsRequest {
        /** Which catalog is being requested. If null, uses the default catalog. */
        CatalogVersion?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCatalogItemsResult */
    interface GetCatalogItemsResult {
        /** Array of items which can be purchased. */
        Catalog?: CatalogItem[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterDataRequest */
    interface GetCharacterDataRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /**
         * The version that currently exists according to the caller. The call will return the data for all of the keys if the
         * version in the system is greater than this.
         */
        IfChangedFromDataVersion?: number,
        /** Specific keys to search for in the custom user data. */
        Keys?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterDataResult */
    interface GetCharacterDataResult {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** User specific data for this title. */
        Data?: { [key: string]: UserDataRecord },
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterInventoryRequest */
    interface GetCharacterInventoryRequest {
        /** Used to limit results to only those from a specific catalog version. */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterInventoryResult */
    interface GetCharacterInventoryResult {
        /** Unique identifier of the character for this inventory. */
        CharacterId?: string,
        /** Array of inventory items belonging to the character. */
        Inventory?: ItemInstance[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
        /** Array of virtual currency balance(s) belonging to the character. */
        VirtualCurrency?: { [key: string]: number },
        /** Array of remaining times and timestamps for virtual currencies. */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterLeaderboardRequest */
    interface GetCharacterLeaderboardRequest {
        /** Optional character type on which to filter the leaderboard entries. */
        CharacterType?: string,
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** First entry in the leaderboard to be retrieved. */
        StartPosition: number,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterLeaderboardResult */
    interface GetCharacterLeaderboardResult {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterStatisticsRequest */
    interface GetCharacterStatisticsRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterStatisticsResult */
    interface GetCharacterStatisticsResult {
        /** Unique identifier of the character for the statistics. */
        CharacterId?: string,
        /** Character statistics for the requested user. */
        CharacterStatistics?: { [key: string]: number },
        /** PlayFab unique identifier of the user whose character statistics are being returned. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetContentDownloadUrlRequest */
    interface GetContentDownloadUrlRequest {
        /** HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET. */
        HttpMethod?: string,
        /** Key of the content item to fetch, usually formatted as a path, e.g. images/a.png */
        Key: string,
        /**
         * True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest,
         * non-cached version of the content during development, set this to false. Default is true.
         */
        ThruCDN?: boolean,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetContentDownloadUrlResult */
    interface GetContentDownloadUrlResult {
        /** URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour. */
        URL?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetFriendLeaderboardRequest */
    interface GetFriendLeaderboardRequest {
        /** Indicates whether Facebook friends should be included in the response. Default is true. */
        IncludeFacebookFriends?: boolean,
        /** Indicates whether Steam service friends should be included in the response. Default is true. */
        IncludeSteamFriends?: boolean,
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** The player whose friend leaderboard to get */
        PlayFabId: string,
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints,
        /** Position in the leaderboard to start this listing (defaults to the first entry). */
        StartPosition: number,
        /** Statistic used to rank friends for this leaderboard. */
        StatisticName: string,
        /** The version of the leaderboard to get. */
        Version?: number,
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetFriendsListRequest */
    interface GetFriendsListRequest {
        /** Indicates whether Facebook friends should be included in the response. Default is true. */
        IncludeFacebookFriends?: boolean,
        /** Indicates whether Steam service friends should be included in the response. Default is true. */
        IncludeSteamFriends?: boolean,
        /** PlayFab identifier of the player whose friend list to get. */
        PlayFabId: string,
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints,
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetFriendsListResult */
    interface GetFriendsListResult {
        /** Array of friends found. */
        Friends?: FriendInfo[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundCharacterRequest */
    interface GetLeaderboardAroundCharacterRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Optional character type on which to filter the leaderboard entries. */
        CharacterType?: string,
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundCharacterResult */
    interface GetLeaderboardAroundCharacterResult {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundUserRequest */
    interface GetLeaderboardAroundUserRequest {
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
        /** The version of the leaderboard to get. */
        Version?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundUserResult */
    interface GetLeaderboardAroundUserResult {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[],
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string,
        /** The version of the leaderboard returned. */
        Version: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardForUsersCharactersRequest */
    interface GetLeaderboardForUsersCharactersRequest {
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardForUsersCharactersResult */
    interface GetLeaderboardForUsersCharactersResult {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardRequest */
    interface GetLeaderboardRequest {
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints,
        /** First entry in the leaderboard to be retrieved. */
        StartPosition: number,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
        /** The version of the leaderboard to get. */
        Version?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardResult */
    interface GetLeaderboardResult {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[],
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string,
        /** The version of the leaderboard returned. */
        Version: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoRequest */
    interface GetPlayerCombinedInfoRequest {
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters: GetPlayerCombinedInfoRequestParams,
        /** PlayFabId of the user whose data will be returned */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoRequestParams */
    interface GetPlayerCombinedInfoRequestParams {
        /** Whether to get character inventories. Defaults to false. */
        GetCharacterInventories: boolean,
        /** Whether to get the list of characters. Defaults to false. */
        GetCharacterList: boolean,
        /** Whether to get player profile. Defaults to false. */
        GetPlayerProfile: boolean,
        /** Whether to get player statistics. Defaults to false. */
        GetPlayerStatistics: boolean,
        /** Whether to get title data. Defaults to false. */
        GetTitleData: boolean,
        /** Whether to get the player's account Info. Defaults to false */
        GetUserAccountInfo: boolean,
        /** Whether to get the player's custom data. Defaults to false */
        GetUserData: boolean,
        /** Whether to get the player's inventory. Defaults to false */
        GetUserInventory: boolean,
        /** Whether to get the player's read only data. Defaults to false */
        GetUserReadOnlyData: boolean,
        /** Whether to get the player's virtual currency balances. Defaults to false */
        GetUserVirtualCurrency: boolean,
        /** Specific statistics to retrieve. Leave null to get all keys. Has no effect if GetPlayerStatistics is false */
        PlayerStatisticNames?: string[],
        /** Specifies the properties to return from the player profile. Defaults to returning the player's display name. */
        ProfileConstraints?: PlayerProfileViewConstraints,
        /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetTitleData is false */
        TitleDataKeys?: string[],
        /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserData is false */
        UserDataKeys?: string[],
        /**
         * Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserReadOnlyData is
         * false
         */
        UserReadOnlyDataKeys?: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoResult */
    interface GetPlayerCombinedInfoResult {
        /** Results for requested info. */
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoResultPayload */
    interface GetPlayerCombinedInfoResultPayload {
        /** Account information for the user. This is always retrieved. */
        AccountInfo?: UserAccountInfo,
        /** Inventories for each character for the user. */
        CharacterInventories?: CharacterInventory[],
        /** List of characters for the user. */
        CharacterList?: CharacterResult[],
        /**
         * The profile of the players. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel,
        /** List of statistics for this player. */
        PlayerStatistics?: StatisticValue[],
        /** Title data for this title. */
        TitleData?: { [key: string]: string | null },
        /** User specific custom data. */
        UserData?: { [key: string]: UserDataRecord },
        /** The version of the UserData that was returned. */
        UserDataVersion: number,
        /** Array of inventory items in the user's current inventory. */
        UserInventory?: ItemInstance[],
        /** User specific read-only data. */
        UserReadOnlyData?: { [key: string]: UserDataRecord },
        /** The version of the Read-Only UserData that was returned. */
        UserReadOnlyDataVersion: number,
        /** Dictionary of virtual currency balance(s) belonging to the user. */
        UserVirtualCurrency?: { [key: string]: number },
        /** Dictionary of remaining times and timestamps for virtual currencies. */
        UserVirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerProfileRequest */
    interface GetPlayerProfileRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerProfileResult */
    interface GetPlayerProfileResult {
        /**
         * The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerSegmentsResult */
    interface GetPlayerSegmentsResult {
        /** Array of segments the requested player currently belongs to. */
        Segments?: GetSegmentResult[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayersInSegmentRequest */
    interface GetPlayersInSegmentRequest {
        /** Continuation token if retrieving subsequent pages of results. */
        ContinuationToken?: string,
        /** Maximum number of profiles to load. Default is 1,000. Maximum is 10,000. */
        MaxBatchSize?: number,
        /**
         * Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging
         * results. Default is 300 (5 minutes). Maximum is 1,800 (30 minutes).
         */
        SecondsToLive?: number,
        /** Unique identifier for this segment. */
        SegmentId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayersInSegmentResult */
    interface GetPlayersInSegmentResult {
        /** Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results. */
        ContinuationToken?: string,
        /** Array of player profiles in this segment. */
        PlayerProfiles?: PlayerProfile[],
        /** Count of profiles matching this segment. */
        ProfilesInSegment: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayersSegmentsRequest */
    interface GetPlayersSegmentsRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticsRequest */
    interface GetPlayerStatisticsRequest {
        /** user for whom statistics are being requested */
        PlayFabId: string,
        /** statistics to return */
        StatisticNames?: string[],
        /**
         * statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be
         * returned)
         */
        StatisticNameVersions?: StatisticNameVersion[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticsResult */
    interface GetPlayerStatisticsResult {
        /** PlayFab unique identifier of the user whose statistics are being returned */
        PlayFabId?: string,
        /** User statistics for the requested user. */
        Statistics?: StatisticValue[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticVersionsRequest */
    interface GetPlayerStatisticVersionsRequest {
        /** unique name of the statistic */
        StatisticName?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticVersionsResult */
    interface GetPlayerStatisticVersionsResult {
        /** version change history of the statistic */
        StatisticVersions?: PlayerStatisticVersion[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerTagsRequest */
    interface GetPlayerTagsRequest {
        /** Optional namespace to filter results by */
        Namespace?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerTagsResult */
    interface GetPlayerTagsResult {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Canonical tags (including namespace and tag's name) for the requested user */
        Tags: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookIDsRequest */
    interface GetPlayFabIDsFromFacebookIDsRequest {
        /** Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. */
        FacebookIDs: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookIDsResult */
    interface GetPlayFabIDsFromFacebookIDsResult {
        /** Mapping of Facebook identifiers to PlayFab identifiers. */
        Data?: FacebookPlayFabIdPair[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookInstantGamesIdsRequest */
    interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest {
        /** Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers. */
        FacebookInstantGamesIds: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookInstantGamesIdsResult */
    interface GetPlayFabIDsFromFacebookInstantGamesIdsResult {
        /** Mapping of Facebook Instant Games identifiers to PlayFab identifiers. */
        Data?: FacebookInstantGamesPlayFabIdPair[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest */
    interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest {
        /** Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. */
        NintendoSwitchDeviceIds: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult */
    interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult {
        /** Mapping of Nintendo Switch Device identifiers to PlayFab identifiers. */
        Data?: NintendoSwitchPlayFabIdPair[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromSteamIDsRequest */
    interface GetPlayFabIDsFromSteamIDsRequest {
        /** Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. */
        SteamStringIDs?: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromSteamIDsResult */
    interface GetPlayFabIDsFromSteamIDsResult {
        /** Mapping of Steam identifiers to PlayFab identifiers. */
        Data?: SteamPlayFabIdPair[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPublisherDataRequest */
    interface GetPublisherDataRequest {
        /** array of keys to get back data from the Publisher data blob, set by the admin tools */
        Keys: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPublisherDataResult */
    interface GetPublisherDataResult {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetRandomResultTablesRequest */
    interface GetRandomResultTablesRequest {
        /**
         * Specifies the catalog version that should be used to retrieve the Random Result Tables. If unspecified, uses
         * default/primary catalog.
         */
        CatalogVersion?: string,
        /** The unique identifier of the Random Result Table to use. */
        TableIDs: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetRandomResultTablesResult */
    interface GetRandomResultTablesResult {
        /** array of random result tables currently available */
        Tables?: { [key: string]: RandomResultTableListing },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetSegmentResult */
    interface GetSegmentResult {
        /** Identifier of the segments AB Test, if it is attached to one. */
        ABTestParent?: string,
        /** Unique identifier for this segment. */
        Id: string,
        /** Segment name. */
        Name?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetSharedGroupDataRequest */
    interface GetSharedGroupDataRequest {
        /** If true, return the list of all members of the shared group. */
        GetMembers?: boolean,
        /**
         * Specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array
         * indicates that no keys should be returned).
         */
        Keys?: string[],
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetSharedGroupDataResult */
    interface GetSharedGroupDataResult {
        /** Data for the requested keys. */
        Data?: { [key: string]: SharedGroupDataRecord },
        /** List of PlayFabId identifiers for the members of this group, if requested. */
        Members?: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTimeRequest */
    interface GetTimeRequest {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTimeResult */
    interface GetTimeResult {
        /** Current server time when the request was received, in UTC */
        Time: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleDataRequest */
    interface GetTitleDataRequest {
        /** Specific keys to search for in the title data (leave null to get all keys) */
        Keys?: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleDataResult */
    interface GetTitleDataResult {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleNewsRequest */
    interface GetTitleNewsRequest {
        /** Limits the results to the last n entries. Defaults to 10 if not set. */
        Count?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleNewsResult */
    interface GetTitleNewsResult {
        /** Array of news items. */
        News?: TitleNewsItem[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserAccountInfoRequest */
    interface GetUserAccountInfoRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserAccountInfoResult */
    interface GetUserAccountInfoResult {
        /** Account details for the user whose information was requested. */
        UserInfo?: UserAccountInfo,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserBansRequest */
    interface GetUserBansRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserBansResult */
    interface GetUserBansResult {
        /** Information about the bans */
        BanData?: BanInfo[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserDataRequest */
    interface GetUserDataRequest {
        /**
         * The version that currently exists according to the caller. The call will return the data for all of the keys if the
         * version in the system is greater than this.
         */
        IfChangedFromDataVersion?: number,
        /** Specific keys to search for in the custom user data. */
        Keys?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserDataResult */
    interface GetUserDataResult {
        /** User specific data for this title. */
        Data?: { [key: string]: UserDataRecord },
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number,
        /** PlayFab unique identifier of the user whose custom data is being returned. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserInventoryRequest */
    interface GetUserInventoryRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserInventoryResult */
    interface GetUserInventoryResult {
        /** Array of inventory items belonging to the user. */
        Inventory?: ItemInstance[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
        /** Array of virtual currency balance(s) belonging to the user. */
        VirtualCurrency?: { [key: string]: number },
        /** Array of remaining times and timestamps for virtual currencies. */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantCharacterToUserRequest */
    interface GrantCharacterToUserRequest {
        /** Non-unique display name of the character being granted (1-20 characters in length). */
        CharacterName: string,
        /** Type of the character being granted; statistics can be sliced based on this value. */
        CharacterType: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantCharacterToUserResult */
    interface GrantCharacterToUserResult {
        /** Unique identifier tagged to this character. */
        CharacterId?: string,
    }

    /**
     * Result of granting an item to a user
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantedItemInstance
     */
    interface GrantedItemInstance {
        /** Game specific comment associated with this instance when it was added to the user inventory. */
        Annotation?: string,
        /** Array of unique items that were awarded when this catalog item was purchased. */
        BundleContents?: string[],
        /**
         * Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
         * container.
         */
        BundleParent?: string,
        /** Catalog version for the inventory item, when this instance was created. */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** A set of custom key-value pairs on the inventory item. */
        CustomData?: { [key: string]: string | null },
        /** CatalogItem.DisplayName at the time this item was purchased. */
        DisplayName?: string,
        /** Timestamp for when this instance will expire. */
        Expiration?: string,
        /** Class name for the inventory item, as defined in the catalog. */
        ItemClass?: string,
        /** Unique identifier for the inventory item, as defined in the catalog. */
        ItemId?: string,
        /** Unique item identifier for this specific instance of the item. */
        ItemInstanceId?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
        /** Timestamp for when this instance was purchased. */
        PurchaseDate?: string,
        /** Total number of remaining uses, if this is a consumable item. */
        RemainingUses?: number,
        /** Result of this operation. */
        Result: boolean,
        /** Currency type for the cost of the catalog item. */
        UnitCurrency?: string,
        /** Cost of the catalog item in the given currency. */
        UnitPrice: number,
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToCharacterRequest */
    interface GrantItemsToCharacterRequest {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string,
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Array of itemIds to grant to the user. */
        ItemIds?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToCharacterResult */
    interface GrantItemsToCharacterResult {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUserRequest */
    interface GrantItemsToUserRequest {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string,
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string,
        /** Array of itemIds to grant to the user. */
        ItemIds: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUserResult */
    interface GrantItemsToUserResult {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUsersRequest */
    interface GrantItemsToUsersRequest {
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string,
        /** Array of items to grant and the users to whom the items are to be granted. */
        ItemGrants: ItemGrant[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUsersResult */
    interface GrantItemsToUsersResult {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ItemGrant */
    interface ItemGrant {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null },
        /** Unique identifier of the catalog item to be granted to the user. */
        ItemId: string,
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /**
     * A unique instance of an item in a user's inventory. Note, to retrieve additional information for an item instance (such
     * as Tags, Description, or Custom Data that are set on the root catalog item), a call to GetCatalogItems is required. The
     * Item ID of the instance can then be matched to a catalog entry, which contains the additional information. Also note
     * that Custom Data is only set here from a call to UpdateUserInventoryItemCustomData.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ItemInstance
     */
    interface ItemInstance {
        /** Game specific comment associated with this instance when it was added to the user inventory. */
        Annotation?: string,
        /** Array of unique items that were awarded when this catalog item was purchased. */
        BundleContents?: string[],
        /**
         * Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
         * container.
         */
        BundleParent?: string,
        /** Catalog version for the inventory item, when this instance was created. */
        CatalogVersion?: string,
        /** A set of custom key-value pairs on the inventory item. */
        CustomData?: { [key: string]: string | null },
        /** CatalogItem.DisplayName at the time this item was purchased. */
        DisplayName?: string,
        /** Timestamp for when this instance will expire. */
        Expiration?: string,
        /** Class name for the inventory item, as defined in the catalog. */
        ItemClass?: string,
        /** Unique identifier for the inventory item, as defined in the catalog. */
        ItemId?: string,
        /** Unique item identifier for this specific instance of the item. */
        ItemInstanceId?: string,
        /** Timestamp for when this instance was purchased. */
        PurchaseDate?: string,
        /** Total number of remaining uses, if this is a consumable item. */
        RemainingUses?: number,
        /** Currency type for the cost of the catalog item. */
        UnitCurrency?: string,
        /** Cost of the catalog item in the given currency. */
        UnitPrice: number,
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LinkedPlatformAccountModel */
    interface LinkedPlatformAccountModel {
        /** Linked account email of the user on the platform, if available */
        Email?: string,
        /** Authentication platform */
        Platform?: LoginIdentityProvider,
        /** Unique account identifier of the user on the platform */
        PlatformUserId?: string,
        /** Linked account username of the user on the platform, if available */
        Username?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ListUsersCharactersRequest */
    interface ListUsersCharactersRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ListUsersCharactersResult */
    interface ListUsersCharactersResult {
        /** The requested list of characters. */
        Characters?: CharacterResult[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LocationModel */
    interface LocationModel {
        /** City name. */
        City?: string,
        /** The two-character continent code for this location */
        ContinentCode?: ContinentCode,
        /** The two-character ISO 3166-1 country code for the country associated with the location */
        CountryCode?: CountryCode,
        /** Latitude coordinate of the geographic location. */
        Latitude?: number,
        /** Longitude coordinate of the geographic location. */
        Longitude?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LoginIdentityProvider */
    type LoginIdentityProvider = "Unknown"
        | "PlayFab"
        | "Custom"
        | "GameCenter"
        | "GooglePlay"
        | "Steam"
        | "XBoxLive"
        | "PSN"
        | "Kongregate"
        | "Facebook"
        | "IOSDevice"
        | "AndroidDevice"
        | "Twitch"
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LogStatement */
    interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any,
        /** 'Debug', 'Info', or 'Error' */
        Level?: string,
        Message?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MembershipModel */
    interface MembershipModel {
        /** Whether this membership is active. That is, whether the MembershipExpiration time has been reached. */
        IsActive: boolean,
        /** The time this membership expires */
        MembershipExpiration: string,
        /** The id of the membership */
        MembershipId?: string,
        /**
         * Membership expirations can be explicitly overridden (via game manager or the admin api). If this membership has been
         * overridden, this will be the new expiration time.
         */
        OverrideExpiration?: string,
        /** The list of subscriptions that this player has for this membership */
        Subscriptions?: SubscriptionModel[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyCharacterVirtualCurrencyResult */
    interface ModifyCharacterVirtualCurrencyResult {
        /** Balance of the virtual currency after modification. */
        Balance: number,
        /** Name of the virtual currency which was modified. */
        VirtualCurrency?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyItemUsesRequest */
    interface ModifyItemUsesRequest {
        /** Unique instance identifier of the item to be modified. */
        ItemInstanceId: string,
        /** PlayFab unique identifier of the user whose item is being modified. */
        PlayFabId: string,
        /** Number of uses to add to the item. Can be negative to remove uses. */
        UsesToAdd: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyItemUsesResult */
    interface ModifyItemUsesResult {
        /** Unique instance identifier of the item with uses consumed. */
        ItemInstanceId?: string,
        /** Number of uses remaining on the item. */
        RemainingUses: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyUserVirtualCurrencyResult */
    interface ModifyUserVirtualCurrencyResult {
        /** Balance of the virtual currency after modification. */
        Balance: number,
        /**
         * Amount added or subtracted from the user's virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase
         * over this value will be discarded.
         */
        BalanceChange: number,
        /** User currency was subtracted from. */
        PlayFabId?: string,
        /** Name of the virtual currency which was modified. */
        VirtualCurrency?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromCharacterRequest */
    interface MoveItemToCharacterFromCharacterRequest {
        /** Unique identifier of the character that currently has the item. */
        GivingCharacterId: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique identifier of the character that will be receiving the item. */
        ReceivingCharacterId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromCharacterResult */
    interface MoveItemToCharacterFromCharacterResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromUserRequest */
    interface MoveItemToCharacterFromUserRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromUserResult */
    interface MoveItemToCharacterFromUserResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToUserFromCharacterRequest */
    interface MoveItemToUserFromCharacterRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToUserFromCharacterResult */
    interface MoveItemToUserFromCharacterResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.NintendoSwitchPlayFabIdPair */
    interface NintendoSwitchPlayFabIdPair {
        /** Unique Nintendo Switch Device identifier for a user. */
        NintendoSwitchDeviceId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier. */
        PlayFabId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.NotifyMatchmakerPlayerLeftRequest */
    interface NotifyMatchmakerPlayerLeftRequest {
        /** Unique identifier of the Game Instance the user is leaving. */
        LobbyId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.NotifyMatchmakerPlayerLeftResult */
    interface NotifyMatchmakerPlayerLeftResult {
        /** State of user leaving the Game Server Instance. */
        PlayerState?: PlayerConnectionState,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerConnectionState */
    type PlayerConnectionState = "Unassigned"
        | "Connecting"
        | "Participating"
        | "Participated";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerLeaderboardEntry */
    interface PlayerLeaderboardEntry {
        /** Title-specific display name of the user for this leaderboard entry. */
        DisplayName?: string,
        /** PlayFab unique identifier of the user for this leaderboard entry. */
        PlayFabId?: string,
        /** User's overall position in the leaderboard. */
        Position: number,
        /** The profile of the user, if requested. */
        Profile?: PlayerProfileModel,
        /** Specific value of the user's statistic. */
        StatValue: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerLinkedAccount */
    interface PlayerLinkedAccount {
        /** Linked account's email */
        Email?: string,
        /** Authentication platform */
        Platform?: LoginIdentityProvider,
        /** Platform user identifier */
        PlatformUserId?: string,
        /** Linked account's username */
        Username?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerLocation */
    interface PlayerLocation {
        /** City of the player's geographic location. */
        City?: string,
        /** The two-character continent code for this location */
        ContinentCode: ContinentCode,
        /** The two-character ISO 3166-1 country code for the country associated with the location */
        CountryCode: CountryCode,
        /** Latitude coordinate of the player's geographic location. */
        Latitude?: number,
        /** Longitude coordinate of the player's geographic location. */
        Longitude?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerProfile */
    interface PlayerProfile {
        /** Array of ad campaigns player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttribution[],
        /** Image URL of the player's avatar. */
        AvatarUrl?: string,
        /** Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date. */
        BannedUntil?: string,
        /** Array of contact email addresses associated with the player */
        ContactEmailAddresses?: ContactEmailInfo[],
        /** Player record created */
        Created?: string,
        /** Player Display Name */
        DisplayName?: string,
        /** Last login */
        LastLogin?: string,
        /** Array of third party accounts linked to this player */
        LinkedAccounts?: PlayerLinkedAccount[],
        /** Dictionary of player's locations by type. */
        Locations?: { [key: string]: PlayerLocation },
        /** Player account origination */
        Origination?: LoginIdentityProvider,
        /** PlayFab Player ID */
        PlayerId?: string,
        /** Array of player statistics */
        PlayerStatistics?: PlayerStatistic[],
        /** Publisher this player belongs to */
        PublisherId?: string,
        /** Array of configured push notification end points */
        PushNotificationRegistrations?: PushNotificationRegistration[],
        /** Dictionary of player's statistics using only the latest version's value */
        Statistics?: { [key: string]: number },
        /** List of player's tags for segmentation. */
        Tags?: string[],
        /** Title ID this profile applies to */
        TitleId?: string,
        /** A sum of player's total purchases in USD across all currencies. */
        TotalValueToDateInUSD?: number,
        /** Dictionary of player's total purchases by currency. */
        ValuesToDate?: { [key: string]: number },
        /** Dictionary of player's virtual currency balances */
        VirtualCurrencyBalances?: { [key: string]: number },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerProfileModel */
    interface PlayerProfileModel {
        /** List of advertising campaigns the player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttributionModel[],
        /** URL of the player's avatar image */
        AvatarUrl?: string,
        /** If the player is currently banned, the UTC Date when the ban expires */
        BannedUntil?: string,
        /** List of all contact email info associated with the player account */
        ContactEmailAddresses?: ContactEmailInfoModel[],
        /** Player record created */
        Created?: string,
        /** Player display name */
        DisplayName?: string,
        /** UTC time when the player most recently logged in to the title */
        LastLogin?: string,
        /** List of all authentication systems linked to this player account */
        LinkedAccounts?: LinkedPlatformAccountModel[],
        /** List of geographic locations from which the player has logged in to the title */
        Locations?: LocationModel[],
        /** List of memberships for the player, along with whether are expired. */
        Memberships?: MembershipModel[],
        /** Player account origination */
        Origination?: LoginIdentityProvider,
        /** PlayFab player account unique identifier */
        PlayerId?: string,
        /** Publisher this player belongs to */
        PublisherId?: string,
        /** List of configured end points registered for sending the player push notifications */
        PushNotificationRegistrations?: PushNotificationRegistrationModel[],
        /** List of leaderboard statistic values for the player */
        Statistics?: StatisticModel[],
        /** List of player's tags for segmentation */
        Tags?: TagModel[],
        /** Title ID this player profile applies to */
        TitleId?: string,
        /**
         * Sum of the player's purchases made with real-money currencies, converted to US dollars equivalent and represented as a
         * whole number of cents (1/100 USD). For example, 999 indicates nine dollars and ninety-nine cents.
         */
        TotalValueToDateInUSD?: number,
        /** List of the player's lifetime purchase totals, summed by real-money currency */
        ValuesToDate?: ValueToDateModel[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerProfileViewConstraints */
    interface PlayerProfileViewConstraints {
        /** Whether to show player's avatar URL. Defaults to false */
        ShowAvatarUrl: boolean,
        /** Whether to show the banned until time. Defaults to false */
        ShowBannedUntil: boolean,
        /** Whether to show campaign attributions. Defaults to false */
        ShowCampaignAttributions: boolean,
        /** Whether to show contact email addresses. Defaults to false */
        ShowContactEmailAddresses: boolean,
        /** Whether to show the created date. Defaults to false */
        ShowCreated: boolean,
        /** Whether to show the display name. Defaults to false */
        ShowDisplayName: boolean,
        /** Whether to show the last login time. Defaults to false */
        ShowLastLogin: boolean,
        /** Whether to show the linked accounts. Defaults to false */
        ShowLinkedAccounts: boolean,
        /** Whether to show player's locations. Defaults to false */
        ShowLocations: boolean,
        /** Whether to show player's membership information. Defaults to false */
        ShowMemberships: boolean,
        /** Whether to show origination. Defaults to false */
        ShowOrigination: boolean,
        /** Whether to show push notification registrations. Defaults to false */
        ShowPushNotificationRegistrations: boolean,
        /** Reserved for future development */
        ShowStatistics: boolean,
        /** Whether to show tags. Defaults to false */
        ShowTags: boolean,
        /** Whether to show the total value to date in usd. Defaults to false */
        ShowTotalValueToDateInUsd: boolean,
        /** Whether to show the values to date. Defaults to false */
        ShowValuesToDate: boolean,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerStatistic */
    interface PlayerStatistic {
        /** Statistic ID */
        Id?: string,
        /** Statistic name */
        Name?: string,
        /** Current statistic value */
        StatisticValue: number,
        /** Statistic version (0 if not a versioned statistic) */
        StatisticVersion: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerStatisticVersion */
    interface PlayerStatisticVersion {
        /** time when the statistic version became active */
        ActivationTime: string,
        /** time when the statistic version became inactive due to statistic version incrementing */
        DeactivationTime?: string,
        /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
        ScheduledActivationTime?: string,
        /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
        ScheduledDeactivationTime?: string,
        /** name of the statistic when the version became active */
        StatisticName?: string,
        /** version of the statistic */
        Version: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationPackage */
    interface PushNotificationPackage {
        /** Numerical badge to display on App icon (iOS only) */
        Badge: number,
        /** This must be a JSON formatted object. For use with developer-created custom Push Notification plugins */
        CustomData?: string,
        /** Icon file to display with the message (Not supported for iOS) */
        Icon?: string,
        /** Content of the message (all platforms) */
        Message: string,
        /** Sound file to play with the message (all platforms) */
        Sound?: string,
        /** Title/Subject of the message. Not supported for iOS */
        Title: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationPlatform */
    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationRegistration */
    interface PushNotificationRegistration {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationRegistrationModel */
    interface PushNotificationRegistrationModel {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RandomResultTableListing */
    interface RandomResultTableListing {
        /** Catalog version this table is associated with */
        CatalogVersion?: string,
        /** Child nodes that indicate what kind of drop table item this actually is. */
        Nodes: ResultTableNode[],
        /** Unique name for this drop table */
        TableId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemCouponRequest */
    interface RedeemCouponRequest {
        /** Catalog version of the coupon. */
        CatalogVersion?: string,
        /** Optional identifier for the Character that should receive the item. If null, item is added to the player */
        CharacterId?: string,
        /** Generated coupon code to redeem. */
        CouponCode: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemCouponResult */
    interface RedeemCouponResult {
        /** Items granted to the player as a result of redeeming the coupon. */
        GrantedItems?: ItemInstance[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemMatchmakerTicketRequest */
    interface RedeemMatchmakerTicketRequest {
        /** Unique identifier of the Game Server Instance that is asking for validation of the authorization ticket. */
        LobbyId: string,
        /** Server authorization ticket passed back from a call to Matchmake or StartGame. */
        Ticket: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemMatchmakerTicketResult */
    interface RedeemMatchmakerTicketResult {
        /** Error value if the ticket was not validated. */
        Error?: string,
        /** Boolean indicating whether the ticket was validated by the PlayFab service. */
        TicketIsValid: boolean,
        /** User account information for the user validated. */
        UserInfo?: UserAccountInfo,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RefreshGameServerInstanceHeartbeatRequest */
    interface RefreshGameServerInstanceHeartbeatRequest {
        /** Unique identifier of the Game Server Instance for which the heartbeat is updated. */
        LobbyId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RefreshGameServerInstanceHeartbeatResult */
    interface RefreshGameServerInstanceHeartbeatResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.Region */
    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RegisterGameRequest */
    interface RegisterGameRequest {
        /** Unique identifier of the build running on the Game Server Instance. */
        Build: string,
        /**
         * Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game
         * Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs).
         */
        GameMode: string,
        /** Previous lobby id if re-registering an existing game. */
        LobbyId?: string,
        /**
         * Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS
         * region and use Tags (below) to specify your custom region.
         */
        Region: Region,
        /** IPV4 address of the Game Server Instance. */
        ServerHost?: string,
        /** IPV4 address of the game server instance. */
        ServerIPV4Address?: string,
        /** IPV6 address (if any) of the game server instance. */
        ServerIPV6Address?: string,
        /** Port number for communication with the Game Server Instance. */
        ServerPort: string,
        /** Public DNS name (if any) of the server */
        ServerPublicDNSName?: string,
        /** Tags for the Game Server Instance */
        Tags?: { [key: string]: string | null },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RegisterGameResponse */
    interface RegisterGameResponse {
        /**
         * Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the
         * game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned.
         */
        LobbyId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveFriendRequest */
    interface RemoveFriendRequest {
        /** PlayFab identifier of the friend account which is to be removed. */
        FriendPlayFabId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemovePlayerTagRequest */
    interface RemovePlayerTagRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique tag for player profile. */
        TagName: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemovePlayerTagResult */
    interface RemovePlayerTagResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveSharedGroupMembersRequest */
    interface RemoveSharedGroupMembersRequest {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[],
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveSharedGroupMembersResult */
    interface RemoveSharedGroupMembersResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ReportPlayerServerRequest */
    interface ReportPlayerServerRequest {
        /** Optional additional comment by reporting player. */
        Comment?: string,
        /** Unique PlayFab identifier of the reported player. */
        ReporteeId: string,
        /** PlayFabId of the reporting player. */
        ReporterId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ReportPlayerServerResult */
    interface ReportPlayerServerResult {
        /** The number of remaining reports which may be filed today by this reporting player. */
        SubmissionsRemaining: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ResultTableNode */
    interface ResultTableNode {
        /** Either an ItemId, or the TableId of another random result table */
        ResultItem: string,
        /** Whether this entry in the table is an item or a link to another table */
        ResultItemType: ResultTableNodeType,
        /** How likely this is to be rolled - larger numbers add more weight */
        Weight: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ResultTableNodeType */
    type ResultTableNodeType = "ItemId"
        | "TableId";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeAllBansForUserRequest */
    interface RevokeAllBansForUserRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeAllBansForUserResult */
    interface RevokeAllBansForUserResult {
        /** Information on the bans that were revoked. */
        BanData?: BanInfo[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeBansRequest */
    interface RevokeBansRequest {
        /** Ids of the bans to be revoked. Maximum 100. */
        BanIds: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeBansResult */
    interface RevokeBansResult {
        /** Information on the bans that were revoked */
        BanData?: BanInfo[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItem */
    interface RevokeInventoryItem {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItemRequest */
    interface RevokeInventoryItemRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItemsRequest */
    interface RevokeInventoryItemsRequest {
        /** Array of player items to revoke, between 1 and 25 items. */
        Items: RevokeInventoryItem[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItemsResult */
    interface RevokeInventoryItemsResult {
        /** Collection of any errors that occurred during processing. */
        Errors?: RevokeItemError[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryResult */
    interface RevokeInventoryResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeItemError */
    interface RevokeItemError {
        /** Specific error that was encountered. */
        Error?: GenericErrorCodes,
        /** Item information that failed to be revoked. */
        Item?: RevokeInventoryItem,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ScriptExecutionError */
    interface ScriptExecutionError {
        /**
         * Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
         * CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
         */
        Error?: string,
        /** Details about the error */
        Message?: string,
        /** Point during the execution of the script at which the error occurred, if any */
        StackTrace?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendCustomAccountRecoveryEmailRequest */
    interface SendCustomAccountRecoveryEmailRequest {
        /** User email address attached to their account */
        Email?: string,
        /** The email template id of the account recovery email template to send. */
        EmailTemplateId: string,
        /** The user's username requesting an account recovery. */
        Username?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendCustomAccountRecoveryEmailResult */
    interface SendCustomAccountRecoveryEmailResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendEmailFromTemplateRequest */
    interface SendEmailFromTemplateRequest {
        /** The email template id of the email template to send. */
        EmailTemplateId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendEmailFromTemplateResult */
    interface SendEmailFromTemplateResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendPushNotificationRequest */
    interface SendPushNotificationRequest {
        /**
         * Allows you to provide precisely formatted json to target devices. This is an advanced feature, allowing you to deliver
         * to custom plugin logic, fields, or functionality not natively supported by PlayFab.
         */
        AdvancedPlatformDelivery?: AdvancedPushPlatformMsg[],
        /** Text of message to send. */
        Message?: string,
        /**
         * Defines all possible push attributes like message, title, icon, etc. Some parameters are device specific - please see
         * the PushNotificationPackage documentation for details.
         */
        Package?: PushNotificationPackage,
        /** PlayFabId of the recipient of the push notification. */
        Recipient: string,
        /** Subject of message to send (may not be displayed in all platforms) */
        Subject?: string,
        /** Target Platforms that should receive the Message or Package. If omitted, we will send to all available platforms. */
        TargetPlatforms?: PushNotificationPlatform[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendPushNotificationResult */
    interface SendPushNotificationResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetFriendTagsRequest */
    interface SetFriendTagsRequest {
        /** PlayFab identifier of the friend account to which the tag(s) should be applied. */
        FriendPlayFabId: string,
        /** PlayFab identifier of the player whose friend is to be updated. */
        PlayFabId: string,
        /** Array of tags to set on the friend account. */
        Tags: string[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceDataRequest */
    interface SetGameServerInstanceDataRequest {
        /** Custom data to set for the specified game server instance. */
        GameServerData: string,
        /** Unique identifier of the Game Instance to be updated, in decimal format. */
        LobbyId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceDataResult */
    interface SetGameServerInstanceDataResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceStateRequest */
    interface SetGameServerInstanceStateRequest {
        /** Unique identifier of the Game Instance to be updated, in decimal format. */
        LobbyId: string,
        /** State to set for the specified game server instance. */
        State: GameInstanceState,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceStateResult */
    interface SetGameServerInstanceStateResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceTagsRequest */
    interface SetGameServerInstanceTagsRequest {
        /** Unique identifier of the Game Server Instance to be updated. */
        LobbyId: string,
        /**
         * Tags to set for the specified Game Server Instance. Note that this is the complete list of tags to be associated with
         * the Game Server Instance.
         */
        Tags: { [key: string]: string | null },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceTagsResult */
    interface SetGameServerInstanceTagsResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPlayerSecretRequest */
    interface SetPlayerSecretRequest {
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPlayerSecretResult */
    interface SetPlayerSecretResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPublisherDataRequest */
    interface SetPublisherDataRequest {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string,
        /** new value to set. Set to null to remove a value */
        Value?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPublisherDataResult */
    interface SetPublisherDataResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetTitleDataRequest */
    interface SetTitleDataRequest {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string,
        /** new value to set. Set to null to remove a value */
        Value?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetTitleDataResult */
    interface SetTitleDataResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SharedGroupDataRecord */
    interface SharedGroupDataRecord {
        /** Timestamp for when this data was last updated. */
        LastUpdated: string,
        /** PlayFabId of the user to last update this value. */
        LastUpdatedBy?: string,
        /** Indicates whether this data can be read by all users (public) or only members of the group (private). */
        Permission?: UserDataPermission,
        /** Data stored for the specified group data key. */
        Value?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticModel */
    interface StatisticModel {
        /** Statistic name */
        Name?: string,
        /** Statistic value */
        Value: number,
        /** Statistic version (0 if not a versioned statistic) */
        Version: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticNameVersion */
    interface StatisticNameVersion {
        /** unique name of the statistic */
        StatisticName: string,
        /** the version of the statistic to be returned */
        Version: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticUpdate */
    interface StatisticUpdate {
        /** unique name of the statistic */
        StatisticName: string,
        /** statistic value for the player */
        Value: number,
        /**
         * for updates to an existing statistic value for a player, the version of the statistic when it was loaded. Null when
         * setting the statistic value for the first time.
         */
        Version?: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticValue */
    interface StatisticValue {
        /** unique name of the statistic */
        StatisticName?: string,
        /** statistic value for the player */
        Value: number,
        /** for updates to an existing statistic value for a player, the version of the statistic when it was loaded */
        Version: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SteamPlayFabIdPair */
    interface SteamPlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
        PlayFabId?: string,
        /** Unique Steam identifier for a user. */
        SteamStringId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubscriptionModel */
    interface SubscriptionModel {
        /** When this subscription expires. */
        Expiration: string,
        /** The time the subscription was orignially purchased */
        InitialSubscriptionTime: string,
        /** Whether this subscription is currently active. That is, if Expiration &gt; now. */
        IsActive: boolean,
        /** The status of this subscription, according to the subscription provider. */
        Status?: SubscriptionProviderStatus,
        /** The id for this subscription */
        SubscriptionId?: string,
        /** The item id for this subscription from the primary catalog */
        SubscriptionItemId?: string,
        /** The provider for this subscription. Apple or Google Play are supported today. */
        SubscriptionProvider?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubscriptionProviderStatus */
    type SubscriptionProviderStatus = "NoError"
        | "Cancelled"
        | "UnknownError"
        | "BillingError"
        | "ProductUnavailable"
        | "CustomerDidNotAcceptPriceChange"
        | "FreeTrial"
        | "PaymentPending";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubtractCharacterVirtualCurrencyRequest */
    interface SubtractCharacterVirtualCurrencyRequest {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubtractUserVirtualCurrencyRequest */
    interface SubtractUserVirtualCurrencyRequest {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number,
        /** PlayFab unique identifier of the user whose virtual currency balance is to be decreased. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.TagModel */
    interface TagModel {
        /** Full value of the tag, including namespace */
        TagValue?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.TitleActivationStatus */
    type TitleActivationStatus = "None"
        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.TitleNewsItem */
    interface TitleNewsItem {
        /** News item text. */
        Body?: string,
        /** Unique identifier of news item. */
        NewsId?: string,
        /** Date and time when the news items was posted. */
        Timestamp: string,
        /** Title of the news item. */
        Title?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlockContainerInstanceRequest */
    interface UnlockContainerInstanceRequest {
        /**
         * Specifies the catalog version that should be used to determine container contents. If unspecified, uses catalog
         * associated with the item instance.
         */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** ItemInstanceId of the container to unlock. */
        ContainerItemInstanceId: string,
        /**
         * ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this
         * parameter is required.
         */
        KeyItemInstanceId?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlockContainerItemRequest */
    interface UnlockContainerItemRequest {
        /**
         * Specifies the catalog version that should be used to determine container contents. If unspecified, uses default/primary
         * catalog.
         */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Catalog ItemId of the container type to unlock. */
        ContainerItemId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlockContainerItemResult */
    interface UnlockContainerItemResult {
        /** Items granted to the player as a result of unlocking the container. */
        GrantedItems?: ItemInstance[],
        /** Unique instance identifier of the container unlocked. */
        UnlockedItemInstanceId?: string,
        /** Unique instance identifier of the key used to unlock the container, if applicable. */
        UnlockedWithItemInstanceId?: string,
        /** Virtual currency granted to the player as a result of unlocking the container. */
        VirtualCurrency?: { [key: string]: number },
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateAvatarUrlRequest */
    interface UpdateAvatarUrlRequest {
        /** URL of the avatar image. If empty, it removes the existing avatar URL. */
        ImageUrl: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /**
     * Represents a single update ban request.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateBanRequest
     */
    interface UpdateBanRequest {
        /** The updated active state for the ban. Null for no change. */
        Active?: boolean,
        /** The id of the ban to be updated. */
        BanId: string,
        /** The updated expiration date for the ban. Null for no change. */
        Expires?: string,
        /** The updated IP address for the ban. Null for no change. */
        IPAddress?: string,
        /** The updated MAC address for the ban. Null for no change. */
        MACAddress?: string,
        /** Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state. */
        Permanent?: boolean,
        /** The updated reason for the ban to be updated. Maximum 140 characters. Null for no change. */
        Reason?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateBansRequest */
    interface UpdateBansRequest {
        /** List of bans to be updated. Maximum 100. */
        Bans: UpdateBanRequest[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateBansResult */
    interface UpdateBansResult {
        /** Information on the bans that were updated */
        BanData?: BanInfo[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterDataRequest */
    interface UpdateCharacterDataRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null },
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[],
        /** Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. */
        Permission?: UserDataPermission,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterDataResult */
    interface UpdateCharacterDataResult {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterStatisticsRequest */
    interface UpdateCharacterStatisticsRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Statistics to be updated with the provided values. */
        CharacterStatistics?: { [key: string]: number },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterStatisticsResult */
    interface UpdateCharacterStatisticsResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdatePlayerStatisticsRequest */
    interface UpdatePlayerStatisticsRequest {
        /**
         * Indicates whether the statistics provided should be set, regardless of the aggregation method set on the statistic.
         * Default is false.
         */
        ForceUpdate?: boolean,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Statistics to be updated with the provided values */
        Statistics: StatisticUpdate[],
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdatePlayerStatisticsResult */
    interface UpdatePlayerStatisticsResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateSharedGroupDataRequest */
    interface UpdateSharedGroupDataRequest {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null },
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[],
        /** Permission to be applied to all user data keys in this request. */
        Permission?: UserDataPermission,
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateSharedGroupDataResult */
    interface UpdateSharedGroupDataResult {
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserDataRequest */
    interface UpdateUserDataRequest {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null },
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[],
        /** Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. */
        Permission?: UserDataPermission,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserDataResult */
    interface UpdateUserDataResult {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserInternalDataRequest */
    interface UpdateUserInternalDataRequest {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null },
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserInventoryItemDataRequest */
    interface UpdateUserInventoryItemDataRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null },
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserAccountInfo */
    interface UserAccountInfo {
        /** User Android device information, if an Android device has been linked */
        AndroidDeviceInfo?: UserAndroidDeviceInfo,
        /** Timestamp indicating when the user account was created */
        Created: string,
        /** Custom ID information, if a custom ID has been assigned */
        CustomIdInfo?: UserCustomIdInfo,
        /** User Facebook information, if a Facebook account has been linked */
        FacebookInfo?: UserFacebookInfo,
        /** Facebook Instant Games account information, if a Facebook Instant Games account has been linked */
        FacebookInstantGamesIdInfo?: UserFacebookInstantGamesIdInfo,
        /** User Gamecenter information, if a Gamecenter account has been linked */
        GameCenterInfo?: UserGameCenterInfo,
        /** User Google account information, if a Google account has been linked */
        GoogleInfo?: UserGoogleInfo,
        /** User iOS device information, if an iOS device has been linked */
        IosDeviceInfo?: UserIosDeviceInfo,
        /** User Kongregate account information, if a Kongregate account has been linked */
        KongregateInfo?: UserKongregateInfo,
        /** Nintendo Switch account information, if a Nintendo Switch account has been linked */
        NintendoSwitchDeviceIdInfo?: UserNintendoSwitchDeviceIdInfo,
        /** OpenID Connect information, if any OpenID Connect accounts have been linked */
        OpenIdInfo?: UserOpenIdInfo[],
        /** Unique identifier for the user account */
        PlayFabId?: string,
        /** Personal information for the user which is considered more sensitive */
        PrivateInfo?: UserPrivateAccountInfo,
        /** User PSN account information, if a PSN account has been linked */
        PsnInfo?: UserPsnInfo,
        /** User Steam information, if a Steam account has been linked */
        SteamInfo?: UserSteamInfo,
        /** Title-specific information for the user account */
        TitleInfo?: UserTitleInfo,
        /** User Twitch account information, if a Twitch account has been linked */
        TwitchInfo?: UserTwitchInfo,
        /** User account name in the PlayFab service */
        Username?: string,
        /** Windows Hello account information, if a Windows Hello account has been linked */
        WindowsHelloInfo?: UserWindowsHelloInfo,
        /** User XBox account information, if a XBox account has been linked */
        XboxInfo?: UserXboxInfo,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserAndroidDeviceInfo */
    interface UserAndroidDeviceInfo {
        /** Android device ID */
        AndroidDeviceId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserCustomIdInfo */
    interface UserCustomIdInfo {
        /** Custom ID */
        CustomId?: string,
    }

    /**
     * Indicates whether a given data key is private (readable only by the player) or public (readable by all players). When a
     * player makes a GetUserData request about another player, only keys marked Public will be returned.
     * https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserDataPermission
     */
    type UserDataPermission = "Private"
        | "Public";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserDataRecord */
    interface UserDataRecord {
        /** Timestamp for when this data was last updated. */
        LastUpdated: string,
        /**
         * Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData
         * requests being made by one player about another player.
         */
        Permission?: UserDataPermission,
        /** Data stored for the specified user data key. */
        Value?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserFacebookInfo */
    interface UserFacebookInfo {
        /** Facebook identifier */
        FacebookId?: string,
        /** Facebook full name */
        FullName?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserFacebookInstantGamesIdInfo */
    interface UserFacebookInstantGamesIdInfo {
        /** Facebook Instant Games ID */
        FacebookInstantGamesId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserGameCenterInfo */
    interface UserGameCenterInfo {
        /** Gamecenter identifier */
        GameCenterId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserGoogleInfo */
    interface UserGoogleInfo {
        /** Email address of the Google account */
        GoogleEmail?: string,
        /** Gender information of the Google account */
        GoogleGender?: string,
        /** Google ID */
        GoogleId?: string,
        /** Locale of the Google account */
        GoogleLocale?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserIosDeviceInfo */
    interface UserIosDeviceInfo {
        /** iOS device ID */
        IosDeviceId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserKongregateInfo */
    interface UserKongregateInfo {
        /** Kongregate ID */
        KongregateId?: string,
        /** Kongregate Username */
        KongregateName?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserNintendoSwitchDeviceIdInfo */
    interface UserNintendoSwitchDeviceIdInfo {
        /** Nintendo Switch Device ID */
        NintendoSwitchDeviceId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserOpenIdInfo */
    interface UserOpenIdInfo {
        /** OpenID Connection ID */
        ConnectionId?: string,
        /** OpenID Issuer */
        Issuer?: string,
        /** OpenID Subject */
        Subject?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserOrigination */
    type UserOrigination = "Organic"
        | "Steam"
        | "Google"
        | "Amazon"
        | "Facebook"
        | "Kongregate"
        | "GamersFirst"
        | "Unknown"
        | "IOS"
        | "LoadTest"
        | "Android"
        | "PSN"
        | "GameCenter"
        | "CustomId"
        | "XboxLive"
        | "Parse"
        | "Twitch"
        | "WindowsHello"
        | "ServerCustomId"
        | "NintendoSwitchDeviceId"
        | "FacebookInstantGamesId"
        | "OpenIdConnect";

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserPrivateAccountInfo */
    interface UserPrivateAccountInfo {
        /** user email address */
        Email?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserPsnInfo */
    interface UserPsnInfo {
        /** PSN account ID */
        PsnAccountId?: string,
        /** PSN online ID */
        PsnOnlineId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserSteamInfo */
    interface UserSteamInfo {
        /** what stage of game ownership the user is listed as being in, from Steam */
        SteamActivationStatus?: TitleActivationStatus,
        /** the country in which the player resides, from Steam data */
        SteamCountry?: string,
        /** currency type set in the user Steam account */
        SteamCurrency?: Currency,
        /** Steam identifier */
        SteamId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserTitleInfo */
    interface UserTitleInfo {
        /** URL to the player's avatar. */
        AvatarUrl?: string,
        /**
         * timestamp indicating when the user was first associated with this game (this can differ significantly from when the user
         * first registered with PlayFab)
         */
        Created: string,
        /** name of the user, as it is displayed in-game */
        DisplayName?: string,
        /**
         * timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other
         * events, such as issuing a beta key to the user, can associate the title to the user)
         */
        FirstLogin?: string,
        /** boolean indicating whether or not the user is currently banned for a title */
        isBanned?: boolean,
        /** timestamp for the last user login for this title */
        LastLogin?: string,
        /** source by which the user first joined the game, if known */
        Origination?: UserOrigination,
        /** Title player account entity for this user */
        TitlePlayerAccount?: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserTwitchInfo */
    interface UserTwitchInfo {
        /** Twitch ID */
        TwitchId?: string,
        /** Twitch Username */
        TwitchUserName?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserWindowsHelloInfo */
    interface UserWindowsHelloInfo {
        /** Windows Hello Device Name */
        WindowsHelloDeviceName?: string,
        /** Windows Hello Public Key Hash */
        WindowsHelloPublicKeyHash?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserXboxInfo */
    interface UserXboxInfo {
        /** XBox user ID */
        XboxUserId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ValueToDateModel */
    interface ValueToDateModel {
        /** ISO 4217 code of the currency used in the purchases */
        Currency?: string,
        /**
         * Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and
         * ninety-nine cents when Currency is 'USD')
         */
        TotalValue: number,
        /**
         * Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine
         * dollars and ninety-nine cents when Currency is 'USD'.
         */
        TotalValueAsDecimal?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.VirtualCurrencyRechargeTime */
    interface VirtualCurrencyRechargeTime {
        /**
         * Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value
         * through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen
         * below this value.
         */
        RechargeMax: number,
        /** Server timestamp in UTC indicating the next time the virtual currency will be incremented. */
        RechargeTime: string,
        /** Time remaining (in seconds) before the next recharge increment of the virtual currency. */
        SecondsToRecharge: number,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteEventResponse */
    interface WriteEventResponse {
        /**
         * The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to
         * any particular format.
         */
        EventId?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteServerCharacterEventRequest */
    interface WriteServerCharacterEventRequest {
        /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any },
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The time (in UTC) associated with this event. The value dafaults to the current time. */
        Timestamp?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteServerPlayerEventRequest */
    interface WriteServerPlayerEventRequest {
        /** Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any },
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The time (in UTC) associated with this event. The value dafaults to the current time. */
        Timestamp?: string,
    }

    /** https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteTitleEventRequest */
    interface WriteTitleEventRequest {
        /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any },
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string,
        /** The time (in UTC) associated with this event. The value dafaults to the current time. */
        Timestamp?: string,
    }

}

/** Server interface methods */
interface IPlayFabServerAPI {
    /**
     * Increments the character's balance of the specified virtual currency by the stated amount
     * https://api.playfab.com/Documentation/Server/method/AddCharacterVirtualCurrency
     */
    AddCharacterVirtualCurrency(request: PlayFabServerModels.AddCharacterVirtualCurrencyRequest): PlayFabServerModels.ModifyCharacterVirtualCurrencyResult;

    /**
     * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
     * FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
     * https://api.playfab.com/Documentation/Server/method/AddFriend
     */
    AddFriend(request: PlayFabServerModels.AddFriendRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://api.playfab.com/Documentation/Server/method/AddPlayerTag
     */
    AddPlayerTag(request: PlayFabServerModels.AddPlayerTagRequest): PlayFabServerModels.AddPlayerTagResult;

    /**
     * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
     * in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
     * number of players, please see our guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
     * https://api.playfab.com/Documentation/Server/method/AddSharedGroupMembers
     */
    AddSharedGroupMembers(request: PlayFabServerModels.AddSharedGroupMembersRequest): PlayFabServerModels.AddSharedGroupMembersResult;

    /**
     * Increments the user's balance of the specified virtual currency by the stated amount
     * https://api.playfab.com/Documentation/Server/method/AddUserVirtualCurrency
     */
    AddUserVirtualCurrency(request: PlayFabServerModels.AddUserVirtualCurrencyRequest): PlayFabServerModels.ModifyUserVirtualCurrencyResult;

    /**
     * Validated a client's session ticket, and if successful, returns details for that user
     * https://api.playfab.com/Documentation/Server/method/AuthenticateSessionTicket
     */
    AuthenticateSessionTicket(request: PlayFabServerModels.AuthenticateSessionTicketRequest): PlayFabServerModels.AuthenticateSessionTicketResult;

    /**
     * Awards the specified users the specified Steam achievements
     * https://api.playfab.com/Documentation/Server/method/AwardSteamAchievement
     */
    AwardSteamAchievement(request: PlayFabServerModels.AwardSteamAchievementRequest): PlayFabServerModels.AwardSteamAchievementResult;

    /**
     * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
     * https://api.playfab.com/Documentation/Server/method/BanUsers
     */
    BanUsers(request: PlayFabServerModels.BanUsersRequest): PlayFabServerModels.BanUsersResult;

    /**
     * Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
     * https://api.playfab.com/Documentation/Server/method/ConsumeItem
     */
    ConsumeItem(request: PlayFabServerModels.ConsumeItemRequest): PlayFabServerModels.ConsumeItemResult;

    /**
     * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
     * group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
     * between a very small number of players, please see our guide:
     * https://api.playfab.com/docs/tutorials/landing-players/shared-groups
     * https://api.playfab.com/Documentation/Server/method/CreateSharedGroup
     */
    CreateSharedGroup(request: PlayFabServerModels.CreateSharedGroupRequest): PlayFabServerModels.CreateSharedGroupResult;

    /**
     * Deletes the specific character ID from the specified user.
     * https://api.playfab.com/Documentation/Server/method/DeleteCharacterFromUser
     */
    DeleteCharacterFromUser(request: PlayFabServerModels.DeleteCharacterFromUserRequest): PlayFabServerModels.DeleteCharacterFromUserResult;

    /**
     * Removes a user's player account from a title and deletes all associated data
     * https://api.playfab.com/Documentation/Server/method/DeletePlayer
     */
    DeletePlayer(request: PlayFabServerModels.DeletePlayerRequest): PlayFabServerModels.DeletePlayerResult;

    /**
     * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
     * sharing data between a very small number of players, please see our guide:
     * https://api.playfab.com/docs/tutorials/landing-players/shared-groups
     * https://api.playfab.com/Documentation/Server/method/DeleteSharedGroup
     */
    DeleteSharedGroup(request: PlayFabServerModels.DeleteSharedGroupRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Deletes custom data, all account linkages, and statistics.
     * https://api.playfab.com/Documentation/Server/method/DeleteUsers
     */
    DeleteUsers(request: PlayFabServerModels.DeleteUsersRequest): PlayFabServerModels.DeleteUsersResult;

    /**
     * Inform the matchmaker that a Game Server Instance is removed.
     * https://api.playfab.com/Documentation/Server/method/DeregisterGame
     */
    DeregisterGame(request: PlayFabServerModels.DeregisterGameRequest): PlayFabServerModels.DeregisterGameResponse;

    /**
     * Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would have been
     * added to the player inventory, if the Random Result Table were added via a Bundle or a call to UnlockContainer.
     * https://api.playfab.com/Documentation/Server/method/EvaluateRandomResultTable
     */
    EvaluateRandomResultTable(request: PlayFabServerModels.EvaluateRandomResultTableRequest): PlayFabServerModels.EvaluateRandomResultTableResult;

    /**
     * Executes a CloudScript function, with the 'currentPlayerId' variable set to the specified PlayFabId parameter value.
     * https://api.playfab.com/Documentation/Server/method/ExecuteCloudScript
     */
    ExecuteCloudScript(request: PlayFabServerModels.ExecuteCloudScriptServerRequest): PlayFabServerModels.ExecuteCloudScriptResult;

    /**
     * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
     * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
     * https://api.playfab.com/Documentation/Server/method/GetAllSegments
     */
    GetAllSegments(request: PlayFabServerModels.GetAllSegmentsRequest): PlayFabServerModels.GetAllSegmentsResult;

    /**
     * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
     * evaluated with the parent PlayFabId to guarantee uniqueness.
     * https://api.playfab.com/Documentation/Server/method/GetAllUsersCharacters
     */
    GetAllUsersCharacters(request: PlayFabServerModels.ListUsersCharactersRequest): PlayFabServerModels.ListUsersCharactersResult;

    /**
     * Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
     * https://api.playfab.com/Documentation/Server/method/GetCatalogItems
     */
    GetCatalogItems(request: PlayFabServerModels.GetCatalogItemsRequest): PlayFabServerModels.GetCatalogItemsResult;

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://api.playfab.com/Documentation/Server/method/GetCharacterData
     */
    GetCharacterData(request: PlayFabServerModels.GetCharacterDataRequest): PlayFabServerModels.GetCharacterDataResult;

    /**
     * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
     * https://api.playfab.com/Documentation/Server/method/GetCharacterInternalData
     */
    GetCharacterInternalData(request: PlayFabServerModels.GetCharacterDataRequest): PlayFabServerModels.GetCharacterDataResult;

    /**
     * Retrieves the specified character's current inventory of virtual goods
     * https://api.playfab.com/Documentation/Server/method/GetCharacterInventory
     */
    GetCharacterInventory(request: PlayFabServerModels.GetCharacterInventoryRequest): PlayFabServerModels.GetCharacterInventoryResult;

    /**
     * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
     * https://api.playfab.com/Documentation/Server/method/GetCharacterLeaderboard
     */
    GetCharacterLeaderboard(request: PlayFabServerModels.GetCharacterLeaderboardRequest): PlayFabServerModels.GetCharacterLeaderboardResult;

    /**
     * Retrieves the title-specific custom data for the user's character which can only be read by the client
     * https://api.playfab.com/Documentation/Server/method/GetCharacterReadOnlyData
     */
    GetCharacterReadOnlyData(request: PlayFabServerModels.GetCharacterDataRequest): PlayFabServerModels.GetCharacterDataResult;

    /**
     * Retrieves the details of all title-specific statistics for the specific character
     * https://api.playfab.com/Documentation/Server/method/GetCharacterStatistics
     */
    GetCharacterStatistics(request: PlayFabServerModels.GetCharacterStatisticsRequest): PlayFabServerModels.GetCharacterStatisticsResult;

    /**
     * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
     * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
     * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
     * the query to retrieve the data will fail. See this post for more information:
     * https://community.playfab.com/hc/en-us/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
     * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
     * https://api.playfab.com/Documentation/Server/method/GetContentDownloadUrl
     */
    GetContentDownloadUrl(request: PlayFabServerModels.GetContentDownloadUrlRequest): PlayFabServerModels.GetContentDownloadUrlResult;

    /**
     * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
     * leaderboard
     * https://api.playfab.com/Documentation/Server/method/GetFriendLeaderboard
     */
    GetFriendLeaderboard(request: PlayFabServerModels.GetFriendLeaderboardRequest): PlayFabServerModels.GetLeaderboardResult;

    /**
     * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
     * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
     * https://api.playfab.com/Documentation/Server/method/GetFriendsList
     */
    GetFriendsList(request: PlayFabServerModels.GetFriendsListRequest): PlayFabServerModels.GetFriendsListResult;

    /**
     * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
     * https://api.playfab.com/Documentation/Server/method/GetLeaderboard
     */
    GetLeaderboard(request: PlayFabServerModels.GetLeaderboardRequest): PlayFabServerModels.GetLeaderboardResult;

    /**
     * Retrieves a list of ranked characters for the given statistic, centered on the requested user
     * https://api.playfab.com/Documentation/Server/method/GetLeaderboardAroundCharacter
     */
    GetLeaderboardAroundCharacter(request: PlayFabServerModels.GetLeaderboardAroundCharacterRequest): PlayFabServerModels.GetLeaderboardAroundCharacterResult;

    /**
     * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
     * https://api.playfab.com/Documentation/Server/method/GetLeaderboardAroundUser
     */
    GetLeaderboardAroundUser(request: PlayFabServerModels.GetLeaderboardAroundUserRequest): PlayFabServerModels.GetLeaderboardAroundUserResult;

    /**
     * Retrieves a list of all of the user's characters for the given statistic.
     * https://api.playfab.com/Documentation/Server/method/GetLeaderboardForUserCharacters
     */
    GetLeaderboardForUserCharacters(request: PlayFabServerModels.GetLeaderboardForUsersCharactersRequest): PlayFabServerModels.GetLeaderboardForUsersCharactersResult;

    /**
     * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
     * returned. All parameters default to false.
     * https://api.playfab.com/Documentation/Server/method/GetPlayerCombinedInfo
     */
    GetPlayerCombinedInfo(request: PlayFabServerModels.GetPlayerCombinedInfoRequest): PlayFabServerModels.GetPlayerCombinedInfoResult;

    /**
     * Retrieves the player's profile
     * https://api.playfab.com/Documentation/Server/method/GetPlayerProfile
     */
    GetPlayerProfile(request: PlayFabServerModels.GetPlayerProfileRequest): PlayFabServerModels.GetPlayerProfileResult;

    /**
     * List all segments that a player currently belongs to at this moment in time.
     * https://api.playfab.com/Documentation/Server/method/GetPlayerSegments
     */
    GetPlayerSegments(request: PlayFabServerModels.GetPlayersSegmentsRequest): PlayFabServerModels.GetPlayerSegmentsResult;

    /**
     * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
     * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
     * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
     * in the results. AB Test segments are currently not supported by this operation.
     * https://api.playfab.com/Documentation/Server/method/GetPlayersInSegment
     */
    GetPlayersInSegment(request: PlayFabServerModels.GetPlayersInSegmentRequest): PlayFabServerModels.GetPlayersInSegmentResult;

    /**
     * Retrieves the current version and values for the indicated statistics, for the local player.
     * https://api.playfab.com/Documentation/Server/method/GetPlayerStatistics
     */
    GetPlayerStatistics(request: PlayFabServerModels.GetPlayerStatisticsRequest): PlayFabServerModels.GetPlayerStatisticsResult;

    /**
     * Retrieves the information on the available versions of the specified statistic.
     * https://api.playfab.com/Documentation/Server/method/GetPlayerStatisticVersions
     */
    GetPlayerStatisticVersions(request: PlayFabServerModels.GetPlayerStatisticVersionsRequest): PlayFabServerModels.GetPlayerStatisticVersionsResult;

    /**
     * Get all tags with a given Namespace (optional) from a player profile.
     * https://api.playfab.com/Documentation/Server/method/GetPlayerTags
     */
    GetPlayerTags(request: PlayFabServerModels.GetPlayerTagsRequest): PlayFabServerModels.GetPlayerTagsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
     * https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromFacebookIDs
     */
    GetPlayFabIDsFromFacebookIDs(request: PlayFabServerModels.GetPlayFabIDsFromFacebookIDsRequest): PlayFabServerModels.GetPlayFabIDsFromFacebookIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
     * https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromFacebookInstantGamesIds
     */
    GetPlayFabIDsFromFacebookInstantGamesIds(request: PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsRequest): PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
     * https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromNintendoSwitchDeviceIds
     */
    GetPlayFabIDsFromNintendoSwitchDeviceIds(request: PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest): PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
     * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
     * https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromSteamIDs
     */
    GetPlayFabIDsFromSteamIDs(request: PlayFabServerModels.GetPlayFabIDsFromSteamIDsRequest): PlayFabServerModels.GetPlayFabIDsFromSteamIDsResult;

    /**
     * Retrieves the key-value store of custom publisher settings
     * https://api.playfab.com/Documentation/Server/method/GetPublisherData
     */
    GetPublisherData(request: PlayFabServerModels.GetPublisherDataRequest): PlayFabServerModels.GetPublisherDataResult;

    /**
     * Retrieves the configuration information for the specified random results tables for the title, including all ItemId
     * values and weights
     * https://api.playfab.com/Documentation/Server/method/GetRandomResultTables
     */
    GetRandomResultTables(request: PlayFabServerModels.GetRandomResultTablesRequest): PlayFabServerModels.GetRandomResultTablesResult;

    /**
     * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
     * public and private group data. Shared Groups are designed for sharing data between a very small number of players,
     * please see our guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
     * https://api.playfab.com/Documentation/Server/method/GetSharedGroupData
     */
    GetSharedGroupData(request: PlayFabServerModels.GetSharedGroupDataRequest): PlayFabServerModels.GetSharedGroupDataResult;

    /**
     * Retrieves the current server time
     * https://api.playfab.com/Documentation/Server/method/GetTime
     */
    GetTime(request: PlayFabServerModels.GetTimeRequest): PlayFabServerModels.GetTimeResult;

    /**
     * Retrieves the key-value store of custom title settings
     * https://api.playfab.com/Documentation/Server/method/GetTitleData
     */
    GetTitleData(request: PlayFabServerModels.GetTitleDataRequest): PlayFabServerModels.GetTitleDataResult;

    /**
     * Retrieves the key-value store of custom internal title settings
     * https://api.playfab.com/Documentation/Server/method/GetTitleInternalData
     */
    GetTitleInternalData(request: PlayFabServerModels.GetTitleDataRequest): PlayFabServerModels.GetTitleDataResult;

    /**
     * Retrieves the title news feed, as configured in the developer portal
     * https://api.playfab.com/Documentation/Server/method/GetTitleNews
     */
    GetTitleNews(request: PlayFabServerModels.GetTitleNewsRequest): PlayFabServerModels.GetTitleNewsResult;

    /**
     * Retrieves the relevant details for a specified user
     * https://api.playfab.com/Documentation/Server/method/GetUserAccountInfo
     */
    GetUserAccountInfo(request: PlayFabServerModels.GetUserAccountInfoRequest): PlayFabServerModels.GetUserAccountInfoResult;

    /**
     * Gets all bans for a user.
     * https://api.playfab.com/Documentation/Server/method/GetUserBans
     */
    GetUserBans(request: PlayFabServerModels.GetUserBansRequest): PlayFabServerModels.GetUserBansResult;

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://api.playfab.com/Documentation/Server/method/GetUserData
     */
    GetUserData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the title-specific custom data for the user which cannot be accessed by the client
     * https://api.playfab.com/Documentation/Server/method/GetUserInternalData
     */
    GetUserInternalData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the specified user's current inventory of virtual goods
     * https://api.playfab.com/Documentation/Server/method/GetUserInventory
     */
    GetUserInventory(request: PlayFabServerModels.GetUserInventoryRequest): PlayFabServerModels.GetUserInventoryResult;

    /**
     * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
     * https://api.playfab.com/Documentation/Server/method/GetUserPublisherData
     */
    GetUserPublisherData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
     * https://api.playfab.com/Documentation/Server/method/GetUserPublisherInternalData
     */
    GetUserPublisherInternalData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the publisher-specific custom data for the user which can only be read by the client
     * https://api.playfab.com/Documentation/Server/method/GetUserPublisherReadOnlyData
     */
    GetUserPublisherReadOnlyData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the title-specific custom data for the user which can only be read by the client
     * https://api.playfab.com/Documentation/Server/method/GetUserReadOnlyData
     */
    GetUserReadOnlyData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
     * with the parent PlayFabId to guarantee uniqueness.
     * https://api.playfab.com/Documentation/Server/method/GrantCharacterToUser
     */
    GrantCharacterToUser(request: PlayFabServerModels.GrantCharacterToUserRequest): PlayFabServerModels.GrantCharacterToUserResult;

    /**
     * Adds the specified items to the specified character's inventory
     * https://api.playfab.com/Documentation/Server/method/GrantItemsToCharacter
     */
    GrantItemsToCharacter(request: PlayFabServerModels.GrantItemsToCharacterRequest): PlayFabServerModels.GrantItemsToCharacterResult;

    /**
     * Adds the specified items to the specified user's inventory
     * https://api.playfab.com/Documentation/Server/method/GrantItemsToUser
     */
    GrantItemsToUser(request: PlayFabServerModels.GrantItemsToUserRequest): PlayFabServerModels.GrantItemsToUserResult;

    /**
     * Adds the specified items to the specified user inventories
     * https://api.playfab.com/Documentation/Server/method/GrantItemsToUsers
     */
    GrantItemsToUsers(request: PlayFabServerModels.GrantItemsToUsersRequest): PlayFabServerModels.GrantItemsToUsersResult;

    /**
     * Modifies the number of remaining uses of a player's inventory item
     * https://api.playfab.com/Documentation/Server/method/ModifyItemUses
     */
    ModifyItemUses(request: PlayFabServerModels.ModifyItemUsesRequest): PlayFabServerModels.ModifyItemUsesResult;

    /**
     * Moves an item from a character's inventory into another of the users's character's inventory.
     * https://api.playfab.com/Documentation/Server/method/MoveItemToCharacterFromCharacter
     */
    MoveItemToCharacterFromCharacter(request: PlayFabServerModels.MoveItemToCharacterFromCharacterRequest): PlayFabServerModels.MoveItemToCharacterFromCharacterResult;

    /**
     * Moves an item from a user's inventory into their character's inventory.
     * https://api.playfab.com/Documentation/Server/method/MoveItemToCharacterFromUser
     */
    MoveItemToCharacterFromUser(request: PlayFabServerModels.MoveItemToCharacterFromUserRequest): PlayFabServerModels.MoveItemToCharacterFromUserResult;

    /**
     * Moves an item from a character's inventory into the owning user's inventory.
     * https://api.playfab.com/Documentation/Server/method/MoveItemToUserFromCharacter
     */
    MoveItemToUserFromCharacter(request: PlayFabServerModels.MoveItemToUserFromCharacterRequest): PlayFabServerModels.MoveItemToUserFromCharacterResult;

    /**
     * Informs the PlayFab match-making service that the user specified has left the Game Server Instance
     * https://api.playfab.com/Documentation/Server/method/NotifyMatchmakerPlayerLeft
     */
    NotifyMatchmakerPlayerLeft(request: PlayFabServerModels.NotifyMatchmakerPlayerLeftRequest): PlayFabServerModels.NotifyMatchmakerPlayerLeftResult;

    /**
     * Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
     * Economy-&gt;Catalogs tab in the PlayFab Game Manager.
     * https://api.playfab.com/Documentation/Server/method/RedeemCoupon
     */
    RedeemCoupon(request: PlayFabServerModels.RedeemCouponRequest): PlayFabServerModels.RedeemCouponResult;

    /**
     * Validates a Game Server session ticket and returns details about the user
     * https://api.playfab.com/Documentation/Server/method/RedeemMatchmakerTicket
     */
    RedeemMatchmakerTicket(request: PlayFabServerModels.RedeemMatchmakerTicketRequest): PlayFabServerModels.RedeemMatchmakerTicketResult;

    /**
     * Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
     * https://api.playfab.com/Documentation/Server/method/RefreshGameServerInstanceHeartbeat
     */
    RefreshGameServerInstanceHeartbeat(request: PlayFabServerModels.RefreshGameServerInstanceHeartbeatRequest): PlayFabServerModels.RefreshGameServerInstanceHeartbeatResult;

    /**
     * Inform the matchmaker that a new Game Server Instance is added.
     * https://api.playfab.com/Documentation/Server/method/RegisterGame
     */
    RegisterGame(request: PlayFabServerModels.RegisterGameRequest): PlayFabServerModels.RegisterGameResponse;

    /**
     * Removes the specified friend from the the user's friend list
     * https://api.playfab.com/Documentation/Server/method/RemoveFriend
     */
    RemoveFriend(request: PlayFabServerModels.RemoveFriendRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://api.playfab.com/Documentation/Server/method/RemovePlayerTag
     */
    RemovePlayerTag(request: PlayFabServerModels.RemovePlayerTagRequest): PlayFabServerModels.RemovePlayerTagResult;

    /**
     * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
     * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
     * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
     * guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
     * https://api.playfab.com/Documentation/Server/method/RemoveSharedGroupMembers
     */
    RemoveSharedGroupMembers(request: PlayFabServerModels.RemoveSharedGroupMembersRequest): PlayFabServerModels.RemoveSharedGroupMembersResult;

    /**
     * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
     * representatives for the title can take action concerning potentially toxic players.
     * https://api.playfab.com/Documentation/Server/method/ReportPlayer
     */
    ReportPlayer(request: PlayFabServerModels.ReportPlayerServerRequest): PlayFabServerModels.ReportPlayerServerResult;

    /**
     * Revoke all active bans for a user.
     * https://api.playfab.com/Documentation/Server/method/RevokeAllBansForUser
     */
    RevokeAllBansForUser(request: PlayFabServerModels.RevokeAllBansForUserRequest): PlayFabServerModels.RevokeAllBansForUserResult;

    /**
     * Revoke all active bans specified with BanId.
     * https://api.playfab.com/Documentation/Server/method/RevokeBans
     */
    RevokeBans(request: PlayFabServerModels.RevokeBansRequest): PlayFabServerModels.RevokeBansResult;

    /**
     * Revokes access to an item in a user's inventory
     * https://api.playfab.com/Documentation/Server/method/RevokeInventoryItem
     */
    RevokeInventoryItem(request: PlayFabServerModels.RevokeInventoryItemRequest): PlayFabServerModels.RevokeInventoryResult;

    /**
     * Revokes access for up to 25 items across multiple users and characters.
     * https://api.playfab.com/Documentation/Server/method/RevokeInventoryItems
     */
    RevokeInventoryItems(request: PlayFabServerModels.RevokeInventoryItemsRequest): PlayFabServerModels.RevokeInventoryItemsResult;

    /**
     * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
     * email template
     * https://api.playfab.com/Documentation/Server/method/SendCustomAccountRecoveryEmail
     */
    SendCustomAccountRecoveryEmail(request: PlayFabServerModels.SendCustomAccountRecoveryEmailRequest): PlayFabServerModels.SendCustomAccountRecoveryEmailResult;

    /**
     * Sends an email based on an email template to a player's contact email
     * https://api.playfab.com/Documentation/Server/method/SendEmailFromTemplate
     */
    SendEmailFromTemplate(request: PlayFabServerModels.SendEmailFromTemplateRequest): PlayFabServerModels.SendEmailFromTemplateResult;

    /**
     * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://api.playfab.com/Documentation/Server/method/SendPushNotification
     */
    SendPushNotification(request: PlayFabServerModels.SendPushNotificationRequest): PlayFabServerModels.SendPushNotificationResult;

    /**
     * Updates the tag list for a specified user in the friend list of another user
     * https://api.playfab.com/Documentation/Server/method/SetFriendTags
     */
    SetFriendTags(request: PlayFabServerModels.SetFriendTagsRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Sets the custom data of the indicated Game Server Instance
     * https://api.playfab.com/Documentation/Server/method/SetGameServerInstanceData
     */
    SetGameServerInstanceData(request: PlayFabServerModels.SetGameServerInstanceDataRequest): PlayFabServerModels.SetGameServerInstanceDataResult;

    /**
     * Set the state of the indicated Game Server Instance.
     * https://api.playfab.com/Documentation/Server/method/SetGameServerInstanceState
     */
    SetGameServerInstanceState(request: PlayFabServerModels.SetGameServerInstanceStateRequest): PlayFabServerModels.SetGameServerInstanceStateResult;

    /**
     * Set custom tags for the specified Game Server Instance
     * https://api.playfab.com/Documentation/Server/method/SetGameServerInstanceTags
     */
    SetGameServerInstanceTags(request: PlayFabServerModels.SetGameServerInstanceTagsRequest): PlayFabServerModels.SetGameServerInstanceTagsResult;

    /**
     * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
     * secret use the Admin or Server API method SetPlayerSecret.
     * https://api.playfab.com/Documentation/Server/method/SetPlayerSecret
     */
    SetPlayerSecret(request: PlayFabServerModels.SetPlayerSecretRequest): PlayFabServerModels.SetPlayerSecretResult;

    /**
     * Updates the key-value store of custom publisher settings
     * https://api.playfab.com/Documentation/Server/method/SetPublisherData
     */
    SetPublisherData(request: PlayFabServerModels.SetPublisherDataRequest): PlayFabServerModels.SetPublisherDataResult;

    /**
     * Updates the key-value store of custom title settings
     * https://api.playfab.com/Documentation/Server/method/SetTitleData
     */
    SetTitleData(request: PlayFabServerModels.SetTitleDataRequest): PlayFabServerModels.SetTitleDataResult;

    /**
     * Updates the key-value store of custom title settings
     * https://api.playfab.com/Documentation/Server/method/SetTitleInternalData
     */
    SetTitleInternalData(request: PlayFabServerModels.SetTitleDataRequest): PlayFabServerModels.SetTitleDataResult;

    /**
     * Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to make a VC
     * balance negative with this API.
     * https://api.playfab.com/Documentation/Server/method/SubtractCharacterVirtualCurrency
     */
    SubtractCharacterVirtualCurrency(request: PlayFabServerModels.SubtractCharacterVirtualCurrencyRequest): PlayFabServerModels.ModifyCharacterVirtualCurrencyResult;

    /**
     * Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC
     * balance negative with this API.
     * https://api.playfab.com/Documentation/Server/method/SubtractUserVirtualCurrency
     */
    SubtractUserVirtualCurrency(request: PlayFabServerModels.SubtractUserVirtualCurrencyRequest): PlayFabServerModels.ModifyUserVirtualCurrencyResult;

    /**
     * Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when required), and
     * returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses &gt;
     * 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
     * https://api.playfab.com/Documentation/Server/method/UnlockContainerInstance
     */
    UnlockContainerInstance(request: PlayFabServerModels.UnlockContainerInstanceRequest): PlayFabServerModels.UnlockContainerItemResult;

    /**
     * Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary unlocks it
     * using any appropriate key, and returns the contents of the opened container. If the container (and key when relevant)
     * are consumable (RemainingUses &gt; 0), their RemainingUses will be decremented, consistent with the operation of
     * ConsumeItem.
     * https://api.playfab.com/Documentation/Server/method/UnlockContainerItem
     */
    UnlockContainerItem(request: PlayFabServerModels.UnlockContainerItemRequest): PlayFabServerModels.UnlockContainerItemResult;

    /**
     * Update the avatar URL of the specified player
     * https://api.playfab.com/Documentation/Server/method/UpdateAvatarUrl
     */
    UpdateAvatarUrl(request: PlayFabServerModels.UpdateAvatarUrlRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Updates information of a list of existing bans specified with Ban Ids.
     * https://api.playfab.com/Documentation/Server/method/UpdateBans
     */
    UpdateBans(request: PlayFabServerModels.UpdateBansRequest): PlayFabServerModels.UpdateBansResult;

    /**
     * Updates the title-specific custom data for the user's character which is readable and writable by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateCharacterData
     */
    UpdateCharacterData(request: PlayFabServerModels.UpdateCharacterDataRequest): PlayFabServerModels.UpdateCharacterDataResult;

    /**
     * Updates the title-specific custom data for the user's character which cannot be accessed by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateCharacterInternalData
     */
    UpdateCharacterInternalData(request: PlayFabServerModels.UpdateCharacterDataRequest): PlayFabServerModels.UpdateCharacterDataResult;

    /**
     * Updates the title-specific custom data for the user's character which can only be read by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateCharacterReadOnlyData
     */
    UpdateCharacterReadOnlyData(request: PlayFabServerModels.UpdateCharacterDataRequest): PlayFabServerModels.UpdateCharacterDataResult;

    /**
     * Updates the values of the specified title-specific statistics for the specific character
     * https://api.playfab.com/Documentation/Server/method/UpdateCharacterStatistics
     */
    UpdateCharacterStatistics(request: PlayFabServerModels.UpdateCharacterStatisticsRequest): PlayFabServerModels.UpdateCharacterStatisticsResult;

    /**
     * Updates the values of the specified title-specific statistics for the user
     * https://api.playfab.com/Documentation/Server/method/UpdatePlayerStatistics
     */
    UpdatePlayerStatistics(request: PlayFabServerModels.UpdatePlayerStatisticsRequest): PlayFabServerModels.UpdatePlayerStatisticsResult;

    /**
     * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
     * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
     * Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are
     * designed for sharing data between a very small number of players, please see our guide:
     * https://api.playfab.com/docs/tutorials/landing-players/shared-groups
     * https://api.playfab.com/Documentation/Server/method/UpdateSharedGroupData
     */
    UpdateSharedGroupData(request: PlayFabServerModels.UpdateSharedGroupDataRequest): PlayFabServerModels.UpdateSharedGroupDataResult;

    /**
     * Updates the title-specific custom data for the user which is readable and writable by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateUserData
     */
    UpdateUserData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the title-specific custom data for the user which cannot be accessed by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateUserInternalData
     */
    UpdateUserInternalData(request: PlayFabServerModels.UpdateUserInternalDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the key-value pair data tagged to the specified item, which is read-only from the client.
     * https://api.playfab.com/Documentation/Server/method/UpdateUserInventoryItemCustomData
     */
    UpdateUserInventoryItemCustomData(request: PlayFabServerModels.UpdateUserInventoryItemDataRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Updates the publisher-specific custom data for the user which is readable and writable by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateUserPublisherData
     */
    UpdateUserPublisherData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the publisher-specific custom data for the user which cannot be accessed by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateUserPublisherInternalData
     */
    UpdateUserPublisherInternalData(request: PlayFabServerModels.UpdateUserInternalDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the publisher-specific custom data for the user which can only be read by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateUserPublisherReadOnlyData
     */
    UpdateUserPublisherReadOnlyData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the title-specific custom data for the user which can only be read by the client
     * https://api.playfab.com/Documentation/Server/method/UpdateUserReadOnlyData
     */
    UpdateUserReadOnlyData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Writes a character-based event into PlayStream.
     * https://api.playfab.com/Documentation/Server/method/WriteCharacterEvent
     */
    WriteCharacterEvent(request: PlayFabServerModels.WriteServerCharacterEventRequest): PlayFabServerModels.WriteEventResponse;

    /**
     * Writes a player-based event into PlayStream.
     * https://api.playfab.com/Documentation/Server/method/WritePlayerEvent
     */
    WritePlayerEvent(request: PlayFabServerModels.WriteServerPlayerEventRequest): PlayFabServerModels.WriteEventResponse;

    /**
     * Writes a title-based event into PlayStream.
     * https://api.playfab.com/Documentation/Server/method/WriteTitleEvent
     */
    WriteTitleEvent(request: PlayFabServerModels.WriteTitleEventRequest): PlayFabServerModels.WriteEventResponse;


}


/** AuthenticationAPI.Models as interfaces */
declare namespace PlayFabAuthenticationModels {
    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetEntityTokenRequest */
    interface GetEntityTokenRequest {
        /** The entity to perform this action on. */
        Entity?: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetEntityTokenResponse */
    interface GetEntityTokenResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string,
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string,
    }

}
/** DataAPI.Models as interfaces */
declare namespace PlayFabDataModels {
    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.AbortFileUploadsRequest */
    interface AbortFileUploadsRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** Names of the files to have their pending uploads aborted. */
        FileNames: string[],
        /**
         * The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
         * be performed.
         */
        ProfileVersion?: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.AbortFileUploadsResponse */
    interface AbortFileUploadsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.DeleteFilesRequest */
    interface DeleteFilesRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** Names of the files to be deleted. */
        FileNames: string[],
        /**
         * The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
         * be performed.
         */
        ProfileVersion?: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.DeleteFilesResponse */
    interface DeleteFilesResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.FinalizeFileUploadsRequest */
    interface FinalizeFileUploadsRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        FileNames: string[],
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.FinalizeFileUploadsResponse */
    interface FinalizeFileUploadsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata },
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetFileMetadata */
    interface GetFileMetadata {
        /** Checksum value for the file */
        Checksum?: string,
        /** Download URL where the file can be retrieved */
        DownloadUrl?: string,
        /** Name of the file */
        FileName?: string,
        /** Last UTC time the file was modified */
        LastModified: string,
        /** Storage service's reported byte count */
        Size: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetFilesRequest */
    interface GetFilesRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetFilesResponse */
    interface GetFilesResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata },
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetObjectsRequest */
    interface GetObjectsRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /**
         * Determines whether the object will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON
         * object.
         */
        EscapeObject?: boolean,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetObjectsResponse */
    interface GetObjectsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** Requested objects that the calling entity has access to */
        Objects?: { [key: string]: ObjectResult },
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.InitiateFileUploadMetadata */
    interface InitiateFileUploadMetadata {
        /** Name of the file. */
        FileName?: string,
        /** Location the data should be sent to via an HTTP PUT operation. */
        UploadUrl?: string,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.InitiateFileUploadsRequest */
    interface InitiateFileUploadsRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** Names of the files to be set. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        FileNames: string[],
        /**
         * The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
         * be performed.
         */
        ProfileVersion?: number,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.InitiateFileUploadsResponse */
    interface InitiateFileUploadsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** Collection of file names and upload urls */
        UploadDetails?: InitiateFileUploadMetadata[],
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.ObjectResult */
    interface ObjectResult {
        /** Un-escaped JSON object, if EscapeObject false or default. */
        DataObject?: any,
        /** Escaped string JSON body of the object, if EscapeObject is true. */
        EscapedDataObject?: string,
        /** Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        ObjectName?: string,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.OperationTypes */
    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObject */
    interface SetObject {
        /**
         * Body of the object to be saved. If empty and DeleteObject is true object will be deleted if it exists, or no operation
         * will occur if it does not exist. Only one of Object or EscapedDataObject fields may be used.
         */
        DataObject?: any,
        /** Flag to indicate that this object should be deleted. Both DataObject and EscapedDataObject must not be set as well. */
        DeleteObject?: boolean,
        /**
         * Body of the object to be saved as an escaped JSON string. If empty and DeleteObject is true object will be deleted if it
         * exists, or no operation will occur if it does not exist. Only one of DataObject or EscapedDataObject fields may be used.
         */
        EscapedDataObject?: string,
        /** Name of object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'. */
        ObjectName: string,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObjectInfo */
    interface SetObjectInfo {
        /** Name of the object */
        ObjectName?: string,
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string,
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: OperationTypes,
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObjectsRequest */
    interface SetObjectsRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /**
         * Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from
         * GetProfile API, you can ensure that the object set will only be performed if the profile has not been updated by any
         * other clients since the version you last loaded.
         */
        ExpectedProfileVersion?: number,
        /** Collection of objects to set on the profile. */
        Objects: SetObject[],
    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObjectsResponse */
    interface SetObjectsResponse {
        /** New version of the entity profile. */
        ProfileVersion: number,
        /** New version of the entity profile. */
        SetResults?: SetObjectInfo[],
    }

}
/** EventsAPI.Models as interfaces */
declare namespace PlayFabEventsModels {
    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
    }

    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.EventContents */
    interface EventContents {
        /** Entity associated with the event */
        Entity: EntityKey,
        /** The namespace in which the event is defined. It must be prepended with 'com.playfab.events.' */
        EventNamespace: string,
        /** The name of this event. */
        Name: string,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalId?: string,
        /**
         * The time (in UTC) associated with this event when it occurred. If specified, this value is stored in the
         * OriginalTimestamp property of the PlayStream event.
         */
        OriginalTimestamp?: string,
        /** Arbitrary data associated with the event. Only one of Payload or PayloadJSON is allowed. */
        Payload?: any,
        /**
         * Arbitrary data associated with the event, represented as a JSON serialized string. Only one of Payload or PayloadJSON is
         * allowed.
         */
        PayloadJSON?: string,
    }

    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.WriteEventsRequest */
    interface WriteEventsRequest {
        /** Collection of events to write to PlayStream. */
        Events: EventContents[],
    }

    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.WriteEventsResponse */
    interface WriteEventsResponse {
        /**
         * The unique identifiers assigned by the server to the events, in the same order as the events in the request. Only
         * returned if FlushToPlayStream option is true.
         */
        AssignedEventIds?: string[],
    }

}
/** GroupsAPI.Models as interfaces */
declare namespace PlayFabGroupsModels {
    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.AcceptGroupApplicationRequest */
    interface AcceptGroupApplicationRequest {
        /**
         * Optional. Type of the entity to accept as. If specified, must be the same entity as the claimant or an entity that is a
         * child of the claimant entity. Defaults to the claimant entity.
         */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.AcceptGroupInvitationRequest */
    interface AcceptGroupInvitationRequest {
        /** The entity to perform this action on. */
        Entity?: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.AddMembersRequest */
    interface AddMembersRequest {
        /** The identifier of the group */
        Group: EntityKey,
        /** List of entities to add to the group. Only entities of type title_player_account and character may be added to groups. */
        Members: EntityKey[],
        /**
         * Optional: The ID of the existing role to add the entities to. If this is not specified, the default member role for the
         * group will be used. Role IDs must be between 1 and 64 characters long.
         */
        RoleId?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ApplyToGroupRequest */
    interface ApplyToGroupRequest {
        /** Optional, default true. Automatically accept an outstanding invitation if one exists instead of creating an application */
        AutoAcceptOutstandingInvite?: boolean,
        /** The entity to perform this action on. */
        Entity?: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Describes an application to join a group
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ApplyToGroupResponse
     */
    interface ApplyToGroupResponse {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage,
        /** When the application to join will expire and be deleted */
        Expires: string,
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.BlockEntityRequest */
    interface BlockEntityRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ChangeMemberRoleRequest */
    interface ChangeMemberRoleRequest {
        /**
         * The ID of the role that the entities will become a member of. This must be an existing role. Role IDs must be between 1
         * and 64 characters long.
         */
        DestinationRoleId?: string,
        /** The identifier of the group */
        Group: EntityKey,
        /**
         * List of entities to move between roles in the group. All entities in this list must be members of the group and origin
         * role.
         */
        Members: EntityKey[],
        /** The ID of the role that the entities currently are a member of. Role IDs must be between 1 and 64 characters long. */
        OriginRoleId: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupRequest */
    interface CreateGroupRequest {
        /** The entity to perform this action on. */
        Entity?: EntityKey,
        /** The name of the group. This is unique at the title level by default. */
        GroupName: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupResponse */
    interface CreateGroupResponse {
        /** The ID of the administrator role for the group. */
        AdminRoleId?: string,
        /** The server date and time the group was created. */
        Created: string,
        /** The identifier of the group */
        Group: EntityKey,
        /** The name of the group. */
        GroupName?: string,
        /** The ID of the default member role for the group. */
        MemberRoleId?: string,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** The list of roles and names that belong to the group. */
        Roles?: { [key: string]: string | null },
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupRoleRequest */
    interface CreateGroupRoleRequest {
        /** The identifier of the group */
        Group: EntityKey,
        /**
         * The ID of the role. This must be unique within the group and cannot be changed. Role IDs must be between 1 and 64
         * characters long.
         */
        RoleId: string,
        /**
         * The name of the role. This must be unique within the group and can be changed later. Role names must be between 1 and
         * 100 characters long
         */
        RoleName: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupRoleResponse */
    interface CreateGroupRoleResponse {
        /** The current version of the group profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** ID for the role */
        RoleId?: string,
        /** The name of the role */
        RoleName?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.DeleteGroupRequest */
    interface DeleteGroupRequest {
        /** ID of the group or role to remove */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.DeleteRoleRequest */
    interface DeleteRoleRequest {
        /** The identifier of the group */
        Group: EntityKey,
        /** The ID of the role to delete. Role IDs must be between 1 and 64 characters long. */
        RoleId?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EmptyResponse */
    interface EmptyResponse {
    }

    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EntityMemberRole */
    interface EntityMemberRole {
        /** The list of members in the role */
        Members?: EntityWithLineage[],
        /** The ID of the role. */
        RoleId?: string,
        /** The name of the role */
        RoleName?: string,
    }

    /**
     * Entity wrapper class that contains the entity key and the entities that make up the lineage of the entity.
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EntityWithLineage
     */
    interface EntityWithLineage {
        /** The entity key for the specified entity */
        Key?: EntityKey,
        /** Dictionary of entity keys for related entities. Dictionary key is entity type. */
        Lineage?: { [key: string]: EntityKey },
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GetGroupRequest */
    interface GetGroupRequest {
        /** The identifier of the group */
        Group?: EntityKey,
        /** The full name of the group */
        GroupName?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GetGroupResponse */
    interface GetGroupResponse {
        /** The ID of the administrator role for the group. */
        AdminRoleId?: string,
        /** The server date and time the group was created. */
        Created: string,
        /** The identifier of the group */
        Group: EntityKey,
        /** The name of the group. */
        GroupName?: string,
        /** The ID of the default member role for the group. */
        MemberRoleId?: string,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** The list of roles and names that belong to the group. */
        Roles?: { [key: string]: string | null },
    }

    /**
     * Describes an application to join a group
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupApplication
     */
    interface GroupApplication {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage,
        /** When the application to join will expire and be deleted */
        Expires: string,
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey,
    }

    /**
     * Describes an entity that is blocked from joining a group.
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupBlock
     */
    interface GroupBlock {
        /** The entity that is blocked */
        Entity?: EntityWithLineage,
        /** ID of the group that the entity is blocked from */
        Group: EntityKey,
    }

    /**
     * Describes an invitation to a group.
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupInvitation
     */
    interface GroupInvitation {
        /** When the invitation will expire and be deleted */
        Expires: string,
        /** The group that the entity invited to */
        Group?: EntityKey,
        /** The entity that created the invitation */
        InvitedByEntity?: EntityWithLineage,
        /** The entity that is invited */
        InvitedEntity?: EntityWithLineage,
        /** ID of the role in the group to assign the user to. */
        RoleId?: string,
    }

    /**
     * Describes a group role
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupRole
     */
    interface GroupRole {
        /** ID for the role */
        RoleId?: string,
        /** The name of the role */
        RoleName?: string,
    }

    /**
     * Describes a group and the roles that it contains
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupWithRoles
     */
    interface GroupWithRoles {
        /** ID for the group */
        Group?: EntityKey,
        /** The name of the group */
        GroupName?: string,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** The list of roles within the group */
        Roles?: GroupRole[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.InviteToGroupRequest */
    interface InviteToGroupRequest {
        /** Optional, default true. Automatically accept an application if one exists instead of creating an invitation */
        AutoAcceptOutstandingApplication?: boolean,
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
        /**
         * Optional. ID of an existing a role in the group to assign the user to. The group's default member role is used if this
         * is not specified. Role IDs must be between 1 and 64 characters long.
         */
        RoleId?: string,
    }

    /**
     * Describes an invitation to a group.
     * https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.InviteToGroupResponse
     */
    interface InviteToGroupResponse {
        /** When the invitation will expire and be deleted */
        Expires: string,
        /** The group that the entity invited to */
        Group?: EntityKey,
        /** The entity that created the invitation */
        InvitedByEntity?: EntityWithLineage,
        /** The entity that is invited */
        InvitedEntity?: EntityWithLineage,
        /** ID of the role in the group to assign the user to. */
        RoleId?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.IsMemberRequest */
    interface IsMemberRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
        /**
         * Optional: ID of the role to check membership of. Defaults to any role (that is, check to see if the entity is a member
         * of the group in any capacity) if not specified.
         */
        RoleId?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.IsMemberResponse */
    interface IsMemberResponse {
        /** A value indicating whether or not the entity is a member. */
        IsMember: boolean,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupApplicationsRequest */
    interface ListGroupApplicationsRequest {
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupApplicationsResponse */
    interface ListGroupApplicationsResponse {
        /** The requested list of applications to the group. */
        Applications?: GroupApplication[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupBlocksRequest */
    interface ListGroupBlocksRequest {
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupBlocksResponse */
    interface ListGroupBlocksResponse {
        /** The requested list blocked entities. */
        BlockedEntities?: GroupBlock[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupInvitationsRequest */
    interface ListGroupInvitationsRequest {
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupInvitationsResponse */
    interface ListGroupInvitationsResponse {
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupMembersRequest */
    interface ListGroupMembersRequest {
        /** ID of the group to list the members and roles for */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupMembersResponse */
    interface ListGroupMembersResponse {
        /** The requested list of roles and member entity IDs. */
        Members?: EntityMemberRole[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipOpportunitiesRequest */
    interface ListMembershipOpportunitiesRequest {
        /** The entity to perform this action on. */
        Entity?: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipOpportunitiesResponse */
    interface ListMembershipOpportunitiesResponse {
        /** The requested list of group applications. */
        Applications?: GroupApplication[],
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipRequest */
    interface ListMembershipRequest {
        /** The entity to perform this action on. */
        Entity?: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipResponse */
    interface ListMembershipResponse {
        /** The list of groups */
        Groups?: GroupWithRoles[],
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.OperationTypes */
    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.RemoveGroupApplicationRequest */
    interface RemoveGroupApplicationRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.RemoveGroupInvitationRequest */
    interface RemoveGroupInvitationRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.RemoveMembersRequest */
    interface RemoveMembersRequest {
        /** The identifier of the group */
        Group: EntityKey,
        /** List of entities to remove */
        Members: EntityKey[],
        /** The ID of the role to remove the entities from. */
        RoleId?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UnblockEntityRequest */
    interface UnblockEntityRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupRequest */
    interface UpdateGroupRequest {
        /** Optional: the ID of an existing role to set as the new administrator role for the group */
        AdminRoleId?: string,
        /**
         * Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from the
         * GetGroup API, you can ensure that the group data update will only be performed if the group has not been updated by any
         * other clients since the version you last loaded.
         */
        ExpectedProfileVersion?: number,
        /** The identifier of the group */
        Group: EntityKey,
        /** Optional: the new name of the group */
        GroupName?: string,
        /** Optional: the ID of an existing role to set as the new member role for the group */
        MemberRoleId?: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupResponse */
    interface UpdateGroupResponse {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string,
        /** New version of the group data. */
        ProfileVersion: number,
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: OperationTypes,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupRoleRequest */
    interface UpdateGroupRoleRequest {
        /**
         * Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from the
         * GetGroup API, you can ensure that the group data update will only be performed if the group has not been updated by any
         * other clients since the version you last loaded.
         */
        ExpectedProfileVersion?: number,
        /** The identifier of the group */
        Group: EntityKey,
        /** ID of the role to update. Role IDs must be between 1 and 64 characters long. */
        RoleId?: string,
        /** The new name of the role */
        RoleName: string,
    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupRoleResponse */
    interface UpdateGroupRoleResponse {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string,
        /** New version of the role data. */
        ProfileVersion: number,
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: OperationTypes,
    }

}
/** ProfilesAPI.Models as interfaces */
declare namespace PlayFabProfilesModels {
    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EffectType */
    type EffectType = "Allow"
        | "Deny";

    /**
     * An entity object and its associated meta data.
     * https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityDataObject
     */
    interface EntityDataObject {
        /** Un-escaped JSON object, if DataAsObject is true. */
        DataObject?: any,
        /** Escaped string JSON body of the object, if DataAsObject is default or false. */
        EscapedDataObject?: string,
        /** Name of this object. */
        ObjectName?: string,
    }

    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityPermissionStatement */
    interface EntityPermissionStatement {
        /** The action this statement effects. May be 'Read', 'Write' or '*' for both read and write. */
        Action: string,
        /** A comment about the statement. Intended solely for bookkeeping and debugging. */
        Comment?: string,
        /** Additional conditions to be applied for entity resources. */
        Condition?: any,
        /** The effect this statement will have. It may be either Allow or Deny */
        Effect: EffectType,
        /** The principal this statement will effect. */
        Principal: any,
        /** The resource this statements effects. Similar to 'pfrn:data--title![Title ID]/Profile/*' */
        Resource: string,
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityProfileBody */
    interface EntityProfileBody {
        /** The entity id and type. */
        Entity?: EntityKey,
        /**
         * The chain of responsibility for this entity. This is a representation of 'ownership'. It is constructed using the
         * following formats (replace '[ID]' with the unique identifier for the given entity): Namespace: 'namespace![Namespace
         * ID]' Title: 'title![Namespace ID]/[Title ID]' Master Player Account: 'master_player_account![Namespace
         * ID]/[MasterPlayerAccount ID]' Title Player Account: 'title_player_account![Namespace ID]/[Title ID]/[MasterPlayerAccount
         * ID]/[TitlePlayerAccount ID]' Character: 'character![Namespace ID]/[Title ID]/[MasterPlayerAccount
         * ID]/[TitlePlayerAccount ID]/[Character ID]'
         */
        EntityChain?: string,
        /** The files on this profile. */
        Files?: { [key: string]: EntityProfileFileMetadata },
        /** The language on this profile. */
        Language?: string,
        /** The objects on this profile. */
        Objects?: { [key: string]: EntityDataObject },
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[],
        /**
         * The version number of the profile in persistent storage at the time of the read. Used for optional optimistic
         * concurrency during update.
         */
        VersionNumber: number,
    }

    /**
     * An entity file's meta data. To get a download URL call File/GetFiles API.
     * https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityProfileFileMetadata
     */
    interface EntityProfileFileMetadata {
        /** Checksum value for the file */
        Checksum?: string,
        /** Name of the file */
        FileName?: string,
        /** Last UTC time the file was modified */
        LastModified: string,
        /** Storage service's reported byte count */
        Size: number,
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfileRequest */
    interface GetEntityProfileRequest {
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean,
        /** The entity to perform this action on. */
        Entity: EntityKey,
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfileResponse */
    interface GetEntityProfileResponse {
        /** Entity profile */
        Profile?: EntityProfileBody,
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfilesRequest */
    interface GetEntityProfilesRequest {
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean,
        /** Entity keys of the profiles to load. Must be between 1 and 25 */
        Entities: EntityKey[],
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfilesResponse */
    interface GetEntityProfilesResponse {
        /** Entity profiles */
        Profiles?: EntityProfileBody[],
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetGlobalPolicyRequest */
    interface GetGlobalPolicyRequest {
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetGlobalPolicyResponse */
    interface GetGlobalPolicyResponse {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[],
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.OperationTypes */
    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetEntityProfilePolicyRequest */
    interface SetEntityProfilePolicyRequest {
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The statements to include in the access policy. */
        Statements?: EntityPermissionStatement[],
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetEntityProfilePolicyResponse */
    interface SetEntityProfilePolicyResponse {
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[],
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetGlobalPolicyRequest */
    interface SetGlobalPolicyRequest {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[],
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetGlobalPolicyResponse */
    interface SetGlobalPolicyResponse {
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetProfileLanguageRequest */
    interface SetProfileLanguageRequest {
        /** The entity to perform this action on. */
        Entity?: EntityKey,
        /** The expected version of a profile to perform this update on */
        ExpectedVersion: number,
        /** The language to set on the given entity. Deletes the profile's language if passed in a null string. */
        Language?: string,
    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetProfileLanguageResponse */
    interface SetProfileLanguageResponse {
        /** The type of operation that occured on the profile's language */
        OperationResult?: OperationTypes,
        /** The updated version of the profile after the language update */
        VersionNumber?: number,
    }

}

/** Entity interface methods */
interface IPlayFabEntityAPI {

    /**
     * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
     * Entity Token.
     * https://api.playfab.com/Documentation/Authentication/method/GetEntityToken
     */
    GetEntityToken(request: PlayFabAuthenticationModels.GetEntityTokenRequest): PlayFabAuthenticationModels.GetEntityTokenResponse;


    /**
     * Abort pending file uploads to an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/AbortFileUploads
     */
    AbortFileUploads(request: PlayFabDataModels.AbortFileUploadsRequest): PlayFabDataModels.AbortFileUploadsResponse;

    /**
     * Delete files on an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/DeleteFiles
     */
    DeleteFiles(request: PlayFabDataModels.DeleteFilesRequest): PlayFabDataModels.DeleteFilesResponse;

    /**
     * Finalize file uploads to an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/FinalizeFileUploads
     */
    FinalizeFileUploads(request: PlayFabDataModels.FinalizeFileUploadsRequest): PlayFabDataModels.FinalizeFileUploadsResponse;

    /**
     * Retrieves file metadata from an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/GetFiles
     */
    GetFiles(request: PlayFabDataModels.GetFilesRequest): PlayFabDataModels.GetFilesResponse;

    /**
     * Retrieves objects from an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/GetObjects
     */
    GetObjects(request: PlayFabDataModels.GetObjectsRequest): PlayFabDataModels.GetObjectsResponse;

    /**
     * Initiates file uploads to an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/InitiateFileUploads
     */
    InitiateFileUploads(request: PlayFabDataModels.InitiateFileUploadsRequest): PlayFabDataModels.InitiateFileUploadsResponse;

    /**
     * Sets objects on an entity's profile.
     * https://api.playfab.com/Documentation/Data/method/SetObjects
     */
    SetObjects(request: PlayFabDataModels.SetObjectsRequest): PlayFabDataModels.SetObjectsResponse;


    /**
     * Write batches of entity based events to PlayStream.
     * https://api.playfab.com/Documentation/Events/method/WriteEvents
     */
    WriteEvents(request: PlayFabEventsModels.WriteEventsRequest): PlayFabEventsModels.WriteEventsResponse;


    /**
     * Accepts an outstanding invitation to to join a group
     * https://api.playfab.com/Documentation/Groups/method/AcceptGroupApplication
     */
    AcceptGroupApplication(request: PlayFabGroupsModels.AcceptGroupApplicationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Accepts an invitation to join a group
     * https://api.playfab.com/Documentation/Groups/method/AcceptGroupInvitation
     */
    AcceptGroupInvitation(request: PlayFabGroupsModels.AcceptGroupInvitationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Adds members to a group or role.
     * https://api.playfab.com/Documentation/Groups/method/AddMembers
     */
    AddMembers(request: PlayFabGroupsModels.AddMembersRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Applies to join a group
     * https://api.playfab.com/Documentation/Groups/method/ApplyToGroup
     */
    ApplyToGroup(request: PlayFabGroupsModels.ApplyToGroupRequest): PlayFabGroupsModels.ApplyToGroupResponse;

    /**
     * Blocks a list of entities from joining a group.
     * https://api.playfab.com/Documentation/Groups/method/BlockEntity
     */
    BlockEntity(request: PlayFabGroupsModels.BlockEntityRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Changes the role membership of a list of entities from one role to another.
     * https://api.playfab.com/Documentation/Groups/method/ChangeMemberRole
     */
    ChangeMemberRole(request: PlayFabGroupsModels.ChangeMemberRoleRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Creates a new group.
     * https://api.playfab.com/Documentation/Groups/method/CreateGroup
     */
    CreateGroup(request: PlayFabGroupsModels.CreateGroupRequest): PlayFabGroupsModels.CreateGroupResponse;

    /**
     * Creates a new group role.
     * https://api.playfab.com/Documentation/Groups/method/CreateRole
     */
    CreateRole(request: PlayFabGroupsModels.CreateGroupRoleRequest): PlayFabGroupsModels.CreateGroupRoleResponse;

    /**
     * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
     * https://api.playfab.com/Documentation/Groups/method/DeleteGroup
     */
    DeleteGroup(request: PlayFabGroupsModels.DeleteGroupRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Deletes an existing role in a group.
     * https://api.playfab.com/Documentation/Groups/method/DeleteRole
     */
    DeleteRole(request: PlayFabGroupsModels.DeleteRoleRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Gets information about a group and its roles
     * https://api.playfab.com/Documentation/Groups/method/GetGroup
     */
    GetGroup(request: PlayFabGroupsModels.GetGroupRequest): PlayFabGroupsModels.GetGroupResponse;

    /**
     * Invites a player to join a group
     * https://api.playfab.com/Documentation/Groups/method/InviteToGroup
     */
    InviteToGroup(request: PlayFabGroupsModels.InviteToGroupRequest): PlayFabGroupsModels.InviteToGroupResponse;

    /**
     * Checks to see if an entity is a member of a group or role within the group
     * https://api.playfab.com/Documentation/Groups/method/IsMember
     */
    IsMember(request: PlayFabGroupsModels.IsMemberRequest): PlayFabGroupsModels.IsMemberResponse;

    /**
     * Lists all outstanding requests to join a group
     * https://api.playfab.com/Documentation/Groups/method/ListGroupApplications
     */
    ListGroupApplications(request: PlayFabGroupsModels.ListGroupApplicationsRequest): PlayFabGroupsModels.ListGroupApplicationsResponse;

    /**
     * Lists all entities blocked from joining a group
     * https://api.playfab.com/Documentation/Groups/method/ListGroupBlocks
     */
    ListGroupBlocks(request: PlayFabGroupsModels.ListGroupBlocksRequest): PlayFabGroupsModels.ListGroupBlocksResponse;

    /**
     * Lists all outstanding invitations for a group
     * https://api.playfab.com/Documentation/Groups/method/ListGroupInvitations
     */
    ListGroupInvitations(request: PlayFabGroupsModels.ListGroupInvitationsRequest): PlayFabGroupsModels.ListGroupInvitationsResponse;

    /**
     * Lists all members for a group
     * https://api.playfab.com/Documentation/Groups/method/ListGroupMembers
     */
    ListGroupMembers(request: PlayFabGroupsModels.ListGroupMembersRequest): PlayFabGroupsModels.ListGroupMembersResponse;

    /**
     * Lists all groups and roles for an entity
     * https://api.playfab.com/Documentation/Groups/method/ListMembership
     */
    ListMembership(request: PlayFabGroupsModels.ListMembershipRequest): PlayFabGroupsModels.ListMembershipResponse;

    /**
     * Lists all outstanding invitations and group applications for an entity
     * https://api.playfab.com/Documentation/Groups/method/ListMembershipOpportunities
     */
    ListMembershipOpportunities(request: PlayFabGroupsModels.ListMembershipOpportunitiesRequest): PlayFabGroupsModels.ListMembershipOpportunitiesResponse;

    /**
     * Removes an application to join a group
     * https://api.playfab.com/Documentation/Groups/method/RemoveGroupApplication
     */
    RemoveGroupApplication(request: PlayFabGroupsModels.RemoveGroupApplicationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Removes an invitation join a group
     * https://api.playfab.com/Documentation/Groups/method/RemoveGroupInvitation
     */
    RemoveGroupInvitation(request: PlayFabGroupsModels.RemoveGroupInvitationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Removes members from a group.
     * https://api.playfab.com/Documentation/Groups/method/RemoveMembers
     */
    RemoveMembers(request: PlayFabGroupsModels.RemoveMembersRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Unblocks a list of entities from joining a group
     * https://api.playfab.com/Documentation/Groups/method/UnblockEntity
     */
    UnblockEntity(request: PlayFabGroupsModels.UnblockEntityRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Updates non-membership data about a group.
     * https://api.playfab.com/Documentation/Groups/method/UpdateGroup
     */
    UpdateGroup(request: PlayFabGroupsModels.UpdateGroupRequest): PlayFabGroupsModels.UpdateGroupResponse;

    /**
     * Updates metadata about a role.
     * https://api.playfab.com/Documentation/Groups/method/UpdateRole
     */
    UpdateRole(request: PlayFabGroupsModels.UpdateGroupRoleRequest): PlayFabGroupsModels.UpdateGroupRoleResponse;


    /**
     * Gets the global title access policy
     * https://api.playfab.com/Documentation/Profiles/method/GetGlobalPolicy
     */
    GetGlobalPolicy(request: PlayFabProfilesModels.GetGlobalPolicyRequest): PlayFabProfilesModels.GetGlobalPolicyResponse;

    /**
     * Retrieves the entity's profile.
     * https://api.playfab.com/Documentation/Profiles/method/GetProfile
     */
    GetProfile(request: PlayFabProfilesModels.GetEntityProfileRequest): PlayFabProfilesModels.GetEntityProfileResponse;

    /**
     * Retrieves the entity's profile.
     * https://api.playfab.com/Documentation/Profiles/method/GetProfiles
     */
    GetProfiles(request: PlayFabProfilesModels.GetEntityProfilesRequest): PlayFabProfilesModels.GetEntityProfilesResponse;

    /**
     * Sets the global title access policy
     * https://api.playfab.com/Documentation/Profiles/method/SetGlobalPolicy
     */
    SetGlobalPolicy(request: PlayFabProfilesModels.SetGlobalPolicyRequest): PlayFabProfilesModels.SetGlobalPolicyResponse;

    /**
     * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
     * language, Master Player Account language, and then title default language if the first two aren't set or supported.
     * https://api.playfab.com/Documentation/Profiles/method/SetProfileLanguage
     */
    SetProfileLanguage(request: PlayFabProfilesModels.SetProfileLanguageRequest): PlayFabProfilesModels.SetProfileLanguageResponse;

    /**
     * Sets the profiles access policy
     * https://api.playfab.com/Documentation/Profiles/method/SetProfilePolicy
     */
    SetProfilePolicy(request: PlayFabProfilesModels.SetEntityProfilePolicyRequest): PlayFabProfilesModels.SetEntityProfilePolicyResponse;


}
