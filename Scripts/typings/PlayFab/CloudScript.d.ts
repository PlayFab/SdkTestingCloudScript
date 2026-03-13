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

interface ITriggeredByTask {
    Name: string;
    Id: string;
}

interface IPlayFabContext {
    playStreamEvent: PlayStreamModels.IBasePlayStreamEvent;
    playerProfile: IPlayFabPlayerProfile;
    triggeredByTask: ITriggeredByTask;
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
/** Static object which allows access to PlayFab Multiplayer API calls (includes Matchmaking, MultiplayerServer, Party, and Lobby) */
declare var multiplayer: IPlayFabMultiplayerAPI;

/** ServerAPI.Models as interfaces */
declare namespace PlayFabServerModels {
    interface AdCampaignAttribution {
        /** UTC time stamp of attribution */
        AttributedAt: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** Attribution network name */
        Platform?: string,
    }

    interface AdCampaignAttributionModel {
        /** UTC time stamp of attribution */
        AttributedAt: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** Attribution network name */
        Platform?: string,
    }

    interface AddCharacterVirtualCurrencyRequest {
        /**
         * Amount to be added to the character balance of the specified virtual currency. Maximum VC balance is Int32
         * (2,147,483,647). Any increase over this value will be discarded.
         */
        Amount: number,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** PlayFab unique identifier of the user whose virtual currency balance is to be incremented. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string,
    }

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

    interface AddGenericIDRequest {
        /** Generic service identifier to add to the player account. */
        GenericId: GenericServiceId,
        /** PlayFabId of the user to link. */
        PlayFabId: string,
    }

    /**
     * This API adds a contact email to the specified player's profile. If the player's profile already contains a contact
     * email, it will update the contact email to the email address specified.
     */
    interface AddOrUpdateContactEmailRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The new contact email to associate with the player. */
        EmailAddress: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface AddOrUpdateContactEmailResult {
    }

    /**
     * This API will trigger a player_tag_added event and add a tag with the given TagName and PlayFabID to the corresponding
     * player profile. TagName can be used for segmentation and it is limited to 256 characters. Also there is a limit on the
     * number of tags a title can have.
     */
    interface AddPlayerTagRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique tag for player profile. */
        TagName: string,
    }

    interface AddPlayerTagResult {
    }

    interface AddSharedGroupMembersRequest {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[],
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    interface AddSharedGroupMembersResult {
    }

    interface AddUserVirtualCurrencyRequest {
        /**
         * Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647).
         * Any increase over this value will be discarded.
         */
        Amount: number,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** PlayFab unique identifier of the user whose virtual currency balance is to be increased. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string,
    }

    interface AdvancedPushPlatformMsg {
        /**
         * Stops GoogleCloudMessaging notifications from including both notification and data properties and instead only sends the
         * data property.
         */
        GCMDataOnly?: boolean,
        /** The Json the platform should receive. */
        Json: string,
        /** The platform that should receive the Json. */
        Platform: PushNotificationPlatform,
    }

    /**
     * Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be
     * taken in how this data is stored and managed. Since this call will always return the relevant information for users who
     * have accessed the title, the recommendation is to not store this data locally.
     */
    interface AuthenticateSessionTicketRequest {
        /** Session ticket as issued by a PlayFab client login API. */
        SessionTicket: string,
    }

    interface AuthenticateSessionTicketResult {
        /** Indicates if token was expired at request time. */
        IsSessionTicketExpired?: boolean,
        /** Account info for the user whose session ticket was supplied. */
        UserInfo?: UserAccountInfo,
    }

    interface AwardSteamAchievementItem {
        /** Unique Steam achievement name. */
        AchievementName: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Result of the award attempt (only valid on response, not on request). */
        Result: boolean,
    }

    interface AwardSteamAchievementRequest {
        /** Array of achievements to grant and the users to whom they are to be granted. */
        Achievements: AwardSteamAchievementItem[],
    }

    interface AwardSteamAchievementResult {
        /** Array of achievements granted. */
        AchievementResults?: AwardSteamAchievementItem[],
    }

    /** Contains information for a ban. */
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
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
        /** The reason why this ban was applied. */
        Reason?: string,
        /** The family type of the user that is included in the ban. */
        UserFamilyType?: string,
    }

    /** Represents a single ban request. */
    interface BanRequest {
        /** The duration in hours for the ban. Leave this blank for a permanent ban. */
        DurationInHours?: number,
        /** IP address to be banned. May affect multiple players. */
        IPAddress?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The reason for this ban. Maximum 140 characters. */
        Reason?: string,
        /** The family type of the user that should be included in the ban if applicable. May affect multiple players. */
        UserFamilyType?: UserFamilyType,
    }

    /**
     * The existence of each user will not be verified. When banning by IP, multiple players may be affected, so use this
     * feature with caution. Returns information about the new bans.
     */
    interface BanUsersRequest {
        /** List of ban requests to be applied. Maximum 100. */
        Bans: BanRequest[],
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface BanUsersResult {
        /** Information on the bans that were applied */
        BanData?: BanInfo[],
    }

    interface BattleNetAccountPlayFabIdPair {
        /** Unique Battle.net account identifier for a user. */
        BattleNetAccountId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Battle.net account identifier. */
        PlayFabId?: string,
    }

    /** A purchasable item from the item catalog */
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

    interface CharacterInventory {
        /** The id of this character. */
        CharacterId?: string,
        /** The inventory of this character. */
        Inventory?: ItemInstance[],
    }

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

    interface CharacterResult {
        /** The id for this character on this player. */
        CharacterId?: string,
        /** The name of this character. */
        CharacterName?: string,
        /** The type-string that was given to this character on creation. */
        CharacterType?: string,
    }

    type ChurnRiskLevel = "NoData"

        | "LowRisk"
        | "MediumRisk"
        | "HighRisk";

    type CloudScriptRevisionOption = "Live"

        | "Latest"
        | "Specific";

    interface ConsumeItemRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Number of uses to consume from the item. */
        ConsumeCount: number,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique instance identifier of the item to be consumed. */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface ConsumeItemResult {
        /** Unique instance identifier of the item with uses consumed. */
        ItemInstanceId?: string,
        /** Number of uses remaining on the item. */
        RemainingUses: number,
    }

    interface ContactEmailInfo {
        /** The email address */
        EmailAddress?: string,
        /** The name of the email info data */
        Name?: string,
        /** The verification status of the email */
        VerificationStatus?: EmailVerificationStatus,
    }

    interface ContactEmailInfoModel {
        /** The email address */
        EmailAddress?: string,
        /** The name of the email info data */
        Name?: string,
        /** The verification status of the email */
        VerificationStatus?: EmailVerificationStatus,
    }

    type ContinentCode = "AF"

        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA"
        | "Unknown";

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
        | "ZW"
        | "Unknown";

    /**
     * If SharedGroupId is specified, the service will attempt to create a group with that identifier, and will return an error
     * if it is already in use. If no SharedGroupId is specified, a random identifier will be assigned.
     */
    interface CreateSharedGroupRequest {
        /** Unique identifier for the shared group (a random identifier will be assigned, if one is not specified). */
        SharedGroupId?: string,
    }

    interface CreateSharedGroupResult {
        /** Unique identifier for the shared group. */
        SharedGroupId?: string,
    }

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

    interface CustomPropertyDetails {
        /** The custom property's name. */
        Name?: string,
        /** The custom property's value. */
        Value?: any,
    }

    /**
     * This function will delete the specified character from the list allowed by the user, and will also delete any inventory
     * or VC currently held by that character. It will NOT delete any statistics associated for this character, in order to
     * preserve leaderboard integrity.
     */
    interface DeleteCharacterFromUserRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /**
         * If true, the character's inventory will be transferred up to the owning user; otherwise, this request will purge those
         * items.
         */
        SaveCharacterInventory: boolean,
    }

    interface DeleteCharacterFromUserResult {
    }

    interface DeletedPropertyDetails {
        /** The name of the property which was requested to be deleted. */
        Name?: string,
        /** Indicates whether or not the property was deleted. If false, no property with that name existed. */
        WasDeleted: boolean,
    }

