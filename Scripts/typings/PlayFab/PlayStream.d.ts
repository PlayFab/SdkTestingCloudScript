declare namespace PlayStreamModels {
    interface IBasePlayStreamEvent {
        EventName: string;
    }

    /*
     * PlayStream Group: none
     */

    /** 
     * This event is triggered when a developer logs in.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/developer_logged_in
     */
    interface developer_logged_in extends IBasePlayStreamEvent {
        /** PlayFab ID for this user */
        PlayFabId?: string,
        /** User's email */
        Email?: string,
        /** Authentication provider for the user */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider */
        AuthenticationProviderId?: string,
        /** Developer's IP geo location */
        Location?: EventLocation,
    }

    /** 
     * This event is triggered when a developer registers.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/developer_registered
     */
    interface developer_registered extends IBasePlayStreamEvent {
        /** PlayFab ID for this user */
        PlayFabId?: string,
        /** User's email */
        Email?: string,
        /** Authentication provider for the user */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider */
        AuthenticationProviderId?: string,
        /** Developer's IP geo location */
        Location?: EventLocation,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_created */
    interface studio_created extends IBasePlayStreamEvent {
        /** Name of the new studio */
        StudioName?: string,
        /** PlayFab id of the user who created the studio */
        CreatorPlayFabId?: string,
        /** Authentication provider's id for the user who created the studio */
        CreatorAuthenticationId?: string,
    }

    /** 
     * This event is triggererd when a user accepts a studio invitation.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_user_added
     */
    interface studio_user_added extends IBasePlayStreamEvent {
        /** Id of the invitation record if user needed to register */
        InvitationId?: string,
        /** Authentication provider's ID for this user */
        AuthenticationId?: string,
        /** PlayFab ID for this user */
        PlayFabId?: string,
        /** User's email */
        Email?: string,
        /** Authentication provider for the user */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider */
        AuthenticationProviderId?: string,
        /** Array of studio permissions that were be granted to the user */
        StudioPermissions?: string[],
        /** Dictionary of title id, title permissions that were granted to the user */
        TitlePermissions?: { [key: string]: string },
    }

    /** 
     * This event is triggererd when a user is invited to a studio.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_user_invited
     */
    interface studio_user_invited extends IBasePlayStreamEvent {
        /** Identity of the user who created the invitation */
        InvitorPlayFabId?: string,
        /** Id of the invitation if user needed to register */
        InvitationId?: string,
        /** Expiration of the invitation */
        InvitationExpires?: string,
        /** Email the invitation was sent to */
        Email?: string,
        /** 
         * Indicates if the user invited already existed, if so no invitation record was
         * created and the user was automatically attached
         */
        InvitedExistingUser: boolean,
        /** Authentication provider type required for user to register with */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider. */
        AuthenticationProviderId?: string,
        /** Array of studio permissions which will be granted to the user when registering */
        StudioPermissions?: string[],
        /** 
         * Dictionary of title id, title permissions which will be granted to the user
         * when registering
         */
        TitlePermissions?: { [key: string]: string },
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_user_removed */
    interface studio_user_removed extends IBasePlayStreamEvent {
        /** Authentication provider's ID for this user */
        AuthenticationId?: string,
        /** PlayFab ID for this user */
        PlayFabId?: string,
        /** Authentication provider for the user */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider */
        AuthenticationProviderId?: string,
        /** Array of studio permissions that the user had */
        StudioPermissions?: string[],
        /** Dictionary of title id, title permissions that the user had */
        TitlePermissions?: { [key: string]: string },
    }

    /*
     * PlayStream Group: character
     */

    /** 
     * This event is triggered when a character consumes an item from their inventory.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_consumed_item
     */
    interface character_consumed_item extends IBasePlayStreamEvent {
        /** 
         * ID of the catalog item from which the consumed inventory item was created. This
         * can be used to look up the item from the catalog.
         */
        ItemId?: string,
        /** The specific ID of the item that was consumed. */
        ItemInstanceId?: string,
        /** Version of the catalog from which the consumed inventory item was created. */
        CatalogVersion?: string,
        /** 
         * For multiple use items, the number of uses that remained before the item was
         * consumed.
         */
        PreviousUsesRemaining: number,
        /** 
         * For multiple use items, the number of uses remaining after the item was
         * consumed.
         */
        UsesRemaining: number,
        TitleId?: string,
        PlayerId?: string,
    }

    /** 
     * This event is triggered when a character is created for the first time.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_created
     */
    interface character_created extends IBasePlayStreamEvent {
        /** When the character was created. */
        Created: string,
        /** Name of the character. */
        CharacterName?: string,
        TitleId?: string,
        PlayerId?: string,
    }

    /** 
     * This event is triggered when an item is granted to a character.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_inventory_item_added
     */
    interface character_inventory_item_added extends IBasePlayStreamEvent {
        /** Unique instance ID of the inventory item that was added. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item that was added. */
        ItemId?: string,
        /** Display name of the item that was added. */
        DisplayName?: string,
        /** Class of the item that was added. */
        Class?: string,
        /** Catalog version in which the item that was added is defined. */
        CatalogVersion?: string,
        /** When the item expires. The value is null if the item does not expire. */
        Expiration?: string,
        /** How many uses the item has, if it has a limited number of uses. */
        RemainingUses?: number,
        /** Optional details about the inventory item. */
        Annotation?: string,
        /** Redeemed coupon (if any) that granted the item. */
        CouponCode?: string,
        /** 
         * Catalog item IDs of any other items granted to the character along with this
         * one as part of a bundle.
         */
        BundleContents?: string[],
        TitleId?: string,
        PlayerId?: string,
    }

    /** 
     * This event is triggered when a character statistic is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_statistic_changed
     */
    interface character_statistic_changed extends IBasePlayStreamEvent {
        /** Name of the statistic that changed. */
        StatisticName?: string,
        /** 
         * Version of the statistic that changed. This is relevant for statistics that
         * reset, since each time the statistic resets the version increments.
         */
        Version: number,
        /** New value of the statistic, after the change. */
        StatisticValue: number,
        /** Old value of the statistic, before the change. */
        StatisticPreviousValue?: number,
        TitleId?: string,
        PlayerId?: string,
    }

    /** 
     * This event is triggered when the character makes a purchase using virtual
     * currency.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_vc_item_purchased
     */
    interface character_vc_item_purchased extends IBasePlayStreamEvent {
        /** Unique identifier of the purchase transaction. */
        PurchaseId?: string,
        /** Identifier of the catalog item that was purchased. */
        ItemId?: string,
        /** Version of the catalog from which the item was purchased. */
        CatalogVersion?: string,
        /** Currency that was used to purchase the item. */
        CurrencyCode?: string,
        /** Quantity of items that were purchased. */
        Quantity: number,
        /** Price paid per item, expressed in the virtual currency. */
        UnitPrice: number,
        TitleId?: string,
        PlayerId?: string,
    }

    /** 
     * This event is triggered when a character's virtual currency balance changes.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_virtual_currency_balance_changed
     */
    interface character_virtual_currency_balance_changed extends IBasePlayStreamEvent {
        /** Virtual currency whose balance changed. */
        VirtualCurrencyName?: string,
        /** New virtual currency balance after the change. */
        VirtualCurrencyBalance: number,
        /** Old virtual currency balance before the change. */
        VirtualCurrencyPreviousBalance: number,
        /** Id of the order that triggered the balance changes */
        OrderId?: string,
        TitleId?: string,
        PlayerId?: string,
    }

    /*
     * PlayStream Group: partner
     */

    /** 
     * This event is triggered when a display name is filtered by community sift.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/partner/display_name_filtered
     */
    interface display_name_filtered extends IBasePlayStreamEvent {
        /** 
         * If event occurs at account creation, then no player exists yet. Otherwise, the
         * player whose displayname update was filtered
         */
        PlayerId?: string,
        /** Value of the display name that was filtered */
        DisplayName?: string,
    }

    /** 
     * This event is triggered when a display name is filtered by community sift only
     * if there is an associated player EntityId for the event.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/partner/player_display_name_filtered
     */
    interface player_display_name_filtered extends IBasePlayStreamEvent {
        /** Value of the display name that was filtered */
        DisplayName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player connects to a Photon Cloud application
     * and authenticates with PlayFab using Photon custom authentication.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/partner/player_photon_session_authenticated
     */
    interface player_photon_session_authenticated extends IBasePlayStreamEvent {
        /** 
         * Unique identifier of the Photon Cloud application to which the player is
         * connected
         */
        PhotonApplicationId?: string,
        /** Type of Photon Cloud application to which the player is connected */
        PhotonApplicationType?: PhotonServicesEnum,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /*
     * PlayStream Group: player
     */

    /** 
     * This event is triggered by an attribution tracking Add-on when a player is
     * matched to a paid acquisition campaign.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_campaign_attribution
     */
    interface player_ad_campaign_attribution extends IBasePlayStreamEvent {
        /** The ID of the campaign, as passed in by the attribution provider. */
        CampaignId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player closes an ad.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_closed
     */
    interface player_ad_closed extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player creates a new account for a title. Note:
     * this event is triggered once per title rather than once per publisher.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_added_title
     */
    interface player_added_title extends IBasePlayStreamEvent {
        /** Authentication method used to register player's account. */
        Platform?: LoginIdentityProvider,
        /** 
         * Unique ID for the player's account associated with the Origination
         * authentication method.
         */
        PlatformUserId?: string,
        /** Player's display name when they added this title. */
        DisplayName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player finishes an ad.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_ended
     */
    interface player_ad_ended extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player opens an ad.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_opened
     */
    interface player_ad_opened extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player recieves an ad reward.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_rewarded
     */
    interface player_ad_rewarded extends IBasePlayStreamEvent {
        /** Views this player has remaining for the placement's window, if applicable */
        ViewsRemainingThisPeriod?: number,
        /** Debug messages from the reward actions */
        ActionGroupDebugMessages?: string[],
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * Event triggered when reported value of ad view is recorded
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_activity_valued
     */
    interface player_ad_activity_valued extends IBasePlayStreamEvent {
        /** 
         * Share of the revenue for this ad view (calculated as total revenue for
         * placement devided by total views for that placement in that time window)
         */
        RevenueShare: number,
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player starts an ad.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_started
     */
    interface player_ad_started extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player is banned.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_banned
     */
    interface player_banned extends IBasePlayStreamEvent {
        /** When the ban expires. The value is null if the ban is permanent. */
        BanExpiration?: string,
        /** Whether this ban is permanent. */
        PermanentBan: boolean,
        /** 
         * ID of the ban. Useful for tracking unique bans, if the player has been banned
         * before.
         */
        BanId?: string,
        /** The reason why the player was banned. */
        BanReason?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player's avatar URL is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_changed_avatar
     */
    interface player_changed_avatar extends IBasePlayStreamEvent {
        /** URL of the avatar image. */
        ImageUrl?: string,
        /** Previous URL of the avatar image. */
        PreviousImageUrl?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player completes the password reset process by
     * visiting the link URL that was sent to them and choosing a new password.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_completed_password_reset
     */
    interface player_completed_password_reset extends IBasePlayStreamEvent {
        /** Email address to which the password reset link was sent. */
        RecoveryEmailAddress?: string,
        /** 
         * Unique identifier for the password reset link. This cannot be used to complete
         * the reset.
         */
        PasswordResetId?: string,
        /** IP address from which the password reset process was initiated. */
        InitiatedFromIPAddress?: string,
        /** When the password reset process was initiated. */
        InitiationTimestamp: string,
        /** Source that initiated the password reset process. */
        InitiatedBy?: PasswordResetInitiationSource,
        /** Expiration time for the password reset link. */
        LinkExpiration: string,
        /** IP address from which the password reset process was completed. */
        CompletedFromIPAddress?: string,
        /** When the password reset process was completed. */
        CompletionTimestamp: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player consumes an item from their inventory.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_consumed_item
     */
    interface player_consumed_item extends IBasePlayStreamEvent {
        /** 
         * ID of the catalog item from which the consumed inventory item was created. This
         * can be used to look up the item from the catalog.
         */
        ItemId?: string,
        /** Version of the catalog from which the consumed inventory item was created. */
        CatalogVersion?: string,
        /** The specific ID of the item that was consumed. */
        ItemInstanceId?: string,
        /** 
         * For multiple use items, the number of uses that remained before the item was
         * consumed.
         */
        PreviousUsesRemaining: number,
        /** 
         * For multiple use items, the number of uses remaining after the item was
         * consumed.
         */
        UsesRemaining: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player account is created for the first time.
     * Note: this event is only triggered once per publisher, not once per title.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_created
     */
    interface player_created extends IBasePlayStreamEvent {
        /** When the player account was created. */
        Created: string,
        /** Unique ID for the publisher account under which this player account is created. */
        PublisherId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player's display name is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_displayname_changed
     */
    interface player_displayname_changed extends IBasePlayStreamEvent {
        /** Previous display name before the change. */
        PreviousDisplayName?: string,
        /** New display name after the change. */
        DisplayName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is optionally triggered when a CloudScript function is executed,
     * either by calling the ExecuteCloudScript API with the GeneratePlayStreamEvent
     * option or triggered by a PlayStream event action with the 'Publish results as
     * a PlayStream Event' box checked.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript
     */
    interface player_executed_cloudscript extends IBasePlayStreamEvent {
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
        /** 
         * Result of the CloudScript function, including diagnostic information that is
         * useful for debugging.
         */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when an item is granted to a player.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_inventory_item_added
     */
    interface player_inventory_item_added extends IBasePlayStreamEvent {
        /** Unique instance ID of the inventory item that was added. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item that was added. */
        ItemId?: string,
        /** Display name of the item that was added. */
        DisplayName?: string,
        /** Class of the item that was added. */
        Class?: string,
        /** Catalog version in which the item that was added is defined. */
        CatalogVersion?: string,
        /** When the item expires. The value is null if the item does not expire. */
        Expiration?: string,
        /** How many uses the item has, if it has a limited number of uses. */
        RemainingUses?: number,
        /** Optional details about the inventory item. */
        Annotation?: string,
        /** Redeemed coupon (if any) that granted the item. */
        CouponCode?: string,
        /** 
         * Catalog item IDs of any other items granted to the player along with this one
         * as part of a bundle.
         */
        BundleContents?: string[],
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player joins a multiplayer game session.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_joined_lobby
     */
    interface player_joined_lobby extends IBasePlayStreamEvent {
        /** Unique ID of the game lobby the player joined. */
        LobbyId?: string,
        /** Game mode of the game lobby the player joined. */
        GameMode?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Host name of the machine running the custom game server. */
        ServerHost?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player leaves a multiplayer game session.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_left_lobby
     */
    interface player_left_lobby extends IBasePlayStreamEvent {
        /** Unique ID of the game session the player joined. */
        LobbyId?: string,
        /** Game mode of the game session the player joined. */
        GameMode?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Host name of the machine running the custom game server. */
        ServerHost?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a new authentication method is linked to a
     * player's account.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_linked_account
     */
    interface player_linked_account extends IBasePlayStreamEvent {
        /** Authentication method being linked to a player's account. */
        Origination?: LoginIdentityProvider,
        /** Player's identity under authentication method being linked to player's account. */
        OriginationUserId?: string,
        /** Player's username linked with the given provider */
        Username?: string,
        /** Player's email linked with the given provider */
        Email?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player logs in.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_logged_in
     */
    interface player_logged_in extends IBasePlayStreamEvent {
        /** Authentication method used to login the player. */
        Platform?: LoginIdentityProvider,
        /** Player's identity under the authentication method used to login the player. */
        PlatformUserId?: string,
        /** 
         * Player's geographic location, if known. Location is estimated from factors such
         * as IP address and is not always available or accurate.
         */
        Location?: EventLocation,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player is assigned to a game lobby and issued a
     * connection ticket, before the player has connected to the game lobby.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_matched_with_lobby
     */
    interface player_matched_with_lobby extends IBasePlayStreamEvent {
        /** Unique ID of the game lobby the player was assigned to. */
        LobbyId?: string,
        /** Game mode of the game lobby the player was assigned to. */
        GameMode?: string,
        /** Region in which the game server lives that the player was assigned to. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Host name of the machine running the custom game server. */
        ServerHost?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player is sent a link to reset their password.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_password_reset_link_sent
     */
    interface player_password_reset_link_sent extends IBasePlayStreamEvent {
        /** Email address to which the password reset link was sent. */
        RecoveryEmailAddress?: string,
        /** IP address from which the password reset process was initiated. */
        InitiatedFromIPAddress?: string,
        /** Source that initiated the password reset process. */
        InitiatedBy?: PasswordResetInitiationSource,
        /** 
         * Unique identifier for the password reset link. This cannot be used to complete
         * the reset.
         */
        PasswordResetId?: string,
        /** Expiration time for the password reset link. */
        LinkExpiration: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered for the top-ranked players on a leaderboard when the
     * leaderboard version changes (e.g. when a leaderboard statistic version is
     * incremented).  The maximum number of leaderboard entries for which the event
     * is generated is controlled by the "Leaderboard version change top rank events
     * sent" title limit.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ranked_on_leaderboard_version
     */
    interface player_ranked_on_leaderboard_version extends IBasePlayStreamEvent {
        /** Player's rank on the leaderboard. */
        Rank: number,
        /** Player's leaderboard value. */
        Value: number,
        /** 
         * Version of the leaderboard on which the player is ranked. For player statistic
         * leaderboards, this matches the version of the statistic.
         */
        Version: number,
        /** Behavior with respect to the leaderboard values when the version changed. */
        VersionChangeBehavior?: LeaderboardVersionChangeBehavior,
        /** Source of the values for the leaderboard. */
        LeaderboardSource?: LeaderboardSource,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player makes a real money purchase, and
     * generates revenue for the game.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_realmoney_purchase
     */
    interface player_realmoney_purchase extends IBasePlayStreamEvent {
        /** Payment provider used to make the purchase. */
        PaymentProvider?: string,
        /** Type of payment used to make the purchase. */
        PaymentType?: PaymentType,
        /** Total value of the purchase in the system currency (defaults to USD). */
        OrderTotal: number,
        /** 
         * Total value of the purchase in the local currency used to make the purchase, if
         * applicable.
         */
        TransactionTotal?: number,
        /** Local currency used to make the purchase, if applicable. */
        TransactionCurrency?: Currency,
        /** Unique identifier of the order. */
        OrderId?: string,
        /** The name of the purchased item, if applicable. */
        PurchasedProduct?: string[],
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player attempts to make a real money purchase
     * and the purchase receipt is being validated.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_receipt_validation
     */
    interface player_receipt_validation extends IBasePlayStreamEvent {
        /** Payment provider used to make the purchase attempt. */
        PaymentProvider?: string,
        /** Type of payment used to make the purchase attempt. */
        PaymentType?: PaymentType,
        /** The receipt data during a real money purchase event attempt. */
        ReceiptContent?: string,
        /** Indicates if the receipt is valid. */
        Valid: boolean,
        /** The error that occured during a receipt validation. */
        Error?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player makes a real money purchase, and
     * generates revenue for the game.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_redeemed_coupon
     */
    interface player_redeemed_coupon extends IBasePlayStreamEvent {
        /** Coupon code the player redeemed. */
        CouponCode?: string,
        /** Items added to the player's inventory by redeeming the coupon. */
        GrantedInventoryItems?: CouponGrantedInventoryItem[],
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player registers for push notifications.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_registered_push_notifications
     */
    interface player_registered_push_notifications extends IBasePlayStreamEvent {
        /** Platform on which the player is registering for push notifications. */
        Platform?: PushNotificationPlatform,
        /** Unique device token registered for push notifications. */
        DeviceToken?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player is reported by another player as abusive.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_reported_as_abusive
     */
    interface player_reported_as_abusive extends IBasePlayStreamEvent {
        /** Player ID of the player who made the report. */
        ReportedByPlayer?: string,
        /** Comment submitted by the player who made the report. */
        Comment?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player statistic is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_statistic_changed
     */
    interface player_statistic_changed extends IBasePlayStreamEvent {
        /** Name of the statistic that changed. */
        StatisticName?: string,
        /** Unique ID of the statistic that changed. */
        StatisticId: number,
        /** 
         * Version of the statistic that changed. This is relevant for statistics that
         * reset, since each time the statistic resets the version increments.
         */
        Version: number,
        /** New value of the statistic, after the change. */
        StatisticValue: number,
        /** Old value of the statistic, before the change. */
        StatisticPreviousValue?: number,
        /** Aggregation method applied for calculating the new value of the statistic. */
        AggregationMethod?: StatisticAggregationMethod,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player statistic is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_statistic_deleted
     */
    interface player_statistic_deleted extends IBasePlayStreamEvent {
        /** Name of the statistic that was deleted. */
        StatisticName?: string,
        /** Unique ID of the statistic that was deleted. */
        StatisticId: number,
        /** 
         * Version of the statistic. This is relevant for statistics that reset, since
         * each time the statistic resets the version increments.
         */
        Version: number,
        /** Old value of the statistic, before being deleted. */
        StatisticPreviousValue?: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a tag is added to a player profile.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_tag_added
     */
    interface player_tag_added extends IBasePlayStreamEvent {
        /** Name of the tag that is added. */
        TagName?: string,
        /** Namespace for this tag */
        Namespace?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a tag is removed from a player profile.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_tag_removed
     */
    interface player_tag_removed extends IBasePlayStreamEvent {
        /** Name of the tag that is removed. */
        TagName?: string,
        /** Namespace for this tag */
        Namespace?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a CloudScript function is run as the result of a
     * PlayStream action, and the 'Publish results as a PlayStream Event' box was
     * checked.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_triggered_action_executed_cloudscript
     */
    interface player_triggered_action_executed_cloudscript extends IBasePlayStreamEvent {
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
        /** 
         * Result of the CloudScript function, including an error information. Useful for
         * debugging.
         */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
        /** 
         * The full JSON data of the event that triggered this CloudScript function to
         * run. Useful for debugging.
         */
        TriggeringEventData?: any,
        /** Name of the event that triggered this CloudScript function to run. */
        TriggeringEventName?: string,
        /** JSON data profile of the player that triggered this CloudScript function to run. */
        TriggeringPlayer?: PlayerProfile,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when an authentication method is unlinked from a
     * player's account.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_unlinked_account
     */
    interface player_unlinked_account extends IBasePlayStreamEvent {
        /** Authentication method being unlinked from a player's account. */
        Origination?: LoginIdentityProvider,
        /** 
         * Player's identity under authentication method being unlinked from player's
         * account.
         */
        OriginationUserId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when the player makes a purchase using virtual currency.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_vc_item_purchased
     */
    interface player_vc_item_purchased extends IBasePlayStreamEvent {
        /** Unique identifier of the purchase transaction. */
        PurchaseId?: string,
        /** Identifier of the catalog item that was purchased. */
        ItemId?: string,
        /** Version of the catalog from which the item was purchased. */
        CatalogVersion?: string,
        /** Currency that was used to purchase the item. */
        CurrencyCode?: string,
        /** Quantity of items that were purchased. */
        Quantity: number,
        /** Price paid per item, expressed in the virtual currency. */
        UnitPrice: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a player's virtual currency balance changes.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_virtual_currency_balance_changed
     */
    interface player_virtual_currency_balance_changed extends IBasePlayStreamEvent {
        /** Virtual currency whose balance changed. */
        VirtualCurrencyName?: string,
        /** New virtual currency balance after the change. */
        VirtualCurrencyBalance: number,
        /** Old virtual currency balance before the change. */
        VirtualCurrencyPreviousBalance: number,
        /** Id of the order that triggered the balance changes */
        OrderId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /*
     * PlayStream Group: session
     */

    /** 
     * This event is triggered when a multiplayer game lobby ends.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/gamelobby_ended
     */
    interface gamelobby_ended extends IBasePlayStreamEvent {
        /** The ID of the title associated with this game lobby */
        TitleId?: string,
        /** Game mode of the game lobby the player joined. */
        GameMode?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Host name of the machine running the custom game server. */
        ServerHost?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Custom tags associated with the game lobby. */
        Tags?: { [key: string]: string },
    }

    /** 
     * This event is triggered when a multiplayer game lobby starts.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/gamelobby_started
     */
    interface gamelobby_started extends IBasePlayStreamEvent {
        /** Configuration data passed to the server process running the game lobby. */
        GameServerData?: string,
        /** 
         * Custom command line arguments passed to the server process running the game
         * lobby.
         */
        CustomCommandLineData?: string,
        /** Webhook endpoint of the custom matchmaker (if any) that started the game lobby. */
        CustomMatchmakerEndpoint?: string,
        /** Maximum number of players that may be connected to the game lobby. */
        MaxPlayers?: number,
        /** The ID of the title associated with this game lobby */
        TitleId?: string,
        /** Game mode of the game lobby the player joined. */
        GameMode?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Host name of the machine running the custom game server. */
        ServerHost?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Custom tags associated with the game lobby. */
        Tags?: { [key: string]: string },
    }

    /** 
     * This event is triggered when a session ends
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/session_ended
     */
    interface session_ended extends IBasePlayStreamEvent {
        /** 
         * The time the session was explicitly ended at, clamped to 24 hours. This can
         * differ significantly from the event timestamp if the game crashed
         */
        EndTime: string,
        /** The ID of the user associated with this session */
        UserId?: string,
        /** The total kilobytes written to the S3 file associated with this session */
        KilobytesWritten?: number,
        /** The length of the session in milliseconds */
        SessionLengthMs: number,
        /** Whether or not the session was marked as a crash */
        Crashed: boolean,
        /** The ID of the title associated with this session */
        TitleId?: string,
    }

    /** 
     * This event is triggered when a session starts.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/session_started
     */
    interface session_started extends IBasePlayStreamEvent {
        /** The pre-signed S3 URL associated with the session, which has PUT permissions. */
        TemporaryWriteUrl?: string,
        /** The ID of the title associated with this session */
        TitleId?: string,
    }

    /*
     * PlayStream Group: title
     */

    /** 
     * This event is triggered when a task instance is aborted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_aborted_task
     */
    interface title_aborted_task extends IBasePlayStreamEvent {
        /** ID of the aborted task instance */
        TaskInstanceId?: string,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when new CloudScript is uploaded to PlayFab.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_added_cloudscript
     */
    interface title_added_cloudscript extends IBasePlayStreamEvent {
        /** Version number of the CloudScript file that was added. */
        Version: number,
        /** Revision number of the CloudScript file that was added. */
        Revision: number,
        /** Whether the CloudScript that was uploaded is live. */
        Published: boolean,
        /** 
         * Names of the individual script files modified. Currently this is just
         * 'CloudScript.js' but later we will support multiple files.
         */
        ScriptNames?: string[],
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a new game build is uploaded for a game title.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_game_build_added
     */
    interface title_game_build_added extends IBasePlayStreamEvent {
        /** Unique identifier of the build that was uploaded. */
        BuildId?: string,
        /** 
         * This build is being deployed in these regions and will shortly be available for
         * players to join.
         */
        Regions?: Region[],
        /** The minimum number of free slots to maintain across all servers for this build. */
        MinFreeGameSlots: number,
        /** The maximum number of game sessions that can be run on a single server. */
        MaxGamesPerHost: number,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when an API Features setting is changed for the title.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_api_settings_changed
     */
    interface title_api_settings_changed extends IBasePlayStreamEvent {
        /** Settings values before the change. */
        PreviousSettingsValues?: APISettings,
        /** Settings values after the change. */
        SettingsValues?: APISettings,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a catalog is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_catalog_updated
     */
    interface title_catalog_updated extends IBasePlayStreamEvent {
        /** Version of the catalog that was updated. */
        CatalogVersion?: string,
        /** Was the catalog deleted. */
        Deleted: boolean,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a single IP address generates too many API calls
     * to PlayFab and is throttled.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_client_rate_limited_alert
     */
    interface title_client_rate_limited_alert extends IBasePlayStreamEvent {
        /** URL of an image graph of the counter that triggered the alert. */
        GraphUrl?: string,
        /** Unique identifier of the alert that triggered this event. */
        AlertEventId?: string,
        /** The PlayFab API that was called too frequently. */
        API?: string,
        /** Error message that was returned to the client. */
        ErrorCode?: string,
        /** Level of the alert. Values include Warn, Alert, Critical. */
        Level?: AlertLevel,
        /** State of the alert. Values include Triggered, Recovered, ReTriggered. */
        AlertState?: AlertStates,
    }

    /** 
     * This event is triggered when a scheduled task has completed
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_completed_task
     */
    interface title_completed_task extends IBasePlayStreamEvent {
        /** Type of the scheduled task */
        TaskType?: string,
        /** ID of the running instance of the task */
        TaskInstanceId?: string,
        /** Whether the task was aborted. */
        IsAborted: boolean,
        /** Timestamp on when the task was aborted. Null if task never was aborted. */
        AbortedAt?: string,
        /** Result of the task run, whether it has succeeded, failed or aborted. */
        Result?: TaskInstanceStatus,
        /** Summary of the task run. Different task types have different summary structure. */
        Summary?: any,
    }

    /** 
     * This event is triggered when a task is created.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_created_task
     */
    interface title_created_task extends IBasePlayStreamEvent {
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a task is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_deleted_task
     */
    interface title_deleted_task extends IBasePlayStreamEvent {
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggererd when a title exceeds a service limit and receives an
     * error.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_exceeded_limit
     */
    interface title_exceeded_limit extends IBasePlayStreamEvent {
        /** The unique identifier of the limit that was exceeded. */
        LimitId?: string,
        /** The display name of the limit that was exceeded. */
        LimitDisplayName?: string,
        /** The unit of the limit that was exceeded. */
        Unit?: MetricUnit,
        /** The limit value that was exceeded. */
        LimitValue: number,
        /** The value that exceeded the limit. */
        Value: number,
        /** Additional details about the exceeded limit */
        Details?: { [key: string]: any },
    }

    /** 
     * This event is triggered when a game title experiences a high rate of errors.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_high_error_rate_alert
     */
    interface title_high_error_rate_alert extends IBasePlayStreamEvent {
        /** URL of an image graph of the counter that triggered the alert. */
        GraphUrl?: string,
        /** Unique identifier of the alert that triggered this event. */
        AlertEventId?: string,
        /** The PlayFab API that is generating the high rate of errors. */
        API?: string,
        /** Error message that was returned to the client. */
        ErrorCode?: string,
        /** Level of the alert. Values include Warn, Alert, Critical. */
        Level?: AlertLevel,
        /** State of the alert. Values include Triggered, Recovered, ReTriggered. */
        AlertState?: AlertStates,
    }

    /** 
     * This event is triggered when a title initiates the account recovery process for
     * a player.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_initiated_player_password_reset
     */
    interface title_initiated_player_password_reset extends IBasePlayStreamEvent {
        /** Player's account ID. */
        PlayerId?: string,
        /** Email address to which the account recovery email was sent. */
        PlayerRecoveryEmailAddress?: string,
        /** 
         * Unique identifier for the password reset link. This cannot be used to complete
         * the reset.
         */
        PasswordResetId?: string,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a title changes a service limit.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_limit_changed
     */
    interface title_limit_changed extends IBasePlayStreamEvent {
        /** The unique identifier of the limit that changed. */
        LimitId?: string,
        /** The display name of the limit that changed. */
        LimitDisplayName?: string,
        /** The unit of the limit that changed. */
        Unit?: MetricUnit,
        /** The unique identifier of the limit change transaction. */
        TransactionId?: string,
        /** The price of the limit level in US Dollars before the change, if any. */
        PreviousPriceUSD?: number,
        /** The limit value before the change, if any. */
        PreviousValue?: number,
        /** The price of the limit level in US Dollars, if any. */
        PriceUSD?: number,
        /** The limit value after the change, if any. */
        Value?: number,
    }

    /** 
     * This event is triggered when any of the game build settings are modified.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_game_build_modified
     */
    interface title_game_build_modified extends IBasePlayStreamEvent {
        /** Unique identifier of the build that was modified. */
        BuildId?: string,
        /** List of regions where the build has been deployed. */
        Regions?: Region[],
        /** The minimum number of free slots to maintain across all servers for this build. */
        MinFreeGameSlots: number,
        /** The maximum number of game sessions that can be run on a single server. */
        MaxGamesPerHost: number,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a title news is created or updated.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_news_updated
     */
    interface title_news_updated extends IBasePlayStreamEvent {
        /** Id of the news that is new or updated. */
        NewsId?: string,
        /** The current title of the news that is new or updated. */
        NewsTitle?: string,
        /** When the title news was initially created. */
        DateCreated: string,
        /** The current status of the news that is new or updated. */
        Status?: NewsStatus,
    }

    /** 
     * This event is triggered when an update occurs to a a title's permission
     * policies.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_permission_policy_changed
     */
    interface title_permission_policy_changed extends IBasePlayStreamEvent {
        /** The name of the policy that was changed */
        PolicyName?: string,
        /** The contents new policy. */
        NewPolicy?: string,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * An inactive revision of CloudScript has been made into the active 'live'
     * version.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_published_cloudscript
     */
    interface title_published_cloudscript extends IBasePlayStreamEvent {
        /** Revision number of the CloudScript that was activated. */
        Revision: number,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a title requests a service limit change.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_requested_limit_change
     */
    interface title_requested_limit_change extends IBasePlayStreamEvent {
        /** The unique identifier of the limit requested to change. */
        LimitId?: string,
        /** The display name of the limit requested to change. */
        LimitDisplayName?: string,
        /** The unit of the limit requested to change. */
        Unit?: MetricUnit,
        /** The unique identifier of the requested limit change transaction. */
        TransactionId?: string,
        /** The name of the limit level at the time of the requested change, if any. */
        PreviousLevelName?: string,
        /** 
         * The price of the limit level in US Dollars at the time of the requested change,
         * if any.
         */
        PreviousPriceUSD?: number,
        /** The limit value at the time of the requested change, if any. */
        PreviousValue?: number,
        /** The name of the requested limit level. */
        LevelName?: string,
        /** The price of the requested limit level in US Dollars, if any. */
        PriceUSD?: number,
        /** The limit value of the requested change, if any. */
        Value?: number,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a CloudScript function is run by a scheduled task.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_scheduled_cloudscript_executed
     */
    interface title_scheduled_cloudscript_executed extends IBasePlayStreamEvent {
        /** Scheduled task that called the CloudScript */
        ScheduledTask?: NameId,
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
        /** 
         * Result of the CloudScript function, including an error information. Useful for
         * debugging.
         */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
    }

    /** 
     * This event is triggered when a title adds or updates a Secret Key
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_secret_key_changed
     */
    interface title_secret_key_changed extends IBasePlayStreamEvent {
        /** Id of the secret key affected. */
        SecretKeyId?: string,
        /** Name of the secret key affected. */
        SecretKeyName?: string,
        /** Flag indicating if the key is disabled */
        Disabled?: boolean,
        /** Optional UTC date time that the secret key will expire at. */
        ExpiryDate?: string,
        /** Flag indicating if the key was deleted by this operation. Either true or null. */
        Deleted?: boolean,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a task is scheduled to run.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_started_task
     */
    interface title_started_task extends IBasePlayStreamEvent {
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        /** Type of the scheduled task */
        TaskType?: string,
        /** Parameter of the scheduled task */
        Parameter?: any,
        /** ID of the running instance of the task */
        TaskInstanceId?: string,
        /** ID of user who manually scheduled the task, null if scheduled automatically */
        ScheduledByUserId?: string,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when the version of a statistic changes, causing its
     * leaderboard to reset.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_statistic_version_changed
     */
    interface title_statistic_version_changed extends IBasePlayStreamEvent {
        /** Unique name of the statistic. */
        StatisticName?: string,
        /** Version of the statistic, following the update. */
        StatisticVersion: number,
        /** The interval on which the statistic leaderboard was configured to reset, if any. */
        ScheduledResetInterval?: StatisticResetIntervalOption,
        /** The time at which the statistic leaderboard was configured to reset, if any. */
        ScheduledResetTime?: string,
    }

    /** 
     * This event is triggered when a store is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_store_updated
     */
    interface title_store_updated extends IBasePlayStreamEvent {
        /** Catalog version that the updated store belongs to. */
        CatalogVersion?: string,
        /** ID of the updated store. */
        StoreId?: string,
        /** Was the store deleted. */
        Deleted: boolean,
        UserId?: string,
        DeveloperId?: string,
    }

    /** 
     * This event is triggered when a task is updated.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_updated_task
     */
    interface title_updated_task extends IBasePlayStreamEvent {
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        HasRenamed: boolean,
        UserId?: string,
        DeveloperId?: string,
    }

    /*
     * PlayStream Group: child types
     */

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AuthenticationProvider */
    type AuthenticationProvider = "PlayFab"
        | "SAML";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ContinentCode */
    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/CountryCode */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/EventLocation */
    interface EventLocation {
        /** Two-character code representing the continent of geographic location. */
        ContinentCode?: ContinentCode,
        /** 
         * Two-character ISO 3166-1 code representing the country of the geographic
         * location.
         */
        CountryCode?: CountryCode,
        /** City of the geographic location. */
        City?: string,
        /** Latitude coordinate of the geographic location. */
        Latitude?: number,
        /** Longitude coordinate of the geographic location. */
        Longitude?: number,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PaymentType */
    type PaymentType = "Purchase"
        | "ReceiptValidation";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/LeaderboardVersionChangeBehavior */
    type LeaderboardVersionChangeBehavior = "ResetValues"

    /** 
     * Statistic used as the source of leaderboard values.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/StatisticLeaderboardSource
     */
    interface StatisticLeaderboardSource {
        /** Name of the statistic. */
        StatisticName?: string,
        /** Unique ID of the statistic. */
        StatisticId: number,
    }

    /** 
     * The source of values for the leaderboard. The properties are mutually exclusive
     * - only one of them will be set and the rest will be null.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/LeaderboardSource
     */
    interface LeaderboardSource {
        /** Statistic associated with the leaderboard. */
        Statistic?: StatisticLeaderboardSource,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/LoginIdentityProvider */
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
        | "WindowsHello";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PasswordResetInitiationSource */
    type PasswordResetInitiationSource = "Self"
        | "Admin";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/CouponGrantedInventoryItem */
    interface CouponGrantedInventoryItem {
        /** Unique instance ID of the inventory item. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item. */
        ItemId?: string,
        /** Catalog version of the inventory item. */
        CatalogVersion?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/Currency */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/LogStatement */
    interface LogStatement {
        /** 'Debug', 'Info', or 'Error' */
        Level?: string,
        Message?: string,
        /** Optional object accompanying the message as contextual information */
        Data?: any,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ScriptExecutionError */
    interface ScriptExecutionError {
        /** 
         * Error code, such as CloudScriptNotFound, JavascriptException,
         * CloudScriptFunctionArgumentSizeExceeded, CloudScriptAPIRequestCountExceeded,
         * CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
         */
        Error?: string,
        /** Details about the error */
        Message?: string,
        /** Point during the execution of the script at which the error occurred, if any */
        StackTrace?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ExecuteCloudScriptResult */
    interface ExecuteCloudScriptResult {
        /** The name of the function that executed */
        FunctionName?: string,
        /** The revision of the CloudScript that executed */
        Revision: number,
        /** The object returned from the CloudScript function, if any */
        FunctionResult?: any,
        /** 
         * Entries logged during the function execution. These include both entries logged
         * in the function code using log.info() and log.error() and error entries for
         * API and HTTP request failures.
         */
        Logs?: LogStatement[],
        ExecutionTimeSeconds: number,
        /** 
         * Processor time consumed while executing the function. This does not include
         * time spent waiting on API calls or HTTP requests.
         */
        ProcessorTimeSeconds: number,
        MemoryConsumedBytes: number,
        /** Number of PlayFab API requests issued by the CloudScript function */
        APIRequestsIssued: number,
        /** Number of external HTTP requests issued by the CloudScript function */
        HttpRequestsIssued: number,
        /** Information about the error, if any, that occured during execution */
        Error?: ScriptExecutionError,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerLocation */
    interface PlayerLocation {
        /** The two-character continent code for this location */
        ContinentCode: ContinentCode,
        /** 
         * The two-character ISO 3166-1 country code for the country associated with the
         * location
         */
        CountryCode: CountryCode,
        /** City of the player's geographic location. */
        City?: string,
        /** Latitude coordinate of the player's geographic location. */
        Latitude?: number,
        /** Longitude coordinate of the player's geographic location. */
        Longitude?: number,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AdCampaignAttribution */
    interface AdCampaignAttribution {
        /** Attribution network name */
        Platform?: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** UTC time stamp of attribution */
        AttributedAt: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PushNotificationPlatform */
    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PushNotificationRegistration */
    interface PushNotificationRegistration {
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerLinkedAccount */
    interface PlayerLinkedAccount {
        /** Authentication platform */
        Platform?: LoginIdentityProvider,
        /** Platform user identifier */
        PlatformUserId?: string,
        /** Linked account's username */
        Username?: string,
        /** Linked account's email */
        Email?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerStatistic */
    interface PlayerStatistic {
        /** Statistic ID */
        Id?: string,
        /** Statistic version (0 if not a versioned statistic) */
        StatisticVersion: number,
        /** Current statistic value */
        StatisticValue: number,
        /** Statistic name */
        Name?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerProfile */
    interface PlayerProfile {
        /** PlayFab Player ID */
        PlayerId?: string,
        /** Title ID this profile applies to */
        TitleId?: string,
        /** Player Display Name */
        DisplayName?: string,
        /** Publisher this player belongs to */
        PublisherId?: string,
        /** Player account origination */
        Origination?: LoginIdentityProvider,
        /** Player record created */
        Created?: string,
        /** Last login */
        LastLogin?: string,
        /** 
         * Banned until UTC Date. If permanent ban this is set for 20 years after the
         * original ban date.
         */
        BannedUntil?: string,
        /** Image URL of the player's avatar. */
        AvatarUrl?: string,
        /** Dictionary of player's statistics using only the latest version's value */
        Statistics?: { [key: string]: number },
        /** A sum of player's total purchases in USD across all currencies. */
        TotalValueToDateInUSD?: number,
        /** Dictionary of player's total purchases by currency. */
        ValuesToDate?: { [key: string]: number },
        /** List of player's tags for segmentation. */
        Tags?: string[],
        /** Dictionary of player's locations by type. */
        Locations?: { [key: string]: PlayerLocation },
        /** Dictionary of player's virtual currency balances */
        VirtualCurrencyBalances?: { [key: string]: number },
        /** Array of ad campaigns player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttribution[],
        /** Array of configured push notification end points */
        PushNotificationRegistrations?: PushNotificationRegistration[],
        /** Array of third party accounts linked to this player */
        LinkedAccounts?: PlayerLinkedAccount[],
        /** Array of player statistics */
        PlayerStatistics?: PlayerStatistic[],
    }

    /** 
     * Identifier by either name or ID. Note that a name may change due to renaming,
     * or reused after being deleted. ID is immutable and unique.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/NameIdentifier
     */
    interface NameIdentifier {
        Name?: string,
        Id?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/APISettings */
    interface APISettings {
        /** Allow game clients to add to virtual currency balances via API. */
        AllowClientToAddVirtualCurrency: boolean,
        /** Allow game clients to subtract from virtual currency balances via API. */
        AllowClientToSubtractVirtualCurrency: boolean,
        /** Allow game clients to update statistic values via API. */
        AllowClientToPostPlayerStatistics: boolean,
        /** Allow clients to start multiplayer game sessions via API. */
        AllowClientToStartGames: boolean,
        /** Allow game servers to delete player accounts via API. */
        AllowServerToDeleteUsers: boolean,
        /** 
         * Use payment provider's sandbox mode (if available) for real-money purchases.
         * This can be useful when testing in-game purchasing in order to avoid being
         * charged.
         */
        UseSandboxPayments: boolean,
        /** Multiplayer game sessions are hosted on servers external to PlayFab. */
        UseExternalGameServerProvider: boolean,
        /** 
         * Allow players to choose display names that may be in use by other players, i.e.
         * do not enforce uniqueness of display names. Note: if this option is enabled,
         * it cannot be disabled later.
         */
        AllowNonUniquePlayerDisplayNames: boolean,
        /** 
         * Reduce the precision of IP addresses collected from players' devices before
         * they are stored or used to estimate geographic locations.
         */
        EnableClientIPAddressObfuscation: boolean,
        /** 
         * Require JSON format for data values associated with players, characters,
         * inventories, and shared groups.
         */
        RequireCustomDataJSONFormat: boolean,
        /** Disable API access by returning errors to all API requests. */
        DisableAPIAccess: boolean,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/TaskInstanceStatus */
    type TaskInstanceStatus = "Succeeded"
        | "Starting"
        | "InProgress"
        | "Failed"
        | "Aborted"
        | "Pending";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/StatisticAggregationMethod */
    type StatisticAggregationMethod = "Last"
        | "Min"
        | "Max"
        | "Sum";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/Region */
    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AlertLevel */
    type AlertLevel = "Warn"
        | "Alert"
        | "Critical";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AlertStates */
    type AlertStates = "Triggered"
        | "Recovered"
        | "ReTriggered";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/NewsStatus */
    type NewsStatus = "None"
        | "Unpublished"
        | "Published"
        | "Archived";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MetricUnit */
    type MetricUnit = "Value"
        | "Count"
        | "Percent"
        | "Milliseconds"
        | "Seconds"
        | "Hours"
        | "Days"
        | "Bits"
        | "Bytes"
        | "Kilobytes"
        | "Megabytes"
        | "Gigabytes"
        | "Terabytes"
        | "Bytes_Per_Second"
        | "MonthlyActiveUsers"
        | "EnableDisable";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/StatisticResetIntervalOption */
    type StatisticResetIntervalOption = "Never"
        | "Hour"
        | "Day"
        | "Week"
        | "Month";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/NameId */
    interface NameId {
        Name?: string,
        Id?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PhotonServicesEnum */
    type PhotonServicesEnum = "Realtime"
        | "Turnbased"
        | "Chat";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/SourceType */
    type SourceType = "Admin"
        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayStreamEventHistory */
    interface PlayStreamEventHistory {
        /** The ID of the trigger that caused this event to be created. */
        ParentTriggerId?: string,
        /** 
         * The ID of the previous event that caused this event to be created by hitting a
         * trigger.
         */
        ParentEventId?: string,
        /** If true, then this event was allowed to trigger subsequent events in a trigger. */
        TriggeredEvents: boolean,
    }

}
