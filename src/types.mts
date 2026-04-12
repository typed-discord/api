export interface AccountResponse {
    "id": string;
    "name": string | null;
}
export interface ActionRowComponentForMessageRequest {
    "type": MessageComponentTypes.ACTION_ROW;
    "id"?: number | null;
    "components": (ButtonComponentForMessageRequest | ChannelSelectComponentForMessageRequest | MentionableSelectComponentForMessageRequest | RoleSelectComponentForMessageRequest | StringSelectComponentForMessageRequest | UserSelectComponentForMessageRequest)[];
}
export interface ActionRowComponentForModalRequest {
    "type": MessageComponentTypes.ACTION_ROW;
    "id"?: number | null;
    "components": TextInputComponentForModalRequest[];
}
export interface ActionRowComponentResponse {
    "type": MessageComponentTypes.ACTION_ROW;
    "id": number;
    "components": (ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse)[];
}
export interface ActivitiesAttachmentResponse {
    "attachment": AttachmentResponse;
}
export const enum AfkTimeouts {
    "ONE_MINUTE" = 60,
    "FIVE_MINUTES" = 300,
    "FIFTEEN_MINUTES" = 900,
    "THIRTY_MINUTES" = 1800,
    "ONE_HOUR" = 3600
}
export const enum AllowedMentionTypes {
    /**
     * Controls role mentions
     */
    "USERS" = "users",
    /**
     * Controls user mentions
     */
    "ROLES" = "roles",
    /**
     * Controls @everyone and @here mentions
     */
    "EVERYONE" = "everyone"
}
export interface ApplicationCommandAttachmentOption {
    "type": ApplicationCommandOptionType.ATTACHMENT;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandAttachmentOptionResponse {
    "type": ApplicationCommandOptionType.ATTACHMENT;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandAutocompleteCallbackRequest {
    "type": InteractionCallbackTypes.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT;
    "data": InteractionApplicationCommandAutocompleteCallbackIntegerData | InteractionApplicationCommandAutocompleteCallbackNumberData | InteractionApplicationCommandAutocompleteCallbackStringData;
}
export interface ApplicationCommandBooleanOption {
    "type": ApplicationCommandOptionType.BOOLEAN;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandBooleanOptionResponse {
    "type": ApplicationCommandOptionType.BOOLEAN;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandChannelOption {
    "type": ApplicationCommandOptionType.CHANNEL;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
    "channel_types"?: ChannelTypes[] | null;
}
export interface ApplicationCommandChannelOptionResponse {
    "type": ApplicationCommandOptionType.CHANNEL;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
    "channel_types"?: ChannelTypes[];
}
export interface ApplicationCommandCreateRequest {
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description"?: string | null;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "options"?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    "default_member_permissions"?: number | null;
    "dm_permission"?: boolean | null;
    "contexts"?: InteractionContextType[] | null;
    "integration_types"?: ApplicationIntegrationType[] | null;
    "handler"?: null | ApplicationCommandHandler;
    "type"?: null | ApplicationCommandType;
}
export const enum ApplicationCommandHandler {
}
export interface ApplicationCommandIntegerOption {
    "type": ApplicationCommandOptionType.INTEGER;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
    "autocomplete"?: boolean | null;
    "choices"?: ApplicationCommandOptionIntegerChoice[] | null;
    "min_value"?: null | Int53Type;
    "max_value"?: null | Int53Type;
}
export interface ApplicationCommandIntegerOptionResponse {
    "type": ApplicationCommandOptionType.INTEGER;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
    "autocomplete"?: boolean;
    "choices"?: ApplicationCommandOptionIntegerChoiceResponse[];
    "min_value"?: Int53Type;
    "max_value"?: Int53Type;
}
export interface ApplicationCommandInteractionMetadataResponse {
    "id": SnowflakeType;
    "type": InteractionTypes.APPLICATION_COMMAND;
    "user"?: UserResponse;
    "authorizing_integration_owners": {
        [additionalProperties: string]: SnowflakeType;
    };
    "original_response_message_id"?: SnowflakeType;
    "target_user"?: UserResponse;
    "target_message_id"?: SnowflakeType;
}
export interface ApplicationCommandMentionableOption {
    "type": ApplicationCommandOptionType.MENTIONABLE;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandMentionableOptionResponse {
    "type": ApplicationCommandOptionType.MENTIONABLE;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandNumberOption {
    "type": ApplicationCommandOptionType.NUMBER;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
    "autocomplete"?: boolean | null;
    "choices"?: ApplicationCommandOptionNumberChoice[] | null;
    "min_value"?: number | null;
    "max_value"?: number | null;
}
export interface ApplicationCommandNumberOptionResponse {
    "type": ApplicationCommandOptionType.NUMBER;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
    "autocomplete"?: boolean;
    "choices"?: ApplicationCommandOptionNumberChoiceResponse[];
    "min_value"?: number;
    "max_value"?: number;
}
export interface ApplicationCommandOptionIntegerChoice {
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "value": Int53Type;
}
export interface ApplicationCommandOptionIntegerChoiceResponse {
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "value": Int53Type;
}
export interface ApplicationCommandOptionNumberChoice {
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "value": number;
}
export interface ApplicationCommandOptionNumberChoiceResponse {
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "value": number;
}
export interface ApplicationCommandOptionStringChoice {
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "value": string;
}
export interface ApplicationCommandOptionStringChoiceResponse {
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "value": string;
}
export const enum ApplicationCommandOptionType {
    /**
     * A sub-action within a command or group
     */
    "SUB_COMMAND" = 1,
    /**
     * A group of subcommands
     */
    "SUB_COMMAND_GROUP" = 2,
    /**
     * A string option
     */
    "STRING" = 3,
    /**
     * An integer option. Any integer between -2^53 and 2^53 is a valid value
     */
    "INTEGER" = 4,
    /**
     * A boolean option
     */
    "BOOLEAN" = 5,
    /**
     * A snowflake option that represents a User
     */
    "USER" = 6,
    /**
     * A snowflake option that represents a Channel. Includes all channel types and categories
     */
    "CHANNEL" = 7,
    /**
     * A snowflake option that represents a Role
     */
    "ROLE" = 8,
    /**
     * A snowflake option that represents anything you can mention
     */
    "MENTIONABLE" = 9,
    /**
     * A number option. Any double between -2^53 and 2^53 is a valid value
     */
    "NUMBER" = 10,
    /**
     * An attachment option
     */
    "ATTACHMENT" = 11
}
export interface ApplicationCommandPatchRequestPartial {
    "name"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description"?: string | null;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "options"?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    "default_member_permissions"?: number | null;
    "dm_permission"?: boolean | null;
    "contexts"?: InteractionContextType[] | null;
    "integration_types"?: ApplicationIntegrationType[] | null;
    "handler"?: null | ApplicationCommandHandler;
}
export interface ApplicationCommandPermission {
    "id": SnowflakeType;
    "type": ApplicationCommandPermissionType;
    "permission": boolean;
}
export const enum ApplicationCommandPermissionType {
    /**
     * This permission is for a role.
     */
    "ROLE" = 1,
    /**
     * This permission is for a user.
     */
    "USER" = 2,
    /**
     * This permission is for a channel.
     */
    "CHANNEL" = 3
}
export interface ApplicationCommandResponse {
    "id": SnowflakeType;
    "application_id": SnowflakeType;
    "version": SnowflakeType;
    "default_member_permissions": string | null;
    "type": ApplicationCommandType;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "guild_id"?: SnowflakeType;
    "dm_permission"?: boolean;
    "contexts"?: InteractionContextType[] | null;
    "integration_types"?: ApplicationIntegrationType[];
    "options"?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandSubcommandGroupOptionResponse | ApplicationCommandSubcommandOptionResponse | ApplicationCommandUserOptionResponse)[];
    "nsfw"?: boolean;
}
export interface ApplicationCommandRoleOption {
    "type": ApplicationCommandOptionType.ROLE;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandRoleOptionResponse {
    "type": ApplicationCommandOptionType.ROLE;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandStringOption {
    "type": ApplicationCommandOptionType.STRING;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
    "autocomplete"?: boolean | null;
    "min_length"?: number | null;
    "max_length"?: number | null;
    "choices"?: ApplicationCommandOptionStringChoice[] | null;
}
export interface ApplicationCommandStringOptionResponse {
    "type": ApplicationCommandOptionType.STRING;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
    "autocomplete"?: boolean;
    "choices"?: ApplicationCommandOptionStringChoiceResponse[];
    "min_length"?: number;
    "max_length"?: number;
}
export interface ApplicationCommandSubcommandGroupOption {
    "type": ApplicationCommandOptionType.SUB_COMMAND_GROUP;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
    "options"?: ApplicationCommandSubcommandOption[] | null;
}
export interface ApplicationCommandSubcommandGroupOptionResponse {
    "type": ApplicationCommandOptionType.SUB_COMMAND_GROUP;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
    "options"?: ApplicationCommandSubcommandOptionResponse[];
}
export interface ApplicationCommandSubcommandOption {
    "type": ApplicationCommandOptionType.SUB_COMMAND;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
    "options"?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandUserOption)[] | null;
}
export interface ApplicationCommandSubcommandOptionResponse {
    "type": ApplicationCommandOptionType.SUB_COMMAND;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
    "options"?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandUserOptionResponse)[];
}
export const enum ApplicationCommandType {
    /**
     * Slash commands; a text-based command that shows up when a user types /
     */
    "CHAT" = 1,
    /**
     * A UI-based command that shows up when you right click or tap on a user
     */
    "USER" = 2,
    /**
     * A UI-based command that shows up when you right click or tap on a message
     */
    "MESSAGE" = 3,
    /**
     * A command that represents the primary way to use an application (e.g. launching an Activity)
     */
    "PRIMARY_ENTRY_POINT" = 4
}
export interface ApplicationCommandUpdateRequest {
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description"?: string | null;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "options"?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    "default_member_permissions"?: number | null;
    "dm_permission"?: boolean | null;
    "contexts"?: InteractionContextType[] | null;
    "integration_types"?: ApplicationIntegrationType[] | null;
    "handler"?: null | ApplicationCommandHandler;
    "type"?: null | ApplicationCommandType;
    "id"?: null | SnowflakeType;
}
export interface ApplicationCommandUserOption {
    "type": ApplicationCommandOptionType.USER;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandUserOptionResponse {
    "type": ApplicationCommandOptionType.USER;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "required"?: boolean;
}
export const enum ApplicationExplicitContentFilterTypes {
    /**
     * inherit guild content filter setting
     */
    "INHERIT" = 0,
    /**
     * interactions will always be scanned
     */
    "ALWAYS" = 1
}
export interface ApplicationFormPartial {
    "description"?: {
        "default": string;
        "localizations"?: {
            [additionalProperties: string]: string;
        } | null;
    } | null;
    "icon"?: string | null;
    "cover_image"?: string | null;
    "team_id"?: null | SnowflakeType;
    "flags"?: number | null;
    "interactions_endpoint_url"?: string | null;
    "explicit_content_filter"?: null | ApplicationExplicitContentFilterTypes;
    "max_participants"?: number | null;
    "type"?: null | ApplicationTypes;
    "tags"?: string[] | null;
    "custom_install_url"?: string | null;
    "install_params"?: null | ApplicationOAuth2InstallParams;
    "role_connections_verification_url"?: string | null;
    "integration_types_config"?: {
        [additionalProperties: string]: null | ApplicationIntegrationTypeConfiguration;
    } | null;
}
export const enum ApplicationIdentityProviderAuthType {
    "OIDC" = "OIDC",
    "EPIC_ONLINE_SERVICES_ACCESS_TOKEN" = "EPIC_ONLINE_SERVICES_ACCESS_TOKEN",
    "EPIC_ONLINE_SERVICES_ID_TOKEN" = "EPIC_ONLINE_SERVICES_ID_TOKEN",
    "STEAM_SESSION_TICKET" = "STEAM_SESSION_TICKET",
    "UNITY_SERVICES_ID_TOKEN" = "UNITY_SERVICES_ID_TOKEN",
    "DISCORD_BOT_ISSUED_ACCESS_TOKEN" = "DISCORD_BOT_ISSUED_ACCESS_TOKEN",
    "APPLE_ID_TOKEN" = "APPLE_ID_TOKEN",
    "PLAYSTATION_NETWORK_ID_TOKEN" = "PLAYSTATION_NETWORK_ID_TOKEN"
}
export interface ApplicationIncomingWebhookResponse {
    "application_id": null | SnowflakeType;
    "avatar": string | null;
    "channel_id": null | SnowflakeType;
    "guild_id"?: null | SnowflakeType;
    "id": SnowflakeType;
    "name": string;
    "type": WebhookTypes.APPLICATION_INCOMING;
    "user"?: UserResponse;
}
export const enum ApplicationIntegrationType {
    /**
     * For Guild install.
     */
    "GUILD_INSTALL" = 0,
    /**
     * For User install.
     */
    "USER_INSTALL" = 1
}
export interface ApplicationIntegrationTypeConfiguration {
    "oauth2_install_params"?: null | ApplicationOAuth2InstallParams;
}
export interface ApplicationIntegrationTypeConfigurationResponse {
    "oauth2_install_params"?: ApplicationOAuth2InstallParamsResponse;
}
export interface ApplicationOAuth2InstallParams {
    "scopes"?: (OAuth2Scopes.APPLICATIONS_COMMANDS | OAuth2Scopes.BOT)[] | null;
    "permissions"?: number | null;
}
export interface ApplicationOAuth2InstallParamsResponse {
    "scopes": (OAuth2Scopes.APPLICATIONS_COMMANDS | OAuth2Scopes.BOT)[];
    "permissions": string;
}
export interface ApplicationResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string;
    "type": null | ApplicationTypes;
    "cover_image"?: string;
    "primary_sku_id"?: SnowflakeType;
    "bot"?: UserResponse;
    "slug"?: string;
    "guild_id"?: SnowflakeType;
    "rpc_origins"?: (string | null)[];
    "bot_public"?: boolean;
    "bot_require_code_grant"?: boolean;
    "terms_of_service_url"?: string;
    "privacy_policy_url"?: string;
    "custom_install_url"?: string;
    "install_params"?: ApplicationOAuth2InstallParamsResponse;
    "integration_types_config"?: {
        [additionalProperties: string]: ApplicationIntegrationTypeConfigurationResponse;
    };
    "verify_key": string;
    "flags": number;
    "max_participants"?: number | null;
    "tags"?: string[];
}
export interface ApplicationRoleConnectionsMetadataItemRequest {
    "type": MetadataItemTypes;
    "key": string;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string | null;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string | null;
    } | null;
}
export interface ApplicationRoleConnectionsMetadataItemResponse {
    "type": MetadataItemTypes;
    "key": string;
    "name": string;
    "name_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [additionalProperties: string]: string;
    } | null;
}
export const enum ApplicationTypes {
    "GUILD_ROLE_SUBSCRIPTIONS" = 4
}
export interface ApplicationUserRoleConnectionResponse {
    "platform_name"?: string | null;
    "platform_username"?: string | null;
    "metadata"?: {
        [additionalProperties: string]: string;
    };
}
export interface AttachmentResponse {
    "id": SnowflakeType;
    "filename": string;
    "size": number;
    "url": string;
    "proxy_url": string;
    "width"?: number;
    "height"?: number;
    "duration_secs"?: number;
    "waveform"?: string;
    "description"?: string;
    "content_type"?: string;
    "ephemeral"?: boolean;
    "placeholder"?: string | null;
    "placeholder_version"?: number | null;
    "title"?: string | null;
    "application"?: ApplicationResponse;
    "clip_created_at"?: string;
    "clip_participants"?: UserResponse[];
}
export const enum AuditLogActionTypes {
    "GUILD_UPDATE" = 1,
    "CHANNEL_CREATE" = 10,
    "CHANNEL_UPDATE" = 11,
    "CHANNEL_DELETE" = 12,
    "CHANNEL_OVERWRITE_CREATE" = 13,
    "CHANNEL_OVERWRITE_UPDATE" = 14,
    "CHANNEL_OVERWRITE_DELETE" = 15,
    "MEMBER_KICK" = 20,
    "MEMBER_PRUNE" = 21,
    "MEMBER_BAN_ADD" = 22,
    "MEMBER_BAN_REMOVE" = 23,
    "MEMBER_UPDATE" = 24,
    "MEMBER_ROLE_UPDATE" = 25,
    "MEMBER_MOVE" = 26,
    "MEMBER_DISCONNECT" = 27,
    "BOT_ADD" = 28,
    "ROLE_CREATE" = 30,
    "ROLE_UPDATE" = 31,
    "ROLE_DELETE" = 32,
    "INVITE_CREATE" = 40,
    "INVITE_UPDATE" = 41,
    "INVITE_DELETE" = 42,
    "WEBHOOK_CREATE" = 50,
    "WEBHOOK_UPDATE" = 51,
    "WEBHOOK_DELETE" = 52,
    "EMOJI_CREATE" = 60,
    "EMOJI_UPDATE" = 61,
    "EMOJI_DELETE" = 62,
    "MESSAGE_DELETE" = 72,
    "MESSAGE_BULK_DELETE" = 73,
    "MESSAGE_PIN" = 74,
    "MESSAGE_UNPIN" = 75,
    "INTEGRATION_CREATE" = 80,
    "INTEGRATION_UPDATE" = 81,
    "INTEGRATION_DELETE" = 82,
    "STAGE_INSTANCE_CREATE" = 83,
    "STAGE_INSTANCE_UPDATE" = 84,
    "STAGE_INSTANCE_DELETE" = 85,
    "STICKER_CREATE" = 90,
    "STICKER_UPDATE" = 91,
    "STICKER_DELETE" = 92,
    "GUILD_SCHEDULED_EVENT_CREATE" = 100,
    "GUILD_SCHEDULED_EVENT_UPDATE" = 101,
    "GUILD_SCHEDULED_EVENT_DELETE" = 102,
    "THREAD_CREATE" = 110,
    "THREAD_UPDATE" = 111,
    "THREAD_DELETE" = 112,
    "APPLICATION_COMMAND_PERMISSION_UPDATE" = 121,
    "SOUNDBOARD_SOUND_CREATE" = 130,
    "SOUNDBOARD_SOUND_UPDATE" = 131,
    "SOUNDBOARD_SOUND_DELETE" = 132,
    "AUTO_MODERATION_RULE_CREATE" = 140,
    "AUTO_MODERATION_RULE_UPDATE" = 141,
    "AUTO_MODERATION_RULE_DELETE" = 142,
    "AUTO_MODERATION_BLOCK_MESSAGE" = 143,
    "AUTO_MODERATION_FLAG_TO_CHANNEL" = 144,
    "AUTO_MODERATION_USER_COMM_DISABLED" = 145,
    "AUTO_MODERATION_QUARANTINE_USER" = 146,
    "CREATOR_MONETIZATION_REQUEST_CREATED" = 150,
    "CREATOR_MONETIZATION_TERMS_ACCEPTED" = 151,
    "ONBOARDING_PROMPT_CREATE" = 163,
    "ONBOARDING_PROMPT_UPDATE" = 164,
    "ONBOARDING_PROMPT_DELETE" = 165,
    "ONBOARDING_CREATE" = 166,
    "ONBOARDING_UPDATE" = 167,
    "GUILD_HOME_FEATURE_ITEM" = 171,
    "GUILD_HOME_REMOVE_ITEM" = 172,
    "HARMFUL_LINKS_BLOCKED_MESSAGE" = 180,
    "HOME_SETTINGS_CREATE" = 190,
    "HOME_SETTINGS_UPDATE" = 191,
    "VOICE_CHANNEL_STATUS_CREATE" = 192,
    "VOICE_CHANNEL_STATUS_DELETE" = 193,
    "GUILD_PROFILE_UPDATE" = 211
}
export interface AuditLogEntryResponse {
    "id": SnowflakeType;
    "action_type": AuditLogActionTypes;
    "user_id": null | SnowflakeType;
    "target_id": null | SnowflakeType;
    "changes"?: AuditLogObjectChangeResponse[];
    "options"?: {
        [additionalProperties: string]: string;
    };
    "reason"?: string;
}
export interface AuditLogObjectChangeResponse {
    "key": string | null;
    "new_value"?: unknown;
    "old_value"?: unknown;
}
export const enum AuthorType {
    "USER" = "user",
    "BOT" = "bot",
    "WEBHOOK" = "webhook",
    "NO_USER" = "-user",
    "NO_BOT" = "-bot",
    "NO_WEBHOOK" = "-webhook"
}
export const enum AutomodActionType {
    /**
     * Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked
     */
    "BLOCK_MESSAGE" = 1,
    /**
     * Send a system message to a channel in order to log the user message that triggered the rule
     */
    "FLAG_TO_CHANNEL" = 2,
    /**
     * Temporarily disable a user's ability to communicate in the server (timeout)
     */
    "USER_COMMUNICATION_DISABLED" = 3,
    /**
     * Prevent a user from interacting in the server
     */
    "QUARANTINE_USER" = 4
}
export const enum AutomodEventType {
    /**
     * A user submitted a message to a channel
     */
    "MESSAGE_SEND" = 1,
    /**
     * A user is attempting to join the server or a member's properties were updated.
     */
    "GUILD_MEMBER_JOIN_OR_UPDATE" = 2
}
export const enum AutomodKeywordPresetType {
    /**
     * Words and phrases that may be considered profanity
     */
    "PROFANITY" = 1,
    /**
     * Words and phrases that may be considered as sexual content
     */
    "SEXUAL_CONTENT" = 2,
    /**
     * Words and phrases that may be considered slurs and hate speech
     */
    "SLURS" = 3
}
export const enum AutomodTriggerType {
    /**
     * Check if content contains words from a list of keywords or matches regex
     */
    "KEYWORD" = 1,
    /**
     * DEPRECATED
     */
    "SPAM_LINK" = 2,
    /**
     * Check if content represents generic spam
     */
    "ML_SPAM" = 3,
    /**
     * Check if content contains words from internal pre-defined wordsets
     */
    "DEFAULT_KEYWORD_LIST" = 4,
    /**
     * Check if content contains more unique mentions than allowed
     */
    "MENTION_SPAM" = 5
}
export const enum AvailableLocalesEnum {
    /**
     * The ar locale
     */
    "ar" = "ar",
    /**
     * The bg locale
     */
    "bg" = "bg",
    /**
     * The cs locale
     */
    "cs" = "cs",
    /**
     * The da locale
     */
    "da" = "da",
    /**
     * The de locale
     */
    "de" = "de",
    /**
     * The el locale
     */
    "el" = "el",
    /**
     * The en-GB locale
     */
    "en-GB" = "en-GB",
    /**
     * The en-US locale
     */
    "en-US" = "en-US",
    /**
     * The es-419 locale
     */
    "es-419" = "es-419",
    /**
     * The es-ES locale
     */
    "es-ES" = "es-ES",
    /**
     * The fi locale
     */
    "fi" = "fi",
    /**
     * The fr locale
     */
    "fr" = "fr",
    /**
     * The he locale
     */
    "he" = "he",
    /**
     * The hi locale
     */
    "hi" = "hi",
    /**
     * The hr locale
     */
    "hr" = "hr",
    /**
     * The hu locale
     */
    "hu" = "hu",
    /**
     * The id locale
     */
    "id" = "id",
    /**
     * The it locale
     */
    "it" = "it",
    /**
     * The ja locale
     */
    "ja" = "ja",
    /**
     * The ko locale
     */
    "ko" = "ko",
    /**
     * The lt locale
     */
    "lt" = "lt",
    /**
     * The nl locale
     */
    "nl" = "nl",
    /**
     * The no locale
     */
    "no" = "no",
    /**
     * The pl locale
     */
    "pl" = "pl",
    /**
     * The pt-BR locale
     */
    "pt-BR" = "pt-BR",
    /**
     * The ro locale
     */
    "ro" = "ro",
    /**
     * The ru locale
     */
    "ru" = "ru",
    /**
     * The sv-SE locale
     */
    "sv-SE" = "sv-SE",
    /**
     * The th locale
     */
    "th" = "th",
    /**
     * The tr locale
     */
    "tr" = "tr",
    /**
     * The uk locale
     */
    "uk" = "uk",
    /**
     * The vi locale
     */
    "vi" = "vi",
    /**
     * The zh-CN locale
     */
    "zh-CN" = "zh-CN",
    /**
     * The zh-TW locale
     */
    "zh-TW" = "zh-TW"
}
export interface BanUserFromGuildRequest {
    "delete_message_seconds"?: number | null;
    "delete_message_days"?: number | null;
}
export interface BaseCreateMessageCreateRequest {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "sticker_ids"?: SnowflakeType[] | null;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "flags"?: number | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "poll"?: null | PollCreateRequest;
    "shared_client_theme"?: null | CustomClientThemeShareRequest;
}
export interface BasicApplicationResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string;
    "type": null | ApplicationTypes;
    "cover_image"?: string;
    "primary_sku_id"?: SnowflakeType;
    "bot"?: UserResponse;
}
export interface BasicGuildMemberResponse {
    "avatar": string | null;
    "avatar_decoration_data"?: null | UserAvatarDecorationResponse;
    "banner": string | null;
    "communication_disabled_until": string | null;
    "flags": number;
    "joined_at": string;
    "nick": string | null;
    "pending": boolean;
    "premium_since": string | null;
    "roles": SnowflakeType[];
    "collectibles"?: null | UserCollectiblesResponse;
}
export interface BasicMessageResponse {
    "type": MessageType;
    "content": string;
    "mentions": UserResponse[];
    "mention_roles": SnowflakeType[];
    "attachments": MessageAttachmentResponse[];
    "embeds": MessageEmbedResponse[];
    "timestamp": string;
    "edited_timestamp": string | null;
    "flags": number;
    "components": (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    "stickers"?: (GuildStickerResponse | StandardStickerResponse)[];
    "sticker_items"?: MessageStickerItemResponse[];
    "id": SnowflakeType;
    "channel_id": SnowflakeType;
    "author": UserResponse;
    "pinned": boolean;
    "mention_everyone": boolean;
    "tts": boolean;
    "call"?: MessageCallResponse;
    "activity"?: MessageActivityResponse;
    "application"?: BasicApplicationResponse;
    "application_id"?: SnowflakeType;
    "interaction"?: MessageInteractionResponse;
    "nonce"?: number | string | null;
    "webhook_id"?: SnowflakeType;
    "message_reference"?: MessageReferenceResponse;
    "thread"?: ThreadResponse;
    "mention_channels"?: (null | MessageMentionChannelResponse)[];
    "role_subscription_data"?: MessageRoleSubscriptionDataResponse;
    "purchase_notification"?: PurchaseNotificationResponse;
    "position"?: number;
    "resolved"?: ResolvedObjectsResponse;
    "poll"?: PollResponse;
    "shared_client_theme"?: null | CustomClientThemeResponse;
    "interaction_metadata"?: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse;
    "message_snapshots"?: MessageSnapshotResponse[];
}
export interface BlockMessageAction {
    "type": AutomodActionType.BLOCK_MESSAGE;
    "metadata"?: null | BlockMessageActionMetadata;
}
export interface BlockMessageActionMetadata {
    "custom_message"?: string | null;
}
export interface BlockMessageActionMetadataResponse {
    "custom_message"?: string;
}
export interface BlockMessageActionResponse {
    "type": AutomodActionType.BLOCK_MESSAGE;
    "metadata": BlockMessageActionMetadataResponse;
}
export interface BotAccountPatchRequest {
    "username": string;
    "avatar"?: string | null;
    "banner"?: string | null;
}
export interface BotAddGuildMemberRequest {
    "nick"?: string | null;
    "roles"?: SnowflakeType[] | null;
    "mute"?: boolean | null;
    "deaf"?: boolean | null;
    "access_token": string;
    "flags"?: number | null;
}
export interface BulkBanUsersRequest {
    "user_ids": SnowflakeType[];
    "delete_message_seconds"?: number | null;
}
export interface BulkBanUsersResponse {
    "banned_users": SnowflakeType[];
    "failed_users": SnowflakeType[];
}
export interface BulkLobbyMemberRequest {
    "id": SnowflakeType;
    "metadata"?: {
        [additionalProperties: string]: string;
    } | null;
    "flags"?: null | 1;
    "remove_member"?: boolean | null;
}
export interface ButtonComponentForMessageRequest {
    "type": MessageComponentTypes.BUTTON;
    "id"?: number | null;
    "custom_id"?: string | null;
    "style": ButtonStyleTypes;
    "label"?: string | null;
    "disabled"?: boolean | null;
    "url"?: string | null;
    "sku_id"?: null | SnowflakeType;
    "emoji"?: null | ComponentEmojiForRequest;
}
export interface ButtonComponentResponse {
    "type": MessageComponentTypes.BUTTON;
    "id": number;
    "custom_id"?: string;
    "style": ButtonStyleTypes;
    "label"?: string;
    "disabled"?: boolean;
    "emoji"?: ComponentEmojiResponse;
    "url"?: string | null;
    "sku_id"?: SnowflakeType;
}
export const enum ButtonStyleTypes {
    "PRIMARY" = 1,
    "SECONDARY" = 2,
    "SUCCESS" = 3,
    "DANGER" = 4,
    "LINK" = 5,
    "PREMIUM" = 6
}
export interface ChannelFollowerResponse {
    "channel_id": SnowflakeType;
    "webhook_id": SnowflakeType;
}
export interface ChannelFollowerWebhookResponse {
    "application_id": null | SnowflakeType;
    "avatar": string | null;
    "channel_id": null | SnowflakeType;
    "guild_id"?: null | SnowflakeType;
    "id": SnowflakeType;
    "name": string;
    "type": WebhookTypes.CHANNEL_FOLLOWER;
    "user"?: UserResponse;
    "source_guild"?: WebhookSourceGuildResponse;
    "source_channel"?: WebhookSourceChannelResponse;
}
export interface ChannelPermissionOverwriteRequest {
    "id": SnowflakeType;
    "type"?: null | ChannelPermissionOverwrites;
    "allow"?: number | null;
    "deny"?: number | null;
}
export interface ChannelPermissionOverwriteResponse {
    "id": SnowflakeType;
    "type": ChannelPermissionOverwrites;
    "allow": string;
    "deny": string;
}
export const enum ChannelPermissionOverwrites {
    "ROLE" = 0,
    "MEMBER" = 1
}
export interface ChannelSelectComponentForMessageRequest {
    "type": MessageComponentTypes.CHANNEL_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: ChannelSelectDefaultValue[] | null;
    "channel_types"?: ChannelTypes[] | null;
}
export interface ChannelSelectComponentForModalRequest {
    "type": MessageComponentTypes.CHANNEL_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: ChannelSelectDefaultValue[] | null;
    "channel_types"?: ChannelTypes[] | null;
}
export interface ChannelSelectComponentResponse {
    "type": MessageComponentTypes.CHANNEL_SELECT;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "channel_types"?: ChannelTypes[];
    "default_values"?: ChannelSelectDefaultValueResponse[];
}
export interface ChannelSelectDefaultValue {
    "type": SnowflakeSelectDefaultValueTypes.CHANNEL;
    "id": SnowflakeType;
}
export interface ChannelSelectDefaultValueResponse {
    "type": SnowflakeSelectDefaultValueTypes.CHANNEL;
    "id": SnowflakeType;
}
export const enum ChannelTypes {
    /**
     * A direct message between users
     */
    "DM" = 1,
    /**
     * A direct message between multiple users
     */
    "GROUP_DM" = 3,
    /**
     * A text channel within a server
     */
    "GUILD_TEXT" = 0,
    /**
     * A voice channel within a server
     */
    "GUILD_VOICE" = 2,
    /**
     * An organizational category that contains up to 50 channels
     */
    "GUILD_CATEGORY" = 4,
    /**
     * A channel that users can follow and crosspost into their own server (formerly news channels)
     */
    "GUILD_ANNOUNCEMENT" = 5,
    /**
     * A temporary sub-channel within a GUILD_ANNOUNCEMENT channel
     */
    "ANNOUNCEMENT_THREAD" = 10,
    /**
     * A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set
     */
    "PUBLIC_THREAD" = 11,
    /**
     * A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
     */
    "PRIVATE_THREAD" = 12,
    /**
     * A voice channel for hosting events with an audience
     */
    "GUILD_STAGE_VOICE" = 13,
    /**
     * The channel in a hub containing the listed servers
     */
    "GUILD_DIRECTORY" = 14,
    /**
     * Channel that can only contain threads
     */
    "GUILD_FORUM" = 15
}
export interface CheckboxComponentForModalRequest {
    "type": MessageComponentTypes.CHECKBOX;
    "id"?: number | null;
    "custom_id": string;
    "default"?: boolean | null;
}
export interface CheckboxGroupComponentForModalRequest {
    "type": MessageComponentTypes.CHECKBOX_GROUP;
    "id"?: number | null;
    "custom_id": string;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "required"?: boolean | null;
    "options": CheckboxGroupOptionForRequest[];
}
export interface CheckboxGroupOptionForRequest {
    "label": string;
    "value": string;
    "description"?: string | null;
    "default"?: boolean | null;
}
export interface CommandPermissionResponse {
    "id": SnowflakeType;
    "type": ApplicationCommandPermissionType;
    "permission": boolean;
}
export interface CommandPermissionsResponse {
    "id": SnowflakeType;
    "application_id": SnowflakeType;
    "guild_id": SnowflakeType;
    "permissions": CommandPermissionResponse[];
}
export interface ComponentEmojiForRequest {
    "id"?: null | SnowflakeType;
    "name": string;
}
export interface ComponentEmojiResponse {
    "id"?: SnowflakeType;
    "name": string;
    "animated"?: boolean;
}
export interface ConnectedAccountGuildResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
}
export interface ConnectedAccountIntegrationResponse {
    "id": string;
    "type": IntegrationTypes;
    "account": AccountResponse;
    "guild": ConnectedAccountGuildResponse;
}
export const enum ConnectedAccountProviders {
    "BATTLENET" = "battlenet",
    "BLUESKY" = "bluesky",
    "BUNGIE" = "bungie",
    "EBAY" = "ebay",
    "EPIC_GAMES" = "epicgames",
    "FACEBOOK" = "facebook",
    "GITHUB" = "github",
    "INSTAGRAM" = "instagram",
    "MASTODON" = "mastodon",
    "LEAGUE_OF_LEGENDS" = "leagueoflegends",
    "PAYPAL" = "paypal",
    "PLAYSTATION" = "playstation",
    "REDDIT" = "reddit",
    "RIOT_GAMES" = "riotgames",
    "ROBLOX" = "roblox",
    "SKYPE" = "skype",
    "SPOTIFY" = "spotify",
    "STEAM" = "steam",
    "TIKTOK" = "tiktok",
    "TWITCH" = "twitch",
    "TWITTER" = "twitter",
    "XBOX" = "xbox",
    "YOUTUBE" = "youtube",
    "DOMAIN" = "domain"
}
export interface ConnectedAccountResponse {
    "id": string;
    "name": string | null;
    "type": ConnectedAccountProviders;
    "friend_sync": boolean;
    "integrations"?: ConnectedAccountIntegrationResponse[];
    "show_activity": boolean;
    "two_way_link": boolean;
    "verified": boolean;
    "visibility": ConnectedAccountVisibility;
    "revoked"?: boolean;
}
export const enum ConnectedAccountVisibility {
    "NONE" = 0,
    "EVERYONE" = 1
}
export interface ContainerComponentForMessageRequest {
    "type": MessageComponentTypes.CONTAINER;
    "id"?: number | null;
    "accent_color"?: number | null;
    "components": (ActionRowComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[];
    "spoiler"?: boolean | null;
}
export interface ContainerComponentResponse {
    "type": MessageComponentTypes.CONTAINER;
    "id": number;
    "accent_color": number | null;
    "components": (ActionRowComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    "spoiler": boolean;
}
export interface CreateEntitlementRequestData {
    "sku_id": SnowflakeType;
    "owner_id": SnowflakeType;
    "owner_type": EntitlementOwnerTypes;
}
export interface CreateForumThreadRequest {
    "name": string;
    "auto_archive_duration"?: null | ThreadAutoArchiveDuration;
    "rate_limit_per_user"?: number | null;
    "applied_tags"?: SnowflakeType[] | null;
    "message": BaseCreateMessageCreateRequest;
}
export interface CreateGroupDMInviteRequest {
    "max_age"?: number | null;
}
export interface CreateGuildChannelRequest {
    "type"?: null | (ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_ANNOUNCEMENT | ChannelTypes.GUILD_STAGE_VOICE | ChannelTypes.GUILD_DIRECTORY | ChannelTypes.GUILD_FORUM);
    "name": string;
    "position"?: number | null;
    "topic"?: string | null;
    "bitrate"?: number | null;
    "user_limit"?: number | null;
    "nsfw"?: boolean | null;
    "rate_limit_per_user"?: number | null;
    "parent_id"?: null | SnowflakeType;
    "permission_overwrites"?: ChannelPermissionOverwriteRequest[] | null;
    "rtc_region"?: string | null;
    "video_quality_mode"?: null | VideoQualityModes;
    "default_auto_archive_duration"?: null | ThreadAutoArchiveDuration;
    "default_reaction_emoji"?: null | UpdateDefaultReactionEmojiRequest;
    "default_thread_rate_limit_per_user"?: number | null;
    "default_sort_order"?: null | ThreadSortOrder;
    "default_forum_layout"?: null | ForumLayout;
    "default_tag_setting"?: null | ThreadSearchTagSetting;
    "available_tags"?: (null | CreateOrUpdateThreadTagRequest)[] | null;
}
export interface CreateGuildInviteRequest {
    "max_age"?: number | null;
    "temporary"?: boolean | null;
    "max_uses"?: number | null;
    "unique"?: boolean | null;
    "target_user_id"?: null | SnowflakeType;
    "target_application_id"?: null | SnowflakeType;
    "target_type"?: null | (InviteTargetTypes.STREAM | InviteTargetTypes.EMBEDDED_APPLICATION);
}
export interface CreateMessageInteractionCallbackRequest {
    "type": InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE;
    "data": IncomingWebhookInteractionRequest;
}
export interface CreateMessageInteractionCallbackResponse {
    "type": InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE;
    "message": MessageResponse;
}
export interface CreateOrUpdateThreadTagRequest {
    "name": string;
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
    "moderated"?: boolean | null;
}
export interface CreatePrivateChannelRequest {
    "recipient_id"?: null | SnowflakeType;
    "access_tokens"?: string[] | null;
    "nicks"?: {
        [additionalProperties: string]: string | null;
    } | null;
}
export interface CreateRoleRequest {
    "name"?: string | null;
    "permissions"?: number | null;
    "color"?: number | null;
    "colors"?: null | RoleColors;
    "hoist"?: boolean | null;
    "mentionable"?: boolean | null;
    "icon"?: string | null;
    "unicode_emoji"?: string | null;
}
export interface CreateTextThreadWithMessageRequest {
    "name": string;
    "auto_archive_duration"?: null | ThreadAutoArchiveDuration;
    "rate_limit_per_user"?: number | null;
}
export interface CreateTextThreadWithoutMessageRequest {
    "name": string;
    "auto_archive_duration"?: null | ThreadAutoArchiveDuration;
    "rate_limit_per_user"?: number | null;
    "type"?: null | (ChannelTypes.ANNOUNCEMENT_THREAD | ChannelTypes.PUBLIC_THREAD | ChannelTypes.PRIVATE_THREAD);
    "invitable"?: boolean | null;
}
export interface CreatedThreadResponse {
    "id": SnowflakeType;
    "type": ChannelTypes.ANNOUNCEMENT_THREAD | ChannelTypes.PUBLIC_THREAD | ChannelTypes.PRIVATE_THREAD;
    "last_message_id"?: null | SnowflakeType;
    "flags": number;
    "last_pin_timestamp"?: string | null;
    "guild_id": SnowflakeType;
    "name": string;
    "parent_id"?: null | SnowflakeType;
    "rate_limit_per_user"?: number;
    "bitrate"?: number;
    "user_limit"?: number;
    "rtc_region"?: string | null;
    "video_quality_mode"?: VideoQualityModes;
    "permissions"?: string | null;
    "owner_id": SnowflakeType;
    "thread_metadata": ThreadMetadataResponse;
    "message_count": number;
    "member_count": number;
    "total_message_sent": number;
    "applied_tags"?: SnowflakeType[];
    "member"?: ThreadMemberResponse;
}
export interface CustomClientThemeResponse {
    "colors": string[];
    "gradient_angle": number;
    "base_mix": number;
    "base_theme": MessageShareCustomUserThemeBaseTheme;
}
export interface CustomClientThemeShareRequest {
    "colors": string[];
    "gradient_angle": number;
    "base_mix": number;
    "base_theme"?: null | MessageShareCustomUserThemeBaseTheme;
}
export interface DefaultKeywordListTriggerMetadata {
    "allow_list"?: string[] | null;
    "presets"?: AutomodKeywordPresetType[] | null;
}
export interface DefaultKeywordListTriggerMetadataResponse {
    "allow_list": string[];
    "presets": AutomodKeywordPresetType[];
}
export interface DefaultKeywordListUpsertRequest {
    "name": string;
    "event_type": AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type": AutomodTriggerType.DEFAULT_KEYWORD_LIST;
    "trigger_metadata": DefaultKeywordListTriggerMetadata;
}
export interface DefaultKeywordListUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: AutomodTriggerType.DEFAULT_KEYWORD_LIST;
    "trigger_metadata"?: DefaultKeywordListTriggerMetadata;
}
export interface DefaultKeywordRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": AutomodTriggerType.DEFAULT_KEYWORD_LIST;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": DefaultKeywordListTriggerMetadataResponse;
}
export interface DefaultReactionEmojiResponse {
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
}
export interface DiscordIntegrationResponse {
    "type": IntegrationTypes.DISCORD;
    "name": string | null;
    "account": AccountResponse;
    "enabled": boolean;
    "id": SnowflakeType;
    "application": IntegrationApplicationResponse;
    "scopes": (OAuth2Scopes.APPLICATIONS_COMMANDS | OAuth2Scopes.BOT | OAuth2Scopes.WEBHOOK_INCOMING)[];
    "user"?: UserResponse;
}
export interface EmbeddedActivityInstance {
    "application_id": SnowflakeType;
    "instance_id": string;
    "launch_id": string;
    "location": GuildChannelLocation | PrivateChannelLocation;
    "users": SnowflakeType[];
}
export const enum EmbeddedActivityLocationKind {
    /**
     * guild channel
     */
    "GUILD_CHANNEL" = "gc",
    /**
     * private channel
     */
    "PRIVATE_CHANNEL" = "pc",
    /**
     * party
     */
    "PARTY" = "party"
}
export interface EmojiResponse {
    "id": SnowflakeType;
    "name": string;
    "user"?: UserResponse;
    "roles": SnowflakeType[];
    "require_colons": boolean;
    "managed": boolean;
    "animated": boolean;
    "available": boolean;
}
export const enum EntitlementOwnerTypes {
}
export interface EntitlementResponse {
    "id": SnowflakeType;
    "sku_id": SnowflakeType;
    "application_id": SnowflakeType;
    "user_id": SnowflakeType;
    "guild_id"?: null | SnowflakeType;
    "deleted": boolean;
    "starts_at"?: string | null;
    "ends_at"?: string | null;
    "type": EntitlementTypes;
    "fulfilled_at"?: string | null;
    "fulfillment_status"?: null | EntitlementTenantFulfillmentStatusResponse;
    "consumed"?: boolean | null;
    "gifter_user_id"?: null | SnowflakeType;
    "parent_id"?: null | SnowflakeType;
}
export const enum EntitlementTenantFulfillmentStatusResponse {
    "UNKNOWN" = 0,
    "FULFILLMENT_NOT_NEEDED" = 1,
    "FULFILLMENT_NEEDED" = 2,
    "FULFILLED" = 3,
    "FULFILLMENT_FAILED" = 4,
    "UNFULFILLMENT_NEEDED" = 5,
    "UNFULFILLED" = 6,
    "UNFULFILLMENT_FAILED" = 7
}
export const enum EntitlementTypes {
    "APPLICATION_SUBSCRIPTION" = 8,
    "QUEST_REWARD" = 10
}
export interface EntityMetadataExternal {
    "location": string;
}
export interface EntityMetadataExternalResponse {
    "location": string;
}
export interface EntityMetadataStageInstance {
    [additionalProperties: string]: never;
}
export interface EntityMetadataStageInstanceResponse {
    [additionalProperties: string]: never;
}
export interface EntityMetadataVoice {
    [additionalProperties: string]: never;
}
export interface EntityMetadataVoiceResponse {
    [additionalProperties: string]: never;
}
export interface ExternalConnectionIntegrationResponse {
    "type": IntegrationTypes.TWITCH | IntegrationTypes.YOUTUBE;
    "name": string | null;
    "account": AccountResponse;
    "enabled": boolean;
    "id": string;
    "user": UserResponse;
    "revoked"?: boolean;
    "expire_behavior"?: IntegrationExpireBehaviorTypes;
    "expire_grace_period"?: IntegrationExpireGracePeriodTypes;
    "subscriber_count"?: number;
    "synced_at"?: string;
    "role_id"?: null | SnowflakeType;
    "syncing"?: boolean;
    "enable_emoticons"?: boolean;
}
export interface ExternalScheduledEventCreateRequest {
    "name": string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time": string;
    "scheduled_end_time"?: string | null;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "entity_type": GuildScheduledEventEntityTypes.EXTERNAL;
    "channel_id"?: null | SnowflakeType;
    "entity_metadata": EntityMetadataExternal;
}
export interface ExternalScheduledEventPatchRequestPartial {
    "status"?: null | GuildScheduledEventStatuses;
    "name"?: string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time"?: string;
    "scheduled_end_time"?: string | null;
    "entity_type"?: null | GuildScheduledEventEntityTypes.EXTERNAL;
    "privacy_level"?: GuildScheduledEventPrivacyLevels;
    "channel_id"?: null | SnowflakeType;
    "entity_metadata"?: EntityMetadataExternal;
}
export interface ExternalScheduledEventResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "name": string;
    "description": string | null;
    "channel_id": null | SnowflakeType;
    "creator_id": null | SnowflakeType;
    "creator"?: UserResponse;
    "image": string | null;
    "scheduled_start_time": string;
    "scheduled_end_time": string | null;
    "status": GuildScheduledEventStatuses;
    "entity_type": GuildScheduledEventEntityTypes.EXTERNAL;
    "entity_id": null | SnowflakeType;
    "user_count"?: number;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "user_rsvp"?: null | ScheduledEventUserResponse;
    "entity_metadata": EntityMetadataExternalResponse;
}
export interface FileComponentForMessageRequest {
    "type": MessageComponentTypes.FILE;
    "id"?: number | null;
    "spoiler"?: boolean | null;
    "file": UnfurledMediaRequestWithAttachmentReferenceRequired;
}
export interface FileComponentResponse {
    "type": MessageComponentTypes.FILE;
    "id": number;
    "file": UnfurledMediaResponse;
    "name": string | null;
    "size": number | null;
    "spoiler": boolean;
}
export interface FileUploadComponentForModalRequest {
    "type": MessageComponentTypes.FILE_UPLOAD;
    "id"?: number | null;
    "custom_id": string;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "required"?: boolean | null;
}
export interface FlagToChannelAction {
    "type": AutomodActionType.FLAG_TO_CHANNEL;
    "metadata": FlagToChannelActionMetadata;
}
export interface FlagToChannelActionMetadata {
    "channel_id": SnowflakeType;
}
export interface FlagToChannelActionMetadataResponse {
    "channel_id": SnowflakeType;
}
export interface FlagToChannelActionResponse {
    "type": AutomodActionType.FLAG_TO_CHANNEL;
    "metadata": FlagToChannelActionMetadataResponse;
}
export const enum ForumLayout {
    /**
     * No default has been set for forum channel
     */
    "DEFAULT" = 0,
    /**
     * Display posts as a list
     */
    "LIST" = 1,
    /**
     * Display posts as a collection of tiles
     */
    "GRID" = 2
}
export interface ForumTagResponse {
    "id": SnowflakeType;
    "name": string;
    "moderated": boolean;
    "emoji_id": null | SnowflakeType;
    "emoji_name": string | null;
}
export interface FriendInviteResponse {
    "type": InviteTypes.FRIEND;
    "code": string;
    "inviter"?: UserResponse;
    "max_age"?: number;
    "created_at"?: string;
    "expires_at": string | null;
    "friends_count"?: number;
    "channel": null | InviteChannelResponse;
    "is_contact"?: boolean;
    "uses"?: number;
    "max_uses"?: number;
    "flags"?: number;
}
export interface GatewayBotResponse {
    "url": string;
    "session_start_limit": GatewayBotSessionStartLimitResponse;
    "shards": number;
}
export interface GatewayBotSessionStartLimitResponse {
    "max_concurrency": number;
    "remaining": number;
    "reset_after": number;
    "total": number;
}
export interface GatewayResponse {
    "url": string;
}
export interface GithubAuthor {
    "username"?: string | null;
    "name": string;
}
export interface GithubCheckApp {
    "name": string;
}
export interface GithubCheckPullRequest {
    "number": number;
}
export interface GithubCheckRun {
    "conclusion"?: string | null;
    "name": string;
    "html_url": string;
    "check_suite": GithubCheckSuite;
    "details_url"?: string | null;
    "output"?: null | GithubCheckRunOutput;
    "pull_requests"?: GithubCheckPullRequest[] | null;
}
export interface GithubCheckRunOutput {
    "title"?: string | null;
    "summary"?: string | null;
}
export interface GithubCheckSuite {
    "conclusion"?: string | null;
    "head_branch"?: string | null;
    "head_sha": string;
    "pull_requests"?: GithubCheckPullRequest[] | null;
    "app": GithubCheckApp;
}
export interface GithubComment {
    "id": number;
    "html_url": string;
    "user": GithubUser;
    "commit_id"?: string | null;
    "body": string;
}
export interface GithubCommit {
    "id": string;
    "url": string;
    "message": string;
    "author": GithubAuthor;
}
export interface GithubDiscussion {
    "title": string;
    "number": number;
    "html_url": string;
    "answer_html_url"?: string | null;
    "body"?: string | null;
    "user": GithubUser;
}
export interface GithubIssue {
    "id": number;
    "number": number;
    "html_url": string;
    "user": GithubUser;
    "title": string;
    "body"?: string | null;
    "pull_request"?: unknown;
}
export interface GithubRelease {
    "id": number;
    "tag_name": string;
    "html_url": string;
    "author": GithubUser;
}
export interface GithubRepository {
    "id": number;
    "html_url": string;
    "name": string;
    "full_name": string;
}
export interface GithubReview {
    "user": GithubUser;
    "body"?: string | null;
    "html_url": string;
    "state": string;
}
export interface GithubUser {
    "id": number;
    "login": string;
    "html_url": string;
    "avatar_url": string;
}
export interface GithubWebhook {
    "action"?: string | null;
    "ref"?: string | null;
    "ref_type"?: string | null;
    "comment"?: null | GithubComment;
    "issue"?: null | GithubIssue;
    "pull_request"?: null | GithubIssue;
    "repository"?: null | GithubRepository;
    "forkee"?: null | GithubRepository;
    "sender": GithubUser;
    "member"?: null | GithubUser;
    "release"?: null | GithubRelease;
    "head_commit"?: null | GithubCommit;
    "commits"?: GithubCommit[] | null;
    "forced"?: boolean | null;
    "compare"?: string | null;
    "review"?: null | GithubReview;
    "check_run"?: null | GithubCheckRun;
    "check_suite"?: null | GithubCheckSuite;
    "discussion"?: null | GithubDiscussion;
    "answer"?: null | GithubComment;
}
export interface GroupDMInviteResponse {
    "type": InviteTypes.GROUP_DM;
    "code": string;
    "inviter"?: UserResponse;
    "max_age"?: number;
    "created_at"?: string;
    "expires_at": string | null;
    "channel": InviteChannelResponse;
    "approximate_member_count"?: number | null;
}
export interface GuildAuditLogResponse {
    "audit_log_entries": AuditLogEntryResponse[];
    "users": UserResponse[];
    "integrations": (PartialDiscordIntegrationResponse | PartialExternalConnectionIntegrationResponse | PartialGuildSubscriptionIntegrationResponse)[];
    "webhooks": (ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse)[];
    "guild_scheduled_events": (ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse)[];
    "threads": ThreadResponse[];
    "application_commands": ApplicationCommandResponse[];
    "auto_moderation_rules": (DefaultKeywordRuleResponse | KeywordRuleResponse | MLSpamRuleResponse | MentionSpamRuleResponse | SpamLinkRuleResponse | null)[];
}
export interface GuildBanResponse {
    "user": UserResponse;
    "reason": string | null;
}
export interface GuildChannelLocation {
    "id": string;
    "kind": EmbeddedActivityLocationKind.GUILD_CHANNEL;
    "channel_id": SnowflakeType;
    "guild_id": SnowflakeType;
}
export interface GuildChannelResponse {
    "id": SnowflakeType;
    "type": ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_ANNOUNCEMENT | ChannelTypes.GUILD_STAGE_VOICE | ChannelTypes.GUILD_DIRECTORY | ChannelTypes.GUILD_FORUM;
    "last_message_id"?: null | SnowflakeType;
    "flags": number;
    "last_pin_timestamp"?: string | null;
    "guild_id": SnowflakeType;
    "name": string;
    "parent_id"?: null | SnowflakeType;
    "rate_limit_per_user"?: number;
    "bitrate"?: number;
    "user_limit"?: number;
    "rtc_region"?: string | null;
    "video_quality_mode"?: VideoQualityModes;
    "permissions"?: string | null;
    "topic"?: string | null;
    "default_auto_archive_duration"?: ThreadAutoArchiveDuration;
    "default_thread_rate_limit_per_user"?: number;
    "position": number;
    "permission_overwrites"?: ChannelPermissionOverwriteResponse[];
    "nsfw"?: boolean;
    "available_tags"?: ForumTagResponse[];
    "default_reaction_emoji"?: null | DefaultReactionEmojiResponse;
    "default_sort_order"?: null | ThreadSortOrder;
    "default_forum_layout"?: null | ForumLayout;
    "default_tag_setting"?: null | ThreadSearchTagSetting;
    "hd_streaming_until"?: string;
    "hd_streaming_buyer_id"?: SnowflakeType;
}
export const enum GuildExplicitContentFilterTypes {
    /**
     * media content will not be scanned
     */
    "DISABLED" = 0,
    /**
     * media content sent by members without roles will be scanned
     */
    "MEMBERS_WITHOUT_ROLES" = 1,
    /**
     * media content sent by all members will be scanned
     */
    "ALL_MEMBERS" = 2
}
export const enum GuildFeatures {
    /**
     * guild has access to set an animated guild banner image
     */
    "ANIMATED_BANNER" = "ANIMATED_BANNER",
    /**
     * guild has access to set an animated guild icon
     */
    "ANIMATED_ICON" = "ANIMATED_ICON",
    /**
     * guild is using the old permissions configuration behavior
     */
    "APPLICATION_COMMAND_PERMISSIONS_V2" = "APPLICATION_COMMAND_PERMISSIONS_V2",
    /**
     * guild has set up auto moderation rules
     */
    "AUTO_MODERATION" = "AUTO_MODERATION",
    /**
     * guild has access to set a guild banner image
     */
    "BANNER" = "BANNER",
    /**
     * guild can enable welcome screen, Membership Screening, stage channels and discovery, and             receives community updates
     */
    "COMMUNITY" = "COMMUNITY",
    /**
     * guild has enabled monetization
     */
    "CREATOR_MONETIZABLE_PROVISIONAL" = "CREATOR_MONETIZABLE_PROVISIONAL",
    /**
     * guild has enabled the role subscription promo page
     */
    "CREATOR_STORE_PAGE" = "CREATOR_STORE_PAGE",
    /**
     * guild has been set as a support server on the App Directory
     */
    "DEVELOPER_SUPPORT_SERVER" = "DEVELOPER_SUPPORT_SERVER",
    /**
     * guild is able to be discovered in the directory
     */
    "DISCOVERABLE" = "DISCOVERABLE",
    /**
     * guild is able to be featured in the directory
     */
    "FEATURABLE" = "FEATURABLE",
    /**
     * guild has paused invites, preventing new users from joining
     */
    "INVITES_DISABLED" = "INVITES_DISABLED",
    /**
     * guild has access to set an invite splash background
     */
    "INVITE_SPLASH" = "INVITE_SPLASH",
    /**
     * guild has enabled Membership Screening
     */
    "MEMBER_VERIFICATION_GATE_ENABLED" = "MEMBER_VERIFICATION_GATE_ENABLED",
    /**
     * guild has increased custom sticker slots
     */
    "MORE_STICKERS" = "MORE_STICKERS",
    /**
     * guild has access to create announcement channels
     */
    "NEWS" = "NEWS",
    /**
     * guild is partnered
     */
    "PARTNERED" = "PARTNERED",
    /**
     * guild can be previewed before joining via Membership Screening or the directory
     */
    "PREVIEW_ENABLED" = "PREVIEW_ENABLED",
    /**
     * guild has disabled activity alerts in the configured safety alerts channel
     */
    "RAID_ALERTS_DISABLED" = "RAID_ALERTS_DISABLED",
    /**
     * guild is able to set role icons
     */
    "ROLE_ICONS" = "ROLE_ICONS",
    /**
     * guild has role subscriptions that can be purchased
     */
    "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
    /**
     * guild has enabled role subscriptions
     */
    "ROLE_SUBSCRIPTIONS_ENABLED" = "ROLE_SUBSCRIPTIONS_ENABLED",
    /**
     * guild has enabled ticketed events
     */
    "TICKETED_EVENTS_ENABLED" = "TICKETED_EVENTS_ENABLED",
    /**
     * guild has access to set a vanity URL
     */
    "VANITY_URL" = "VANITY_URL",
    /**
     * guild is verified
     */
    "VERIFIED" = "VERIFIED",
    /**
     * guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
     */
    "VIP_REGIONS" = "VIP_REGIONS",
    /**
     * guild has enabled the welcome screen
     */
    "WELCOME_SCREEN_ENABLED" = "WELCOME_SCREEN_ENABLED",
    /**
     * guild is an official guild for one or more games
     */
    "OFFICIAL_GAME_GUILD" = "OFFICIAL_GAME_GUILD"
}
export interface GuildHomeSettingsResponse {
    "guild_id": SnowflakeType;
    "enabled": boolean;
    "welcome_message"?: WelcomeMessageResponse;
    "new_member_actions": (null | NewMemberActionResponse)[];
    "resource_channels": (null | ResourceChannelResponse)[];
}
export interface GuildIncomingWebhookResponse {
    "application_id": null | SnowflakeType;
    "avatar": string | null;
    "channel_id": null | SnowflakeType;
    "guild_id"?: null | SnowflakeType;
    "id": SnowflakeType;
    "name": string;
    "type": WebhookTypes.GUILD_INCOMING;
    "user"?: UserResponse;
    "token"?: string;
    "url"?: string;
}
export interface GuildInviteResponse {
    "type": InviteTypes.GUILD;
    "code": string;
    "inviter"?: UserResponse;
    "max_age"?: number;
    "created_at"?: string;
    "expires_at": string | null;
    "is_contact"?: boolean;
    "flags"?: number;
    "guild": InviteGuildResponse;
    "guild_id": SnowflakeType;
    "channel": InviteChannelResponse;
    "target_type"?: InviteTargetTypes;
    "target_user"?: UserResponse;
    "target_application"?: InviteApplicationResponse;
    "guild_scheduled_event"?: ScheduledEventResponse;
    "uses"?: number;
    "max_uses"?: number;
    "temporary"?: boolean;
    "approximate_member_count"?: number | null;
    "approximate_presence_count"?: number | null;
    "is_nickname_changeable"?: boolean;
    "roles"?: InviteGuildRoleResponse[] | null;
}
export const enum GuildMFALevel {
    /**
     * Guild has no MFA/2FA requirement for moderation actions
     */
    "NONE" = 0,
    /**
     * Guild has a 2FA requirement for moderation actions
     */
    "ELEVATED" = 1
}
export interface GuildMemberResponse {
    "avatar": string | null;
    "avatar_decoration_data"?: null | UserAvatarDecorationResponse;
    "banner": string | null;
    "communication_disabled_until": string | null;
    "flags": number;
    "joined_at": string;
    "nick": string | null;
    "pending": boolean;
    "premium_since": string | null;
    "roles": SnowflakeType[];
    "collectibles"?: null | UserCollectiblesResponse;
    "user": UserResponse;
    "mute": boolean;
    "deaf": boolean;
}
export const enum GuildNSFWContentLevel {
    "DEFAULT" = 0,
    "EXPLICIT" = 1,
    "SAFE" = 2,
    "AGE_RESTRICTED" = 3
}
export const enum GuildOnboardingMode {
    /**
     * Only Default Channels considered in constraints
     */
    "ONBOARDING_DEFAULT" = 0,
    /**
     * Default Channels and Onboarding Prompts considered in constraints
     */
    "ONBOARDING_ADVANCED" = 1
}
export interface GuildOnboardingResponse {
    "guild_id": SnowflakeType;
    "prompts": OnboardingPromptResponse[];
    "default_channel_ids": SnowflakeType[];
    "enabled": boolean;
}
export interface GuildPatchRequestPartial {
    "name"?: string;
    "description"?: string | null;
    "region"?: string | null;
    "icon"?: string | null;
    "verification_level"?: null | VerificationLevels;
    "default_message_notifications"?: null | UserNotificationSettings;
    "explicit_content_filter"?: null | GuildExplicitContentFilterTypes;
    "preferred_locale"?: null | AvailableLocalesEnum;
    "afk_timeout"?: null | AfkTimeouts;
    "afk_channel_id"?: null | SnowflakeType;
    "system_channel_id"?: null | SnowflakeType;
    "splash"?: string | null;
    "banner"?: string | null;
    "system_channel_flags"?: number | null;
    "features"?: (string | null)[] | null;
    "discovery_splash"?: string | null;
    "home_header"?: string | null;
    "rules_channel_id"?: null | SnowflakeType;
    "safety_alerts_channel_id"?: null | SnowflakeType;
    "public_updates_channel_id"?: null | SnowflakeType;
    "premium_progress_bar_enabled"?: boolean | null;
}
export interface GuildPreviewResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string | null;
    "home_header": string | null;
    "splash": string | null;
    "discovery_splash": string | null;
    "features": GuildFeatures[];
    "approximate_member_count": number;
    "approximate_presence_count": number;
    "emojis": EmojiResponse[];
    "stickers": GuildStickerResponse[];
}
export interface GuildProductPurchaseResponse {
    "listing_id": SnowflakeType;
    "product_name": string;
}
export interface GuildPruneResponse {
    "pruned": number | null;
}
export interface GuildResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string | null;
    "home_header": string | null;
    "splash": string | null;
    "discovery_splash": string | null;
    "features": GuildFeatures[];
    "banner": string | null;
    "owner_id": SnowflakeType;
    "application_id": null | SnowflakeType;
    "region": string;
    "afk_channel_id": null | SnowflakeType;
    "afk_timeout": AfkTimeouts;
    "system_channel_id": null | SnowflakeType;
    "system_channel_flags": number;
    "widget_enabled": boolean;
    "widget_channel_id": null | SnowflakeType;
    "verification_level": VerificationLevels;
    "roles": GuildRoleResponse[];
    "default_message_notifications": UserNotificationSettings;
    "mfa_level": GuildMFALevel;
    "explicit_content_filter": GuildExplicitContentFilterTypes;
    "max_presences": number | null;
    "max_members": number;
    "max_stage_video_channel_users": number;
    "max_video_channel_users": number;
    "vanity_url_code": string | null;
    "premium_tier": PremiumGuildTiers;
    "premium_subscription_count": number;
    "preferred_locale": AvailableLocalesEnum;
    "rules_channel_id": null | SnowflakeType;
    "safety_alerts_channel_id": null | SnowflakeType;
    "public_updates_channel_id": null | SnowflakeType;
    "premium_progress_bar_enabled": boolean;
    "premium_progress_bar_enabled_user_updated_at"?: string | null;
    "nsfw": boolean;
    "nsfw_level": GuildNSFWContentLevel;
    "emojis": EmojiResponse[];
    "stickers": GuildStickerResponse[];
}
export interface GuildRoleColorsResponse {
    "primary_color": number;
    "secondary_color": number | null;
    "tertiary_color": number | null;
}
export interface GuildRoleResponse {
    "id": SnowflakeType;
    "name": string;
    "description": string | null;
    "permissions": string;
    "position": number;
    "color": number;
    "colors": GuildRoleColorsResponse;
    "hoist": boolean;
    "managed": boolean;
    "mentionable": boolean;
    "icon": string | null;
    "unicode_emoji": string | null;
    "tags"?: GuildRoleTagsResponse;
    "flags": number;
}
export interface GuildRoleTagsResponse {
    "premium_subscriber"?: null;
    "bot_id"?: SnowflakeType;
    "integration_id"?: SnowflakeType;
    "subscription_listing_id"?: SnowflakeType;
    "available_for_purchase"?: null;
    "guild_connections"?: null;
}
export const enum GuildScheduledEventEntityTypes {
    "NONE" = 0,
    "STAGE_INSTANCE" = 1,
    "VOICE" = 2,
    "EXTERNAL" = 3
}
export const enum GuildScheduledEventPrivacyLevels {
    /**
     * the scheduled event is only accessible to guild members
     */
    "GUILD_ONLY" = 2
}
export const enum GuildScheduledEventStatuses {
    "SCHEDULED" = 1,
    "ACTIVE" = 2,
    "COMPLETED" = 3,
    "CANCELED" = 4
}
export interface GuildSearchResponse {
    "messages": SearchMessageResponse[][];
    "doing_deep_historical_index": boolean;
    "total_results": number;
    "threads"?: ThreadResponse[] | null;
    "members"?: ThreadMemberResponse[] | null;
    "documents_indexed"?: number | null;
}
export interface GuildStickerResponse {
    "id": SnowflakeType;
    "name": string;
    "tags": string;
    "type": StickerTypes.GUILD;
    "format_type": null | StickerFormatTypes;
    "description": string | null;
    "available": boolean;
    "guild_id": SnowflakeType;
    "user"?: UserResponse;
}
export interface GuildSubscriptionIntegrationResponse {
    "type": IntegrationTypes.GUILD_SUBSCRIPTION;
    "name": string | null;
    "account": AccountResponse;
    "enabled": boolean;
    "id": SnowflakeType;
}
export interface GuildTemplateChannelResponse {
    "id": number | null;
    "type": ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_FORUM;
    "name": string | null;
    "position": number | null;
    "topic": string | null;
    "bitrate": number;
    "user_limit": number;
    "nsfw": boolean;
    "rate_limit_per_user": number;
    "parent_id": null | SnowflakeType;
    "default_auto_archive_duration": null | ThreadAutoArchiveDuration;
    "permission_overwrites": (null | ChannelPermissionOverwriteResponse)[];
    "available_tags": GuildTemplateChannelTags[] | null;
    "template": string;
    "default_reaction_emoji": null | DefaultReactionEmojiResponse;
    "default_thread_rate_limit_per_user": number | null;
    "default_sort_order": null | ThreadSortOrder;
    "default_forum_layout": null | ForumLayout;
    "default_tag_setting": null | ThreadSearchTagSetting;
    "icon_emoji": null | IconEmojiResponse;
    "theme_color": number | null;
}
export interface GuildTemplateChannelTags {
    "id": number | null;
    "name": string;
    "emoji_id": null | SnowflakeType;
    "emoji_name": string | null;
    "moderated": boolean | null;
}
export interface GuildTemplateResponse {
    "code": string;
    "name": string;
    "description": string | null;
    "usage_count": number;
    "creator_id": SnowflakeType;
    "creator": null | UserResponse;
    "created_at": string;
    "updated_at": string;
    "source_guild_id": SnowflakeType;
    "serialized_source_guild": GuildTemplateSnapshotResponse;
    "is_dirty": boolean | null;
}
export interface GuildTemplateRoleColorsResponse {
    "primary_color": number;
    "secondary_color": number | null;
    "tertiary_color": number | null;
}
export interface GuildTemplateRoleResponse {
    "id": number;
    "name": string;
    "permissions": string;
    "color": number;
    "colors": null | GuildTemplateRoleColorsResponse;
    "hoist": boolean;
    "mentionable": boolean;
    "icon": string | null;
    "unicode_emoji": string | null;
}
export interface GuildTemplateSnapshotResponse {
    "name": string;
    "description": string | null;
    "region": string | null;
    "verification_level": VerificationLevels;
    "default_message_notifications": UserNotificationSettings;
    "explicit_content_filter": GuildExplicitContentFilterTypes;
    "preferred_locale": AvailableLocalesEnum;
    "afk_channel_id": null | SnowflakeType;
    "afk_timeout": AfkTimeouts;
    "system_channel_id": null | SnowflakeType;
    "system_channel_flags": number;
    "roles": GuildTemplateRoleResponse[];
    "channels": GuildTemplateChannelResponse[];
}
export interface GuildWelcomeChannel {
    "channel_id": SnowflakeType;
    "description": string;
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
}
export interface GuildWelcomeScreenChannelResponse {
    "channel_id": SnowflakeType;
    "description": string;
    "emoji_id": null | SnowflakeType;
    "emoji_name": string | null;
}
export interface GuildWelcomeScreenResponse {
    "description": string | null;
    "welcome_channels": GuildWelcomeScreenChannelResponse[];
}
export interface GuildWithCountsResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string | null;
    "home_header": string | null;
    "splash": string | null;
    "discovery_splash": string | null;
    "features": GuildFeatures[];
    "banner": string | null;
    "owner_id": SnowflakeType;
    "application_id": null | SnowflakeType;
    "region": string;
    "afk_channel_id": null | SnowflakeType;
    "afk_timeout": AfkTimeouts;
    "system_channel_id": null | SnowflakeType;
    "system_channel_flags": number;
    "widget_enabled": boolean;
    "widget_channel_id": null | SnowflakeType;
    "verification_level": VerificationLevels;
    "roles": GuildRoleResponse[];
    "default_message_notifications": UserNotificationSettings;
    "mfa_level": GuildMFALevel;
    "explicit_content_filter": GuildExplicitContentFilterTypes;
    "max_presences": number | null;
    "max_members": number;
    "max_stage_video_channel_users": number;
    "max_video_channel_users": number;
    "vanity_url_code": string | null;
    "premium_tier": PremiumGuildTiers;
    "premium_subscription_count": number;
    "preferred_locale": AvailableLocalesEnum;
    "rules_channel_id": null | SnowflakeType;
    "safety_alerts_channel_id": null | SnowflakeType;
    "public_updates_channel_id": null | SnowflakeType;
    "premium_progress_bar_enabled": boolean;
    "premium_progress_bar_enabled_user_updated_at"?: string | null;
    "nsfw": boolean;
    "nsfw_level": GuildNSFWContentLevel;
    "emojis": EmojiResponse[];
    "stickers": GuildStickerResponse[];
    "approximate_member_count"?: number | null;
    "approximate_presence_count"?: number | null;
}
export const enum HasOption {
    "LINK" = "link",
    "EMBED" = "embed",
    "FILE" = "file",
    "IMAGE" = "image",
    "VIDEO" = "video",
    "SOUND" = "sound",
    "STICKER" = "sticker",
    "POLL" = "poll",
    "SNAPSHOT" = "snapshot",
    "NO_LINK" = "-link",
    "NO_EMBED" = "-embed",
    "NO_FILE" = "-file",
    "NO_IMAGE" = "-image",
    "NO_VIDEO" = "-video",
    "NO_SOUND" = "-sound",
    "NO_STICKER" = "-sticker",
    "NO_POLL" = "-poll",
    "NO_SNAPSHOT" = "-snapshot"
}
export interface IconEmojiResponse {
    [additionalProperties: string]: never;
}
export interface IncomingWebhookInteractionRequest {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "poll"?: null | PollCreateRequest;
    "tts"?: boolean | null;
    "flags"?: number | null;
}
export interface IncomingWebhookRequestPartial {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "poll"?: null | PollCreateRequest;
    "tts"?: boolean | null;
    "flags"?: number | null;
    "username"?: string | null;
    "avatar_url"?: string | null;
    "thread_name"?: string | null;
    "applied_tags"?: SnowflakeType[] | null;
}
export interface IncomingWebhookUpdateForInteractionCallbackRequestPartial {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "flags"?: number | null;
}
export interface IncomingWebhookUpdateRequestPartial {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "poll"?: null | PollCreateRequest;
    "flags"?: number | null;
}
export type Int53Type = number;
export interface IntegrationApplicationResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string;
    "type": null | ApplicationTypes;
    "cover_image"?: string;
    "primary_sku_id"?: SnowflakeType;
    "bot"?: UserResponse;
}
export const enum IntegrationExpireBehaviorTypes {
    /**
     * Remove role
     */
    "REMOVE_ROLE" = 0,
    /**
     * Kick
     */
    "KICK" = 1
}
export const enum IntegrationExpireGracePeriodTypes {
    /**
     * 1 day
     */
    "ONE_DAY" = 1,
    /**
     * 3 days
     */
    "THREE_DAYS" = 3,
    /**
     * 7 days
     */
    "SEVEN_DAYS" = 7,
    /**
     * 14 days
     */
    "FOURTEEN_DAYS" = 14,
    /**
     * 30 days
     */
    "THIRTY_DAYS" = 30
}
export const enum IntegrationTypes {
    "DISCORD" = "discord",
    "TWITCH" = "twitch",
    "YOUTUBE" = "youtube",
    "GUILD_SUBSCRIPTION" = "guild_subscription"
}
export interface InteractionApplicationCommandAutocompleteCallbackIntegerData {
    "choices"?: (null | ApplicationCommandOptionIntegerChoice)[] | null;
}
export interface InteractionApplicationCommandAutocompleteCallbackNumberData {
    "choices"?: (null | ApplicationCommandOptionNumberChoice)[] | null;
}
export interface InteractionApplicationCommandAutocompleteCallbackStringData {
    "choices"?: (null | ApplicationCommandOptionStringChoice)[] | null;
}
export interface InteractionCallbackResponse {
    "interaction": InteractionResponse;
    "resource"?: CreateMessageInteractionCallbackResponse | LaunchActivityInteractionCallbackResponse | UpdateMessageInteractionCallbackResponse;
}
export const enum InteractionCallbackTypes {
    "PONG" = 1,
    "CHANNEL_MESSAGE_WITH_SOURCE" = 4,
    "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE" = 5,
    "DEFERRED_UPDATE_MESSAGE" = 6,
    "UPDATE_MESSAGE" = 7,
    "APPLICATION_COMMAND_AUTOCOMPLETE_RESULT" = 8,
    "MODAL" = 9,
    "LAUNCH_ACTIVITY" = 12,
    "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY" = 13
}
export const enum InteractionContextType {
    /**
     * This command can be used within a Guild.
     */
    "GUILD" = 0,
    /**
     * This command can be used within a DM with this application's bot.
     */
    "BOT_DM" = 1,
    /**
     * This command can be used within DMs and Group DMs with users.
     */
    "PRIVATE_CHANNEL" = 2
}
export interface InteractionResponse {
    "id": SnowflakeType;
    "type": InteractionTypes;
    "response_message_id"?: SnowflakeType;
    "response_message_loading"?: boolean;
    "response_message_ephemeral"?: boolean;
    "channel_id"?: SnowflakeType;
    "guild_id"?: SnowflakeType;
}
export const enum InteractionTypes {
    /**
     * Sent by Discord to validate your application's interaction handler
     */
    "PING" = 1,
    /**
     * Sent when a user uses an application command
     */
    "APPLICATION_COMMAND" = 2,
    /**
     * Sent when a user interacts with a message component previously sent by your application
     */
    "MESSAGE_COMPONENT" = 3,
    /**
     * Sent when a user is filling in an autocomplete option in a chat command
     */
    "APPLICATION_COMMAND_AUTOCOMPLETE" = 4,
    /**
     * Sent when a user submits a modal previously sent by your application
     */
    "MODAL_SUBMIT" = 5,
    /**
     * Sent when Discord is checking if a user can purchase a Social Layer SKU
     */
    "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY" = 6
}
export interface InviteApplicationResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string;
    "type": null | ApplicationTypes;
    "cover_image"?: string;
    "primary_sku_id"?: SnowflakeType;
    "bot"?: UserResponse;
    "slug"?: string;
    "guild_id"?: SnowflakeType;
    "rpc_origins"?: (string | null)[];
    "bot_public"?: boolean;
    "bot_require_code_grant"?: boolean;
    "terms_of_service_url"?: string;
    "privacy_policy_url"?: string;
    "custom_install_url"?: string;
    "install_params"?: ApplicationOAuth2InstallParamsResponse;
    "integration_types_config"?: {
        [additionalProperties: string]: ApplicationIntegrationTypeConfigurationResponse;
    };
    "verify_key": string;
    "flags": number;
    "max_participants"?: number | null;
    "tags"?: string[];
}
export interface InviteChannelRecipientResponse {
    "username": string;
}
export interface InviteChannelResponse {
    "id": SnowflakeType;
    "type": ChannelTypes;
    "name": string | null;
    "icon"?: string;
    "recipients"?: InviteChannelRecipientResponse[];
}
export interface InviteGuildResponse {
    "id": SnowflakeType;
    "name": string;
    "splash": string | null;
    "banner": string | null;
    "description": string | null;
    "icon": string | null;
    "features": GuildFeatures[];
    "verification_level": null | VerificationLevels;
    "vanity_url_code": string | null;
    "nsfw_level": null | GuildNSFWContentLevel;
    "nsfw": boolean | null;
    "premium_subscription_count": number;
}
export interface InviteGuildRoleResponse {
    "id": SnowflakeType;
    "name": string;
    "position": number;
    "color": number;
    "colors": GuildRoleColorsResponse;
    "icon": string | null;
    "unicode_emoji": string | null;
    "permissions"?: string;
}
export const enum InviteTargetTypes {
    "STREAM" = 1,
    "EMBEDDED_APPLICATION" = 2,
    "ROLE_SUBSCRIPTIONS_PURCHASE" = 3
}
export const enum InviteTypes {
    "GUILD" = 0,
    "GROUP_DM" = 1,
    "FRIEND" = 2
}
export interface KeywordRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": AutomodTriggerType.KEYWORD;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": KeywordTriggerMetadataResponse;
}
export interface KeywordTriggerMetadata {
    "keyword_filter"?: string[] | null;
    "regex_patterns"?: string[] | null;
    "allow_list"?: string[] | null;
}
export interface KeywordTriggerMetadataResponse {
    "keyword_filter": string[];
    "regex_patterns": string[];
    "allow_list": string[];
}
export interface KeywordUpsertRequest {
    "name": string;
    "event_type": AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type": AutomodTriggerType.KEYWORD;
    "trigger_metadata"?: null | KeywordTriggerMetadata;
}
export interface KeywordUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: AutomodTriggerType.KEYWORD;
    "trigger_metadata"?: null | KeywordTriggerMetadata;
}
export interface LabelComponentForModalRequest {
    "type": MessageComponentTypes.LABEL;
    "id"?: number | null;
    "label": string;
    "description"?: string | null;
    "component": ChannelSelectComponentForModalRequest | CheckboxComponentForModalRequest | CheckboxGroupComponentForModalRequest | FileUploadComponentForModalRequest | MentionableSelectComponentForModalRequest | RadioGroupComponentForModalRequest | RoleSelectComponentForModalRequest | StringSelectComponentForModalRequest | TextInputComponentForModalRequest | UserSelectComponentForModalRequest;
}
export interface LaunchActivityInteractionCallbackRequest {
    "type": InteractionCallbackTypes.LAUNCH_ACTIVITY;
}
export interface LaunchActivityInteractionCallbackResponse {
    "type": InteractionCallbackTypes.LAUNCH_ACTIVITY;
}
export interface ListApplicationEmojisResponse {
    "items": EmojiResponse[];
}
export interface ListGuildSoundboardSoundsResponse {
    "items": SoundboardSoundResponse[];
}
export interface LobbyGuildInviteResponse {
    "code": string;
}
export interface LobbyMemberRequest {
    "id": SnowflakeType;
    "metadata"?: {
        [additionalProperties: string]: string;
    } | null;
    "flags"?: null | 1;
}
export interface LobbyMemberResponse {
    "id": SnowflakeType;
    "metadata": {
        [additionalProperties: string]: string;
    } | null;
    "flags": number;
}
export interface LobbyMessageResponse {
    "id": SnowflakeType;
    "type": MessageType;
    "content": string;
    "lobby_id": SnowflakeType;
    "channel_id": SnowflakeType;
    "author": UserResponse;
    "metadata"?: {
        [additionalProperties: string]: string;
    };
    "moderation_metadata"?: {
        [additionalProperties: string]: string;
    };
    "flags": number;
    "application_id"?: SnowflakeType;
}
export interface LobbyResponse {
    "id": SnowflakeType;
    "application_id": SnowflakeType;
    "metadata": {
        [additionalProperties: string]: string;
    } | null;
    "members": LobbyMemberResponse[];
    "linked_channel"?: GuildChannelResponse;
    "flags": UInt32Type;
    "override_event_webhooks_url"?: string | null;
}
export interface MLSpamRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": AutomodTriggerType.ML_SPAM;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": MLSpamTriggerMetadataResponse;
}
export interface MLSpamTriggerMetadata {
    [additionalProperties: string]: never;
}
export interface MLSpamTriggerMetadataResponse {
    [additionalProperties: string]: never;
}
export interface MLSpamUpsertRequest {
    "name": string;
    "event_type": AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type": AutomodTriggerType.ML_SPAM;
    "trigger_metadata"?: null | MLSpamTriggerMetadata;
}
export interface MLSpamUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: AutomodTriggerType.ML_SPAM;
    "trigger_metadata"?: null | MLSpamTriggerMetadata;
}
export interface MediaGalleryComponentForMessageRequest {
    "type": MessageComponentTypes.MEDIA_GALLERY;
    "id"?: number | null;
    "items": MediaGalleryItemRequest[];
}
export interface MediaGalleryComponentResponse {
    "type": MessageComponentTypes.MEDIA_GALLERY;
    "id": number;
    "items": MediaGalleryItemResponse[];
}
export interface MediaGalleryItemRequest {
    "description"?: string | null;
    "spoiler"?: boolean | null;
    "media": UnfurledMediaRequest;
}
export interface MediaGalleryItemResponse {
    "media": UnfurledMediaResponse;
    "description": string | null;
    "spoiler": boolean;
}
export interface MentionSpamRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": AutomodTriggerType.MENTION_SPAM;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": MentionSpamTriggerMetadataResponse;
}
export interface MentionSpamTriggerMetadata {
    "mention_total_limit"?: number | null;
    "mention_raid_protection_enabled"?: boolean | null;
}
export interface MentionSpamTriggerMetadataResponse {
    "mention_total_limit": number;
    "mention_raid_protection_enabled": boolean;
}
export interface MentionSpamUpsertRequest {
    "name": string;
    "event_type": AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type": AutomodTriggerType.MENTION_SPAM;
    "trigger_metadata"?: null | MentionSpamTriggerMetadata;
}
export interface MentionSpamUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: AutomodTriggerType.MENTION_SPAM;
    "trigger_metadata"?: null | MentionSpamTriggerMetadata;
}
export interface MentionableSelectComponentForMessageRequest {
    "type": MessageComponentTypes.MENTIONABLE_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: (RoleSelectDefaultValue | UserSelectDefaultValue)[] | null;
}
export interface MentionableSelectComponentForModalRequest {
    "type": MessageComponentTypes.MENTIONABLE_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: (RoleSelectDefaultValue | UserSelectDefaultValue)[] | null;
}
export interface MentionableSelectComponentResponse {
    "type": MessageComponentTypes.MENTIONABLE_SELECT;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "default_values"?: (RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse)[];
}
export interface MessageActivityResponse {
    [additionalProperties: string]: never;
}
export interface MessageAllowedMentionsRequest {
    "parse"?: (null | AllowedMentionTypes)[] | null;
    "users"?: (null | SnowflakeType)[] | null;
    "roles"?: (null | SnowflakeType)[] | null;
    "replied_user"?: boolean | null;
}
export interface MessageAttachmentRequest {
    "id": SnowflakeType;
    "filename"?: string | null;
    "description"?: string | null;
    "duration_secs"?: number | null;
    "waveform"?: string | null;
    "title"?: string | null;
    "is_remix"?: boolean | null;
    "data": Blob;
}
export interface MessageAttachmentResponse {
    "id": SnowflakeType;
    "filename": string;
    "size": number;
    "url": string;
    "proxy_url": string;
    "width"?: number;
    "height"?: number;
    "duration_secs"?: number;
    "waveform"?: string;
    "description"?: string;
    "content_type"?: string;
    "ephemeral"?: boolean;
    "placeholder"?: string | null;
    "placeholder_version"?: number | null;
    "title"?: string | null;
    "application"?: ApplicationResponse;
    "clip_created_at"?: string;
    "clip_participants"?: UserResponse[];
}
export interface MessageCallResponse {
    "ended_timestamp"?: string | null;
    "participants": SnowflakeType[];
}
export interface MessageComponentInteractionMetadataResponse {
    "id": SnowflakeType;
    "type": InteractionTypes.MESSAGE_COMPONENT;
    "user"?: UserResponse;
    "authorizing_integration_owners": {
        [additionalProperties: string]: SnowflakeType;
    };
    "original_response_message_id"?: SnowflakeType;
    "interacted_message_id": SnowflakeType;
}
export const enum MessageComponentSeparatorSpacingSize {
    /**
     * Small spacing
     */
    "SMALL" = 1,
    /**
     * Large spacing
     */
    "LARGE" = 2
}
export const enum MessageComponentTypes {
    /**
     * Container for other components
     */
    "ACTION_ROW" = 1,
    /**
     * Button object
     */
    "BUTTON" = 2,
    /**
     * Select menu for picking from defined text options
     */
    "STRING_SELECT" = 3,
    /**
     * Text input object
     */
    "TEXT_INPUT" = 4,
    /**
     * Select menu for users
     */
    "USER_SELECT" = 5,
    /**
     * Select menu for roles
     */
    "ROLE_SELECT" = 6,
    /**
     * Select menu for mentionables (users and roles)
     */
    "MENTIONABLE_SELECT" = 7,
    /**
     * Select menu for channels
     */
    "CHANNEL_SELECT" = 8,
    /**
     * Section component
     */
    "SECTION" = 9,
    /**
     * Text component
     */
    "TEXT_DISPLAY" = 10,
    /**
     * Thumbnail component
     */
    "THUMBNAIL" = 11,
    /**
     * Media gallery component
     */
    "MEDIA_GALLERY" = 12,
    /**
     * File component
     */
    "FILE" = 13,
    /**
     * Separator component
     */
    "SEPARATOR" = 14,
    /**
     * Container component
     */
    "CONTAINER" = 17,
    /**
     * Label component
     */
    "LABEL" = 18,
    /**
     * File upload component
     */
    "FILE_UPLOAD" = 19,
    /**
     * Radio group component
     */
    "RADIO_GROUP" = 21,
    /**
     * Checkbox group component
     */
    "CHECKBOX_GROUP" = 22,
    /**
     * Checkbox component
     */
    "CHECKBOX" = 23
}
export interface MessageCreateRequest {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "sticker_ids"?: SnowflakeType[] | null;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "flags"?: number | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "poll"?: null | PollCreateRequest;
    "shared_client_theme"?: null | CustomClientThemeShareRequest;
    "message_reference"?: null | MessageReferenceRequest;
    "nonce"?: number | string | null;
    "enforce_nonce"?: boolean | null;
    "tts"?: boolean | null;
}
export interface MessageEditRequestPartial {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "flags"?: number | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "sticker_ids"?: SnowflakeType[] | null;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "attachments"?: MessageAttachmentRequest[] | null;
}
export interface MessageEmbedAuthorResponse {
    "name": string;
    "url"?: string;
    "icon_url"?: string;
    "proxy_icon_url"?: string;
}
export interface MessageEmbedFieldResponse {
    "name": string;
    "value": string;
    "inline": boolean;
}
export interface MessageEmbedFooterResponse {
    "text": string;
    "icon_url"?: string;
    "proxy_icon_url"?: string;
}
export interface MessageEmbedImageResponse {
    "url"?: string;
    "proxy_url"?: string;
    "width"?: UInt32Type;
    "height"?: UInt32Type;
    "content_type"?: string;
    "placeholder"?: string;
    "placeholder_version"?: UInt32Type;
    "description"?: string;
    "flags"?: UInt32Type;
}
export interface MessageEmbedProviderResponse {
    "name": string;
    "url"?: string;
}
export interface MessageEmbedResponse {
    "type": string;
    "url"?: string;
    "title"?: string;
    "description"?: string;
    "color"?: number;
    "timestamp"?: string;
    "fields"?: MessageEmbedFieldResponse[];
    "author"?: MessageEmbedAuthorResponse;
    "provider"?: MessageEmbedProviderResponse;
    "image"?: MessageEmbedImageResponse;
    "thumbnail"?: MessageEmbedImageResponse;
    "video"?: MessageEmbedVideoResponse;
    "footer"?: MessageEmbedFooterResponse;
    "components"?: ContainerComponentResponse[];
}
export interface MessageEmbedVideoResponse {
    "url"?: string;
    "proxy_url"?: string;
    "width"?: UInt32Type;
    "height"?: UInt32Type;
    "content_type"?: string;
    "placeholder"?: string;
    "placeholder_version"?: UInt32Type;
    "description"?: string;
    "flags"?: UInt32Type;
}
export interface MessageInteractionResponse {
    "id": SnowflakeType;
    "type": InteractionTypes;
    "name": string;
    "user"?: UserResponse;
    "name_localized"?: string;
}
export interface MessageMentionChannelResponse {
    "id": SnowflakeType;
    "name": string;
    "type": ChannelTypes;
    "guild_id": SnowflakeType;
}
export interface MessageReactionCountDetailsResponse {
    "burst": number;
    "normal": number;
}
export interface MessageReactionEmojiResponse {
    "id": null | SnowflakeType;
    "name": string | null;
    "animated"?: boolean;
}
export interface MessageReactionResponse {
    "emoji": MessageReactionEmojiResponse;
    "count": number;
    "count_details": MessageReactionCountDetailsResponse;
    "burst_colors": string[];
    "me_burst": boolean;
    "me": boolean;
}
export interface MessageReferenceRequest {
    "guild_id"?: null | SnowflakeType;
    "channel_id"?: null | SnowflakeType;
    "message_id": SnowflakeType;
    "fail_if_not_exists"?: boolean | null;
    "type"?: null | MessageReferenceType;
}
export interface MessageReferenceResponse {
    "type": MessageReferenceType;
    "channel_id": SnowflakeType;
    "message_id"?: SnowflakeType;
    "guild_id"?: SnowflakeType;
}
export const enum MessageReferenceType {
    /**
     * Reference to a message
     */
    "DEFAULT" = 0
}
export interface MessageResponse {
    "type": MessageType;
    "content": string;
    "mentions": UserResponse[];
    "mention_roles": SnowflakeType[];
    "attachments": MessageAttachmentResponse[];
    "embeds": MessageEmbedResponse[];
    "timestamp": string;
    "edited_timestamp": string | null;
    "flags": number;
    "components": (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    "stickers"?: (GuildStickerResponse | StandardStickerResponse)[];
    "sticker_items"?: MessageStickerItemResponse[];
    "id": SnowflakeType;
    "channel_id": SnowflakeType;
    "author": UserResponse;
    "pinned": boolean;
    "mention_everyone": boolean;
    "tts": boolean;
    "call"?: MessageCallResponse;
    "activity"?: MessageActivityResponse;
    "application"?: BasicApplicationResponse;
    "application_id"?: SnowflakeType;
    "interaction"?: MessageInteractionResponse;
    "nonce"?: number | string | null;
    "webhook_id"?: SnowflakeType;
    "message_reference"?: MessageReferenceResponse;
    "thread"?: ThreadResponse;
    "mention_channels"?: (null | MessageMentionChannelResponse)[];
    "role_subscription_data"?: MessageRoleSubscriptionDataResponse;
    "purchase_notification"?: PurchaseNotificationResponse;
    "position"?: number;
    "resolved"?: ResolvedObjectsResponse;
    "poll"?: PollResponse;
    "shared_client_theme"?: null | CustomClientThemeResponse;
    "interaction_metadata"?: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse;
    "message_snapshots"?: MessageSnapshotResponse[];
    "reactions"?: MessageReactionResponse[];
    "referenced_message"?: null | BasicMessageResponse;
}
export interface MessageRoleSubscriptionDataResponse {
    "role_subscription_listing_id": SnowflakeType;
    "tier_name": string;
    "total_months_subscribed": number;
    "is_renewal": boolean;
}
export const enum MessageShareCustomUserThemeBaseTheme {
    /**
     * No base theme
     */
    "UNSET" = 0,
    /**
     * Dark base theme
     */
    "DARK" = 1,
    /**
     * Light base theme
     */
    "LIGHT" = 2,
    /**
     * Darker base theme
     */
    "DARKER" = 3,
    /**
     * Midnight base theme
     */
    "MIDNIGHT" = 4
}
export interface MessageSnapshotResponse {
    "message": MinimalContentMessageResponse;
}
export interface MessageStickerItemResponse {
    "id": SnowflakeType;
    "name": string;
    "format_type": StickerFormatTypes;
}
export const enum MessageType {
    "DEFAULT" = 0,
    "RECIPIENT_ADD" = 1,
    "RECIPIENT_REMOVE" = 2,
    "CALL" = 3,
    "CHANNEL_NAME_CHANGE" = 4,
    "CHANNEL_ICON_CHANGE" = 5,
    "CHANNEL_PINNED_MESSAGE" = 6,
    "USER_JOIN" = 7,
    "GUILD_BOOST" = 8,
    "GUILD_BOOST_TIER_1" = 9,
    "GUILD_BOOST_TIER_2" = 10,
    "GUILD_BOOST_TIER_3" = 11,
    "CHANNEL_FOLLOW_ADD" = 12,
    "GUILD_DISCOVERY_DISQUALIFIED" = 14,
    "GUILD_DISCOVERY_REQUALIFIED" = 15,
    "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING" = 16,
    "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING" = 17,
    "THREAD_CREATED" = 18,
    "REPLY" = 19,
    "CHAT_INPUT_COMMAND" = 20,
    "THREAD_STARTER_MESSAGE" = 21,
    "GUILD_INVITE_REMINDER" = 22,
    "CONTEXT_MENU_COMMAND" = 23,
    "AUTO_MODERATION_ACTION" = 24,
    "ROLE_SUBSCRIPTION_PURCHASE" = 25,
    "INTERACTION_PREMIUM_UPSELL" = 26,
    "STAGE_START" = 27,
    "STAGE_END" = 28,
    "STAGE_SPEAKER" = 29,
    "STAGE_TOPIC" = 31,
    "GUILD_APPLICATION_PREMIUM_SUBSCRIPTION" = 32,
    "GUILD_INCIDENT_ALERT_MODE_ENABLED" = 36,
    "GUILD_INCIDENT_ALERT_MODE_DISABLED" = 37,
    "GUILD_INCIDENT_REPORT_RAID" = 38,
    "GUILD_INCIDENT_REPORT_FALSE_ALARM" = 39,
    "POLL_RESULT" = 46,
    "HD_STREAMING_UPGRADED" = 55
}
export const enum MetadataItemTypes {
    /**
     * the metadata value (integer) is less than or equal to the guild's configured value (integer)
     */
    "INTEGER_LESS_THAN_EQUAL" = 1,
    /**
     * the metadata value (integer) is greater than or equal to the guild's configured value (integer)
     */
    "INTEGER_GREATER_THAN_EQUAL" = 2,
    /**
     * the metadata value (integer) is equal to the guild's configured value (integer)
     */
    "INTEGER_EQUAL" = 3,
    /**
     * the metadata value (integer) is not equal to the guild's configured value (integer)
     */
    "INTEGER_NOT_EQUAL" = 4,
    /**
     * the metadata value (ISO8601 string) is less than or equal to the guild's configured value (integer; days before current date)
     */
    "DATETIME_LESS_THAN_EQUAL" = 5,
    /**
     * the metadata value (ISO8601 string) is greater than or equal to the guild's configured value (integer; days before current date)
     */
    "DATETIME_GREATER_THAN_EQUAL" = 6,
    /**
     * the metadata value (integer) is equal to the guild's configured value (integer; 1)
     */
    "BOOLEAN_EQUAL" = 7,
    /**
     * the metadata value (integer) is not equal to the guild's configured value (integer; 1)
     */
    "BOOLEAN_NOT_EQUAL" = 8
}
export interface MinimalContentMessageResponse {
    "type": MessageType;
    "content": string;
    "mentions": UserResponse[];
    "mention_roles": SnowflakeType[];
    "attachments": MessageAttachmentResponse[];
    "embeds": MessageEmbedResponse[];
    "timestamp": string;
    "edited_timestamp": string | null;
    "flags": number;
    "components": (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    "stickers"?: (GuildStickerResponse | StandardStickerResponse)[];
    "sticker_items"?: MessageStickerItemResponse[];
}
export interface ModalInteractionCallbackRequest {
    "type": InteractionCallbackTypes.MODAL;
    "data": ModalInteractionCallbackRequestData;
}
export interface ModalInteractionCallbackRequestData {
    "custom_id": string;
    "title": string;
    "components": (ActionRowComponentForModalRequest | LabelComponentForModalRequest | TextDisplayComponentForModalRequest)[];
}
export interface ModalSubmitInteractionMetadataResponse {
    "id": SnowflakeType;
    "type": InteractionTypes.MODAL_SUBMIT;
    "user"?: UserResponse;
    "authorizing_integration_owners": {
        [additionalProperties: string]: SnowflakeType;
    };
    "original_response_message_id"?: SnowflakeType;
    "triggering_interaction_metadata": ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse;
}
export interface MyGuildResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "banner": string | null;
    "owner": boolean;
    "permissions": string;
    "features": GuildFeatures[];
    "approximate_member_count"?: number | null;
    "approximate_presence_count"?: number | null;
}
export const enum NameplatePalette {
}
export interface NewMemberActionResponse {
    "channel_id": SnowflakeType;
    "action_type": NewMemberActionType;
    "title": string;
    "description": string;
    "emoji"?: SettingsEmojiResponse;
    "icon"?: string;
}
export const enum NewMemberActionType {
    "VIEW" = 0,
    "TALK" = 1
}
export interface OAuth2GetAuthorizationResponse {
    "application": ApplicationResponse;
    "expires": string;
    "scopes": OAuth2Scopes[];
    "user"?: UserResponse;
}
export interface OAuth2GetKeys {
    "keys": OAuth2Key[];
}
export interface OAuth2GetOpenIDConnectUserInfoResponse {
    "sub": string;
    "email"?: string | null;
    "email_verified"?: boolean;
    "preferred_username"?: string;
    "nickname"?: string | null;
    "picture"?: string;
    "locale"?: string;
}
export interface OAuth2Key {
    "kty": string;
    "use": string;
    "kid": string;
    "n": string;
    "e": string;
    "alg": string;
}
export const enum OAuth2Scopes {
    /**
     * allows /users/@me without email
     */
    "IDENTIFY" = "identify",
    /**
     * enables /users/@me to return an email
     */
    "EMAIL" = "email",
    /**
     * allows /users/@me/connections to return linked third-party accounts
     */
    "CONNECTIONS" = "connections",
    /**
     * allows /users/@me/guilds to return basic information about all of a user's guilds
     */
    "GUILDS" = "guilds",
    /**
     * allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild
     */
    "GUILDS_JOIN" = "guilds.join",
    /**
     * allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
     */
    "GUILDS_MEMBERS_READ" = "guilds.members.read",
    /**
     * allows your app to join users to a group dm
     */
    "GDM_JOIN" = "gdm.join",
    /**
     * for oauth2 bots, this puts the bot in the user's selected guild by default
     */
    "BOT" = "bot",
    /**
     * for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
     */
    "RPC" = "rpc",
    /**
     * for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval
     */
    "RPC_NOTIFICATIONS_READ" = "rpc.notifications.read",
    /**
     * for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval
     */
    "RPC_VOICE_READ" = "rpc.voice.read",
    /**
     * for local rpc server access, this allows you to update a user's voice settings - requires Discord approval
     */
    "RPC_VOICE_WRITE" = "rpc.voice.write",
    /**
     * for local rpc server access, this allows you to read a user's video status - requires Discord approval
     */
    "RPC_VIDEO_READ" = "rpc.video.read",
    /**
     * for local rpc server access, this allows you to update a user's video settings - requires Discord approval
     */
    "RPC_VIDEO_WRITE" = "rpc.video.write",
    /**
     * for local rpc server access, this allows you to read a user's screenshare status- requires Discord approval
     */
    "RPC_SCREENSHARE_READ" = "rpc.screenshare.read",
    /**
     * for local rpc server access, this allows you to update a user's screenshare settings- requires Discord approval
     */
    "RPC_SCREENSHARE_WRITE" = "rpc.screenshare.write",
    /**
     * for local rpc server access, this allows you to update a user's activity - requires Discord approval
     */
    "RPC_ACTIVITIES_WRITE" = "rpc.activities.write",
    /**
     * this generates a webhook that is returned in the oauth token response for authorization code grants
     */
    "WEBHOOK_INCOMING" = "webhook.incoming",
    /**
     * for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)
     */
    "MESSAGES_READ" = "messages.read",
    /**
     * allows your app to upload/update builds for a user's applications - requires Discord approval
     */
    "APPLICATIONS_BUILDS_UPLOAD" = "applications.builds.upload",
    /**
     * allows your app to read build data for a user's applications
     */
    "APPLICATIONS_BUILDS_READ" = "applications.builds.read",
    /**
     * allows your app to use commands in a guild
     */
    "APPLICATIONS_COMMANDS" = "applications.commands",
    /**
     * allows your app to update permissions for its commands in a guild a user has permissions to
     */
    "APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE" = "applications.commands.permissions.update",
    /**
     * allows your app to update its commands using a Bearer token - client credentials grant only
     */
    "APPLICATIONS_COMMANDS_UPDATE" = "applications.commands.update",
    /**
     * allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
     */
    "APPLICATIONS_STORE_UPDATE" = "applications.store.update",
    /**
     * allows your app to read entitlements for a user's applications
     */
    "APPLICATIONS_ENTITLEMENTS" = "applications.entitlements",
    /**
     * allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval
     */
    "ACTIVITIES_READ" = "activities.read",
    /**
     * allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
     */
    "ACTIVITIES_WRITE" = "activities.write",
    /**
     * allows your app to send activity invites - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
     */
    "ACTIVITIES_INVITES_WRITE" = "activities.invites.write",
    /**
     * allows your app to know a user's friends and implicit relationships - requires Discord approval
     */
    "RELATIONSHIPS_READ" = "relationships.read",
    /**
     * allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval
     */
    "VOICE" = "voice",
    /**
     * allows your app to see information about the user's DMs and group DMs - requires Discord approval
     */
    "DM_CHANNELS_READ" = "dm_channels.read",
    /**
     * allows your app to update a user's connection and metadata for the app
     */
    "ROLE_CONNECTIONS_WRITE" = "role_connections.write",
    /**
     * for OpenID Connect, this allows your app to receive user id and basic profile information
     */
    "OPENID" = "openid"
}
export interface OnboardingPromptOptionRequest {
    "id"?: null | SnowflakeType;
    "title": string;
    "description"?: string | null;
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
    "emoji_animated"?: boolean | null;
    "role_ids"?: SnowflakeType[] | null;
    "channel_ids"?: SnowflakeType[] | null;
}
export interface OnboardingPromptOptionResponse {
    "id": SnowflakeType;
    "title": string;
    "description": string;
    "emoji": SettingsEmojiResponse;
    "role_ids": SnowflakeType[];
    "channel_ids": SnowflakeType[];
}
export interface OnboardingPromptResponse {
    "id": SnowflakeType;
    "title": string;
    "options": OnboardingPromptOptionResponse[];
    "single_select": boolean;
    "required": boolean;
    "in_onboarding": boolean;
    "type": OnboardingPromptType;
}
export const enum OnboardingPromptType {
    /**
     * Multiple choice options
     */
    "MULTIPLE_CHOICE" = 0,
    /**
     * Many options shown as a dropdown
     */
    "DROPDOWN" = 1
}
export interface PartialDiscordIntegrationResponse {
    "id": SnowflakeType;
    "type": IntegrationTypes.DISCORD;
    "name": string | null;
    "account": AccountResponse;
    "application_id": SnowflakeType;
}
export interface PartialExternalConnectionIntegrationResponse {
    "id": SnowflakeType;
    "type": IntegrationTypes.TWITCH | IntegrationTypes.YOUTUBE;
    "name": string | null;
    "account": AccountResponse;
}
export interface PartialGuildSubscriptionIntegrationResponse {
    "id": SnowflakeType;
    "type": IntegrationTypes.GUILD_SUBSCRIPTION;
    "name": string | null;
    "account": AccountResponse;
}
export interface PinnedMessageResponse {
    "pinned_at": string;
    "message": MessageResponse;
}
export interface PinnedMessagesResponse {
    "items": PinnedMessageResponse[];
    "has_more": boolean;
}
export interface PollAnswerCreateRequest {
    "poll_media": PollMediaCreateRequest;
}
export interface PollAnswerDetailsResponse {
    "users": UserResponse[];
}
export interface PollAnswerResponse {
    "answer_id": number;
    "poll_media": PollMediaResponse;
}
export interface PollCreateRequest {
    "question": PollMedia;
    "answers": PollAnswerCreateRequest[];
    "allow_multiselect"?: boolean | null;
    "layout_type"?: null | PollLayoutTypes;
    "duration"?: number | null;
}
export interface PollEmoji {
    "id"?: null | SnowflakeType;
    "name"?: string | null;
    "animated"?: boolean | null;
}
export interface PollEmojiCreateRequest {
    "id"?: null | SnowflakeType;
    "name"?: string | null;
    "animated"?: boolean | null;
}
export const enum PollLayoutTypes {
}
export interface PollMedia {
    "text"?: string | null;
    "emoji"?: null | PollEmoji;
}
export interface PollMediaCreateRequest {
    "text"?: string | null;
    "emoji"?: null | PollEmojiCreateRequest;
}
export interface PollMediaResponse {
    "text"?: string;
    "emoji"?: MessageReactionEmojiResponse;
}
export interface PollResponse {
    "question": PollMediaResponse;
    "answers": PollAnswerResponse[];
    "expiry": string;
    "allow_multiselect": boolean;
    "layout_type": PollLayoutTypes;
    "results": PollResultsResponse;
}
export interface PollResultsEntryResponse {
    "id": number;
    "count": number;
    "me_voted": boolean;
}
export interface PollResultsResponse {
    "answer_counts": PollResultsEntryResponse[];
    "is_finalized": boolean;
}
export interface PongInteractionCallbackRequest {
    "type": InteractionCallbackTypes.PONG;
}
export const enum PremiumGuildTiers {
    /**
     * Guild has not unlocked any Server Boost perks
     */
    "NONE" = 0,
    /**
     * Guild has unlocked Server Boost level 1 perks
     */
    "TIER_1" = 1,
    /**
     * Guild has unlocked Server Boost level 2 perks
     */
    "TIER_2" = 2,
    /**
     * Guild has unlocked Server Boost level 3 perks
     */
    "TIER_3" = 3
}
export const enum PremiumTypes {
    /**
     * None
     */
    "NONE" = 0,
    /**
     * Nitro Classic
     */
    "TIER_1" = 1,
    /**
     * Nitro Standard
     */
    "TIER_2" = 2,
    /**
     * Nitro Basic
     */
    "TIER_0" = 3
}
export interface PrivateApplicationResponse {
    "id": SnowflakeType;
    "name": string;
    "icon": string | null;
    "description": string;
    "type": null | ApplicationTypes;
    "cover_image"?: string;
    "primary_sku_id"?: SnowflakeType;
    "bot"?: UserResponse;
    "slug"?: string;
    "guild_id"?: SnowflakeType;
    "rpc_origins"?: (string | null)[];
    "bot_public"?: boolean;
    "bot_require_code_grant"?: boolean;
    "terms_of_service_url"?: string;
    "privacy_policy_url"?: string;
    "custom_install_url"?: string;
    "install_params"?: ApplicationOAuth2InstallParamsResponse;
    "integration_types_config"?: {
        [additionalProperties: string]: ApplicationIntegrationTypeConfigurationResponse;
    };
    "verify_key": string;
    "flags": number;
    "max_participants"?: number | null;
    "tags"?: string[];
    "redirect_uris": (string | null)[];
    "interactions_endpoint_url": string | null;
    "role_connections_verification_url": string | null;
    "owner": UserResponse;
    "approximate_guild_count": number | null;
    "approximate_user_install_count": number;
    "approximate_user_authorization_count": number;
    "explicit_content_filter": ApplicationExplicitContentFilterTypes;
    "team": null | TeamResponse;
}
export interface PrivateChannelLocation {
    "id": string;
    "kind": EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
    "channel_id": SnowflakeType;
}
export interface PrivateChannelResponse {
    "id": SnowflakeType;
    "type": ChannelTypes.DM;
    "last_message_id"?: null | SnowflakeType;
    "flags": number;
    "last_pin_timestamp"?: string | null;
    "recipients": UserResponse[];
}
export interface PrivateGroupChannelResponse {
    "id": SnowflakeType;
    "type": ChannelTypes.GROUP_DM;
    "last_message_id"?: null | SnowflakeType;
    "flags": number;
    "last_pin_timestamp"?: string | null;
    "recipients": UserResponse[];
    "name": string | null;
    "icon": string | null;
    "owner_id": SnowflakeType;
    "managed"?: boolean;
    "application_id"?: SnowflakeType;
}
export interface PrivateGuildMemberResponse {
    "avatar": string | null;
    "avatar_decoration_data"?: null | UserAvatarDecorationResponse;
    "banner": string | null;
    "communication_disabled_until": string | null;
    "flags": number;
    "joined_at": string;
    "nick": string | null;
    "pending": boolean;
    "premium_since": string | null;
    "roles": SnowflakeType[];
    "collectibles"?: null | UserCollectiblesResponse;
    "user": UserResponse;
    "mute": boolean;
    "deaf": boolean;
    "permissions"?: string;
}
export interface ProvisionalTokenResponse {
    "token_type": string;
    "access_token": string;
    "expires_in": number;
    "scope": string;
    "id_token": string;
    "refresh_token"?: string | null;
    "scopes"?: string[] | null;
    "expires_at_s"?: number | null;
}
export interface PruneGuildRequest {
    "days"?: number | null;
    "compute_prune_count"?: boolean | null;
    "include_roles"?: string | SnowflakeType[] | null;
}
export interface PurchaseNotificationResponse {
    "type": PurchaseType;
    "guild_product_purchase"?: GuildProductPurchaseResponse;
}
export const enum PurchaseType {
    "GUILD_PRODUCT" = 0
}
export interface QuarantineUserAction {
    "type": AutomodActionType.QUARANTINE_USER;
    "metadata"?: null | QuarantineUserActionMetadata;
}
export interface QuarantineUserActionMetadata {
    [additionalProperties: string]: never;
}
export interface QuarantineUserActionMetadataResponse {
    [additionalProperties: string]: never;
}
export interface QuarantineUserActionResponse {
    "type": AutomodActionType.QUARANTINE_USER;
    "metadata": QuarantineUserActionMetadataResponse;
}
export interface RadioGroupComponentForModalRequest {
    "type": MessageComponentTypes.RADIO_GROUP;
    "id"?: number | null;
    "custom_id": string;
    "required"?: boolean | null;
    "options": RadioGroupOptionForRequest[];
}
export interface RadioGroupOptionForRequest {
    "label": string;
    "value": string;
    "description"?: string | null;
    "default"?: boolean | null;
}
export const enum ReactionTypes {
    /**
     * Normal reaction type
     */
    "NORMAL" = 0,
    /**
     * Burst reaction type
     */
    "BURST" = 1
}
export interface ResolvedObjectsResponse {
    "users"?: {
        [additionalProperties: string]: UserResponse;
    } | null;
    "members"?: {
        [additionalProperties: string]: BasicGuildMemberResponse;
    } | null;
    "channels"?: {
        [additionalProperties: string]: GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse;
    } | null;
    "roles"?: {
        [additionalProperties: string]: GuildRoleResponse;
    } | null;
}
export interface ResourceChannelResponse {
    "channel_id": SnowflakeType;
    "title": string;
    "emoji"?: SettingsEmojiResponse;
    "icon"?: string;
    "description": string;
}
export interface RichEmbed {
    "type"?: string | null;
    "url"?: string | null;
    "title"?: string | null;
    "color"?: number | null;
    "timestamp"?: string | null;
    "description"?: string | null;
    "author"?: null | RichEmbedAuthor;
    "image"?: null | RichEmbedImage;
    "thumbnail"?: null | RichEmbedThumbnail;
    "footer"?: null | RichEmbedFooter;
    "fields"?: RichEmbedField[] | null;
    "provider"?: null | RichEmbedProvider;
    "video"?: null | RichEmbedVideo;
}
export interface RichEmbedAuthor {
    "name"?: string | null;
    "url"?: string | null;
    "icon_url"?: string | null;
}
export interface RichEmbedField {
    "name": string;
    "value": string;
    "inline"?: boolean | null;
}
export interface RichEmbedFooter {
    "text"?: string | null;
    "icon_url"?: string | null;
}
export interface RichEmbedImage {
    "url"?: string | null;
    "width"?: number | null;
    "height"?: number | null;
    "placeholder"?: string | null;
    "placeholder_version"?: number | null;
    "is_animated"?: boolean | null;
    "description"?: string | null;
}
export interface RichEmbedProvider {
    "name"?: string | null;
    "url"?: string | null;
}
export interface RichEmbedThumbnail {
    "url"?: string | null;
    "width"?: number | null;
    "height"?: number | null;
    "placeholder"?: string | null;
    "placeholder_version"?: number | null;
    "is_animated"?: boolean | null;
    "description"?: string | null;
}
export interface RichEmbedVideo {
    "url"?: string | null;
    "width"?: number | null;
    "height"?: number | null;
    "placeholder"?: string | null;
    "placeholder_version"?: number | null;
    "is_animated"?: boolean | null;
    "description"?: string | null;
}
export interface RoleColors {
    "primary_color"?: number | null;
    "secondary_color"?: number | null;
    "tertiary_color"?: number | null;
}
export interface RoleSelectComponentForMessageRequest {
    "type": MessageComponentTypes.ROLE_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: RoleSelectDefaultValue[] | null;
}
export interface RoleSelectComponentForModalRequest {
    "type": MessageComponentTypes.ROLE_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: RoleSelectDefaultValue[] | null;
}
export interface RoleSelectComponentResponse {
    "type": MessageComponentTypes.ROLE_SELECT;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "default_values"?: RoleSelectDefaultValueResponse[];
}
export interface RoleSelectDefaultValue {
    "type": SnowflakeSelectDefaultValueTypes.ROLE;
    "id": SnowflakeType;
}
export interface RoleSelectDefaultValueResponse {
    "type": SnowflakeSelectDefaultValueTypes.ROLE;
    "id": SnowflakeType;
}
export interface SDKMessageRequest {
    "content"?: string | null;
    "embeds"?: RichEmbed[] | null;
    "allowed_mentions"?: null | MessageAllowedMentionsRequest;
    "sticker_ids"?: SnowflakeType[] | null;
    "components"?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    "flags"?: number | null;
    "attachments"?: MessageAttachmentRequest[] | null;
    "poll"?: null | PollCreateRequest;
    "shared_client_theme"?: null | CustomClientThemeShareRequest;
    "message_reference"?: null | MessageReferenceRequest;
    "nonce"?: number | string | null;
    "enforce_nonce"?: boolean | null;
    "tts"?: boolean | null;
}
export const enum SKUIneligibilityReason {
    /**
     * Other / catch-all
     */
    "OTHER" = 0,
    /**
     * User already owns this SKU or one of its components
     */
    "OWNS_SKU_OR_BUNDLE_COMPONENT" = 1,
    /**
     * User account is not on an eligible platform
     */
    "PLATFORM_RESTRICTION" = 2
}
export interface ScheduledEventResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "name": string;
    "description": string | null;
    "channel_id": null | SnowflakeType;
    "creator_id": null | SnowflakeType;
    "creator"?: UserResponse;
    "image": string | null;
    "scheduled_start_time": string;
    "scheduled_end_time": string | null;
    "status": GuildScheduledEventStatuses;
    "entity_type": GuildScheduledEventEntityTypes;
    "entity_id": null | SnowflakeType;
    "user_count"?: number;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "user_rsvp"?: null | ScheduledEventUserResponse;
}
export interface ScheduledEventUserResponse {
    "guild_scheduled_event_id": SnowflakeType;
    "user_id": SnowflakeType;
    "user"?: UserResponse;
    "member"?: GuildMemberResponse;
}
export interface SearchIndexNotReadyResponse {
    "message": string;
    "code": number;
    "documents_indexed": number;
    "retry_after": number;
}
export interface SearchMessageResponse {
    "type": MessageType;
    "content": string;
    "mentions": UserResponse[];
    "mention_roles": SnowflakeType[];
    "attachments": MessageAttachmentResponse[];
    "embeds": MessageEmbedResponse[];
    "timestamp": string;
    "edited_timestamp": string | null;
    "flags": number;
    "components": (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    "stickers"?: (GuildStickerResponse | StandardStickerResponse)[];
    "sticker_items"?: MessageStickerItemResponse[];
    "id": SnowflakeType;
    "channel_id": SnowflakeType;
    "author": UserResponse;
    "pinned": boolean;
    "mention_everyone": boolean;
    "tts": boolean;
    "call"?: MessageCallResponse;
    "activity"?: MessageActivityResponse;
    "application"?: BasicApplicationResponse;
    "application_id"?: SnowflakeType;
    "interaction"?: MessageInteractionResponse;
    "nonce"?: number | string | null;
    "webhook_id"?: SnowflakeType;
    "message_reference"?: MessageReferenceResponse;
    "thread"?: ThreadResponse;
    "mention_channels"?: (null | MessageMentionChannelResponse)[];
    "role_subscription_data"?: MessageRoleSubscriptionDataResponse;
    "purchase_notification"?: PurchaseNotificationResponse;
    "position"?: number;
    "resolved"?: ResolvedObjectsResponse;
    "poll"?: PollResponse;
    "shared_client_theme"?: null | CustomClientThemeResponse;
    "interaction_metadata"?: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse;
    "message_snapshots"?: MessageSnapshotResponse[];
    "reactions"?: MessageReactionResponse[];
    "referenced_message"?: null | BasicMessageResponse;
    "hit": boolean;
}
export const enum SearchableEmbedType {
    "IMAGE" = "image",
    "VIDEO" = "video",
    "GIFV" = "gif",
    "SOUND" = "sound",
    "ARTICLE" = "article"
}
export interface SectionComponentForMessageRequest {
    "type": MessageComponentTypes.SECTION;
    "id"?: number | null;
    "components": TextDisplayComponentForMessageRequest[];
    "accessory": ButtonComponentForMessageRequest | ThumbnailComponentForMessageRequest;
}
export interface SectionComponentResponse {
    "type": MessageComponentTypes.SECTION;
    "id": number;
    "components": TextDisplayComponentResponse[];
    "accessory": ButtonComponentResponse | ThumbnailComponentResponse;
}
export interface SeparatorComponentForMessageRequest {
    "type": MessageComponentTypes.SEPARATOR;
    "id"?: number | null;
    "spacing"?: null | MessageComponentSeparatorSpacingSize;
    "divider"?: boolean | null;
}
export interface SeparatorComponentResponse {
    "type": MessageComponentTypes.SEPARATOR;
    "id": number;
    "spacing": MessageComponentSeparatorSpacingSize;
    "divider": boolean;
}
export interface SettingsEmojiResponse {
    "id": null | SnowflakeType;
    "name": string | null;
    "animated": boolean;
}
export interface SlackWebhook {
    "text"?: string | null;
    "username"?: string | null;
    "icon_url"?: string | null;
    "attachments"?: WebhookSlackEmbed[] | null;
}
export const enum SnowflakeSelectDefaultValueTypes {
    "USER" = "user",
    "ROLE" = "role",
    "CHANNEL" = "channel"
}
export type SnowflakeType = `${bigint}`;
export interface SocialLayerSKUPurchaseEligibilityCallbackData {
    "eligible": boolean;
    "ineligible_reason"?: null | SKUIneligibilityReason;
    "ineligible_reason_description"?: string | null;
}
export interface SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest {
    "type": InteractionCallbackTypes.SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY;
    "data": SocialLayerSKUPurchaseEligibilityCallbackData;
}
export const enum SortingMode {
    "RELEVANCE" = "relevance",
    "TIMESTAMP" = "timestamp"
}
export const enum SortingOrder {
    "ASC" = "asc",
    "DESC" = "desc"
}
export interface SoundboardCreateRequest {
    "name": string;
    "volume"?: number | null;
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
    "sound": string;
}
export interface SoundboardPatchRequestPartial {
    "name"?: string;
    "volume"?: number | null;
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
}
export interface SoundboardSoundResponse {
    "name": string;
    "sound_id": SnowflakeType;
    "volume": number;
    "emoji_id": null | SnowflakeType;
    "emoji_name": string | null;
    "guild_id"?: SnowflakeType;
    "available": boolean;
    "user"?: UserResponse;
}
export interface SoundboardSoundSendRequest {
    "sound_id": SnowflakeType;
    "source_guild_id"?: null | SnowflakeType;
}
export interface SpamLinkRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": AutomodTriggerType.SPAM_LINK;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": SpamLinkTriggerMetadataResponse;
}
export interface SpamLinkTriggerMetadataResponse {
    [additionalProperties: string]: never;
}
export interface StageInstanceResponse {
    "guild_id": SnowflakeType;
    "channel_id": SnowflakeType;
    "topic": string;
    "privacy_level": StageInstancesPrivacyLevels;
    "id": SnowflakeType;
    "discoverable_disabled": boolean;
    "guild_scheduled_event_id": null | SnowflakeType;
}
export const enum StageInstancesPrivacyLevels {
    /**
     * The Stage instance is visible publicly. (deprecated)
     */
    "PUBLIC" = 1,
    /**
     * The Stage instance is visible publicly. (deprecated)
     */
    "GUILD_ONLY" = 2
}
export interface StageScheduledEventCreateRequest {
    "name": string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time": string;
    "scheduled_end_time"?: string | null;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "entity_type": GuildScheduledEventEntityTypes.STAGE_INSTANCE;
    "channel_id"?: null | SnowflakeType;
    "entity_metadata"?: null | EntityMetadataStageInstance;
}
export interface StageScheduledEventPatchRequestPartial {
    "status"?: null | GuildScheduledEventStatuses;
    "name"?: string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time"?: string;
    "scheduled_end_time"?: string | null;
    "entity_type"?: null | GuildScheduledEventEntityTypes.STAGE_INSTANCE;
    "privacy_level"?: GuildScheduledEventPrivacyLevels;
    "channel_id"?: null | SnowflakeType;
    "entity_metadata"?: null | EntityMetadataStageInstance;
}
export interface StageScheduledEventResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "name": string;
    "description": string | null;
    "channel_id": null | SnowflakeType;
    "creator_id": null | SnowflakeType;
    "creator"?: UserResponse;
    "image": string | null;
    "scheduled_start_time": string;
    "scheduled_end_time": string | null;
    "status": GuildScheduledEventStatuses;
    "entity_type": GuildScheduledEventEntityTypes.STAGE_INSTANCE;
    "entity_id": null | SnowflakeType;
    "user_count"?: number;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "user_rsvp"?: null | ScheduledEventUserResponse;
    "entity_metadata": null | EntityMetadataStageInstanceResponse;
}
export interface StandardStickerResponse {
    "id": SnowflakeType;
    "name": string;
    "tags": string;
    "type": StickerTypes.STANDARD;
    "format_type": null | StickerFormatTypes;
    "description": string | null;
    "pack_id": SnowflakeType;
    "sort_value": number;
}
export const enum StickerFormatTypes {
    "PNG" = 1,
    "APNG" = 2,
    "LOTTIE" = 3,
    "GIF" = 4
}
export interface StickerPackCollectionResponse {
    "sticker_packs": StickerPackResponse[];
}
export interface StickerPackResponse {
    "id": SnowflakeType;
    "sku_id": SnowflakeType;
    "name": string;
    "description": string | null;
    "stickers": StandardStickerResponse[];
    "cover_sticker_id"?: SnowflakeType;
    "banner_asset_id"?: SnowflakeType;
}
export const enum StickerTypes {
    /**
     * an official sticker in a pack, part of Nitro or in a removed purchasable pack
     */
    "STANDARD" = 1,
    /**
     * a sticker uploaded to a guild for the guild's members
     */
    "GUILD" = 2
}
export interface StringSelectComponentForMessageRequest {
    "type": MessageComponentTypes.STRING_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "options": StringSelectOptionForRequest[];
}
export interface StringSelectComponentForModalRequest {
    "type": MessageComponentTypes.STRING_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "options": StringSelectOptionForRequest[];
}
export interface StringSelectComponentResponse {
    "type": MessageComponentTypes.STRING_SELECT;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "options": StringSelectOptionResponse[];
}
export interface StringSelectOptionForRequest {
    "label": string;
    "value": string;
    "description"?: string | null;
    "default"?: boolean | null;
    "emoji"?: null | ComponentEmojiForRequest;
}
export interface StringSelectOptionResponse {
    "label": string;
    "value": string;
    "description"?: string;
    "emoji"?: ComponentEmojiResponse;
    "default"?: boolean;
}
export interface TargetUsersJobStatusResponse {
    /**
     * The status of the job processing the target users.
     */
    "status": TargetUsersJobStatusTypes;
    /**
     * The total number of users in the provided list.
     */
    "total_users": UInt32Type;
    /**
     * The number of users processed so far.
     */
    "processed_users": UInt32Type;
    /**
     * The timestamp when the job was created.
     */
    "created_at": string | null;
    /**
     * The timestamp when the job was successfully completed.
     */
    "completed_at": string | null;
    /**
     * The error message if the job failed.
     */
    "error_message": string | null;
}
export const enum TargetUsersJobStatusTypes {
    /**
     * The default value.
     */
    "UNSPECIFIED" = 0,
    /**
     * The job is still being processed.
     */
    "PROCESSING" = 1,
    /**
     * The job has been completed successfully.
     */
    "COMPLETED" = 2,
    /**
     * The job has failed, see error_message field for more details.
     */
    "FAILED" = 3
}
export interface TeamMemberResponse {
    "user": UserResponse;
    "team_id": SnowflakeType;
    "membership_state": TeamMembershipStates;
}
export const enum TeamMembershipStates {
    /**
     * User has been invited to the team.
     */
    "INVITED" = 1,
    /**
     * User has accepted the team invitation.
     */
    "ACCEPTED" = 2
}
export interface TeamResponse {
    "id": SnowflakeType;
    "icon": string | null;
    "name": string;
    "owner_user_id": SnowflakeType;
    "members": TeamMemberResponse[];
}
export interface TextDisplayComponentForMessageRequest {
    "type": MessageComponentTypes.TEXT_DISPLAY;
    "id"?: number | null;
    "content": string;
}
export interface TextDisplayComponentForModalRequest {
    "type": MessageComponentTypes.TEXT_DISPLAY;
    "id"?: number | null;
    "content": string;
}
export interface TextDisplayComponentResponse {
    "type": MessageComponentTypes.TEXT_DISPLAY;
    "id": number;
    "content": string;
}
export interface TextInputComponentForModalRequest {
    "type": MessageComponentTypes.TEXT_INPUT;
    "id"?: number | null;
    "custom_id": string;
    "style": TextInputStyleTypes;
    "label"?: string | null;
    "value"?: string | null;
    "placeholder"?: string | null;
    "required"?: boolean | null;
    "min_length"?: number | null;
    "max_length"?: number | null;
}
export interface TextInputComponentResponse {
    "type": MessageComponentTypes.TEXT_INPUT;
    "id": number;
    "custom_id": string;
    "style": TextInputStyleTypes;
    "label": string | null;
    "value"?: string;
    "placeholder"?: string;
    "required"?: boolean;
    "min_length": number | null;
    "max_length": number | null;
}
export const enum TextInputStyleTypes {
    /**
     * Single-line input
     */
    "SHORT" = 1,
    /**
     * Multi-line input
     */
    "PARAGRAPH" = 2
}
export const enum ThreadAutoArchiveDuration {
    /**
     * One hour
     */
    "ONE_HOUR" = 60,
    /**
     * One day
     */
    "ONE_DAY" = 1440,
    /**
     * Three days
     */
    "THREE_DAY" = 4320,
    /**
     * Seven days
     */
    "SEVEN_DAY" = 10080
}
export interface ThreadMemberResponse {
    "id": SnowflakeType;
    "user_id": SnowflakeType;
    "join_timestamp": string;
    "flags": number;
    "member"?: GuildMemberResponse;
}
export interface ThreadMetadataResponse {
    "archived": boolean;
    "archive_timestamp": string | null;
    "auto_archive_duration": ThreadAutoArchiveDuration;
    "locked": boolean;
    "create_timestamp"?: string;
    "invitable"?: boolean;
}
export interface ThreadResponse {
    "id": SnowflakeType;
    "type": ChannelTypes.ANNOUNCEMENT_THREAD | ChannelTypes.PUBLIC_THREAD | ChannelTypes.PRIVATE_THREAD;
    "last_message_id"?: null | SnowflakeType;
    "flags": number;
    "last_pin_timestamp"?: string | null;
    "guild_id": SnowflakeType;
    "name": string;
    "parent_id"?: null | SnowflakeType;
    "rate_limit_per_user"?: number;
    "bitrate"?: number;
    "user_limit"?: number;
    "rtc_region"?: string | null;
    "video_quality_mode"?: VideoQualityModes;
    "permissions"?: string | null;
    "owner_id": SnowflakeType;
    "thread_metadata": ThreadMetadataResponse;
    "message_count": number;
    "member_count": number;
    "total_message_sent": number;
    "applied_tags"?: SnowflakeType[];
    "member"?: ThreadMemberResponse;
}
export interface ThreadSearchResponse {
    "threads": ThreadResponse[];
    "members": ThreadMemberResponse[];
    "has_more": boolean;
    "first_messages"?: MessageResponse[];
    "total_results": number;
}
export const enum ThreadSearchTagSetting {
    /**
     * The thread tags must contain all tags in the search query
     */
    "MATCH_ALL" = "match_all",
    /**
     * The thread tags must contain at least one of tags in the search query
     */
    "MATCH_SOME" = "match_some"
}
export const enum ThreadSortOrder {
    /**
     * Sort forum posts by activity
     */
    "LATEST_ACTIVITY" = 0,
    /**
     * Sort forum posts by creation time (from most recent to oldest)
     */
    "CREATION_DATE" = 1
}
export const enum ThreadSortingMode {
    "RELEVANCE" = "relevance",
    "CREATION_TIME" = "creation_time",
    "LAST_MESSAGE_TIME" = "last_message_time",
    "ARCHIVE_TIME" = "archive_time"
}
export interface ThreadsResponse {
    "threads": ThreadResponse[];
    "members": ThreadMemberResponse[];
    "has_more": boolean;
    "first_messages"?: MessageResponse[];
}
export interface ThumbnailComponentForMessageRequest {
    "type": MessageComponentTypes.THUMBNAIL;
    "id"?: number | null;
    "description"?: string | null;
    "spoiler"?: boolean | null;
    "media": UnfurledMediaRequest;
}
export interface ThumbnailComponentResponse {
    "type": MessageComponentTypes.THUMBNAIL;
    "id": number;
    "media": UnfurledMediaResponse;
    "description": string | null;
    "spoiler": boolean;
}
export interface TypingIndicatorResponse {
    [additionalProperties: string]: never;
}
export type UInt32Type = number;
export interface UnbanUserFromGuildRequest {
    [additionalProperties: string]: never;
}
export interface UnfurledMediaRequest {
    "url": string;
}
export interface UnfurledMediaRequestWithAttachmentReferenceRequired {
    "url": string;
}
export interface UnfurledMediaResponse {
    "id": SnowflakeType;
    "url": string;
    "proxy_url": string;
    "width"?: number | null;
    "height"?: number | null;
    "content_type"?: string | null;
    "attachment_id"?: SnowflakeType;
}
export interface UpdateApplicationUserRoleConnectionRequest {
    "platform_name"?: string | null;
    "platform_username"?: string | null;
    "metadata"?: {
        [additionalProperties: string]: string;
    } | null;
}
export interface UpdateDMRequestPartial {
    "name"?: string | null;
}
export interface UpdateDefaultReactionEmojiRequest {
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
}
export interface UpdateGroupDMRequestPartial {
    "name"?: string | null;
    "icon"?: string | null;
}
export interface UpdateGuildChannelRequestPartial {
    "type"?: null | (ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_ANNOUNCEMENT | ChannelTypes.GUILD_STAGE_VOICE | ChannelTypes.GUILD_DIRECTORY | ChannelTypes.GUILD_FORUM);
    "name"?: string;
    "position"?: number | null;
    "topic"?: string | null;
    "bitrate"?: number | null;
    "user_limit"?: number | null;
    "nsfw"?: boolean | null;
    "rate_limit_per_user"?: number | null;
    "parent_id"?: null | SnowflakeType;
    "permission_overwrites"?: ChannelPermissionOverwriteRequest[] | null;
    "rtc_region"?: string | null;
    "video_quality_mode"?: null | VideoQualityModes;
    "default_auto_archive_duration"?: null | ThreadAutoArchiveDuration;
    "default_reaction_emoji"?: null | UpdateDefaultReactionEmojiRequest;
    "default_thread_rate_limit_per_user"?: number | null;
    "default_sort_order"?: null | ThreadSortOrder;
    "default_forum_layout"?: null | ForumLayout;
    "default_tag_setting"?: null | ThreadSearchTagSetting;
    "flags"?: number | null;
    "available_tags"?: UpdateThreadTagRequest[] | null;
}
export interface UpdateGuildOnboardingRequest {
    "prompts"?: UpdateOnboardingPromptRequest[] | null;
    "enabled"?: boolean | null;
    "default_channel_ids"?: SnowflakeType[] | null;
    "mode"?: null | GuildOnboardingMode;
}
export interface UpdateMessageInteractionCallbackRequest {
    "type": InteractionCallbackTypes.UPDATE_MESSAGE;
    "data": IncomingWebhookUpdateForInteractionCallbackRequestPartial;
}
export interface UpdateMessageInteractionCallbackResponse {
    "type": InteractionCallbackTypes.UPDATE_MESSAGE;
    "message": MessageResponse;
}
export interface UpdateOnboardingPromptRequest {
    "title": string;
    "options": OnboardingPromptOptionRequest[];
    "single_select"?: boolean | null;
    "required"?: boolean | null;
    "in_onboarding"?: boolean | null;
    "type"?: null | OnboardingPromptType;
    "id": SnowflakeType;
}
export interface UpdateRolePositionsRequest {
    "id"?: null | SnowflakeType;
    "position"?: number | null;
}
export interface UpdateRoleRequestPartial {
    "name"?: string | null;
    "permissions"?: number | null;
    "color"?: number | null;
    "colors"?: null | RoleColors;
    "hoist"?: boolean | null;
    "mentionable"?: boolean | null;
    "icon"?: string | null;
    "unicode_emoji"?: string | null;
}
export interface UpdateSelfVoiceStateRequestPartial {
    "request_to_speak_timestamp"?: string | null;
    "suppress"?: boolean | null;
    "channel_id"?: null | SnowflakeType;
}
export interface UpdateThreadRequestPartial {
    "name"?: string | null;
    "archived"?: boolean | null;
    "locked"?: boolean | null;
    "invitable"?: boolean | null;
    "auto_archive_duration"?: null | ThreadAutoArchiveDuration;
    "rate_limit_per_user"?: number | null;
    "flags"?: number | null;
    "applied_tags"?: SnowflakeType[] | null;
    "bitrate"?: number | null;
    "user_limit"?: number | null;
    "rtc_region"?: string | null;
    "video_quality_mode"?: null | VideoQualityModes;
}
export interface UpdateThreadTagRequest {
    "name": string;
    "emoji_id"?: null | SnowflakeType;
    "emoji_name"?: string | null;
    "moderated"?: boolean | null;
    "id"?: null | SnowflakeType;
}
export interface UpdateVoiceStateRequestPartial {
    "suppress"?: boolean | null;
    "channel_id"?: null | SnowflakeType;
}
export interface UserAvatarDecorationResponse {
    "asset": string;
    "sku_id": null | SnowflakeType;
}
export interface UserCollectiblesResponse {
    "nameplate": null | UserNameplateResponse;
}
export interface UserCommunicationDisabledAction {
    "type": AutomodActionType.USER_COMMUNICATION_DISABLED;
    "metadata": UserCommunicationDisabledActionMetadata;
}
export interface UserCommunicationDisabledActionMetadata {
    "duration_seconds"?: number | null;
}
export interface UserCommunicationDisabledActionMetadataResponse {
    "duration_seconds": number;
}
export interface UserCommunicationDisabledActionResponse {
    "type": AutomodActionType.USER_COMMUNICATION_DISABLED;
    "metadata": UserCommunicationDisabledActionMetadataResponse;
}
export interface UserGuildOnboardingResponse {
    "guild_id": SnowflakeType;
    "prompts": OnboardingPromptResponse[];
    "default_channel_ids": SnowflakeType[];
    "enabled": boolean;
}
export interface UserNameplateResponse {
    "sku_id": null | SnowflakeType;
    "asset": string;
    "label": string;
    "palette": NameplatePalette;
}
export const enum UserNotificationSettings {
    /**
     * members will receive notifications for all messages by default
     */
    "ALL_MESSAGES" = 0,
    /**
     * members will receive notifications only for messages that @mention them by default
     */
    "ONLY_MENTIONS" = 1
}
export interface UserPIIResponse {
    "id": SnowflakeType;
    "username": string;
    "avatar": string | null;
    "discriminator": string;
    "public_flags": number;
    "flags": Int53Type;
    "bot"?: boolean;
    "system"?: boolean;
    "banner"?: string | null;
    "accent_color"?: number | null;
    "global_name": string | null;
    "avatar_decoration_data"?: null | UserAvatarDecorationResponse;
    "collectibles"?: null | UserCollectiblesResponse;
    "primary_guild"?: null | UserPrimaryGuildResponse;
    "mfa_enabled": boolean;
    "locale": AvailableLocalesEnum;
    "premium_type"?: PremiumTypes;
    "email"?: string | null;
    "verified"?: boolean;
}
export interface UserPrimaryGuildResponse {
    "identity_guild_id": null | SnowflakeType;
    "identity_enabled": boolean | null;
    "tag": string | null;
    "badge": string | null;
}
export interface UserResponse {
    "id": SnowflakeType;
    "username": string;
    "avatar": string | null;
    "discriminator": string;
    "public_flags": number;
    "flags": Int53Type;
    "bot"?: boolean;
    "system"?: boolean;
    "banner"?: string | null;
    "accent_color"?: number | null;
    "global_name": string | null;
    "avatar_decoration_data"?: null | UserAvatarDecorationResponse;
    "collectibles"?: null | UserCollectiblesResponse;
    "primary_guild": null | UserPrimaryGuildResponse;
}
export interface UserSelectComponentForMessageRequest {
    "type": MessageComponentTypes.USER_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: UserSelectDefaultValue[] | null;
}
export interface UserSelectComponentForModalRequest {
    "type": MessageComponentTypes.USER_SELECT;
    "id"?: number | null;
    "custom_id": string;
    "placeholder"?: string | null;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "disabled"?: boolean | null;
    "required"?: boolean | null;
    "default_values"?: UserSelectDefaultValue[] | null;
}
export interface UserSelectComponentResponse {
    "type": MessageComponentTypes.USER_SELECT;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "default_values"?: UserSelectDefaultValueResponse[];
}
export interface UserSelectDefaultValue {
    "type": SnowflakeSelectDefaultValueTypes.USER;
    "id": SnowflakeType;
}
export interface UserSelectDefaultValueResponse {
    "type": SnowflakeSelectDefaultValueTypes.USER;
    "id": SnowflakeType;
}
export interface VanityURLErrorResponse {
    "message": string;
    "code": number;
}
export interface VanityURLResponse {
    "code": string | null;
    "uses": number;
    "error"?: null | VanityURLErrorResponse;
}
export const enum VerificationLevels {
    /**
     * unrestricted
     */
    "NONE" = 0,
    /**
     * must have verified email on account
     */
    "LOW" = 1,
    /**
     * must be registered on Discord for longer than 5 minutes
     */
    "MEDIUM" = 2,
    /**
     * must be a member of the server for longer than 10 minutes
     */
    "HIGH" = 3,
    /**
     * must have a verified phone number
     */
    "VERY_HIGH" = 4
}
export const enum VideoQualityModes {
    /**
     * Discord chooses the quality for optimal performance
     */
    "AUTO" = 1,
    /**
     * 720p
     */
    "FULL" = 2
}
export interface VoiceRegionResponse {
    "id": string;
    "name": string;
    "custom": boolean;
    "deprecated": boolean;
    "optimal": boolean;
}
export interface VoiceScheduledEventCreateRequest {
    "name": string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time": string;
    "scheduled_end_time"?: string | null;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "entity_type": GuildScheduledEventEntityTypes.VOICE;
    "channel_id"?: null | SnowflakeType;
    "entity_metadata"?: null | EntityMetadataVoice;
}
export interface VoiceScheduledEventPatchRequestPartial {
    "status"?: null | GuildScheduledEventStatuses;
    "name"?: string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time"?: string;
    "scheduled_end_time"?: string | null;
    "entity_type"?: null | GuildScheduledEventEntityTypes.VOICE;
    "privacy_level"?: GuildScheduledEventPrivacyLevels;
    "channel_id"?: null | SnowflakeType;
    "entity_metadata"?: null | EntityMetadataVoice;
}
export interface VoiceScheduledEventResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "name": string;
    "description": string | null;
    "channel_id": null | SnowflakeType;
    "creator_id": null | SnowflakeType;
    "creator"?: UserResponse;
    "image": string | null;
    "scheduled_start_time": string;
    "scheduled_end_time": string | null;
    "status": GuildScheduledEventStatuses;
    "entity_type": GuildScheduledEventEntityTypes.VOICE;
    "entity_id": null | SnowflakeType;
    "user_count"?: number;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "user_rsvp"?: null | ScheduledEventUserResponse;
    "entity_metadata": null | EntityMetadataVoiceResponse;
}
export interface VoiceStateResponse {
    "channel_id": null | SnowflakeType;
    "deaf": boolean;
    "guild_id": null | SnowflakeType;
    "member"?: GuildMemberResponse;
    "mute": boolean;
    "request_to_speak_timestamp": string | null;
    "suppress": boolean;
    "self_stream": boolean | null;
    "self_deaf": boolean;
    "self_mute": boolean;
    "self_video": boolean;
    "session_id": string;
    "user_id": SnowflakeType;
}
export interface WebhookSlackEmbed {
    "title"?: string | null;
    "title_link"?: string | null;
    "text"?: string | null;
    "color"?: string | null;
    "ts"?: number | null;
    "pretext"?: string | null;
    "footer"?: string | null;
    "footer_icon"?: string | null;
    "author_name"?: string | null;
    "author_link"?: string | null;
    "author_icon"?: string | null;
    "image_url"?: string | null;
    "thumb_url"?: string | null;
    "fields"?: WebhookSlackEmbedField[] | null;
}
export interface WebhookSlackEmbedField {
    "name"?: string | null;
    "value"?: string | null;
    "inline"?: boolean | null;
}
export interface WebhookSourceChannelResponse {
    "id": SnowflakeType;
    "name": string;
}
export interface WebhookSourceGuildResponse {
    "id": SnowflakeType;
    "icon": string | null;
    "name": string;
}
export const enum WebhookTypes {
    /**
     * Incoming Webhooks can post messages to channels with a generated token
     */
    "GUILD_INCOMING" = 1,
    /**
     * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
     */
    "CHANNEL_FOLLOWER" = 2,
    /**
     * Application webhooks are webhooks used with Interactions
     */
    "APPLICATION_INCOMING" = 3
}
export interface WelcomeMessageResponse {
    "author_ids": SnowflakeType[];
    "message": string;
}
export interface WelcomeScreenPatchRequestPartial {
    "description"?: string | null;
    "welcome_channels"?: GuildWelcomeChannel[] | null;
    "enabled"?: boolean | null;
}
export interface WidgetActivity {
    "name": string;
}
export interface WidgetChannel {
    "id": SnowflakeType;
    "name": string;
    "position": number;
}
export const enum WidgetImageStyles {
    /**
     * shield style widget with Discord icon and guild members online count
     */
    "SHIELD" = "shield",
    /**
     * large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget
     */
    "BANNER1" = "banner1",
    /**
     * smaller widget style with guild icon, name and online count. Split on the right with Discord logo
     */
    "BANNER2" = "banner2",
    /**
     * large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right
     */
    "BANNER3" = "banner3",
    /**
     * large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom
     */
    "BANNER4" = "banner4"
}
export interface WidgetMember {
    "id": string;
    "username": string;
    "discriminator": WidgetUserDiscriminator;
    "avatar": null;
    "status": string;
    "avatar_url": string;
    "activity"?: WidgetActivity;
    "deaf"?: boolean;
    "mute"?: boolean;
    "self_deaf"?: boolean;
    "self_mute"?: boolean;
    "suppress"?: boolean;
    "channel_id"?: SnowflakeType;
}
export interface WidgetResponse {
    "id": SnowflakeType;
    "name": string;
    "instant_invite": string | null;
    "channels": WidgetChannel[];
    "members": WidgetMember[];
    "presence_count": number;
}
export interface WidgetSettingsResponse {
    "enabled": boolean;
    "channel_id": null | SnowflakeType;
}
export const enum WidgetUserDiscriminator {
    "ZEROES" = "0000"
}
export interface Error {
    /**
     * Discord internal error code. See error code reference
     */
    "code": number;
    /**
     * Human-readable error message
     */
    "message": string;
}
export interface InnerErrors {
    /**
     * The list of errors for this field
     */
    "_errors": Error[];
}
export type ErrorDetails = {
    [additionalProperties: string]: ErrorDetails;
} | InnerErrors;
export type ErrorResponse = Error & {
    "errors"?: ErrorDetails;
};
export type RatelimitedResponse = Error & {
    /**
     * The number of seconds to wait before retrying your request
     */
    "retry_after": number;
    /**
     * Whether you are being ratelimited by the global ratelimit or a per-endpoint ratelimit
     */
    "global": boolean;
};
export interface DeferredCreateMessageInteractionCallbackRequest {
    "type": InteractionCallbackTypes.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE;
    "data"?: null | IncomingWebhookInteractionRequest;
}
export interface DeferredUpdateMessageInteractionCallbackRequest {
    "type": InteractionCallbackTypes.DEFERRED_UPDATE_MESSAGE;
}