    /** Deletes custom properties for the specified player. The list of provided property names must be non-empty. */
    interface DeletePlayerCustomPropertiesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Optional field used for concurrency control. One can ensure that the delete operation will only be performed if the
         * player's properties have not been updated by any other clients since the last version.
         */
        ExpectedPropertiesVersion?: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** A list of property names denoting which properties should be deleted. */
        PropertyNames: string[],
    }

    interface DeletePlayerCustomPropertiesResult {
        /** The list of properties requested to be deleted. */
        DeletedProperties?: DeletedPropertyDetails[],
        /** PlayFab unique identifier of the user whose properties were deleted. */
        PlayFabId?: string,
        /**
         * Indicates the current version of a player's properties that have been set. This is incremented after updates and
         * deletes. This version can be provided in update and delete calls for concurrency control.
         */
        PropertiesVersion: number,
    }

    /**
     * Deletes all data associated with the player, including statistics, custom data, inventory, purchases, virtual currency
     * balances, characters and shared group memberships. Removes the player from all leaderboards and player search indexes.
     * Does not delete PlayStream event history associated with the player. Does not delete the publisher user account that
     * created the player in the title nor associated data such as username, password, email address, account linkages, or
     * friends list. Note, this API queues the player for deletion and returns immediately. It may take several minutes or more
     * before all player data is fully deleted. Until the player data is fully deleted, attempts to recreate the player with
     * the same user account in the same title will fail with the 'AccountDeleted' error. This API must be enabled for use as
     * an option in the game manager website. It is disabled by default.
     */
    interface DeletePlayerRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface DeletePlayerResult {
    }

    /** Represents the request to delete a push notification template. */
    interface DeletePushNotificationTemplateRequest {
        /** Id of the push notification template to be deleted. */
        PushNotificationTemplateId: string,
    }

    interface DeletePushNotificationTemplateResult {
    }

    interface DeleteSharedGroupRequest {
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    type EmailVerificationStatus = "Unverified"

        | "Pending"
        | "Confirmed";

    interface EmptyResponse {
    }

    interface EmptyResult {
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    interface EntityTokenResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string,
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string,
    }

    interface EvaluateRandomResultTableRequest {
        /**
         * Specifies the catalog version that should be used to evaluate the Random Result Table. If unspecified, uses
         * default/primary catalog.
         */
        CatalogVersion?: string,
        /** The unique identifier of the Random Result Table to use. */
        TableId: string,
    }

    /**
     * Note that if the Random Result Table contains no entries, or does not exist for the catalog specified (the Primary
     * catalog if one is not specified), an InvalidDropTable error will be returned.
     */
    interface EvaluateRandomResultTableResult {
        /** Unique identifier for the item returned from the Random Result Table evaluation, for the given catalog. */
        ResultItemId?: string,
    }

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

    interface ExecuteCloudScriptServerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    type ExternalFriendSources = "None"

        | "Steam"
        | "Facebook"
        | "Xbox"
        | "Psn"
        | "All";

    interface FacebookInstantGamesPlayFabIdPair {
        /** Unique Facebook Instant Games identifier for a user. */
        FacebookInstantGamesId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook Instant Games identifier. */
        PlayFabId?: string,
    }

    interface FacebookPlayFabIdPair {
        /** Unique Facebook identifier for a user. */
        FacebookId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier. */
        PlayFabId?: string,
    }

    interface FriendInfo {
        /** Available Facebook information (if the user and connected Facebook friend both have PlayFab Accounts in the same title). */
        FacebookInfo?: UserFacebookInfo,
        /** PlayFab unique identifier for this friend. */
        FriendPlayFabId?: string,
        /**
         * Available Game Center information (if the user and connected Game Center friend both have PlayFab Accounts in the same
         * title).
         */
        GameCenterInfo?: UserGameCenterInfo,
        /** The profile of the user, if requested. */
        Profile?: PlayerProfileModel,
        /**
         * Available PlayStation :tm: Network information, if the user connected PlayStation :tm Network friend both have PlayFab
         * Accounts in the same title.
         */
        PSNInfo?: UserPsnInfo,
        /** Available Steam information (if the user and connected Steam friend both have PlayFab Accounts in the same title). */
        SteamInfo?: UserSteamInfo,
        /** Tags which have been associated with this friend. */
        Tags?: string[],
        /** Title-specific display name for this friend. */
        TitleDisplayName?: string,
        /** PlayFab unique username for this friend. */
        Username?: string,
        /** Available Xbox information, (if the user and connected Xbox Live friend both have PlayFab Accounts in the same title). */
        XboxInfo?: UserXboxInfo,
    }

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
        | "EntityProfileConstraintValidationFailed"
        | "TelemetryIngestionKeyPending"
        | "TelemetryIngestionKeyNotFound"
        | "StatisticChildNameInvalid"
        | "DataIntegrityError"
        | "VirtualCurrencyCannotBeSetToOlderVersion"
        | "VirtualCurrencyMustBeWithinIntegerRange"
        | "EmailTemplateInvalidSyntax"
        | "EmailTemplateMissingCallback"
        | "PushNotificationTemplateInvalidPayload"
        | "InvalidLocalizedPushNotificationLanguage"
        | "MissingLocalizedPushNotificationMessage"
        | "PushNotificationTemplateMissingPlatformPayload"
        | "PushNotificationTemplatePayloadContainsInvalidJson"
        | "PushNotificationTemplateContainsInvalidIosPayload"
        | "PushNotificationTemplateContainsInvalidAndroidPayload"
        | "PushNotificationTemplateIosPayloadMissingNotificationBody"
        | "PushNotificationTemplateAndroidPayloadMissingNotificationBody"
        | "PushNotificationTemplateNotFound"
        | "PushNotificationTemplateMissingDefaultVersion"
        | "PushNotificationTemplateInvalidSyntax"
        | "PushNotificationTemplateNoCustomPayloadForV1"
        | "NoLeaderboardForStatistic"
        | "TitleNewsMissingDefaultLanguage"
        | "TitleNewsNotFound"
        | "TitleNewsDuplicateLanguage"
        | "TitleNewsMissingTitleOrBody"
        | "TitleNewsInvalidLanguage"
        | "EmailRecipientBlacklisted"
        | "InvalidGameCenterAuthRequest"
        | "GameCenterAuthenticationFailed"
        | "CannotEnablePartiesForTitle"
        | "PartyError"
        | "PartyRequests"
        | "PartyNoContent"
        | "PartyBadRequest"
        | "PartyUnauthorized"
        | "PartyForbidden"
        | "PartyNotFound"
        | "PartyConflict"
        | "PartyInternalServerError"
        | "PartyUnavailable"
        | "PartyTooManyRequests"
        | "PushNotificationTemplateMissingName"
        | "CannotEnableMultiplayerServersForTitle"
        | "WriteAttemptedDuringExport"
        | "MultiplayerServerTitleQuotaCoresExceeded"
        | "AutomationRuleNotFound"
        | "EntityAPIKeyLimitExceeded"
        | "EntityAPIKeyNotFound"
        | "EntityAPIKeyOrSecretInvalid"
        | "EconomyServiceUnavailable"
        | "EconomyServiceInternalError"
        | "QueryRateLimitExceeded"
        | "EntityAPIKeyCreationDisabledForEntity"
        | "ForbiddenByEntityPolicy"
        | "UpdateInventoryRateLimitExceeded"
        | "StudioCreationRateLimited"
        | "StudioCreationInProgress"
        | "DuplicateStudioName"
        | "StudioNotFound"
        | "StudioDeleted"
        | "StudioDeactivated"
        | "StudioActivated"
        | "TitleCreationRateLimited"
        | "TitleCreationInProgress"
        | "DuplicateTitleName"
        | "TitleActivationRateLimited"
        | "TitleActivationInProgress"
        | "TitleDeactivated"
        | "TitleActivated"
        | "CloudScriptAzureFunctionsExecutionTimeLimitExceeded"
        | "CloudScriptAzureFunctionsArgumentSizeExceeded"
        | "CloudScriptAzureFunctionsReturnSizeExceeded"
        | "CloudScriptAzureFunctionsHTTPRequestError"
        | "VirtualCurrencyBetaGetError"
        | "VirtualCurrencyBetaCreateError"
        | "VirtualCurrencyBetaInitialDepositSaveError"
        | "VirtualCurrencyBetaSaveError"
        | "VirtualCurrencyBetaDeleteError"
        | "VirtualCurrencyBetaRestoreError"
        | "VirtualCurrencyBetaSaveConflict"
        | "VirtualCurrencyBetaUpdateError"
        | "InsightsManagementDatabaseNotFound"
        | "InsightsManagementOperationNotFound"
        | "InsightsManagementErrorPendingOperationExists"
        | "InsightsManagementSetPerformanceLevelInvalidParameter"
        | "InsightsManagementSetStorageRetentionInvalidParameter"
        | "InsightsManagementGetStorageUsageInvalidParameter"
        | "InsightsManagementGetOperationStatusInvalidParameter"
        | "DuplicatePurchaseTransactionId"
        | "EvaluationModePlayerCountExceeded"
        | "GetPlayersInSegmentRateLimitExceeded"
        | "CloudScriptFunctionNameSizeExceeded"
        | "PaidInsightsFeaturesNotEnabled"
        | "CloudScriptAzureFunctionsQueueRequestError"
        | "EvaluationModeTitleCountExceeded"
        | "InsightsManagementTitleNotInFlight"
        | "LimitNotFound"
        | "LimitNotAvailableViaAPI"
        | "InsightsManagementSetStorageRetentionBelowMinimum"
        | "InsightsManagementSetStorageRetentionAboveMaximum"
        | "AppleNotEnabledForTitle"
        | "InsightsManagementNewActiveEventExportLimitInvalid"
        | "InsightsManagementSetPerformanceRateLimited"
        | "PartyRequestsThrottledFromRateLimiter"
        | "XboxServiceTooManyRequests"
        | "NintendoSwitchNotEnabledForTitle"
        | "RequestMultiplayerServersThrottledFromRateLimiter"
        | "TitleDataOverrideNotFound"
        | "DuplicateKeys"
        | "WasNotCreatedWithCloudRoot"
        | "LegacyMultiplayerServersDeprecated"
        | "VirtualCurrencyCurrentlyUnavailable"
        | "SteamUserNotFound"
        | "ElasticSearchOperationFailed"
        | "NotImplemented"
        | "PublisherNotFound"
        | "PublisherDeleted"
        | "ApiDisabledForMigration"
        | "ResourceNameUpdateNotAllowed"
        | "ApiNotEnabledForTitle"
        | "DuplicateTitleNameForPublisher"
        | "AzureTitleCreationInProgress"
        | "TitleConstraintsPublisherDeletion"
        | "InvalidPlayerAccountPoolId"
        | "PlayerAccountPoolNotFound"
        | "PlayerAccountPoolDeleted"
        | "TitleCleanupInProgress"
        | "AzureResourceConcurrentOperationInProgress"
        | "TitlePublisherUpdateNotAllowed"
        | "AzureResourceManagerNotSupportedInStamp"
        | "ApiNotIncludedInAzurePlayFabFeatureSet"
        | "GoogleServiceAccountFailedAuth"
        | "GoogleAPIServiceUnavailable"
        | "GoogleAPIServiceUnknownError"
        | "NoValidIdentityForAad"
        | "PlayerIdentityLinkNotFound"
        | "PhotonApplicationIdAlreadyInUse"
        | "CloudScriptUnableToDeleteProductionRevision"
        | "CustomIdNotFound"
        | "AutomationInvalidInput"
        | "AutomationInvalidRuleName"
        | "AutomationRuleAlreadyExists"
        | "AutomationRuleLimitExceeded"
        | "InvalidGooglePlayGamesServerAuthCode"
        | "PlayStreamConnectionFailed"
        | "InvalidEventContents"
        | "InsightsV1Deprecated"
        | "AnalysisSubscriptionNotFound"
        | "AnalysisSubscriptionFailed"
        | "AnalysisSubscriptionFoundAlready"
        | "AnalysisSubscriptionManagementInvalidInput"
        | "InvalidGameCenterId"
        | "InvalidNintendoSwitchAccountId"
        | "EntityAPIKeysNotSupported"
        | "IpAddressBanned"
        | "EntityLineageBanned"
        | "NamespaceMismatch"
        | "InvalidServiceConfiguration"
        | "InvalidNamespaceMismatch"
        | "LeaderboardColumnLengthMismatch"
        | "InvalidStatisticScore"
        | "LeaderboardColumnsNotSpecified"
        | "LeaderboardMaxSizeTooLarge"
        | "InvalidAttributeStatisticsSpecified"
        | "LeaderboardNotFound"
        | "TokenSigningKeyNotFound"
        | "LeaderboardNameConflict"
        | "LinkedStatisticColumnMismatch"
        | "NoLinkedStatisticToLeaderboard"
        | "StatDefinitionAlreadyLinkedToLeaderboard"
        | "LinkingStatsNotAllowedForEntityType"
        | "LeaderboardCountLimitExceeded"
        | "LeaderboardSizeLimitExceeded"
        | "LeaderboardDefinitionModificationNotAllowedWhileLinked"
        | "StatisticDefinitionModificationNotAllowedWhileLinked"
        | "LeaderboardUpdateNotAllowedWhileLinked"
        | "CloudScriptAzureFunctionsEventHubRequestError"
        | "ExternalEntityNotAllowedForTier"
        | "InvalidBaseTimeForInterval"
        | "EntityTypeMismatchWithStatDefinition"
        | "SpecifiedVersionLeaderboardNotFound"
        | "LeaderboardColumnLengthMismatchWithStatDefinition"
        | "DuplicateColumnNameFound"
        | "LinkedStatisticColumnNotFound"
        | "LinkedStatisticColumnRequired"
        | "MultipleLinkedStatisticsNotAllowed"
        | "DuplicateLinkedStatisticColumnNameFound"
        | "AggregationTypeNotAllowedForMultiColumnStatistic"
        | "MaxQueryableVersionsValueNotAllowedForTier"
        | "StatisticDefinitionHasNullOrEmptyVersionConfiguration"
        | "StatisticColumnLengthMismatch"
        | "InvalidExternalEntityId"
        | "UpdatingStatisticsUsingTransactionIdNotAvailableForFreeTier"
        | "TransactionAlreadyApplied"
        | "ReportDataNotRetrievedSuccessfully"
        | "ResetIntervalCannotBeModified"
        | "VersionIncrementRateExceeded"
        | "InvalidSteamUsername"
        | "InvalidVersionResetForLinkedLeaderboard"
        | "BattleNetNotEnabledForTitle"
        | "ReportNotProcessed"
        | "DataNotAvailable"
        | "InvalidReportName"
        | "ResourceNotModified"
        | "StudioCreationLimitExceeded"
        | "StudioDeletionInitiated"
        | "ProductDisabledForTitle"
        | "PreconditionFailed"
        | "CannotEnableAnonymousPlayerCreation"
        | "ParentCustomerAccountNotFound"
        | "AccountLinkedToABannedPlayer"
        | "AzureSubscriptionNotEligibleForLinking"
        | "MatchmakingEntityInvalid"
        | "MatchmakingPlayerAttributesInvalid"
        | "MatchmakingQueueNotFound"
        | "MatchmakingMatchNotFound"
        | "MatchmakingTicketNotFound"
        | "MatchmakingAlreadyJoinedTicket"
        | "MatchmakingTicketAlreadyCompleted"
        | "MatchmakingQueueConfigInvalid"
        | "MatchmakingMemberProfileInvalid"
        | "NintendoSwitchDeviceIdNotLinked"
        | "MatchmakingNotEnabled"
        | "MatchmakingPlayerAttributesTooLarge"
        | "MatchmakingNumberOfPlayersInTicketTooLarge"
        | "MatchmakingAttributeInvalid"
        | "MatchmakingPlayerHasNotJoinedTicket"
        | "MatchmakingRateLimitExceeded"
        | "MatchmakingTicketMembershipLimitExceeded"
        | "MatchmakingUnauthorized"
        | "MatchmakingQueueLimitExceeded"
        | "MatchmakingRequestTypeMismatch"
        | "MatchmakingBadRequest"
        | "PubSubFeatureNotEnabledForTitle"
        | "PubSubTooManyRequests"
        | "PubSubConnectionNotFoundForEntity"
        | "PubSubConnectionHandleInvalid"
        | "PubSubSubscriptionLimitExceeded"
        | "TitleConfigNotFound"
        | "TitleConfigUpdateConflict"
        | "TitleConfigSerializationError"
        | "CatalogApiNotImplemented"
        | "CatalogEntityInvalid"
        | "CatalogTitleIdMissing"
        | "CatalogPlayerIdMissing"
        | "CatalogClientIdentityInvalid"
        | "CatalogOneOrMoreFilesInvalid"
        | "CatalogItemMetadataInvalid"
        | "CatalogItemIdInvalid"
        | "CatalogSearchParameterInvalid"
        | "CatalogFeatureDisabled"
        | "CatalogConfigInvalid"
        | "CatalogItemTypeInvalid"
        | "CatalogBadRequest"
        | "CatalogTooManyRequests"
        | "InvalidCatalogItemConfiguration"
        | "LegacyEconomyDisabled"
        | "ExportInvalidStatusUpdate"
        | "ExportInvalidPrefix"
        | "ExportBlobContainerDoesNotExist"
        | "ExportNotFound"
        | "ExportCouldNotUpdate"
        | "ExportInvalidStorageType"
        | "ExportAmazonBucketDoesNotExist"
        | "ExportInvalidBlobStorage"
        | "ExportKustoException"
        | "ExportKustoConnectionFailed"
        | "ExportUnknownError"
        | "ExportCantEditPendingExport"
        | "ExportLimitExports"
        | "ExportLimitEvents"
        | "ExportInvalidPartitionStatusModification"
        | "ExportCouldNotCreate"
        | "ExportNoBackingDatabaseFound"
        | "ExportCouldNotDelete"
        | "ExportCannotDetermineEventQuery"
        | "ExportInvalidQuerySchemaModification"
        | "ExportQuerySchemaMissingRequiredColumns"
        | "ExportCannotParseQuery"
        | "ExportControlCommandsNotAllowed"
        | "ExportQueryMissingTableReference"
        | "ExportInsightsV1Deprecated"
        | "ExplorerBasicInvalidQueryName"
        | "ExplorerBasicInvalidQueryDescription"
        | "ExplorerBasicInvalidQueryConditions"
        | "ExplorerBasicInvalidQueryStartDate"
        | "ExplorerBasicInvalidQueryEndDate"
        | "ExplorerBasicInvalidQueryGroupBy"
        | "ExplorerBasicInvalidQueryAggregateType"
        | "ExplorerBasicInvalidQueryAggregateProperty"
        | "ExplorerBasicLoadQueriesError"
        | "ExplorerBasicLoadQueryError"
        | "ExplorerBasicCreateQueryError"
        | "ExplorerBasicDeleteQueryError"
        | "ExplorerBasicUpdateQueryError"
        | "ExplorerBasicSavedQueriesLimit"
        | "ExplorerBasicSavedQueryNotFound"
        | "TenantShardMapperShardNotFound"
        | "TitleNotEnabledForParty"
        | "PartyVersionNotFound"
        | "MultiplayerServerBuildReferencedByMatchmakingQueue"
        | "MultiplayerServerBuildReferencedByBuildAlias"
        | "MultiplayerServerBuildAliasReferencedByMatchmakingQueue"
        | "PartySerializationError"
        | "ExperimentationExperimentStopped"
        | "ExperimentationExperimentRunning"
        | "ExperimentationExperimentNotFound"
        | "ExperimentationExperimentNeverStarted"
        | "ExperimentationExperimentDeleted"
        | "ExperimentationClientTimeout"
        | "ExperimentationInvalidVariantConfiguration"
        | "ExperimentationInvalidVariableConfiguration"
        | "ExperimentInvalidId"
        | "ExperimentationNoScorecard"
        | "ExperimentationTreatmentAssignmentFailed"
        | "ExperimentationTreatmentAssignmentDisabled"
        | "ExperimentationInvalidDuration"
        | "ExperimentationMaxExperimentsReached"
        | "ExperimentationExperimentSchedulingInProgress"
        | "ExperimentationInvalidEndDate"
        | "ExperimentationInvalidStartDate"
        | "ExperimentationMaxDurationExceeded"
        | "ExperimentationExclusionGroupNotFound"
        | "ExperimentationExclusionGroupInsufficientCapacity"
        | "ExperimentationExclusionGroupCannotDelete"
        | "ExperimentationExclusionGroupInvalidTrafficAllocation"
        | "ExperimentationExclusionGroupInvalidName"
        | "ExperimentationLegacyExperimentInvalidOperation"
        | "ExperimentationExperimentStopFailed"
        | "MaxActionDepthExceeded"
        | "TitleNotOnUpdatedPricingPlan"
        | "SegmentManagementTitleNotInFlight"
        | "SegmentManagementNoExpressionTree"
        | "SegmentManagementTriggerActionCountOverLimit"
        | "SegmentManagementSegmentCountOverLimit"
        | "SegmentManagementInvalidSegmentId"
        | "SegmentManagementInvalidInput"
        | "SegmentManagementInvalidSegmentName"
        | "DeleteSegmentRateLimitExceeded"
        | "CreateSegmentRateLimitExceeded"
        | "UpdateSegmentRateLimitExceeded"
        | "GetSegmentsRateLimitExceeded"
        | "AsyncExportNotInFlight"
        | "AsyncExportNotFound"
        | "AsyncExportRateLimitExceeded"
        | "AnalyticsSegmentCountOverLimit"
        | "GetPlayersInSegmentDeprecated"
        | "SnapshotNotFound"
        | "InventoryApiNotImplemented"
        | "InventoryCollectionDeletionDisallowed"
        | "LobbyDoesNotExist"
        | "LobbyRateLimitExceeded"
        | "LobbyPlayerAlreadyJoined"
        | "LobbyNotJoinable"
        | "LobbyMemberCannotRejoin"
        | "LobbyCurrentPlayersMoreThanMaxPlayers"
        | "LobbyPlayerNotPresent"
        | "LobbyBadRequest"
        | "LobbyPlayerMaxLobbyLimitExceeded"
        | "LobbyNewOwnerMustBeConnected"
        | "LobbyCurrentOwnerStillConnected"
        | "LobbyMemberIsNotOwner"
        | "LobbyServerMismatch"
        | "LobbyServerNotFound"
        | "LobbyDifferentServerAlreadyJoined"
        | "LobbyServerAlreadyJoined"
        | "LobbyIsNotClientOwned"
        | "LobbyDoesNotUseConnections"
        | "EventSamplingInvalidRatio"
        | "EventSamplingInvalidEventNamespace"
        | "EventSamplingInvalidEventName"
        | "EventSamplingRatioNotFound"
        | "TelemetryKeyNotFound"
        | "TelemetryKeyInvalidName"
        | "TelemetryKeyAlreadyExists"
        | "TelemetryKeyInvalid"
        | "TelemetryKeyCountOverLimit"
        | "TelemetryKeyDeactivated"
        | "TelemetryKeyLongInsightsRetentionNotAllowed"
        | "EventSinkConnectionInvalid"
        | "EventSinkConnectionUnauthorized"
        | "EventSinkRegionInvalid"
        | "EventSinkLimitExceeded"
        | "EventSinkSasTokenInvalid"
        | "EventSinkNotFound"
        | "EventSinkNameInvalid"
        | "EventSinkSasTokenPermissionInvalid"
        | "EventSinkSecretInvalid"
        | "EventSinkTenantNotFound"
        | "EventSinkAadNotFound"
        | "EventSinkDatabaseNotFound"
        | "EventSinkTitleUnauthorized"
        | "EventSinkInsufficientRoleAssignment"
        | "EventSinkContainerNotFound"
        | "EventSinkTenantIdInvalid"
        | "EventSinkResourceMisconfigured"
        | "EventSinkAccessDenied"
        | "EventSinkWriteConflict"
        | "EventSinkResourceNotFound"
        | "EventSinkResourceFeatureNotSupported"
        | "EventSinkBucketNameInvalid"
        | "EventSinkResourceUnavailable"
        | "OperationCanceled"
        | "InvalidDisplayNameRandomSuffixLength"
        | "AllowNonUniquePlayerDisplayNamesDisableNotAllowed"
        | "PartitionedEventInvalid"
        | "PartitionedEventCountOverLimit"
        | "ManageEventNamespaceInvalid"
        | "ManageEventNameInvalid"
        | "ManagedEventNotFound"
        | "ManageEventsInvalidRatio"
        | "ManagedEventInvalid"
        | "PlayerCustomPropertiesPropertyNameTooLong"
        | "PlayerCustomPropertiesPropertyNameIsInvalid"
        | "PlayerCustomPropertiesStringPropertyValueTooLong"
        | "PlayerCustomPropertiesValueIsInvalidType"
        | "PlayerCustomPropertiesVersionMismatch"
        | "PlayerCustomPropertiesPropertyCountTooHigh"
        | "PlayerCustomPropertiesDuplicatePropertyName"
        | "PlayerCustomPropertiesPropertyDoesNotExist"
        | "AddonAlreadyExists"
        | "AddonDoesntExist"
        | "CopilotDisabled"
        | "CopilotInvalidRequest"
        | "TrueSkillUnauthorized"
        | "TrueSkillInvalidTitleId"
        | "TrueSkillInvalidScenarioId"
        | "TrueSkillInvalidModelId"
        | "TrueSkillInvalidModelName"
        | "TrueSkillInvalidPlayerIds"
        | "TrueSkillInvalidEntityKey"
        | "TrueSkillInvalidConditionKey"
        | "TrueSkillInvalidConditionValue"
        | "TrueSkillInvalidConditionAffinityWeight"
        | "TrueSkillInvalidEventName"
        | "TrueSkillMatchResultCreated"
        | "TrueSkillMatchResultAlreadySubmitted"
        | "TrueSkillBadPlayerIdInMatchResult"
        | "TrueSkillInvalidBotIdInMatchResult"
        | "TrueSkillDuplicatePlayerInMatchResult"
        | "TrueSkillNoPlayerInMatchResultTeam"
        | "TrueSkillPlayersInMatchResultExceedingLimit"
        | "TrueSkillInvalidPreMatchPartyInMatchResult"
        | "TrueSkillInvalidTimestampInMatchResult"
        | "TrueSkillStartTimeMissingInMatchResult"
        | "TrueSkillEndTimeMissingInMatchResult"
        | "TrueSkillInvalidPlayerSecondsPlayedInMatchResult"
        | "TrueSkillNoTeamInMatchResult"
        | "TrueSkillNotEnoughTeamsInMatchResult"
        | "TrueSkillInvalidRanksInMatchResult"
        | "TrueSkillNoWinnerInMatchResult"
        | "TrueSkillMissingRequiredCondition"
        | "TrueSkillMissingRequiredEvent"
        | "TrueSkillUnknownEventName"
        | "TrueSkillInvalidEventCount"
        | "TrueSkillUnknownConditionKey"
        | "TrueSkillUnknownConditionValue"
        | "TrueSkillScenarioConfigDoesNotExist"
        | "TrueSkillUnknownModelId"
        | "TrueSkillNoModelInScenario"
        | "TrueSkillNotSupportedForTitle"
        | "TrueSkillModelIsNotActive"
        | "TrueSkillUnauthorizedToQueryOtherPlayerSkills"
        | "TrueSkillInvalidMaxIterations"
        | "TrueSkillEndTimeBeforeStartTime"
        | "TrueSkillInvalidJobId"
        | "TrueSkillInvalidMetadataId"
        | "TrueSkillMissingBuildVerison"
        | "TrueSkillJobAlreadyExists"
        | "TrueSkillJobNotFound"
        | "TrueSkillOperationCanceled"
        | "TrueSkillActiveModelLimitExceeded"
        | "TrueSkillTotalModelLimitExceeded"
        | "TrueSkillUnknownInitialModelId"
        | "TrueSkillUnauthorizedForJob"
        | "TrueSkillInvalidScenarioName"
        | "TrueSkillConditionStateIsRequired"
        | "TrueSkillEventStateIsRequired"
        | "TrueSkillDuplicateEvent"
        | "TrueSkillDuplicateCondition"
        | "TrueSkillInvalidAnomalyThreshold"
        | "TrueSkillConditionKeyLimitExceeded"
        | "TrueSkillConditionValuePerKeyLimitExceeded"
        | "TrueSkillInvalidTimestamp"
        | "TrueSkillEventLimitExceeded"
        | "TrueSkillInvalidPlayers"
        | "TrueSkillTrueSkillPlayerNull"
        | "TrueSkillInvalidPlayerId"
        | "TrueSkillInvalidSquadSize"
        | "TrueSkillConditionSetNotInModel"
        | "TrueSkillModelStateInvalidForOperation"
        | "TrueSkillScenarioContainsActiveModel"
        | "TrueSkillInvalidConditionRank"
        | "TrueSkillTotalScenarioLimitExceeded"
        | "TrueSkillInvalidConditionsList"
        | "GameSaveManifestNotFound"
        | "GameSaveManifestVersionAlreadyExists"
        | "GameSaveConflictUpdatingManifest"
        | "GameSaveManifestUpdatesNotAllowed"
        | "GameSaveFileAlreadyExists"
        | "GameSaveManifestVersionNotFinalized"
        | "GameSaveUnknownFileInManifest"
        | "GameSaveFileExceededReportedSize"
        | "GameSaveFileNotUploaded"
        | "GameSaveBadRequest"
        | "GameSaveOperationNotAllowed"
        | "GameSaveDataStorageQuotaExceeded"
        | "GameSaveNewerManifestExists"
        | "GameSaveBaseVersionNotAvailable"
        | "GameSaveManifestVersionQuarantined"
        | "GameSaveManifestUploadProgressUpdateNotAllowed"
        | "GameSaveNotFinalizedManifestNotEligibleAsKnownGood"
        | "GameSaveNoUpdatesRequested"
        | "GameSaveTitleDoesNotExist"
        | "GameSaveOperationNotAllowedForTitle"
        | "GameSaveManifestFilesLimitExceeded"
        | "GameSaveManifestDescriptionUpdateNotAllowed"
        | "GameSaveTitleConfigNotFound"
        | "GameSaveTitleAlreadyOnboarded"
        | "GameSaveServiceNotEnabledForTitle"
        | "GameSaveServiceOnboardingPending"
        | "GameSaveManifestNotEligibleAsConflictingVersion"
        | "GameSaveServiceUnavailable"
        | "GameSaveConflict"
        | "GameSaveManifestNotEligibleForRollback"
        | "GameSaveTitleClientAnonymousAccountCreationNotDisabled"
        | "StateShareForbidden"
        | "StateShareTitleNotInFlight"
        | "StateShareStateNotFound"
        | "StateShareLinkNotFound"
        | "StateShareStateRedemptionLimitExceeded"
        | "StateShareStateRedemptionLimitNotUpdated"
        | "StateShareCreatedStatesLimitExceeded"
        | "StateShareIdMissingOrMalformed"
        | "PlayerCreationDisabled"
        | "AccountAlreadyExists"
        | "TagInvalid"
        | "TagTooLong"
        | "StatisticColumnAggregationMismatch"
        | "StatisticResetIntervalMismatch"
        | "VersionConfigurationCannotBeSpecifiedForLinkedStat"
        | "VersionConfigurationIsRequired"
        | "InvalidEntityTypeForAggregation"
        | "MultiLevelAggregationNotAllowed"
        | "AggregationTypeNotAllowedForLinkedStat"
        | "OperationDeniedDueToDefinitionPolicy"
        | "StatisticUpdateNotAllowedWhileLinked"
        | "UnsupportedEntityType"
        | "EntityTypeSpecifiedRequiresAggregationSource"
        | "PlayFabErrorEventNotSupportedForEntityType"
        | "MetadataLengthExceeded"
        | "MaxQueryableVersionsExceeded"
        | "StoreMetricsRequestInvalidInput"
        | "StoreMetricsErrorRetrievingMetrics";

    interface GenericPlayFabIdPair {
        /** Unique generic service identifier for a user. */
        GenericId?: GenericServiceId,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the given generic identifier. */
        PlayFabId?: string,
    }

    interface GenericServiceId {
        /** Name of the service for which the player has a unique identifier. */
        ServiceName: string,
        /** Unique identifier of the player in that service. */
        UserId: string,
    }

    /** Request has no paramaters. */
    interface GetAllSegmentsRequest {
    }

    interface GetAllSegmentsResult {
        /** Array of segments for this title. */
        Segments?: GetSegmentResult[],
    }

    interface GetCatalogItemsRequest {
        /** Which catalog is being requested. If null, uses the default catalog. */
        CatalogVersion?: string,
    }

    interface GetCatalogItemsResult {
        /** Array of items which can be purchased. */
        Catalog?: CatalogItem[],
    }

    /**
     * Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain
     * the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
     */
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

    /**
     * All items currently in the character inventory will be returned, irrespective of how they were acquired (via purchasing,
     * grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the
     * user's current inventory, and so will not be not included. Also returns their virtual currency balances.
     */
    interface GetCharacterInventoryRequest {
        /** Used to limit results to only those from a specific catalog version. */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

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

    interface GetCharacterLeaderboardRequest {
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** First entry in the leaderboard to be retrieved. */
        StartPosition: number,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
    }

    /** Note that the Position of the character in the results is for the overall leaderboard. */
    interface GetCharacterLeaderboardResult {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[],
    }

    /**
     * Character statistics are similar to user statistics in that they are numeric values which may only be updated by a
     * server operation, in order to minimize the opportunity for unauthorized changes. In addition to being available for use
     * by the title, the statistics are used for all leaderboard operations in PlayFab.
     */
    interface GetCharacterStatisticsRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GetCharacterStatisticsResult {
        /** Unique identifier of the character for the statistics. */
        CharacterId?: string,
        /** Character statistics for the requested user. */
        CharacterStatistics?: { [key: string]: number },
        /** PlayFab unique identifier of the user whose character statistics are being returned. */
        PlayFabId?: string,
    }

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

    interface GetContentDownloadUrlResult {
        /** URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour. */
        URL?: string,
    }

    interface GetFriendLeaderboardRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Indicates which other platforms' friends should be included in the response. In HTTP, it is represented as a
         * comma-separated list of platforms.
         */
        ExternalPlatformFriends?: ExternalFriendSources,
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

    interface GetFriendsListRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Indicates which other platforms' friends should be included in the response. In HTTP, it is represented as a
         * comma-separated list of platforms.
         */
        ExternalPlatformFriends?: ExternalFriendSources,
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

    /**
     * If any additional services are queried for the user's friends, those friends who also have a PlayFab account registered
     * for the title will be returned in the results. For Facebook, user has to have logged into the title's Facebook app
     * recently, and only friends who also plays this game will be included. For Xbox Live, user has to have logged into the
     * Xbox Live recently, and only friends who also play this game will be included.
     */
    interface GetFriendsListResult {
        /** Array of friends found. */
        Friends?: FriendInfo[],
    }

    interface GetLeaderboardAroundCharacterRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
    }

    /**
     * Note: When calling 'GetLeaderboardAround...' APIs, the position of the character defaults to 0 when the character does
     * not have the corresponding statistic.
     */
    interface GetLeaderboardAroundCharacterResult {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[],
    }

    interface GetLeaderboardAroundUserRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /**
     * Note: When calling 'GetLeaderboardAround...' APIs, the position of the user defaults to 0 when the user does not have
     * the corresponding statistic.
     */
    interface GetLeaderboardAroundUserResult {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[],
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string,
        /** The version of the leaderboard returned. */
        Version: number,
    }

    interface GetLeaderboardForUsersCharactersRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string,
    }

    /**
     * NOTE: The position of the character in the results is relative to the other characters for that specific user. This mean
     * the values will always be between 0 and one less than the number of characters returned regardless of the size of the
     * actual leaderboard.
     */
    interface GetLeaderboardForUsersCharactersResult {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[],
    }

    interface GetLeaderboardRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /** Note that the Position of the user in the results is for the overall leaderboard. */
    interface GetLeaderboardResult {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[],
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string,
        /** The version of the leaderboard returned. */
        Version: number,
    }

    interface GetPlayerCombinedInfoRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters: GetPlayerCombinedInfoRequestParams,
        /** PlayFabId of the user whose data will be returned */
        PlayFabId: string,
    }

    interface GetPlayerCombinedInfoRequestParams {
        /** Whether to get character inventories. Defaults to false. */
        GetCharacterInventories: boolean,
        /** Whether to get the list of characters. Defaults to false. */
        GetCharacterList: boolean,
        /** Whether to get player profile. Defaults to false. Has no effect for a new player. */
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

    interface GetPlayerCombinedInfoResult {
        /** Results for requested info. */
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
    }

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

    interface GetPlayerCustomPropertyRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Specific property name to search for in the player's properties. */
        PropertyName: string,
    }

    interface GetPlayerCustomPropertyResult {
        /** PlayFab unique identifier of the user whose properties are being returned. */
        PlayFabId?: string,
        /**
         * Indicates the current version of a player's properties that have been set. This is incremented after updates and
         * deletes. This version can be provided in update and delete calls for concurrency control.
         */
        PropertiesVersion: number,
        /** Player specific property and its corresponding value. */
        Property?: CustomPropertyDetails,
    }

    /**
     * This API allows for access to details regarding a user in the PlayFab service, usually for purposes of customer support.
     * Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be
     * taken in how this data is stored and managed. Since this call will always return the relevant information for users who
     * have accessed the title, the recommendation is to not store this data locally.
     */
    interface GetPlayerProfileRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints,
    }

    interface GetPlayerProfileResult {
        /**
         * The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel,
    }

    interface GetPlayerSegmentsResult {
        /** Array of segments the requested player currently belongs to. */
        Segments?: GetSegmentResult[],
    }

    /**
     * Initial request must contain at least a Segment ID. Subsequent requests must contain the Segment ID as well as the
     * Continuation Token. Failure to send the Continuation Token will result in a new player segment list being generated.
     * Each time the Continuation Token is passed in the length of the Total Seconds to Live is refreshed. If too much time
     * passes between requests to the point that a subsequent request is past the Total Seconds to Live an error will be
     * returned and paging will be terminated. This API is resource intensive and should not be used in scenarios which might
     * generate high request volumes. Only one request to this API at a time should be made per title. Concurrent requests to
     * the API may be rejected with the APIConcurrentRequestLimitExceeded error.
     */
    interface GetPlayersInSegmentRequest {
        /** Continuation token if retrieving subsequent pages of results. */
        ContinuationToken?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * If set to true, the profiles are loaded asynchronously and the response will include a continuation token and
         * approximate profile count until the first batch of profiles is loaded. Use this parameter to help avoid network
         * timeouts.
         */
        GetProfilesAsync?: boolean,
        /**
         * Maximum is 10,000. The value 0 will prevent loading any profiles and return only the count of profiles matching this
         * segment.
         */
        MaxBatchSize?: number,
        /**
         * Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging
         * results. Default is 300 (5 minutes). Maximum is 5,400 (90 minutes).
         */
        SecondsToLive?: number,
        /** Unique identifier for this segment. */
        SegmentId: string,
    }

    interface GetPlayersInSegmentResult {
        /** Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results. */
        ContinuationToken?: string,
        /** Array of player profiles in this segment. */
        PlayerProfiles?: PlayerProfile[],
        /** Count of profiles matching this segment. */
        ProfilesInSegment: number,
    }

    interface GetPlayersSegmentsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GetPlayerStatisticsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /** In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab. */
    interface GetPlayerStatisticsResult {
        /** PlayFab unique identifier of the user whose statistics are being returned */
        PlayFabId?: string,
        /** User statistics for the requested user. */
        Statistics?: StatisticValue[],
    }

    interface GetPlayerStatisticVersionsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** unique name of the statistic */
        StatisticName?: string,
    }

    interface GetPlayerStatisticVersionsResult {
        /** version change history of the statistic */
        StatisticVersions?: PlayerStatisticVersion[],
    }

    /**
     * This API will return a list of canonical tags which includes both namespace and tag's name. If namespace is not
     * provided, the result is a list of all canonical tags. TagName can be used for segmentation and Namespace is limited to
     * 128 characters.
     */
    interface GetPlayerTagsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Optional namespace to filter results by */
        Namespace?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GetPlayerTagsResult {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Canonical tags (including namespace and tag's name) for the requested user */
        Tags: string[],
    }

    interface GetPlayFabIDsFromBattleNetAccountIdsRequest {
        /**
         * Array of unique Battle.net account identifiers for which the title needs to get PlayFab identifiers. The array cannot
         * exceed 10 in length.
         */
        BattleNetAccountIds: string[],
    }

    /** For Battle.net account identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromBattleNetAccountIdsResult {
        /** Mapping of Battle.net account identifiers to PlayFab identifiers. */
        Data?: BattleNetAccountPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromFacebookIDsRequest {
        /**
         * Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 25 in
         * length.
         */
        FacebookIDs: string[],
    }

    /** For Facebook identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromFacebookIDsResult {
        /** Mapping of Facebook identifiers to PlayFab identifiers. */
        Data?: FacebookPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest {
        /**
         * Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers. The array
         * cannot exceed 25 in length.
         */
        FacebookInstantGamesIds: string[],
    }

    /** For Facebook Instant Games identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromFacebookInstantGamesIdsResult {
        /** Mapping of Facebook Instant Games identifiers to PlayFab identifiers. */
        Data?: FacebookInstantGamesPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromGenericIDsRequest {
        /**
         * Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a
         * maximum of 10 in a single request.
         */
        GenericIDs: GenericServiceId[],
    }

    /** For generic service identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromGenericIDsResult {
        /** Mapping of generic service identifiers to PlayFab identifiers. */
        Data?: GenericPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromNintendoServiceAccountIdsRequest {
        /**
         * Array of unique Nintendo Switch Account identifiers for which the title needs to get PlayFab identifiers. The array
         * cannot exceed 25 in length.
         */
        NintendoAccountIds: string[],
    }

    /** For Nintendo Service Account identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromNintendoServiceAccountIdsResult {
        /** Mapping of Nintendo Switch Service Account identifiers to PlayFab identifiers. */
        Data?: NintendoServiceAccountPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest {
        /**
         * Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. The array
         * cannot exceed 25 in length.
         */
        NintendoSwitchDeviceIds: string[],
    }

    /** For Nintendo Switch Device identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult {
        /** Mapping of Nintendo Switch Device identifiers to PlayFab identifiers. */
        Data?: NintendoSwitchPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromOpenIdsRequest {
        /**
         * Array of unique OpenId Connect identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed
         * 10 in length.
         */
        OpenIdSubjectIdentifiers: OpenIdSubjectIdentifier[],
    }

    /** For OpenId identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromOpenIdsResult {
        /** Mapping of OpenId Connect identifiers to PlayFab identifiers. */
        Data?: OpenIdSubjectIdentifierPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromPSNAccountIDsRequest {
        /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /**
         * Array of unique PlayStation :tm: Network identifiers for which the title needs to get PlayFab identifiers. The array
         * cannot exceed 25 in length.
         */
        PSNAccountIDs: string[],
    }

    /** For PlayStation :tm: Network identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromPSNAccountIDsResult {
        /** Mapping of PlayStation :tm: Network identifiers to PlayFab identifiers. */
        Data?: PSNAccountPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromPSNOnlineIDsRequest {
        /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /**
         * Array of unique PlayStation :tm: Network identifiers for which the title needs to get PlayFab identifiers. The array
         * cannot exceed 25 in length.
         */
        PSNOnlineIDs: string[],
    }

    /** For PlayStation :tm: Network identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromPSNOnlineIDsResult {
        /** Mapping of PlayStation :tm: Network identifiers to PlayFab identifiers. */
        Data?: PSNOnlinePlayFabIdPair[],
    }

    interface GetPlayFabIDsFromSteamIDsRequest {
        /**
         * Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. The array
         * cannot exceed 25 in length.
         */
        SteamStringIDs?: string[],
    }

    /** For Steam identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromSteamIDsResult {
        /** Mapping of Steam identifiers to PlayFab identifiers. */
        Data?: SteamPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromSteamNamesRequest {
        /**
         * Array of unique Steam identifiers for which the title needs to get PlayFab identifiers. The array cannot exceed 25 in
         * length.
         */
        SteamNames: string[],
    }

    /** For Steam identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromSteamNamesResult {
        /** Mapping of Steam identifiers to PlayFab identifiers. */
        Data?: SteamNamePlayFabIdPair[],
    }

    interface GetPlayFabIDsFromTwitchIDsRequest {
        /**
         * Array of unique Twitch identifiers (Twitch's _id) for which the title needs to get PlayFab identifiers. The array cannot
         * exceed 25 in length.
         */
        TwitchIds: string[],
    }

    /** For Twitch identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromTwitchIDsResult {
        /** Mapping of Twitch identifiers to PlayFab identifiers. */
        Data?: TwitchPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromXboxLiveIDsRequest {
        /** The ID of Xbox Live sandbox. */
        Sandbox?: string,
        /**
         * Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers. The array cannot
         * exceed 25 in length.
         */
        XboxLiveAccountIDs: string[],
    }

    /** For XboxLive identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromXboxLiveIDsResult {
        /** Mapping of Xbox Live identifiers to PlayFab identifiers. */
        Data?: XboxLiveAccountPlayFabIdPair[],
    }

    /**
     * This API is designed to return publisher-specific values which can be read, but not written to, by the client. This data
     * is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles
     * assigned to a publisher can use this API. For more information email helloplayfab@microsoft.com. Note that there may up
     * to a minute delay in between updating title data and this API call returning the newest value.
     */
    interface GetPublisherDataRequest {
        /** array of keys to get back data from the Publisher data blob, set by the admin tools */
        Keys: string[],
    }

    interface GetPublisherDataResult {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null },
    }

    interface GetRandomResultTablesRequest {
        /**
         * Specifies the catalog version that should be used to retrieve the Random Result Tables. If unspecified, uses
         * default/primary catalog.
         */
        CatalogVersion?: string,
        /** The unique identifier of the Random Result Table to use. */
        TableIDs: string[],
    }

    /**
     * Note that if a specified Random Result Table contains no entries, or does not exist in the catalog, an InvalidDropTable
     * error will be returned.
     */
    interface GetRandomResultTablesResult {
        /** array of random result tables currently available */
        Tables?: { [key: string]: RandomResultTableListing },
    }

    interface GetSegmentResult {
        /** Identifier of the segments AB Test, if it is attached to one. */
        ABTestParent?: string,
        /** Unique identifier for this segment. */
        Id: string,
        /** Segment name. */
        Name?: string,
    }

    interface GetServerCustomIDsFromPlayFabIDsRequest {
        /**
         * Array of unique PlayFab player identifiers for which the title needs to get server custom identifiers. Cannot contain
         * more than 25 identifiers.
         */
        PlayFabIDs: string[],
    }

    /** For a PlayFab account that isn't associated with a server custom identity, ServerCustomId will be null. */
    interface GetServerCustomIDsFromPlayFabIDsResult {
        /** Mapping of server custom player identifiers to PlayFab identifiers. */
        Data?: ServerCustomIDPlayFabIDPair[],
    }

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

    interface GetSharedGroupDataResult {
        /** Data for the requested keys. */
        Data?: { [key: string]: SharedGroupDataRecord },
        /** List of PlayFabId identifiers for the members of this group, if requested. */
        Members?: string[],
    }

    interface GetStoreItemsResult {
        /** The base catalog that this store is a part of. */
        CatalogVersion?: string,
        /** Additional data about the store. */
        MarketingData?: StoreMarketingModel,
        /** How the store was last updated (Admin or a third party). */
        Source?: SourceType,
        /** Array of items which can be purchased from this store. */
        Store?: StoreItem[],
        /** The ID of this store. */
        StoreId?: string,
    }

    /**
     * A store contains an array of references to items defined in one or more catalog versions of the game, along with the
     * prices for the item, in both real world and virtual currencies. These prices act as an override to any prices defined in
     * the catalog. In this way, the base definitions of the items may be defined in the catalog, with all associated
     * properties, while the pricing can be set for each store, as needed. This allows for subsets of goods to be defined for
     * different purposes (in order to simplify showing some, but not all catalog items to users, based upon different
     * characteristics), along with unique prices. Note that all prices defined in the catalog and store definitions for the
     * item are considered valid, and that a compromised client can be made to send a request for an item based upon any of
     * these definitions. If no price is specified in the store for an item, the price set in the catalog should be displayed
     * to the user.
     */
    interface GetStoreItemsServerRequest {
        /** Catalog version to store items from. Use default catalog version if null */
        CatalogVersion?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Optional identifier for the player to use in requesting the store information - if used, segment overrides will be
         * applied
         */
        PlayFabId?: string,
        /** Unqiue identifier for the store which is being requested */
        StoreId: string,
    }

    /**
     * This query retrieves the current time from one of the servers in PlayFab. Please note that due to clock drift between
     * servers, there is a potential variance of up to 5 seconds.
     */
    interface GetTimeRequest {
    }

    /** Time is always returned as Coordinated Universal Time (UTC). */
    interface GetTimeResult {
        /** Current server time when the request was received, in UTC */
        Time: string,
    }

    /**
     * This API is designed to return title specific values which can be read, but not written to, by the client. For example,
     * a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths,
     * movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new
     * build. If an override label is specified in the request, the overrides are applied automatically and returned with the
     * title data. Note that there may up to a minute delay in between updating title data and this API call returning the
     * newest value.
     */
    interface GetTitleDataRequest {
        /** Specific keys to search for in the title data (leave null to get all keys) */
        Keys?: string[],
        /**
         * Optional field that specifies the name of an override. This value is ignored when used by the game client; otherwise,
         * the overrides are applied automatically to the title data.
         */
        OverrideLabel?: string,
    }

    interface GetTitleDataResult {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null },
    }

    interface GetTitleNewsRequest {
        /** Limits the results to the last n entries. Defaults to 10 if not set. */
        Count?: number,
    }

    interface GetTitleNewsResult {
        /** Array of localized news items. */
        News?: TitleNewsItem[],
    }

    /**
     * This API allows for access to details regarding a user in the PlayFab service, usually for purposes of customer support.
     * Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be
     * taken in how this data is stored and managed. Since this call will always return the relevant information for users who
     * have accessed the title, the recommendation is to not store this data locally.
     */
    interface GetUserAccountInfoRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GetUserAccountInfoResult {
        /** Account details for the user whose information was requested. */
        UserInfo?: UserAccountInfo,
    }

    /** Get all bans for a user, including inactive and expired bans. */
    interface GetUserBansRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GetUserBansResult {
        /** Information about the bans */
        BanData?: BanInfo[],
    }

    /**
     * Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain
     * the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
     */
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

    /**
     * All items currently in the user inventory will be returned, irrespective of how they were acquired (via purchasing,
     * grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the
     * user's current inventory, and so will not be not included.
     */
    interface GetUserInventoryRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

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

    /** Grants a character to the user of the type and name specified in the request. */
    interface GrantCharacterToUserRequest {
        /** Non-unique display name of the character being granted (1-40 characters in length). */
        CharacterName: string,
        /** Type of the character being granted; statistics can be sliced based on this value. */
        CharacterType: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GrantCharacterToUserResult {
        /** Unique identifier tagged to this character. */
        CharacterId?: string,
    }

    /**
     * Result of granting an item to a user. Note, to retrieve additional information for an item such as Tags, Description
     * that are the same across all instances of the item, a call to GetCatalogItems is required. The ItemID of can be matched
     * to a catalog entry, which contains the additional information. Also note that Custom Data is only set when the User's
     * specific instance has updated the CustomData via a call to UpdateUserInventoryItemCustomData. Other fields such as
     * UnitPrice and UnitCurrency are only set when the item was granted via a purchase.
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
        /**
         * A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog
         * item's custom data.
         */
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
        /** Currency type for the cost of the catalog item. Not available when granting items. */
        UnitCurrency?: string,
        /** Cost of the catalog item in the given currency. Not available when granting items. */
        UnitPrice: number,
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number,
    }

    /**
     * This function directly adds inventory items to the character's inventories. As a result of this operations, the user
     * will not be charged any transaction fee, regardless of the inventory item catalog definition. Please note that the
     * processing time for inventory grants and purchases increases fractionally the more items are in the inventory, and the
     * more items are in the grant/purchase operation.
     */
    interface GrantItemsToCharacterRequest {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string,
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Array of itemIds to grant to the user. */
        ItemIds?: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface GrantItemsToCharacterResult {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[],
    }

    /**
     * This function directly adds inventory items to the user's inventories. As a result of this operations, the user will not
     * be charged any transaction fee, regardless of the inventory item catalog definition. Please note that the processing
     * time for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items
     * are in the grant/purchase operation.
     */
    interface GrantItemsToUserRequest {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string,
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Array of itemIds to grant to the user. */
        ItemIds: string[],
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** Please note that the order of the items in the response may not match the order of items in the request. */
    interface GrantItemsToUserResult {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[],
    }

    /**
     * This function directly adds inventory items to user inventories. As a result of this operations, the user will not be
     * charged any transaction fee, regardless of the inventory item catalog definition. Please note that the processing time
     * for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items are in
     * the grant/purchase operation.
     */
    interface GrantItemsToUsersRequest {
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Array of items to grant and the users to whom the items are to be granted. */
        ItemGrants: ItemGrant[],
    }

    /** Please note that the order of the items in the response may not match the order of items in the request. */
    interface GrantItemsToUsersResult {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[],
    }

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
     * A unique instance of an item in a user's inventory. Note, to retrieve additional information for an item such as Tags,
     * Description that are the same across all instances of the item, a call to GetCatalogItems is required. The ItemID of can
     * be matched to a catalog entry, which contains the additional information. Also note that Custom Data is only set when
     * the User's specific instance has updated the CustomData via a call to UpdateUserInventoryItemCustomData. Other fields
     * such as UnitPrice and UnitCurrency are only set when the item was granted via a purchase.
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
        /**
         * A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog
         * item's custom data.
         */
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
        /** Currency type for the cost of the catalog item. Not available when granting items. */
        UnitCurrency?: string,
        /** Cost of the catalog item in the given currency. Not available when granting items. */
        UnitPrice: number,
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number,
    }

    interface LinkBattleNetAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to a specific Battle.net account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** The JSON Web Token (JWT) returned by Battle.net after login */
        IdentityToken: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

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

    interface LinkNintendoServiceAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to a specific Nintendo Switch account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /**
         * The JSON Web token (JWT) returned by Nintendo after login. Used to validate the request and find the user ID (Nintendo
         * Switch subject) to link with.
         */
        IdentityToken: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface LinkNintendoServiceAccountSubjectRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to a specific Nintendo Service Account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The Nintendo Service Account subject or id to link to the PlayFab user. */
        Subject: string,
    }

    interface LinkNintendoSwitchDeviceIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the Nintendo Switch Device ID, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Nintendo Switch unique identifier for the user's device. */
        NintendoSwitchDeviceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface LinkNintendoSwitchDeviceIdResult {
    }

    interface LinkPSNAccountRequest {
        /** Authentication code provided by the PlayStation :tm: Network. */
        AuthCode: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code */
        RedirectUri: string,
    }

    interface LinkPSNAccountResult {
    }

    interface LinkPSNIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Id of the PlayStation :tm: Network user. Also known as the PSN Account Id. */
        PSNUserId: string,
    }

    interface LinkPSNIdResponse {
    }

    interface LinkServerCustomIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the custom ID, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Unique PlayFab identifier. */
        PlayFabId: string,
        /** Unique server custom identifier for this player. */
        ServerCustomId: string,
    }

    interface LinkServerCustomIdResult {
    }

    interface LinkSteamIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** PlayFab unique identifier of the user to link. */
        PlayFabId: string,
        /** Unique Steam identifier for a user. */
        SteamId: string,
    }

    interface LinkSteamIdResult {
    }

    interface LinkTwitchAccountRequest {
        /** Twitch access token for authentication. */
        AccessToken: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** PlayFab unique identifier of the user to link. */
        PlayFabId: string,
    }

    interface LinkXboxAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** PlayFab unique identifier of the user to link. */
        PlayFabId: string,
        /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
        XboxToken: string,
    }

    interface LinkXboxAccountResult {
    }

    interface LinkXboxIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** PlayFab unique identifier of the user to link. */
        PlayFabId: string,
        /** The id of Xbox Live sandbox. */
        Sandbox: string,
        /** Unique Xbox identifier for a user. */
        XboxId: string,
    }

    interface ListPlayerCustomPropertiesRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface ListPlayerCustomPropertiesResult {
        /** PlayFab unique identifier of the user whose properties are being returned. */
        PlayFabId?: string,
        /** Player specific properties and their corresponding values for this title. */
        Properties?: CustomPropertyDetails[],
        /**
         * Indicates the current version of a player's properties that have been set. This is incremented after updates and
         * deletes. This version can be provided in update and delete calls for concurrency control.
         */
        PropertiesVersion: number,
    }

    /** Returns a list of every character that currently belongs to a user. */
    interface ListUsersCharactersRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface ListUsersCharactersResult {
        /** The requested list of characters. */
        Characters?: CharacterResult[],
    }

    /** Contains the localized push notification content. */
    interface LocalizedPushNotificationProperties {
        /** Message of the localized push notification template. */
        Message?: string,
        /** Subject of the localized push notification template. */
        Subject?: string,
    }

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
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount";

    /**
     * On Android devices, the recommendation is to use the Settings.Secure.ANDROID_ID as the AndroidDeviceId, as described in
     * this blog post (http://android-developers.blogspot.com/2011/03/identifying-app-installations.html). More information on
     * this identifier can be found in the Android documentation
     * (http://developer.android.com/reference/android/provider/Settings.Secure.html). If this is the first time a user has
     * signed in with the Android device and CreateAccount is set to true, a new PlayFab account will be created and linked to
     * the Android device ID. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no
     * PlayFab account is linked to the Android device, an error indicating this will be returned, so that the title can guide
     * the user through creation of a PlayFab account. Please note that while multiple devices of this type can be linked to a
     * single user account, only the one most recently used to login (or most recently linked) will be reflected in the user's
     * account information. We will be updating to show all linked devices in a future release.
     */
    interface LoginWithAndroidDeviceIDRequest {
        /** Specific model of the user's device. */
        AndroidDevice?: string,
        /** Android device identifier for the user's device. */
        AndroidDeviceId: string,
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Specific Operating System version for the user's device. */
        OS?: string,
    }

    interface LoginWithBattleNetRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The JSON Web Token (JWT) returned by Battle.net after login */
        IdentityToken: string,
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
    }

    /**
     * It is highly recommended that developers ensure that it is extremely unlikely that a customer could generate an ID which
     * is already in use by another customer. If this is the first time a user has signed in with the Custom ID and
     * CreateAccount is set to true, a new PlayFab account will be created and linked to the Custom ID. In this case, no email
     * or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Custom ID, an
     * error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account.
     */
    interface LoginWithCustomIDRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** Custom unique identifier for the user, generated by the title. */
        CustomId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
    }

    /**
     * On iOS devices, the identifierForVendor
     * (https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/index.html#//apple_ref/occ/instp/UIDevice/identifierForVendor)
     * must be used as the DeviceId, as the UIDevice uniqueIdentifier has been deprecated as of iOS 5, and use of the
     * advertisingIdentifier for this purpose will result in failure of Apple's certification process. If this is the first
     * time a user has signed in with the iOS device and CreateAccount is set to true, a new PlayFab account will be created
     * and linked to the vendor-specific iOS device ID. In this case, no email or username will be associated with the PlayFab
     * account. Otherwise, if no PlayFab account is linked to the iOS device, an error indicating this will be returned, so
     * that the title can guide the user through creation of a PlayFab account.
     */
    interface LoginWithIOSDeviceIDRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Vendor-specific iOS identifier for the user's device. */
        DeviceId: string,
        /** Specific model of the user's device. */
        DeviceModel?: string,
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Specific Operating System version for the user's device. */
        OS?: string,
    }

    /**
     * If this is the first time a user has signed in with the PlayStation :tm: Network account and CreateAccount is set to
     * true, a new PlayFab account will be created and linked to the PlayStation :tm: Network account. In this case, no email
     * or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the PlayStation
     * :tm: Network account, an error indicating this will be returned, so that the title can guide the user through creation
     * of a PlayFab account.
     */
    interface LoginWithPSNRequest {
        /** Auth code provided by the PlayStation :tm: Network OAuth provider. */
        AuthCode: string,
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Id of the PlayStation :tm: Network issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code */
        RedirectUri: string,
    }

    interface LoginWithServerCustomIdRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string,
        /** The backend server identifier for this player. */
        ServerCustomId: string,
    }

    /**
     * If this is the first time a user has signed in with the Steam ID and CreateAccount is set to true, a new PlayFab account
     * will be created and linked to the Steam account. In this case, no email or username will be associated with the PlayFab
     * account. Otherwise, if no PlayFab account is linked to the Steam account, an error indicating this will be returned, so
     * that the title can guide the user through creation of a PlayFab account. Steam users that are not logged into the Steam
     * Client app will only have their Steam username synced, other data, such as currency and country will not be available
     * until they login while the Client is open.
     */
    interface LoginWithSteamIdRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Unique Steam identifier for a user. */
        SteamId: string,
    }

    /**
     * More details regarding Twitch and their authentication system can be found at
     * https://github.com/justintv/Twitch-API/blob/master/authentication.md. Developers must provide the Twitch access token
     * that is generated using one of the Twitch authentication flows. PlayFab will use the title's unique Twitch Client ID to
     * authenticate the token and log in to the PlayFab system. If CreateAccount is set to true and there is not already a user
     * matched to the Twitch username that generated the token, then PlayFab will create a new account for this user and link
     * the ID. In this case, no email or username will be associated with the PlayFab account. If there is already a different
     * PlayFab user linked with this account, then an error will be returned.
     */
    interface LoginWithTwitchRequest {
        /** Twitch access token for authentication. */
        AccessToken: string,
        /** If true, create a new PlayFab account if one does not exist. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Parameters for requesting additional player info. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Player secret for additional authentication. */
        PlayerSecret?: string,
        /** PlayFab unique identifier of the user. */
        PlayFabId: string,
    }

    /**
     * If this is the first time a user has signed in with the Xbox ID and CreateAccount is set to true, a new PlayFab account
     * will be created and linked to the Xbox Live account. In this case, no email or username will be associated with the
     * PlayFab account. Otherwise, if no PlayFab account is linked to the Xbox Live account, an error indicating this will be
     * returned, so that the title can guide the user through creation of a PlayFab account.
     */
    interface LoginWithXboxIdRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** The id of Xbox Live sandbox. */
        Sandbox: string,
        /** Unique Xbox identifier for a user. */
        XboxId: string,
    }

    /**
     * If this is the first time a user has signed in with the Xbox Live account and CreateAccount is set to true, a new
     * PlayFab account will be created and linked to the Xbox Live account. In this case, no email or username will be
     * associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Xbox Live account, an error
     * indicating this will be returned, so that the title can guide the user through creation of a PlayFab account.
     */
    interface LoginWithXboxRequest {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams,
        /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
        XboxToken: string,
    }

    interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any,
        /** 'Debug', 'Info', or 'Error' */
        Level?: string,
        Message?: string,
    }

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

    interface ModifyCharacterVirtualCurrencyResult {
        /** Balance of the virtual currency after modification. */
        Balance: number,
        /** Name of the virtual currency which was modified. */
        VirtualCurrency?: string,
    }

    /**
     * This function can both add and remove uses of an inventory item. If the number of uses drops below zero, the item will
     * be removed from active inventory.
     */
    interface ModifyItemUsesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique instance identifier of the item to be modified. */
        ItemInstanceId: string,
        /** PlayFab unique identifier of the user whose item is being modified. */
        PlayFabId: string,
        /** Number of uses to add to the item. Can be negative to remove uses. */
        UsesToAdd: number,
    }

    interface ModifyItemUsesResult {
        /** Unique instance identifier of the item with uses consumed. */
        ItemInstanceId?: string,
        /** Number of uses remaining on the item. */
        RemainingUses: number,
    }

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

    /**
     * Transfers an item from a character to another character that is owned by the same user. This will remove the item from
     * the character's inventory (until and unless it is moved back), and will enable the other character to make use of the
     * item instead.
     */
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

    interface MoveItemToCharacterFromCharacterResult {
    }

    /**
     * Transfers an item from a user to a character she owns. This will remove the item from the user's inventory (until and
     * unless it is moved back), and will enable the character to make use of the item instead.
     */
    interface MoveItemToCharacterFromUserRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface MoveItemToCharacterFromUserResult {
    }

    /**
     * Transfers an item from a character to the owning user. This will remove the item from the character's inventory (until
     * and unless it is moved back), and will enable the user to make use of the item instead.
     */
    interface MoveItemToUserFromCharacterRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface MoveItemToUserFromCharacterResult {
    }

    interface NintendoServiceAccountPlayFabIdPair {
        /** Unique Nintendo Switch Service Account identifier for a user. */
        NintendoServiceAccountId?: string,
        /**
         * Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Service Account
         * identifier.
         */
        PlayFabId?: string,
    }

    interface NintendoSwitchPlayFabIdPair {
        /** Unique Nintendo Switch Device identifier for a user. */
        NintendoSwitchDeviceId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier. */
        PlayFabId?: string,
    }

    interface OpenIdSubjectIdentifier {
        /** The issuer URL for the OpenId Connect provider, or the override URL if an override exists. */
        Issuer: string,
        /** The unique subject identifier within the context of the issuer. */
        Subject: string,
    }

    interface OpenIdSubjectIdentifierPlayFabIdPair {
        /** Unique OpenId Connect identifier for a user. */
        OpenIdSubjectIdentifier?: OpenIdSubjectIdentifier,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the OpenId Connect identifier. */
        PlayFabId?: string,
    }

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

    interface PlayerProfile {
        /** Array of ad campaigns player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttribution[],
        /** Image URL of the player's avatar. */
        AvatarUrl?: string,
        /** Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date. */
        BannedUntil?: string,
        /** The prediction of the player to churn within the next seven days. */
        ChurnPrediction?: ChurnRiskLevel,
        /** Array of contact email addresses associated with the player */
        ContactEmailAddresses?: ContactEmailInfo[],
        /** Player record created */
        Created?: string,
        /** Dictionary of player's custom properties. */
        CustomProperties?: { [key: string]: any },
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
        /** List of player variants for experimentation */
        PlayerExperimentVariants?: string[],
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
        /**
         * List of experiment variants for the player. Note that these variants are not guaranteed to be up-to-date when returned
         * during login because the player profile is updated only after login. Instead, use the LoginResult.TreatmentAssignment
         * property during login to get the correct variants and variables.
         */
        ExperimentVariants?: string[],
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
        /** Whether to show player's experiment variants. Defaults to false */
        ShowExperimentVariants: boolean,
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

    interface PSNAccountPlayFabIdPair {
        /**
         * Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation :tm: Network
         * identifier.
         */
        PlayFabId?: string,
        /** Unique PlayStation :tm: Network identifier for a user. */
        PSNAccountId?: string,
    }

    interface PSNOnlinePlayFabIdPair {
        /**
         * Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation :tm: Network
         * identifier.
         */
        PlayFabId?: string,
        /** Unique PlayStation :tm: Network identifier for a user. */
        PSNOnlineId?: string,
    }

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

    type PushNotificationPlatform = "ApplePushNotificationService"

        | "GoogleCloudMessaging";

    interface PushNotificationRegistration {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
    }

    interface PushNotificationRegistrationModel {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
    }

    interface RandomResultTableListing {
        /** Catalog version this table is associated with */
        CatalogVersion?: string,
        /** Child nodes that indicate what kind of drop table item this actually is. */
        Nodes: ResultTableNode[],
        /** Unique name for this drop table */
        TableId: string,
    }

    /**
     * Coupon codes can be created for any item, or set of items, in the catalog for the title. This operation causes the
     * coupon to be consumed, and the specific items to be awarded to the user. Attempting to re-use an already consumed code,
     * or a code which has not yet been created in the service, will result in an error.
     */
    interface RedeemCouponRequest {
        /** Catalog version of the coupon. */
        CatalogVersion?: string,
        /** Optional identifier for the Character that should receive the item. If null, item is added to the player */
        CharacterId?: string,
        /** Generated coupon code to redeem. */
        CouponCode: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface RedeemCouponResult {
        /** Items granted to the player as a result of redeeming the coupon. */
        GrantedItems?: ItemInstance[],
    }

    interface RemoveFriendRequest {
        /** PlayFab identifier of the friend account which is to be removed. */
        FriendPlayFabId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface RemoveGenericIDRequest {
        /** Generic service identifier to be removed from the player. */
        GenericId: GenericServiceId,
        /** PlayFabId of the user to remove. */
        PlayFabId: string,
    }

    /**
     * This API will trigger a player_tag_removed event and remove a tag with the given TagName and PlayFabID from the
     * corresponding player profile. TagName can be used for segmentation and it is limited to 256 characters
     */
    interface RemovePlayerTagRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Unique tag for player profile. */
        TagName: string,
    }

    interface RemovePlayerTagResult {
    }

    interface RemoveSharedGroupMembersRequest {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[],
        /** Unique identifier for the shared group. */
        SharedGroupId: string,
    }

    interface RemoveSharedGroupMembersResult {
    }

    interface ReportPlayerServerRequest {
        /** Optional additional comment by reporting player. */
        Comment?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab identifier of the reported player. */
        ReporteeId: string,
        /** PlayFabId of the reporting player. */
        ReporterId: string,
    }

    /**
     * Players are currently limited to five reports per day. Attempts by a single user account to submit reports beyond five
     * will result in Updated being returned as false.
     */
    interface ReportPlayerServerResult {
        /** The number of remaining reports which may be filed today by this reporting player. */
        SubmissionsRemaining: number,
    }

    interface ResultTableNode {
        /** Either an ItemId, or the TableId of another random result table */
        ResultItem: string,
        /** Whether this entry in the table is an item or a link to another table */
        ResultItemType: ResultTableNodeType,
        /** How likely this is to be rolled - larger numbers add more weight */
        Weight: number,
    }

    type ResultTableNodeType = "ItemId"

        | "TableId";

    /**
     * Setting the active state of all non-expired bans for a user to Inactive. Expired bans with an Active state will be
     * ignored, however. Returns information about applied updates only.
     */
    interface RevokeAllBansForUserRequest {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface RevokeAllBansForUserResult {
        /** Information on the bans that were revoked. */
        BanData?: BanInfo[],
    }

    /**
     * Setting the active state of all bans requested to Inactive regardless of whether that ban has already expired. BanIds
     * that do not exist will be skipped. Returns information about applied updates only.
     */
    interface RevokeBansRequest {
        /** Ids of the bans to be revoked. Maximum 100. */
        BanIds: string[],
    }

    interface RevokeBansResult {
        /** Information on the bans that were revoked */
        BanData?: BanInfo[],
    }

    interface RevokeInventoryItem {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /**
     * In cases where the inventory item in question is a "crate", and the items it contained have already been dispensed, this
     * will not revoke access or otherwise remove the items which were dispensed.
     */
    interface RevokeInventoryItemRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /**
     * In cases where the inventory item in question is a "crate", and the items it contained have already been dispensed, this
     * will not revoke access or otherwise remove the items which were dispensed.
     */
    interface RevokeInventoryItemsRequest {
        /** Array of player items to revoke, between 1 and 25 items. */
        Items: RevokeInventoryItem[],
    }

    interface RevokeInventoryItemsResult {
        /** Collection of any errors that occurred during processing. */
        Errors?: RevokeItemError[],
    }

    interface RevokeInventoryResult {
    }

    interface RevokeItemError {
        /** Specific error that was encountered. */
        Error?: GenericErrorCodes,
        /** Item information that failed to be revoked. */
        Item?: RevokeInventoryItem,
    }

    /** Represents the save push notification template request. */
    interface SavePushNotificationTemplateRequest {
        /** Android JSON for the notification template. */
        AndroidPayload?: string,
        /** Id of the push notification template. */
        Id?: string,
        /** IOS JSON for the notification template. */
        IOSPayload?: string,
        /** Dictionary of localized push notification templates with the language as the key. */
        LocalizedPushNotificationTemplates?: { [key: string]: LocalizedPushNotificationProperties },
        /** Name of the push notification template. */
        Name: string,
    }

    /** Represents the save push notification template result. */
    interface SavePushNotificationTemplateResult {
        /** Id of the push notification template that was saved. */
        PushNotificationTemplateId?: string,
    }

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

    /**
     * PlayFab accounts which have valid email address or username will be able to receive a password reset email using this
     * API.The email sent must be an account recovery email template. The username or email can be passed in to send the email
     */
    interface SendCustomAccountRecoveryEmailRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** User email address attached to their account */
        Email?: string,
        /** The email template id of the account recovery email template to send. */
        EmailTemplateId: string,
        /** The user's username requesting an account recovery. */
        Username?: string,
    }

    interface SendCustomAccountRecoveryEmailResult {
    }

    /**
     * Sends an email for only players that have contact emails associated with them. Takes in an email template ID
     * specifyingthe email template to send.
     */
    interface SendEmailFromTemplateRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The email template id of the email template to send. */
        EmailTemplateId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface SendEmailFromTemplateResult {
    }

    /** Represents the request for sending a push notification template to a recipient. */
    interface SendPushNotificationFromTemplateRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Id of the push notification template. */
        PushNotificationTemplateId: string,
        /** PlayFabId of the push notification recipient. */
        Recipient: string,
    }

    interface SendPushNotificationRequest {
        /**
         * Allows you to provide precisely formatted json to target devices. This is an advanced feature, allowing you to deliver
         * to custom plugin logic, fields, or functionality not natively supported by PlayFab.
         */
        AdvancedPlatformDelivery?: AdvancedPushPlatformMsg[],
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface SendPushNotificationResult {
    }

    interface ServerCustomIDPlayFabIDPair {
        /** Unique PlayFab identifier. */
        PlayFabId?: string,
        /** Unique server custom identifier for this player. */
        ServerCustomId?: string,
    }

    interface ServerLoginResult {
        /**
         * If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
         * returned.
         */
        EntityToken?: EntityTokenResponse,
        /** Results for requested info. */
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload,
        /** The time of this user's previous login. If there was no previous login, then it's DateTime.MinValue */
        LastLoginTime?: string,
        /** True if the master_player_account was newly created on this login. */
        NewlyCreated: boolean,
        /** Player's unique PlayFabId. */
        PlayFabId?: string,
        /** Unique token authorizing the user and game at the server level, for the current session. */
        SessionTicket?: string,
        /** Settings specific to this user. */
        SettingsForUser?: UserSettings,
        /** The experimentation treatments for this user at the time of login. */
        TreatmentAssignment?: TreatmentAssignment,
    }

    /**
     * This operation is not additive. It will completely replace the tag list for the specified user. Please note that only
     * users in the PlayFab friends list can be assigned tags. Attempting to set a tag on a friend only included in the friends
     * list from a social site integration (such as Facebook or Steam) will return the AccountNotFound error.
     */
    interface SetFriendTagsRequest {
        /** PlayFab identifier of the friend account to which the tag(s) should be applied. */
        FriendPlayFabId: string,
        /** PlayFab identifier of the player whose friend is to be updated. */
        PlayFabId: string,
        /** Array of tags to set on the friend account. */
        Tags: string[],
    }

    /**
     * APIs that require signatures require that the player have a configured Player Secret Key that is used to sign all
     * requests. Players that don't have a secret will be blocked from making API calls until it is configured. To create a
     * signature header add a SHA256 hashed string containing UTF8 encoded JSON body as it will be sent to the server, the
     * current time in UTC formatted to ISO 8601, and the players secret formatted as 'body.date.secret'. Place the resulting
     * hash into the header X-PlayFab-Signature, along with a header X-PlayFab-Timestamp of the same UTC timestamp used in the
     * signature.
     */
    interface SetPlayerSecretRequest {
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface SetPlayerSecretResult {
    }

    /**
     * This API is designed to store publisher-specific values which can be read, but not written to, by the client. This data
     * is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles
     * assigned to a publisher can use this API. This operation is additive. If a Key does not exist in the current dataset, it
     * will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new
     * Value. For more information email helloplayfab@microsoft.com
     */
    interface SetPublisherDataRequest {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string,
        /** new value to set. Set to null to remove a value */
        Value?: string,
    }

    interface SetPublisherDataResult {
    }

    /**
     * This API is designed to store title specific values which can be read, but not written to, by the client. For example, a
     * developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths,
     * movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new
     * build. This operation is additive. If a Key does not exist in the current dataset, it will be added with the specified
     * Value. If it already exists, the Value for that key will be overwritten with the new Value.
     */
    interface SetTitleDataRequest {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string,
        /** new value to set. Set to null to remove a value */
        Value?: string,
    }

    interface SetTitleDataResult {
    }

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

    type SourceType = "Admin"

        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner"
        | "Custom"
        | "API";

    interface StatisticModel {
        /** Statistic name */
        Name?: string,
        /** Statistic value */
        Value: number,
        /** Statistic version (0 if not a versioned statistic) */
        Version: number,
    }

    interface StatisticNameVersion {
        /** unique name of the statistic */
        StatisticName: string,
        /** the version of the statistic to be returned */
        Version: number,
    }

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

    interface StatisticValue {
        /** unique name of the statistic */
        StatisticName?: string,
        /** statistic value for the player */
        Value: number,
        /** for updates to an existing statistic value for a player, the version of the statistic when it was loaded */
        Version: number,
    }

    interface SteamNamePlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
        PlayFabId?: string,
        /** Unique Steam identifier for a user, also known as Steam persona name. */
        SteamName?: string,
    }

    interface SteamPlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
        PlayFabId?: string,
        /** Unique Steam identifier for a user. */
        SteamStringId?: string,
    }

    /** A store entry that list a catalog item at a particular price */
    interface StoreItem {
        /** Store specific custom data. The data only exists as part of this store; it is not transferred to item instances */
        CustomData?: any,
        /** Intended display position for this item. Note that 0 is the first position */
        DisplayPosition?: number,
        /**
         * Unique identifier of the item as it exists in the catalog - note that this must exactly match the ItemId from the
         * catalog
         */
        ItemId: string,
        /** Override prices for this item for specific currencies */
        RealCurrencyPrices?: { [key: string]: number },
        /** Override prices for this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
        VirtualCurrencyPrices?: { [key: string]: number },
    }

    /** Marketing data about a specific store */
    interface StoreMarketingModel {
        /** Tagline for a store. */
        Description?: string,
        /** Display name of a store as it will appear to users. */
        DisplayName?: string,
        /** Custom data about a store. */
        Metadata?: any,
    }

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

    type SubscriptionProviderStatus = "NoError"

        | "Cancelled"
        | "UnknownError"
        | "BillingError"
        | "ProductUnavailable"
        | "CustomerDidNotAcceptPriceChange"
        | "FreeTrial"
        | "PaymentPending";

    interface SubtractCharacterVirtualCurrencyRequest {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number,
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string,
    }

    interface SubtractUserVirtualCurrencyRequest {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** PlayFab unique identifier of the user whose virtual currency balance is to be decreased. */
        PlayFabId: string,
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string,
    }

    interface TagModel {
        /** Full value of the tag, including namespace */
        TagValue?: string,
    }

    type TitleActivationStatus = "None"

        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    interface TitleNewsItem {
        /** News item body. */
        Body?: string,
        /** Unique identifier of news item. */
        NewsId?: string,
        /** Date and time when the news item was posted. */
        Timestamp: string,
        /** Title of the news item. */
        Title?: string,
    }

    interface TreatmentAssignment {
        /** List of the experiment variables. */
        Variables?: Variable[],
        /** List of the experiment variants. */
        Variants?: string[],
    }

    interface TwitchPlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Twitch identifier. */
        PlayFabId?: string,
        /** Unique Twitch identifier for a user. */
        TwitchId?: string,
    }

    interface UnlinkBattleNetAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface UnlinkFacebookAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** PlayFab unique identifier of the user to unlink. */
        PlayFabId: string,
    }

    interface UnlinkFacebookAccountResult {
    }

    interface UnlinkFacebookInstantGamesIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Facebook Instant Games identifier for the user. If not specified, the most recently linked identifier will be used. */
        FacebookInstantGamesId?: string,
        /** PlayFab unique identifier of the user to unlink. */
        PlayFabId: string,
    }

    interface UnlinkFacebookInstantGamesIdResult {
    }

    interface UnlinkNintendoServiceAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface UnlinkNintendoSwitchDeviceIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Nintendo Switch Device identifier for the user. If not specified, the most recently signed in device ID will be used. */
        NintendoSwitchDeviceId?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface UnlinkNintendoSwitchDeviceIdResult {
    }

    interface UnlinkPSNAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface UnlinkPSNAccountResult {
    }

    interface UnlinkServerCustomIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab identifier. */
        PlayFabId: string,
        /** Unique server custom identifier for this player. */
        ServerCustomId: string,
    }

    interface UnlinkServerCustomIdResult {
    }

    interface UnlinkSteamIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam account. */
        PlayFabId: string,
    }

    interface UnlinkSteamIdResult {
    }

    interface UnlinkTwitchAccountRequest {
        /**
         * Valid token issued by Twitch. Used to specify which twitch account to unlink from the profile. By default it uses the
         * one that is present on the profile.
         */
        AccessToken?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** PlayFab unique identifier of the user to unlink. */
        PlayFabId: string,
    }

    interface UnlinkXboxAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** PlayFab unique identifier of the user to unlink. */
        PlayFabId: string,
    }

    interface UnlinkXboxAccountResult {
    }

    /** Specify the container and optionally the catalogVersion for the container to open */
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
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this
         * parameter is required.
         */
        KeyItemInstanceId?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** Specify the type of container to open and optionally the catalogVersion for the container to open */
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
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** The items and vc found within the container. These will be added and stacked in your inventory as appropriate. */
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

    interface UpdateAvatarUrlRequest {
        /** URL of the avatar image. If empty, it removes the existing avatar URL. */
        ImageUrl: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    /** Represents a single update ban request. */
    interface UpdateBanRequest {
        /** The updated active state for the ban. Null for no change. */
        Active?: boolean,
        /** The id of the ban to be updated. */
        BanId: string,
        /** The updated expiration date for the ban. Null for no change. */
        Expires?: string,
        /** The updated IP address for the ban. Null for no change. */
        IPAddress?: string,
        /** Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state. */
        Permanent?: boolean,
        /** The updated reason for the ban to be updated. Maximum 140 characters. Null for no change. */
        Reason?: string,
        /** The updated family type of the user that should be included in the ban. Null for no change. */
        UserFamilyType?: UserFamilyType,
    }

    /**
     * For each ban, only updates the values that are set. Leave any value to null for no change. If a ban could not be found,
     * the rest are still applied. Returns information about applied updates only.
     */
    interface UpdateBansRequest {
        /** List of bans to be updated. Maximum 100. */
        Bans: UpdateBanRequest[],
    }

    interface UpdateBansResult {
        /** Information on the bans that were updated */
        BanData?: BanInfo[],
    }

    /**
     * This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In
     * updating the custom data object, keys which already exist in the object will have their values overwritten, while keys
     * with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
     */
    interface UpdateCharacterDataRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface UpdateCharacterDataResult {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number,
    }

    /**
     * Character statistics are similar to user statistics in that they are numeric values which may only be updated by a
     * server operation, in order to minimize the opportunity for unauthorized changes. In addition to being available for use
     * by the title, the statistics are used for all leaderboard operations in PlayFab.
     */
    interface UpdateCharacterStatisticsRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** Statistics to be updated with the provided values. */
        CharacterStatistics?: { [key: string]: number },
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface UpdateCharacterStatisticsResult {
    }

    /**
     * Performs an additive update of the custom properties for the specified player. In updating the player's custom
     * properties, properties which already exist will have their values overwritten. No other properties will be changed apart
     * from those specified in the call.
     */
    interface UpdatePlayerCustomPropertiesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Optional field used for concurrency control. One can ensure that the update operation will only be performed if the
         * player's properties have not been updated by any other clients since last the version.
         */
        ExpectedPropertiesVersion?: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Collection of properties to be set for a player. */
        Properties: UpdateProperty[],
    }

    interface UpdatePlayerCustomPropertiesResult {
        /** PlayFab unique identifier of the user whose properties were updated. */
        PlayFabId?: string,
        /**
         * Indicates the current version of a player's properties that have been set. This is incremented after updates and
         * deletes. This version can be provided in update and delete calls for concurrency control.
         */
        PropertiesVersion: number,
    }

    /**
     * This operation is additive. Statistics not currently defined will be added, while those already defined will be updated
     * with the given values. All other user statistics will remain unchanged.
     */
    interface UpdatePlayerStatisticsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface UpdatePlayerStatisticsResult {
    }

    interface UpdateProperty {
        /** Name of the custom property. Can contain Unicode letters and digits. They are limited in size. */
        Name: string,
        /** Value of the custom property. Limited to booleans, numbers, and strings. */
        Value: any,
    }

    /**
     * Note that in the case of multiple calls to write to the same shared group data keys, the last write received by the
     * PlayFab service will determine the value available to subsequent read operations. For scenarios requiring coordination
     * of data updates, it is recommended that titles make use of user data with read permission set to public, or a
     * combination of user data and shared group data.
     */
    interface UpdateSharedGroupDataRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface UpdateSharedGroupDataResult {
    }

    /**
     * This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In
     * updating the custom data object, keys which already exist in the object will have their values overwritten, while keys
     * with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
     */
    interface UpdateUserDataRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface UpdateUserDataResult {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number,
    }

    /**
     * This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In
     * updating the custom data object, keys which already exist in the object will have their values overwritten, keys with
     * null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
     */
    interface UpdateUserInternalDataRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /**
     * This function performs an additive update of the arbitrary JSON object containing the custom data for the item instance
     * which belongs to the specified user. In updating the custom data object, keys which already exist in the object will
     * have their values overwritten, while keys with null values will be removed. No other key-value pairs will be changed
     * apart from those specified in the call.
     */
    interface UpdateUserInventoryItemDataRequest {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface UserAccountInfo {
        /** User Android device information, if an Android device has been linked */
        AndroidDeviceInfo?: UserAndroidDeviceInfo,
        /** Sign in with Apple account information, if an Apple account has been linked */
        AppleAccountInfo?: UserAppleIdInfo,
        /** Battle.net account information, if a Battle.net account has been linked */
        BattleNetAccountInfo?: UserBattleNetInfo,
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
        /** User Google Play Games account information, if a Google Play Games account has been linked */
        GooglePlayGamesInfo?: UserGooglePlayGamesInfo,
        /** User iOS device information, if an iOS device has been linked */
        IosDeviceInfo?: UserIosDeviceInfo,
        /** User Kongregate account information, if a Kongregate account has been linked */
        KongregateInfo?: UserKongregateInfo,
        /** Nintendo Switch account information, if a Nintendo Switch account has been linked */
        NintendoSwitchAccountInfo?: UserNintendoSwitchAccountIdInfo,
        /** Nintendo Switch device information, if a Nintendo Switch device has been linked */
        NintendoSwitchDeviceIdInfo?: UserNintendoSwitchDeviceIdInfo,
        /** OpenID Connect information, if any OpenID Connect accounts have been linked */
        OpenIdInfo?: UserOpenIdInfo[],
        /** Unique identifier for the user account */
        PlayFabId?: string,
        /** Personal information for the user which is considered more sensitive */
        PrivateInfo?: UserPrivateAccountInfo,
        /** User PlayStation :tm: Network account information, if a PlayStation :tm: Network account has been linked */
        PsnInfo?: UserPsnInfo,
        /** Server Custom ID information, if a server custom ID has been assigned */
        ServerCustomIdInfo?: UserServerCustomIdInfo,
        /** User Steam information, if a Steam account has been linked */
        SteamInfo?: UserSteamInfo,
        /** Title-specific information for the user account */
        TitleInfo?: UserTitleInfo,
        /** User Twitch account information, if a Twitch account has been linked */
        TwitchInfo?: UserTwitchInfo,
        /** User account name in the PlayFab service */
        Username?: string,
        /** User XBox account information, if a XBox account has been linked */
        XboxInfo?: UserXboxInfo,
    }

    interface UserAndroidDeviceInfo {
        /** Android device ID */
        AndroidDeviceId?: string,
    }

    interface UserAppleIdInfo {
        /** Apple subject ID */
        AppleSubjectId?: string,
    }

    interface UserBattleNetInfo {
        /** Battle.net identifier */
        BattleNetAccountId?: string,
        /** Battle.net display name */
        BattleNetBattleTag?: string,
    }

    interface UserCustomIdInfo {
        /** Custom ID */
        CustomId?: string,
    }

    /**
     * Indicates whether a given data key is private (readable only by the player) or public (readable by all players). When a
     * player makes a GetUserData request about another player, only keys marked Public will be returned.
     */
    type UserDataPermission = "Private"

        | "Public";

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

    interface UserFacebookInfo {
        /** Facebook identifier */
        FacebookId?: string,
        /** Facebook full name */
        FullName?: string,
    }

    interface UserFacebookInstantGamesIdInfo {
        /** Facebook Instant Games ID */
        FacebookInstantGamesId?: string,
    }

    type UserFamilyType = "None"

        | "Xbox"
        | "Steam";

    interface UserGameCenterInfo {
        /** Gamecenter identifier */
        GameCenterId?: string,
    }

    interface UserGoogleInfo {
        /** Email address of the Google account */
        GoogleEmail?: string,
        /** Gender information of the Google account */
        GoogleGender?: string,
        /** Google ID */
        GoogleId?: string,
        /** Locale of the Google account */
        GoogleLocale?: string,
        /** Name of the Google account user */
        GoogleName?: string,
    }

    interface UserGooglePlayGamesInfo {
        /** Avatar image url of the Google Play Games player */
        GooglePlayGamesPlayerAvatarImageUrl?: string,
        /** Display name of the Google Play Games player */
        GooglePlayGamesPlayerDisplayName?: string,
        /** Google Play Games player ID */
        GooglePlayGamesPlayerId?: string,
    }

    interface UserIosDeviceInfo {
        /** iOS device ID */
        IosDeviceId?: string,
    }

    interface UserKongregateInfo {
        /** Kongregate ID */
        KongregateId?: string,
        /** Kongregate Username */
        KongregateName?: string,
    }

    interface UserNintendoSwitchAccountIdInfo {
        /** Nintendo Switch account subject ID */
        NintendoSwitchAccountSubjectId?: string,
    }

    interface UserNintendoSwitchDeviceIdInfo {
        /** Nintendo Switch Device ID */
        NintendoSwitchDeviceId?: string,
    }

    interface UserOpenIdInfo {
        /** OpenID Connection ID */
        ConnectionId?: string,
        /** OpenID Issuer */
        Issuer?: string,
        /** OpenID Subject */
        Subject?: string,
    }

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
        | "ServerCustomId"
        | "NintendoSwitchDeviceId"
        | "FacebookInstantGamesId"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount";

    interface UserPrivateAccountInfo {
        /** user email address */
        Email?: string,
    }

    interface UserPsnInfo {
        /** PlayStation :tm: Network account ID */
        PsnAccountId?: string,
        /** PlayStation :tm: Network online ID */
        PsnOnlineId?: string,
    }

    interface UserServerCustomIdInfo {
        /** Custom ID */
        CustomId?: string,
    }

    interface UserSettings {
        /** Boolean for whether this player is eligible for gathering device info. */
        GatherDeviceInfo: boolean,
        /** Boolean for whether this player should report OnFocus play-time tracking. */
        GatherFocusInfo: boolean,
        /** Boolean for whether this player is eligible for ad tracking. */
        NeedsAttribution: boolean,
    }

    interface UserSteamInfo {
        /** what stage of game ownership the user is listed as being in, from Steam */
        SteamActivationStatus?: TitleActivationStatus,
        /** the country in which the player resides, from Steam data */
        SteamCountry?: string,
        /** currency type set in the user Steam account */
        SteamCurrency?: Currency,
        /** Steam identifier */
        SteamId?: string,
        /** Steam display name */
        SteamName?: string,
    }

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

    interface UserTwitchInfo {
        /** Twitch ID */
        TwitchId?: string,
        /** Twitch Username */
        TwitchUserName?: string,
    }

    interface UserXboxInfo {
        /** XBox user ID */
        XboxUserId?: string,
        /** XBox user sandbox */
        XboxUserSandbox?: string,
    }

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

    interface Variable {
        /** Name of the variable. */
        Name: string,
        /** Value of the variable. */
        Value?: string,
    }

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

    interface WriteEventResponse {
        /**
         * The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to
         * any particular format.
         */
        EventId?: string,
    }

    /**
     * This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema,
     * which allowsfor arbitrary key-value pairs to describe any character-based event. The created event will be locked to the
     * authenticated title.
     */
    interface WriteServerCharacterEventRequest {
        /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any },
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The time (in UTC) associated with this event. The value defaults to the current time. */
        Timestamp?: string,
    }

    /**
     * This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema,
     * which allowsfor arbitrary key-value pairs to describe any player-based event. The created event will be locked to the
     * authenticated title.
     */
    interface WriteServerPlayerEventRequest {
        /** Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any },
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** The time (in UTC) associated with this event. The value defaults to the current time. */
        Timestamp?: string,
    }

    /**
     * This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema,
     * which allowsfor arbitrary key-value pairs to describe any title-based event. The created event will be locked to the
     * authenticated title.
     */
    interface WriteTitleEventRequest {
        /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any },
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string,
        /** The time (in UTC) associated with this event. The value defaults to the current time. */
        Timestamp?: string,
    }

    interface XboxLiveAccountPlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
        PlayFabId?: string,
        /** Unique Xbox Live identifier for a user. */
        XboxLiveAccountId?: string,
    }

}

