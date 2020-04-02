declare namespace PlayStreamModels {
    interface IBasePlayStreamEvent {
        EventName: string;
    }

    /*
     * PlayStream Group: none
     */

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/batch-action-event */
    interface batch_action_event extends IBasePlayStreamEvent {
        ActionBatchId?: string,
        ActionBatchS3Key?: string,
        HeadProcessorEnvironment?: PlayFabEnvironment,
        HeadStreamEventBatchBeginSequenceId?: string,
        HeadStreamEventBatchEndSequenceId?: string,
        HeadStreamShardId?: string,
    }

    /**
     * This event is triggered when a catalog item is created.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-catalog-item-created
     */
    interface entity_catalog_item_created extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The catalog requested event payload. */
        Payload?: EntityCatalogDraftItemCreatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a catalog item is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-catalog-item-deleted
     */
    interface entity_catalog_item_deleted extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The catalog requested event payload. */
        Payload?: EntityCatalogDraftItemDeletedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a catalog draft item is requested to be published.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-catalog-item-publish-requested
     */
    interface entity_catalog_item_publish_requested extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The catalog requested event payload. */
        Payload?: EntityCatalogDraftItemPublishRequestedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a catalog item is updated.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-catalog-item-updated
     */
    interface entity_catalog_item_updated extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The catalog requested event payload. */
        Payload?: EntityCatalogDraftItemUpdatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/entity-created */
    interface entity_created extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
    }

    /**
     * This event is optionally triggered when an Entity CloudScript function is executed, either by calling the
     * ExecuteCloudScript API with the GeneratePlayStreamEvent option or triggered by a PlayStream event action with the
     * 'Publish results as a PlayStream Event' box checked.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-executed-cloud-script
     */
    interface entity_executed_cloud_script extends IBasePlayStreamEvent {
        /** Result of the CloudScript function, including diagnostic information that is useful for debugging. */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/entity-files-set */
    interface entity_files_set extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The files that were updated. */
        Files?: FileSet[],
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/entity-language-updated */
    interface entity_language_updated extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** Language that was updated */
        Language?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/entity-logged-in */
    interface entity_logged_in extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/entity-objects-set */
    interface entity_objects_set extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** Objects that were updated */
        Objects?: ObjectSet[],
    }

    /**
     * This event is triggered when a User Generated Content item is created.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-user-generated-content-item-created
     */
    interface entity_user_generated_content_item_created extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The User Generated Content requested event payload. */
        Payload?: EntityUserGeneratedContentDraftItemCreatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a User Generated Content item is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-user-generated-content-item-deleted
     */
    interface entity_user_generated_content_item_deleted extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The User Generated Content requested event payload. */
        Payload?: EntityUserGeneratedContentDraftItemDeletedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a User Generated Content draft item is requested to be published.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-user-generated-content-item-publish-requested
     */
    interface entity_user_generated_content_item_publish_requested extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The User Generated Content requested event payload. */
        Payload?: EntityUserGeneratedContentDraftItemPublishRequestedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a User Generated Content item is updated.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-user-generated-content-item-updated
     */
    interface entity_user_generated_content_item_updated extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The User Generated Content requested event payload. */
        Payload?: EntityUserGeneratedContentDraftItemUpdatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a User Generated Content item is reported.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/entity-user-generated-content-item-reported
     */
    interface entity_user_generated_content_item_reported extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** The User Generated Content reported event payload. */
        Payload?: EntityUserGeneratedContentItemReportedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-created */
    interface group_created extends IBasePlayStreamEvent {
        /** The identifier for the entity that created the group to which this event applies. */
        CreatorEntityId?: string,
        /** The type of entity that created the group to which this event applies. */
        CreatorEntityType?: string,
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-deleted */
    interface group_deleted extends IBasePlayStreamEvent {
        /** The identifier for the entity that deleted the group to which this event applies. */
        DeleterEntityId?: string,
        /** The type of entity that deleted the group to which this event applies. */
        DeleterEntityType?: string,
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-members-added */
    interface group_members_added extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The list of entities that were added to the group and role to which this event applies */
        Members?: Member[],
        /** The role ID of the role to which this event applies. */
        RoleId?: string,
        /** The display name of the role to which this event applies. */
        RoleName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-members-removed */
    interface group_members_removed extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The list of entities that were removed from the group to which this event applies */
        Members?: Member[],
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-role-created */
    interface group_role_created extends IBasePlayStreamEvent {
        /** The identifier for that the entity that created the role to which this event applies. */
        CreatorEntityId?: string,
        /** The type of entity that created the role to which this event applies. */
        CreatorEntityType?: string,
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The role ID of the role to which this event applies. */
        RoleId?: string,
        /** The display name of the role to which this event applies. */
        RoleName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-role-deleted */
    interface group_role_deleted extends IBasePlayStreamEvent {
        /** The identifier for the entity that deleted the role to which this event applies. */
        DeleterEntityId?: string,
        /** The type of entity that deleted the role to which this event applies. */
        DeleterEntityType?: string,
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The role ID of the role to which this event applies. */
        RoleId?: string,
        /** The display name of the role to which this event applies. */
        RoleName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-role-members-added */
    interface group_role_members_added extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The list of entities that were added to the group and role to which this event applies */
        Members?: Member[],
        /** The role ID of the role to which this event applies. */
        RoleId?: string,
        /** The display name of the role to which this event applies. */
        RoleName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-role-members-removed */
    interface group_role_members_removed extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The list of entities that were removed from the group to which this event applies */
        Members?: Member[],
        /** The role ID of the role to which this event applies. */
        RoleId?: string,
        /** The display name of the role to which this event applies. */
        RoleName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-role-updated */
    interface group_role_updated extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The new values of the role's changed properties */
        NewValues?: RolePropertyValues,
        /** The previous values of the role's changed properties */
        OldValues?: RolePropertyValues,
        /** The role ID of the role to which this event applies. */
        RoleId?: string,
        /** The display name of the role to which this event applies. */
        RoleName?: string,
        /** The identifier for the entity that updated the container to which this event applies. */
        UpdaterEntityId?: string,
        /** The type of entity that updated the container to which this event applies. */
        UpdaterEntityType?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/group-updated */
    interface group_updated extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The name of the group to which this event applies. */
        GroupName?: string,
        /** The new values of the group's changed properties */
        NewValues?: GroupPropertyValues,
        /** The previous values of the group's changed properties */
        OldValues?: GroupPropertyValues,
        /** The identifier for the entity that updated the group to which this event applies. */
        UpdaterEntityId?: string,
        /** The type of entity that updated the group to which this event applies. */
        UpdaterEntityType?: string,
    }

    /**
     * This event is triggered when an update occurs to a publisher product mapping for a title.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/publisher-product-mapping-changed
     */
    interface publisher_product_mapping_changed extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** The publishing store. */
        Publisher?: PublisherStore,
        /** The product ids for this publisher, mapped to this title. */
        PublisherProducts?: PublisherProduct[],
        UserId?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/studio-created */
    interface studio_created extends IBasePlayStreamEvent {
        /** Authentication provider's id for the user who created the studio */
        CreatorAuthenticationId?: string,
        /** Authentication provider's entity key for the entity that created the studio */
        CreatorEntityKey?: EntityKey,
        /** PlayFab id of the user who created the studio */
        CreatorPlayFabId?: string,
        /** Name of the new studio */
        StudioName?: string,
    }

    /**
     * This event is triggererd when a user accepts a studio invitation.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/studio-user-added
     */
    interface studio_user_added extends IBasePlayStreamEvent {
        /** Authentication provider's ID for this user */
        AuthenticationId?: string,
        /** Authentication provider for the user */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider */
        AuthenticationProviderId?: string,
        /** User's email */
        Email?: string,
        /** Id of the invitation record if user needed to register */
        InvitationId?: string,
        /** PlayFab ID for this user */
        PlayFabId?: string,
        /** Array of studio permissions that were be granted to the user */
        StudioPermissions?: string[],
        /** Dictionary of title id, title permissions that were granted to the user */
        TitlePermissions?: { [key: string]: string | null },
    }

    /**
     * This event is triggererd when a user is invited to a studio.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/studio-user-invited
     */
    interface studio_user_invited extends IBasePlayStreamEvent {
        /** Authentication provider type required for user to register with */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider. */
        AuthenticationProviderId?: string,
        /** Email the invitation was sent to */
        Email?: string,
        /** Expiration of the invitation */
        InvitationExpires?: string,
        /** Id of the invitation if user needed to register */
        InvitationId?: string,
        /**
         * Indicates if the user invited already existed, if so no invitation record was created and the user was automatically
         * attached
         */
        InvitedExistingUser: boolean,
        /** Identity of the user who created the invitation */
        InvitorPlayFabId?: string,
        /** Array of studio permissions which will be granted to the user when registering */
        StudioPermissions?: string[],
        /** Dictionary of title id, title permissions which will be granted to the user when registering */
        TitlePermissions?: { [key: string]: string | null },
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/studio-user-removed */
    interface studio_user_removed extends IBasePlayStreamEvent {
        /** Authentication provider's ID for this user */
        AuthenticationId?: string,
        /** Authentication provider for the user */
        AuthenticationProvider?: AuthenticationProvider,
        /** Authentication provider entity id, if needed by the provider */
        AuthenticationProviderId?: string,
        /** PlayFab ID for this user */
        PlayFabId?: string,
        /** Array of studio permissions that the user had */
        StudioPermissions?: string[],
        /** Dictionary of title id, title permissions that the user had */
        TitlePermissions?: { [key: string]: string | null },
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/tenacy-connector-onboard */
    interface tenacy_connector_onboard extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
    }

    /**
     * This event is triggered when a studio tier is updated.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/studio-tier-updated
     */
    interface studio_tier_updated extends IBasePlayStreamEvent {
        /** Contact Company Name */
        ContactCompanyName?: string,
        /** IsPayAsYouGo PaymentOption */
        IsPayAsYouGo: boolean,
        /** IsReservedCapacity PaymentOption */
        IsReservedCapacity: boolean,
        /** IsReservedCapacityAnnual PaymentOption */
        IsReservedCapacityAnnual: boolean,
        /** Monthly Minimum Price in USD */
        MonthlyMinimumUSD: number,
        /** OveragePricePerMauTiers Definitions */
        OveragePricePerMauTiers?: PaymentOptionPerMauPriceTier[],
        /** Payment System AccountId */
        PaymentSystemAccountId?: string,
        /** PricePerMauTiers Definitions */
        PricePerMauTiers?: PaymentOptionPerMauPriceTier[],
        /** Reserved Capacity MAU */
        ReservedMAU?: number,
        /** Studio Ids */
        StudioIds?: IEnumerable_String,
        /** Tier Display Name */
        TierDisplayName?: string,
        /** Tier Id */
        TierId?: string,
        /** Transaction Id */
        TransactionId?: string,
    }

    /*
     * PlayStream Group: character
     */

    /**
     * This event is triggered when a character consumes an item from their inventory.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-consumed-item
     */
    interface character_consumed_item extends IBasePlayStreamEvent {
        /** Version of the catalog from which the consumed inventory item was created. */
        CatalogVersion?: string,
        /**
         * ID of the catalog item from which the consumed inventory item was created. This can be used to look up the item from the
         * catalog.
         */
        ItemId?: string,
        /** The specific ID of the item that was consumed. */
        ItemInstanceId?: string,
        PlayerId?: string,
        /** For multiple use items, the number of uses that remained before the item was consumed. */
        PreviousUsesRemaining: number,
        TitleId?: string,
        /** For multiple use items, the number of uses remaining after the item was consumed. */
        UsesRemaining: number,
    }

    /**
     * This event is triggered when a character is created for the first time.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-created
     */
    interface character_created extends IBasePlayStreamEvent {
        /** Name of the character. */
        CharacterName?: string,
        /** When the character was created. */
        Created: string,
        PlayerId?: string,
        TitleId?: string,
    }

    /**
     * This event is triggered when an item is granted to a character.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-inventory-item-added
     */
    interface character_inventory_item_added extends IBasePlayStreamEvent {
        /** Optional details about the inventory item. */
        Annotation?: string,
        /** Catalog item IDs of any other items granted to the character along with this one as part of a bundle. */
        BundleContents?: string[],
        /** Catalog version in which the item that was added is defined. */
        CatalogVersion?: string,
        /** Class of the item that was added. */
        Class?: string,
        /** Redeemed coupon (if any) that granted the item. */
        CouponCode?: string,
        /** Display name of the item that was added. */
        DisplayName?: string,
        /** When the item expires. The value is null if the item does not expire. */
        Expiration?: string,
        /** Unique instance ID of the inventory item that was added. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item that was added. */
        ItemId?: string,
        PlayerId?: string,
        /** How many uses the item has, if it has a limited number of uses. */
        RemainingUses?: number,
        TitleId?: string,
    }

    /**
     * This event is triggered when a character statistic is changed.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-statistic-changed
     */
    interface character_statistic_changed extends IBasePlayStreamEvent {
        PlayerId?: string,
        /** Name of the statistic that changed. */
        StatisticName?: string,
        /** Old value of the statistic, before the change. */
        StatisticPreviousValue?: number,
        /** New value of the statistic, after the change. */
        StatisticValue: number,
        TitleId?: string,
        /**
         * Version of the statistic that changed. This is relevant for statistics that reset, since each time the statistic resets
         * the version increments.
         */
        Version: number,
    }

    /**
     * This event is triggered when a character statistic is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-statistic-deleted
     */
    interface character_statistic_deleted extends IBasePlayStreamEvent {
        PlayerId?: string,
        /** Name of the statistic that was deleted. */
        StatisticName?: string,
        TitleId?: string,
        /**
         * Version of the statistic that changed. This is relevant for statistics that reset, since each time the statistic resets
         * the version increments.
         */
        Version: number,
    }

    /**
     * This event is triggered when the character makes a purchase using virtual currency.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-vc-item-purchased
     */
    interface character_vc_item_purchased extends IBasePlayStreamEvent {
        /** Version of the catalog from which the item was purchased. */
        CatalogVersion?: string,
        /** Currency that was used to purchase the item. */
        CurrencyCode?: string,
        /** Identifier of the catalog item that was purchased. */
        ItemId?: string,
        PlayerId?: string,
        /** Unique identifier of the purchase transaction. */
        PurchaseId?: string,
        /** Quantity of items that were purchased. */
        Quantity: number,
        /** The StoreId where the item was purchased. */
        StoreId?: string,
        TitleId?: string,
        /** Price paid per item, expressed in the virtual currency. */
        UnitPrice: number,
    }

    /**
     * This event is triggered when a character's virtual currency balance changes.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/character-virtual-currency-balance-changed
     */
    interface character_virtual_currency_balance_changed extends IBasePlayStreamEvent {
        /** Id of the order that triggered the balance changes */
        OrderId?: string,
        PlayerId?: string,
        TitleId?: string,
        /** New virtual currency balance after the change. */
        VirtualCurrencyBalance: number,
        /** Virtual currency whose balance changed. */
        VirtualCurrencyName?: string,
        /** Old virtual currency balance before the change. */
        VirtualCurrencyPreviousBalance: number,
    }

    /*
     * PlayStream Group: partner
     */

    /**
     * This event is triggered when a display name is filtered by community sift.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/display-name-filtered
     */
    interface display_name_filtered extends IBasePlayStreamEvent {
        /** Value of the display name that was filtered */
        DisplayName?: string,
        /**
         * If event occurs at account creation, then no player exists yet. Otherwise, the player whose displayname update was
         * filtered
         */
        PlayerId?: string,
    }

    /**
     * This event is triggered when a display name is filtered by community sift only if there is an associated player EntityId
     * for the event.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-display-name-filtered
     */
    interface player_display_name_filtered extends IBasePlayStreamEvent {
        /** Value of the display name that was filtered */
        DisplayName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player connects to a Photon Cloud application and authenticates with PlayFab using Photon
     * custom authentication.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-photon-session-authenticated
     */
    interface player_photon_session_authenticated extends IBasePlayStreamEvent {
        /** Unique identifier of the Photon Cloud application to which the player is connected */
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
     * This event is triggered when an email confirmation link is clicked.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/auth-token-validated
     */
    interface auth_token_validated extends IBasePlayStreamEvent {
        /** The email template id, if the auth token was sent via an email template. */
        EmailTemplateId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** The email token in the confirmation link that was clicked. */
        Token?: string,
    }

    /**
     * This event is triggered when a GDPR delete is finished.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-deleted-master-player
     */
    interface title_deleted_master_player extends IBasePlayStreamEvent {
        /** Identitfying information for title entered by developer. */
        MetaData?: string,
        /** Master Player Id who was deleted. */
        PlayerId?: string,
        /** Receipt Id of the delete that has been finished. */
        ReceiptId?: string,
    }

    /**
     * This event is triggered when an action linked to a segmentation change or event rule executes on a player.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-action-executed
     */
    interface player_action_executed extends IBasePlayStreamEvent {
        /** Name of the action that was triggered. */
        ActionName?: string,
        /** Information about the error that occurred during execution, if it failed to complete. */
        Error?: ActionExecutionError,
        /** Action execution time in milliseconds. */
        ExecutionDuration: number,
        /** The object returned from the action execution, if it completed. */
        ExecutionResult?: any,
        /** Time that the action was scheduled for execution. */
        ScheduledTimestamp: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Time that the triggering event or segmentation change occurred. */
        TriggeredTimestamp: string,
        /** Event rule match, if any, that triggered the action. */
        TriggeringEventRuleMatch?: EventRuleMatch,
        /** Player segmentation change, if any, that triggered the action. */
        TriggeringSegmentMembershipChange?: SegmentMembershipChange,
    }

    /**
     * This event is triggered by an attribution tracking Add-on when a player is matched to a paid acquisition campaign.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-campaign-attribution
     */
    interface player_ad_campaign_attribution extends IBasePlayStreamEvent {
        /** The ID of the campaign, as passed in by the attribution provider. */
        CampaignId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player closes an ad.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-closed
     */
    interface player_ad_closed extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player creates a new account for a title. Note: this event is triggered once per title
     * rather than once per publisher.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-added-title
     */
    interface player_added_title extends IBasePlayStreamEvent {
        /** Player's display name when they added this title. */
        DisplayName?: string,
        /** Authentication method used to register player's account. */
        Platform?: LoginIdentityProvider,
        /** Unique ID for the player's account associated with the Origination authentication method. */
        PlatformUserId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player finishes an ad.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-ended
     */
    interface player_ad_ended extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player opens an ad.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-opened
     */
    interface player_ad_opened extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player recieves an ad reward.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-rewarded
     */
    interface player_ad_rewarded extends IBasePlayStreamEvent {
        /** Debug messages from the reward actions */
        ActionGroupDebugMessages?: string[],
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Views this player has remaining for the placement's window, if applicable */
        ViewsRemainingThisPeriod?: number,
    }

    /**
     * Event triggered when reported value of ad view is recorded
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-activity-valued
     */
    interface player_ad_activity_valued extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /**
         * Share of the revenue for this ad view (calculated as total revenue for placement devided by total views for that
         * placement in that time window)
         */
        RevenueShare: number,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player starts an ad.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ad-started
     */
    interface player_ad_started extends IBasePlayStreamEvent {
        /** Id of the placement */
        AdPlacementId?: string,
        /** Name of the placement */
        AdPlacementName?: string,
        /** Ad unit type */
        AdUnit?: string,
        /** Id of the reward */
        RewardId?: string,
        /** Name of the reward */
        RewardName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player is banned.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-banned
     */
    interface player_banned extends IBasePlayStreamEvent {
        /** When the ban expires. The value is null if the ban is permanent. */
        BanExpiration?: string,
        /** ID of the ban. Useful for tracking unique bans, if the player has been banned before. */
        BanId?: string,
        /** The reason why the player was banned. */
        BanReason?: string,
        /** Whether this ban is permanent. */
        PermanentBan: boolean,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player's avatar URL is changed.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-changed-avatar
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
     * This event is triggered when a player completes the password reset process by visiting the link URL that was sent to
     * them and choosing a new password.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-completed-password-reset
     */
    interface player_completed_password_reset extends IBasePlayStreamEvent {
        /** IP address from which the password reset process was completed. */
        CompletedFromIPAddress?: string,
        /** When the password reset process was completed. */
        CompletionTimestamp: string,
        /** Source that initiated the password reset process. */
        InitiatedBy?: PasswordResetInitiationSource,
        /** IP address from which the password reset process was initiated. */
        InitiatedFromIPAddress?: string,
        /** When the password reset process was initiated. */
        InitiationTimestamp: string,
        /** Expiration time for the password reset link. */
        LinkExpiration: string,
        /** Unique identifier for the password reset link. This cannot be used to complete the reset. */
        PasswordResetId?: string,
        /** Email address to which the password reset link was sent. */
        RecoveryEmailAddress?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player consumes an item from their inventory.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-consumed-item
     */
    interface player_consumed_item extends IBasePlayStreamEvent {
        /** Version of the catalog from which the consumed inventory item was created. */
        CatalogVersion?: string,
        /**
         * ID of the catalog item from which the consumed inventory item was created. This can be used to look up the item from the
         * catalog.
         */
        ItemId?: string,
        /** The specific ID of the item that was consumed. */
        ItemInstanceId?: string,
        /** For multiple use items, the number of uses that remained before the item was consumed. */
        PreviousUsesRemaining: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** For multiple use items, the number of uses remaining after the item was consumed. */
        UsesRemaining: number,
    }

    /**
     * This event is triggered when a player account is created for the first time. Note: this event is only triggered once per
     * publisher, not once per title.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-created
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
     * This event is triggered when a player's data is exported.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-data-exported
     */
    interface player_data_exported extends IBasePlayStreamEvent {
        /** URL to download the export. */
        ExportDownloadUrl?: string,
        /** Receipt ID of the export job. This should correspond to the receipt ID returned by the export API call. */
        JobReceiptId?: string,
        /** The time of export request. */
        RequestTime: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered once after the player logs in based on the settings for your title.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-device-info
     */
    interface player_device_info extends IBasePlayStreamEvent {
        DeviceInfo?: { [key: string]: any },
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player's display name is changed.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-displayname-changed
     */
    interface player_displayname_changed extends IBasePlayStreamEvent {
        /** New display name after the change. */
        DisplayName?: string,
        /** Previous display name before the change. */
        PreviousDisplayName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is optionally triggered when a CloudScript function is executed, either by calling the ExecuteCloudScript API
     * with the GeneratePlayStreamEvent option or triggered by a PlayStream event action with the 'Publish results as a
     * PlayStream Event' box checked.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-executed-cloudscript
     */
    interface player_executed_cloudscript extends IBasePlayStreamEvent {
        /** Result of the CloudScript function, including diagnostic information that is useful for debugging. */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when an item is granted to a player.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-inventory-item-added
     */
    interface player_inventory_item_added extends IBasePlayStreamEvent {
        /** Optional details about the inventory item. */
        Annotation?: string,
        /** Catalog item IDs of any other items granted to the player along with this one as part of a bundle. */
        BundleContents?: string[],
        /** Catalog version in which the item that was added is defined. */
        CatalogVersion?: string,
        /** Class of the item that was added. */
        Class?: string,
        /** Redeemed coupon (if any) that granted the item. */
        CouponCode?: string,
        /** Display name of the item that was added. */
        DisplayName?: string,
        /** When the item expires. The value is null if the item does not expire. */
        Expiration?: string,
        /** Unique instance ID of the inventory item that was added. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item that was added. */
        ItemId?: string,
        /** How many uses the item has, if it has a limited number of uses. */
        RemainingUses?: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player joins a multiplayer game session.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-joined-lobby
     */
    interface player_joined_lobby extends IBasePlayStreamEvent {
        /** Game mode of the game lobby the player joined. */
        GameMode?: string,
        /** Unique ID of the game lobby the player joined. */
        LobbyId?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the machine running the custom game server. */
        ServerHost?: string,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Publicly visible IPV4 address of the machine running the custom game server. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the machine running the custom game server. */
        ServerIPV6Address?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player leaves a multiplayer game session.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-left-lobby
     */
    interface player_left_lobby extends IBasePlayStreamEvent {
        /** Game mode of the game session the player joined. */
        GameMode?: string,
        /** Unique ID of the game session the player joined. */
        LobbyId?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the machine running the custom game server. */
        ServerHost?: string,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Publicly visible IPV4 address of the machine running the custom game server. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the machine running the custom game server. */
        ServerIPV6Address?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a new authentication method is linked to a player's account.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-linked-account
     */
    interface player_linked_account extends IBasePlayStreamEvent {
        /** Player's email linked with the given provider */
        Email?: string,
        /** Authentication method being linked to a player's account. */
        Origination?: LoginIdentityProvider,
        /** Player's identity under authentication method being linked to player's account. */
        OriginationUserId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Player's username linked with the given provider */
        Username?: string,
    }

    /**
     * This event is triggered when a player logs in.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-logged-in
     */
    interface player_logged_in extends IBasePlayStreamEvent {
        /** Player's current assignment of variants (values of experiments they are currently a part of. */
        ExperimentVariants?: string[],
        /**
         * Player's IP address, if known. IP address is obtained from the source address of the connection used to issue the login
         * API request and is not always available or accurate. If the client IP address obfuscation setting is enabled for the
         * title, then the value is the obfuscated result.
         */
        IPV4Address?: string,
        /**
         * Player's geographic location, if known. Location is estimated from factors such as IP address and is not always
         * available or accurate.
         */
        Location?: EventLocation,
        /** Authentication method used to login the player. */
        Platform?: LoginIdentityProvider,
        /** Player's identity under the authentication method used to login the player. */
        PlatformUserId?: string,
        /** The display name that's set in the identity provider that the player is authenticated with. */
        PlatformUserName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player is assigned to a game lobby and issued a connection ticket, before the player has
     * connected to the game lobby.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-matched-with-lobby
     */
    interface player_matched_with_lobby extends IBasePlayStreamEvent {
        /** Game mode of the game lobby the player was assigned to. */
        GameMode?: string,
        /** Unique ID of the game lobby the player was assigned to. */
        LobbyId?: string,
        /** Region in which the game server lives that the player was assigned to. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the machine running the custom game server. */
        ServerHost?: string,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Publicly visible IPV4 address of the machine running the custom game server. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the machine running the custom game server. */
        ServerIPV6Address?: string,
        /** Network port assigned to the custom game server. */
        ServerPort: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player is sent a link to reset their password.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-password-reset-link-sent
     */
    interface player_password_reset_link_sent extends IBasePlayStreamEvent {
        /** Source that initiated the password reset process. */
        InitiatedBy?: PasswordResetInitiationSource,
        /** IP address from which the password reset process was initiated. */
        InitiatedFromIPAddress?: string,
        /** Expiration time for the password reset link. */
        LinkExpiration: string,
        /** Unique identifier for the password reset link. This cannot be used to complete the reset. */
        PasswordResetId?: string,
        /** Email address to which the password reset link was sent. */
        RecoveryEmailAddress?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when the second step of the payment process completes, paying for the purchase.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-paid-for-purchase
     */
    interface player_paid_for_purchase extends IBasePlayStreamEvent {
        /** Purchase order identifier. */
        OrderId?: string,
        /** Provider used for the transaction. */
        ProviderData?: string,
        /** Payment provider to use to fund the purchase. */
        ProviderName?: string,
        /** A token generated by the provider to authenticate the request (provider-specific). */
        ProviderToken?: string,
        /** URL to the purchase provider page that details the purchase. */
        PurchaseConfirmationPageURL?: string,
        /** Currency for the transaction, may be a virtual currency or real money. */
        PurchaseCurrency?: string,
        /** Cost of the transaction. */
        PurchasePrice: number,
        /** Status of the transaction. */
        Status?: TransactionStatus,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Current virtual currency balances for the user. */
        VirtualCurrencyBalances?: { [key: string]: number },
        /** Virtual currencies granted by the transaction, if any. */
        VirtualCurrencyGrants?: { [key: string]: number },
    }

    /**
     * This event is triggered for the top-ranked players on a leaderboard when the leaderboard version changes (e.g. when a
     * leaderboard statistic version is incremented). The maximum number of leaderboard entries for which the event is
     * generated is controlled by the "Leaderboard version change top rank events sent" title limit.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-ranked-on-leaderboard-version
     */
    interface player_ranked_on_leaderboard_version extends IBasePlayStreamEvent {
        /** Source of the values for the leaderboard. */
        LeaderboardSource?: LeaderboardSource,
        /** Player's rank on the leaderboard. */
        Rank: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Player's leaderboard value. */
        Value: number,
        /**
         * Version of the leaderboard on which the player is ranked. For player statistic leaderboards, this matches the version of
         * the statistic.
         */
        Version: number,
        /** Behavior with respect to the leaderboard values when the version changed. */
        VersionChangeBehavior?: LeaderboardVersionChangeBehavior,
    }

    /**
     * This event is triggered when a player makes a real money purchase, and generates revenue for the game.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-realmoney-purchase
     */
    interface player_realmoney_purchase extends IBasePlayStreamEvent {
        /** Player's current assignment of variants (values of experiments they are currently a part of. */
        ExperimentVariants?: string[],
        /** Unique identifier of the order. */
        OrderId?: string,
        /** Total value of the purchase in the system currency (defaults to USD). */
        OrderTotal: number,
        /** Payment provider used to make the purchase. */
        PaymentProvider?: string,
        /** Type of payment used to make the purchase. */
        PaymentType?: PaymentType,
        /** The ItemIds from the catalog of the purchased items, if applicable. */
        PurchasedProduct?: string[],
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Local currency used to make the purchase, if applicable. */
        TransactionCurrency?: Currency,
        /** Unique identifier of the transaction. */
        TransactionId?: string,
        /** Total value of the purchase in the local currency used to make the purchase, if applicable. */
        TransactionTotal?: number,
    }

    /**
     * This event is triggered when a player attempts to make a real money purchase and the purchase receipt is being
     * validated.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-receipt-validation
     */
    interface player_receipt_validation extends IBasePlayStreamEvent {
        /** The error that occured during a receipt validation. */
        Error?: string,
        /** Payment provider used to make the purchase attempt. */
        PaymentProvider?: string,
        /** Type of payment used to make the purchase attempt. */
        PaymentType?: PaymentType,
        /** The receipt data during a real money purchase event attempt. */
        ReceiptContent?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Indicates if the receipt is valid. */
        Valid: boolean,
    }

    /**
     * This event is triggered when a player redeems a coupon.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-redeemed-coupon
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
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-registered-push-notifications
     */
    interface player_registered_push_notifications extends IBasePlayStreamEvent {
        /** Unique device token registered for push notifications. */
        DeviceToken?: string,
        /** Platform on which the player is registering for push notifications. */
        Platform?: PushNotificationPlatform,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player account for a title is removed. Note: this event is triggered once per title
     * rather than once per publisher.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-removed-title
     */
    interface player_removed_title extends IBasePlayStreamEvent {
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player is reported by another player as abusive.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-reported-as-abusive
     */
    interface player_reported_as_abusive extends IBasePlayStreamEvent {
        /** Comment submitted by the player who made the report. */
        Comment?: string,
        /** Player ID of the player who made the report. */
        ReportedByPlayer?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when PlayFab makes an internal adjustment to a player profile.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-set-profile-property
     */
    interface player_set_profile_property extends IBasePlayStreamEvent {
        /** Property of the profile to be set */
        Property?: PlayerProfileProperty,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Value to set to */
        Value?: any,
    }

    /**
     * This event is triggered when a player starts a purchase.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-started-purchase
     */
    interface player_started_purchase extends IBasePlayStreamEvent {
        /** Catalog version for the items to be purchased. Defaults to most recent catalog. */
        CatalogVersion?: string,
        /** Cart items to be purchased. */
        Contents?: CartItem[],
        /** Purchase order identifier. */
        OrderId?: string,
        /** Store through which to purchase items. If not set, prices will be pulled from the catalog itself. */
        StoreId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player statistic is changed.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-statistic-changed
     */
    interface player_statistic_changed extends IBasePlayStreamEvent {
        /** Aggregation method applied for calculating the new value of the statistic. */
        AggregationMethod?: StatisticAggregationMethod,
        /** Unique ID of the statistic that changed. */
        StatisticId: number,
        /** Name of the statistic that changed. */
        StatisticName?: string,
        /** Old value of the statistic, before the change. */
        StatisticPreviousValue?: number,
        /** New value of the statistic, after the change. */
        StatisticValue: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /**
         * Version of the statistic that changed. This is relevant for statistics that reset, since each time the statistic resets
         * the version increments.
         */
        Version: number,
    }

    /**
     * This event is triggered when a player statistic is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-statistic-deleted
     */
    interface player_statistic_deleted extends IBasePlayStreamEvent {
        /** Unique ID of the statistic that was deleted. */
        StatisticId: number,
        /** Name of the statistic that was deleted. */
        StatisticName?: string,
        /** Old value of the statistic, before being deleted. */
        StatisticPreviousValue?: number,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /**
         * Version of the statistic. This is relevant for statistics that reset, since each time the statistic resets the version
         * increments.
         */
        Version: number,
    }

    /**
     * This event is triggered when a tag is added to a player profile.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-tag-added
     */
    interface player_tag_added extends IBasePlayStreamEvent {
        /** Namespace for this tag */
        Namespace?: string,
        /** Name of the tag that is added. */
        TagName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a tag is removed from a player profile.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-tag-removed
     */
    interface player_tag_removed extends IBasePlayStreamEvent {
        /** Namespace for this tag */
        Namespace?: string,
        /** Name of the tag that is removed. */
        TagName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a CloudScript function is run as the result of a PlayStream action, and the 'Publish
     * results as a PlayStream Event' box was checked.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-triggered-action-executed-cloudscript
     */
    interface player_triggered_action_executed_cloudscript extends IBasePlayStreamEvent {
        /** Result of the CloudScript function, including an error information. Useful for debugging. */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** The full JSON data of the event that triggered this CloudScript function to run. Useful for debugging. */
        TriggeringEventData?: any,
        /** Name of the event that triggered this CloudScript function to run. */
        TriggeringEventName?: string,
        /** JSON data profile of the player that triggered this CloudScript function to run. */
        TriggeringPlayer?: PlayerProfile,
    }

    /**
     * This event is triggered when an authentication method is unlinked from a player's account.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-unlinked-account
     */
    interface player_unlinked_account extends IBasePlayStreamEvent {
        /** Authentication method being unlinked from a player's account. */
        Origination?: LoginIdentityProvider,
        /** Player's identity under authentication method being unlinked from player's account. */
        OriginationUserId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player updates a contact email on their profile.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-updated-contact-email
     */
    interface player_updated_contact_email extends IBasePlayStreamEvent {
        /** The name of the contact email that was updated or added in the player's profile. */
        EmailName?: string,
        /** The contact email updated or added in the player's profile. */
        NewEmailAddress?: string,
        /** The previous contact email updated in the player's profile. */
        PreviousEmailAddress?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when the player makes a purchase using virtual currency.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-vc-item-purchased
     */
    interface player_vc_item_purchased extends IBasePlayStreamEvent {
        /** Version of the catalog from which the item was purchased. */
        CatalogVersion?: string,
        /** Currency that was used to purchase the item. */
        CurrencyCode?: string,
        /** Identifier of the catalog item that was purchased. */
        ItemId?: string,
        /** Unique identifier of the purchase transaction. */
        PurchaseId?: string,
        /** Quantity of items that were purchased. */
        Quantity: number,
        /** The StoreId where the item was purchased. */
        StoreId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** Price paid per item, expressed in the virtual currency. */
        UnitPrice: number,
    }

    /**
     * This event is triggered when a contact email is verified for a player.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-verified-contact-email
     */
    interface player_verified_contact_email extends IBasePlayStreamEvent {
        /** The email address of the player's contact email that was verified. */
        EmailAddress?: string,
        /** The name of the player's contact email that was verified. */
        EmailName?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player's virtual currency balance changes.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/player-virtual-currency-balance-changed
     */
    interface player_virtual_currency_balance_changed extends IBasePlayStreamEvent {
        /** Id of the order that triggered the balance changes */
        OrderId?: string,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** New virtual currency balance after the change. */
        VirtualCurrencyBalance: number,
        /** Virtual currency whose balance changed. */
        VirtualCurrencyName?: string,
        /** Old virtual currency balance before the change. */
        VirtualCurrencyPreviousBalance: number,
    }

    /**
     * This event is triggered when a push notification is sent or fails to be sent to a player.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/sent-push-notification
     */
    interface sent_push_notification extends IBasePlayStreamEvent {
        /** The content of the push notification body, truncated to 4096 characters. */
        Body?: string,
        /** The error that occurred if the push notification failed to be sent. */
        ErrorMessage?: string,
        /** The name of the error that occurred if the push notification failed to be sent. */
        ErrorName?: string,
        /** The language the push notification was sent in if a matching localized template was used. */
        Language?: string,
        /** The push notification template id during a send push notification attempt. */
        PushNotificationTemplateId?: string,
        /** The push notification template name during a send push notification attempt. */
        PushNotificationTemplateName?: string,
        /** The content of the push notification subject, truncated to 1024 characters. */
        Subject?: string,
        /** Indicates whether the push notification was successfully sent. */
        Success: boolean,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when an email is sent or fails to send to a player.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/sent-email
     */
    interface sent_email extends IBasePlayStreamEvent {
        /** The content of the email body, truncated to 4096 characters. */
        Body?: string,
        /** The name of the player's contact email the email was sent to. */
        EmailName?: string,
        /** The email template id during a send email attempt. */
        EmailTemplateId?: string,
        /** The email template name during a send email attempt. */
        EmailTemplateName?: string,
        /** The email template type during a send email attempt. */
        EmailTemplateType?: EmailTemplateType,
        /** The error that occurred if an email failed to send. */
        ErrorMessage?: string,
        /** The name of the error that occurred if an email failed to send. */
        ErrorName?: string,
        /** The language the email was sent in */
        Language?: string,
        /** The content of the email subject, truncated to 1024 characters. */
        Subject?: string,
        /** Indicates if the email was successfully sent. */
        Success: boolean,
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
        /** The auth token included in the sent email as part of a confirmation URL. */
        Token?: string,
    }

    /*
     * PlayStream Group: session
     */

    /**
     * This event is triggered every time the application enters or exits focus on the player's device.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/client-focus-change
     */
    interface client_focus_change extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp?: string,
        /** Payload that this entity is a child of. */
        Payload?: ClientFocusChangePayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a new client session starts.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/client-session-start
     */
    interface client_session_start extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalEventId?: string,
        /**
         * The original time (in UTC) associated with this event before it was posted to PlayFab. The value might differ from the
         * Timestamp value, which is set at the time the event is received by the server.
         */
        OriginalTimestamp: string,
        /** Payload that this entity is a child of. */
        Payload?: ClientSessionStartPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer game lobby ends.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/gamelobby-ended
     */
    interface gamelobby_ended extends IBasePlayStreamEvent {
        /** Game mode of the game lobby the player joined. */
        GameMode?: string,
        /** The time (in UTC) when this game started. */
        GameStartTime?: string,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the host running the custom game server. */
        ServerHost?: string,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Publicly visible IPV4 address of the host running the custom game server. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the host running the custom game server. */
        ServerIPV6Address?: string,
        /** Network port of the host assigned to the custom game server. */
        ServerPort: number,
        /** Custom tags associated with the game lobby. */
        Tags?: { [key: string]: string | null },
        /** The ID of the title associated with this game lobby */
        TitleId?: string,
    }

    /**
     * This event is triggered when a multiplayer game lobby starts.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/gamelobby-started
     */
    interface gamelobby_started extends IBasePlayStreamEvent {
        /** Custom command line arguments passed to the server process running the game lobby. */
        CustomCommandLineData?: string,
        /** Webhook endpoint of the custom matchmaker (if any) that started the game lobby. */
        CustomMatchmakerEndpoint?: string,
        /** Game mode of the game lobby the player joined. */
        GameMode?: string,
        /** Configuration data passed to the server process running the game lobby. */
        GameServerData?: string,
        /** Maximum number of players that may be connected to the game lobby. */
        MaxPlayers?: number,
        /** Region in which the game server lives that the player joined. */
        Region?: string,
        /** Build version of the custom game server running the lobby. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the host running the custom game server. */
        ServerHost?: string,
        /** Unique identifier of the machine hosting the game lobby. */
        ServerHostInstanceId?: string,
        /** Publicly visible IPV4 address of the host running the custom game server. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the host running the custom game server. */
        ServerIPV6Address?: string,
        /** Network port of the host assigned to the custom game server. */
        ServerPort: number,
        /** Custom tags associated with the game lobby. */
        Tags?: { [key: string]: string | null },
        /** The ID of the title associated with this game lobby */
        TitleId?: string,
    }

    /**
     * This event is triggered when a multiplayer game lobby starts.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/gameserverhost-started
     */
    interface gameserverhost_started extends IBasePlayStreamEvent {
        /** Unique identifier of the host. */
        InstanceId?: string,
        /** Server hosting provider of host machine or VM. */
        InstanceProvider?: string,
        /** Provider specific type of the host machine or VM. */
        InstanceType?: string,
        /** Region in which the host is running. */
        Region?: string,
        /** Build version of the custom game server installed on the host. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the host. */
        ServerHost?: string,
        /** Publicly visible IPV4 address of the host. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the host. */
        ServerIPV6Address?: string,
        /** Time that the host was started. */
        StartTime: string,
        /** The ID of the title associated with this host */
        TitleId?: string,
    }

    /**
     * This event is triggered when a multiplayer game lobby stops.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/gameserverhost-stopped
     */
    interface gameserverhost_stopped extends IBasePlayStreamEvent {
        /** Unique identifier of the host. */
        InstanceId?: string,
        /** Server hosting provider of host machine or VM. */
        InstanceProvider?: string,
        /** Provider specific type of the host machine or VM. */
        InstanceType?: string,
        /** Region in which the host is running. */
        Region?: string,
        /** Build version of the custom game server installed on the host. */
        ServerBuildVersion?: string,
        /** Publicly visible domain name or IPV4 address of the host. */
        ServerHost?: string,
        /** Publicly visible IPV4 address of the host. */
        ServerIPV4Address?: string,
        /** Publicly visible IPV6 address of the host. */
        ServerIPV6Address?: string,
        /** Time that the host was started. */
        StartTime: string,
        /** Reason that the host was stopped. */
        StopReason?: GameServerHostStopReason,
        /** Time that the host was stopped. */
        StopTime: string,
        /** The ID of the title associated with this host */
        TitleId?: string,
    }

    /**
     * This event is triggered when a session ends
     * https://docs.microsoft.com/gaming/playfab/api-references/events/session-ended
     */
    interface session_ended extends IBasePlayStreamEvent {
        /** Whether or not the session was marked as a crash */
        Crashed: boolean,
        /**
         * The time the session was explicitly ended at, clamped to 24 hours. This can differ significantly from the event
         * timestamp if the game crashed
         */
        EndTime: string,
        /** The total kilobytes written to the S3 file associated with this session */
        KilobytesWritten?: number,
        /** The length of the session in milliseconds */
        SessionLengthMs: number,
        /** The ID of the title associated with this session */
        TitleId?: string,
        /** The ID of the user associated with this session */
        UserId?: string,
    }

    /**
     * This event is triggered when a session starts.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/session-started
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
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-aborted-task
     */
    interface title_aborted_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** ID of the aborted task instance */
        TaskInstanceId?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when new CloudScript is uploaded to PlayFab.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-added-cloudscript
     */
    interface title_added_cloudscript extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Whether the CloudScript that was uploaded is live. */
        Published: boolean,
        /** Revision number of the CloudScript file that was added. */
        Revision: number,
        /**
         * Names of the individual script files modified. Currently this is just 'CloudScript.js' but later we will support
         * multiple files.
         */
        ScriptNames?: string[],
        UserId?: string,
        /** Version number of the CloudScript file that was added. */
        Version: number,
    }

    /**
     * This event is triggered when a new game build is uploaded for a game title.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-game-build-added
     */
    interface title_game_build_added extends IBasePlayStreamEvent {
        /** Unique identifier of the build that was uploaded. */
        BuildId?: string,
        DeveloperId?: string,
        /** The maximum number of game sessions that can be run on a single server. */
        MaxGamesPerHost: number,
        /** The minimum number of free slots to maintain across all servers for this build. */
        MinFreeGameSlots: number,
        /** This build is being deployed in these regions and will shortly be available for players to join. */
        Regions?: Region[],
        UserId?: string,
    }

    /**
     * This event is triggered when an API Features setting is changed for the title.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-api-settings-changed
     */
    interface title_api_settings_changed extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Settings values before the change. */
        PreviousSettingsValues?: APISettings,
        /** Settings values after the change. */
        SettingsValues?: APISettings,
        UserId?: string,
    }

    /**
     * This event is triggered when a catalog is changed.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-catalog-updated
     */
    interface title_catalog_updated extends IBasePlayStreamEvent {
        /** Version of the catalog that was updated. */
        CatalogVersion?: string,
        /** Was the catalog deleted. */
        Deleted: boolean,
        DeveloperId?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when a single IP address generates too many API calls to PlayFab and is throttled.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-client-rate-limited-alert
     */
    interface title_client_rate_limited_alert extends IBasePlayStreamEvent {
        /** Unique identifier of the alert that triggered this event. */
        AlertEventId?: string,
        /** State of the alert. Values include Triggered, Recovered, ReTriggered. */
        AlertState?: AlertStates,
        /** The PlayFab API that was called too frequently. */
        API?: string,
        /** Error message that was returned to the client. */
        ErrorCode?: string,
        /** URL of an image graph of the counter that triggered the alert. */
        GraphUrl?: string,
        /** Level of the alert. Values include Warn, Alert, Critical. */
        Level?: AlertLevel,
    }

    /**
     * This event is triggered when a scheduled task has completed
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-completed-task
     */
    interface title_completed_task extends IBasePlayStreamEvent {
        /** Timestamp on when the task was aborted. Null if task never was aborted. */
        AbortedAt?: string,
        /** Whether the task was aborted. */
        IsAborted: boolean,
        /** Result of the task run, whether it has succeeded, failed or aborted. */
        Result?: TaskInstanceStatus,
        /** Summary of the task run. Different task types have different summary structure. */
        Summary?: any,
        /** ID of the running instance of the task */
        TaskInstanceId?: string,
        /** Type of the scheduled task */
        TaskType?: string,
    }

    /**
     * This event is triggered when a task is created.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-created-task
     */
    interface title_created_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
    }

    /**
     * This event is triggered when a game title is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-deleted
     */
    interface title_deleted extends IBasePlayStreamEvent {
    }

    /**
     * This event is triggered when a task is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-deleted-task
     */
    interface title_deleted_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
    }

    /**
     * This event is triggererd when a title exceeds a service limit and receives an error.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-exceeded-limit
     */
    interface title_exceeded_limit extends IBasePlayStreamEvent {
        /** Additional details about the exceeded limit */
        Details?: { [key: string]: any },
        /** The display name of the limit that was exceeded. */
        LimitDisplayName?: string,
        /** The unique identifier of the limit that was exceeded. */
        LimitId?: string,
        /** The limit value that was exceeded. */
        LimitValue: number,
        /** The unit of the limit that was exceeded. */
        Unit?: MetricUnit,
        /** The value that exceeded the limit. */
        Value: number,
    }

    /**
     * This event is triggered when a game title experiences a high rate of errors.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-high-error-rate-alert
     */
    interface title_high_error_rate_alert extends IBasePlayStreamEvent {
        /** Unique identifier of the alert that triggered this event. */
        AlertEventId?: string,
        /** State of the alert. Values include Triggered, Recovered, ReTriggered. */
        AlertState?: AlertStates,
        /** The PlayFab API that is generating the high rate of errors. */
        API?: string,
        /** Error message that was returned to the client. */
        ErrorCode?: string,
        /** URL of an image graph of the counter that triggered the alert. */
        GraphUrl?: string,
        /** Level of the alert. Values include Warn, Alert, Critical. */
        Level?: AlertLevel,
    }

    /**
     * This event is triggered when a title initiates the account recovery process for a player.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-initiated-player-password-reset
     */
    interface title_initiated_player_password_reset extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Unique identifier for the password reset link. This cannot be used to complete the reset. */
        PasswordResetId?: string,
        /** Player's account ID. */
        PlayerId?: string,
        /** Email address to which the account recovery email was sent. */
        PlayerRecoveryEmailAddress?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when a title changes a service limit.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-limit-changed
     */
    interface title_limit_changed extends IBasePlayStreamEvent {
        /** The display name of the limit that changed. */
        LimitDisplayName?: string,
        /** The unique identifier of the limit that changed. */
        LimitId?: string,
        /** The price of the limit level in US Dollars before the change, if any. */
        PreviousPriceUSD?: number,
        /** The limit value before the change, if any. */
        PreviousValue?: number,
        /** The price of the limit level in US Dollars, if any. */
        PriceUSD?: number,
        /** The unique identifier of the limit change transaction. */
        TransactionId?: string,
        /** The unit of the limit that changed. */
        Unit?: MetricUnit,
        /** The limit value after the change, if any. */
        Value?: number,
    }

    /**
     * This event is triggered when any of the game build settings are modified.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-game-build-modified
     */
    interface title_game_build_modified extends IBasePlayStreamEvent {
        /** Unique identifier of the build that was modified. */
        BuildId?: string,
        DeveloperId?: string,
        /** The maximum number of game sessions that can be run on a single server. */
        MaxGamesPerHost: number,
        /** The minimum number of free slots to maintain across all servers for this build. */
        MinFreeGameSlots: number,
        /** List of regions where the build has been deployed. */
        Regions?: Region[],
        UserId?: string,
    }

    /**
     * This event is triggered when a title news is created or updated.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-news-updated
     */
    interface title_news_updated extends IBasePlayStreamEvent {
        /** When the title news was initially created. */
        DateCreated: string,
        /** Id of the news that is new or updated. */
        NewsId?: string,
        /** The current title of the news that is new or updated. */
        NewsTitle?: string,
        /** The current status of the news that is new or updated. */
        Status?: NewsStatus,
    }

    /**
     * This event is triggered when an update occurs to a title's permission policies.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-permission-policy-changed
     */
    interface title_permission_policy_changed extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** The contents new policy. */
        NewPolicy?: string,
        /** The name of the policy that was changed */
        PolicyName?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when a profile view constraint is changed for the title.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-profile-view-constraints-changed
     */
    interface title_profile_view_constraints_changed extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Profile view constraints before the change as a JSON string. */
        PreviousProfileViewConstraints?: string,
        /** The profile type of the profile view constraints. */
        ProfileType?: string,
        /** Profile view constraints after the change as a JSON string. */
        ProfileViewConstraints?: string,
        UserId?: string,
    }

    /**
     * An inactive revision of CloudScript has been made into the active 'live' version.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-published-cloudscript
     */
    interface title_published_cloudscript extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Revision number of the CloudScript that was activated. */
        Revision: number,
        UserId?: string,
    }

    /**
     * This event is triggered when a title requests a service limit change.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-requested-limit-change
     */
    interface title_requested_limit_change extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** The name of the requested limit level. */
        LevelName?: string,
        /** The display name of the limit requested to change. */
        LimitDisplayName?: string,
        /** The unique identifier of the limit requested to change. */
        LimitId?: string,
        /** The name of the limit level at the time of the requested change, if any. */
        PreviousLevelName?: string,
        /** The price of the limit level in US Dollars at the time of the requested change, if any. */
        PreviousPriceUSD?: number,
        /** The limit value at the time of the requested change, if any. */
        PreviousValue?: number,
        /** The price of the requested limit level in US Dollars, if any. */
        PriceUSD?: number,
        /** The unique identifier of the requested limit change transaction. */
        TransactionId?: string,
        /** The unit of the limit requested to change. */
        Unit?: MetricUnit,
        UserId?: string,
        /** The limit value of the requested change, if any. */
        Value?: number,
    }

    /**
     * This event is triggered when a game's survey is saved.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-saved-survey
     */
    interface title_saved_survey extends IBasePlayStreamEvent {
        /** Title Genre */
        Genre?: string,
        /** Array of Monetization methods used by the Title */
        Monetization?: string[],
        /** Array of Platforms used by the Title */
        Platforms?: string[],
        /** Array of PlayerModes used by the Title */
        PlayerModes?: string[],
        /** Name of the Title */
        TitleName?: string,
        /** Website for the Title */
        TitleWebsite?: string,
    }

    /**
     * This event is triggered when a CloudScript function is run by a scheduled task.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-scheduled-cloudscript-executed
     */
    interface title_scheduled_cloudscript_executed extends IBasePlayStreamEvent {
        /** Result of the CloudScript function, including an error information. Useful for debugging. */
        CloudScriptExecutionResult?: ExecuteCloudScriptResult,
        /** Name of the CloudScript function that was called. */
        FunctionName?: string,
        /** Scheduled task that called the CloudScript */
        ScheduledTask?: NameId,
    }

    /**
     * This event is triggered when a CloudScript Azure Function is run by a scheduled task.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-scheduled-function-executed
     */
    interface title_scheduled_function_executed extends IBasePlayStreamEvent {
        /** Result of the CloudScript Azure Function. */
        FunctionExecutionResult?: ExecuteFunctionResult,
        /** Name of the CloudScript Azure Function that was called. */
        FunctionName?: string,
        /** Scheduled task that called the CloudScript Azure Function */
        ScheduledTask?: NameId,
    }

    /**
     * This event is triggered when a title adds or updates a Secret Key
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-secret-key-changed
     */
    interface title_secret_key_changed extends IBasePlayStreamEvent {
        /** Flag indicating if the key was deleted by this operation. Either true or null. */
        Deleted?: boolean,
        DeveloperId?: string,
        /** Flag indicating if the key is disabled */
        Disabled?: boolean,
        /** Optional UTC date time that the secret key will expire at. */
        ExpiryDate?: string,
        /** Id of the secret key affected. */
        SecretKeyId?: string,
        /** Name of the secret key affected. */
        SecretKeyName?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when a snapshot is applied.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-snapshot-applied
     */
    interface title_snapshot_applied extends IBasePlayStreamEvent {
        /** ID of the snapshot. */
        SnapshotId?: string,
    }

    /**
     * This event is triggered when a snapshot is created.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-snapshot-created
     */
    interface title_snapshot_created extends IBasePlayStreamEvent {
        /** Reason for the creation of the snapshot. Values include Snapshot, Backup, FileImport, Clone. */
        CreationReason?: TitleSnapshotCreationReason,
        /** ID of the snapshot. */
        SnapshotId?: string,
        /** Name of the file from which the snapshot was imported. */
        SourceFileName?: string,
        /** ID of the title from which the snapshot was imported. */
        SourceTitleId?: string,
    }

    /**
     * This event is triggered when a snapshot is deleted.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-snapshot-deleted
     */
    interface title_snapshot_deleted extends IBasePlayStreamEvent {
        /** ID of the snapshot. */
        SnapshotId?: string,
    }

    /**
     * This event is triggered when a task is scheduled to run.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-started-task
     */
    interface title_started_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Parameter of the scheduled task */
        Parameter?: any,
        /** ID of user who manually scheduled the task, null if scheduled automatically */
        ScheduledByUserId?: string,
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        /** ID of the running instance of the task */
        TaskInstanceId?: string,
        /** Type of the scheduled task */
        TaskType?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when the version of a statistic changes, causing its leaderboard to reset.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-statistic-version-changed
     */
    interface title_statistic_version_changed extends IBasePlayStreamEvent {
        /** The interval on which the statistic leaderboard was configured to reset, if any. */
        ScheduledResetInterval?: StatisticResetIntervalOption,
        /** The time at which the statistic leaderboard was configured to reset, if any. */
        ScheduledResetTime?: string,
        /** Unique name of the statistic. */
        StatisticName?: string,
        /** Version of the statistic, following the update. */
        StatisticVersion: number,
    }

    /**
     * This event is triggered when a store is changed.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-store-updated
     */
    interface title_store_updated extends IBasePlayStreamEvent {
        /** Catalog version that the updated store belongs to. */
        CatalogVersion?: string,
        /** Was the store deleted. */
        Deleted: boolean,
        DeveloperId?: string,
        /** ID of the updated store. */
        StoreId?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when a task is updated.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/title-updated-task
     */
    interface title_updated_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        HasRenamed: boolean,
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
    }

    /*
     * PlayStream Group: child types
     */

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/genericerrorcodes */
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
        | "CatalogUnauthorized"
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
        | "MaxActionDepthExceeded"
        | "TitleNotOnUpdatedPricingPlan"
        | "SnapshotNotFound";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entitycatalogdraftitemcreatedeventpayload */
    interface EntityCatalogDraftItemCreatedEventPayload {
        /** The error when a catalog item create request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The string ID of the item that was created. Will be empty if the create call failed. */
        ItemId?: string,
        /** The human-readable error message when a catalog item create request fails. If there was no failure, will be empty. */
        Message?: string,
    }

    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entitykey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string,
        /** Alternate name for Type. */
        TypeString?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entitylineage */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entitycatalogdraftitemdeletedeventpayload */
    interface EntityCatalogDraftItemDeletedEventPayload {
        /** The error when a catalog item deleted request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The ID of the item that was deleted. */
        ItemId?: string,
        /** The human-readable error message when a catalog item deleted request fails. If there was no failure, will be empty. */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entitycatalogdraftitempublishrequestedeventpayload */
    interface EntityCatalogDraftItemPublishRequestedEventPayload {
        /** The error when a catalog item publish request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The string ID of the draft item that was requested to be published. Will be empty if the request call failed. */
        ItemId?: string,
        /** The human-readable error message when a catalog item publish request fails. If there was no failure, will be empty. */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entitycatalogdraftitemupdatedeventpayload */
    interface EntityCatalogDraftItemUpdatedEventPayload {
        /** The error when a catalog item update request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The string ID of the item that was updated. Will be empty if the update call failed. */
        ItemId?: string,
        /** The human-readable error message when a catalog item update request fails. If there was no failure, will be empty. */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/logstatement */
    interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any,
        /** 'Debug', 'Info', or 'Error' */
        Level?: string,
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/scriptexecutionerror */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/executecloudscriptresult */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/operationtypes */
    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/fileset */
    interface FileSet {
        /** The storage size according to the underlying provider. */
        ByteCount: number,
        /** The checksum according to the underlying provider. */
        Checksum?: string,
        /** File that was updated. */
        FileName?: string,
        /** The operation that was performed. */
        Operation?: OperationTypes,
        /** The storage size of the old file, if there was one. */
        PreviousByteCount?: number,
        /** The storage size of the old file, if there was one. */
        PreviousChecksum?: string,
        /** The old file's unique storage path that was deleted by this operation, if there was one. */
        PreviousStoragePath?: string,
        /** The unique storage path for this set operation. */
        StoragePath?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/objectset */
    interface ObjectSet {
        /** The JSON Object that was last set on the profile. */
        DataObject?: any,
        /** The name of this object. */
        Name?: string,
        /** The operation that was performed. */
        Operation?: OperationTypes,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/member */
    interface Member {
        /** The identifier for the member entity. */
        EntityId?: string,
        /** The type of member entity. */
        EntityType?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/rolepropertyvalues */
    interface RolePropertyValues {
        RoleName?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/grouppropertyvalues */
    interface GroupPropertyValues {
        AdminRoleId?: string,
        GroupName?: string,
        MemberRoleId?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entityusergeneratedcontentdraftitemcreatedeventpayload */
    interface EntityUserGeneratedContentDraftItemCreatedEventPayload {
        /** The error when a User Generated Content item create request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The string ID of the item that was created. Will be empty if the create call failed. */
        ItemId?: string,
        /**
         * The human-readable error message when a User Generated Content item create request fails. If there was no failure, will
         * be empty.
         */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entityusergeneratedcontentdraftitemdeletedeventpayload */
    interface EntityUserGeneratedContentDraftItemDeletedEventPayload {
        /** The error when a User Generated Content item deleted request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The ID of the item that was deleted. */
        ItemId?: string,
        /**
         * The human-readable error message when a User Generated Content item deleted request fails. If there was no failure, will
         * be empty.
         */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entityusergeneratedcontentdraftitempublishrequestedeventpayload */
    interface EntityUserGeneratedContentDraftItemPublishRequestedEventPayload {
        /** The error when a User Generated Content item publish request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The string ID of the draft item that was requested to be published. Will be empty if the request call failed. */
        ItemId?: string,
        /**
         * The human-readable error message when a User Generated Content item publish request fails. If there was no failure, will
         * be empty.
         */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entityusergeneratedcontentdraftitemupdatedeventpayload */
    interface EntityUserGeneratedContentDraftItemUpdatedEventPayload {
        /** The error when a User Generated Content item update request fails. If there was no failure, will be null. */
        ErrorCode?: GenericErrorCodes,
        /** The string ID of the item that was updated. Will be empty if the update call failed. */
        ItemId?: string,
        /**
         * The human-readable error message when a User Generated Content item update request fails. If there was no failure, will
         * be empty.
         */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/entityusergeneratedcontentitemreportedeventpayload */
    interface EntityUserGeneratedContentItemReportedEventPayload {
        /** The category for which this item was reported. */
        ConcernCategory?: string,
        /** The string ID of the item that was reported. */
        ItemId?: string,
        /** The reason for which this item was reported. */
        Reason?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playerprofileproperty */
    type PlayerProfileProperty = "TotalValueToDateInUSD"
        | "PlayerValuesToDate";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/emailtemplatetype */
    type EmailTemplateType = "AccountRecovery"
        | "EmailVerification"
        | "Custom";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/authenticationprovider */
    type AuthenticationProvider = "PlayFab"
        | "SAML"
        | "AAD"
        | "AzureAD";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/titlesnapshotcreationreason */
    type TitleSnapshotCreationReason = "Snapshot"
        | "Backup"
        | "FileImport"
        | "Clone";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/clientfocuschangepayload */
    interface ClientFocusChangePayload {
        /** The Client Sesssion Id of the associated entity. This value is unique per client session. */
        ClientSessionID?: string,
        /** The Event Time of the associated entity. */
        EventTimestamp?: string,
        /** The Focus Id of the associated entity. This value is unique per focus interval. */
        FocusID?: string,
        /**
         * The Focus State of the associated entity, which indicates the state to which the game has transitioned. For example, a
         * value of true indicates that the game regained focus.
         */
        FocusState: boolean,
        /**
         * The Focus Duration of the associated entity, which indicates how many seconds the game was in the state from which it
         * has transitioned. For example, a Focus State of false and a Focus State Duration of 100 means that the game lost focus
         * after having the focus for 100 seconds.
         */
        FocusStateDuration: number,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/clientsessionstartpayload */
    interface ClientSessionStartPayload {
        /** The Client Session Id of the associated entity. This value is unique per client session. */
        ClientSessionID?: string,
        /** The Device Model reported by the associated entity (e.g., "iPhone11,8", "Firefox 68" or "XboxOneX_Retail"). */
        DeviceModel?: string,
        /** The Device Type of the associated entity (e.g., "Handheld", "Desktop", or "Console"). */
        DeviceType?: string,
        /** The OS reported by the associated entity (e.g., "iOS 12.3.1", "Windows 10 64bit" or "DurangoOS"). */
        OS?: string,
        /** The User Id of the associated entity. */
        UserID?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/gameserverhoststopreason */
    type GameServerHostStopReason = "Other"
        | "ExcessCapacity"
        | "LimitExceeded"
        | "BuildNotActiveInRegion"
        | "Unresponsive";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/segmentmembershipchangetype */
    type SegmentMembershipChangeType = "Entered"
        | "Exited";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/segmentmembershipchange */
    interface SegmentMembershipChange {
        /** Type of the segment membership status change. */
        Change?: SegmentMembershipChangeType,
        /** ID of the PlayStream event that caused the segment membership status to change. */
        EventId?: string,
        /** ID of the segment in which the player's membership status changed. */
        SegmentId?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/eventrulematch */
    interface EventRuleMatch {
        /** ID of the PlayStream event that matched the rule. */
        EventId?: string,
        /** ID of the matching event rule. */
        RuleId?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/actionexecutionerror */
    interface ActionExecutionError {
        /** Error code. */
        Error?: string,
        /** Details about the error. */
        Message?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/loginidentityprovider */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/passwordresetinitiationsource */
    type PasswordResetInitiationSource = "Self"
        | "Admin";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/continentcode */
    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/countrycode */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/eventlocation */
    interface EventLocation {
        /** City of the geographic location. */
        City?: string,
        /** Two-character code representing the continent of geographic location. */
        ContinentCode?: ContinentCode,
        /** Two-character ISO 3166-1 code representing the country of the geographic location. */
        CountryCode?: CountryCode,
        /** Latitude coordinate of the geographic location. */
        Latitude?: number,
        /** Longitude coordinate of the geographic location. */
        Longitude?: number,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/transactionstatus */
    type TransactionStatus = "CreateCart"
        | "Init"
        | "Approved"
        | "Succeeded"
        | "FailedByProvider"
        | "DisputePending"
        | "RefundPending"
        | "Refunded"
        | "RefundFailed"
        | "ChargedBack"
        | "FailedByUber"
        | "FailedByPlayFab"
        | "Revoked"
        | "TradePending"
        | "Traded"
        | "Upgraded"
        | "StackPending"
        | "Stacked"
        | "Other"
        | "Failed";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/leaderboardversionchangebehavior */
    type LeaderboardVersionChangeBehavior = "ResetValues"

    /**
     * Statistic used as the source of leaderboard values.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/statisticleaderboardsource
     */
    interface StatisticLeaderboardSource {
        /** Unique ID of the statistic. */
        StatisticId: number,
        /** Name of the statistic. */
        StatisticName?: string,
    }

    /**
     * The source of values for the leaderboard. The properties are mutually exclusive - only one of them will be set and the
     * rest will be null.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/leaderboardsource
     */
    interface LeaderboardSource {
        /** Statistic associated with the leaderboard. */
        Statistic?: StatisticLeaderboardSource,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/paymenttype */
    type PaymentType = "Purchase"
        | "ReceiptValidation";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/currency */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/coupongrantedinventoryitem */
    interface CouponGrantedInventoryItem {
        /** Catalog version of the inventory item. */
        CatalogVersion?: string,
        /** Unique instance ID of the inventory item. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item. */
        ItemId?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/pushnotificationplatform */
    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/cartitem */
    interface CartItem {
        /** Description of the catalog item. */
        Description?: string,
        /** Display name for the catalog item. */
        DisplayName?: string,
        /** Class name to which catalog item belongs. */
        ItemClass?: string,
        /** Unique identifier for the catalog item. */
        ItemId?: string,
        /** Unique instance identifier for this catalog item. */
        ItemInstanceId?: string,
        /** Cost of the catalog item for each applicable real world currency. */
        RealCurrencyPrices?: { [key: string]: number },
        /** Amount of each applicable virtual currency which will be received as a result of purchasing this catalog item. */
        VCAmount?: { [key: string]: number },
        /** Cost of the catalog item for each applicable virtual currency. */
        VirtualCurrencyPrices?: { [key: string]: number },
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/statisticaggregationmethod */
    type StatisticAggregationMethod = "Last"
        | "Min"
        | "Max"
        | "Sum";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playerlocation */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/adcampaignattribution */
    interface AdCampaignAttribution {
        /** UTC time stamp of attribution */
        AttributedAt: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** Attribution network name */
        Platform?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/pushnotificationregistration */
    interface PushNotificationRegistration {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playerlinkedaccount */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playerstatistic */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/emailverificationstatus */
    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/contactemailinfo */
    interface ContactEmailInfo {
        /** The email address */
        EmailAddress?: string,
        /** The name of the email info data */
        Name?: string,
        /** The verification status of the email */
        VerificationStatus?: EmailVerificationStatus,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playerprofile */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/productidtype */
    type ProductIdType = "BigCatId"
        | "XboxTitleId";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/publisherproduct */
    interface PublisherProduct {
        /** The master product id mapped. */
        MasterProductId?: string,
        /** The product Id mapped. */
        ProductId?: string,
        /** The type of Id mapped. */
        ProductIdType?: ProductIdType,
        /** The product type mapped. */
        ProductType?: string,
        /** The xbox title id mapped. */
        XboxTitleId?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/publisherstore */
    type PublisherStore = "MicrosoftStore"

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/ienumerable_string */
    interface IEnumerable_String {
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/metricunit */
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

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/paymentoptionpermaupricetier */
    interface PaymentOptionPerMauPriceTier {
        LowerBoundInclusive?: number,
        Name?: string,
        PriceUnit?: MetricUnit,
        PriceUnitSize?: number,
        PriceUSD?: number,
        PriceUSDFormatted?: string,
        UpperBoundInclusive?: number,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/region */
    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/apisettings */
    interface APISettings {
        /** Allow game clients to add to virtual currency balances via API. */
        AllowClientToAddVirtualCurrency: boolean,
        /** Allow game clients to update statistic values via API. */
        AllowClientToPostPlayerStatistics: boolean,
        /** Allow clients to start multiplayer game sessions via API. */
        AllowClientToStartGames: boolean,
        /** Allow game clients to subtract from virtual currency balances via API. */
        AllowClientToSubtractVirtualCurrency: boolean,
        /** Allow game clients to view ban reason and duration via API. */
        AllowClientToViewBanReasonAndDuration: boolean,
        /**
         * Allow players to choose display names that may be in use by other players, i.e. do not enforce uniqueness of display
         * names. Note: if this option is enabled, it cannot be disabled later.
         */
        AllowNonUniquePlayerDisplayNames: boolean,
        /** Allow game servers to delete player accounts via API. */
        AllowServerToDeleteUsers: boolean,
        /** The default language for communication with players */
        DefaultLanguage?: string,
        /** Disable API access by returning errors to all API requests. */
        DisableAPIAccess: boolean,
        /** Display name randomly-generated suffix length. */
        DisplayNameRandomSuffixLength?: number,
        /**
         * Reduce the precision of IP addresses collected from players' devices before they are stored or used to estimate
         * geographic locations.
         */
        EnableClientIPAddressObfuscation: boolean,
        /** Require JSON format for data values associated with players, characters, inventories, and shared groups. */
        RequireCustomDataJSONFormat: boolean,
        /** Multiplayer game sessions are hosted on servers external to PlayFab. */
        UseExternalGameServerProvider: boolean,
        /**
         * Use payment provider's sandbox mode (if available) for real-money purchases. This can be useful when testing in-game
         * purchasing in order to avoid being charged.
         */
        UseSandboxPayments: boolean,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/alertlevel */
    type AlertLevel = "Warn"
        | "Alert"
        | "Critical";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/alertstates */
    type AlertStates = "Triggered"
        | "Recovered"
        | "ReTriggered";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/taskinstancestatus */
    type TaskInstanceStatus = "Succeeded"
        | "Starting"
        | "InProgress"
        | "Failed"
        | "Aborted"
        | "Stalled";

    /**
     * Identifier by either name or ID. Note that a name may change due to renaming, or reused after being deleted. ID is
     * immutable and unique.
     * https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/nameidentifier
     */
    interface NameIdentifier {
        /** Id Identifier, if present */
        Id?: string,
        /** Name Identifier, if present */
        Name?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/newsstatus */
    type NewsStatus = "None"
        | "Unpublished"
        | "Published"
        | "Archived";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/nameid */
    interface NameId {
        Id?: string,
        Name?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/functionexecutionerror */
    interface FunctionExecutionError {
        /**
         * Error code, such as CloudScriptAzureFunctionsExecutionTimeLimitExceeded, CloudScriptAzureFunctionsArgumentSizeExceeded,
         * CloudScriptAzureFunctionsReturnSizeExceeded or CloudScriptAzureFunctionsHTTPRequestError
         */
        Error?: string,
        /** Details about the error */
        Message?: string,
        /** Point during the execution of the function at which the error occurred, if any */
        StackTrace?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/executefunctionresult */
    interface ExecuteFunctionResult {
        /** Error from the CloudScript Azure Function. */
        Error?: FunctionExecutionError,
        /** The amount of time the function took to execute */
        ExecutionTimeMilliseconds: number,
        /** The name of the function that executed */
        FunctionName?: string,
        /** The object returned from the function, if any */
        FunctionResult?: any,
        /** Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. */
        FunctionResultTooLarge?: boolean,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/statisticresetintervaloption */
    type StatisticResetIntervalOption = "Never"
        | "Hour"
        | "Day"
        | "Week"
        | "Month";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/photonservicesenum */
    type PhotonServicesEnum = "Realtime"
        | "Turnbased"
        | "Chat";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playfabenvironment */
    interface PlayFabEnvironment {
        Application?: string,
        Cloud?: string,
        Commit?: string,
        Vertical?: string,
    }

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/sourcetype */
    type SourceType = "Admin"
        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner"
        | "Custom"
        | "API";

    /** https://docs.microsoft.com/gaming/playfab/api-references/events/data-types/playstreameventhistory */
    interface PlayStreamEventHistory {
        /** The ID of the previous event that caused this event to be created by hitting a trigger. */
        ParentEventId?: string,
        /** The ID of the trigger that caused this event to be created. */
        ParentTriggerId?: string,
        /** If true, then this event was allowed to trigger subsequent events in a trigger. */
        TriggeredEvents: boolean,
    }

}
