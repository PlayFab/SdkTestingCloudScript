declare namespace PlayStreamModels {
    interface IBasePlayStreamEvent {
        EventName: string;
    }

    /*
     * PlayStream Group: none
     */

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/entity_created */
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/entity_executed_cloud_script
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/entity_files_set */
    interface entity_files_set extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** The files that were updated. */
        Files?: FileSet[],
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/entity_language_updated */
    interface entity_language_updated extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** Language that was updated */
        Language?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/entity_logged_in */
    interface entity_logged_in extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/entity_objects_set */
    interface entity_objects_set extends IBasePlayStreamEvent {
        /** The chain of ownership for this entity. */
        EntityChain?: string,
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** Objects that were updated */
        Objects?: ObjectSet[],
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_created */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_deleted */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_members_added */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_members_removed */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_role_created */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_role_deleted */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_role_members_added */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_role_members_removed */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_role_updated */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/group_updated */
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
     * This event is triggered when a matchmaking ticket reaches a completion state.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/matchmaking_ticket_completed
     */
    interface matchmaking_ticket_completed extends IBasePlayStreamEvent {
        /** Entities that this entity is a child of. */
        EntityLineage?: EntityLineage,
        /** Payload that this entity is a child of. */
        Payload?: MatchmakingTicketCompletePayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server build is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_build_deleted
     */
    interface multiplayer_server_build_deleted extends IBasePlayStreamEvent {
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
        /** The multiplayer server build region deleted event payload. */
        Payload?: MultiplayerServerBuildDeletedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server's build region status is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_build_region_status_changed
     */
    interface multiplayer_server_build_region_status_changed extends IBasePlayStreamEvent {
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
        /** The multiplayer server build region status changed event payload. */
        Payload?: MultiplayerServerBuildRegionStatusChangedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server build region is updated.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_build_region_updated
     */
    interface multiplayer_server_build_region_updated extends IBasePlayStreamEvent {
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
        /** The multiplayer server build region updated event payload. */
        Payload?: MultiplayerServerBuildRegionUpdatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server certificate is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_certificate_deleted
     */
    interface multiplayer_server_certificate_deleted extends IBasePlayStreamEvent {
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
        /** The multiplayer server certificate deleted event payload. */
        Payload?: MultiplayerServerCertificateDeletedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server certificate is uploaded.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_certificate_uploaded
     */
    interface multiplayer_server_certificate_uploaded extends IBasePlayStreamEvent {
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
        /** The multiplayer server certificate uploaded event payload. */
        Payload?: MultiplayerServerCertificateUploadedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server build is initiated.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_create_build_initiated
     */
    interface multiplayer_server_create_build_initiated extends IBasePlayStreamEvent {
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
        /** The multiplayer server create build initiated event payload. */
        Payload?: MultiplayerServerCreateBuildInitiatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server game asset is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_game_asset_deleted
     */
    interface multiplayer_server_game_asset_deleted extends IBasePlayStreamEvent {
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
        /** The multiplayer server game asset deleted event payload. */
        Payload?: MultiplayerServerGameAssetDeletedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server shutdown is requested.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_requested
     */
    interface multiplayer_server_requested extends IBasePlayStreamEvent {
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
        /** The multiplayer server requested event payload. */
        Payload?: MultiplayerServerRequestedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server's state is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_state_changed
     */
    interface multiplayer_server_state_changed extends IBasePlayStreamEvent {
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
        /** The multiplayer server state changed event payload. */
        Payload?: MultiplayerServerStateChangedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a virtual machine is assigned to a multiplayer server build.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_vm_assigned
     */
    interface multiplayer_server_vm_assigned extends IBasePlayStreamEvent {
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
        /** The multiplayer server virtual machine assigned event payload. */
        Payload?: MultiplayerServerVmAssignedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server virtual machine remote user is created.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_vm_remote_user_created
     */
    interface multiplayer_server_vm_remote_user_created extends IBasePlayStreamEvent {
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
        /** The multiplayer server virtual machine remote user created event payload. */
        Payload?: MultiplayerServerVmRemoteUserCreatedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a multiplayer server virtual machine remote user is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_vm_remote_user_deleted
     */
    interface multiplayer_server_vm_remote_user_deleted extends IBasePlayStreamEvent {
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
        /** The multiplayer server virtual machine remote user deleted event payload. */
        Payload?: MultiplayerServerVmRemoteUserDeletedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a virtual machine is unassigned from a multiplayer server build.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_vm_unassignment_started
     */
    interface multiplayer_server_vm_unassignment_started extends IBasePlayStreamEvent {
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
        /** The multiplayer server virtual machine unassignment started event payload. */
        Payload?: MultiplayerServerVmUnassignmentStartedEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /**
     * This event is triggered when a virtual machine is found to be unhealthy.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/multiplayer_server_vm_unhealthy
     */
    interface multiplayer_server_vm_unhealthy extends IBasePlayStreamEvent {
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
        /** The multiplayer server virtual machine unassignment started event payload. */
        Payload?: MultiplayerServerVmUnhealthyEventPayload,
        /** Entity that wrote this event, included only if different than the event's entity. */
        WriterEntity?: EntityKey,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_created */
    interface studio_created extends IBasePlayStreamEvent {
        /** Authentication provider's id for the user who created the studio */
        CreatorAuthenticationId?: string,
        /** PlayFab id of the user who created the studio */
        CreatorPlayFabId?: string,
        /** Name of the new studio */
        StudioName?: string,
    }

    /**
     * This event is triggererd when a user accepts a studio invitation.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_user_added
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_user_invited
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/none/studio_user_removed */
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

    /*
     * PlayStream Group: character
     */

    /**
     * This event is triggered when a character consumes an item from their inventory.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_consumed_item
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_created
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_inventory_item_added
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_statistic_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_statistic_deleted
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_vc_item_purchased
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/character/character_virtual_currency_balance_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/partner/display_name_filtered
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/partner/player_display_name_filtered
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/partner/player_photon_session_authenticated
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/auth_token_validated
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/title_deleted_master_player
     */
    interface title_deleted_master_player extends IBasePlayStreamEvent {
        /** Identitfying information for title entered by developer */
        MetaData?: string,
        /** Receipt Id of the delete that has been finished. */
        ReceiptId?: string,
    }

    /**
     * This event is triggered by an attribution tracking Add-on when a player is matched to a paid acquisition campaign.
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_added_title
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_ended
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_opened
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_rewarded
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_activity_valued
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ad_started
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_banned
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
     * This event is triggered when a player completes the password reset process by visiting the link URL that was sent to
     * them and choosing a new password.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_completed_password_reset
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_consumed_item
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
     * This event is triggered when a player's data is exported.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_data_exported
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_device_info
     */
    interface player_device_info extends IBasePlayStreamEvent {
        DeviceInfo?: { [key: string]: any },
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player's display name is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_displayname_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_inventory_item_added
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_joined_lobby
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_left_lobby
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_linked_account
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_logged_in
     */
    interface player_logged_in extends IBasePlayStreamEvent {
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_matched_with_lobby
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_password_reset_link_sent
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_paid_for_purchase
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_ranked_on_leaderboard_version
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_realmoney_purchase
     */
    interface player_realmoney_purchase extends IBasePlayStreamEvent {
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_receipt_validation
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_removed_title
     */
    interface player_removed_title extends IBasePlayStreamEvent {
        /** The ID of the title to which this player event applies. */
        TitleId?: string,
    }

    /**
     * This event is triggered when a player is reported by another player as abusive.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_reported_as_abusive
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_set_profile_property
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_started_purchase
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_statistic_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_statistic_deleted
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_tag_added
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_tag_removed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_triggered_action_executed_cloudscript
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_unlinked_account
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_updated_contact_email
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_vc_item_purchased
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_verified_contact_email
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_virtual_currency_balance_changed
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
     * This event is triggered when an email is sent or fails to send to a player.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/sent_email
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/client_focus_change
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/client_session_start
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/gamelobby_ended
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/gamelobby_started
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/gameserverhost_started
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/gameserverhost_stopped
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/session/session_ended
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
        DeveloperId?: string,
        /** ID of the aborted task instance */
        TaskInstanceId?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when new CloudScript is uploaded to PlayFab.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_added_cloudscript
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_game_build_added
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_api_settings_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_catalog_updated
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_client_rate_limited_alert
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_completed_task
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_created_task
     */
    interface title_created_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
    }

    /**
     * This event is triggered when a game title is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_deleted
     */
    interface title_deleted extends IBasePlayStreamEvent {
    }

    /**
     * This event is triggered when a task is deleted.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_deleted_task
     */
    interface title_deleted_task extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Identity of the scheduled task */
        ScheduledTask?: NameIdentifier,
        UserId?: string,
    }

    /**
     * This event is triggererd when a title exceeds a service limit and receives an error.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_exceeded_limit
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_high_error_rate_alert
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_initiated_player_password_reset
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_limit_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_game_build_modified
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_news_updated
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
     * This event is triggered when an update occurs to a a title's permission policies.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_permission_policy_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_profile_view_constraints_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_published_cloudscript
     */
    interface title_published_cloudscript extends IBasePlayStreamEvent {
        DeveloperId?: string,
        /** Revision number of the CloudScript that was activated. */
        Revision: number,
        UserId?: string,
    }

    /**
     * This event is triggered when a queue config is changed.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_queue_config_updated
     */
    interface title_queue_config_updated extends IBasePlayStreamEvent {
        /** Was the queue config deleted. */
        Deleted: boolean,
        DeveloperId?: string,
        /** Name of the queue config that was updated. */
        MatchQueueName?: string,
        UserId?: string,
    }

    /**
     * This event is triggered when a title requests a service limit change.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_requested_limit_change
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_saved_survey
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_scheduled_cloudscript_executed
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
     * This event is triggered when a title adds or updates a Secret Key
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_secret_key_changed
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
     * This event is triggered when a task is scheduled to run.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_started_task
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_statistic_version_changed
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_store_updated
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
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/title/title_updated_task
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/OperationTypes */
    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/FileSet */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/EntityLineage */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/LogStatement */
    interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any,
        /** 'Debug', 'Info', or 'Error' */
        Level?: string,
        Message?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ScriptExecutionError */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ExecuteCloudScriptResult */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/Member */
    interface Member {
        /** The identifier for the member entity. */
        EntityId?: string,
        /** The type of member entity. */
        EntityType?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/RolePropertyValues */
    interface RolePropertyValues {
        RoleName?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/GroupPropertyValues */
    interface GroupPropertyValues {
        AdminRoleId?: string,
        GroupName?: string,
        MemberRoleId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AzureRegion */
    type AzureRegion = "EastUs"
        | "SouthCentralUs"
        | "WestUs"
        | "NorthEurope"
        | "WestEurope";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerVmUnhealthyEventPayload */
    interface MultiplayerServerVmUnhealthyEventPayload {
        /** The guid string ID of the build. */
        BuildId?: string,
        /** The health status of the virtual machine. */
        HealthStatus?: string,
        /** The build region. */
        Region?: AzureRegion,
        /** The ID of the unhealthy virtual machine. */
        VmId?: string,
    }

    /**
     * Combined entity type and ID structure which uniquely identifies a single entity.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/EntityKey
     */
    interface EntityKey {
        /** Unique ID of the entity. */
        Id: string,
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string,
        /** Alternate name for Type. */
        TypeString?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerVmUnassignmentStartedEventPayload */
    interface MultiplayerServerVmUnassignmentStartedEventPayload {
        /** The duration (milliseconds) that the VM has been assigned. */
        AssignmentDurationMs: number,
        /** The guid string ID of the billing assignment. */
        BillingAssignmentCorrelationId?: string,
        /** The guid string ID of the build. */
        BuildId?: string,
        /** The build region. */
        Region?: AzureRegion,
        /** The guid string ID of the session. */
        SessionId?: string,
        /** The time (UTC) the virtual machine unassignment started. */
        UnassignmentEventTimestamp: string,
        /** The virtual machine ID that is being unassigned. */
        VmId?: string,
        /** The virtual machine's operating system. */
        VmOs?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerVmAssignedEventPayload */
    interface MultiplayerServerVmAssignedEventPayload {
        /** The time (UTC) the virtual machine was assigned. */
        AssignmentEventTimestamp: string,
        /** The guid string ID of the billing assignment. */
        BillingAssignmentCorrelationId?: string,
        /** The guid string ID of the build. */
        BuildId?: string,
        /** The build region. */
        Region?: AzureRegion,
        /** The guid string ID of the session. */
        SessionId?: string,
        /** The ID of the virtual machine that was assigned. */
        VmId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/BuildRegionStatus */
    type BuildRegionStatus = "Unknown"
        | "Initializing"
        | "InProbation"
        | "Succeeded"
        | "Unhealthy"
        | "PendingDeletion";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerBuildRegionStatusChangedEventPayload */
    interface MultiplayerServerBuildRegionStatusChangedEventPayload {
        /** The guid string ID of the build. */
        BuildId?: string,
        /** The duration (minutes) in the old build status. */
        MinutesInOldStatus: number,
        /** The new build region status. */
        NewStatus?: BuildRegionStatus,
        /** The old build region status. */
        OldStatus?: BuildRegionStatus,
        /** The build region. */
        Region?: AzureRegion,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerState */
    type MultiplayerServerState = "Invalid"
        | "Initializing"
        | "StandingBy"
        | "Active"
        | "Terminating"
        | "Terminated"
        | "Quarantined"
        | "PendingAllocation"
        | "AllocationTimeout";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerStateChangedEventPayload */
    interface MultiplayerServerStateChangedEventPayload {
        /** The guid string ID of the build. */
        BuildId?: string,
        /** The new multiplayer server state. */
        NewState?: MultiplayerServerState,
        /** The old multiplayer server state. */
        OldState?: MultiplayerServerState,
        /** The build region. */
        Region?: AzureRegion,
        /** The guid string ID of the session. */
        SessionId?: string,
        /** The virtual machine ID the multiplayer server is located on. */
        VmId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerCertificateDeletedEventPayload */
    interface MultiplayerServerCertificateDeletedEventPayload {
        /** The name of the certificate that was deleted. */
        CertificateName?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/GenericErrorCodes */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerRequestedEventPayload */
    interface MultiplayerServerRequestedEventPayload {
        /** The region where the multiplayer server was allocated. */
        AllocatedRegion?: AzureRegion,
        /** The integer ranking of what region that the multiplayer server was allocated in from the PreferredRegions list. */
        AllocatedRegionPreferenceRanking?: number,
        /** The guid string ID of the build. */
        BuildId?: string,
        /** The error when a multiplayer server request fails to allocate. If there was no failure, returns null. */
        ErrorCode?: GenericErrorCodes,
        /** The list of preferred region to request a server from. */
        PreferredRegions?: AzureRegion[],
        /** The string ID of the server which is generated by PlayFab. */
        ServerId?: string,
        /** The guid string ID of the session. */
        SessionId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerVmRemoteUserDeletedEventPayload */
    interface MultiplayerServerVmRemoteUserDeletedEventPayload {
        /** The guid string build ID of the multiplayer server where the remote user was deleted. */
        BuildId?: string,
        /** The username for the remote user that was deleted. */
        Username?: string,
        /** The virtual machine ID the multiplayer server is located on where the remote user was deleted on. */
        VmId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerVmRemoteUserCreatedEventPayload */
    interface MultiplayerServerVmRemoteUserCreatedEventPayload {
        /** The expiration time for the remote user that was created. */
        ExpirationTime?: string,
        /** The username for the remote user that was created. */
        Username?: string,
        /** The ID of the virtual machine where the remote user was created. */
        VmId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerCertificateUploadedEventPayload */
    interface MultiplayerServerCertificateUploadedEventPayload {
        /** The name of the certificate that was uploaded. */
        CertificateName?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerGameAssetDeletedEventPayload */
    interface MultiplayerServerGameAssetDeletedEventPayload {
        /** The filename of the asset that was deleted. */
        AssetFileName?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerBuildDeletedEventPayload */
    interface MultiplayerServerBuildDeletedEventPayload {
        /** The guid string ID of the multiplayer server build that was deleted. */
        BuildId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/BuildRegion */
    interface BuildRegion {
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number,
        /** The build region. */
        Region?: AzureRegion,
        /** The number of standby multiplayer servers for the region. */
        StandbyServers: number,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerBuildRegionUpdatedEventPayload */
    interface MultiplayerServerBuildRegionUpdatedEventPayload {
        /** The guid string ID of the multiplayer server build that regions were updated on. */
        BuildId?: string,
        /** The updated region configuration that should be applied to the specified build. */
        BuildRegions?: BuildRegion[],
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MultiplayerServerCreateBuildInitiatedEventPayload */
    interface MultiplayerServerCreateBuildInitiatedEventPayload {
        /** The guid string ID of the build */
        BuildId?: string,
        /** The build name. */
        BuildName?: string,
        /** The time (UTC) that the build was created. */
        CreationTime?: string,
        /** The developer defined metadata of the build. */
        Metadata?: { [key: string]: string | null },
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/MatchmakingTicketCompletePayload */
    interface MatchmakingTicketCompletePayload {
        /**
         * If the ticket result is "Canceled" then this string provides the reason why the ticket was canceled otherwise it is
         * null. The possible list of values are "User", "Service", "Internal", "Timeout".
         */
        CancellationReason?: string,
        /** Time at which this ticket was completed. */
        CompletionTime: string,
        /** Time at which this ticket was created. */
        CreationTime: string,
        /** The name of the queue the ticket was created in. */
        QueueName?: string,
        /** The final state of the ticket. It could be "Matched" or "Canceled". */
        Result?: string,
        /** Time at which this ticket was submitted into the matchmaking queue. */
        SubmissionTime?: string,
        /** The list of entities that are part of this ticket. */
        TicketEntities?: EntityKey[],
        /** Id of the ticket that was completed. */
        TicketId?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ObjectSet */
    interface ObjectSet {
        /** The JSON Object that was last set on the profile. */
        DataObject?: any,
        /** The name of this object. */
        Name?: string,
        /** The operation that was performed. */
        Operation?: OperationTypes,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerProfileProperty */
    type PlayerProfileProperty = "TotalValueToDateInUSD"
        | "PlayerValuesToDate";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/EmailTemplateType */
    type EmailTemplateType = "AccountRecovery"
        | "EmailVerification"
        | "Custom";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AuthenticationProvider */
    type AuthenticationProvider = "PlayFab"
        | "SAML";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ClientFocusChangePayload */
    interface ClientFocusChangePayload {
        /** The Client Sesssion Id of the associated entity. */
        ClientSessionID?: string,
        /** The Event Time of the associated entity. */
        EventTimestamp?: string,
        /** The Focus Id of the associated entity. */
        FocusID?: string,
        /** The Focus State of the associated entity. */
        FocusState: boolean,
        /** The Focus Duration of the associated entity. */
        FocusStateDuration: number,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ClientSessionStartPayload */
    interface ClientSessionStartPayload {
        /** The Client Session Id of the associated entity. */
        ClientSessionID?: string,
        /** The Device Model of the associated entity. */
        DeviceModel?: string,
        /** The Device Type of the associated entity. */
        DeviceType?: string,
        /** The OS of the associated entity. */
        OS?: string,
        /** The User Id of the associated entity. */
        UserID?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/TransactionStatus */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/CartItem */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/GameServerHostStopReason */
    type GameServerHostStopReason = "Other"
        | "ExcessCapacity"
        | "LimitExceeded"
        | "BuildNotActiveInRegion"
        | "Unresponsive";

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
        /** Unique ID of the statistic. */
        StatisticId: number,
        /** Name of the statistic. */
        StatisticName?: string,
    }

    /**
     * The source of values for the leaderboard. The properties are mutually exclusive - only one of them will be set and the
     * rest will be null.
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
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PasswordResetInitiationSource */
    type PasswordResetInitiationSource = "Self"
        | "Admin";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/CouponGrantedInventoryItem */
    interface CouponGrantedInventoryItem {
        /** Catalog version of the inventory item. */
        CatalogVersion?: string,
        /** Unique instance ID of the inventory item. */
        InstanceId?: string,
        /** Catalog item ID of the inventory item. */
        ItemId?: string,
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerLocation */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/AdCampaignAttribution */
    interface AdCampaignAttribution {
        /** UTC time stamp of attribution */
        AttributedAt: string,
        /** Attribution campaign identifier */
        CampaignId?: string,
        /** Attribution network name */
        Platform?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PushNotificationPlatform */
    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PushNotificationRegistration */
    interface PushNotificationRegistration {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string,
        /** Push notification platform */
        Platform?: PushNotificationPlatform,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerLinkedAccount */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerStatistic */
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/EmailVerificationStatus */
    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/ContactEmailInfo */
    interface ContactEmailInfo {
        /** The email address */
        EmailAddress?: string,
        /** The name of the email info data */
        Name?: string,
        /** The verification status of the email */
        VerificationStatus?: EmailVerificationStatus,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayerProfile */
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

    /**
     * Identifier by either name or ID. Note that a name may change due to renaming, or reused after being deleted. ID is
     * immutable and unique.
     * https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/NameIdentifier
     */
    interface NameIdentifier {
        /** Id Identifier, if present */
        Id?: string,
        /** Name Identifier, if present */
        Name?: string,
    }

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/APISettings */
    interface APISettings {
        /** Allow game clients to add to virtual currency balances via API. */
        AllowClientToAddVirtualCurrency: boolean,
        /** Allow game clients to update statistic values via API. */
        AllowClientToPostPlayerStatistics: boolean,
        /** Allow clients to start multiplayer game sessions via API. */
        AllowClientToStartGames: boolean,
        /** Allow game clients to subtract from virtual currency balances via API. */
        AllowClientToSubtractVirtualCurrency: boolean,
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

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/TaskInstanceStatus */
    type TaskInstanceStatus = "Succeeded"
        | "Starting"
        | "InProgress"
        | "Failed"
        | "Aborted"
        | "Stalled";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/StatisticAggregationMethod */
    type StatisticAggregationMethod = "Last"
        | "Min"
        | "Max"
        | "Sum";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/EventLocation */
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
        Id?: string,
        Name?: string,
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
        | "Partner"
        | "Custom"
        | "API";

    /** https://api.playfab.com/playstream/docs/PlayStreamEventModels/childtypes/PlayStreamEventHistory */
    interface PlayStreamEventHistory {
        /** The ID of the previous event that caused this event to be created by hitting a trigger. */
        ParentEventId?: string,
        /** The ID of the trigger that caused this event to be created. */
        ParentTriggerId?: string,
        /** If true, then this event was allowed to trigger subsequent events in a trigger. */
        TriggeredEvents: boolean,
    }

}