/** Server interface methods */
interface IPlayFabServerAPI {
    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the character's balance of the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/addcharactervirtualcurrency
     */
    AddCharacterVirtualCurrency(request: PlayFabServerModels.AddCharacterVirtualCurrencyRequest): PlayFabServerModels.ModifyCharacterVirtualCurrencyResult;

    /**
     * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
     * FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/addfriend
     */
    AddFriend(request: PlayFabServerModels.AddFriendRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
     * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
     * authentication credentials, as the intent is that it is easily accessible by other players.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/addgenericid
     */
    AddGenericID(request: PlayFabServerModels.AddGenericIDRequest): PlayFabServerModels.EmptyResult;

    /**
     * Adds or updates a contact email to the specified player's profile.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/addorupdatecontactemail
     */
    AddOrUpdateContactEmail(request: PlayFabServerModels.AddOrUpdateContactEmailRequest): PlayFabServerModels.AddOrUpdateContactEmailResult;

    /**
     * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/addplayertag
     */
    AddPlayerTag(request: PlayFabServerModels.AddPlayerTagRequest): PlayFabServerModels.AddPlayerTagResult;

    /**
     * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
     * in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
     * number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/addsharedgroupmembers
     */
    AddSharedGroupMembers(request: PlayFabServerModels.AddSharedGroupMembersRequest): PlayFabServerModels.AddSharedGroupMembersResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Increments the user's balance of the specified virtual currency by the stated amount
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/adduservirtualcurrency
     */
    AddUserVirtualCurrency(request: PlayFabServerModels.AddUserVirtualCurrencyRequest): PlayFabServerModels.ModifyUserVirtualCurrencyResult;

    /**
     * Validated a client's session ticket, and if successful, returns details for that user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/authenticatesessionticket
     */
    AuthenticateSessionTicket(request: PlayFabServerModels.AuthenticateSessionTicketRequest): PlayFabServerModels.AuthenticateSessionTicketResult;

    /**
     * Awards the specified users the specified Steam achievements
     * https://docs.microsoft.com/rest/api/playfab/server/platform-specific-methods/awardsteamachievement
     */
    AwardSteamAchievement(request: PlayFabServerModels.AwardSteamAchievementRequest): PlayFabServerModels.AwardSteamAchievementResult;

    /**
     * Bans users by PlayFab ID with optional IP address for the provided game.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/banusers
     */
    BanUsers(request: PlayFabServerModels.BanUsersRequest): PlayFabServerModels.BanUsersResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's
     * inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/consumeitem
     */
    ConsumeItem(request: PlayFabServerModels.ConsumeItemRequest): PlayFabServerModels.ConsumeItemResult;

    /**
     * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
     * group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
     * between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/createsharedgroup
     */
    CreateSharedGroup(request: PlayFabServerModels.CreateSharedGroupRequest): PlayFabServerModels.CreateSharedGroupResult;

    /**
     * Deletes the specific character ID from the specified user.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/deletecharacterfromuser
     */
    DeleteCharacterFromUser(request: PlayFabServerModels.DeleteCharacterFromUserRequest): PlayFabServerModels.DeleteCharacterFromUserResult;

    /**
     * Removes a user's player account from a title and deletes all associated data
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/deleteplayer
     */
    DeletePlayer(request: PlayFabServerModels.DeletePlayerRequest): PlayFabServerModels.DeletePlayerResult;

    /**
     * Deletes title-specific custom properties for a player
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/deleteplayercustomproperties
     */
    DeletePlayerCustomProperties(request: PlayFabServerModels.DeletePlayerCustomPropertiesRequest): PlayFabServerModels.DeletePlayerCustomPropertiesResult;

    /**
     * Deletes push notification template for title
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/deletepushnotificationtemplate
     */
    DeletePushNotificationTemplate(request: PlayFabServerModels.DeletePushNotificationTemplateRequest): PlayFabServerModels.DeletePushNotificationTemplateResult;

    /**
     * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
     * sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/deletesharedgroup
     */
    DeleteSharedGroup(request: PlayFabServerModels.DeleteSharedGroupRequest): PlayFabServerModels.EmptyResponse;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would
     * have been added to the player inventory, if the Random Result Table were added via a Bundle or a call to
     * UnlockContainer.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/evaluaterandomresulttable
     */
    EvaluateRandomResultTable(request: PlayFabServerModels.EvaluateRandomResultTableRequest): PlayFabServerModels.EvaluateRandomResultTableResult;

    /**
     * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player. The
     * PlayFab ID is the entity ID of the player's master_player_account entity.
     * https://docs.microsoft.com/rest/api/playfab/server/server-side-cloud-script/executecloudscript
     */
    ExecuteCloudScript(request: PlayFabServerModels.ExecuteCloudScriptServerRequest): PlayFabServerModels.ExecuteCloudScriptResult;

    /**
     * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
     * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getallsegments
     */
    GetAllSegments(request: PlayFabServerModels.GetAllSegmentsRequest): PlayFabServerModels.GetAllSegmentsResult;

    /**
     * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
     * evaluated with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getalluserscharacters
     */
    GetAllUsersCharacters(request: PlayFabServerModels.ListUsersCharactersRequest): PlayFabServerModels.ListUsersCharactersResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getcatalogitems
     */
    GetCatalogItems(request: PlayFabServerModels.GetCatalogItemsRequest): PlayFabServerModels.GetCatalogItemsResult;

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterdata
     */
    GetCharacterData(request: PlayFabServerModels.GetCharacterDataRequest): PlayFabServerModels.GetCharacterDataResult;

    /**
     * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterinternaldata
     */
    GetCharacterInternalData(request: PlayFabServerModels.GetCharacterDataRequest): PlayFabServerModels.GetCharacterDataResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified character's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getcharacterinventory
     */
    GetCharacterInventory(request: PlayFabServerModels.GetCharacterInventoryRequest): PlayFabServerModels.GetCharacterInventoryResult;

    /**
     * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterleaderboard
     */
    GetCharacterLeaderboard(request: PlayFabServerModels.GetCharacterLeaderboardRequest): PlayFabServerModels.GetCharacterLeaderboardResult;

    /**
     * Retrieves the title-specific custom data for the user's character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/getcharacterreadonlydata
     */
    GetCharacterReadOnlyData(request: PlayFabServerModels.GetCharacterDataRequest): PlayFabServerModels.GetCharacterDataResult;

    /**
     * Retrieves the details of all title-specific statistics for the specific character
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getcharacterstatistics
     */
    GetCharacterStatistics(request: PlayFabServerModels.GetCharacterStatisticsRequest): PlayFabServerModels.GetCharacterStatisticsResult;

    /**
     * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
     * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
     * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
     * the query to retrieve the data will fail. See this post for more information:
     * https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
     * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
     * https://docs.microsoft.com/rest/api/playfab/server/content/getcontentdownloadurl
     */
    GetContentDownloadUrl(request: PlayFabServerModels.GetContentDownloadUrlRequest): PlayFabServerModels.GetContentDownloadUrlResult;

    /**
     * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
     * leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getfriendleaderboard
     */
    GetFriendLeaderboard(request: PlayFabServerModels.GetFriendLeaderboardRequest): PlayFabServerModels.GetLeaderboardResult;

    /**
     * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
     * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/getfriendslist
     */
    GetFriendsList(request: PlayFabServerModels.GetFriendsListRequest): PlayFabServerModels.GetFriendsListResult;

    /**
     * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboard
     */
    GetLeaderboard(request: PlayFabServerModels.GetLeaderboardRequest): PlayFabServerModels.GetLeaderboardResult;

    /**
     * Retrieves a list of ranked characters for the given statistic, centered on the requested user
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardaroundcharacter
     */
    GetLeaderboardAroundCharacter(request: PlayFabServerModels.GetLeaderboardAroundCharacterRequest): PlayFabServerModels.GetLeaderboardAroundCharacterResult;

    /**
     * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getleaderboardarounduser
     */
    GetLeaderboardAroundUser(request: PlayFabServerModels.GetLeaderboardAroundUserRequest): PlayFabServerModels.GetLeaderboardAroundUserResult;

    /**
     * Retrieves a list of all of the user's characters for the given statistic.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/getleaderboardforusercharacters
     */
    GetLeaderboardForUserCharacters(request: PlayFabServerModels.GetLeaderboardForUsersCharactersRequest): PlayFabServerModels.GetLeaderboardForUsersCharactersResult;

    /**
     * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
     * returned. All parameters default to false.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercombinedinfo
     */
    GetPlayerCombinedInfo(request: PlayFabServerModels.GetPlayerCombinedInfoRequest): PlayFabServerModels.GetPlayerCombinedInfoResult;

    /**
     * Retrieves a title-specific custom property value for a player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayercustomproperty
     */
    GetPlayerCustomProperty(request: PlayFabServerModels.GetPlayerCustomPropertyRequest): PlayFabServerModels.GetPlayerCustomPropertyResult;

    /**
     * Retrieves the player's profile
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayerprofile
     */
    GetPlayerProfile(request: PlayFabServerModels.GetPlayerProfileRequest): PlayFabServerModels.GetPlayerProfileResult;

    /**
     * List all segments that a player currently belongs to at this moment in time.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersegments
     */
    GetPlayerSegments(request: PlayFabServerModels.GetPlayersSegmentsRequest): PlayFabServerModels.GetPlayerSegmentsResult;

    /**
     * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
     * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
     * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
     * in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
     * called 30 times in one minute. You will be returned an error if you exceed this threshold.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayersinsegment
     */
    GetPlayersInSegment(request: PlayFabServerModels.GetPlayersInSegmentRequest): PlayFabServerModels.GetPlayersInSegmentResult;

    /**
     * Retrieves the current version and values for the indicated statistics, for the local player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatistics
     */
    GetPlayerStatistics(request: PlayFabServerModels.GetPlayerStatisticsRequest): PlayFabServerModels.GetPlayerStatisticsResult;

    /**
     * Retrieves the information on the available versions of the specified statistic.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getplayerstatisticversions
     */
    GetPlayerStatisticVersions(request: PlayFabServerModels.GetPlayerStatisticVersionsRequest): PlayFabServerModels.GetPlayerStatisticVersionsResult;

    /**
     * Get all tags with a given Namespace (optional) from a player profile.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/getplayertags
     */
    GetPlayerTags(request: PlayFabServerModels.GetPlayerTagsRequest): PlayFabServerModels.GetPlayerTagsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Battle.net account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrombattlenetaccountids
     */
    GetPlayFabIDsFromBattleNetAccountIds(request: PlayFabServerModels.GetPlayFabIDsFromBattleNetAccountIdsRequest): PlayFabServerModels.GetPlayFabIDsFromBattleNetAccountIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookids
     */
    GetPlayFabIDsFromFacebookIDs(request: PlayFabServerModels.GetPlayFabIDsFromFacebookIDsRequest): PlayFabServerModels.GetPlayFabIDsFromFacebookIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromfacebookinstantgamesids
     */
    GetPlayFabIDsFromFacebookInstantGamesIds(request: PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsRequest): PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
     * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
     * added to the player account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromgenericids
     */
    GetPlayFabIDsFromGenericIDs(request: PlayFabServerModels.GetPlayFabIDsFromGenericIDsRequest): PlayFabServerModels.GetPlayFabIDsFromGenericIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Service Account identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoserviceaccountids
     */
    GetPlayFabIDsFromNintendoServiceAccountIds(request: PlayFabServerModels.GetPlayFabIDsFromNintendoServiceAccountIdsRequest): PlayFabServerModels.GetPlayFabIDsFromNintendoServiceAccountIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoswitchdeviceids
     */
    GetPlayFabIDsFromNintendoSwitchDeviceIds(request: PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest): PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of OpenId subject identifiers. A OpenId subject identifier is
     * the OpenId issuer plus the OpenId subject for the player, as specified by the title when the OpenId identifier was added
     * to the player account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromopenidsubjectidentifiers
     */
    GetPlayFabIDsFromOpenIdSubjectIdentifiers(request: PlayFabServerModels.GetPlayFabIDsFromOpenIdsRequest): PlayFabServerModels.GetPlayFabIDsFromOpenIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnaccountids
     */
    GetPlayFabIDsFromPSNAccountIDs(request: PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsRequest): PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation :tm: Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnonlineids
     */
    GetPlayFabIDsFromPSNOnlineIDs(request: PlayFabServerModels.GetPlayFabIDsFromPSNOnlineIDsRequest): PlayFabServerModels.GetPlayFabIDsFromPSNOnlineIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
     * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamids
     */
    GetPlayFabIDsFromSteamIDs(request: PlayFabServerModels.GetPlayFabIDsFromSteamIDsRequest): PlayFabServerModels.GetPlayFabIDsFromSteamIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are persona
     * names.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamnames
     */
    GetPlayFabIDsFromSteamNames(request: PlayFabServerModels.GetPlayFabIDsFromSteamNamesRequest): PlayFabServerModels.GetPlayFabIDsFromSteamNamesResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
     * the user accounts, available as "_id" from the Twitch API methods (ex:
     * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromtwitchids
     */
    GetPlayFabIDsFromTwitchIDs(request: PlayFabServerModels.GetPlayFabIDsFromTwitchIDsRequest): PlayFabServerModels.GetPlayFabIDsFromTwitchIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromxboxliveids
     */
    GetPlayFabIDsFromXboxLiveIDs(request: PlayFabServerModels.GetPlayFabIDsFromXboxLiveIDsRequest): PlayFabServerModels.GetPlayFabIDsFromXboxLiveIDsResult;

    /**
     * Retrieves the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getpublisherdata
     */
    GetPublisherData(request: PlayFabServerModels.GetPublisherDataRequest): PlayFabServerModels.GetPublisherDataResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the configuration information for the specified random results tables for the title, including all
     * ItemId values and weights
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getrandomresulttables
     */
    GetRandomResultTables(request: PlayFabServerModels.GetRandomResultTablesRequest): PlayFabServerModels.GetRandomResultTablesResult;

    /**
     * Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getservercustomidsfromplayfabids
     */
    GetServerCustomIDsFromPlayFabIDs(request: PlayFabServerModels.GetServerCustomIDsFromPlayFabIDsRequest): PlayFabServerModels.GetServerCustomIDsFromPlayFabIDsResult;

    /**
     * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
     * public and private group data. Shared Groups are designed for sharing data between a very small number of players,
     * please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/getsharedgroupdata
     */
    GetSharedGroupData(request: PlayFabServerModels.GetSharedGroupDataRequest): PlayFabServerModels.GetSharedGroupDataResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the set of items defined for the specified store, including all prices defined, for the specified
     * player
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/getstoreitems
     */
    GetStoreItems(request: PlayFabServerModels.GetStoreItemsServerRequest): PlayFabServerModels.GetStoreItemsResult;

    /**
     * Retrieves the current server time
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettime
     */
    GetTime(request: PlayFabServerModels.GetTimeRequest): PlayFabServerModels.GetTimeResult;

    /**
     * Retrieves the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitledata
     */
    GetTitleData(request: PlayFabServerModels.GetTitleDataRequest): PlayFabServerModels.GetTitleDataResult;

    /**
     * Retrieves the key-value store of custom internal title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitleinternaldata
     */
    GetTitleInternalData(request: PlayFabServerModels.GetTitleDataRequest): PlayFabServerModels.GetTitleDataResult;

    /**
     * Retrieves the title news feed, as configured in the developer portal
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/gettitlenews
     */
    GetTitleNews(request: PlayFabServerModels.GetTitleNewsRequest): PlayFabServerModels.GetTitleNewsResult;

    /**
     * Retrieves the relevant details for a specified user
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getuseraccountinfo
     */
    GetUserAccountInfo(request: PlayFabServerModels.GetUserAccountInfoRequest): PlayFabServerModels.GetUserAccountInfoResult;

    /**
     * Gets all bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getuserbans
     */
    GetUserBans(request: PlayFabServerModels.GetUserBansRequest): PlayFabServerModels.GetUserBansResult;

    /**
     * Retrieves the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserdata
     */
    GetUserData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserinternaldata
     */
    GetUserInternalData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Retrieves the specified user's current inventory of virtual goods
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/getuserinventory
     */
    GetUserInventory(request: PlayFabServerModels.GetUserInventoryRequest): PlayFabServerModels.GetUserInventoryResult;

    /**
     * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherdata
     */
    GetUserPublisherData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherinternaldata
     */
    GetUserPublisherInternalData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserpublisherreadonlydata
     */
    GetUserPublisherReadOnlyData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Retrieves the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/getuserreadonlydata
     */
    GetUserReadOnlyData(request: PlayFabServerModels.GetUserDataRequest): PlayFabServerModels.GetUserDataResult;

    /**
     * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
     * with the parent PlayFabId to guarantee uniqueness.
     * https://docs.microsoft.com/rest/api/playfab/server/characters/grantcharactertouser
     */
    GrantCharacterToUser(request: PlayFabServerModels.GrantCharacterToUserRequest): PlayFabServerModels.GrantCharacterToUserResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified character's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstocharacter
     */
    GrantItemsToCharacter(request: PlayFabServerModels.GrantItemsToCharacterRequest): PlayFabServerModels.GrantItemsToCharacterResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstouser
     */
    GrantItemsToUser(request: PlayFabServerModels.GrantItemsToUserRequest): PlayFabServerModels.GrantItemsToUserResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the specified items to the specified user inventories
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstousers
     */
    GrantItemsToUsers(request: PlayFabServerModels.GrantItemsToUsersRequest): PlayFabServerModels.GrantItemsToUsersResult;

    /**
     * Links the Battle.net account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkbattlenetaccount
     */
    LinkBattleNetAccount(request: PlayFabServerModels.LinkBattleNetAccountRequest): PlayFabServerModels.EmptyResult;

    /**
     * Links the Nintendo account associated with the token to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccount
     */
    LinkNintendoServiceAccount(request: PlayFabServerModels.LinkNintendoServiceAccountRequest): PlayFabServerModels.EmptyResult;

    /**
     * Links the Nintendo account associated with the Nintendo Service Account subject or id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoserviceaccountsubject
     */
    LinkNintendoServiceAccountSubject(request: PlayFabServerModels.LinkNintendoServiceAccountSubjectRequest): PlayFabServerModels.EmptyResult;

    /**
     * Links the NintendoSwitchDeviceId to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linknintendoswitchdeviceid
     */
    LinkNintendoSwitchDeviceId(request: PlayFabServerModels.LinkNintendoSwitchDeviceIdRequest): PlayFabServerModels.LinkNintendoSwitchDeviceIdResult;

    /**
     * Links the PlayStation :tm: Network account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnaccount
     */
    LinkPSNAccount(request: PlayFabServerModels.LinkPSNAccountRequest): PlayFabServerModels.LinkPSNAccountResult;

    /**
     * Links the PlayStation :tm: Network account associated with the provided user id to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnid
     */
    LinkPSNId(request: PlayFabServerModels.LinkPSNIdRequest): PlayFabServerModels.LinkPSNIdResponse;

    /**
     * Links the custom server identifier, generated by the title, to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkservercustomid
     */
    LinkServerCustomId(request: PlayFabServerModels.LinkServerCustomIdRequest): PlayFabServerModels.LinkServerCustomIdResult;

    /**
     * Links the Steam account associated with the provided Steam ID to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linksteamid
     */
    LinkSteamId(request: PlayFabServerModels.LinkSteamIdRequest): PlayFabServerModels.LinkSteamIdResult;

    /**
     * Links the Twitch account associated with the token to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linktwitchaccount
     */
    LinkTwitchAccount(request: PlayFabServerModels.LinkTwitchAccountRequest): PlayFabServerModels.EmptyResult;

    /**
     * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxaccount
     */
    LinkXboxAccount(request: PlayFabServerModels.LinkXboxAccountRequest): PlayFabServerModels.LinkXboxAccountResult;

    /**
     * Links the Xbox Live account associated with the provided Xbox ID and Sandbox to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxid
     */
    LinkXboxId(request: PlayFabServerModels.LinkXboxIdRequest): PlayFabServerModels.LinkXboxAccountResult;

    /**
     * Retrieves title-specific custom property values for a player.
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/listplayercustomproperties
     */
    ListPlayerCustomProperties(request: PlayFabServerModels.ListPlayerCustomPropertiesRequest): PlayFabServerModels.ListPlayerCustomPropertiesResult;

    /**
     * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
     * API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithandroiddeviceid
     */
    LoginWithAndroidDeviceID(request: PlayFabServerModels.LoginWithAndroidDeviceIDRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Sign in the user with a Battle.net identity token
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithbattlenet
     */
    LoginWithBattleNet(request: PlayFabServerModels.LoginWithBattleNetRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithcustomid
     */
    LoginWithCustomID(request: PlayFabServerModels.LoginWithCustomIDRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Signs the user in using the iOS device identifier, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithiosdeviceid
     */
    LoginWithIOSDeviceID(request: PlayFabServerModels.LoginWithIOSDeviceIDRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Signs the user in using a PlayStation :tm: Network authentication code, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithpsn
     */
    LoginWithPSN(request: PlayFabServerModels.LoginWithPSNRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID
     * and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithservercustomid
     */
    LoginWithServerCustomId(request: PlayFabServerModels.LoginWithServerCustomIdRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Signs the user in using an Steam ID, returning a session identifier that can subsequently be used for API calls which
     * require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithsteamid
     */
    LoginWithSteamId(request: PlayFabServerModels.LoginWithSteamIdRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Sign in the user with a Twitch access token
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithtwitch
     */
    LoginWithTwitch(request: PlayFabServerModels.LoginWithTwitchRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can
     * subsequently be used for API calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxbox
     */
    LoginWithXbox(request: PlayFabServerModels.LoginWithXboxRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API
     * calls which require an authenticated user
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/loginwithxboxid
     */
    LoginWithXboxId(request: PlayFabServerModels.LoginWithXboxIdRequest): PlayFabServerModels.ServerLoginResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Modifies the number of remaining uses of a player's inventory item
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/modifyitemuses
     */
    ModifyItemUses(request: PlayFabServerModels.ModifyItemUsesRequest): PlayFabServerModels.ModifyItemUsesResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a character's inventory into another of the users's character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromcharacter
     */
    MoveItemToCharacterFromCharacter(request: PlayFabServerModels.MoveItemToCharacterFromCharacterRequest): PlayFabServerModels.MoveItemToCharacterFromCharacterResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a user's inventory into their character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromuser
     */
    MoveItemToCharacterFromUser(request: PlayFabServerModels.MoveItemToCharacterFromUserRequest): PlayFabServerModels.MoveItemToCharacterFromUserResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Moves an item from a character's inventory into the owning user's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtouserfromcharacter
     */
    MoveItemToUserFromCharacter(request: PlayFabServerModels.MoveItemToUserFromCharacterRequest): PlayFabServerModels.MoveItemToUserFromCharacterResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
     * Economy-&gt;Catalogs tab in the PlayFab Game Manager.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/redeemcoupon
     */
    RedeemCoupon(request: PlayFabServerModels.RedeemCouponRequest): PlayFabServerModels.RedeemCouponResult;

    /**
     * Removes the specified friend from the the user's friend list
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/removefriend
     */
    RemoveFriend(request: PlayFabServerModels.RemoveFriendRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Removes the specified generic service identifier from the player's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/removegenericid
     */
    RemoveGenericID(request: PlayFabServerModels.RemoveGenericIDRequest): PlayFabServerModels.EmptyResult;

    /**
     * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
     * https://docs.microsoft.com/rest/api/playfab/server/playstream/removeplayertag
     */
    RemovePlayerTag(request: PlayFabServerModels.RemovePlayerTagRequest): PlayFabServerModels.RemovePlayerTagResult;

    /**
     * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
     * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
     * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
     * guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/removesharedgroupmembers
     */
    RemoveSharedGroupMembers(request: PlayFabServerModels.RemoveSharedGroupMembersRequest): PlayFabServerModels.RemoveSharedGroupMembersResult;

    /**
     * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
     * representatives for the title can take action concerning potentially toxic players.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/reportplayer
     */
    ReportPlayer(request: PlayFabServerModels.ReportPlayerServerRequest): PlayFabServerModels.ReportPlayerServerResult;

    /**
     * Revoke all active bans for a user.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/revokeallbansforuser
     */
    RevokeAllBansForUser(request: PlayFabServerModels.RevokeAllBansForUserRequest): PlayFabServerModels.RevokeAllBansForUserResult;

    /**
     * Revoke all active bans specified with BanId.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/revokebans
     */
    RevokeBans(request: PlayFabServerModels.RevokeBansRequest): PlayFabServerModels.RevokeBansResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access to an item in a user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitem
     */
    RevokeInventoryItem(request: PlayFabServerModels.RevokeInventoryItemRequest): PlayFabServerModels.RevokeInventoryResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Revokes access for up to 25 items across multiple users and characters.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitems
     */
    RevokeInventoryItems(request: PlayFabServerModels.RevokeInventoryItemsRequest): PlayFabServerModels.RevokeInventoryItemsResult;

    /**
     * Saves push notification template for title
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/savepushnotificationtemplate
     */
    SavePushNotificationTemplate(request: PlayFabServerModels.SavePushNotificationTemplateRequest): PlayFabServerModels.SavePushNotificationTemplateResult;

    /**
     * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
     * email template
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendcustomaccountrecoveryemail
     */
    SendCustomAccountRecoveryEmail(request: PlayFabServerModels.SendCustomAccountRecoveryEmailRequest): PlayFabServerModels.SendCustomAccountRecoveryEmailResult;

    /**
     * Sends an email based on an email template to a player's contact email
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendemailfromtemplate
     */
    SendEmailFromTemplate(request: PlayFabServerModels.SendEmailFromTemplateRequest): PlayFabServerModels.SendEmailFromTemplateResult;

    /**
     * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotification
     */
    SendPushNotification(request: PlayFabServerModels.SendPushNotificationRequest): PlayFabServerModels.SendPushNotificationResult;

    /**
     * Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push
     * Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/sendpushnotificationfromtemplate
     */
    SendPushNotificationFromTemplate(request: PlayFabServerModels.SendPushNotificationFromTemplateRequest): PlayFabServerModels.SendPushNotificationResult;

    /**
     * Updates the tag list for a specified user in the friend list of another user
     * https://docs.microsoft.com/rest/api/playfab/server/friend-list-management/setfriendtags
     */
    SetFriendTags(request: PlayFabServerModels.SetFriendTagsRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
     * secret use the Admin or Server API method SetPlayerSecret.
     * https://docs.microsoft.com/rest/api/playfab/server/authentication/setplayersecret
     */
    SetPlayerSecret(request: PlayFabServerModels.SetPlayerSecretRequest): PlayFabServerModels.SetPlayerSecretResult;

    /**
     * Updates the key-value store of custom publisher settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/setpublisherdata
     */
    SetPublisherData(request: PlayFabServerModels.SetPublisherDataRequest): PlayFabServerModels.SetPublisherDataResult;

    /**
     * Updates the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitledata
     */
    SetTitleData(request: PlayFabServerModels.SetTitleDataRequest): PlayFabServerModels.SetTitleDataResult;

    /**
     * Updates the key-value store of custom title settings
     * https://docs.microsoft.com/rest/api/playfab/server/title-wide-data-management/settitleinternaldata
     */
    SetTitleInternalData(request: PlayFabServerModels.SetTitleDataRequest): PlayFabServerModels.SetTitleDataResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to
     * make a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractcharactervirtualcurrency
     */
    SubtractCharacterVirtualCurrency(request: PlayFabServerModels.SubtractCharacterVirtualCurrencyRequest): PlayFabServerModels.ModifyCharacterVirtualCurrencyResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make
     * a VC balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractuservirtualcurrency
     */
    SubtractUserVirtualCurrency(request: PlayFabServerModels.SubtractUserVirtualCurrencyRequest): PlayFabServerModels.ModifyUserVirtualCurrencyResult;

    /**
     * Unlinks the related Battle.net account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkbattlenetaccount
     */
    UnlinkBattleNetAccount(request: PlayFabServerModels.UnlinkBattleNetAccountRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Unlinks the related Facebook account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkfacebookaccount
     */
    UnlinkFacebookAccount(request: PlayFabServerModels.UnlinkFacebookAccountRequest): PlayFabServerModels.UnlinkFacebookAccountResult;

    /**
     * Unlinks the related Facebook Instant Games identifier from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkfacebookinstantgamesid
     */
    UnlinkFacebookInstantGamesId(request: PlayFabServerModels.UnlinkFacebookInstantGamesIdRequest): PlayFabServerModels.UnlinkFacebookInstantGamesIdResult;

    /**
     * Unlinks the related Nintendo account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoserviceaccount
     */
    UnlinkNintendoServiceAccount(request: PlayFabServerModels.UnlinkNintendoServiceAccountRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinknintendoswitchdeviceid
     */
    UnlinkNintendoSwitchDeviceId(request: PlayFabServerModels.UnlinkNintendoSwitchDeviceIdRequest): PlayFabServerModels.UnlinkNintendoSwitchDeviceIdResult;

    /**
     * Unlinks the related PlayStation :tm: Network account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkpsnaccount
     */
    UnlinkPSNAccount(request: PlayFabServerModels.UnlinkPSNAccountRequest): PlayFabServerModels.UnlinkPSNAccountResult;

    /**
     * Unlinks the custom server identifier from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkservercustomid
     */
    UnlinkServerCustomId(request: PlayFabServerModels.UnlinkServerCustomIdRequest): PlayFabServerModels.UnlinkServerCustomIdResult;

    /**
     * Unlinks the Steam account associated with the provided Steam ID to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinksteamid
     */
    UnlinkSteamId(request: PlayFabServerModels.UnlinkSteamIdRequest): PlayFabServerModels.UnlinkSteamIdResult;

    /**
     * Unlinks the related Twitch account from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinktwitchaccount
     */
    UnlinkTwitchAccount(request: PlayFabServerModels.UnlinkTwitchAccountRequest): PlayFabServerModels.EmptyResult;

    /**
     * Unlinks the related Xbox Live account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkxboxaccount
     */
    UnlinkXboxAccount(request: PlayFabServerModels.UnlinkXboxAccountRequest): PlayFabServerModels.UnlinkXboxAccountResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when
     * required), and returns the contents of the opened container. If the container (and key when relevant) are consumable
     * (RemainingUses &gt; 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontainerinstance
     */
    UnlockContainerInstance(request: PlayFabServerModels.UnlockContainerInstanceRequest): PlayFabServerModels.UnlockContainerItemResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary
     * unlocks it using any appropriate key, and returns the contents of the opened container. If the container (and key when
     * relevant) are consumable (RemainingUses &gt; 0), their RemainingUses will be decremented, consistent with the operation of
     * ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontaineritem
     */
    UnlockContainerItem(request: PlayFabServerModels.UnlockContainerItemRequest): PlayFabServerModels.UnlockContainerItemResult;

    /**
     * Update the avatar URL of the specified player
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/updateavatarurl
     */
    UpdateAvatarUrl(request: PlayFabServerModels.UpdateAvatarUrlRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Updates information of a list of existing bans specified with Ban Ids.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/updatebans
     */
    UpdateBans(request: PlayFabServerModels.UpdateBansRequest): PlayFabServerModels.UpdateBansResult;

    /**
     * Updates the title-specific custom data for the user's character which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterdata
     */
    UpdateCharacterData(request: PlayFabServerModels.UpdateCharacterDataRequest): PlayFabServerModels.UpdateCharacterDataResult;

    /**
     * Updates the title-specific custom data for the user's character which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterinternaldata
     */
    UpdateCharacterInternalData(request: PlayFabServerModels.UpdateCharacterDataRequest): PlayFabServerModels.UpdateCharacterDataResult;

    /**
     * Updates the title-specific custom data for the user's character which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/character-data/updatecharacterreadonlydata
     */
    UpdateCharacterReadOnlyData(request: PlayFabServerModels.UpdateCharacterDataRequest): PlayFabServerModels.UpdateCharacterDataResult;

    /**
     * Updates the values of the specified title-specific statistics for the specific character
     * https://docs.microsoft.com/rest/api/playfab/server/characters/updatecharacterstatistics
     */
    UpdateCharacterStatistics(request: PlayFabServerModels.UpdateCharacterStatisticsRequest): PlayFabServerModels.UpdateCharacterStatisticsResult;

    /**
     * Updates the title-specific custom property values for a player
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayercustomproperties
     */
    UpdatePlayerCustomProperties(request: PlayFabServerModels.UpdatePlayerCustomPropertiesRequest): PlayFabServerModels.UpdatePlayerCustomPropertiesResult;

    /**
     * Updates the values of the specified title-specific statistics for the user
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateplayerstatistics
     */
    UpdatePlayerStatistics(request: PlayFabServerModels.UpdatePlayerStatisticsRequest): PlayFabServerModels.UpdatePlayerStatisticsResult;

    /**
     * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
     * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
     * Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are
     * designed for sharing data between a very small number of players, please see our guide:
     * https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
     * https://docs.microsoft.com/rest/api/playfab/server/shared-group-data/updatesharedgroupdata
     */
    UpdateSharedGroupData(request: PlayFabServerModels.UpdateSharedGroupDataRequest): PlayFabServerModels.UpdateSharedGroupDataResult;

    /**
     * Updates the title-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserdata
     */
    UpdateUserData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the title-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserinternaldata
     */
    UpdateUserInternalData(request: PlayFabServerModels.UpdateUserInternalDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
     * version 2._ Updates the key-value pair data tagged to the specified item, which is read-only from the client.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/updateuserinventoryitemcustomdata
     */
    UpdateUserInventoryItemCustomData(request: PlayFabServerModels.UpdateUserInventoryItemDataRequest): PlayFabServerModels.EmptyResponse;

    /**
     * Updates the publisher-specific custom data for the user which is readable and writable by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherdata
     */
    UpdateUserPublisherData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the publisher-specific custom data for the user which cannot be accessed by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherinternaldata
     */
    UpdateUserPublisherInternalData(request: PlayFabServerModels.UpdateUserInternalDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the publisher-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserpublisherreadonlydata
     */
    UpdateUserPublisherReadOnlyData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Updates the title-specific custom data for the user which can only be read by the client
     * https://docs.microsoft.com/rest/api/playfab/server/player-data-management/updateuserreadonlydata
     */
    UpdateUserReadOnlyData(request: PlayFabServerModels.UpdateUserDataRequest): PlayFabServerModels.UpdateUserDataResult;

    /**
     * Writes a character-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writecharacterevent
     */
    WriteCharacterEvent(request: PlayFabServerModels.WriteServerCharacterEventRequest): PlayFabServerModels.WriteEventResponse;

    /**
     * Writes a player-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writeplayerevent
     */
    WritePlayerEvent(request: PlayFabServerModels.WriteServerPlayerEventRequest): PlayFabServerModels.WriteEventResponse;

    /**
     * Writes a title-based event into PlayStream.
     * https://docs.microsoft.com/rest/api/playfab/server/analytics/writetitleevent
     */
    WriteTitleEvent(request: PlayFabServerModels.WriteTitleEventRequest): PlayFabServerModels.WriteEventResponse;


}


/** AuthenticationAPI.Models as interfaces */
declare namespace PlayFabAuthenticationModels {
    /** Create or return a game_server entity token. Caller must be a title entity. */
    interface AuthenticateCustomIdRequest {
        /**
         * The customId used to create and retrieve game_server entity tokens. This is unique at the title level. CustomId must be
         * between 32 and 100 characters.
         */
        CustomId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface AuthenticateCustomIdResult {
        /** The token generated used to set X-EntityToken for game_server calls. */
        EntityToken?: EntityTokenResponse,
        /** True if the account was newly created on this authentication. */
        NewlyCreated: boolean,
    }

    /**
     * Delete a game_server entity. The caller can be the game_server entity attempting to delete itself. Or a title entity
     * attempting to delete game_server entities for this title.
     */
    interface DeleteRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The game_server entity to be removed. */
        Entity: EntityKey,
    }

    interface EmptyResponse {
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    interface EntityLineage {
        /** The Character Id of the associated entity. */
        CharacterId?: string,
        /** The Group Id of the associated entity. */
        GroupId?: string,
        /** The Master Player Account Id of the associated entity. */
        MasterPlayerAccountId?: string,
        /** The Namespace Id of the associated entity. */
        NamespaceId?: string,
        /** The Title Id of the associated entity. */
        TitleId?: string,
        /** The Title Player Account Id of the associated entity. */
        TitlePlayerAccountId?: string,
    }

    interface EntityTokenResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string,
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string,
    }

    /**
     * This API must be called with X-SecretKey, X-Authentication or X-EntityToken headers. An optional EntityKey may be
     * included to attempt to set the resulting EntityToken to a specific entity, however the entity must be a relation of the
     * caller, such as the master_player_account of a character. If sending X-EntityToken the account will be marked as freshly
     * logged in and will issue a new token. If using X-Authentication or X-EntityToken the header must still be valid and
     * cannot be expired or revoked.
     */
    interface GetEntityTokenRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
    }

    interface GetEntityTokenResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string,
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string,
    }

    type IdentifiedDeviceType = "Unknown"

        | "XboxOne"
        | "Scarlett"
        | "WindowsOneCore"
        | "WindowsOneCoreMobile"
        | "Win32"
        | "android"
        | "iOS"
        | "PlayStation"
        | "Nintendo";

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
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount";

    /** Given an entity token, validates that it hasn't expired or been revoked and will return details of the owner. */
    interface ValidateEntityTokenRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Client EntityToken */
        EntityToken: string,
    }

    interface ValidateEntityTokenResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The authenticated device for this entity, for the given login */
        IdentifiedDeviceType?: IdentifiedDeviceType,
        /** The identity provider for this entity, for the given login */
        IdentityProvider?: LoginIdentityProvider,
        /** The ID issued by the identity provider, e.g. a XUID on Xbox Live */
        IdentityProviderIssuedId?: string,
        /** The lineage of this profile. */
        Lineage?: EntityLineage,
    }

}
/** DataAPI.Models as interfaces */
declare namespace PlayFabDataModels {
    /** Aborts the pending upload of the requested files. */
    interface AbortFileUploadsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface AbortFileUploadsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** Deletes the requested files from the entity's profile. */
    interface DeleteFilesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface DeleteFilesResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    /**
     * Finalizes the upload of the requested files. Verifies that the files have been successfully uploaded and moves the file
     * pointers from pending to live.
     */
    interface FinalizeFileUploadsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        FileNames: string[],
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    interface FinalizeFileUploadsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata },
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    interface GetFileMetadata {
        /** Checksum value for the file, can be used to check if the file on the server has changed. */
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

    /**
     * Returns URLs that may be used to download the files for a profile for a limited length of time. Only returns files that
     * have been successfully uploaded, files that are still pending will either return the old value, if it exists, or
     * nothing.
     */
    interface GetFilesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
    }

    interface GetFilesResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata },
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    /** Gets JSON objects from an entity profile and returns it. */
    interface GetObjectsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /**
         * Determines whether the object will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON
         * object.
         */
        EscapeObject?: boolean,
    }

    interface GetObjectsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** Requested objects that the calling entity has access to */
        Objects?: { [key: string]: ObjectResult },
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
    }

    interface InitiateFileUploadMetadata {
        /** Name of the file. */
        FileName?: string,
        /** Location the data should be sent to via an HTTP PUT operation. */
        UploadUrl?: string,
    }

    /**
     * Returns URLs that may be used to upload the files for a profile 5 minutes. After using the upload calls
     * FinalizeFileUploads must be called to move the file status from pending to live.
     */
    interface InitiateFileUploadsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface InitiateFileUploadsResponse {
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** Collection of file names and upload urls */
        UploadDetails?: InitiateFileUploadMetadata[],
    }

    interface ObjectResult {
        /** Un-escaped JSON object, if EscapeObject false or default. */
        DataObject?: any,
        /** Escaped string JSON body of the object, if EscapeObject is true. */
        EscapedDataObject?: string,
        /** Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        ObjectName?: string,
    }

    type OperationTypes = "Created"

        | "Updated"
        | "Deleted"
        | "None";

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

    interface SetObjectInfo {
        /** Name of the object */
        ObjectName?: string,
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string,
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: OperationTypes,
    }

    /**
     * Sets JSON objects on the requested entity profile. May include a version number to be used to perform optimistic
     * concurrency operations during update. If the current version differs from the version in the request the request will be
     * ignored. If no version is set on the request then the value will always be updated if the values differ. Using the
     * version value does not guarantee a write though, ConcurrentEditError may still occur if multiple clients are attempting
     * to update the same profile.
     */
    interface SetObjectsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface SetObjectsResponse {
        /** New version of the entity profile. */
        ProfileVersion: number,
        /** New version of the entity profile. */
        SetResults?: SetObjectInfo[],
    }

}
/** EventsAPI.Models as interfaces */
declare namespace PlayFabEventsModels {
    interface CreateTelemetryKeyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The name of the new key. Telemetry key names must be unique within the scope of the title. */
        KeyName: string,
    }

    interface CreateTelemetryKeyResponse {
        /** Details about the newly created telemetry key. */
        NewKeyDetails?: TelemetryKeyDetails,
    }

    interface DataConnectionAzureBlobSettings {
        /** Name of the storage account. */
        AccountName?: string,
        /** Name of the container. */
        ContainerName?: string,
        /** Azure Entra Tenant Id. */
        TenantId?: string,
    }

    interface DataConnectionAzureDataExplorerSettings {
        /** The URI of the ADX cluster. */
        ClusterUri?: string,
        /** The database to write to. */
        Database?: string,
        /** The table to write to. */
        Table?: string,
    }

    interface DataConnectionDetails {
        /** Settings of the data connection. */
        ConnectionSettings: DataConnectionSettings,
        /** Whether or not the connection is currently active. */
        IsActive: boolean,
        /** The name of the data connection. */
        Name: string,
        /** Current status of the data connection, if any. */
        Status?: DataConnectionStatusDetails,
        /** The type of data connection. */
        Type: DataConnectionType,
    }

    type DataConnectionErrorState = "OK"

        | "Error";

    interface DataConnectionFabricKQLSettings {
        /** The URI of the Fabric cluster. */
        ClusterUri?: string,
        /** The database to write to. */
        Database?: string,
        /** The table to write to. */
        Table?: string,
    }

    interface DataConnectionSettings {
        /** Settings if the type of connection is AzureBlobStorage. */
        AzureBlobSettings?: DataConnectionAzureBlobSettings,
        /** Settings if the type of connection is AzureDataExplorer. */
        AzureDataExplorerSettings?: DataConnectionAzureDataExplorerSettings,
        /** Settings if the type of connection is FabricKQL. */
        AzureFabricKQLSettings?: DataConnectionFabricKQLSettings,
    }

    interface DataConnectionStatusDetails {
        /** The name of the error affecting the data connection, if any. */
        Error?: string,
        /** A description of the error affecting the data connection, if any. This may be empty for some errors. */
        ErrorMessage?: string,
        /** The most recent time of the error affecting the data connection, if any. */
        MostRecentErrorTime?: string,
        /** Indicates if the connection is in a normal state or error state. */
        State?: DataConnectionErrorState,
    }

    type DataConnectionType = "AzureBlobStorage"

        | "AzureDataExplorer"
        | "FabricKQL";

    interface DeleteDataConnectionRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the data connection to delete. */
        Name: string,
    }

    interface DeleteDataConnectionResponse {
        /** Indicates whether or not the connection was deleted as part of the request. */
        WasDeleted: boolean,
    }

    interface DeleteTelemetryKeyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The name of the key to delete. */
        KeyName: string,
    }

    interface DeleteTelemetryKeyResponse {
        /** Indicates whether or not the key was deleted. If false, no key with that name existed. */
        WasKeyDeleted: boolean,
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    interface EventContents {
        /**
         * The optional custom tags associated with the event (e.g. build number, external trace identifiers, etc.). Before an
         * event is written, this collection and the base request custom tags will be merged, but not overriden. This enables the
         * caller to specify static tags and per event tags.
         */
        CustomTags?: { [key: string]: string | null },
        /** Entity associated with the event. If null, the event will apply to the calling entity. */
        Entity?: EntityKey,
        /** The namespace in which the event is defined. Allowed namespaces can vary by API. */
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

    interface GetDataConnectionRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the data connection to retrieve. */
        Name: string,
    }

    interface GetDataConnectionResponse {
        /** The details of the queried Data Connection. */
        DataConnection?: DataConnectionDetails,
    }

    interface GetTelemetryKeyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The name of the key to retrieve. */
        KeyName: string,
    }

    interface GetTelemetryKeyResponse {
        /** Details about the requested telemetry key. */
        KeyDetails?: TelemetryKeyDetails,
    }

    interface ListDataConnectionsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface ListDataConnectionsResponse {
        /** The list of existing Data Connections. */
        DataConnections?: DataConnectionDetails[],
    }

    interface ListTelemetryKeysRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
    }

    interface ListTelemetryKeysResponse {
        /** The telemetry keys configured for the title. */
        KeyDetails?: TelemetryKeyDetails[],
    }

    interface SetDataConnectionActiveRequest {
        /** Whether to set the data connection to active (true) or deactivated (false). */
        Active: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the data connection to update. */
        Name: string,
    }

    interface SetDataConnectionActiveResponse {
        /** The most current details about the data connection that was to be updated. */
        DataConnection?: DataConnectionDetails,
        /**
         * Indicates whether or not the data connection was updated. If false, the data connection was already in the desired
         * state.
         */
        WasUpdated: boolean,
    }

    interface SetDataConnectionRequest {
        /** Settings of the data connection. */
        ConnectionSettings: DataConnectionSettings,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Whether or not the connection is currently active. */
        IsActive: boolean,
        /** The name of the data connection to update or create. */
        Name: string,
        /** The type of data connection. */
        Type: DataConnectionType,
    }

    interface SetDataConnectionResponse {
        /** The details of the Data Connection to be created or updated. */
        DataConnection?: DataConnectionDetails,
    }

    interface SetTelemetryKeyActiveRequest {
        /** Whether to set the key to active (true) or deactivated (false). */
        Active: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The name of the key to update. */
        KeyName: string,
    }

    interface SetTelemetryKeyActiveResponse {
        /** The most current details about the telemetry key that was to be updated. */
        KeyDetails?: TelemetryKeyDetails,
        /** Indicates whether or not the key was updated. If false, the key was already in the desired state. */
        WasKeyUpdated: boolean,
    }

    interface TelemetryKeyDetails {
        /** When the key was created. */
        CreateTime: string,
        /** Whether or not the key is currently active. Deactivated keys cannot be used for telemetry ingestion. */
        IsActive: boolean,
        /** The key that can be distributed to clients for use during telemetry ingestion. */
        KeyValue?: string,
        /** When the key was last updated. */
        LastUpdateTime: string,
        /** The name of the key. Telemetry key names are unique within the scope of the title. */
        Name?: string,
    }

    interface WriteEventsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The collection of events to write. Up to 200 events can be written per request. */
        Events: EventContents[],
    }

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
    /**
     * Accepts an outstanding invitation to to join a group if the invited entity is not blocked by the group. Nothing is
     * returned in the case of success.
     */
    interface AcceptGroupApplicationRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Type of the entity to accept as. Must be the same entity as the claimant or an entity that is a child of the claimant
         * entity.
         */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Accepts an outstanding invitation to join the group if the invited entity is not blocked by the group. Only the invited
     * entity or a parent in its chain (e.g. title) may accept the invitation on the invited entity's behalf. Nothing is
     * returned in the case of success.
     */
    interface AcceptGroupInvitationRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Adds members to a group or role. Existing members of the group will added to roles within the group, but if the user is
     * not already a member of the group, only title claimants may add them to the group, and others must use the group
     * application or invite system to add new members to a group. Returns nothing if successful.
     */
    interface AddMembersRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /**
     * Creates an application to join a group. Calling this while a group application already exists will return the same
     * application instead of an error and will not refresh the time before the application expires. By default, if the entity
     * has an invitation to join the group outstanding, this will accept the invitation to join the group instead and return an
     * error indicating such, rather than creating a duplicate application to join that will need to be cleaned up later.
     * Returns information about the application or an error indicating an invitation was accepted instead.
     */
    interface ApplyToGroupRequest {
        /** Optional, default true. Automatically accept an outstanding invitation if one exists instead of creating an application */
        AutoAcceptOutstandingInvite?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /** Describes an application to join a group */
    interface ApplyToGroupResponse {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage,
        /** When the application to join will expire and be deleted */
        Expires: string,
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey,
    }

    /**
     * Blocks a list of entities from joining a group. Blocked entities may not create new applications to join, be invited to
     * join, accept an invitation, or have an application accepted. Failure due to being blocked does not clean up existing
     * applications or invitations to the group. No data is returned in the case of success.
     */
    interface BlockEntityRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Changes the role membership of a list of entities from one role to another in in a single operation. The destination
     * role must already exist. This is equivalent to adding the entities to the destination role and removing from the origin
     * role. Returns nothing if successful.
     */
    interface ChangeMemberRoleRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /**
     * Creates a new group, as well as administration and member roles, based off of a title's group template. Returns
     * information about the group that was created.
     */
    interface CreateGroupRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The name of the group. This is unique at the title level by default. */
        GroupName: string,
    }

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

    /**
     * Creates a new role within an existing group, with no members. Both the role ID and role name must be unique within the
     * group, but the name can be the same as the ID. The role ID is set at creation and cannot be changed. Returns information
     * about the role that was created.
     */
    interface CreateGroupRoleRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group: EntityKey,
        /**
         * The ID of the role. This must be unique within the group and cannot be changed. Role IDs must be between 1 and 64
         * characters long and are restricted to a-Z, A-Z, 0-9, '(', ')', '_', '-' and '.'.
         */
        RoleId: string,
        /**
         * The name of the role. This must be unique within the group and can be changed later. Role names must be between 1 and
         * 100 characters long
         */
        RoleName: string,
    }

    interface CreateGroupRoleResponse {
        /** The current version of the group profile, can be used for concurrency control during updates. */
        ProfileVersion: number,
        /** ID for the role */
        RoleId?: string,
        /** The name of the role */
        RoleName?: string,
    }

    /**
     * Deletes a group and all roles, invitations, join requests, and blocks associated with it. Permission to delete is only
     * required the group itself to execute this action. The group and data cannot be cannot be recovered once removed, but any
     * abuse reports about the group will remain. No data is returned in the case of success.
     */
    interface DeleteGroupRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** ID of the group or role to remove */
        Group: EntityKey,
    }

    /** Returns information about the role */
    interface DeleteRoleRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group: EntityKey,
        /** The ID of the role to delete. Role IDs must be between 1 and 64 characters long. */
        RoleId?: string,
    }

    interface EmptyResponse {
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    interface EntityMemberRole {
        /** The list of members in the role */
        Members?: EntityWithLineage[],
        /** The ID of the role. */
        RoleId?: string,
        /** The name of the role */
        RoleName?: string,
    }

    /** Entity wrapper class that contains the entity key and the entities that make up the lineage of the entity. */
    interface EntityWithLineage {
        /** The entity key for the specified entity */
        Key?: EntityKey,
        /** Dictionary of entity keys for related entities. Dictionary key is entity type. */
        Lineage?: { [key: string]: EntityKey },
    }

    /** Returns the ID, name, role list and other non-membership related information about a group. */
    interface GetGroupRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group?: EntityKey,
        /** The full name of the group */
        GroupName?: string,
    }

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

    /** Describes an application to join a group */
    interface GroupApplication {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage,
        /** When the application to join will expire and be deleted */
        Expires: string,
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey,
    }

    /** Describes an entity that is blocked from joining a group. */
    interface GroupBlock {
        /** The entity that is blocked */
        Entity?: EntityWithLineage,
        /** ID of the group that the entity is blocked from */
        Group: EntityKey,
    }

    /** Describes an invitation to a group. */
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

    /** Describes a group role */
    interface GroupRole {
        /** ID for the role */
        RoleId?: string,
        /** The name of the role */
        RoleName?: string,
    }

    /** Describes a group and the roles that it contains */
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

    /**
     * Invites a player to join a group, if they are not blocked by the group. An optional role can be provided to
     * automatically assign the player to the role if they accept the invitation. By default, if the entity has an application
     * to the group outstanding, this will accept the application instead and return an error indicating such, rather than
     * creating a duplicate invitation to join that will need to be cleaned up later. Returns information about the new
     * invitation or an error indicating an existing application to join was accepted.
     */
    interface InviteToGroupRequest {
        /** Optional, default true. Automatically accept an application if one exists instead of creating an invitation */
        AutoAcceptOutstandingApplication?: boolean,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    /** Describes an invitation to a group. */
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

    /**
     * Checks to see if an entity is a member of a group or role within the group. A result indicating if the entity is a
     * member of the group is returned, or a permission error if the caller does not have permission to read the group's member
     * list.
     */
    interface IsMemberRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface IsMemberResponse {
        /** A value indicating whether or not the entity is a member. */
        IsMember: boolean,
    }

    /**
     * Lists all outstanding requests to join a group. Returns a list of all requests to join, as well as when the request will
     * expire. To get the group applications for a specific entity, use ListMembershipOpportunities.
     */
    interface ListGroupApplicationsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group: EntityKey,
    }

    interface ListGroupApplicationsResponse {
        /** The requested list of applications to the group. */
        Applications?: GroupApplication[],
    }

    /** Lists all entities blocked from joining a group. A list of blocked entities is returned */
    interface ListGroupBlocksRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group: EntityKey,
    }

    interface ListGroupBlocksResponse {
        /** The requested list blocked entities. */
        BlockedEntities?: GroupBlock[],
    }

    /**
     * Lists all outstanding invitations for a group. Returns a list of entities that have been invited, as well as when the
     * invitation will expire. To get the group invitations for a specific entity, use ListMembershipOpportunities.
     */
    interface ListGroupInvitationsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group: EntityKey,
    }

