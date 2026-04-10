export interface AccountResponse {
    "id": string;
    "name": string | null;
}
export interface ActionRowComponentForMessageRequest {
    "type": 1;
    "id"?: number | null;
    "components": (ButtonComponentForMessageRequest | ChannelSelectComponentForMessageRequest | MentionableSelectComponentForMessageRequest | RoleSelectComponentForMessageRequest | StringSelectComponentForMessageRequest | UserSelectComponentForMessageRequest)[];
}
export interface ActionRowComponentForModalRequest {
    "type": 1;
    "id"?: number | null;
    "components": TextInputComponentForModalRequest[];
}
export interface ActionRowComponentResponse {
    "type": 1;
    "id": number;
    "components": (ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse)[];
}
export interface ActivitiesAttachmentResponse {
    "attachment": AttachmentResponse;
}
export type AfkTimeouts = 60 | 300 | 900 | 1800 | 3600;
export type AllowedMentionTypes = "users" | "roles" | "everyone";
export interface ApplicationCommandAttachmentOption {
    "type": 11;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandAttachmentOptionResponse {
    "type": 11;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandAutocompleteCallbackRequest {
    "type": 8;
    "data": InteractionApplicationCommandAutocompleteCallbackIntegerData | InteractionApplicationCommandAutocompleteCallbackNumberData | InteractionApplicationCommandAutocompleteCallbackStringData;
}
export interface ApplicationCommandBooleanOption {
    "type": 5;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandBooleanOptionResponse {
    "type": 5;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandChannelOption {
    "type": 7;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
    "channel_types"?: ChannelTypes[] | null;
}
export interface ApplicationCommandChannelOptionResponse {
    "type": 7;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
    "channel_types"?: ChannelTypes[];
}
export interface ApplicationCommandCreateRequest {
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description"?: string | null;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "options"?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    "default_member_permissions"?: number | null;
    "dm_permission"?: boolean | null;
    "contexts"?: InteractionContextType[] | null;
    "integration_types"?: ApplicationIntegrationType[] | null;
    "handler"?: null | ApplicationCommandHandler;
    "type"?: null | ApplicationCommandType;
}
export type ApplicationCommandHandler = number;
export interface ApplicationCommandIntegerOption {
    "type": 4;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
    "autocomplete"?: boolean | null;
    "choices"?: ApplicationCommandOptionIntegerChoice[] | null;
    "min_value"?: null | Int53Type;
    "max_value"?: null | Int53Type;
}
export interface ApplicationCommandIntegerOptionResponse {
    "type": 4;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
    "autocomplete"?: boolean;
    "choices"?: ApplicationCommandOptionIntegerChoiceResponse[];
    "min_value"?: Int53Type;
    "max_value"?: Int53Type;
}
export interface ApplicationCommandInteractionMetadataResponse {
    "id": SnowflakeType;
    "type": 2;
    "user"?: UserResponse;
    "authorizing_integration_owners": {
        [key: string]: SnowflakeType;
    };
    "original_response_message_id"?: SnowflakeType;
    "target_user"?: UserResponse;
    "target_message_id"?: SnowflakeType;
}
export interface ApplicationCommandMentionableOption {
    "type": 9;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandMentionableOptionResponse {
    "type": 9;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandNumberOption {
    "type": 10;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
    "autocomplete"?: boolean | null;
    "choices"?: ApplicationCommandOptionNumberChoice[] | null;
    "min_value"?: number | null;
    "max_value"?: number | null;
}
export interface ApplicationCommandNumberOptionResponse {
    "type": 10;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
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
        [key: string]: string;
    } | null;
    "value": Int53Type;
}
export interface ApplicationCommandOptionIntegerChoiceResponse {
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "value": Int53Type;
}
export interface ApplicationCommandOptionNumberChoice {
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "value": number;
}
export interface ApplicationCommandOptionNumberChoiceResponse {
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "value": number;
}
export interface ApplicationCommandOptionStringChoice {
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "value": string;
}
export interface ApplicationCommandOptionStringChoiceResponse {
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "value": string;
}
export type ApplicationCommandOptionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export interface ApplicationCommandPatchRequestPartial {
    "name"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description"?: string | null;
    "description_localizations"?: {
        [key: string]: string;
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
export type ApplicationCommandPermissionType = 1 | 2 | 3;
export interface ApplicationCommandResponse {
    "id": SnowflakeType;
    "application_id": SnowflakeType;
    "version": SnowflakeType;
    "default_member_permissions": string | null;
    "type": ApplicationCommandType;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "guild_id"?: SnowflakeType;
    "dm_permission"?: boolean;
    "contexts"?: InteractionContextType[] | null;
    "integration_types"?: ApplicationIntegrationType[];
    "options"?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandSubcommandGroupOptionResponse | ApplicationCommandSubcommandOptionResponse | ApplicationCommandUserOptionResponse)[];
    "nsfw"?: boolean;
}
export interface ApplicationCommandRoleOption {
    "type": 8;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandRoleOptionResponse {
    "type": 8;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
}
export interface ApplicationCommandStringOption {
    "type": 3;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
    "autocomplete"?: boolean | null;
    "min_length"?: number | null;
    "max_length"?: number | null;
    "choices"?: ApplicationCommandOptionStringChoice[] | null;
}
export interface ApplicationCommandStringOptionResponse {
    "type": 3;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
    "autocomplete"?: boolean;
    "choices"?: ApplicationCommandOptionStringChoiceResponse[];
    "min_length"?: number;
    "max_length"?: number;
}
export interface ApplicationCommandSubcommandGroupOption {
    "type": 2;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
    "options"?: ApplicationCommandSubcommandOption[] | null;
}
export interface ApplicationCommandSubcommandGroupOptionResponse {
    "type": 2;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
    "options"?: ApplicationCommandSubcommandOptionResponse[];
}
export interface ApplicationCommandSubcommandOption {
    "type": 1;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
    "options"?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandUserOption)[] | null;
}
export interface ApplicationCommandSubcommandOptionResponse {
    "type": 1;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
    "options"?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandUserOptionResponse)[];
}
export type ApplicationCommandType = 1 | 2 | 3 | 4;
export interface ApplicationCommandUpdateRequest {
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description"?: string | null;
    "description_localizations"?: {
        [key: string]: string;
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
    "type": 6;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean | null;
}
export interface ApplicationCommandUserOptionResponse {
    "type": 6;
    "name": string;
    "name_localized"?: string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localized"?: string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
    "required"?: boolean;
}
export type ApplicationExplicitContentFilterTypes = 0 | 1;
export interface ApplicationFormPartial {
    "description"?: {
        "default": string;
        "localizations"?: {
            [key: string]: string;
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
        [key: string]: null | ApplicationIntegrationTypeConfiguration;
    } | null;
}
export type ApplicationIdentityProviderAuthType = "OIDC" | "EPIC_ONLINE_SERVICES_ACCESS_TOKEN" | "EPIC_ONLINE_SERVICES_ID_TOKEN" | "STEAM_SESSION_TICKET" | "UNITY_SERVICES_ID_TOKEN" | "DISCORD_BOT_ISSUED_ACCESS_TOKEN" | "APPLE_ID_TOKEN" | "PLAYSTATION_NETWORK_ID_TOKEN";
export interface ApplicationIncomingWebhookResponse {
    "application_id": null | SnowflakeType;
    "avatar": string | null;
    "channel_id": null | SnowflakeType;
    "guild_id"?: null | SnowflakeType;
    "id": SnowflakeType;
    "name": string;
    "type": 3;
    "user"?: UserResponse;
}
export type ApplicationIntegrationType = 0 | 1;
export interface ApplicationIntegrationTypeConfiguration {
    "oauth2_install_params"?: null | ApplicationOAuth2InstallParams;
}
export interface ApplicationIntegrationTypeConfigurationResponse {
    "oauth2_install_params"?: ApplicationOAuth2InstallParamsResponse;
}
export interface ApplicationOAuth2InstallParams {
    "scopes"?: ("applications.commands" | "bot")[] | null;
    "permissions"?: number | null;
}
export interface ApplicationOAuth2InstallParamsResponse {
    "scopes": ("applications.commands" | "bot")[];
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
        [key: string]: ApplicationIntegrationTypeConfigurationResponse;
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
        [key: string]: string | null;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string | null;
    } | null;
}
export interface ApplicationRoleConnectionsMetadataItemResponse {
    "type": MetadataItemTypes;
    "key": string;
    "name": string;
    "name_localizations"?: {
        [key: string]: string;
    } | null;
    "description": string;
    "description_localizations"?: {
        [key: string]: string;
    } | null;
}
export type ApplicationTypes = 4;
export interface ApplicationUserRoleConnectionResponse {
    "platform_name"?: string | null;
    "platform_username"?: string | null;
    "metadata"?: {
        [key: string]: string;
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
    "title"?: string | null;
    "application"?: ApplicationResponse;
    "clip_created_at"?: string;
    "clip_participants"?: UserResponse[];
}
export type AuditLogActionTypes = 1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112 | 121 | 130 | 131 | 132 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 150 | 151 | 163 | 164 | 165 | 166 | 167 | 171 | 172 | 180 | 190 | 191 | 192 | 193 | 211;
export interface AuditLogEntryResponse {
    "id": SnowflakeType;
    "action_type": AuditLogActionTypes;
    "user_id": null | SnowflakeType;
    "target_id": null | SnowflakeType;
    "changes"?: AuditLogObjectChangeResponse[];
    "options"?: {
        [key: string]: string;
    };
    "reason"?: string;
}
export interface AuditLogObjectChangeResponse {
    "key": string | null;
    "new_value"?: unknown;
    "old_value"?: unknown;
}
export type AutomodActionType = 1 | 2 | 3 | 4;
export type AutomodEventType = 1 | 2;
export type AutomodKeywordPresetType = 1 | 2 | 3;
export type AutomodTriggerType = 1 | 2 | 3 | 4 | 5;
export type AvailableLocalesEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en-GB" | "en-US" | "es-419" | "es-ES" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "sv-SE" | "th" | "tr" | "uk" | "vi" | "zh-CN" | "zh-TW";
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
    "type": 1;
    "metadata"?: null | BlockMessageActionMetadata;
}
export interface BlockMessageActionMetadata {
    "custom_message"?: string | null;
}
export interface BlockMessageActionMetadataResponse {
    "custom_message"?: string;
}
export interface BlockMessageActionResponse {
    "type": 1;
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
        [key: string]: string;
    } | null;
    "flags"?: null | 1;
    "remove_member"?: boolean | null;
}
export interface ButtonComponentForMessageRequest {
    "type": 2;
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
    "type": 2;
    "id": number;
    "custom_id"?: string;
    "style": ButtonStyleTypes;
    "label"?: string;
    "disabled"?: boolean;
    "emoji"?: ComponentEmojiResponse;
    "url"?: string | null;
    "sku_id"?: SnowflakeType;
}
export type ButtonStyleTypes = 1 | 2 | 3 | 4 | 5 | 6;
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
    "type": 2;
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
export type ChannelPermissionOverwrites = 0 | 1;
export interface ChannelSelectComponentForMessageRequest {
    "type": 8;
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
    "type": 8;
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
    "type": 8;
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
    "type": "channel";
    "id": SnowflakeType;
}
export interface ChannelSelectDefaultValueResponse {
    "type": "channel";
    "id": SnowflakeType;
}
export type ChannelTypes = 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;
export interface CheckboxComponentForModalRequest {
    "type": 23;
    "id"?: number | null;
    "custom_id": string;
    "default"?: boolean | null;
}
export interface CheckboxGroupComponentForModalRequest {
    "type": 22;
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
export type ConnectedAccountProviders = "battlenet" | "bluesky" | "bungie" | "ebay" | "epicgames" | "facebook" | "github" | "instagram" | "mastodon" | "leagueoflegends" | "paypal" | "playstation" | "reddit" | "riotgames" | "roblox" | "skype" | "spotify" | "steam" | "tiktok" | "twitch" | "twitter" | "xbox" | "youtube" | "domain";
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
export type ConnectedAccountVisibility = 0 | 1;
export interface ContainerComponentForMessageRequest {
    "type": 17;
    "id"?: number | null;
    "accent_color"?: number | null;
    "components": (ActionRowComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[];
    "spoiler"?: boolean | null;
}
export interface ContainerComponentResponse {
    "type": 17;
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
    "type"?: null | (0 | 2 | 4 | 5 | 13 | 14 | 15);
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
    "target_type"?: null | (1 | 2);
}
export interface CreateMessageInteractionCallbackRequest {
    "type": 4;
    "data": IncomingWebhookInteractionRequest;
}
export interface CreateMessageInteractionCallbackResponse {
    "type": 4;
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
        [key: string]: string | null;
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
    "type"?: null | (10 | 11 | 12);
    "invitable"?: boolean | null;
}
export interface CreatedThreadResponse {
    "id": SnowflakeType;
    "type": 10 | 11 | 12;
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
    "trigger_type": 4;
    "trigger_metadata": DefaultKeywordListTriggerMetadata;
}
export interface DefaultKeywordListUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: 4;
    "trigger_metadata"?: DefaultKeywordListTriggerMetadata;
}
export interface DefaultKeywordRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": 4;
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
    "type": "discord";
    "name": string | null;
    "account": AccountResponse;
    "enabled": boolean;
    "id": SnowflakeType;
    "application": IntegrationApplicationResponse;
    "scopes": ("applications.commands" | "bot" | "webhook.incoming")[];
    "user"?: UserResponse;
}
export interface EmbeddedActivityInstance {
    "application_id": SnowflakeType;
    "instance_id": string;
    "launch_id": string;
    "location": GuildChannelLocation | PrivateChannelLocation;
    "users": SnowflakeType[];
}
export type EmbeddedActivityLocationKind = "gc" | "pc" | "party";
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
export type EntitlementOwnerTypes = number;
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
export type EntitlementTenantFulfillmentStatusResponse = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type EntitlementTypes = 8 | 10;
export interface EntityMetadataExternal {
    "location": string;
}
export interface EntityMetadataExternalResponse {
    "location": string;
}
export interface EntityMetadataStageInstance {
}
export interface EntityMetadataStageInstanceResponse {
}
export interface EntityMetadataVoice {
}
export interface EntityMetadataVoiceResponse {
}
export interface ExternalConnectionIntegrationResponse {
    "type": "twitch" | "youtube";
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
    "entity_type": 3;
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
    "entity_type"?: null | 3;
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
    "entity_type": 3;
    "entity_id": null | SnowflakeType;
    "user_count"?: number;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "user_rsvp"?: null | ScheduledEventUserResponse;
    "entity_metadata": EntityMetadataExternalResponse;
}
export interface FileComponentForMessageRequest {
    "type": 13;
    "id"?: number | null;
    "spoiler"?: boolean | null;
    "file": UnfurledMediaRequestWithAttachmentReferenceRequired;
}
export interface FileComponentResponse {
    "type": 13;
    "id": number;
    "file": UnfurledMediaResponse;
    "name": string | null;
    "size": number | null;
    "spoiler": boolean;
}
export interface FileUploadComponentForModalRequest {
    "type": 19;
    "id"?: number | null;
    "custom_id": string;
    "min_values"?: number | null;
    "max_values"?: number | null;
    "required"?: boolean | null;
}
export interface FlagToChannelAction {
    "type": 2;
    "metadata": FlagToChannelActionMetadata;
}
export interface FlagToChannelActionMetadata {
    "channel_id": SnowflakeType;
}
export interface FlagToChannelActionMetadataResponse {
    "channel_id": SnowflakeType;
}
export interface FlagToChannelActionResponse {
    "type": 2;
    "metadata": FlagToChannelActionMetadataResponse;
}
export type ForumLayout = 0 | 1 | 2;
export interface ForumTagResponse {
    "id": SnowflakeType;
    "name": string;
    "moderated": boolean;
    "emoji_id": null | SnowflakeType;
    "emoji_name": string | null;
}
export interface FriendInviteResponse {
    "type": 2;
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
    "type": 1;
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
    "kind": "gc";
    "channel_id": SnowflakeType;
    "guild_id": SnowflakeType;
}
export interface GuildChannelResponse {
    "id": SnowflakeType;
    "type": 0 | 2 | 4 | 5 | 13 | 14 | 15;
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
export type GuildExplicitContentFilterTypes = 0 | 1 | 2;
export type GuildFeatures = "ANIMATED_BANNER" | "ANIMATED_ICON" | "APPLICATION_COMMAND_PERMISSIONS_V2" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "CREATOR_MONETIZABLE_PROVISIONAL" | "CREATOR_STORE_PAGE" | "DEVELOPER_SUPPORT_SERVER" | "DISCOVERABLE" | "FEATURABLE" | "INVITES_DISABLED" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "RAID_ALERTS_DISABLED" | "ROLE_ICONS" | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" | "ROLE_SUBSCRIPTIONS_ENABLED" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED";
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
    "type": 1;
    "user"?: UserResponse;
    "token"?: string;
    "url"?: string;
}
export interface GuildInviteResponse {
    "type": 0;
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
export type GuildMFALevel = 0 | 1;
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
export type GuildNSFWContentLevel = 0 | 1 | 2 | 3;
export type GuildOnboardingMode = 0 | 1;
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
export type GuildScheduledEventEntityTypes = 0 | 1 | 2 | 3;
export type GuildScheduledEventPrivacyLevels = 2;
export type GuildScheduledEventStatuses = 1 | 2 | 3 | 4;
export interface GuildStickerResponse {
    "id": SnowflakeType;
    "name": string;
    "tags": string;
    "type": 2;
    "format_type": null | StickerFormatTypes;
    "description": string | null;
    "available": boolean;
    "guild_id": SnowflakeType;
    "user"?: UserResponse;
}
export interface GuildSubscriptionIntegrationResponse {
    "type": "guild_subscription";
    "name": string | null;
    "account": AccountResponse;
    "enabled": boolean;
    "id": SnowflakeType;
}
export interface GuildTemplateChannelResponse {
    "id": number | null;
    "type": 0 | 2 | 4 | 15;
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
export interface IconEmojiResponse {
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
export type IntegrationExpireBehaviorTypes = 0 | 1;
export type IntegrationExpireGracePeriodTypes = 1 | 3 | 7 | 14 | 30;
export type IntegrationTypes = "discord" | "twitch" | "youtube" | "guild_subscription";
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
export type InteractionCallbackTypes = 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12 | 13;
export type InteractionContextType = 0 | 1 | 2;
export interface InteractionResponse {
    "id": SnowflakeType;
    "type": InteractionTypes;
    "response_message_id"?: SnowflakeType;
    "response_message_loading"?: boolean;
    "response_message_ephemeral"?: boolean;
    "channel_id"?: SnowflakeType;
    "guild_id"?: SnowflakeType;
}
export type InteractionTypes = 1 | 2 | 3 | 4 | 5 | 6;
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
        [key: string]: ApplicationIntegrationTypeConfigurationResponse;
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
export type InviteTargetTypes = 1 | 2 | 3;
export type InviteTypes = 0 | 1 | 2;
export interface KeywordRuleResponse {
    "id": SnowflakeType;
    "guild_id": SnowflakeType;
    "creator_id": SnowflakeType;
    "name": string;
    "event_type": AutomodEventType;
    "actions": (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    "trigger_type": 1;
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
    "trigger_type": 1;
    "trigger_metadata"?: null | KeywordTriggerMetadata;
}
export interface KeywordUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: 1;
    "trigger_metadata"?: null | KeywordTriggerMetadata;
}
export interface LabelComponentForModalRequest {
    "type": 18;
    "id"?: number | null;
    "label": string;
    "description"?: string | null;
    "component": ChannelSelectComponentForModalRequest | CheckboxComponentForModalRequest | CheckboxGroupComponentForModalRequest | FileUploadComponentForModalRequest | MentionableSelectComponentForModalRequest | RadioGroupComponentForModalRequest | RoleSelectComponentForModalRequest | StringSelectComponentForModalRequest | TextInputComponentForModalRequest | UserSelectComponentForModalRequest;
}
export interface LaunchActivityInteractionCallbackRequest {
    "type": 12;
}
export interface LaunchActivityInteractionCallbackResponse {
    "type": 12;
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
        [key: string]: string;
    } | null;
    "flags"?: null | 1;
}
export interface LobbyMemberResponse {
    "id": SnowflakeType;
    "metadata": {
        [key: string]: string;
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
        [key: string]: string;
    };
    "flags": number;
    "application_id"?: SnowflakeType;
}
export interface LobbyResponse {
    "id": SnowflakeType;
    "application_id": SnowflakeType;
    "metadata": {
        [key: string]: string;
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
    "trigger_type": 3;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": MLSpamTriggerMetadataResponse;
}
export interface MLSpamTriggerMetadata {
}
export interface MLSpamTriggerMetadataResponse {
}
export interface MLSpamUpsertRequest {
    "name": string;
    "event_type": AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type": 3;
    "trigger_metadata"?: null | MLSpamTriggerMetadata;
}
export interface MLSpamUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: 3;
    "trigger_metadata"?: null | MLSpamTriggerMetadata;
}
export interface MediaGalleryComponentForMessageRequest {
    "type": 12;
    "id"?: number | null;
    "items": MediaGalleryItemRequest[];
}
export interface MediaGalleryComponentResponse {
    "type": 12;
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
    "trigger_type": 5;
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
    "trigger_type": 5;
    "trigger_metadata"?: null | MentionSpamTriggerMetadata;
}
export interface MentionSpamUpsertRequestPartial {
    "name"?: string;
    "event_type"?: AutomodEventType;
    "actions"?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    "enabled"?: boolean | null;
    "exempt_roles"?: SnowflakeType[] | null;
    "exempt_channels"?: SnowflakeType[] | null;
    "trigger_type"?: 5;
    "trigger_metadata"?: null | MentionSpamTriggerMetadata;
}
export interface MentionableSelectComponentForMessageRequest {
    "type": 7;
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
    "type": 7;
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
    "type": 7;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "default_values"?: (RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse)[];
}
export interface MessageActivityResponse {
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
    "type": 3;
    "user"?: UserResponse;
    "authorizing_integration_owners": {
        [key: string]: SnowflakeType;
    };
    "original_response_message_id"?: SnowflakeType;
    "interacted_message_id": SnowflakeType;
}
export type MessageComponentSeparatorSpacingSize = 1 | 2;
export type MessageComponentTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 17 | 18 | 19 | 21 | 22 | 23;
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
export type MessageReferenceType = 0;
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
export type MessageShareCustomUserThemeBaseTheme = 0 | 1 | 2 | 3 | 4;
export interface MessageSnapshotResponse {
    "message": MinimalContentMessageResponse;
}
export interface MessageStickerItemResponse {
    "id": SnowflakeType;
    "name": string;
    "format_type": StickerFormatTypes;
}
export type MessageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 46 | 55;
export type MetadataItemTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
    "type": 9;
    "data": ModalInteractionCallbackRequestData;
}
export interface ModalInteractionCallbackRequestData {
    "custom_id": string;
    "title": string;
    "components": (ActionRowComponentForModalRequest | LabelComponentForModalRequest | TextDisplayComponentForModalRequest)[];
}
export interface ModalSubmitInteractionMetadataResponse {
    "id": SnowflakeType;
    "type": 5;
    "user"?: UserResponse;
    "authorizing_integration_owners": {
        [key: string]: SnowflakeType;
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
export type NameplatePalette = string;
export interface NewMemberActionResponse {
    "channel_id": SnowflakeType;
    "action_type": NewMemberActionType;
    "title": string;
    "description": string;
    "emoji"?: SettingsEmojiResponse;
    "icon"?: string;
}
export type NewMemberActionType = 0 | 1;
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
export type OAuth2Scopes = "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | "openid";
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
export type OnboardingPromptType = 0 | 1;
export interface PartialDiscordIntegrationResponse {
    "id": SnowflakeType;
    "type": "discord";
    "name": string | null;
    "account": AccountResponse;
    "application_id": SnowflakeType;
}
export interface PartialExternalConnectionIntegrationResponse {
    "id": SnowflakeType;
    "type": "twitch" | "youtube";
    "name": string | null;
    "account": AccountResponse;
}
export interface PartialGuildSubscriptionIntegrationResponse {
    "id": SnowflakeType;
    "type": "guild_subscription";
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
export type PollLayoutTypes = number;
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
    "type": 1;
}
export type PremiumGuildTiers = 0 | 1 | 2 | 3;
export type PremiumTypes = 0 | 1 | 2 | 3;
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
        [key: string]: ApplicationIntegrationTypeConfigurationResponse;
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
    "kind": "pc";
    "channel_id": SnowflakeType;
}
export interface PrivateChannelResponse {
    "id": SnowflakeType;
    "type": 1;
    "last_message_id"?: null | SnowflakeType;
    "flags": number;
    "last_pin_timestamp"?: string | null;
    "recipients": UserResponse[];
}
export interface PrivateGroupChannelResponse {
    "id": SnowflakeType;
    "type": 3;
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
export type PurchaseType = 0;
export interface QuarantineUserAction {
    "type": 4;
    "metadata"?: null | QuarantineUserActionMetadata;
}
export interface QuarantineUserActionMetadata {
}
export interface QuarantineUserActionMetadataResponse {
}
export interface QuarantineUserActionResponse {
    "type": 4;
    "metadata": QuarantineUserActionMetadataResponse;
}
export interface RadioGroupComponentForModalRequest {
    "type": 21;
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
export type ReactionTypes = 0 | 1;
export interface ResolvedObjectsResponse {
    "users"?: {
        [key: string]: UserResponse;
    } | null;
    "members"?: {
        [key: string]: BasicGuildMemberResponse;
    } | null;
    "channels"?: {
        [key: string]: GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse;
    } | null;
    "roles"?: {
        [key: string]: GuildRoleResponse;
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
    "type": 6;
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
    "type": 6;
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
    "type": 6;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "default_values"?: RoleSelectDefaultValueResponse[];
}
export interface RoleSelectDefaultValue {
    "type": "role";
    "id": SnowflakeType;
}
export interface RoleSelectDefaultValueResponse {
    "type": "role";
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
export interface SectionComponentForMessageRequest {
    "type": 9;
    "id"?: number | null;
    "components": TextDisplayComponentForMessageRequest[];
    "accessory": ButtonComponentForMessageRequest | ThumbnailComponentForMessageRequest;
}
export interface SectionComponentResponse {
    "type": 9;
    "id": number;
    "components": TextDisplayComponentResponse[];
    "accessory": ButtonComponentResponse | ThumbnailComponentResponse;
}
export interface SeparatorComponentForMessageRequest {
    "type": 14;
    "id"?: number | null;
    "spacing"?: null | MessageComponentSeparatorSpacingSize;
    "divider"?: boolean | null;
}
export interface SeparatorComponentResponse {
    "type": 14;
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
export type SnowflakeSelectDefaultValueTypes = "user" | "role" | "channel";
export type SnowflakeType = string;
export interface SocialLayerSKUPurchaseEligibilityCallbackData {
    "eligible": boolean;
}
export interface SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest {
    "type": 13;
    "data": SocialLayerSKUPurchaseEligibilityCallbackData;
}
export type SortingOrder = "asc" | "desc";
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
    "trigger_type": 2;
    "enabled": boolean;
    "exempt_roles": SnowflakeType[];
    "exempt_channels": SnowflakeType[];
    "trigger_metadata": SpamLinkTriggerMetadataResponse;
}
export interface SpamLinkTriggerMetadataResponse {
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
export type StageInstancesPrivacyLevels = 1 | 2;
export interface StageScheduledEventCreateRequest {
    "name": string;
    "description"?: string | null;
    "image"?: string | null;
    "scheduled_start_time": string;
    "scheduled_end_time"?: string | null;
    "privacy_level": GuildScheduledEventPrivacyLevels;
    "entity_type": 1;
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
    "entity_type"?: null | 1;
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
    "entity_type": 1;
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
    "type": 1;
    "format_type": null | StickerFormatTypes;
    "description": string | null;
    "pack_id": SnowflakeType;
    "sort_value": number;
}
export type StickerFormatTypes = 1 | 2 | 3 | 4;
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
export type StickerTypes = 1 | 2;
export interface StringSelectComponentForMessageRequest {
    "type": 3;
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
    "type": 3;
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
    "type": 3;
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
export type TargetUsersJobStatusTypes = 0 | 1 | 2 | 3;
export interface TeamMemberResponse {
    "user": UserResponse;
    "team_id": SnowflakeType;
    "membership_state": TeamMembershipStates;
}
export type TeamMembershipStates = 1 | 2;
export interface TeamResponse {
    "id": SnowflakeType;
    "icon": string | null;
    "name": string;
    "owner_user_id": SnowflakeType;
    "members": TeamMemberResponse[];
}
export interface TextDisplayComponentForMessageRequest {
    "type": 10;
    "id"?: number | null;
    "content": string;
}
export interface TextDisplayComponentForModalRequest {
    "type": 10;
    "id"?: number | null;
    "content": string;
}
export interface TextDisplayComponentResponse {
    "type": 10;
    "id": number;
    "content": string;
}
export interface TextInputComponentForModalRequest {
    "type": 4;
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
    "type": 4;
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
export type TextInputStyleTypes = 1 | 2;
export type ThreadAutoArchiveDuration = 60 | 1440 | 4320 | 10080;
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
    "type": 10 | 11 | 12;
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
export type ThreadSearchTagSetting = "match_all" | "match_some";
export type ThreadSortOrder = 0 | 1;
export type ThreadSortingMode = "relevance" | "creation_time" | "last_message_time" | "archive_time";
export interface ThreadsResponse {
    "threads": ThreadResponse[];
    "members": ThreadMemberResponse[];
    "has_more": boolean;
    "first_messages"?: MessageResponse[];
}
export interface ThumbnailComponentForMessageRequest {
    "type": 11;
    "id"?: number | null;
    "description"?: string | null;
    "spoiler"?: boolean | null;
    "media": UnfurledMediaRequest;
}
export interface ThumbnailComponentResponse {
    "type": 11;
    "id": number;
    "media": UnfurledMediaResponse;
    "description": string | null;
    "spoiler": boolean;
}
export interface TypingIndicatorResponse {
}
export type UInt32Type = number;
export interface UnbanUserFromGuildRequest {
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
        [key: string]: string;
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
    "type"?: null | (0 | 2 | 4 | 5 | 13 | 14 | 15);
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
    "type": 7;
    "data": IncomingWebhookUpdateForInteractionCallbackRequestPartial;
}
export interface UpdateMessageInteractionCallbackResponse {
    "type": 7;
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
    "type": 3;
    "metadata": UserCommunicationDisabledActionMetadata;
}
export interface UserCommunicationDisabledActionMetadata {
    "duration_seconds"?: number | null;
}
export interface UserCommunicationDisabledActionMetadataResponse {
    "duration_seconds": number;
}
export interface UserCommunicationDisabledActionResponse {
    "type": 3;
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
export type UserNotificationSettings = 0 | 1;
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
    "type": 5;
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
    "type": 5;
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
    "type": 5;
    "id": number;
    "custom_id": string;
    "placeholder"?: string;
    "min_values": number | null;
    "max_values": number | null;
    "disabled"?: boolean;
    "default_values"?: UserSelectDefaultValueResponse[];
}
export interface UserSelectDefaultValue {
    "type": "user";
    "id": SnowflakeType;
}
export interface UserSelectDefaultValueResponse {
    "type": "user";
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
export type VerificationLevels = 0 | 1 | 2 | 3 | 4;
export type VideoQualityModes = 1 | 2;
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
    "entity_type": 2;
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
    "entity_type"?: null | 2;
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
    "entity_type": 2;
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
export type WebhookTypes = 1 | 2 | 3;
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
export type WidgetImageStyles = "shield" | "banner1" | "banner2" | "banner3" | "banner4";
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
export type WidgetUserDiscriminator = "0000";
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
    [key: string]: ErrorDetails;
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
    "type": 5;
    "data"?: null | IncomingWebhookInteractionRequest;
}
export interface DeferredUpdateMessageInteractionCallbackRequest {
    "type": 6;
}
