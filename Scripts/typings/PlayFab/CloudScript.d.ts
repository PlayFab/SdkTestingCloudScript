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
        /** The MAC address on which the ban was applied. May affect multiple players. */
        MACAddress?: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string,
        /** The reason why this ban was applied. */
        Reason?: string,
    }

    /** Represents a single ban request. */
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

    /**
     * The existence of each user will not be verified. When banning by IP or MAC address, multiple players may be affected, so
     * use this feature with caution. Returns information about the new bans.
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
        | "SA";

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

    interface DeregisterGameRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique identifier for the Game Server Instance that is being deregistered. */
        LobbyId: string,
    }

    interface DeregisterGameResponse {
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

    type GameInstanceState = "Open"
        | "Closed";

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
        | "InsightsManagementTitleInEvaluationMode"
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
        | "TitleNotEnabledForParty"
        | "PartyVersionNotFound"
        | "MultiplayerServerBuildReferencedByMatchmakingQueue"
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
        | "SnapshotNotFound"
        | "InventoryApiNotImplemented";

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
        /** Optional character type on which to filter the leaderboard entries. */
        CharacterType?: string,
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

    interface GetFriendsListRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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
        /** Optional character type on which to filter the leaderboard entries. */
        CharacterType?: string,
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
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number,
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

    interface GetPlayFabIDsFromFacebookIDsRequest {
        /** Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. */
        FacebookIDs: string[],
    }

    /** For Facebook identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromFacebookIDsResult {
        /** Mapping of Facebook identifiers to PlayFab identifiers. */
        Data?: FacebookPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest {
        /** Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers. */
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

    interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest {
        /** Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. */
        NintendoSwitchDeviceIds: string[],
    }

    /** For Nintendo Switch Device identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult {
        /** Mapping of Nintendo Switch Device identifiers to PlayFab identifiers. */
        Data?: NintendoSwitchPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromPSNAccountIDsRequest {
        /** Id of the PSN issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /** Array of unique PlayStation Network identifiers for which the title needs to get PlayFab identifiers. */
        PSNAccountIDs: string[],
    }

    /** For PlayStation Network identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromPSNAccountIDsResult {
        /** Mapping of PlayStation Network identifiers to PlayFab identifiers. */
        Data?: PSNAccountPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromSteamIDsRequest {
        /** Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. */
        SteamStringIDs?: string[],
    }

    /** For Steam identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromSteamIDsResult {
        /** Mapping of Steam identifiers to PlayFab identifiers. */
        Data?: SteamPlayFabIdPair[],
    }

    interface GetPlayFabIDsFromXboxLiveIDsRequest {
        /** The ID of Xbox Live sandbox. */
        Sandbox?: string,
        /** Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers. */
        XboxLiveAccountIDs: string[],
    }

    /** For XboxLive identifiers which have not been linked to PlayFab accounts, null will be returned. */
    interface GetPlayFabIDsFromXboxLiveIDsResult {
        /** Mapping of PlayStation Network identifiers to PlayFab identifiers. */
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

    interface LinkPSNAccountRequest {
        /** Authentication code provided by the PlayStation Network. */
        AuthCode: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Id of the PSN issuer environment. If null, defaults to production environment. */
        IssuerId?: number,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
        /** Redirect URI supplied to PSN when requesting an auth code */
        RedirectUri: string,
    }

    interface LinkPSNAccountResult {
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

    interface LinkXboxAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
        PlayFabId: string,
        /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
        XboxToken: string,
    }

    interface LinkXboxAccountResult {
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
        ServerCustomId?: string,
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
        /** Unique Steam identifier for a user */
        SteamId: string,
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
        /** Unique Xbox identifier for a user */
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

    interface NintendoSwitchPlayFabIdPair {
        /** Unique Nintendo Switch Device identifier for a user. */
        NintendoSwitchDeviceId?: string,
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier. */
        PlayFabId?: string,
    }

    interface NotifyMatchmakerPlayerLeftRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique identifier of the Game Instance the user is leaving. */
        LobbyId: string,
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string,
    }

    interface NotifyMatchmakerPlayerLeftResult {
        /** State of user leaving the Game Server Instance. */
        PlayerState?: PlayerConnectionState,
    }

    type PlayerConnectionState = "Unassigned"
        | "Connecting"
        | "Participating"
        | "Participated";

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
        /** List of experiment variants for the player. */
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
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation Network identifier. */
        PlayFabId?: string,
        /** Unique PlayStation Network identifier for a user. */
        PSNAccountId?: string,
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

    /**
     * This function is used by a Game Server Instance to validate with the PlayFab service that a user has been registered as
     * connected to the server. The Ticket is provided to the client either as a result of a call to StartGame or Matchmake,
     * each of which return a Ticket specific to the Game Server Instance. This function will fail in any case where the Ticket
     * presented is not valid for the specific Game Server Instance making the call. Note that data returned may be Personally
     * Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and
     * managed. Since this call will always return the relevant information for users who have accessed the title, the
     * recommendation is to not store this data locally.
     */
    interface RedeemMatchmakerTicketRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique identifier of the Game Server Instance that is asking for validation of the authorization ticket. */
        LobbyId: string,
        /** Server authorization ticket passed back from a call to Matchmake or StartGame. */
        Ticket: string,
    }

    interface RedeemMatchmakerTicketResult {
        /** Error value if the ticket was not validated. */
        Error?: string,
        /** Boolean indicating whether the ticket was validated by the PlayFab service. */
        TicketIsValid: boolean,
        /** User account information for the user validated. */
        UserInfo?: UserAccountInfo,
    }

    interface RefreshGameServerInstanceHeartbeatRequest {
        /** Unique identifier of the Game Server Instance for which the heartbeat is updated. */
        LobbyId: string,
    }

    interface RefreshGameServerInstanceHeartbeatResult {
    }

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    interface RegisterGameRequest {
        /** Unique identifier of the build running on the Game Server Instance. */
        Build: string,
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
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

    interface RegisterGameResponse {
        /**
         * Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the
         * game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned.
         */
        LobbyId?: string,
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
        /** True if the account was newly created on this login. */
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

    interface SetGameServerInstanceDataRequest {
        /** Custom data to set for the specified game server instance. */
        GameServerData: string,
        /** Unique identifier of the Game Instance to be updated, in decimal format. */
        LobbyId: string,
    }

    interface SetGameServerInstanceDataResult {
    }

    interface SetGameServerInstanceStateRequest {
        /** Unique identifier of the Game Instance to be updated, in decimal format. */
        LobbyId: string,
        /** State to set for the specified game server instance. */
        State: GameInstanceState,
    }

    interface SetGameServerInstanceStateResult {
    }

    interface SetGameServerInstanceTagsRequest {
        /** Unique identifier of the Game Server Instance to be updated. */
        LobbyId: string,
        /**
         * Tags to set for the specified Game Server Instance. Note that this is the complete list of tags to be associated with
         * the Game Server Instance.
         */
        Tags: { [key: string]: string | null },
    }

    interface SetGameServerInstanceTagsResult {
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

    interface UnlinkXboxAccountRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
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
        /** The updated MAC address for the ban. Null for no change. */
        MACAddress?: string,
        /** Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state. */
        Permanent?: boolean,
        /** The updated reason for the ban to be updated. Maximum 140 characters. Null for no change. */
        Reason?: string,
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
        NintendoSwitchAccountInfo?: UserNintendoSwitchAccountIdInfo,
        /** Nintendo Switch device information, if a Nintendo Switch device has been linked */
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

    interface UserAndroidDeviceInfo {
        /** Android device ID */
        AndroidDeviceId?: string,
    }

    interface UserAppleIdInfo {
        /** Apple subject ID */
        AppleSubjectId?: string,
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
        | "WindowsHello"
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
        /** PSN account ID */
        PsnAccountId?: string,
        /** PSN online ID */
        PsnOnlineId?: string,
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

    interface UserWindowsHelloInfo {
        /** Windows Hello Device Name */
        WindowsHelloDeviceName?: string,
        /** Windows Hello Public Key Hash */
        WindowsHelloPublicKeyHash?: string,
    }

    interface UserXboxInfo {
        /** XBox user ID */
        XboxUserId?: string,
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
     * Increments the character's balance of the specified virtual currency by the stated amount
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
     * Increments the user's balance of the specified virtual currency by the stated amount
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
     * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/banusers
     */
    BanUsers(request: PlayFabServerModels.BanUsersRequest): PlayFabServerModels.BanUsersResult;

    /**
     * Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
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
     * Inform the matchmaker that a Game Server Instance is removed.
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/deregistergame
     */
    DeregisterGame(request: PlayFabServerModels.DeregisterGameRequest): PlayFabServerModels.DeregisterGameResponse;

    /**
     * Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would have been
     * added to the player inventory, if the Random Result Table were added via a Bundle or a call to UnlockContainer.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/evaluaterandomresulttable
     */
    EvaluateRandomResultTable(request: PlayFabServerModels.EvaluateRandomResultTableRequest): PlayFabServerModels.EvaluateRandomResultTableResult;

    /**
     * Executes a CloudScript function, with the 'currentPlayerId' variable set to the specified PlayFabId parameter value.
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
     * Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
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
     * Retrieves the specified character's current inventory of virtual goods
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
     * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromnintendoswitchdeviceids
     */
    GetPlayFabIDsFromNintendoSwitchDeviceIds(request: PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest): PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of PlayStation Network identifiers.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfrompsnaccountids
     */
    GetPlayFabIDsFromPSNAccountIDs(request: PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsRequest): PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsResult;

    /**
     * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
     * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/getplayfabidsfromsteamids
     */
    GetPlayFabIDsFromSteamIDs(request: PlayFabServerModels.GetPlayFabIDsFromSteamIDsRequest): PlayFabServerModels.GetPlayFabIDsFromSteamIDsResult;

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
     * Retrieves the configuration information for the specified random results tables for the title, including all ItemId
     * values and weights
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
     * Retrieves the set of items defined for the specified store, including all prices defined, for the specified player
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
     * Retrieves the specified user's current inventory of virtual goods
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
     * Adds the specified items to the specified character's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstocharacter
     */
    GrantItemsToCharacter(request: PlayFabServerModels.GrantItemsToCharacterRequest): PlayFabServerModels.GrantItemsToCharacterResult;

    /**
     * Adds the specified items to the specified user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstouser
     */
    GrantItemsToUser(request: PlayFabServerModels.GrantItemsToUserRequest): PlayFabServerModels.GrantItemsToUserResult;

    /**
     * Adds the specified items to the specified user inventories
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/grantitemstousers
     */
    GrantItemsToUsers(request: PlayFabServerModels.GrantItemsToUsersRequest): PlayFabServerModels.GrantItemsToUsersResult;

    /**
     * Links the PlayStation Network account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkpsnaccount
     */
    LinkPSNAccount(request: PlayFabServerModels.LinkPSNAccountRequest): PlayFabServerModels.LinkPSNAccountResult;

    /**
     * Links the custom server identifier, generated by the title, to the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkservercustomid
     */
    LinkServerCustomId(request: PlayFabServerModels.LinkServerCustomIdRequest): PlayFabServerModels.LinkServerCustomIdResult;

    /**
     * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/linkxboxaccount
     */
    LinkXboxAccount(request: PlayFabServerModels.LinkXboxAccountRequest): PlayFabServerModels.LinkXboxAccountResult;

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
     * Modifies the number of remaining uses of a player's inventory item
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/modifyitemuses
     */
    ModifyItemUses(request: PlayFabServerModels.ModifyItemUsesRequest): PlayFabServerModels.ModifyItemUsesResult;

    /**
     * Moves an item from a character's inventory into another of the users's character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromcharacter
     */
    MoveItemToCharacterFromCharacter(request: PlayFabServerModels.MoveItemToCharacterFromCharacterRequest): PlayFabServerModels.MoveItemToCharacterFromCharacterResult;

    /**
     * Moves an item from a user's inventory into their character's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtocharacterfromuser
     */
    MoveItemToCharacterFromUser(request: PlayFabServerModels.MoveItemToCharacterFromUserRequest): PlayFabServerModels.MoveItemToCharacterFromUserResult;

    /**
     * Moves an item from a character's inventory into the owning user's inventory.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/moveitemtouserfromcharacter
     */
    MoveItemToUserFromCharacter(request: PlayFabServerModels.MoveItemToUserFromCharacterRequest): PlayFabServerModels.MoveItemToUserFromCharacterResult;

    /**
     * Informs the PlayFab match-making service that the user specified has left the Game Server Instance
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/notifymatchmakerplayerleft
     */
    NotifyMatchmakerPlayerLeft(request: PlayFabServerModels.NotifyMatchmakerPlayerLeftRequest): PlayFabServerModels.NotifyMatchmakerPlayerLeftResult;

    /**
     * Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
     * Economy-&gt;Catalogs tab in the PlayFab Game Manager.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/redeemcoupon
     */
    RedeemCoupon(request: PlayFabServerModels.RedeemCouponRequest): PlayFabServerModels.RedeemCouponResult;

    /**
     * Validates a Game Server session ticket and returns details about the user
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/redeemmatchmakerticket
     */
    RedeemMatchmakerTicket(request: PlayFabServerModels.RedeemMatchmakerTicketRequest): PlayFabServerModels.RedeemMatchmakerTicketResult;

    /**
     * Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/refreshgameserverinstanceheartbeat
     */
    RefreshGameServerInstanceHeartbeat(request: PlayFabServerModels.RefreshGameServerInstanceHeartbeatRequest): PlayFabServerModels.RefreshGameServerInstanceHeartbeatResult;

    /**
     * Inform the matchmaker that a new Game Server Instance is added.
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/registergame
     */
    RegisterGame(request: PlayFabServerModels.RegisterGameRequest): PlayFabServerModels.RegisterGameResponse;

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
     * Revokes access to an item in a user's inventory
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/revokeinventoryitem
     */
    RevokeInventoryItem(request: PlayFabServerModels.RevokeInventoryItemRequest): PlayFabServerModels.RevokeInventoryResult;

    /**
     * Revokes access for up to 25 items across multiple users and characters.
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
     * Sets the custom data of the indicated Game Server Instance
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancedata
     */
    SetGameServerInstanceData(request: PlayFabServerModels.SetGameServerInstanceDataRequest): PlayFabServerModels.SetGameServerInstanceDataResult;

    /**
     * Set the state of the indicated Game Server Instance.
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancestate
     */
    SetGameServerInstanceState(request: PlayFabServerModels.SetGameServerInstanceStateRequest): PlayFabServerModels.SetGameServerInstanceStateResult;

    /**
     * Set custom tags for the specified Game Server Instance
     * https://docs.microsoft.com/rest/api/playfab/server/matchmaking/setgameserverinstancetags
     */
    SetGameServerInstanceTags(request: PlayFabServerModels.SetGameServerInstanceTagsRequest): PlayFabServerModels.SetGameServerInstanceTagsResult;

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
     * Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to make a VC
     * balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractcharactervirtualcurrency
     */
    SubtractCharacterVirtualCurrency(request: PlayFabServerModels.SubtractCharacterVirtualCurrencyRequest): PlayFabServerModels.ModifyCharacterVirtualCurrencyResult;

    /**
     * Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC
     * balance negative with this API.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/subtractuservirtualcurrency
     */
    SubtractUserVirtualCurrency(request: PlayFabServerModels.SubtractUserVirtualCurrencyRequest): PlayFabServerModels.ModifyUserVirtualCurrencyResult;

    /**
     * Unlinks the related PSN account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkpsnaccount
     */
    UnlinkPSNAccount(request: PlayFabServerModels.UnlinkPSNAccountRequest): PlayFabServerModels.UnlinkPSNAccountResult;

    /**
     * Unlinks the custom server identifier from the user's PlayFab account.
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkservercustomid
     */
    UnlinkServerCustomId(request: PlayFabServerModels.UnlinkServerCustomIdRequest): PlayFabServerModels.UnlinkServerCustomIdResult;

    /**
     * Unlinks the related Xbox Live account from the user's PlayFab account
     * https://docs.microsoft.com/rest/api/playfab/server/account-management/unlinkxboxaccount
     */
    UnlinkXboxAccount(request: PlayFabServerModels.UnlinkXboxAccountRequest): PlayFabServerModels.UnlinkXboxAccountResult;

    /**
     * Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when required), and
     * returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses &gt;
     * 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
     * https://docs.microsoft.com/rest/api/playfab/server/player-item-management/unlockcontainerinstance
     */
    UnlockContainerInstance(request: PlayFabServerModels.UnlockContainerInstanceRequest): PlayFabServerModels.UnlockContainerItemResult;

    /**
     * Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary unlocks it
     * using any appropriate key, and returns the contents of the opened container. If the container (and key when relevant)
     * are consumable (RemainingUses &gt; 0), their RemainingUses will be decremented, consistent with the operation of
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
     * Updates the key-value pair data tagged to the specified item, which is read-only from the client.
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
        /** The entity to perform this action on. */
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
        | "Scarlett";

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

    interface WriteEventsRequest {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null },
        /** Collection of events to write to PlayStream. */
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
         * Optional. Type of the entity to accept as. If specified, must be the same entity as the claimant or an entity that is a
         * child of the claimant entity. Defaults to the claimant entity.
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
        /** The entity to perform this action on. */
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
        /** The entity to perform this action on. */
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
        /** The entity to perform this action on. */
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
         * characters long.
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
        /** The entity to perform this action on. */
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
        /** The entity to perform this action on. */
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
        /** Leaderboard metadata for the entity. */
        LeaderboardMetadata?: string,
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
        /** Checksum value for the file */
        Checksum?: string,
        /** Name of the file */
        FileName?: string,
        /** Last UTC time the file was modified */
        LastModified: string,
        /** Storage service's reported byte count */
        Size: number,
    }

    interface EntityStatisticChildValue {
        /** Child name value, if child statistic */
        ChildName?: string,
        /** Child statistic metadata */
        Metadata?: string,
        /** Child statistic value */
        Value: number,
    }

    interface EntityStatisticValue {
        /** Child statistic values */
        ChildStatistics?: { [key: string]: EntityStatisticChildValue },
        /** Statistic metadata */
        Metadata?: string,
        /** Statistic name */
        Name?: string,
        /** Statistic value */
        Value?: number,
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
        /** The entity to perform this action on. */
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

    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

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
        Statements?: EntityPermissionStatement[],
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
        /** The entity to perform this action on. */
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