    interface ListGroupInvitationsResponse {
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[],
    }

    /**
     * Gets a list of members and the roles they belong to within the group. If the caller does not have permission to view the
     * role, and the member is in no other role, the member is not displayed. Returns a list of entities that are members of
     * the group.
     */
    interface ListGroupMembersRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** ID of the group to list the members and roles for */
        Group: EntityKey,
    }

    interface ListGroupMembersResponse {
        /** The requested list of roles and member entity IDs. */
        Members?: EntityMemberRole[],
    }

    /**
     * Lists all outstanding group applications and invitations for an entity. Anyone may call this for any entity, but data
     * will only be returned for the entity or a parent of that entity. To list invitations or applications for a group to
     * check if a player is trying to join, use ListGroupInvitations and ListGroupApplications.
     */
    interface ListMembershipOpportunitiesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
    }

    interface ListMembershipOpportunitiesResponse {
        /** The requested list of group applications. */
        Applications?: GroupApplication[],
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[],
    }

    /**
     * Lists the groups and roles that an entity is a part of, checking to see if group and role metadata and memberships
     * should be visible to the caller. If the entity is not in any roles that are visible to the caller, the group is not
     * returned in the results, even if the caller otherwise has permission to see that the entity is a member of that group.
     */
    interface ListMembershipRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
    }

    interface ListMembershipResponse {
        /** The list of groups */
        Groups?: GroupWithRoles[],
    }

    type OperationTypes = "Created"

        | "Updated"
        | "Deleted"
        | "None";

    /**
     * Removes an existing application to join the group. This is used for both rejection of an application as well as
     * withdrawing an application. The applying entity or a parent in its chain (e.g. title) may withdraw the application, and
     * any caller with appropriate access in the group may reject an application. No data is returned in the case of success.
     */
    interface RemoveGroupApplicationRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Removes an existing invitation to join the group. This is used for both rejection of an invitation as well as rescinding
     * an invitation. The invited entity or a parent in its chain (e.g. title) may reject the invitation by calling this
     * method, and any caller with appropriate access in the group may rescind an invitation. No data is returned in the case
     * of success.
     */
    interface RemoveGroupInvitationRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Removes members from a group. A member can always remove themselves from a group, regardless of permissions. Returns
     * nothing if successful.
     */
    interface RemoveMembersRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The identifier of the group */
        Group: EntityKey,
        /** List of entities to remove */
        Members: EntityKey[],
        /** The ID of the role to remove the entities from. */
        RoleId?: string,
    }

    /** Unblocks a list of entities from joining a group. No data is returned in the case of success. */
    interface UnblockEntityRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The identifier of the group */
        Group: EntityKey,
    }

    /**
     * Updates data about a group, such as the name or default member role. Returns information about whether the update was
     * successful. Only title claimants may modify the administration role for a group.
     */
    interface UpdateGroupRequest {
        /** Optional: the ID of an existing role to set as the new administrator role for the group */
        AdminRoleId?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface UpdateGroupResponse {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string,
        /** New version of the group data. */
        ProfileVersion: number,
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: OperationTypes,
    }

    /** Updates the role name. Returns information about whether the update was successful. */
    interface UpdateGroupRoleRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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
    type EffectType = "Allow"

        | "Deny";

    /** An entity object and its associated meta data. */
    interface EntityDataObject {
        /** Un-escaped JSON object, if DataAsObject is true. */
        DataObject?: any,
        /** Escaped string JSON body of the object, if DataAsObject is default or false. */
        EscapedDataObject?: string,
        /** Name of this object. */
        ObjectName?: string,
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    interface EntityLineage {
        /** The Character Id of the associated entity. */
        CharacterId?: string,
        /** The Group Id of the associated entity. */
        GroupId?: string,
        /** The Master Player Account Id of the associated entity. */
        MasterPlayerAccountId?: string,
        /** The Namespace Id of the associated entity. */
        NamespaceId?: string,
        /** The Title Id of the associated entity. */
        TitleId?: string,
        /** The Title Player Account Id of the associated entity. */
        TitlePlayerAccountId?: string,
    }

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

    interface EntityProfileBody {
        /** Avatar URL for the entity. */
        AvatarUrl?: string,
        /** The creation time of this profile in UTC. */
        Created: string,
        /**
         * The display name of the entity. This field may serve different purposes for different entity types. i.e.: for a title
         * player account it could represent the display name of the player, whereas on a character it could be character's name.
         */
        DisplayName?: string,
        /** The entity id and type. */
        Entity?: EntityKey,
        /** The chain of responsibility for this entity. Use Lineage. */
        EntityChain?: string,
        /** The experiment variants of this profile. */
        ExperimentVariants?: string[],
        /** The files on this profile. */
        Files?: { [key: string]: EntityProfileFileMetadata },
        /** The language on this profile. */
        Language?: string,
        /** The lineage of this profile. */
        Lineage?: EntityLineage,
        /** The objects on this profile. */
        Objects?: { [key: string]: EntityDataObject },
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[],
        /** The statistics on this profile. */
        Statistics?: { [key: string]: EntityStatisticValue },
        /**
         * The version number of the profile in persistent storage at the time of the read. Used for optional optimistic
         * concurrency during update.
         */
        VersionNumber: number,
    }

    /** An entity file's meta data. To get a download URL call File/GetFiles API. */
    interface EntityProfileFileMetadata {
        /** Checksum value for the file, can be used to check if the file on the server has changed. */
        Checksum?: string,
        /** Name of the file */
        FileName?: string,
        /** Last UTC time the file was modified */
        LastModified: string,
        /** Storage service's reported byte count */
        Size: number,
    }

    interface EntityStatisticValue {
        /** Metadata associated with the Statistic. */
        Metadata?: string,
        /** Statistic name */
        Name?: string,
        /** Statistic scores */
        Scores?: string[],
        /** Statistic version */
        Version: number,
    }

    /**
     * Given an entity type and entity identifier will retrieve the profile from the entity store. If the profile being
     * retrieved is the caller's, then the read operation is consistent, if not it is an inconsistent read. An inconsistent
     * read means that we do not guarantee all committed writes have occurred before reading the profile, allowing for a stale
     * read. If consistency is important the Version Number on the result can be used to compare which version of the profile
     * any reader has.
     */
    interface GetEntityProfileRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean,
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
    }

    interface GetEntityProfileResponse {
        /** Entity profile */
        Profile?: EntityProfileBody,
    }

    /**
     * Given a set of entity types and entity identifiers will retrieve all readable profiles properties for the caller.
     * Profiles that the caller is not allowed to read will silently not be included in the results.
     */
    interface GetEntityProfilesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean,
        /** Entity keys of the profiles to load. Must be between 1 and 25 */
        Entities: EntityKey[],
    }

    interface GetEntityProfilesResponse {
        /** Entity profiles */
        Profiles?: EntityProfileBody[],
    }

    /**
     * Retrieves the title access policy that is used before the profile's policy is inspected during a request. If never
     * customized this will return the default starter policy built by PlayFab.
     */
    interface GetGlobalPolicyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
    }

    interface GetGlobalPolicyResponse {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[],
    }

    /** Given a master player account id (PlayFab ID), returns all title player accounts associated with it. */
    interface GetTitlePlayersFromMasterPlayerAccountIdsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Master player account ids. */
        MasterPlayerAccountIds: string[],
        /** Id of title to get players from. */
        TitleId?: string,
    }

    interface GetTitlePlayersFromMasterPlayerAccountIdsResponse {
        /** Optional id of title to get players from, required if calling using a master_player_account. */
        TitleId?: string,
        /** Dictionary of master player ids mapped to title player entity keys and id pairs */
        TitlePlayerAccounts?: { [key: string]: EntityKey },
    }

    interface GetTitlePlayersFromProviderIDsResponse {
        /**
         * Dictionary of provider identifiers mapped to title_player_account lineage. Missing lineage indicates the player either
         * doesn't exist or doesn't play the requested title.
         */
        TitlePlayerAccounts?: { [key: string]: EntityLineage },
    }

    /** Given a collection of Xbox IDs (XUIDs), returns all title player accounts. */
    interface GetTitlePlayersFromXboxLiveIDsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Xbox Sandbox the players had on their Xbox tokens. */
        Sandbox: string,
        /** Optional ID of title to get players from, required if calling using a master_player_account. */
        TitleId?: string,
        /** List of Xbox Live XUIDs */
        XboxLiveIds: string[],
    }

    type OperationTypes = "Created"

        | "Updated"
        | "Deleted"
        | "None";

    /**
     * Given an entity profile, will update its display name to the one passed in if the profile's version is equal to the
     * specified value
     */
    interface SetDisplayNameRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The new value to be set on Entity Profile's display name */
        DisplayName?: string,
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The expected version of a profile to perform this update on */
        ExpectedVersion?: number,
    }

    interface SetDisplayNameResponse {
        /** The type of operation that occured on the profile's display name */
        OperationResult?: OperationTypes,
        /** The updated version of the profile after the display name update */
        VersionNumber?: number,
    }

    /**
     * This will set the access policy statements on the given entity profile. This is not additive, any existing statements
     * will be replaced with the statements in this request.
     */
    interface SetEntityProfilePolicyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity to perform this action on. */
        Entity: EntityKey,
        /** The statements to include in the access policy. */
        Statements: EntityPermissionStatement[],
    }

    interface SetEntityProfilePolicyResponse {
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[],
    }

    /**
     * Updates the title access policy that is used before the profile's policy is inspected during a request. Policies are
     * compiled and cached for several minutes so an update here may not be reflected in behavior for a short time.
     */
    interface SetGlobalPolicyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[],
    }

    interface SetGlobalPolicyResponse {
    }

    /**
     * Given an entity profile, will update its language to the one passed in if the profile's version is equal to the one
     * passed in.
     */
    interface SetProfileLanguageRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey,
        /** The expected version of a profile to perform this update on */
        ExpectedVersion?: number,
        /** The language to set on the given entity. Deletes the profile's language if passed in a null string. */
        Language?: string,
    }

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
     * Create a game_server entity token and return a new or existing game_server entity.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/authenticategameserverwithcustomid
     */
    AuthenticateGameServerWithCustomId(request: PlayFabAuthenticationModels.AuthenticateCustomIdRequest): PlayFabAuthenticationModels.AuthenticateCustomIdResult;

    /**
     * Delete a game_server entity.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/delete
     */
    Delete(request: PlayFabAuthenticationModels.DeleteRequest): PlayFabAuthenticationModels.EmptyResponse;

    /**
     * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
     * Entity Token.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
     */
    GetEntityToken(request: PlayFabAuthenticationModels.GetEntityTokenRequest): PlayFabAuthenticationModels.GetEntityTokenResponse;

    /**
     * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
     */
    ValidateEntityToken(request: PlayFabAuthenticationModels.ValidateEntityTokenRequest): PlayFabAuthenticationModels.ValidateEntityTokenResponse;


    /**
     * Abort pending file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/abortfileuploads
     */
    AbortFileUploads(request: PlayFabDataModels.AbortFileUploadsRequest): PlayFabDataModels.AbortFileUploadsResponse;

    /**
     * Delete files on an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/deletefiles
     */
    DeleteFiles(request: PlayFabDataModels.DeleteFilesRequest): PlayFabDataModels.DeleteFilesResponse;

    /**
     * Finalize file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/finalizefileuploads
     */
    FinalizeFileUploads(request: PlayFabDataModels.FinalizeFileUploadsRequest): PlayFabDataModels.FinalizeFileUploadsResponse;

    /**
     * Retrieves file metadata from an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/getfiles
     */
    GetFiles(request: PlayFabDataModels.GetFilesRequest): PlayFabDataModels.GetFilesResponse;

    /**
     * Retrieves objects from an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/object/getobjects
     */
    GetObjects(request: PlayFabDataModels.GetObjectsRequest): PlayFabDataModels.GetObjectsResponse;

    /**
     * Initiates file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/initiatefileuploads
     */
    InitiateFileUploads(request: PlayFabDataModels.InitiateFileUploadsRequest): PlayFabDataModels.InitiateFileUploadsResponse;

    /**
     * Sets objects on an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/object/setobjects
     */
    SetObjects(request: PlayFabDataModels.SetObjectsRequest): PlayFabDataModels.SetObjectsResponse;


    /**
     * Creates a new telemetry key for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/createtelemetrykey
     */
    CreateTelemetryKey(request: PlayFabEventsModels.CreateTelemetryKeyRequest): PlayFabEventsModels.CreateTelemetryKeyResponse;

    /**
     * Deletes a Data Connection from a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/deletedataconnection
     */
    DeleteDataConnection(request: PlayFabEventsModels.DeleteDataConnectionRequest): PlayFabEventsModels.DeleteDataConnectionResponse;

    /**
     * Deletes a telemetry key configured for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/deletetelemetrykey
     */
    DeleteTelemetryKey(request: PlayFabEventsModels.DeleteTelemetryKeyRequest): PlayFabEventsModels.DeleteTelemetryKeyResponse;

    /**
     * Retrieves a single Data Connection associated with a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/getdataconnection
     */
    GetDataConnection(request: PlayFabEventsModels.GetDataConnectionRequest): PlayFabEventsModels.GetDataConnectionResponse;

    /**
     * Gets information about a telemetry key configured for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/gettelemetrykey
     */
    GetTelemetryKey(request: PlayFabEventsModels.GetTelemetryKeyRequest): PlayFabEventsModels.GetTelemetryKeyResponse;

    /**
     * Retrieves the list of Data Connections associated with a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/listdataconnections
     */
    ListDataConnections(request: PlayFabEventsModels.ListDataConnectionsRequest): PlayFabEventsModels.ListDataConnectionsResponse;

    /**
     * Lists all telemetry keys configured for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/listtelemetrykeys
     */
    ListTelemetryKeys(request: PlayFabEventsModels.ListTelemetryKeysRequest): PlayFabEventsModels.ListTelemetryKeysResponse;

    /**
     * Creates or updates a Data Connection on a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/setdataconnection
     */
    SetDataConnection(request: PlayFabEventsModels.SetDataConnectionRequest): PlayFabEventsModels.SetDataConnectionResponse;

    /**
     * Sets a Data Connection for the title to either the active or deactivated state.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/setdataconnectionactive
     */
    SetDataConnectionActive(request: PlayFabEventsModels.SetDataConnectionActiveRequest): PlayFabEventsModels.SetDataConnectionActiveResponse;

    /**
     * Sets a telemetry key to the active or deactivated state.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/settelemetrykeyactive
     */
    SetTelemetryKeyActive(request: PlayFabEventsModels.SetTelemetryKeyActiveRequest): PlayFabEventsModels.SetTelemetryKeyActiveResponse;

    /**
     * Write batches of entity based events to PlayStream. The namespace of the Event must be 'custom' or start with 'custom.'.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writeevents
     */
    WriteEvents(request: PlayFabEventsModels.WriteEventsRequest): PlayFabEventsModels.WriteEventsResponse;

    /**
     * Write batches of entity based events to as Telemetry events (bypass PlayStream). The namespace must be 'custom' or start
     * with 'custom.'
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writetelemetryevents
     */
    WriteTelemetryEvents(request: PlayFabEventsModels.WriteEventsRequest): PlayFabEventsModels.WriteEventsResponse;


    /**
     * Accepts an outstanding invitation to to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/acceptgroupapplication
     */
    AcceptGroupApplication(request: PlayFabGroupsModels.AcceptGroupApplicationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Accepts an invitation to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/acceptgroupinvitation
     */
    AcceptGroupInvitation(request: PlayFabGroupsModels.AcceptGroupInvitationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Adds members to a group or role.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/addmembers
     */
    AddMembers(request: PlayFabGroupsModels.AddMembersRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Applies to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/applytogroup
     */
    ApplyToGroup(request: PlayFabGroupsModels.ApplyToGroupRequest): PlayFabGroupsModels.ApplyToGroupResponse;

    /**
     * Blocks a list of entities from joining a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/blockentity
     */
    BlockEntity(request: PlayFabGroupsModels.BlockEntityRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Changes the role membership of a list of entities from one role to another.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/changememberrole
     */
    ChangeMemberRole(request: PlayFabGroupsModels.ChangeMemberRoleRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Creates a new group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/creategroup
     */
    CreateGroup(request: PlayFabGroupsModels.CreateGroupRequest): PlayFabGroupsModels.CreateGroupResponse;

    /**
     * Creates a new group role.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/createrole
     */
    CreateRole(request: PlayFabGroupsModels.CreateGroupRoleRequest): PlayFabGroupsModels.CreateGroupRoleResponse;

    /**
     * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/deletegroup
     */
    DeleteGroup(request: PlayFabGroupsModels.DeleteGroupRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Deletes an existing role in a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/deleterole
     */
    DeleteRole(request: PlayFabGroupsModels.DeleteRoleRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Gets information about a group and its roles
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/getgroup
     */
    GetGroup(request: PlayFabGroupsModels.GetGroupRequest): PlayFabGroupsModels.GetGroupResponse;

    /**
     * Invites a player to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/invitetogroup
     */
    InviteToGroup(request: PlayFabGroupsModels.InviteToGroupRequest): PlayFabGroupsModels.InviteToGroupResponse;

    /**
     * Checks to see if an entity is a member of a group or role within the group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/ismember
     */
    IsMember(request: PlayFabGroupsModels.IsMemberRequest): PlayFabGroupsModels.IsMemberResponse;

    /**
     * Lists all outstanding requests to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupapplications
     */
    ListGroupApplications(request: PlayFabGroupsModels.ListGroupApplicationsRequest): PlayFabGroupsModels.ListGroupApplicationsResponse;

    /**
     * Lists all entities blocked from joining a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupblocks
     */
    ListGroupBlocks(request: PlayFabGroupsModels.ListGroupBlocksRequest): PlayFabGroupsModels.ListGroupBlocksResponse;

    /**
     * Lists all outstanding invitations for a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupinvitations
     */
    ListGroupInvitations(request: PlayFabGroupsModels.ListGroupInvitationsRequest): PlayFabGroupsModels.ListGroupInvitationsResponse;

    /**
     * Lists all members for a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listgroupmembers
     */
    ListGroupMembers(request: PlayFabGroupsModels.ListGroupMembersRequest): PlayFabGroupsModels.ListGroupMembersResponse;

    /**
     * Lists all groups and roles for an entity
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listmembership
     */
    ListMembership(request: PlayFabGroupsModels.ListMembershipRequest): PlayFabGroupsModels.ListMembershipResponse;

    /**
     * Lists all outstanding invitations and group applications for an entity
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/listmembershipopportunities
     */
    ListMembershipOpportunities(request: PlayFabGroupsModels.ListMembershipOpportunitiesRequest): PlayFabGroupsModels.ListMembershipOpportunitiesResponse;

    /**
     * Removes an application to join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/removegroupapplication
     */
    RemoveGroupApplication(request: PlayFabGroupsModels.RemoveGroupApplicationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Removes an invitation join a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/removegroupinvitation
     */
    RemoveGroupInvitation(request: PlayFabGroupsModels.RemoveGroupInvitationRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Removes members from a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/removemembers
     */
    RemoveMembers(request: PlayFabGroupsModels.RemoveMembersRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Unblocks a list of entities from joining a group
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/unblockentity
     */
    UnblockEntity(request: PlayFabGroupsModels.UnblockEntityRequest): PlayFabGroupsModels.EmptyResponse;

    /**
     * Updates non-membership data about a group.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/updategroup
     */
    UpdateGroup(request: PlayFabGroupsModels.UpdateGroupRequest): PlayFabGroupsModels.UpdateGroupResponse;

    /**
     * Updates metadata about a role.
     * https://docs.microsoft.com/rest/api/playfab/groups/groups/updaterole
     */
    UpdateRole(request: PlayFabGroupsModels.UpdateGroupRoleRequest): PlayFabGroupsModels.UpdateGroupRoleResponse;


    /**
     * Gets the global title access policy
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getglobalpolicy
     */
    GetGlobalPolicy(request: PlayFabProfilesModels.GetGlobalPolicyRequest): PlayFabProfilesModels.GetGlobalPolicyResponse;

    /**
     * Retrieves the entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getprofile
     */
    GetProfile(request: PlayFabProfilesModels.GetEntityProfileRequest): PlayFabProfilesModels.GetEntityProfileResponse;

    /**
     * Retrieves the entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getprofiles
     */
    GetProfiles(request: PlayFabProfilesModels.GetEntityProfilesRequest): PlayFabProfilesModels.GetEntityProfilesResponse;

    /**
     * Retrieves the title player accounts associated with the given master player account.
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/gettitleplayersfrommasterplayeraccountids
     */
    GetTitlePlayersFromMasterPlayerAccountIds(request: PlayFabProfilesModels.GetTitlePlayersFromMasterPlayerAccountIdsRequest): PlayFabProfilesModels.GetTitlePlayersFromMasterPlayerAccountIdsResponse;

    /**
     * Retrieves the title player accounts associated with the given XUIDs.
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/gettitleplayersfromxboxliveids
     */
    GetTitlePlayersFromXboxLiveIDs(request: PlayFabProfilesModels.GetTitlePlayersFromXboxLiveIDsRequest): PlayFabProfilesModels.GetTitlePlayersFromProviderIDsResponse;

    /**
     * Update the display name of the entity
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setdisplayname
     */
    SetDisplayName(request: PlayFabProfilesModels.SetDisplayNameRequest): PlayFabProfilesModels.SetDisplayNameResponse;

    /**
     * Sets the global title access policy
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setglobalpolicy
     */
    SetGlobalPolicy(request: PlayFabProfilesModels.SetGlobalPolicyRequest): PlayFabProfilesModels.SetGlobalPolicyResponse;

    /**
     * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
     * language, Master Player Account language, and then title default language if the first two aren't set or supported.
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setprofilelanguage
     */
    SetProfileLanguage(request: PlayFabProfilesModels.SetProfileLanguageRequest): PlayFabProfilesModels.SetProfileLanguageResponse;

    /**
     * Sets the profiles access policy
     * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setprofilepolicy
     */
    SetProfilePolicy(request: PlayFabProfilesModels.SetEntityProfilePolicyRequest): PlayFabProfilesModels.SetEntityProfilePolicyResponse;


}


/** MultiplayerAPI.Models as interfaces */
declare namespace PlayFabMultiplayerModels {
    type AccessPolicy = "Public"

        | "Friends"
        | "Private";

    interface AssetReference {
        /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
        FileName?: string,
        /** The asset's mount path. */
        MountPath?: string,
    }

    interface AssetReferenceParams {
        /** The asset's file name. */
        FileName: string,
        /** The asset's mount path. */
        MountPath?: string,
    }

    interface AssetSummary {
        /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
        FileName?: string,
        /** The metadata associated with the asset. */
        Metadata?: { [key: string]: string | null },
    }

    type AttributeMergeFunction = "Min"

        | "Max"
        | "Average";

    type AttributeNotSpecifiedBehavior = "UseDefault"

        | "MatchAny";

    type AttributeSource = "User"

        | "PlayerEntity";

    type AzureRegion = "AustraliaEast"

        | "AustraliaSoutheast"
        | "BrazilSouth"
        | "CentralUs"
        | "EastAsia"
        | "EastUs"
        | "EastUs2"
        | "JapanEast"
        | "JapanWest"
        | "NorthCentralUs"
        | "NorthEurope"
        | "SouthCentralUs"
        | "SoutheastAsia"
        | "WestEurope"
        | "WestUs"
        | "SouthAfricaNorth"
        | "WestCentralUs"
        | "KoreaCentral"
        | "FranceCentral"
        | "WestUs2"
        | "CentralIndia"
        | "UaeNorth"
        | "UkSouth"
        | "SwedenCentral"
        | "CanadaCentral"
        | "MexicoCentral";

    type AzureVmFamily = "A"

        | "Av2"
        | "Dv2"
        | "Dv3"
        | "F"
        | "Fsv2"
        | "Dasv4"
        | "Dav4"
        | "Dadsv5"
        | "Dadsv6"
        | "Eav4"
        | "Easv4"
        | "Ev4"
        | "Esv4"
        | "Dsv3"
        | "Dsv2"
        | "NCasT4_v3"
        | "Ddv4"
        | "Ddsv4"
        | "HBv3"
        | "Ddv5"
        | "Ddsv5"
        | "Ddsv6";

    type AzureVmSize = "Standard_A1"

        | "Standard_A2"
        | "Standard_A3"
        | "Standard_A4"
        | "Standard_A1_v2"
        | "Standard_A2_v2"
        | "Standard_A4_v2"
        | "Standard_A8_v2"
        | "Standard_D1_v2"
        | "Standard_D2_v2"
        | "Standard_D3_v2"
        | "Standard_D4_v2"
        | "Standard_D5_v2"
        | "Standard_D2_v3"
        | "Standard_D4_v3"
        | "Standard_D8_v3"
        | "Standard_D16_v3"
        | "Standard_F1"
        | "Standard_F2"
        | "Standard_F4"
        | "Standard_F8"
        | "Standard_F16"
        | "Standard_F2s_v2"
        | "Standard_F4s_v2"
        | "Standard_F8s_v2"
        | "Standard_F16s_v2"
        | "Standard_D2as_v4"
        | "Standard_D4as_v4"
        | "Standard_D8as_v4"
        | "Standard_D16as_v4"
        | "Standard_D2a_v4"
        | "Standard_D4a_v4"
        | "Standard_D8a_v4"
        | "Standard_D16a_v4"
        | "Standard_D2ads_v5"
        | "Standard_D4ads_v5"
        | "Standard_D8ads_v5"
        | "Standard_D16ads_v5"
        | "Standard_D2ads_v6"
        | "Standard_D4ads_v6"
        | "Standard_D8ads_v6"
        | "Standard_D16ads_v6"
        | "Standard_E2a_v4"
        | "Standard_E4a_v4"
        | "Standard_E8a_v4"
        | "Standard_E16a_v4"
        | "Standard_E2as_v4"
        | "Standard_E4as_v4"
        | "Standard_E8as_v4"
        | "Standard_E16as_v4"
        | "Standard_D2s_v3"
        | "Standard_D4s_v3"
        | "Standard_D8s_v3"
        | "Standard_D16s_v3"
        | "Standard_DS1_v2"
        | "Standard_DS2_v2"
        | "Standard_DS3_v2"
        | "Standard_DS4_v2"
        | "Standard_DS5_v2"
        | "Standard_NC4as_T4_v3"
        | "Standard_D2d_v4"
        | "Standard_D4d_v4"
        | "Standard_D8d_v4"
        | "Standard_D16d_v4"
        | "Standard_D2ds_v4"
        | "Standard_D4ds_v4"
        | "Standard_D8ds_v4"
        | "Standard_D16ds_v4"
        | "Standard_HB120_16rs_v3"
        | "Standard_HB120_32rs_v3"
        | "Standard_HB120_64rs_v3"
        | "Standard_HB120_96rs_v3"
        | "Standard_HB120rs_v3"
        | "Standard_D2d_v5"
        | "Standard_D4d_v5"
        | "Standard_D8d_v5"
        | "Standard_D16d_v5"
        | "Standard_D32d_v5"
        | "Standard_D2ds_v5"
        | "Standard_D4ds_v5"
        | "Standard_D8ds_v5"
        | "Standard_D16ds_v5"
        | "Standard_D32ds_v5"
        | "Standard_D2ds_v6"
        | "Standard_D4ds_v6"
        | "Standard_D8ds_v6"
        | "Standard_D16ds_v6";

    interface BuildAliasDetailsResponse {
        /** The guid string alias Id of the alias to be created or updated. */
        AliasId?: string,
        /** The alias name. */
        AliasName?: string,
        /** Array of build selection criteria. */
        BuildSelectionCriteria?: BuildSelectionCriterion[],
    }

    interface BuildAliasParams {
        /** The guid string alias ID to use for the request. */
        AliasId: string,
    }

    interface BuildRegion {
        /** The current multiplayer server stats for the region. */
        CurrentServerStats?: CurrentServerStats,
        /** Optional settings to control dynamic adjustment of standby target */
        DynamicStandbySettings?: DynamicStandbySettings,
        /** Whether the game assets provided for the build have been replicated to this region. */
        IsAssetReplicationComplete: boolean,
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number,
        /** Regional override for the number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm?: number,
        /** The build region. */
        Region?: string,
        /** Optional settings to set the standby target to specified values during the supplied schedules */
        ScheduledStandbySettings?: ScheduledStandbySettings,
        /** The target number of standby multiplayer servers for the region. */
        StandbyServers: number,
        /**
         * The status of multiplayer servers in the build region. Valid values are - Unknown, Initialized, Deploying, Deployed,
         * Unhealthy, Deleting, Deleted.
         */
        Status?: string,
        /** Regional override for the VM size the build was created on. */
        VmSize?: AzureVmSize,
    }

    interface BuildRegionParams {
        /** Optional settings to control dynamic adjustment of standby target. If not specified, dynamic standby is disabled */
        DynamicStandbySettings?: DynamicStandbySettings,
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number,
        /** Regional override for the number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm?: number,
        /** The build region. */
        Region: string,
        /** Optional settings to set the standby target to specified values during the supplied schedules */
        ScheduledStandbySettings?: ScheduledStandbySettings,
        /** The number of standby multiplayer servers for the region. */
        StandbyServers: number,
        /** Regional override for the VM size the build was created on. */
        VmSize?: AzureVmSize,
    }

    interface BuildSelectionCriterion {
        /** Dictionary of build ids and their respective weights for distribution of allocation requests. */
        BuildWeightDistribution?: { [key: string]: number },
    }

    interface BuildSummary {
        /** The guid string build ID of the build. */
        BuildId?: string,
        /** The build name. */
        BuildName?: string,
        /** The time the build was created in UTC. */
        CreationTime?: string,
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null },
        /** The configuration and status for each region in the build. */
        RegionConfigurations?: BuildRegion[],
    }

    /**
     * Cancels all tickets of which the player is a member in a given queue that are not cancelled or matched. This API is
     * useful if you lose track of what tickets the player is a member of (if the title crashes for instance) and want to
     * "reset". The Entity field is optional if the caller is a player and defaults to that player. Players may not cancel
     * tickets for other people. The Entity field is required if the caller is a server (authenticated as the title).
     */
    interface CancelAllMatchmakingTicketsForPlayerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity key of the player whose tickets should be canceled. */
        Entity?: EntityKey,
        /** The name of the queue from which a player's tickets should be canceled. */
        QueueName: string,
    }

    interface CancelAllMatchmakingTicketsForPlayerResult {
    }

    /**
     * Cancels all backfill tickets of which the player is a member in a given queue that are not cancelled or matched. This
     * API is useful if you lose track of what tickets the player is a member of (if the server crashes for instance) and want
     * to "reset".
     */
    interface CancelAllServerBackfillTicketsForPlayerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity key of the player whose backfill tickets should be canceled. */
        Entity: EntityKey,
        /** The name of the queue from which a player's backfill tickets should be canceled. */
        QueueName: string,
    }

    interface CancelAllServerBackfillTicketsForPlayerResult {
    }

    type CancellationReason = "Requested"

        | "Internal"
        | "Timeout";

    /**
     * Only servers and ticket members can cancel a ticket. The ticket can be in five different states when it is cancelled. 1:
     * the ticket is waiting for members to join it, and it has not started matching. If the ticket is cancelled at this stage,
     * it will never match. 2: the ticket is matching. If the ticket is cancelled, it will stop matching. 3: the ticket is
     * matched. A matched ticket cannot be cancelled. 4: the ticket is already cancelled and nothing happens. 5: the ticket is
     * waiting for a server. If the ticket is cancelled, server allocation will be stopped. A server may still be allocated due
     * to a race condition, but that will not be reflected in the ticket. There may be race conditions between the ticket
     * getting matched and the client making a cancellation request. The client must handle the possibility that the cancel
     * request fails if a match is found before the cancellation request is processed. We do not allow resubmitting a cancelled
     * ticket because players must consent to enter matchmaking again. Create a new ticket instead.
     */
    interface CancelMatchmakingTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the queue the ticket is in. */
        QueueName: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    interface CancelMatchmakingTicketResult {
    }

    /**
     * Only servers can cancel a backfill ticket. The ticket can be in three different states when it is cancelled. 1: the
     * ticket is matching. If the ticket is cancelled, it will stop matching. 2: the ticket is matched. A matched ticket cannot
     * be cancelled. 3: the ticket is already cancelled and nothing happens. There may be race conditions between the ticket
     * getting matched and the server making a cancellation request. The server must handle the possibility that the cancel
     * request fails if a match is found before the cancellation request is processed. We do not allow resubmitting a cancelled
     * ticket. Create a new ticket instead.
     */
    interface CancelServerBackfillTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the queue the ticket is in. */
        QueueName: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    interface CancelServerBackfillTicketResult {
    }

    interface Certificate {
        /** Base64 encoded string contents of the certificate. */
        Base64EncodedValue: string,
        /** A name for the certificate. This is used to reference certificates in build configurations. */
        Name: string,
        /**
         * If required for your PFX certificate, use this field to provide a password that will be used to install the certificate
         * on the container.
         */
        Password?: string,
    }

    interface CertificateSummary {
        /** The name of the certificate. */
        Name?: string,
        /** The thumbprint for the certificate. */
        Thumbprint?: string,
    }

    interface ConnectedPlayer {
        /** The player ID of the player connected to the multiplayer server. */
        PlayerId?: string,
    }

    type ContainerFlavor = "ManagedWindowsServerCore"

        | "CustomLinux"
        | "ManagedWindowsServerCorePreview"
        | "Invalid";

    interface ContainerImageReference {
        /** The container image name. */
        ImageName: string,
        /** The container tag. */
        Tag?: string,
    }

    interface CoreCapacity {
        /** The available core capacity for the (Region, VmFamily) */
        Available: number,
        /** The AzureRegion */
        Region?: string,
        /** The total core capacity for the (Region, VmFamily) */
        Total: number,
        /** The AzureVmFamily */
        VmFamily?: AzureVmFamily,
    }

    interface CoreCapacityChange {
        /** New quota core limit for the given vm family/region. */
        NewCoreLimit: number,
        /** Region to change. */
        Region: string,
        /** Virtual machine family to change. */
        VmFamily: AzureVmFamily,
    }

    /** Creates a multiplayer server build alias and returns the created alias. */
    interface CreateBuildAliasRequest {
        /** The alias name. */
        AliasName: string,
        /** Array of build selection criteria. */
        BuildSelectionCriteria?: BuildSelectionCriterion[],
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Creates a multiplayer server build with a custom container and returns information about the build creation request. */
    interface CreateBuildWithCustomContainerRequest {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The build name. */
        BuildName: string,
        /** The flavor of container to create a build from. */
        ContainerFlavor?: ContainerFlavor,
        /** The container reference, consisting of the image name and tag. */
        ContainerImageReference?: ContainerImageReference,
        /** The container command to run when the multiplayer server has been allocated, including any arguments. */
        ContainerRunCommand?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The list of game assets related to the build. */
        GameAssetReferences?: AssetReferenceParams[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[],
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReferenceParams[],
        /** The Linux instrumentation configuration for the build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration,
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
         */
        Metadata?: { [key: string]: string | null },
        /** The configuration for the monitoring application on the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams,
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number,
        /** The ports to map the build on. */
        Ports: Port[],
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[],
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams,
        /** The VM size to create the build on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript for the build */
        VmStartupScriptConfiguration?: VmStartupScriptParams,
    }

    interface CreateBuildWithCustomContainerResponse {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The guid string build ID. Must be unique for every build. */
        BuildId?: string,
        /** The build name. */
        BuildName?: string,
        /** The flavor of container of the build. */
        ContainerFlavor?: ContainerFlavor,
        /** The container command to run when the multiplayer server has been allocated, including any arguments. */
        ContainerRunCommand?: string,
        /** The time the build was created in UTC. */
        CreationTime?: string,
        /** The custom game container image reference information. */
        CustomGameContainerImage?: ContainerImageReference,
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[],
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReference[],
        /** The Linux instrumentation configuration for this build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration,
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null },
        /** The configuration for the monitoring application for the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration,
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number,
        /** The OS platform used for running the game process. */
        OsPlatform?: string,
        /** The ports the build is mapped on. */
        Ports?: Port[],
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[],
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams,
        /** The type of game server being hosted. */
        ServerType?: string,
        /**
         * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
         * disc.
         */
        UseStreamingForAssetDownloads?: boolean,
        /** The VM size the build was created on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration,
    }

    /** Creates a multiplayer server build with a managed container and returns information about the build creation request. */
    interface CreateBuildWithManagedContainerRequest {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The build name. */
        BuildName: string,
        /** The flavor of container to create a build from. */
        ContainerFlavor?: ContainerFlavor,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The list of game assets related to the build. */
        GameAssetReferences: AssetReferenceParams[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[],
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReferenceParams[],
        /**
         * The directory containing the game executable. This would be the start path of the game assets that contain the main game
         * server executable. If not provided, a best effort will be made to extract it from the start game command.
         */
        GameWorkingDirectory?: string,
        /** The instrumentation configuration for the build. */
        InstrumentationConfiguration?: InstrumentationConfiguration,
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
         */
        Metadata?: { [key: string]: string | null },
        /** The configuration for the monitoring application on the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams,
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number,
        /** The ports to map the build on. */
        Ports: Port[],
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[],
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams,
        /** The command to run when the multiplayer server is started, including any arguments. */
        StartMultiplayerServerCommand: string,
        /** The VM size to create the build on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript for the build */
        VmStartupScriptConfiguration?: VmStartupScriptParams,
        /** The crash dump configuration for the build. */
        WindowsCrashDumpConfiguration?: WindowsCrashDumpConfiguration,
    }

    interface CreateBuildWithManagedContainerResponse {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The guid string build ID. Must be unique for every build. */
        BuildId?: string,
        /** The build name. */
        BuildName?: string,
        /** The flavor of container of the build. */
        ContainerFlavor?: ContainerFlavor,
        /** The time the build was created in UTC. */
        CreationTime?: string,
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[],
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReference[],
        /**
         * The directory containing the game executable. This would be the start path of the game assets that contain the main game
         * server executable. If not provided, a best effort will be made to extract it from the start game command.
         */
        GameWorkingDirectory?: string,
        /** The instrumentation configuration for this build. */
        InstrumentationConfiguration?: InstrumentationConfiguration,
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null },
        /** The configuration for the monitoring application for the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration,
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number,
        /** The OS platform used for running the game process. */
        OsPlatform?: string,
        /** The ports the build is mapped on. */
        Ports?: Port[],
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[],
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams,
        /** The type of game server being hosted. */
        ServerType?: string,
        /** The command to run when the multiplayer server has been allocated, including any arguments. */
        StartMultiplayerServerCommand?: string,
        /**
         * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
         * disc.
         */
        UseStreamingForAssetDownloads?: boolean,
        /** The VM size the build was created on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration,
    }

    /**
     * Creates a multiplayer server build with the game server running as a process and returns information about the build
     * creation request.
     */
    interface CreateBuildWithProcessBasedServerRequest {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The build name. */
        BuildName: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The list of game assets related to the build. */
        GameAssetReferences: AssetReferenceParams[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[],
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReferenceParams[],
        /**
         * The working directory for the game process. If this is not provided, the working directory will be set based on the
         * mount path of the game server executable.
         */
        GameWorkingDirectory?: string,
        /** The instrumentation configuration for the Build. Used only if it is a Windows Build. */
        InstrumentationConfiguration?: InstrumentationConfiguration,
        /**
         * Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to
         * detect any breaking changes before they are released to retail. Retail builds should set this value to false.
         */
        IsOSPreview?: boolean,
        /** The Linux instrumentation configuration for the Build. Used only if it is a Linux Build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration,
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
         */
        Metadata?: { [key: string]: string | null },
        /** The configuration for the monitoring application on the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams,
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number,
        /** The OS platform used for running the game process. */
        OsPlatform?: string,
        /** The ports to map the build on. */
        Ports: Port[],
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[],
        /**
         * The command to run when the multiplayer server is started, including any arguments. The path to any executable should be
         * relative to the root asset folder when unzipped.
         */
        StartMultiplayerServerCommand: string,
        /** The VM size to create the build on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript for the build */
        VmStartupScriptConfiguration?: VmStartupScriptParams,
    }

    interface CreateBuildWithProcessBasedServerResponse {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The guid string build ID. Must be unique for every build. */
        BuildId?: string,
        /** The build name. */
        BuildName?: string,
        /** The flavor of container of the build. */
        ContainerFlavor?: ContainerFlavor,
        /** The time the build was created in UTC. */
        CreationTime?: string,
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[],
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReference[],
        /**
         * The working directory for the game process. If this is not provided, the working directory will be set based on the
         * mount path of the game server executable.
         */
        GameWorkingDirectory?: string,
        /** The instrumentation configuration for this build. */
        InstrumentationConfiguration?: InstrumentationConfiguration,
        /**
         * Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to
         * detect any breaking changes before they are released to retail. Retail builds should set this value to false.
         */
        IsOSPreview?: boolean,
        /** The Linux instrumentation configuration for this build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration,
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null },
        /** The configuration for the monitoring application for the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration,
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number,
        /** The OS platform used for running the game process. */
        OsPlatform?: string,
        /** The ports the build is mapped on. */
        Ports?: Port[],
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[],
        /** The type of game server being hosted. */
        ServerType?: string,
        /**
         * The command to run when the multiplayer server is started, including any arguments. The path to any executable is
         * relative to the root asset folder when unzipped.
         */
        StartMultiplayerServerCommand?: string,
        /**
         * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
         * disc.
         */
        UseStreamingForAssetDownloads?: boolean,
        /** The VM size the build was created on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration,
    }

    /** Request to create a lobby. A Server or client can create a lobby. */
    interface CreateLobbyRequest {
        /**
         * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be 'Public', 'Friends' or
         * 'Private'. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
         * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
         * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
         * join. Defaults to 'Public' on creation. Can only be changed by the lobby owner.
         */
        AccessPolicy?: AccessPolicy,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The private key-value pairs which are visible to all entities in the lobby. At most 30 key-value pairs may be stored
         * here, keys are limited to 30 characters and values to 1000. The total size of all lobbyData values may not exceed 4096
         * bytes. Keys are case sensitive.
         */
        LobbyData?: { [key: string]: string | null },
        /** The maximum number of players allowed in the lobby. The value must be between 2 and 128. */
        MaxPlayers: number,
        /**
         * The member initially added to the lobby. Client must specify exactly one member, which is the creator's entity and
         * member data. Member PubSubConnectionHandle must be null or empty. Game servers must not specify any members.
         */
        Members?: Member[],
        /** The lobby owner. Must be the calling entity. */
        Owner: EntityKey,
        /**
         * The policy for how a new owner is chosen. May be 'Automatic', 'Manual' or 'None'. Can only be specified by clients. If
         * client-owned and 'Automatic' - The Lobby service will automatically assign another connected owner when the current
         * owner leaves or disconnects. The useConnections property must be true. If client - owned and 'Manual' - Ownership is
         * protected as long as the current owner is connected. If the current owner leaves or disconnects any member may set
         * themselves as the current owner. The useConnections property must be true. If client-owned and 'None' - Any member can
         * set ownership. The useConnections property can be either true or false.
         */
        OwnerMigrationPolicy?: OwnerMigrationPolicy,
        /**
         * A setting that controls whether only the lobby owner can send invites to join the lobby. When true, only the lobby owner
         * can send invites. When false or not specified, any member can send invites. Defaults to false if not specified.
         * Restricted to client owned lobbies.
         */
        RestrictInvitesToLobbyOwner: boolean,
        /**
         * The public key-value pairs which allow queries to differentiate between lobbies. Queries will refer to these key-value
         * pairs in their filter and order by clauses to retrieve lobbies fitting the specified criteria. At most 30 key-value
         * pairs may be stored here. Keys are of the format string_key1, string_key2 ... string_key30 for string values, or
         * number_key1, number_key2, ... number_key30 for numeric values.Numeric values are floats. Values can be at most 256
         * characters long. The total size of all searchData values may not exceed 1024 bytes.
         */
        SearchData?: { [key: string]: string | null },
        /**
         * A setting to control whether connections are used. Defaults to true. When true, notifications are sent to subscribed
         * players, disconnect detection removes connectionHandles, only owner migration policies using connections are allowed,
         * and lobbies must have at least one connected member to be searchable or be a server hosted lobby with a connected
         * server. If false, then notifications are not sent, connections are not allowed, and lobbies do not need connections to
         * be searchable.
         */
        UseConnections: boolean,
    }

    interface CreateLobbyResult {
        /** A field which indicates which lobby the user will be joining. */
        ConnectionString: string,
        /** Id to uniquely identify a lobby. */
        LobbyId: string,
    }

    /** The client specifies the creator's attributes and optionally a list of other users to match with. */
    interface CreateMatchmakingTicketRequest {
        /** The User who created this ticket. */
        Creator: MatchmakingPlayer,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number,
        /** A list of Entity Keys of other users to match with. */
        MembersToMatchWith?: EntityKey[],
        /** The Id of a match queue. */
        QueueName: string,
    }

    interface CreateMatchmakingTicketResult {
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    /**
     * Creates a remote user to log on to a VM for a multiplayer server build in a specific region. Returns user credential
     * information necessary to log on.
     */
    interface CreateRemoteUserRequest {
        /** The guid string build ID of to create the remote user for. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The expiration time for the remote user created. Defaults to expiring in one day if not specified. */
        ExpirationTime?: string,
        /** The region of virtual machine to create the remote user for. */
        Region: string,
        /** The username to create the remote user with. */
        Username: string,
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string,
    }

    interface CreateRemoteUserResponse {
        /** The expiration time for the remote user created. */
        ExpirationTime?: string,
        /** The generated password for the remote user that was created. */
        Password?: string,
        /** The username for the remote user that was created. */
        Username?: string,
    }

    /** The server specifies all the members, their teams and their attributes, and the server details if applicable. */
    interface CreateServerBackfillTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number,
        /** The users who will be part of this ticket, along with their team assignments. */
        Members: MatchmakingPlayerWithTeamAssignment[],
        /** The Id of a match queue. */
        QueueName: string,
        /** The details of the server the members are connected to. */
        ServerDetails?: ServerDetails,
    }

    interface CreateServerBackfillTicketResult {
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    /** The server specifies all the members and their attributes. */
    interface CreateServerMatchmakingTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number,
        /** The users who will be part of this ticket. */
        Members: MatchmakingPlayer[],
        /** The Id of a match queue. */
        QueueName: string,
    }

    /** Creates a request to change a title's multiplayer server quotas. */
    interface CreateTitleMultiplayerServersQuotaChangeRequest {
        /** A brief description of the requested changes. */
        ChangeDescription?: string,
        /** Changes to make to the titles cores quota. */
        Changes: CoreCapacityChange[],
        /** Email to be contacted by our team about this request. Only required when a request is not approved. */
        ContactEmail?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Additional information about this request that our team can use to better understand the requirements. */
        Notes?: string,
        /** When these changes would need to be in effect. Only required when a request is not approved. */
        StartDate?: string,
    }

    interface CreateTitleMultiplayerServersQuotaChangeResponse {
        /** Id of the change request that was created. */
        RequestId?: string,
        /** Determines if the request was approved or not. When false, our team is reviewing and may respond within 2 business days. */
        WasApproved: boolean,
    }

    interface CurrentServerStats {
        /** The number of active multiplayer servers. */
        Active: number,
        /** The number of multiplayer servers still downloading game resources (such as assets). */
        Propping: number,
        /** The number of standingby multiplayer servers. */
        StandingBy: number,
        /** The total number of multiplayer servers. */
        Total: number,
    }

    interface CustomDifferenceRuleExpansion {
        /** Manually specify the values to use for each expansion interval (this overrides Difference, Delta, and MaxDifference). */
        DifferenceOverrides: OverrideDouble[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface CustomRegionSelectionRuleExpansion {
        /** Manually specify the maximum latency to use for each expansion interval. */
        MaxLatencyOverrides: OverrideUnsignedInt[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface CustomSetIntersectionRuleExpansion {
        /** Manually specify the values to use for each expansion interval. */
        MinIntersectionSizeOverrides: OverrideUnsignedInt[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface CustomTeamDifferenceRuleExpansion {
        /** Manually specify the team difference value to use for each expansion interval. */
        DifferenceOverrides: OverrideDouble[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface CustomTeamSizeBalanceRuleExpansion {
        /** Manually specify the team size difference to use for each expansion interval. */
        DifferenceOverrides: OverrideUnsignedInt[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    /** Deletes a multiplayer server game asset for a title. */
    interface DeleteAssetRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The filename of the asset to delete. */
        FileName: string,
    }

    /** Deletes a multiplayer server build alias. */
    interface DeleteBuildAliasRequest {
        /** The guid string alias ID of the alias to perform the action on. */
        AliasId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Removes a multiplayer server build's region. */
    interface DeleteBuildRegionRequest {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The build region to delete. */
        Region: string,
    }

    /** Deletes a multiplayer server build. */
    interface DeleteBuildRequest {
        /** The guid string build ID of the build to delete. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Deletes a multiplayer server game certificate. */
    interface DeleteCertificateRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the certificate. */
        Name: string,
    }

    /**
     * Removes the specified container image repository. After this operation, a 'docker pull' will fail for all the tags of
     * the specified image. Morever, ListContainerImages will not return the specified image.
     */
    interface DeleteContainerImageRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The container image repository we want to delete. */
        ImageName?: string,
    }

    /** Request to delete a lobby. Only servers can delete lobbies. */
    interface DeleteLobbyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The id of the lobby. */
        LobbyId?: string,
    }

    /**
     * Deletes a remote user to log on to a VM for a multiplayer server build in a specific region. Returns user credential
     * information necessary to log on.
     */
    interface DeleteRemoteUserRequest {
        /** The guid string build ID of the multiplayer server where the remote user is to delete. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The region of the multiplayer server where the remote user is to delete. */
        Region: string,
        /** The username of the remote user to delete. */
        Username: string,
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string,
    }

    /** Deletes a multiplayer server game secret. */
    interface DeleteSecretRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the secret. */
        Name: string,
    }

    interface DifferenceRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute,
        /**
         * Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity
         * profile.
         */
        AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior,
        /**
         * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
         * is set, Difference is ignored.
         */
        CustomExpansion?: CustomDifferenceRuleExpansion,
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is false). Optional.
         */
        DefaultAttributeValue?: number,
        /** The allowed difference between any two tickets at the start of matchmaking. */
        Difference: number,
        /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
        LinearExpansion?: LinearDifferenceRuleExpansion,
        /** How values are treated when there are multiple players in a single ticket. */
        MergeFunction: AttributeMergeFunction,
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
        /** The relative weight of this rule compared to others. */
        Weight: number,
    }

    type DirectPeerConnectivityOptions = "None"

        | "SamePlatformType"
        | "DifferentPlatformType"
        | "AnyPlatformType"
        | "SameEntityLoginProvider"
        | "DifferentEntityLoginProvider"
        | "AnyEntityLoginProvider"
        | "AnyPlatformTypeAndEntityLoginProvider"
        | "OnlyServers";

    interface DynamicStandbySettings {
        /**
         * List of auto standing by trigger values and corresponding standing by multiplier. Defaults to 1.5X at 50%, 3X at 25%,
         * and 4X at 5%
         */
        DynamicFloorMultiplierThresholds?: DynamicStandbyThreshold[],
        /** When true, dynamic standby will be enabled */
        IsEnabled: boolean,
        /** The time it takes to reduce target standing by to configured floor value after an increase. Defaults to 30 minutes */
        RampDownSeconds?: number,
    }

    interface DynamicStandbyThreshold {
        /** When the trigger threshold is reached, multiply by this value */
        Multiplier: number,
        /** The multiplier will be applied when the actual standby divided by target standby floor is less than this value */
        TriggerThresholdPercentage: number,
    }

    interface EmptyResponse {
    }

    /**
     * Enables the multiplayer server feature for a title and returns the enabled status. The enabled status can be
     * Initializing, Enabled, and Disabled. It can up to 20 minutes or more for the title to be enabled for the feature. On
     * average, it can take up to 20 minutes for the title to be enabled for the feature.
     */
    interface EnableMultiplayerServersForTitleRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface EnableMultiplayerServersForTitleResponse {
        /** The enabled status for the multiplayer server features for the title. */
        Status?: TitleMultiplayerServerEnabledStatus,
    }

    /** Combined entity type and ID structure which uniquely identifies a single entity. */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
    }

    type ExternalFriendSources = "None"

        | "Steam"
        | "Facebook"
        | "Xbox"
        | "Psn"
        | "All";

    /** Request to find friends lobbies. Only a client can find friend lobbies. */
    interface FindFriendLobbiesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Indicates which other platforms' friends this query should link to. */
        ExternalPlatformFriends?: ExternalFriendSources,
        /**
         * OData style string that contains one or more filters. Only the following operators are supported: "and" (logical and),
         * "eq" (equal), "ne" (not equals), "ge" (greater than or equal), "gt" (greater than), "le" (less than or equal), and "lt"
         * (less than). The left-hand side of each OData logical expression should be either a search property key (e.g.
         * string_key1, number_key3, etc) or one of the pre-defined search keys all of which must be prefixed by "lobby/":
         * lobby/memberCount (number of players in a lobby), lobby/maxMemberCount (maximum number of players allowed in a lobby),
         * lobby/memberCountRemaining (remaining number of players who can be allowed in a lobby), lobby/membershipLock (must equal
         * 'Unlocked' or 'Locked'), lobby/amOwner (required to equal "true"), lobby/amMember (required to equal "true").
         */
        Filter?: string,
        /**
         * OData style string that contains sorting for this query in either ascending ("asc") or descending ("desc") order.
         * OrderBy clauses are of the form "number_key1 asc" or the pre-defined search key "lobby/memberCount asc",
         * "lobby/memberCountRemaining desc" and "lobby/maxMemberCount desc". To sort by closest, a moniker `distance{number_key1 =
         * 5}` can be used to sort by distance from the given number. This field only supports either one sort clause or one
         * distance clause.
         */
        OrderBy?: string,
        /** Request pagination information. */
        Pagination?: PaginationRequest,
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string,
    }

    interface FindFriendLobbiesResult {
        /** Array of lobbies found that matched FindFriendLobbies request. */
        Lobbies: FriendLobbySummary[],
        /** Pagination response for FindFriendLobbies request. */
        Pagination: PaginationResponse,
    }

    /** Request to find lobbies. */
    interface FindLobbiesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * OData style string that contains one or more filters. Only the following operators are supported: "and" (logical and),
         * "eq" (equal), "ne" (not equals), "ge" (greater than or equal), "gt" (greater than), "le" (less than or equal), and "lt"
         * (less than). The left-hand side of each OData logical expression should be either a search property key (e.g.
         * string_key1, number_key3, etc) or one of the pre-defined search keys all of which must be prefixed by "lobby/":
         * lobby/memberCount (number of players in a lobby), lobby/maxMemberCount (maximum number of players allowed in a lobby),
         * lobby/memberCountRemaining (remaining number of players who can be allowed in a lobby), lobby/membershipLock (must equal
         * 'Unlocked' or 'Locked'), lobby/amOwner (required to equal "true"), lobby/amMember (required to equal "true").
         */
        Filter?: string,
        /**
         * OData style string that contains sorting for this query in either ascending ("asc") or descending ("desc") order.
         * OrderBy clauses are of the form "number_key1 asc" or the pre-defined search key "lobby/memberCount asc",
         * "lobby/memberCountRemaining desc" and "lobby/maxMemberCount desc". To sort by closest, a moniker `distance{number_key1 =
         * 5}` can be used to sort by distance from the given number. This field only supports either one sort clause or one
         * distance clause.
         */
        OrderBy?: string,
        /** Request pagination information. */
        Pagination?: PaginationRequest,
    }

    interface FindLobbiesResult {
        /** Array of lobbies found that matched FindLobbies request. */
        Lobbies: LobbySummary[],
        /** Pagination response for FindLobbies request. */
        Pagination: PaginationResponse,
    }

    interface FriendLobbySummary {
        /**
         * A string used to join the lobby.This field is populated by the Lobby service.Invites are performed by communicating this
         * connectionString to other players.
         */
        ConnectionString: string,
        /** The current number of players in the lobby. */
        CurrentPlayers: number,
        /** Friends in Lobby. */
        Friends?: EntityKey[],
        /** Id to uniquely identify a lobby. */
        LobbyId: string,
        /** The maximum number of players allowed in the lobby. */
        MaxPlayers: number,
        /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
        MembershipLock?: MembershipLock,
        /** The client or server entity which owns this lobby. */
        Owner: EntityKey,
        /** Search data. */
        SearchData?: { [key: string]: string | null },
    }

    interface GameCertificateReference {
        /**
         * An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game
         * certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name
         * field to be uploaded without the need to change any game server code to reference the new Name.
         */
        GsdkAlias?: string,
        /**
         * The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this
         * title.
         */
        Name?: string,
    }

    interface GameCertificateReferenceParams {
        /**
         * An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game
         * certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name
         * field to be uploaded without the need to change any game server code to reference the new Name.
         */
        GsdkAlias: string,
        /**
         * The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this
         * title.
         */
        Name: string,
    }

    interface GameSecretReference {
        /** The name of the game secret. This name should match the name of a secret that was previously added to this title. */
        Name?: string,
    }

    interface GameSecretReferenceParams {
        /** The name of the game secret. This name should match the name of a secret that was previously added to this title. */
        Name: string,
    }

    /** Gets a URL that can be used to download the specified asset. */
    interface GetAssetDownloadUrlRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The asset's file name to get the download URL for. */
        FileName: string,
    }

    interface GetAssetDownloadUrlResponse {
        /** The asset's download URL. */
        AssetDownloadUrl?: string,
        /** The asset's file name to get the download URL for. */
        FileName?: string,
    }

    /** Gets the URL to upload assets to. */
    interface GetAssetUploadUrlRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The asset's file name to get the upload URL for. */
        FileName: string,
    }

    interface GetAssetUploadUrlResponse {
        /** The asset's upload URL. */
        AssetUploadUrl?: string,
        /** The asset's file name to get the upload URL for. */
        FileName?: string,
    }

    /** Returns the details about a multiplayer server build alias. */
    interface GetBuildAliasRequest {
        /** The guid string alias ID of the alias to perform the action on. */
        AliasId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Returns the details about a multiplayer server build. */
    interface GetBuildRequest {
        /** The guid string build ID of the build to get. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface GetBuildResponse {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean,
        /** The guid string build ID of the build. */
        BuildId?: string,
        /** The build name. */
        BuildName?: string,
        /** The current build status. Valid values are - Deploying, Deployed, DeletingRegion, Unhealthy. */
        BuildStatus?: string,
        /** The flavor of container of he build. */
        ContainerFlavor?: ContainerFlavor,
        /**
         * The container command to run when the multiplayer server has been allocated, including any arguments. This only applies
         * to custom builds. If the build is a managed build, this field will be null.
         */
        ContainerRunCommand?: string,
        /** The time the build was created in UTC. */
        CreationTime?: string,
        /** The custom game container image for a custom build. */
        CustomGameContainerImage?: ContainerImageReference,
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[],
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[],
        /** The instrumentation configuration of the build. */
        InstrumentationConfiguration?: InstrumentationConfiguration,
        /**
         * Metadata of the build. The keys are case insensitive. The build metadata is made available to the server through Game
         * Server SDK (GSDK).
         */
        Metadata?: { [key: string]: string | null },
        /** The number of multiplayer servers to hosted on a single VM of the build. */
        MultiplayerServerCountPerVm: number,
        /** The OS platform used for running the game process. */
        OsPlatform?: string,
        /** The ports the build is mapped on. */
        Ports?: Port[],
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[],
        /** The resource constraints to apply to each server on the VM. */
        ServerResourceConstraints?: ServerResourceConstraintParams,
        /** The type of game server being hosted. */
        ServerType?: string,
        /**
         * The command to run when the multiplayer server has been allocated, including any arguments. This only applies to managed
         * builds. If the build is a custom build, this field will be null.
         */
        StartMultiplayerServerCommand?: string,
        /** The VM size the build was created on. */
        VmSize?: AzureVmSize,
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration,
    }

    /**
     * Gets credentials to the container registry where game developers can upload custom container images to before creating a
     * new build.
     */
    interface GetContainerRegistryCredentialsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface GetContainerRegistryCredentialsResponse {
        /** The url of the container registry. */
        DnsName?: string,
        /** The password for accessing the container registry. */
        Password?: string,
        /** The username for accessing the container registry. */
        Username?: string,
    }

    /** Request to get a lobby. */
    interface GetLobbyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The id of the lobby. */
        LobbyId?: string,
    }

    interface GetLobbyResult {
        /** The information pertaining to the requested lobby. */
        Lobby: Lobby,
    }

    /** Gets the current configuration for a queue. */
    interface GetMatchmakingQueueRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The Id of the matchmaking queue to retrieve. */
        QueueName?: string,
    }

    interface GetMatchmakingQueueResult {
        /** The matchmaking queue config. */
        MatchmakingQueue?: MatchmakingQueueConfig,
    }

    /**
     * The ticket includes the invited players, their attributes if they have joined, the ticket status, the match Id when
     * applicable, etc. Only servers, the ticket creator and the invited players can get the ticket.
     */
    interface GetMatchmakingTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean,
        /** The name of the queue to find a match for. */
        QueueName: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    interface GetMatchmakingTicketResult {
        /**
         * The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. Please retry
         * if CancellationReason is RetryRequired.
         */
        CancellationReasonString?: string,
        /** Change number used for differentiating older matchmaking status updates from newer ones. */
        ChangeNumber?: number,
        /** The server date and time at which ticket was created. */
        Created: string,
        /** The Creator's entity key. */
        Creator: EntityKey,
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number,
        /** The Id of a match. */
        MatchId?: string,
        /** A list of Users that have joined this ticket. */
        Members: MatchmakingPlayer[],
        /** A list of PlayFab Ids of Users to match with. */
        MembersToMatchWith?: EntityKey[],
        /** The Id of a match queue. */
        QueueName: string,
        /**
         * The current ticket status. Possible values are: WaitingForPlayers, WaitingForMatch, WaitingForServer, Canceled and
         * Matched.
         */
        Status: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    /**
     * When matchmaking has successfully matched together a collection of tickets, it produces a 'match' with an Id. The match
     * contains all of the players that were matched together, and their team assigments. Only servers and ticket members can
     * get the match.
     */
    interface GetMatchRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean,
        /** The Id of a match. */
        MatchId: string,
        /** The name of the queue to join. */
        QueueName: string,
        /** Determines whether the matchmaking attributes for each user should be returned in the response for match request. */
        ReturnMemberAttributes: boolean,
    }

    interface GetMatchResult {
        /** A string that is used by players that are matched together to join an arranged lobby. */
        ArrangementString?: string,
        /** The Id of a match. */
        MatchId: string,
        /** A list of Users that are matched together, along with their team assignments. */
        Members: MatchmakingPlayerWithTeamAssignment[],
        /**
         * A list of regions that the match could be played in sorted by preference. This value is only set if the queue has a
         * region selection rule.
         */
        RegionPreferences?: string[],
        /** The details of the server that the match has been allocated to. */
        ServerDetails?: ServerDetails,
    }

    /** Gets multiplayer server session details for a build in a specific region. */
    interface GetMultiplayerServerDetailsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The title generated guid string session ID of the multiplayer server to get details for. This is to keep track of
         * multiplayer server sessions.
         */
        SessionId: string,
    }

    interface GetMultiplayerServerDetailsResponse {
        /** The identity of the build in which the server was allocated. */
        BuildId?: string,
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[],
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        FQDN?: string,
        /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string,
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string,
        /** The ports the multiplayer server uses. */
        Ports?: Port[],
        /** The list of public Ipv4 addresses associated with the server. */
        PublicIPV4Addresses?: PublicIpAddress[],
        /** The region the multiplayer server is located in. */
        Region?: string,
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string,
        /** The guid string session ID of the multiplayer server. */
        SessionId?: string,
        /** The state of the multiplayer server. */
        State?: string,
        /** The virtual machine ID that the multiplayer server is located on. */
        VmId?: string,
    }

    /**
     * Gets multiplayer server logs for a specific server id in a region. The logs are available only after a server has
     * terminated.
     */
    interface GetMultiplayerServerLogsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The server ID of multiplayer server to get logs for. */
        ServerId: string,
    }

    interface GetMultiplayerServerLogsResponse {
        /** URL for logs download. */
        LogDownloadUrl?: string,
    }

    /**
     * Gets multiplayer server logs for a specific server id in a region. The logs are available only after a server has
     * terminated.
     */
    interface GetMultiplayerSessionLogsBySessionIdRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The server ID of multiplayer server to get logs for. */
        SessionId: string,
    }

    /**
     * Returns the matchmaking statistics for a queue. These include the number of players matching and the statistics related
     * to the time to match statistics in seconds (average and percentiles). Statistics are refreshed once every 5 minutes.
     * Servers can access all statistics no matter what the ClientStatisticsVisibility is configured to. Clients can access
     * statistics according to the ClientStatisticsVisibility. Client requests are forbidden if all visibility fields are
     * false.
     */
    interface GetQueueStatisticsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The name of the queue. */
        QueueName: string,
    }

    interface GetQueueStatisticsResult {
        /** The current number of players in the matchmaking queue, who are waiting to be matched. */
        NumberOfPlayersMatching?: number,
        /** Statistics representing the time (in seconds) it takes for tickets to find a match. */
        TimeToMatchStatisticsInSeconds?: Statistics,
    }

    /** Gets a remote login endpoint to a VM that is hosting a multiplayer server build in a specific region. */
    interface GetRemoteLoginEndpointRequest {
        /** The guid string build ID of the multiplayer server to get remote login information for. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The region of the multiplayer server to get remote login information for. */
        Region: string,
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string,
    }

    interface GetRemoteLoginEndpointResponse {
        /** The remote login IPV4 address of multiplayer server. */
        IPV4Address?: string,
        /** The remote login port of multiplayer server. */
        Port: number,
    }

    /**
     * The ticket includes the players, their attributes, their teams, the ticket status, the match Id and the server details
     * when applicable, etc. Only servers can get the ticket.
     */
    interface GetServerBackfillTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean,
        /** The name of the queue to find a match for. */
        QueueName: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    interface GetServerBackfillTicketResult {
        /** The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. */
        CancellationReasonString?: string,
        /** The server date and time at which ticket was created. */
        Created: string,
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number,
        /** The Id of a match. */
        MatchId?: string,
        /** A list of Users that are part of this ticket, along with their team assignments. */
        Members: MatchmakingPlayerWithTeamAssignment[],
        /** The Id of a match queue. */
        QueueName: string,
        /** The details of the server the members are connected to. */
        ServerDetails: ServerDetails,
        /** The current ticket status. Possible values are: WaitingForMatch, Canceled and Matched. */
        Status: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    /**
     * Gets the status of whether a title is enabled for the multiplayer server feature. The enabled status can be
     * Initializing, Enabled, and Disabled.
     */
    interface GetTitleEnabledForMultiplayerServersStatusRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface GetTitleEnabledForMultiplayerServersStatusResponse {
        /** The enabled status for the multiplayer server features for the title. */
        Status?: TitleMultiplayerServerEnabledStatus,
    }

    /** Gets a title's server quota change request. */
    interface GetTitleMultiplayerServersQuotaChangeRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Id of the change request to get. */
        RequestId: string,
    }

    interface GetTitleMultiplayerServersQuotaChangeResponse {
        /** The change request for this title. */
        Change?: QuotaChange,
    }

    /** Gets the quotas for a title in relation to multiplayer servers. */
    interface GetTitleMultiplayerServersQuotasRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface GetTitleMultiplayerServersQuotasResponse {
        /** The various quotas for multiplayer servers for the title. */
        Quotas?: TitleMultiplayerServersQuotas,
    }

    interface InstrumentationConfiguration {
        /** Designates whether windows instrumentation configuration will be enabled for this Build */
        IsEnabled?: boolean,
        /**
         * This property is deprecated, use IsEnabled. The list of processes to be monitored on a VM for this build. Providing
         * processes will turn on performance metrics collection for this build. Process names should not include extensions. If
         * the game server process is: GameServer.exe; then, ProcessesToMonitor = [ GameServer ]
         */
        ProcessesToMonitor?: string[],
    }

    /**
     * Request to invite a player to a lobby the caller is already a member of. Only a client can invite another player to a
     * lobby.
     */
    interface InviteToLobbyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity invited to the lobby. */
        InviteeEntity?: EntityKey,
        /** The id of the lobby. */
        LobbyId?: string,
        /** The member entity sending the invite. Must be a member of the lobby. */
        MemberEntity?: EntityKey,
    }

    /** Request to join an arranged lobby. Only a client can join an arranged lobby. */
    interface JoinArrangedLobbyRequest {
        /**
         * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be 'Public', 'Friends' or
         * 'Private'. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
         * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
         * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
         * join. Defaults to 'Public' on creation. Can only be changed by the lobby owner.
         */
        AccessPolicy?: AccessPolicy,
        /**
         * A field which indicates which lobby the user will be joining. This field is opaque to everyone except the Lobby service
         * and the creator of the arrangementString (Matchmaking). This string defines a unique identifier for the arranged lobby
         * as well as the title and member the string is valid for. Arrangement strings have an expiration.
         */
        ArrangementString: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The maximum number of players allowed in the lobby. The value must be between 2 and 128. */
        MaxPlayers: number,
        /**
         * The private key-value pairs used by the member to communicate information to other members and the owner. Visible to all
         * entities in the lobby. At most 30 key-value pairs may be stored here, keys are limited to 30 characters and values to
         * 1000. The total size of all memberData values may not exceed 4096 bytes. Keys are case sensitive.
         */
        MemberData?: { [key: string]: string | null },
        /** The member entity who is joining the lobby. The first member to join will be the lobby owner. */
        MemberEntity: EntityKey,
        /**
         * The policy for how a new owner is chosen. May be 'Automatic', 'Manual' or 'None'. Can only be specified by clients. If
         * client-owned and 'Automatic' - The Lobby service will automatically assign another connected owner when the current
         * owner leaves or disconnects. The useConnections property must be true. If client - owned and 'Manual' - Ownership is
         * protected as long as the current owner is connected. If the current owner leaves or disconnects any member may set
         * themselves as the current owner. The useConnections property must be true. If client-owned and 'None' - Any member can
         * set ownership. The useConnections property can be either true or false.
         */
        OwnerMigrationPolicy?: OwnerMigrationPolicy,
        /**
         * A setting that controls whether only the lobby owner can send invites to join the lobby. When true, only the lobby owner
         * can send invites. When false or not specified, any member can send invites. Defaults to false if not specified.
         * Restricted to client owned lobbies.
         */
        RestrictInvitesToLobbyOwner: boolean,
        /**
         * A setting to control whether connections are used. Defaults to true. When true, notifications are sent to subscribed
         * players, disconnect detection removes connectionHandles, only owner migration policies using connections are allowed,
         * and lobbies must have at least one connected member to be searchable or be a server hosted lobby with a connected
         * server. If false, then notifications are not sent, connections are not allowed, and lobbies do not need connections to
         * be searchable.
         */
        UseConnections: boolean,
    }

    /**
     * Preview: Request to join a lobby as a server. Only callable by a game_server entity and this is restricted to client
     * owned lobbies which are using connections.
     */
    interface JoinLobbyAsServerRequest {
        /**
         * A field which indicates which lobby the game_server will be joining. This field is opaque to everyone except the Lobby
         * service.
         */
        ConnectionString: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The private key-value pairs which are visible to all entities in the lobby but can only be modified by the joined
         * server.At most 30 key - value pairs may be stored here, keys are limited to 30 characters and values to 1000.The total
         * size of all serverData values may not exceed 4096 bytes.
         */
        ServerData?: { [key: string]: string | null },
        /**
         * The game_server entity which is joining the Lobby. If a different game_server entity has already joined the request will
         * fail unless the joined entity is disconnected, in which case the incoming game_server entity will replace the
         * disconnected entity.
         */
        ServerEntity: EntityKey,
    }

    interface JoinLobbyAsServerResult {
        /** Successfully joined lobby's id. */
        LobbyId: string,
    }

    /** Request to join a lobby. Only a client can join a lobby. */
    interface JoinLobbyRequest {
        /** A field which indicates which lobby the user will be joining. This field is opaque to everyone except the Lobby service. */
        ConnectionString?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The private key-value pairs used by the member to communicate information to other members and the owner. Visible to all
         * entities in the lobby. At most 30 key-value pairs may be stored here, keys are limited to 30 characters and values to
         * 1000. The total size of all memberData values may not exceed 4096 bytes.Keys are case sensitive.
         */
        MemberData?: { [key: string]: string | null },
        /** The member entity who is joining the lobby. */
        MemberEntity?: EntityKey,
    }

    interface JoinLobbyResult {
        /** Successfully joined lobby's id. */
        LobbyId: string,
    }

    /**
     * Add the player to a matchmaking ticket and specify all of its matchmaking attributes. Players can join a ticket if and
     * only if their EntityKeys are already listed in the ticket's Members list. The matchmaking service automatically starts
     * matching the ticket against other matchmaking tickets once all players have joined the ticket. It is not possible to
     * join a ticket once it has started matching.
     */
    interface JoinMatchmakingTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The User who wants to join the ticket. Their Id must be listed in PlayFabIdsToMatchWith. */
        Member: MatchmakingPlayer,
        /** The name of the queue to join. */
        QueueName: string,
        /** The Id of the ticket to find a match for. */
        TicketId: string,
    }

    interface JoinMatchmakingTicketResult {
    }

    /**
     * Preview: Request for server to leave a lobby. Only a game_server entity can leave and this is restricted to client owned
     * lobbies which are using connections.
     */
    interface LeaveLobbyAsServerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The id of the lobby. */
        LobbyId: string,
        /**
         * The game_server entity leaving the lobby. If the game_server was subscribed to notifications, it will be unsubscribed.
         * If a the given game_server entity is not in the lobby, it will fail.
         */
        ServerEntity: EntityKey,
    }

    /** Request to leave a lobby. Only a client can leave a lobby. */
    interface LeaveLobbyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The id of the lobby. */
        LobbyId?: string,
        /** The member entity leaving the lobby. */
        MemberEntity?: EntityKey,
    }

    interface LinearDifferenceRuleExpansion {
        /** This value gets added to Difference at every expansion interval. */
        Delta: number,
        /** Once the total difference reaches this value, expansion stops. Optional. */
        Limit?: number,
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface LinearRegionSelectionRuleExpansion {
        /** This value gets added to MaxLatency at every expansion interval. */
        Delta: number,
        /** Once the max Latency reaches this value, expansion stops. */
        Limit: number,
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface LinearSetIntersectionRuleExpansion {
        /** This value gets added to MinIntersectionSize at every expansion interval. */
        Delta: number,
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface LinearTeamDifferenceRuleExpansion {
        /** This value gets added to Difference at every expansion interval. */
        Delta: number,
        /** Once the total difference reaches this value, expansion stops. Optional. */
        Limit?: number,
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface LinearTeamSizeBalanceRuleExpansion {
        /** This value gets added to Difference at every expansion interval. */
        Delta: number,
        /** Once the total difference reaches this value, expansion stops. Optional. */
        Limit?: number,
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface LinuxInstrumentationConfiguration {
        /** Designates whether Linux instrumentation configuration will be enabled for this Build */
        IsEnabled: boolean,
    }

    /** Returns a list of multiplayer server game asset summaries for a title. */
    interface ListAssetSummariesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListAssetSummariesResponse {
        /** The list of asset summaries. */
        AssetSummaries?: AssetSummary[],
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of summarized details of all multiplayer server builds for a title. */
    interface ListBuildAliasesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListBuildAliasesResponse {
        /** The list of build aliases for the title */
        BuildAliases?: BuildAliasDetailsResponse[],
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of summarized details of all multiplayer server builds for a title. */
    interface ListBuildSummariesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListBuildSummariesResponse {
        /** The list of build summaries for a title. */
        BuildSummaries?: BuildSummary[],
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of multiplayer server game certificates for a title. */
    interface ListCertificateSummariesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListCertificateSummariesResponse {
        /** The list of game certificates. */
        CertificateSummaries?: CertificateSummary[],
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of the container images that have been uploaded to the container registry for a title. */
    interface ListContainerImagesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListContainerImagesResponse {
        /** The list of container images. */
        Images?: string[],
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of the tags for a particular container image that exists in the container registry for a title. */
    interface ListContainerImageTagsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The container images we want to list tags for. */
        ImageName?: string,
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListContainerImageTagsResponse {
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
        /** The list of tags for a particular container image. */
        Tags?: string[],
    }

    /** Gets a list of all the matchmaking queue configurations for the title. */
    interface ListMatchmakingQueuesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface ListMatchmakingQueuesResult {
        /** The list of matchmaking queue configs for this title. */
        MatchMakingQueues?: MatchmakingQueueConfig[],
    }

    /**
     * If the caller is a title, the EntityKey in the request is required. If the caller is a player, then it is optional. If
     * it is provided it must match the caller's entity.
     */
    interface ListMatchmakingTicketsForPlayerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity key for which to find the ticket Ids. */
        Entity?: EntityKey,
        /** The name of the queue to find a match for. */
        QueueName: string,
    }

    interface ListMatchmakingTicketsForPlayerResult {
        /** The list of ticket Ids the user is a member of. */
        TicketIds: string[],
    }

    /** Returns a list of multiplayer servers for a build in a specific region. */
    interface ListMultiplayerServersRequest {
        /** The guid string build ID of the multiplayer servers to list. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The region the multiplayer servers to list. */
        Region: string,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListMultiplayerServersResponse {
        /** The list of multiplayer server summary details. */
        MultiplayerServerSummaries?: MultiplayerServerSummary[],
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of quality of service servers for party. */
    interface ListPartyQosServersRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface ListPartyQosServersResponse {
        /** The page size on the response. */
        PageSize: number,
        /** The list of QoS servers. */
        QosServers?: QosServer[],
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of quality of service servers for a title. */
    interface ListQosServersForTitleRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Indicates that the response should contain Qos servers for all regions, including those where there are no builds
         * deployed for the title.
         */
        IncludeAllRegions?: boolean,
        /** Indicates the Routing Preference used by the Qos servers. The default Routing Preference is Microsoft */
        RoutingPreference?: string,
    }

    interface ListQosServersForTitleResponse {
        /** The page size on the response. */
        PageSize: number,
        /** The list of QoS servers. */
        QosServers?: QosServer[],
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** Returns a list of multiplayer server game secrets for a title. */
    interface ListSecretSummariesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListSecretSummariesResponse {
        /** The page size on the response. */
        PageSize: number,
        /** The list of game secret. */
        SecretSummaries?: SecretSummary[],
        /** The skip token for the paged response. */
        SkipToken?: string,
    }

    /** List all server backfill ticket Ids the user is a member of. */
    interface ListServerBackfillTicketsForPlayerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity key for which to find the ticket Ids. */
        Entity: EntityKey,
        /** The name of the queue the tickets are in. */
        QueueName: string,
    }

    interface ListServerBackfillTicketsForPlayerResult {
        /** The list of backfill ticket Ids the user is a member of. */
        TicketIds: string[],
    }

    /** List all server quota change requests for a title. */
    interface ListTitleMultiplayerServersQuotaChangesRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface ListTitleMultiplayerServersQuotaChangesResponse {
        /** All change requests for this title. */
        Changes?: QuotaChange[],
    }

    /** Returns a list of virtual machines for a title. */
    interface ListVirtualMachineSummariesRequest {
        /** The guid string build ID of the virtual machines to list. */
        BuildId: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The page size for the request. */
        PageSize?: number,
        /** The region of the virtual machines to list. */
        Region: string,
        /** The skip token for the paged request. */
        SkipToken?: string,
    }

    interface ListVirtualMachineSummariesResponse {
        /** The page size on the response. */
        PageSize: number,
        /** The skip token for the paged response. */
        SkipToken?: string,
        /** The list of virtual machine summaries. */
        VirtualMachines?: VirtualMachineSummary[],
    }

    interface Lobby {
        /** A setting indicating who is allowed to join this lobby, as well as see it in queries. */
        AccessPolicy: AccessPolicy,
        /** A number that increments once for each request that modifies the lobby. */
        ChangeNumber: number,
        /**
         * A string used to join the lobby. This field is populated by the Lobby service. Invites are performed by communicating
         * this connectionString to other players.
         */
        ConnectionString: string,
        /** Lobby data. */
        LobbyData?: { [key: string]: string | null },
        /** Id to uniquely identify a lobby. */
        LobbyId: string,
        /** The maximum number of players allowed in the lobby. */
        MaxPlayers: number,
        /** Array of all lobby members. */
        Members?: Member[],
        /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
        MembershipLock: MembershipLock,
        /** The client or server entity which owns this lobby. */
        Owner?: EntityKey,
        /** A setting indicating the owner migration policy. If server owned, this field is not present. */
        OwnerMigrationPolicy?: OwnerMigrationPolicy,
        /**
         * An opaque string stored on a SubscribeToLobbyResource call, which indicates the connection an owner or member has with
         * PubSub.
         */
        PubSubConnectionHandle?: string,
        /**
         * A setting that controls lobby invites. When true only owners can invite new players, when false all members area allowed
         * to invite.
         */
        RestrictInvitesToLobbyOwner: boolean,
        /** Search data. */
        SearchData?: { [key: string]: string | null },
        /** Preview: Lobby joined server. This is not the server owner, rather the server that has joined a client owned lobby. */
        Server?: LobbyServer,
        /** A flag which determines if connections are used. Defaults to true. Only set on create. */
        UseConnections: boolean,
    }

    interface LobbyEmptyResult {
    }

    interface LobbyServer {
        /** Opaque string, stored on a Subscribe call, which indicates the connection a joined server has with PubSub. */
        PubSubConnectionHandle?: string,
        /** Key-value pairs specific to the joined server. */
        ServerData?: { [key: string]: string | null },
        /** The server entity key. */
        ServerEntity?: EntityKey,
    }

    interface LobbySummary {
        /**
         * A string used to join the lobby.This field is populated by the Lobby service.Invites are performed by communicating this
         * connectionString to other players.
         */
        ConnectionString: string,
        /** The current number of players in the lobby. */
        CurrentPlayers: number,
        /** Id to uniquely identify a lobby. */
        LobbyId: string,
        /** The maximum number of players allowed in the lobby. */
        MaxPlayers: number,
        /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
        MembershipLock?: MembershipLock,
        /** The client or server entity which owns this lobby. */
        Owner: EntityKey,
        /** Search data. */
        SearchData?: { [key: string]: string | null },
    }

    /** A user in a matchmaking ticket. */
    interface MatchmakingPlayer {
        /** The user's attributes custom to the title. */
        Attributes?: MatchmakingPlayerAttributes,
        /** The entity key of the matchmaking user. */
        Entity: EntityKey,
    }

    /** The matchmaking attributes for a user. */
    interface MatchmakingPlayerAttributes {
        /** A data object representing a user's attributes. */
        DataObject?: any,
        /** An escaped data object representing a user's attributes. */
        EscapedDataObject?: string,
    }

    /** A player in a created matchmaking match with a team assignment. */
    interface MatchmakingPlayerWithTeamAssignment {
        /**
         * The user's attributes custom to the title. These attributes will be null unless the request has ReturnMemberAttributes
         * flag set to true.
         */
        Attributes?: MatchmakingPlayerAttributes,
        /** The entity key of the matchmaking user. */
        Entity: EntityKey,
        /** The Id of the team the User is assigned to. */
        TeamId?: string,
    }

    interface MatchmakingQueueConfig {
        /** This is the buildAlias that will be used to allocate the multiplayer server for the match. */
        BuildAliasParams?: BuildAliasParams,
        /** This is the buildId that will be used to allocate the multiplayer server for the match. */
        BuildId?: string,
        /** List of difference rules used to find an optimal match. */
        DifferenceRules?: DifferenceRule[],
        /** List of match total rules used to find an optimal match. */
        MatchTotalRules?: MatchTotalRule[],
        /** Maximum number of players in a match. */
        MaxMatchSize: number,
        /** Maximum number of players in a ticket. Optional. */
        MaxTicketSize?: number,
        /** Minimum number of players in a match. */
        MinMatchSize: number,
        /** Unique identifier for a Queue. Chosen by the developer. */
        Name: string,
        /** Region selection rule used to find an optimal match. */
        RegionSelectionRule?: RegionSelectionRule,
        /** Boolean flag to enable server allocation for the queue. */
        ServerAllocationEnabled: boolean,
        /** List of set intersection rules used to find an optimal match. */
        SetIntersectionRules?: SetIntersectionRule[],
        /** Controls which statistics are visible to players. */
        StatisticsVisibilityToPlayers?: StatisticsVisibilityToPlayers,
        /** List of string equality rules used to find an optimal match. */
        StringEqualityRules?: StringEqualityRule[],
        /** List of team difference rules used to find an optimal match. */
        TeamDifferenceRules?: TeamDifferenceRule[],
        /** The team configuration for a match. This may be null if there are no teams. */
        Teams?: MatchmakingQueueTeam[],
        /** Team size balance rule used to find an optimal match. */
        TeamSizeBalanceRule?: TeamSizeBalanceRule,
        /** Team ticket size similarity rule used to find an optimal match. */
        TeamTicketSizeSimilarityRule?: TeamTicketSizeSimilarityRule,
    }

    interface MatchmakingQueueTeam {
        /** The maximum number of players required for the team. */
        MaxTeamSize: number,
        /** The minimum number of players required for the team. */
        MinTeamSize: number,
        /** A name to identify the team. This is case insensitive. */
        Name: string,
    }

    interface MatchTotalRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute,
        /** Collection of fields relating to expanding this rule at set intervals. */
        Expansion?: MatchTotalRuleExpansion,
        /** The maximum total value for a group. Must be &gt;= Min. */
        Max: number,
        /** The minimum total value for a group. Must be &gt;=2. */
        Min: number,
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
        /** The relative weight of this rule compared to others. */
        Weight: number,
    }

    interface MatchTotalRuleExpansion {
        /** Manually specify the values to use for each expansion interval. When this is set, Max is ignored. */
        MaxOverrides?: OverrideDouble[],
        /** Manually specify the values to use for each expansion interval. When this is set, Min is ignored. */
        MinOverrides?: OverrideDouble[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    interface Member {
        /** Key-value pairs specific to member. */
        MemberData?: { [key: string]: string | null },
        /** The member entity key. */
        MemberEntity?: EntityKey,
        /** Opaque string, stored on a Subscribe call, which indicates the connection an owner or member has with PubSub. */
        PubSubConnectionHandle?: string,
    }

    type MembershipLock = "Unlocked"

        | "Locked";

    interface MonitoringApplicationConfiguration {
        /** Asset which contains the monitoring application files and scripts. */
        AssetReference: AssetReference,
        /** Execution script name, this will be the main executable for the monitoring application. */
        ExecutionScriptName: string,
        /** Installation script name, this will be run before the ExecutionScript. */
        InstallationScriptName?: string,
        /** Timespan the monitoring application will be kept alive when running from the start of the VM */
        OnStartRuntimeInMinutes?: number,
    }

    interface MonitoringApplicationConfigurationParams {
        /** Asset which contains the monitoring application files and scripts. */
        AssetReference: AssetReferenceParams,
        /** Execution script name, this will be the main executable for the monitoring application. */
        ExecutionScriptName: string,
        /** Installation script name, this will be run before the ExecutionScript. */
        InstallationScriptName?: string,
        /** Timespan the monitoring application will be kept alive when running from the start of the VM */
        OnStartRuntimeInMinutes?: number,
    }

    interface MultiplayerServerSummary {
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[],
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string,
        /** The region the multiplayer server is located in. */
        Region?: string,
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string,
        /** The title generated guid string session ID of the multiplayer server. */
        SessionId?: string,
        /** The state of the multiplayer server. */
        State?: string,
        /** The virtual machine ID that the multiplayer server is located on. */
        VmId?: string,
    }

    type OsPlatform = "Windows"

        | "Linux";

    interface OverrideDouble {
        /** The custom expansion value. */
        Value: number,
    }

    interface OverrideUnsignedInt {
        /** The custom expansion value. */
        Value: number,
    }

    type OwnerMigrationPolicy = "None"

        | "Automatic"
        | "Manual"
        | "Server";

    interface PaginationRequest {
        /** Continuation token returned as a result in a previous FindLobbies call. Cannot be specified by clients. */
        ContinuationToken?: string,
        /** The number of lobbies that should be retrieved. Cannot be specified by servers, clients may specify any value up to 50 */
        PageSizeRequested?: number,
    }

    interface PaginationResponse {
        /** Continuation token returned by server call. Not returned for clients */
        ContinuationToken?: string,
        /** The number of lobbies that matched the search request. */
        TotalMatchedLobbyCount?: number,
    }

    interface PartyInvitationConfiguration {
        /**
         * The list of PlayFab EntityKeys that the invitation allows to authenticate into the network. If this list is empty, all
         * users are allowed to authenticate using the invitation's identifier. This list may contain no more than 1024 items.
         */
        EntityKeys?: EntityKey[],
        /** The invite identifier for this party. If this value is specified, it must be no longer than 127 characters. */
        Identifier?: string,
        /** Controls which participants can revoke this invite. */
        Revocability?: string,
    }

    type PartyInvitationRevocability = "Creator"

        | "Anyone";

    interface PartyNetworkConfiguration {
        /** Controls whether and how to support direct peer-to-peer connection attempts among devices in the network. */
        DirectPeerConnectivityOptions?: string,
        /** The maximum number of devices allowed to connect to the network. Must be between 1 and 128, inclusive. */
        MaxDevices: number,
        /** The maximum number of devices allowed per user. Must be greater than 0. */
        MaxDevicesPerUser: number,
        /** The maximum number of endpoints allowed per device. Must be between 0 and 32, inclusive. */
        MaxEndpointsPerDevice: number,
        /** The maximum number of unique users allowed in the network. Must be greater than 0. */
        MaxUsers: number,
        /** The maximum number of users allowed per device. Must be between 1 and 8, inclusive. */
        MaxUsersPerDevice: number,
        /**
         * An optionally-specified configuration for the initial invitation for this party. If not provided, default configuration
         * values will be used: a title-unique invitation identifier will be generated, the revocability will be Anyone, and the
         * EntityID list will be empty.
         */
        PartyInvitationConfiguration?: PartyInvitationConfiguration,
    }

    interface Port {
        /** The name for the port. */
        Name: string,
        /** The number for the port. */
        Num: number,
        /** The protocol for the port. */
        Protocol: ProtocolType,
    }

    type ProtocolType = "TCP"

        | "UDP";

    interface PublicIpAddress {
        /** FQDN of the public IP */
        FQDN: string,
        /** Server IP Address */
        IpAddress: string,
        /** Routing Type of the public IP. */
        RoutingType: string,
    }

    interface QosServer {
        /** The region the QoS server is located in. */
        Region?: string,
        /** The QoS server URL. */
        ServerUrl?: string,
    }

    interface QueueRuleAttribute {
        /** Specifies which attribute in a ticket to use. */
        Path: string,
        /** Specifies which source the attribute comes from. */
        Source: AttributeSource,
    }

    interface QuotaChange {
        /** A brief description of the requested changes. */
        ChangeDescription?: string,
        /** Requested changes to make to the titles cores quota. */
        Changes?: CoreCapacityChange[],
        /** Whether or not this request is pending a review. */
        IsPendingReview: boolean,
        /** Additional information about this request that our team can use to better understand the requirements. */
        Notes?: string,
        /** Id of the change request. */
        RequestId?: string,
        /** Comments by our team when a request is reviewed. */
        ReviewComments?: string,
        /** Whether or not this request was approved. */
        WasApproved: boolean,
    }

    interface RegionSelectionRule {
        /**
         * Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. When this is set,
         * MaxLatency is ignored.
         */
        CustomExpansion?: CustomRegionSelectionRuleExpansion,
        /** Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. */
        LinearExpansion?: LinearRegionSelectionRuleExpansion,
        /** Specifies the maximum latency that is allowed between the client and the selected server. The value is in milliseconds. */
        MaxLatency: number,
        /** Friendly name chosen by developer. */
        Name: string,
        /** Specifies which attribute in a ticket to use. */
        Path: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
        /** The relative weight of this rule compared to others. */
        Weight: number,
    }

    /**
     * Deletes the configuration for a queue. This will permanently delete the configuration and players will no longer be able
     * to match in the queue. All outstanding matchmaking tickets will be cancelled.
     */
    interface RemoveMatchmakingQueueRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The Id of the matchmaking queue to remove. */
        QueueName?: string,
    }

    interface RemoveMatchmakingQueueResult {
    }

    /**
     * Request to remove a member from a lobby. Owners may remove other members from a lobby. Members cannot remove themselves
     * (use LeaveLobby instead).
     */
    interface RemoveMemberFromLobbyRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The id of the lobby. */
        LobbyId?: string,
        /** The member entity to be removed from the lobby. */
        MemberEntity?: EntityKey,
        /** If true, removed member can never rejoin this lobby. */
        PreventRejoin: boolean,
    }

    /** Requests a multiplayer server session from a particular build in any of the given preferred regions. */
    interface RequestMultiplayerServerRequest {
        /** The identifiers of the build alias to use for the request. */
        BuildAliasParams?: BuildAliasParams,
        /** The guid string build ID of the multiplayer server to request. */
        BuildId?: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * Initial list of players (potentially matchmade) allowed to connect to the game. This list is passed to the game server
         * when requested (via GSDK) and can be used to validate players connecting to it.
         */
        InitialPlayers?: string[],
        /**
         * The preferred regions to request a multiplayer server from. The Multiplayer Service will iterate through the regions in
         * the specified order and allocate a server from the first one that has servers available.
         */
        PreferredRegions: string[],
        /**
         * Data encoded as a string that is passed to the game server when requested. This can be used to communicate information
         * such as game mode or map through the request flow. Maximum size is 8KB
         */
        SessionCookie?: string,
        /** A guid string session ID created track the multiplayer server session over its life. */
        SessionId: string,
    }

    interface RequestMultiplayerServerResponse {
        /** The identity of the build in which the server was allocated. */
        BuildId?: string,
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[],
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        FQDN?: string,
        /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string,
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string,
        /** The ports the multiplayer server uses. */
        Ports?: Port[],
        /** The list of public Ipv4 addresses associated with the server. */
        PublicIPV4Addresses?: PublicIpAddress[],
        /** The region the multiplayer server is located in. */
        Region?: string,
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string,
        /** The guid string session ID of the multiplayer server. */
        SessionId?: string,
        /** The state of the multiplayer server. */
        State?: string,
        /** The virtual machine ID that the multiplayer server is located on. */
        VmId?: string,
    }

    /**
     * Requests a party session from a particular set of builds if build alias params is provided, in any of the given
     * preferred regions.
     */
    interface RequestPartyServiceRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The network configuration for this request. */
        NetworkConfiguration: PartyNetworkConfiguration,
        /** A guid string party ID created track the party session over its life. */
        PartyId?: string,
        /** A player entity Id on behalf of whom the request is being made. */
        PlayFabId?: string,
        /**
         * The preferred regions to request a party session from. The party service will iterate through the regions in the
         * specified order and allocate a party session from the first one that is available.
         */
        PreferredRegions: string[],
    }

    interface RequestPartyServiceResponse {
        /**
         * The invitation identifier supplied in the PartyInvitationConfiguration, or the PlayFab-generated guid if none was
         * supplied.
         */
        InvitationId?: string,
        /** The guid string party ID of the party session. */
        PartyId?: string,
        /** A base-64 encoded string containing the serialized network descriptor for this party. */
        SerializedNetworkDescriptor?: string,
    }

    /**
     * Gets new credentials to the container registry where game developers can upload custom container images to before
     * creating a new build.
     */
    interface RolloverContainerRegistryCredentialsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    interface RolloverContainerRegistryCredentialsResponse {
        /** The url of the container registry. */
        DnsName?: string,
        /** The password for accessing the container registry. */
        Password?: string,
        /** The username for accessing the container registry. */
        Username?: string,
    }

    type RoutingType = "Microsoft"

        | "Internet";

    interface Schedule {
        /** A short description about this schedule. For example, "Game launch on July 15th". */
        Description?: string,
        /**
         * The date and time in UTC at which the schedule ends. If IsRecurringWeekly is true, this schedule will keep renewing for
         * future weeks until disabled or removed.
         */
        EndTime: string,
        /** Disables the schedule. */
        IsDisabled: boolean,
        /** If true, the StartTime and EndTime will get renewed every week. */
        IsRecurringWeekly: boolean,
        /** The date and time in UTC at which the schedule starts. */
        StartTime: string,
        /** The standby target to maintain for the duration of the schedule. */
        TargetStandby: number,
    }

    interface ScheduledStandbySettings {
        /** When true, scheduled standby will be enabled */
        IsEnabled: boolean,
        /** A list of non-overlapping schedules */
        ScheduleList?: Schedule[],
    }

    interface Secret {
        /** Optional secret expiration date. */
        ExpirationDate?: string,
        /** A name for the secret. This is used to reference secrets in build configurations. */
        Name: string,
        /** Secret value. */
        Value: string,
    }

    interface SecretSummary {
        /** Optional secret expiration date. */
        ExpirationDate?: string,
        /** The name of the secret. */
        Name?: string,
        /** The secret version auto-generated after upload. */
        Version?: string,
    }

    interface ServerDetails {
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        Fqdn?: string,
        /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string,
        /** The ports the multiplayer server uses. */
        Ports?: Port[],
        /** The server's region. */
        Region?: string,
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string,
    }

    interface ServerResourceConstraintParams {
        /** The maximum number of cores that each server is allowed to use. */
        CpuLimit: number,
        /**
         * The maximum number of GiB of memory that each server is allowed to use. WARNING: After exceeding this limit, the server
         * will be killed
         */
        MemoryLimitGB: number,
    }

    type ServerType = "Container"

        | "Process";

    interface SetIntersectionRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute,
        /**
         * Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity
         * profile.
         */
        AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior,
        /**
         * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
         * is set, MinIntersectionSize is ignored.
         */
        CustomExpansion?: CustomSetIntersectionRuleExpansion,
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is UseDefault). Values must be unique.
         */
        DefaultAttributeValue?: string[],
        /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
        LinearExpansion?: LinearSetIntersectionRuleExpansion,
        /** The minimum number of values that must match between sets. */
        MinIntersectionSize: number,
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
        /** The relative weight of this rule compared to others. */
        Weight: number,
    }

    /**
     * Use this API to create or update matchmaking queue configurations. The queue configuration defines the matchmaking
     * rules. The matchmaking service will match tickets together according to the configured rules. Queue resources are not
     * spun up by calling this API. Queues are created when the first ticket is submitted.
     */
    interface SetMatchmakingQueueRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The matchmaking queue config. */
        MatchmakingQueue: MatchmakingQueueConfig,
    }

    interface SetMatchmakingQueueResult {
    }

    /**
     * Executes the shutdown callback from the GSDK and terminates the multiplayer server session. The callback in the GSDK
     * will allow for graceful shutdown with a 15 minute timeoutIf graceful shutdown has not been completed before 15 minutes
     * have elapsed, the multiplayer server session will be forcefully terminated on it's own.
     */
    interface ShutdownMultiplayerServerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** A guid string session ID of the multiplayer server to shut down. */
        SessionId: string,
    }

    interface Statistics {
        /** The average. */
        Average: number,
        /** The 50th percentile. */
        Percentile50: number,
        /** The 90th percentile. */
        Percentile90: number,
        /** The 99th percentile. */
        Percentile99: number,
    }

    interface StatisticsVisibilityToPlayers {
        /** Whether to allow players to view the current number of players in the matchmaking queue. */
        ShowNumberOfPlayersMatching: boolean,
        /** Whether to allow players to view statistics representing the time it takes for tickets to find a match. */
        ShowTimeToMatch: boolean,
    }

    interface StringEqualityRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute,
        /**
         * Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity
         * profile.
         */
        AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior,
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is false).
         */
        DefaultAttributeValue?: string,
        /**
         * Collection of fields relating to expanding this rule at set intervals. For StringEqualityRules, this is limited to
         * turning the rule off or on during different intervals.
         */
        Expansion?: StringEqualityRuleExpansion,
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
        /** The relative weight of this rule compared to others. */
        Weight: number,
    }

    interface StringEqualityRuleExpansion {
        /** List of bools specifying whether the rule is applied during this expansion. */
        EnabledOverrides: boolean[],
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number,
    }

    /** Request to subscribe to lobby resource notifications. */
    interface SubscribeToLobbyResourceRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity performing the subscription. */
        EntityKey: EntityKey,
        /** Opaque string, given to a client upon creating a connection with PubSub. */
        PubSubConnectionHandle: string,
        /**
         * The name of the resource to subscribe to. For LobbyChange subscriptions this is the lobbyId. For LobbyInvite
         * subscriptions this should always be "@me".
         */
        ResourceId: string,
        /** Version number for the subscription of this resource. */
        SubscriptionVersion: number,
        /**
         * Subscription type. "LobbyChange" subscriptions allow a member or owner to receive notifications of lobby data, member or
         * owner changes. "LobbyInvite" subscriptions allow a player to receive invites to lobbies. A player does not need to be a
         * member of a lobby to receive lobby invites.
         */
        Type: SubscriptionType,
    }

    interface SubscribeToLobbyResourceResult {
        /** Topic will be returned in all notifications that are the result of this subscription. */
        Topic: string,
    }

    /** Subscribe to match resource notifications. Match subscriptions have two types; MatchInvite and MatchTicketStatusChange */
    interface SubscribeToMatchResourceRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity performing the subscription. The entity must be authorized to use this connectionHandle. */
        EntityKey: EntityKey,
        /**
         * Opaque string, given to a client upon creating a connection with PubSub. Notifications will be sent to the connection
         * associated with this handle.
         */
        PubSubConnectionHandle: string,
        /**
         * The name of the resource to subscribe to. It follows the format {queueName}|{ticketId} for MatchTicketStatusChange. For
         * MatchInvite, ResourceId is @me.
         */
        ResourceId: string,
        /** Version number for the subscription of this resource. Current supported version must be 1. */
        SubscriptionVersion: number,
        /**
         * Subscription type. MatchInvite subscriptions are per-player. MatchTicketStatusChange subscriptions are per-ticket.
         * Subscribe calls are idempotent. Subscribing on the same resource for the same connection results in success.
         */
        Type: string,
    }

    interface SubscribeToMatchResourceResult {
        /** Matchmaking resource */
        Topic: string,
    }

    type SubscriptionType = "LobbyChange"

        | "LobbyInvite";

    interface TeamDifferenceRule {
        /** Description of the attribute used by this rule to match teams. */
        Attribute: QueueRuleAttribute,
        /**
         * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
         * is set, Difference is ignored.
         */
        CustomExpansion?: CustomTeamDifferenceRuleExpansion,
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is false).
         */
        DefaultAttributeValue: number,
        /** The allowed difference between any two teams at the start of matchmaking. */
        Difference: number,
        /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
        LinearExpansion?: LinearTeamDifferenceRuleExpansion,
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
    }

    interface TeamSizeBalanceRule {
        /**
         * Controls how the Difference parameter expands over time. Only one expansion can be set per rule. When this is set,
         * Difference is ignored.
         */
        CustomExpansion?: CustomTeamSizeBalanceRuleExpansion,
        /** The allowed difference in team size between any two teams. */
        Difference: number,
        /** Controls how the Difference parameter expands over time. Only one expansion can be set per rule. */
        LinearExpansion?: LinearTeamSizeBalanceRuleExpansion,
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
    }

    interface TeamTicketSizeSimilarityRule {
        /** Friendly name chosen by developer. */
        Name: string,
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number,
    }

    type TitleMultiplayerServerEnabledStatus = "Initializing"

        | "Enabled"
        | "Disabled";

    interface TitleMultiplayerServersQuotas {
        /** The core capacity for the various regions and VM Family */
        CoreCapacities?: CoreCapacity[],
    }

    /** Request to unsubscribe from lobby notifications. */
    interface UnsubscribeFromLobbyResourceRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity which performed the subscription. */
        EntityKey: EntityKey,
        /** Opaque string, given to a client upon creating a connection with PubSub. */
        PubSubConnectionHandle: string,
        /** The name of the resource to unsubscribe from. */
        ResourceId: string,
        /** Version number passed for the subscription of this resource. */
        SubscriptionVersion: number,
        /** Subscription type. */
        Type: SubscriptionType,
    }

    /**
     * Unsubscribe from a Match resource's notifications. For MatchInvite, players are expected to unsubscribe once they can no
     * longer accept invites. For MatchTicketStatusChange, players are expected to unsusbcribe once the ticket has reached a
     * canceled or matched state.
     */
    interface UnsubscribeFromMatchResourceRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The entity performing the unsubscription. The entity must be authorized to use this connectionHandle. */
        EntityKey: EntityKey,
        /** Opaque string, given to a client upon creating a connection with PubSub. */
        PubSubConnectionHandle: string,
        /**
         * The name of the resource to unsubscribe from. It follows the format {queueName}|{ticketId} for MatchTicketStatusChange.
         * For MatchInvite, ResourceId is @me.
         */
        ResourceId: string,
        /** Version number for the unsubscription from this resource. */
        SubscriptionVersion: number,
        /** Type of the subscription to be canceled. */
        Type: string,
    }

    interface UnsubscribeFromMatchResourceResult {
    }

    /**
     * Removes the specified tag from the image. After this operation, a 'docker pull' will fail for the specified image and
     * tag combination. Morever, ListContainerImageTags will not return the specified tag.
     */
    interface UntagContainerImageRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The container image which tag we want to remove. */
        ImageName?: string,
        /** The tag we want to remove. */
        Tag?: string,
    }

    /** Creates a multiplayer server build alias and returns the created alias. */
    interface UpdateBuildAliasRequest {
        /** The guid string alias Id of the alias to be updated. */
        AliasId: string,
        /** The alias name. */
        AliasName?: string,
        /** Array of build selection criteria. */
        BuildSelectionCriteria?: BuildSelectionCriterion[],
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Updates a multiplayer server build's name. */
    interface UpdateBuildNameRequest {
        /** The guid string ID of the build we want to update the name of. */
        BuildId: string,
        /** The build name. */
        BuildName: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Updates a multiplayer server build's region. */
    interface UpdateBuildRegionRequest {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string,
        /** The updated region configuration that should be applied to the specified build. */
        BuildRegion: BuildRegionParams,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /** Updates a multiplayer server build's regions. */
    interface UpdateBuildRegionsRequest {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string,
        /** The updated region configuration that should be applied to the specified build. */
        BuildRegions: BuildRegionParams[],
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
    }

    /**
     * Preview: Request to update the serverData and serverEntity in case of migration. Only a game_server entity can update
     * this information and this is restricted to client owned lobbies which are using connections.
     */
    interface UpdateLobbyAsServerRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** The id of the lobby. */
        LobbyId: string,
        /**
         * The private key-value pairs which are visible to all entities in the lobby and modifiable by the joined server.
         * Optional. Sets or updates key-value pairs on the lobby. Only the current lobby lobby server can set serverData. Keys may
         * be an arbitrary string of at most 30 characters. The total size of all serverData values may not exceed 4096 bytes.
         * Values are not individually limited. There can be up to 30 key-value pairs stored here. Keys are case sensitive.
         */
        ServerData?: { [key: string]: string | null },
        /**
         * The keys to delete from the lobby serverData. Optional. Optional. Deletes key-value pairs on the lobby. Only the current
         * joined lobby server can delete serverData. All the specified keys will be removed from the serverData. Keys that do not
         * exist in the lobby are a no-op. If the key to delete exists in the serverData (same request) it will result in a bad
         * request.
         */
        ServerDataToDelete?: string[],
        /**
         * The lobby server. Optional. Set a different server as the joined server of the lobby (there can only be 1 joined
         * server). When changing the server the previous server will automatically be unsubscribed.
         */
        ServerEntity?: EntityKey,
    }

    /** Request to update a lobby. */
    interface UpdateLobbyRequest {
        /**
         * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be 'Public', 'Friends' or
         * 'Private'. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
         * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
         * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
         * join. Defaults to 'Public' on creation. Can only be changed by the lobby owner.
         */
        AccessPolicy?: AccessPolicy,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /**
         * The private key-value pairs which are visible to all entities in the lobby. Optional. Sets or updates key-value pairs on
         * the lobby. Only the current lobby owner can set lobby data. Keys may be an arbitrary string of at most 30 characters.
         * The total size of all lobbyData values may not exceed 4096 bytes. Values are not individually limited. There can be up
         * to 30 key-value pairs stored here. Keys are case sensitive.
         */
        LobbyData?: { [key: string]: string | null },
        /** The keys to delete from the lobby LobbyData. Optional. Behaves similar to searchDataToDelete, but applies to lobbyData. */
        LobbyDataToDelete?: string[],
        /** The id of the lobby. */
        LobbyId?: string,
        /**
         * The maximum number of players allowed in the lobby. Updates the maximum allowed number of players in the lobby. Only the
         * current lobby owner can set this. If set, the value must be greater than or equal to the number of members currently in
         * the lobby.
         */
        MaxPlayers?: number,
        /**
         * The private key-value pairs used by the member to communicate information to other members and the owner. Optional. Sets
         * or updates new key-value pairs on the caller's member data. New keys will be added with their values and existing keys
         * will be updated with the new values. Visible to all entities in the lobby. At most 30 key-value pairs may be stored
         * here, keys are limited to 30 characters and values to 1000. The total size of all memberData values may not exceed 4096
         * bytes. Keys are case sensitive. Servers cannot specifiy this.
         */
        MemberData?: { [key: string]: string | null },
        /**
         * The keys to delete from the lobby MemberData. Optional. Deletes key-value pairs on the caller's member data. All the
         * specified keys will be removed from the caller's member data. Keys that do not exist are a no-op. If the key to delete
         * exists in the memberData (same request) it will result in a bad request. Servers cannot specifiy this.
         */
        MemberDataToDelete?: string[],
        /** The member entity whose data is being modified. Servers cannot specify this. */
        MemberEntity?: EntityKey,
        /**
         * A setting indicating whether the lobby is locked. May be 'Unlocked' or 'Locked'. When Locked new members are not allowed
         * to join. Defaults to 'Unlocked' on creation. Can only be changed by the lobby owner.
         */
        MembershipLock?: MembershipLock,
        /**
         * The lobby owner. Optional. Set to transfer ownership of the lobby. If client - owned and 'Automatic' - The Lobby service
         * will automatically assign another connected owner when the current owner leaves or disconnects. useConnections must be
         * true. If client - owned and 'Manual' - Ownership is protected as long as the current owner is connected. If the current
         * owner leaves or disconnects any member may set themselves as the current owner. The useConnections property must be
         * true. If client-owned and 'None' - Any member can set ownership. The useConnections property can be either true or
         * false. For all client-owned lobbies when the owner leaves and a new owner can not be automatically selected - The owner
         * field is set to null. For all client-owned lobbies when the owner disconnects and a new owner can not be automatically
         * selected - The owner field remains unchanged and the current owner retains all owner abilities for the lobby. If
         * server-owned (must be 'Server') - Any server can set ownership. The useConnections property must be true.
         */
        Owner?: EntityKey,
        /**
         * A setting that controls whether only the lobby owner can send invites to join the lobby. When true, only the lobby owner
         * can send invites. When false or not specified, any member can send invites. Will not modify current configuration if not
         * specified. Restricted to client owned lobbies.
         */
        RestrictInvitesToLobbyOwner?: boolean,
        /**
         * The public key-value pairs which allow queries to differentiate between lobbies. Optional. Sets or updates key-value
         * pairs on the lobby for use with queries. Only the current lobby owner can set search data. New keys will be added with
         * their values and existing keys will be updated with the new values. There can be up to 30 key-value pairs stored here.
         * Keys are of the format string_key1, string_key2... string_key30 for string values, or number_key1, number_key2, ...
         * number_key30 for numeric values. Numeric values are floats. Values can be at most 256 characters long. The total size of
         * all searchData values may not exceed 1024 bytes.Keys are case sensitive.
         */
        SearchData?: { [key: string]: string | null },
        /**
         * The keys to delete from the lobby SearchData. Optional. Deletes key-value pairs on the lobby. Only the current lobby
         * owner can delete search data. All the specified keys will be removed from the search data. Keys that do not exist in the
         * lobby are a no-op.If the key to delete exists in the searchData (same request) it will result in a bad request.
         */
        SearchDataToDelete?: string[],
    }

    /** Uploads a multiplayer server game certificate. */
    interface UploadCertificateRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Forces the certificate renewal if the certificate already exists. Default is false */
        ForceUpdate?: boolean,
        /** The game certificate to upload. */
        GameCertificate: Certificate,
    }

    /** Uploads a multiplayer server game secret. */
    interface UploadSecretRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Forces the secret renewal if the secret already exists. Default is false */
        ForceUpdate?: boolean,
        /** The game secret to add. */
        GameSecret: Secret,
    }

    interface VirtualMachineSummary {
        /** The virtual machine health status. */
        HealthStatus?: string,
        /** The virtual machine state. */
        State?: string,
        /** The virtual machine ID. */
        VmId?: string,
    }

    interface VmStartupScriptConfiguration {
        /** Optional port requests (name/protocol) that will be used by the VmStartupScript. Max of 5 requests. */
        PortRequests?: VmStartupScriptPortRequest[],
        /** Asset which contains the VmStartupScript script and any other required files. */
        VmStartupScriptAssetReference: AssetReference,
    }

    interface VmStartupScriptParams {
        /** Optional port requests (name/protocol) that will be used by the VmStartupScript. Max of 5 requests. */
        PortRequests?: VmStartupScriptPortRequestParams[],
        /** Asset which contains the VmStartupScript script and any other required files. */
        VmStartupScriptAssetReference: AssetReferenceParams,
    }

    interface VmStartupScriptPortRequest {
        /** The name for the port. */
        Name: string,
        /** The protocol for the port. */
        Protocol: ProtocolType,
    }

    interface VmStartupScriptPortRequestParams {
        /** The name for the port. */
        Name: string,
        /** The protocol for the port. */
        Protocol: ProtocolType,
    }

    interface WindowsCrashDumpConfiguration {
        /** See https://docs.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps for valid values. */
        CustomDumpFlags?: number,
        /** See https://docs.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps for valid values. */
        DumpType?: number,
        /** Designates whether automatic crash dump capturing will be enabled for this Build. */
        IsEnabled: boolean,
    }

}

/** Multiplayer interface methods (includes Matchmaking, MultiplayerServer, Party, and Lobby) */
interface IPlayFabMultiplayerAPI {
    /**
     * Cancel all active tickets the player is a member of in a given queue.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallmatchmakingticketsforplayer
     */
    CancelAllMatchmakingTicketsForPlayer(request: PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerRequest): PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerResult;

    /**
     * Cancel all active backfill tickets the player is a member of in a given queue.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallserverbackfillticketsforplayer
     */
    CancelAllServerBackfillTicketsForPlayer(request: PlayFabMultiplayerModels.CancelAllServerBackfillTicketsForPlayerRequest): PlayFabMultiplayerModels.CancelAllServerBackfillTicketsForPlayerResult;

    /**
     * Cancel a matchmaking ticket.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelmatchmakingticket
     */
    CancelMatchmakingTicket(request: PlayFabMultiplayerModels.CancelMatchmakingTicketRequest): PlayFabMultiplayerModels.CancelMatchmakingTicketResult;

    /**
     * Cancel a server backfill ticket.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelserverbackfillticket
     */
    CancelServerBackfillTicket(request: PlayFabMultiplayerModels.CancelServerBackfillTicketRequest): PlayFabMultiplayerModels.CancelServerBackfillTicketResult;

    /**
     * Creates a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildalias
     */
    CreateBuildAlias(request: PlayFabMultiplayerModels.CreateBuildAliasRequest): PlayFabMultiplayerModels.BuildAliasDetailsResponse;

    /**
     * Creates a multiplayer server build with a custom container.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithcustomcontainer
     */
    CreateBuildWithCustomContainer(request: PlayFabMultiplayerModels.CreateBuildWithCustomContainerRequest): PlayFabMultiplayerModels.CreateBuildWithCustomContainerResponse;

    /**
     * Creates a multiplayer server build with a managed container.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithmanagedcontainer
     */
    CreateBuildWithManagedContainer(request: PlayFabMultiplayerModels.CreateBuildWithManagedContainerRequest): PlayFabMultiplayerModels.CreateBuildWithManagedContainerResponse;

    /**
     * Creates a multiplayer server build with the server running as a process.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithprocessbasedserver
     */
    CreateBuildWithProcessBasedServer(request: PlayFabMultiplayerModels.CreateBuildWithProcessBasedServerRequest): PlayFabMultiplayerModels.CreateBuildWithProcessBasedServerResponse;

    /**
     * Create a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/createlobby
     */
    CreateLobby(request: PlayFabMultiplayerModels.CreateLobbyRequest): PlayFabMultiplayerModels.CreateLobbyResult;

    /**
     * Create a matchmaking ticket as a client.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/creatematchmakingticket
     */
    CreateMatchmakingTicket(request: PlayFabMultiplayerModels.CreateMatchmakingTicketRequest): PlayFabMultiplayerModels.CreateMatchmakingTicketResult;

    /**
     * Creates a remote user to log on to a VM for a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createremoteuser
     */
    CreateRemoteUser(request: PlayFabMultiplayerModels.CreateRemoteUserRequest): PlayFabMultiplayerModels.CreateRemoteUserResponse;

    /**
     * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service
     * automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with
     * other backfill tickets.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createserverbackfillticket
     */
    CreateServerBackfillTicket(request: PlayFabMultiplayerModels.CreateServerBackfillTicketRequest): PlayFabMultiplayerModels.CreateServerBackfillTicketResult;

    /**
     * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
     * matchmaking tickets.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createservermatchmakingticket
     */
    CreateServerMatchmakingTicket(request: PlayFabMultiplayerModels.CreateServerMatchmakingTicketRequest): PlayFabMultiplayerModels.CreateMatchmakingTicketResult;

    /**
     * Creates a request to change a title's multiplayer server quotas.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createtitlemultiplayerserversquotachange
     */
    CreateTitleMultiplayerServersQuotaChange(request: PlayFabMultiplayerModels.CreateTitleMultiplayerServersQuotaChangeRequest): PlayFabMultiplayerModels.CreateTitleMultiplayerServersQuotaChangeResponse;

    /**
     * Deletes a multiplayer server game asset for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteasset
     */
    DeleteAsset(request: PlayFabMultiplayerModels.DeleteAssetRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Deletes a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuild
     */
    DeleteBuild(request: PlayFabMultiplayerModels.DeleteBuildRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Deletes a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildalias
     */
    DeleteBuildAlias(request: PlayFabMultiplayerModels.DeleteBuildAliasRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Removes a multiplayer server build's region.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildregion
     */
    DeleteBuildRegion(request: PlayFabMultiplayerModels.DeleteBuildRegionRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Deletes a multiplayer server game certificate.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecertificate
     */
    DeleteCertificate(request: PlayFabMultiplayerModels.DeleteCertificateRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Deletes a container image repository.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecontainerimagerepository
     */
    DeleteContainerImageRepository(request: PlayFabMultiplayerModels.DeleteContainerImageRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Delete a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/deletelobby
     */
    DeleteLobby(request: PlayFabMultiplayerModels.DeleteLobbyRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Deletes a remote user to log on to a VM for a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteremoteuser
     */
    DeleteRemoteUser(request: PlayFabMultiplayerModels.DeleteRemoteUserRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Deletes a multiplayer server game secret.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletesecret
     */
    DeleteSecret(request: PlayFabMultiplayerModels.DeleteSecretRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Enables the multiplayer server feature for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/enablemultiplayerserversfortitle
     */
    EnableMultiplayerServersForTitle(request: PlayFabMultiplayerModels.EnableMultiplayerServersForTitleRequest): PlayFabMultiplayerModels.EnableMultiplayerServersForTitleResponse;

    /**
     * Find lobbies which match certain criteria, and which friends are in.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findfriendlobbies
     */
    FindFriendLobbies(request: PlayFabMultiplayerModels.FindFriendLobbiesRequest): PlayFabMultiplayerModels.FindFriendLobbiesResult;

    /**
     * Find all the lobbies that match certain criteria.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findlobbies
     */
    FindLobbies(request: PlayFabMultiplayerModels.FindLobbiesRequest): PlayFabMultiplayerModels.FindLobbiesResult;

    /**
     * Gets a URL that can be used to download the specified asset. A sample pre-authenticated url -
     * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetdownloadurl
     */
    GetAssetDownloadUrl(request: PlayFabMultiplayerModels.GetAssetDownloadUrlRequest): PlayFabMultiplayerModels.GetAssetDownloadUrlResponse;

    /**
     * Gets the URL to upload assets to. A sample pre-authenticated url -
     * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetuploadurl
     */
    GetAssetUploadUrl(request: PlayFabMultiplayerModels.GetAssetUploadUrlRequest): PlayFabMultiplayerModels.GetAssetUploadUrlResponse;

    /**
     * Gets a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuild
     */
    GetBuild(request: PlayFabMultiplayerModels.GetBuildRequest): PlayFabMultiplayerModels.GetBuildResponse;

    /**
     * Gets a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuildalias
     */
    GetBuildAlias(request: PlayFabMultiplayerModels.GetBuildAliasRequest): PlayFabMultiplayerModels.BuildAliasDetailsResponse;

    /**
     * Gets the credentials to the container registry.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getcontainerregistrycredentials
     */
    GetContainerRegistryCredentials(request: PlayFabMultiplayerModels.GetContainerRegistryCredentialsRequest): PlayFabMultiplayerModels.GetContainerRegistryCredentialsResponse;

    /**
     * Get a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/getlobby
     */
    GetLobby(request: PlayFabMultiplayerModels.GetLobbyRequest): PlayFabMultiplayerModels.GetLobbyResult;

    /**
     * Get a match.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatch
     */
    GetMatch(request: PlayFabMultiplayerModels.GetMatchRequest): PlayFabMultiplayerModels.GetMatchResult;

    /**
     * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/getmatchmakingqueue
     */
    GetMatchmakingQueue(request: PlayFabMultiplayerModels.GetMatchmakingQueueRequest): PlayFabMultiplayerModels.GetMatchmakingQueueResult;

    /**
     * Get a matchmaking ticket by ticket Id.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatchmakingticket
     */
    GetMatchmakingTicket(request: PlayFabMultiplayerModels.GetMatchmakingTicketRequest): PlayFabMultiplayerModels.GetMatchmakingTicketResult;

    /**
     * Gets multiplayer server session details for a build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverdetails
     */
    GetMultiplayerServerDetails(request: PlayFabMultiplayerModels.GetMultiplayerServerDetailsRequest): PlayFabMultiplayerModels.GetMultiplayerServerDetailsResponse;

    /**
     * Gets multiplayer server logs after a server has terminated.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverlogs
     */
    GetMultiplayerServerLogs(request: PlayFabMultiplayerModels.GetMultiplayerServerLogsRequest): PlayFabMultiplayerModels.GetMultiplayerServerLogsResponse;

    /**
     * Gets multiplayer server logs after a server has terminated.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayersessionlogsbysessionid
     */
    GetMultiplayerSessionLogsBySessionId(request: PlayFabMultiplayerModels.GetMultiplayerSessionLogsBySessionIdRequest): PlayFabMultiplayerModels.GetMultiplayerServerLogsResponse;

    /**
     * Get the statistics for a queue.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getqueuestatistics
     */
    GetQueueStatistics(request: PlayFabMultiplayerModels.GetQueueStatisticsRequest): PlayFabMultiplayerModels.GetQueueStatisticsResult;

    /**
     * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getremoteloginendpoint
     */
    GetRemoteLoginEndpoint(request: PlayFabMultiplayerModels.GetRemoteLoginEndpointRequest): PlayFabMultiplayerModels.GetRemoteLoginEndpointResponse;

    /**
     * Get a matchmaking backfill ticket by ticket Id.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getserverbackfillticket
     */
    GetServerBackfillTicket(request: PlayFabMultiplayerModels.GetServerBackfillTicketRequest): PlayFabMultiplayerModels.GetServerBackfillTicketResult;

    /**
     * Gets the status of whether a title is enabled for the multiplayer server feature.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitleenabledformultiplayerserversstatus
     */
    GetTitleEnabledForMultiplayerServersStatus(request: PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusRequest): PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusResponse;

    /**
     * Gets a title's server quota change request.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotachange
     */
    GetTitleMultiplayerServersQuotaChange(request: PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotaChangeRequest): PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotaChangeResponse;

    /**
     * Gets the quotas for a title in relation to multiplayer servers.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotas
     */
    GetTitleMultiplayerServersQuotas(request: PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotasRequest): PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotasResponse;

    /**
     * Send a notification to invite a player to a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/invitetolobby
     */
    InviteToLobby(request: PlayFabMultiplayerModels.InviteToLobbyRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Join an Arranged lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinarrangedlobby
     */
    JoinArrangedLobby(request: PlayFabMultiplayerModels.JoinArrangedLobbyRequest): PlayFabMultiplayerModels.JoinLobbyResult;

    /**
     * Join a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobby
     */
    JoinLobby(request: PlayFabMultiplayerModels.JoinLobbyRequest): PlayFabMultiplayerModels.JoinLobbyResult;

    /**
     * Preview: Join a lobby as a server entity. This is restricted to client lobbies which are using connections.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobbyasserver
     */
    JoinLobbyAsServer(request: PlayFabMultiplayerModels.JoinLobbyAsServerRequest): PlayFabMultiplayerModels.JoinLobbyAsServerResult;

    /**
     * Join a matchmaking ticket.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/joinmatchmakingticket
     */
    JoinMatchmakingTicket(request: PlayFabMultiplayerModels.JoinMatchmakingTicketRequest): PlayFabMultiplayerModels.JoinMatchmakingTicketResult;

    /**
     * Leave a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobby
     */
    LeaveLobby(request: PlayFabMultiplayerModels.LeaveLobbyRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Preview: Request for server to leave a lobby. This is restricted to client owned lobbies which are using connections.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobbyasserver
     */
    LeaveLobbyAsServer(request: PlayFabMultiplayerModels.LeaveLobbyAsServerRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Lists archived multiplayer server sessions for a build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listarchivedmultiplayerservers
     */
    ListArchivedMultiplayerServers(request: PlayFabMultiplayerModels.ListMultiplayerServersRequest): PlayFabMultiplayerModels.ListMultiplayerServersResponse;

    /**
     * Lists multiplayer server game assets for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listassetsummaries
     */
    ListAssetSummaries(request: PlayFabMultiplayerModels.ListAssetSummariesRequest): PlayFabMultiplayerModels.ListAssetSummariesResponse;

    /**
     * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows
     * game client to request list of builds with player entity token.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildaliases
     */
    ListBuildAliases(request: PlayFabMultiplayerModels.ListBuildAliasesRequest): PlayFabMultiplayerModels.ListBuildAliasesResponse;

    /**
     * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
     * access is enabled, allows game client to request list of builds with player entity token.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildsummariesv2
     */
    ListBuildSummariesV2(request: PlayFabMultiplayerModels.ListBuildSummariesRequest): PlayFabMultiplayerModels.ListBuildSummariesResponse;

    /**
     * Lists multiplayer server game certificates for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcertificatesummaries
     */
    ListCertificateSummaries(request: PlayFabMultiplayerModels.ListCertificateSummariesRequest): PlayFabMultiplayerModels.ListCertificateSummariesResponse;

    /**
     * Lists custom container images for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimages
     */
    ListContainerImages(request: PlayFabMultiplayerModels.ListContainerImagesRequest): PlayFabMultiplayerModels.ListContainerImagesResponse;

    /**
     * Lists the tags for a custom container image.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimagetags
     */
    ListContainerImageTags(request: PlayFabMultiplayerModels.ListContainerImageTagsRequest): PlayFabMultiplayerModels.ListContainerImageTagsResponse;

    /**
     * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/listmatchmakingqueues
     */
    ListMatchmakingQueues(request: PlayFabMultiplayerModels.ListMatchmakingQueuesRequest): PlayFabMultiplayerModels.ListMatchmakingQueuesResult;

    /**
     * List all matchmaking ticket Ids the user is a member of.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listmatchmakingticketsforplayer
     */
    ListMatchmakingTicketsForPlayer(request: PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerRequest): PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerResult;

    /**
     * Lists multiplayer server sessions for a build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listmultiplayerservers
     */
    ListMultiplayerServers(request: PlayFabMultiplayerModels.ListMultiplayerServersRequest): PlayFabMultiplayerModels.ListMultiplayerServersResponse;

    /**
     * Lists quality of service servers for party.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listpartyqosservers
     */
    ListPartyQosServers(request: PlayFabMultiplayerModels.ListPartyQosServersRequest): PlayFabMultiplayerModels.ListPartyQosServersResponse;

    /**
     * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer
     * Servers build has been deployed.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listqosserversfortitle
     */
    ListQosServersForTitle(request: PlayFabMultiplayerModels.ListQosServersForTitleRequest): PlayFabMultiplayerModels.ListQosServersForTitleResponse;

    /**
     * Lists multiplayer server game secrets for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listsecretsummaries
     */
    ListSecretSummaries(request: PlayFabMultiplayerModels.ListSecretSummariesRequest): PlayFabMultiplayerModels.ListSecretSummariesResponse;

    /**
     * List all server backfill ticket Ids the user is a member of.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listserverbackfillticketsforplayer
     */
    ListServerBackfillTicketsForPlayer(request: PlayFabMultiplayerModels.ListServerBackfillTicketsForPlayerRequest): PlayFabMultiplayerModels.ListServerBackfillTicketsForPlayerResult;

    /**
     * List all server quota change requests for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listtitlemultiplayerserversquotachanges
     */
    ListTitleMultiplayerServersQuotaChanges(request: PlayFabMultiplayerModels.ListTitleMultiplayerServersQuotaChangesRequest): PlayFabMultiplayerModels.ListTitleMultiplayerServersQuotaChangesResponse;

    /**
     * Lists virtual machines for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listvirtualmachinesummaries
     */
    ListVirtualMachineSummaries(request: PlayFabMultiplayerModels.ListVirtualMachineSummariesRequest): PlayFabMultiplayerModels.ListVirtualMachineSummariesResponse;

    /**
     * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/removematchmakingqueue
     */
    RemoveMatchmakingQueue(request: PlayFabMultiplayerModels.RemoveMatchmakingQueueRequest): PlayFabMultiplayerModels.RemoveMatchmakingQueueResult;

    /**
     * Remove a member from a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/removemember
     */
    RemoveMember(request: PlayFabMultiplayerModels.RemoveMemberFromLobbyRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client
     * to request a server with player entity token.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestmultiplayerserver
     */
    RequestMultiplayerServer(request: PlayFabMultiplayerModels.RequestMultiplayerServerRequest): PlayFabMultiplayerModels.RequestMultiplayerServerResponse;

    /**
     * Request a party session.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestpartyservice
     */
    RequestPartyService(request: PlayFabMultiplayerModels.RequestPartyServiceRequest): PlayFabMultiplayerModels.RequestPartyServiceResponse;

    /**
     * Rolls over the credentials to the container registry.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/rollovercontainerregistrycredentials
     */
    RolloverContainerRegistryCredentials(request: PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsRequest): PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsResponse;

    /**
     * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/setmatchmakingqueue
     */
    SetMatchmakingQueue(request: PlayFabMultiplayerModels.SetMatchmakingQueueRequest): PlayFabMultiplayerModels.SetMatchmakingQueueResult;

    /**
     * Shuts down a multiplayer server session.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/shutdownmultiplayerserver
     */
    ShutdownMultiplayerServer(request: PlayFabMultiplayerModels.ShutdownMultiplayerServerRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Subscribe to lobby resource notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/subscribetolobbyresource
     */
    SubscribeToLobbyResource(request: PlayFabMultiplayerModels.SubscribeToLobbyResourceRequest): PlayFabMultiplayerModels.SubscribeToLobbyResourceResult;

    /**
     * Subscribe to match resource notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/subscribetomatchmakingresource
     */
    SubscribeToMatchmakingResource(request: PlayFabMultiplayerModels.SubscribeToMatchResourceRequest): PlayFabMultiplayerModels.SubscribeToMatchResourceResult;

    /**
     * Unsubscribe from lobby notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/unsubscribefromlobbyresource
     */
    UnsubscribeFromLobbyResource(request: PlayFabMultiplayerModels.UnsubscribeFromLobbyResourceRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Unsubscribe from match resource notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/unsubscribefrommatchmakingresource
     */
    UnsubscribeFromMatchmakingResource(request: PlayFabMultiplayerModels.UnsubscribeFromMatchResourceRequest): PlayFabMultiplayerModels.UnsubscribeFromMatchResourceResult;

    /**
     * Untags a container image.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/untagcontainerimage
     */
    UntagContainerImage(request: PlayFabMultiplayerModels.UntagContainerImageRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Creates a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildalias
     */
    UpdateBuildAlias(request: PlayFabMultiplayerModels.UpdateBuildAliasRequest): PlayFabMultiplayerModels.BuildAliasDetailsResponse;

    /**
     * Updates a multiplayer server build's name.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildname
     */
    UpdateBuildName(request: PlayFabMultiplayerModels.UpdateBuildNameRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Updates a multiplayer server build's region. If the region is not yet created, it will be created
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregion
     */
    UpdateBuildRegion(request: PlayFabMultiplayerModels.UpdateBuildRegionRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Updates a multiplayer server build's regions.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregions
     */
    UpdateBuildRegions(request: PlayFabMultiplayerModels.UpdateBuildRegionsRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Update a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobby
     */
    UpdateLobby(request: PlayFabMultiplayerModels.UpdateLobbyRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Preview: Update fields related to a joined server in the lobby the server is in. Servers can keep a lobby from expiring
     * by being the one to "update" the lobby in some way. Servers have no impact on last member leave/last member disconnect
     * behavior.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobbyasserver
     */
    UpdateLobbyAsServer(request: PlayFabMultiplayerModels.UpdateLobbyAsServerRequest): PlayFabMultiplayerModels.LobbyEmptyResult;

    /**
     * Uploads a multiplayer server game certificate.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadcertificate
     */
    UploadCertificate(request: PlayFabMultiplayerModels.UploadCertificateRequest): PlayFabMultiplayerModels.EmptyResponse;

    /**
     * Uploads a multiplayer server game secret.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadsecret
     */
    UploadSecret(request: PlayFabMultiplayerModels.UploadSecretRequest): PlayFabMultiplayerModels.EmptyResponse;


}
