export interface AccountResponse {
    id: string;
    name: string | null;
}
export function AccountResponse(id: AccountResponse["id"], name: AccountResponse["name"]): AccountResponse { return { id, name }; }
export interface ActionRowComponentForMessageRequest {
    type: MessageComponentTypes.ACTION_ROW;
    id?: number | null;
    components: (ButtonComponentForMessageRequest | ChannelSelectComponentForMessageRequest | MentionableSelectComponentForMessageRequest | RoleSelectComponentForMessageRequest | StringSelectComponentForMessageRequest | UserSelectComponentForMessageRequest)[];
}
export function ActionRowComponentForMessageRequest(components: ActionRowComponentForMessageRequest["components"], optional?: Omit<ActionRowComponentForMessageRequest, "type" | "components">): ActionRowComponentForMessageRequest { return { type: MessageComponentTypes.ACTION_ROW, components, ...optional }; }
export interface ActionRowComponentForModalRequest {
    type: MessageComponentTypes.ACTION_ROW;
    id?: number | null;
    components: TextInputComponentForModalRequest[];
}
export function ActionRowComponentForModalRequest(components: ActionRowComponentForModalRequest["components"], optional?: Omit<ActionRowComponentForModalRequest, "type" | "components">): ActionRowComponentForModalRequest { return { type: MessageComponentTypes.ACTION_ROW, components, ...optional }; }
export interface ActionRowComponentResponse {
    type: MessageComponentTypes.ACTION_ROW;
    id: number;
    components: (ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse)[];
}
export function ActionRowComponentResponse(id: ActionRowComponentResponse["id"], components: ActionRowComponentResponse["components"]): ActionRowComponentResponse { return { type: MessageComponentTypes.ACTION_ROW, id, components }; }
export enum ActionTypes {
    /**
     * User started typing in a channel
     */
    TYPING_START = "TYPING_START",
    /**
     * Invite to a channel was created
     */
    INVITE_CREATE = "INVITE_CREATE",
    /**
     * Invite to a channel was deleted
     */
    INVITE_DELETE = "INVITE_DELETE",
    /**
     * Guild channel webhook was created, updated, or deleted
     */
    WEBHOOKS_UPDATE = "WEBHOOKS_UPDATE",
    /**
     * New guild channel created
     */
    CHANNEL_CREATE = "CHANNEL_CREATE",
    /**
     * Voice channel status was updated
     */
    VOICE_CHANNEL_STATUS_UPDATE = "VOICE_CHANNEL_STATUS_UPDATE",
    /**
     * Channel was updated
     */
    CHANNEL_UPDATE = "CHANNEL_UPDATE",
    /**
     * Channel was deleted
     */
    CHANNEL_DELETE = "CHANNEL_DELETE",
    /**
     * Message was pinned or unpinned
     */
    CHANNEL_PINS_UPDATE = "CHANNEL_PINS_UPDATE",
    /**
     * Thread created, also sent when being added to a private thread
     */
    THREAD_CREATE = "THREAD_CREATE",
    /**
     * Thread was updated
     */
    THREAD_UPDATE = "THREAD_UPDATE",
    /**
     * Thread was deleted
     */
    THREAD_DELETE = "THREAD_DELETE",
    /**
     * Sent when gaining access to a channel, contains all active threads in that channel
     */
    THREAD_LIST_SYNC = "THREAD_LIST_SYNC",
    /**
     * Thread member for the current user was updated
     */
    THREAD_MEMBER_UPDATE = "THREAD_MEMBER_UPDATE",
    /**
     * Some user(s) were added to or removed from a thread
     */
    THREAD_MEMBERS_UPDATE = "THREAD_MEMBERS_UPDATE",
    /**
     * Lazy-load for unavailable guild, guild became available, or user joined a new guild
     */
    GUILD_CREATE = "GUILD_CREATE",
    /**
     * Guild was updated
     */
    GUILD_UPDATE = "GUILD_UPDATE",
    /**
     * Guild became unavailable, or user left/was removed from a guild
     */
    GUILD_DELETE = "GUILD_DELETE",
    /**
     * Guild emojis were updated
     */
    GUILD_EMOJIS_UPDATE = "GUILD_EMOJIS_UPDATE",
    /**
     * Guild stickers were updated
     */
    GUILD_STICKERS_UPDATE = "GUILD_STICKERS_UPDATE",
    /**
     * Guild integration was updated
     */
    GUILD_INTEGRATIONS_UPDATE = "GUILD_INTEGRATIONS_UPDATE",
    /**
     * New user joined a guild
     */
    GUILD_MEMBER_ADD = "GUILD_MEMBER_ADD",
    /**
     * Guild member was updated
     */
    GUILD_MEMBER_UPDATE = "GUILD_MEMBER_UPDATE",
    /**
     * User was removed from a guild
     */
    GUILD_MEMBER_REMOVE = "GUILD_MEMBER_REMOVE",
    /**
     * User was banned from a guild
     */
    GUILD_BAN_ADD = "GUILD_BAN_ADD",
    /**
     * User was unbanned from a guild
     */
    GUILD_BAN_REMOVE = "GUILD_BAN_REMOVE",
    /**
     * Guild role was created
     */
    GUILD_ROLE_CREATE = "GUILD_ROLE_CREATE",
    /**
     * Guild role was updated
     */
    GUILD_ROLE_UPDATE = "GUILD_ROLE_UPDATE",
    /**
     * Guild role was deleted
     */
    GUILD_ROLE_DELETE = "GUILD_ROLE_DELETE",
    /**
     * Response to Request Guild Members
     */
    GUILD_MEMBERS_CHUNK = "GUILD_MEMBERS_CHUNK",
    /**
     * Message was created
     */
    MESSAGE_CREATE = "MESSAGE_CREATE",
    /**
     * Message was edited
     */
    MESSAGE_UPDATE = "MESSAGE_UPDATE",
    /**
     * Message was deleted
     */
    MESSAGE_DELETE = "MESSAGE_DELETE",
    /**
     * Multiple messages were deleted at once
     */
    MESSAGE_DELETE_BULK = "MESSAGE_DELETE_BULK",
    /**
     * User reacted to a message
     */
    MESSAGE_REACTION_ADD = "MESSAGE_REACTION_ADD",
    /**
     * User removed a reaction from a message
     */
    MESSAGE_REACTION_REMOVE = "MESSAGE_REACTION_REMOVE",
    /**
     * All reactions were explicitly removed from a message
     */
    MESSAGE_REACTION_REMOVE_ALL = "MESSAGE_REACTION_REMOVE_ALL",
    /**
     * All reactions for a given emoji were explicitly removed from a message
     */
    MESSAGE_REACTION_REMOVE_EMOJI = "MESSAGE_REACTION_REMOVE_EMOJI",
    /**
     * Properties about the user changed
     */
    USER_UPDATE = "USER_UPDATE",
    /**
     * Entitlement was created
     */
    ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE",
    /**
     * Entitlement was updated
     */
    ENTITLEMENT_UPDATE = "ENTITLEMENT_UPDATE",
    /**
     * Entitlement was deleted
     */
    ENTITLEMENT_DELETE = "ENTITLEMENT_DELETE",
    /**
     * Contains the initial state information
     */
    READY = "READY",
    /**
     * Response to Resume
     */
    RESUMED = "RESUMED",
    /**
     * User was updated
     */
    PRESENCE_UPDATE = "PRESENCE_UPDATE",
    /**
     * Someone joined, left, or moved a voice channel
     */
    VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE",
    /**
     * Guild's voice server was updated
     */
    VOICE_SERVER_UPDATE = "VOICE_SERVER_UPDATE",
    /**
     * Sent when a message is created in a lobby
     */
    LOBBY_MESSAGE_CREATE = "LOBBY_MESSAGE_CREATE",
    /**
     * Sent when a message is updated in a lobby
     */
    LOBBY_MESSAGE_UPDATE = "LOBBY_MESSAGE_UPDATE",
    /**
     * Sent when a message is deleted from a lobby
     */
    LOBBY_MESSAGE_DELETE = "LOBBY_MESSAGE_DELETE",
    /**
     * Sent when a direct message is created during an active Social SDK session
     */
    GAME_DIRECT_MESSAGE_CREATE = "GAME_DIRECT_MESSAGE_CREATE",
    /**
     * Sent when a direct message is deleted during an active Social SDK session
     */
    GAME_DIRECT_MESSAGE_DELETE = "GAME_DIRECT_MESSAGE_DELETE",
    /**
     * Sent when a direct message is updated during an active Social SDK session
     */
    GAME_DIRECT_MESSAGE_UPDATE = "GAME_DIRECT_MESSAGE_UPDATE",
    /**
     * User used an interaction, such as an Application Command
     */
    INTERACTION_CREATE = "INTERACTION_CREATE",
    /**
     * Guild integration was created
     */
    INTEGRATION_CREATE = "INTEGRATION_CREATE",
    /**
     * Guild integration was updated
     */
    INTEGRATION_UPDATE = "INTEGRATION_UPDATE",
    /**
     * Guild integration was deleted
     */
    INTEGRATION_DELETE = "INTEGRATION_DELETE",
    /**
     * Application command permission was updated
     */
    APPLICATION_COMMAND_PERMISSIONS_UPDATE = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
    /**
     * Sent when an app was authorized by a user to a server or their account
     */
    APPLICATION_AUTHORIZED = "APPLICATION_AUTHORIZED",
    /**
     * Sent when an app was deauthorized by a user
     */
    APPLICATION_DEAUTHORIZED = "APPLICATION_DEAUTHORIZED",
    /**
     * Stage instance was created
     */
    STAGE_INSTANCE_CREATE = "STAGE_INSTANCE_CREATE",
    /**
     * Stage instance was updated
     */
    STAGE_INSTANCE_UPDATE = "STAGE_INSTANCE_UPDATE",
    /**
     * Stage instance was deleted or closed
     */
    STAGE_INSTANCE_DELETE = "STAGE_INSTANCE_DELETE",
    /**
     * A guild audit log entry was created
     */
    GUILD_AUDIT_LOG_ENTRY_CREATE = "GUILD_AUDIT_LOG_ENTRY_CREATE",
    /**
     * Guild scheduled event was created
     */
    GUILD_SCHEDULED_EVENT_CREATE = "GUILD_SCHEDULED_EVENT_CREATE",
    /**
     * Guild scheduled event was updated
     */
    GUILD_SCHEDULED_EVENT_UPDATE = "GUILD_SCHEDULED_EVENT_UPDATE",
    /**
     * Guild scheduled event was deleted
     */
    GUILD_SCHEDULED_EVENT_DELETE = "GUILD_SCHEDULED_EVENT_DELETE",
    /**
     * User subscribed to a guild scheduled event
     */
    GUILD_SCHEDULED_EVENT_USER_ADD = "GUILD_SCHEDULED_EVENT_USER_ADD",
    /**
     * User unsubscribed from a guild scheduled event
     */
    GUILD_SCHEDULED_EVENT_USER_REMOVE = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    /**
     * Auto Moderation rule was created
     */
    AUTO_MODERATION_RULE_CREATE = "AUTO_MODERATION_RULE_CREATE",
    /**
     * Auto Moderation rule was updated
     */
    AUTO_MODERATION_RULE_UPDATE = "AUTO_MODERATION_RULE_UPDATE",
    /**
     * Auto Moderation rule was deleted
     */
    AUTO_MODERATION_RULE_DELETE = "AUTO_MODERATION_RULE_DELETE",
    /**
     * Auto Moderation rule was triggered and an action was executed (.e.g. a message was blocked)
     */
    AUTO_MODERATION_ACTION_EXECUTION = "AUTO_MODERATION_ACTION_EXECUTION",
    GUILD_SOUNDBOARD_SOUNDS_UPDATE = "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
    GUILD_SOUNDBOARD_SOUND_CREATE = "GUILD_SOUNDBOARD_SOUND_CREATE",
    GUILD_SOUNDBOARD_SOUND_UPDATE = "GUILD_SOUNDBOARD_SOUND_UPDATE",
    GUILD_SOUNDBOARD_SOUND_DELETE = "GUILD_SOUNDBOARD_SOUND_DELETE",
    /**
     * User was added to a Quest (currently unavailable)
     */
    QUEST_USER_ENROLLMENT = "QUEST_USER_ENROLLMENT",
    RATE_LIMITED = "RATE_LIMITED"
}
export interface ActivitiesAttachmentResponse {
    attachment: AttachmentResponse;
}
export function ActivitiesAttachmentResponse(attachment: ActivitiesAttachmentResponse["attachment"]): ActivitiesAttachmentResponse { return { attachment }; }
export enum ActivityActionTypes {
    JOIN = 1,
    SPECTATE = 2,
    LISTEN = 3,
    JOIN_REQUEST = 5,
    STREAM_REQUEST = 6
}
export enum AfkTimeouts {
    ONE_MINUTE = 60,
    FIVE_MINUTES = 300,
    FIFTEEN_MINUTES = 900,
    THIRTY_MINUTES = 1800,
    ONE_HOUR = 3600
}
export enum AllowedMentionTypes {
    /**
     * Controls role mentions
     */
    USERS = "users",
    /**
     * Controls user mentions
     */
    ROLES = "roles",
    /**
     * Controls @everyone and @here mentions
     */
    EVERYONE = "everyone"
}
export interface ApplicationCommandAttachmentOption {
    type: ApplicationCommandOptionType.ATTACHMENT;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
}
export function ApplicationCommandAttachmentOption(name: ApplicationCommandAttachmentOption["name"], description: ApplicationCommandAttachmentOption["description"], optional?: Omit<ApplicationCommandAttachmentOption, "type" | "name" | "description">): ApplicationCommandAttachmentOption { return { type: ApplicationCommandOptionType.ATTACHMENT, name, description, ...optional }; }
export interface ApplicationCommandAttachmentOptionResponse {
    type: ApplicationCommandOptionType.ATTACHMENT;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
}
export function ApplicationCommandAttachmentOptionResponse(name: ApplicationCommandAttachmentOptionResponse["name"], description: ApplicationCommandAttachmentOptionResponse["description"], optional?: Omit<ApplicationCommandAttachmentOptionResponse, "type" | "name" | "description">): ApplicationCommandAttachmentOptionResponse { return { type: ApplicationCommandOptionType.ATTACHMENT, name, description, ...optional }; }
export interface ApplicationCommandAutocompleteCallbackRequest {
    type: InteractionCallbackTypes.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT;
    data: InteractionApplicationCommandAutocompleteCallbackIntegerData | InteractionApplicationCommandAutocompleteCallbackNumberData | InteractionApplicationCommandAutocompleteCallbackStringData;
}
export function ApplicationCommandAutocompleteCallbackRequest(data: ApplicationCommandAutocompleteCallbackRequest["data"]): ApplicationCommandAutocompleteCallbackRequest { return { type: InteractionCallbackTypes.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT, data }; }
export interface ApplicationCommandBooleanOption {
    type: ApplicationCommandOptionType.BOOLEAN;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
}
export function ApplicationCommandBooleanOption(name: ApplicationCommandBooleanOption["name"], description: ApplicationCommandBooleanOption["description"], optional?: Omit<ApplicationCommandBooleanOption, "type" | "name" | "description">): ApplicationCommandBooleanOption { return { type: ApplicationCommandOptionType.BOOLEAN, name, description, ...optional }; }
export interface ApplicationCommandBooleanOptionResponse {
    type: ApplicationCommandOptionType.BOOLEAN;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
}
export function ApplicationCommandBooleanOptionResponse(name: ApplicationCommandBooleanOptionResponse["name"], description: ApplicationCommandBooleanOptionResponse["description"], optional?: Omit<ApplicationCommandBooleanOptionResponse, "type" | "name" | "description">): ApplicationCommandBooleanOptionResponse { return { type: ApplicationCommandOptionType.BOOLEAN, name, description, ...optional }; }
export interface ApplicationCommandChannelOption {
    type: ApplicationCommandOptionType.CHANNEL;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
    channel_types?: ChannelTypes[] | null;
}
export function ApplicationCommandChannelOption(name: ApplicationCommandChannelOption["name"], description: ApplicationCommandChannelOption["description"], optional?: Omit<ApplicationCommandChannelOption, "type" | "name" | "description">): ApplicationCommandChannelOption { return { type: ApplicationCommandOptionType.CHANNEL, name, description, ...optional }; }
export interface ApplicationCommandChannelOptionResponse {
    type: ApplicationCommandOptionType.CHANNEL;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
    channel_types?: ChannelTypes[];
}
export function ApplicationCommandChannelOptionResponse(name: ApplicationCommandChannelOptionResponse["name"], description: ApplicationCommandChannelOptionResponse["description"], optional?: Omit<ApplicationCommandChannelOptionResponse, "type" | "name" | "description">): ApplicationCommandChannelOptionResponse { return { type: ApplicationCommandOptionType.CHANNEL, name, description, ...optional }; }
export interface ApplicationCommandCreateRequest {
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description?: string | null;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    options?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    default_member_permissions?: number | null;
    dm_permission?: boolean | null;
    contexts?: InteractionContextType[] | null;
    integration_types?: ApplicationIntegrationType[] | null;
    handler?: null | ApplicationCommandHandler;
    type?: null | ApplicationCommandType;
}
export function ApplicationCommandCreateRequest(name: ApplicationCommandCreateRequest["name"], optional?: Omit<ApplicationCommandCreateRequest, "name">): ApplicationCommandCreateRequest { return { name, ...optional }; }
export enum ApplicationCommandHandler {
}
export interface ApplicationCommandIntegerOption {
    type: ApplicationCommandOptionType.INTEGER;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionIntegerChoice[] | null;
    min_value?: null | Int53Type;
    max_value?: null | Int53Type;
}
export function ApplicationCommandIntegerOption(name: ApplicationCommandIntegerOption["name"], description: ApplicationCommandIntegerOption["description"], optional?: Omit<ApplicationCommandIntegerOption, "type" | "name" | "description">): ApplicationCommandIntegerOption { return { type: ApplicationCommandOptionType.INTEGER, name, description, ...optional }; }
export interface ApplicationCommandIntegerOptionResponse {
    type: ApplicationCommandOptionType.INTEGER;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
    autocomplete?: boolean;
    choices?: ApplicationCommandOptionIntegerChoiceResponse[];
    min_value?: Int53Type;
    max_value?: Int53Type;
}
export function ApplicationCommandIntegerOptionResponse(name: ApplicationCommandIntegerOptionResponse["name"], description: ApplicationCommandIntegerOptionResponse["description"], optional?: Omit<ApplicationCommandIntegerOptionResponse, "type" | "name" | "description">): ApplicationCommandIntegerOptionResponse { return { type: ApplicationCommandOptionType.INTEGER, name, description, ...optional }; }
export interface ApplicationCommandInteractionMetadataResponse {
    id: SnowflakeType;
    type: InteractionTypes.APPLICATION_COMMAND;
    user?: UserResponse;
    authorizing_integration_owners: {
        [key: string]: SnowflakeType;
    };
    original_response_message_id?: SnowflakeType;
    target_user?: UserResponse;
    target_message_id?: SnowflakeType;
}
export function ApplicationCommandInteractionMetadataResponse(id: ApplicationCommandInteractionMetadataResponse["id"], authorizing_integration_owners: ApplicationCommandInteractionMetadataResponse["authorizing_integration_owners"], optional?: Omit<ApplicationCommandInteractionMetadataResponse, "type" | "id" | "authorizing_integration_owners">): ApplicationCommandInteractionMetadataResponse { return { type: InteractionTypes.APPLICATION_COMMAND, id, authorizing_integration_owners, ...optional }; }
export interface ApplicationCommandMentionableOption {
    type: ApplicationCommandOptionType.MENTIONABLE;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
}
export function ApplicationCommandMentionableOption(name: ApplicationCommandMentionableOption["name"], description: ApplicationCommandMentionableOption["description"], optional?: Omit<ApplicationCommandMentionableOption, "type" | "name" | "description">): ApplicationCommandMentionableOption { return { type: ApplicationCommandOptionType.MENTIONABLE, name, description, ...optional }; }
export interface ApplicationCommandMentionableOptionResponse {
    type: ApplicationCommandOptionType.MENTIONABLE;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
}
export function ApplicationCommandMentionableOptionResponse(name: ApplicationCommandMentionableOptionResponse["name"], description: ApplicationCommandMentionableOptionResponse["description"], optional?: Omit<ApplicationCommandMentionableOptionResponse, "type" | "name" | "description">): ApplicationCommandMentionableOptionResponse { return { type: ApplicationCommandOptionType.MENTIONABLE, name, description, ...optional }; }
export interface ApplicationCommandNumberOption {
    type: ApplicationCommandOptionType.NUMBER;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
    autocomplete?: boolean | null;
    choices?: ApplicationCommandOptionNumberChoice[] | null;
    min_value?: number | null;
    max_value?: number | null;
}
export function ApplicationCommandNumberOption(name: ApplicationCommandNumberOption["name"], description: ApplicationCommandNumberOption["description"], optional?: Omit<ApplicationCommandNumberOption, "type" | "name" | "description">): ApplicationCommandNumberOption { return { type: ApplicationCommandOptionType.NUMBER, name, description, ...optional }; }
export interface ApplicationCommandNumberOptionResponse {
    type: ApplicationCommandOptionType.NUMBER;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
    autocomplete?: boolean;
    choices?: ApplicationCommandOptionNumberChoiceResponse[];
    min_value?: number;
    max_value?: number;
}
export function ApplicationCommandNumberOptionResponse(name: ApplicationCommandNumberOptionResponse["name"], description: ApplicationCommandNumberOptionResponse["description"], optional?: Omit<ApplicationCommandNumberOptionResponse, "type" | "name" | "description">): ApplicationCommandNumberOptionResponse { return { type: ApplicationCommandOptionType.NUMBER, name, description, ...optional }; }
export interface ApplicationCommandOptionIntegerChoice {
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    value: Int53Type;
}
export function ApplicationCommandOptionIntegerChoice(name: ApplicationCommandOptionIntegerChoice["name"], value: ApplicationCommandOptionIntegerChoice["value"], optional?: Omit<ApplicationCommandOptionIntegerChoice, "name" | "value">): ApplicationCommandOptionIntegerChoice { return { name, value, ...optional }; }
export interface ApplicationCommandOptionIntegerChoiceResponse {
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    value: Int53Type;
}
export function ApplicationCommandOptionIntegerChoiceResponse(name: ApplicationCommandOptionIntegerChoiceResponse["name"], value: ApplicationCommandOptionIntegerChoiceResponse["value"], optional?: Omit<ApplicationCommandOptionIntegerChoiceResponse, "name" | "value">): ApplicationCommandOptionIntegerChoiceResponse { return { name, value, ...optional }; }
export interface ApplicationCommandOptionNumberChoice {
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    value: number;
}
export function ApplicationCommandOptionNumberChoice(name: ApplicationCommandOptionNumberChoice["name"], value: ApplicationCommandOptionNumberChoice["value"], optional?: Omit<ApplicationCommandOptionNumberChoice, "name" | "value">): ApplicationCommandOptionNumberChoice { return { name, value, ...optional }; }
export interface ApplicationCommandOptionNumberChoiceResponse {
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    value: number;
}
export function ApplicationCommandOptionNumberChoiceResponse(name: ApplicationCommandOptionNumberChoiceResponse["name"], value: ApplicationCommandOptionNumberChoiceResponse["value"], optional?: Omit<ApplicationCommandOptionNumberChoiceResponse, "name" | "value">): ApplicationCommandOptionNumberChoiceResponse { return { name, value, ...optional }; }
export interface ApplicationCommandOptionStringChoice {
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    value: string;
}
export function ApplicationCommandOptionStringChoice(name: ApplicationCommandOptionStringChoice["name"], value: ApplicationCommandOptionStringChoice["value"], optional?: Omit<ApplicationCommandOptionStringChoice, "name" | "value">): ApplicationCommandOptionStringChoice { return { name, value, ...optional }; }
export interface ApplicationCommandOptionStringChoiceResponse {
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    value: string;
}
export function ApplicationCommandOptionStringChoiceResponse(name: ApplicationCommandOptionStringChoiceResponse["name"], value: ApplicationCommandOptionStringChoiceResponse["value"], optional?: Omit<ApplicationCommandOptionStringChoiceResponse, "name" | "value">): ApplicationCommandOptionStringChoiceResponse { return { name, value, ...optional }; }
export enum ApplicationCommandOptionType {
    /**
     * A sub-action within a command or group
     */
    SUB_COMMAND = 1,
    /**
     * A group of subcommands
     */
    SUB_COMMAND_GROUP = 2,
    /**
     * A string option
     */
    STRING = 3,
    /**
     * An integer option. Any integer between -2^53 and 2^53 is a valid value
     */
    INTEGER = 4,
    /**
     * A boolean option
     */
    BOOLEAN = 5,
    /**
     * A snowflake option that represents a User
     */
    USER = 6,
    /**
     * A snowflake option that represents a Channel. Includes all channel types and categories
     */
    CHANNEL = 7,
    /**
     * A snowflake option that represents a Role
     */
    ROLE = 8,
    /**
     * A snowflake option that represents anything you can mention
     */
    MENTIONABLE = 9,
    /**
     * A number option. Any double between -2^53 and 2^53 is a valid value
     */
    NUMBER = 10,
    /**
     * An attachment option
     */
    ATTACHMENT = 11
}
export interface ApplicationCommandPatchRequestPartial {
    name?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description?: string | null;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    options?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    default_member_permissions?: number | null;
    dm_permission?: boolean | null;
    contexts?: InteractionContextType[] | null;
    integration_types?: ApplicationIntegrationType[] | null;
    handler?: null | ApplicationCommandHandler;
}
export function ApplicationCommandPatchRequestPartial(optional?: ApplicationCommandPatchRequestPartial): ApplicationCommandPatchRequestPartial { return { ...optional }; }
export interface ApplicationCommandPermission {
    id: SnowflakeType;
    type: ApplicationCommandPermissionType;
    permission: boolean;
}
export function ApplicationCommandPermission(id: ApplicationCommandPermission["id"], type: ApplicationCommandPermission["type"], permission: ApplicationCommandPermission["permission"]): ApplicationCommandPermission { return { id, type, permission }; }
export enum ApplicationCommandPermissionType {
    /**
     * This permission is for a role.
     */
    ROLE = 1,
    /**
     * This permission is for a user.
     */
    USER = 2,
    /**
     * This permission is for a channel.
     */
    CHANNEL = 3
}
export interface ApplicationCommandResponse {
    id: SnowflakeType;
    application_id: SnowflakeType;
    version: SnowflakeType;
    default_member_permissions: string | null;
    type: ApplicationCommandType;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    guild_id?: SnowflakeType;
    dm_permission?: boolean;
    contexts?: InteractionContextType[] | null;
    integration_types?: ApplicationIntegrationType[];
    options?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandSubcommandGroupOptionResponse | ApplicationCommandSubcommandOptionResponse | ApplicationCommandUserOptionResponse)[];
    nsfw?: boolean;
}
export function ApplicationCommandResponse(id: ApplicationCommandResponse["id"], application_id: ApplicationCommandResponse["application_id"], version: ApplicationCommandResponse["version"], default_member_permissions: ApplicationCommandResponse["default_member_permissions"], type: ApplicationCommandResponse["type"], name: ApplicationCommandResponse["name"], description: ApplicationCommandResponse["description"], optional?: Omit<ApplicationCommandResponse, "id" | "application_id" | "version" | "default_member_permissions" | "type" | "name" | "description">): ApplicationCommandResponse { return { id, application_id, version, default_member_permissions, type, name, description, ...optional }; }
export interface ApplicationCommandRoleOption {
    type: ApplicationCommandOptionType.ROLE;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
}
export function ApplicationCommandRoleOption(name: ApplicationCommandRoleOption["name"], description: ApplicationCommandRoleOption["description"], optional?: Omit<ApplicationCommandRoleOption, "type" | "name" | "description">): ApplicationCommandRoleOption { return { type: ApplicationCommandOptionType.ROLE, name, description, ...optional }; }
export interface ApplicationCommandRoleOptionResponse {
    type: ApplicationCommandOptionType.ROLE;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
}
export function ApplicationCommandRoleOptionResponse(name: ApplicationCommandRoleOptionResponse["name"], description: ApplicationCommandRoleOptionResponse["description"], optional?: Omit<ApplicationCommandRoleOptionResponse, "type" | "name" | "description">): ApplicationCommandRoleOptionResponse { return { type: ApplicationCommandOptionType.ROLE, name, description, ...optional }; }
export interface ApplicationCommandStringOption {
    type: ApplicationCommandOptionType.STRING;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
    autocomplete?: boolean | null;
    min_length?: number | null;
    max_length?: number | null;
    choices?: ApplicationCommandOptionStringChoice[] | null;
}
export function ApplicationCommandStringOption(name: ApplicationCommandStringOption["name"], description: ApplicationCommandStringOption["description"], optional?: Omit<ApplicationCommandStringOption, "type" | "name" | "description">): ApplicationCommandStringOption { return { type: ApplicationCommandOptionType.STRING, name, description, ...optional }; }
export interface ApplicationCommandStringOptionResponse {
    type: ApplicationCommandOptionType.STRING;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
    autocomplete?: boolean;
    choices?: ApplicationCommandOptionStringChoiceResponse[];
    min_length?: number;
    max_length?: number;
}
export function ApplicationCommandStringOptionResponse(name: ApplicationCommandStringOptionResponse["name"], description: ApplicationCommandStringOptionResponse["description"], optional?: Omit<ApplicationCommandStringOptionResponse, "type" | "name" | "description">): ApplicationCommandStringOptionResponse { return { type: ApplicationCommandOptionType.STRING, name, description, ...optional }; }
export interface ApplicationCommandSubcommandGroupOption {
    type: ApplicationCommandOptionType.SUB_COMMAND_GROUP;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
    options?: ApplicationCommandSubcommandOption[] | null;
}
export function ApplicationCommandSubcommandGroupOption(name: ApplicationCommandSubcommandGroupOption["name"], description: ApplicationCommandSubcommandGroupOption["description"], optional?: Omit<ApplicationCommandSubcommandGroupOption, "type" | "name" | "description">): ApplicationCommandSubcommandGroupOption { return { type: ApplicationCommandOptionType.SUB_COMMAND_GROUP, name, description, ...optional }; }
export interface ApplicationCommandSubcommandGroupOptionResponse {
    type: ApplicationCommandOptionType.SUB_COMMAND_GROUP;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
    options?: ApplicationCommandSubcommandOptionResponse[];
}
export function ApplicationCommandSubcommandGroupOptionResponse(name: ApplicationCommandSubcommandGroupOptionResponse["name"], description: ApplicationCommandSubcommandGroupOptionResponse["description"], optional?: Omit<ApplicationCommandSubcommandGroupOptionResponse, "type" | "name" | "description">): ApplicationCommandSubcommandGroupOptionResponse { return { type: ApplicationCommandOptionType.SUB_COMMAND_GROUP, name, description, ...optional }; }
export interface ApplicationCommandSubcommandOption {
    type: ApplicationCommandOptionType.SUB_COMMAND;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
    options?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandUserOption)[] | null;
}
export function ApplicationCommandSubcommandOption(name: ApplicationCommandSubcommandOption["name"], description: ApplicationCommandSubcommandOption["description"], optional?: Omit<ApplicationCommandSubcommandOption, "type" | "name" | "description">): ApplicationCommandSubcommandOption { return { type: ApplicationCommandOptionType.SUB_COMMAND, name, description, ...optional }; }
export interface ApplicationCommandSubcommandOptionResponse {
    type: ApplicationCommandOptionType.SUB_COMMAND;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
    options?: (ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandUserOptionResponse)[];
}
export function ApplicationCommandSubcommandOptionResponse(name: ApplicationCommandSubcommandOptionResponse["name"], description: ApplicationCommandSubcommandOptionResponse["description"], optional?: Omit<ApplicationCommandSubcommandOptionResponse, "type" | "name" | "description">): ApplicationCommandSubcommandOptionResponse { return { type: ApplicationCommandOptionType.SUB_COMMAND, name, description, ...optional }; }
export enum ApplicationCommandType {
    /**
     * Slash commands; a text-based command that shows up when a user types /
     */
    CHAT = 1,
    /**
     * A UI-based command that shows up when you right click or tap on a user
     */
    USER = 2,
    /**
     * A UI-based command that shows up when you right click or tap on a message
     */
    MESSAGE = 3,
    /**
     * A command that represents the primary way to use an application (e.g. launching an Activity)
     */
    PRIMARY_ENTRY_POINT = 4
}
export interface ApplicationCommandUpdateRequest {
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description?: string | null;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    options?: (ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption)[] | null;
    default_member_permissions?: number | null;
    dm_permission?: boolean | null;
    contexts?: InteractionContextType[] | null;
    integration_types?: ApplicationIntegrationType[] | null;
    handler?: null | ApplicationCommandHandler;
    type?: null | ApplicationCommandType;
    id?: null | SnowflakeType;
}
export function ApplicationCommandUpdateRequest(name: ApplicationCommandUpdateRequest["name"], optional?: Omit<ApplicationCommandUpdateRequest, "name">): ApplicationCommandUpdateRequest { return { name, ...optional }; }
export interface ApplicationCommandUserOption {
    type: ApplicationCommandOptionType.USER;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean | null;
}
export function ApplicationCommandUserOption(name: ApplicationCommandUserOption["name"], description: ApplicationCommandUserOption["description"], optional?: Omit<ApplicationCommandUserOption, "type" | "name" | "description">): ApplicationCommandUserOption { return { type: ApplicationCommandOptionType.USER, name, description, ...optional }; }
export interface ApplicationCommandUserOptionResponse {
    type: ApplicationCommandOptionType.USER;
    name: string;
    name_localized?: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localized?: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    required?: boolean;
}
export function ApplicationCommandUserOptionResponse(name: ApplicationCommandUserOptionResponse["name"], description: ApplicationCommandUserOptionResponse["description"], optional?: Omit<ApplicationCommandUserOptionResponse, "type" | "name" | "description">): ApplicationCommandUserOptionResponse { return { type: ApplicationCommandOptionType.USER, name, description, ...optional }; }
export enum ApplicationEventWebhooksStatus {
    /**
     * Webhook events are disabled by developer
     */
    DISABLED = 1,
    /**
     * Webhook events are enabled by developer
     */
    ENABLED = 2,
    /**
     * Webhook events are disabled by Discord, usually due to inactivity
     */
    DISABLED_BY_DISCORD = 3
}
export enum ApplicationExplicitContentFilterTypes {
    /**
     * inherit guild content filter setting
     */
    INHERIT = 0,
    /**
     * interactions will always be scanned
     */
    ALWAYS = 1
}
export interface ApplicationFormPartial {
    description?: {
        default: string;
        localizations?: {
            [key in AvailableLocalesEnum]?: string;
        } | null;
    } | null;
    icon?: string | null;
    cover_image?: string | null;
    team_id?: null | SnowflakeType;
    flags?: number | null;
    interactions_endpoint_url?: string | null;
    explicit_content_filter?: null | ApplicationExplicitContentFilterTypes;
    max_participants?: number | null;
    type?: null | ApplicationTypes;
    tags?: string[] | null;
    custom_install_url?: string | null;
    install_params?: null | ApplicationOAuth2InstallParams;
    role_connections_verification_url?: string | null;
    integration_types_config?: {
        [key: string]: null | ApplicationIntegrationTypeConfiguration;
    } | null;
    event_webhooks_status?: null | (ApplicationEventWebhooksStatus.DISABLED | ApplicationEventWebhooksStatus.ENABLED);
    event_webhooks_url?: string | null;
    event_webhooks_types?: (ActionTypes.APPLICATION_AUTHORIZED | ActionTypes.APPLICATION_DEAUTHORIZED | ActionTypes.ENTITLEMENT_CREATE | ActionTypes.ENTITLEMENT_DELETE | ActionTypes.ENTITLEMENT_UPDATE | ActionTypes.GAME_DIRECT_MESSAGE_CREATE | ActionTypes.GAME_DIRECT_MESSAGE_DELETE | ActionTypes.GAME_DIRECT_MESSAGE_UPDATE | ActionTypes.LOBBY_MESSAGE_CREATE | ActionTypes.LOBBY_MESSAGE_DELETE | ActionTypes.LOBBY_MESSAGE_UPDATE | ActionTypes.QUEST_USER_ENROLLMENT)[] | null;
}
export function ApplicationFormPartial(optional?: ApplicationFormPartial): ApplicationFormPartial { return { ...optional }; }
export enum ApplicationIdentityProviderAuthType {
    OIDC = "OIDC",
    EPIC_ONLINE_SERVICES_ACCESS_TOKEN = "EPIC_ONLINE_SERVICES_ACCESS_TOKEN",
    EPIC_ONLINE_SERVICES_ID_TOKEN = "EPIC_ONLINE_SERVICES_ID_TOKEN",
    STEAM_SESSION_TICKET = "STEAM_SESSION_TICKET",
    UNITY_SERVICES_ID_TOKEN = "UNITY_SERVICES_ID_TOKEN",
    DISCORD_BOT_ISSUED_ACCESS_TOKEN = "DISCORD_BOT_ISSUED_ACCESS_TOKEN",
    APPLE_ID_TOKEN = "APPLE_ID_TOKEN",
    PLAYSTATION_NETWORK_ID_TOKEN = "PLAYSTATION_NETWORK_ID_TOKEN"
}
export interface ApplicationIncomingWebhookResponse {
    application_id: null | SnowflakeType;
    avatar: string | null;
    channel_id: null | SnowflakeType;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    type: WebhookTypes.APPLICATION_INCOMING;
    user?: UserResponse;
}
export function ApplicationIncomingWebhookResponse(application_id: ApplicationIncomingWebhookResponse["application_id"], avatar: ApplicationIncomingWebhookResponse["avatar"], channel_id: ApplicationIncomingWebhookResponse["channel_id"], id: ApplicationIncomingWebhookResponse["id"], name: ApplicationIncomingWebhookResponse["name"], optional?: Omit<ApplicationIncomingWebhookResponse, "type" | "application_id" | "avatar" | "channel_id" | "id" | "name">): ApplicationIncomingWebhookResponse { return { type: WebhookTypes.APPLICATION_INCOMING, application_id, avatar, channel_id, id, name, ...optional }; }
export enum ApplicationIntegrationType {
    /**
     * For Guild install.
     */
    GUILD_INSTALL = 0,
    /**
     * For User install.
     */
    USER_INSTALL = 1
}
export interface ApplicationIntegrationTypeConfiguration {
    oauth2_install_params?: null | ApplicationOAuth2InstallParams;
}
export function ApplicationIntegrationTypeConfiguration(optional?: ApplicationIntegrationTypeConfiguration): ApplicationIntegrationTypeConfiguration { return { ...optional }; }
export interface ApplicationIntegrationTypeConfigurationResponse {
    oauth2_install_params?: ApplicationOAuth2InstallParamsResponse;
}
export function ApplicationIntegrationTypeConfigurationResponse(optional?: ApplicationIntegrationTypeConfigurationResponse): ApplicationIntegrationTypeConfigurationResponse { return { ...optional }; }
export interface ApplicationOAuth2InstallParams {
    scopes?: (OAuth2Scopes.APPLICATIONS_COMMANDS | OAuth2Scopes.BOT)[] | null;
    permissions?: number | null;
}
export function ApplicationOAuth2InstallParams(optional?: ApplicationOAuth2InstallParams): ApplicationOAuth2InstallParams { return { ...optional }; }
export interface ApplicationOAuth2InstallParamsResponse {
    scopes: (OAuth2Scopes.APPLICATIONS_COMMANDS | OAuth2Scopes.BOT)[];
    permissions: string;
}
export function ApplicationOAuth2InstallParamsResponse(scopes: ApplicationOAuth2InstallParamsResponse["scopes"], permissions: ApplicationOAuth2InstallParamsResponse["permissions"]): ApplicationOAuth2InstallParamsResponse { return { scopes, permissions }; }
export interface ApplicationResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string;
    type: null | ApplicationTypes;
    cover_image?: string;
    primary_sku_id?: SnowflakeType;
    bot?: UserResponse;
    slug?: string;
    guild_id?: SnowflakeType;
    rpc_origins?: string[];
    bot_public?: boolean;
    bot_require_code_grant?: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    custom_install_url?: string;
    install_params?: ApplicationOAuth2InstallParamsResponse;
    integration_types_config?: {
        [key: string]: ApplicationIntegrationTypeConfigurationResponse;
    };
    verify_key: string;
    flags: number;
    flags_new: string;
    max_participants?: number | null;
    tags?: string[];
}
export function ApplicationResponse(id: ApplicationResponse["id"], name: ApplicationResponse["name"], icon: ApplicationResponse["icon"], description: ApplicationResponse["description"], type: ApplicationResponse["type"], verify_key: ApplicationResponse["verify_key"], flags: ApplicationResponse["flags"], flags_new: ApplicationResponse["flags_new"], optional?: Omit<ApplicationResponse, "id" | "name" | "icon" | "description" | "type" | "verify_key" | "flags" | "flags_new">): ApplicationResponse { return { id, name, icon, description, type, verify_key, flags, flags_new, ...optional }; }
export interface ApplicationRoleConnectionsMetadataItemRequest {
    type: MetadataItemTypes;
    key: string;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string | null;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string | null;
    } | null;
}
export function ApplicationRoleConnectionsMetadataItemRequest(type: ApplicationRoleConnectionsMetadataItemRequest["type"], key: ApplicationRoleConnectionsMetadataItemRequest["key"], name: ApplicationRoleConnectionsMetadataItemRequest["name"], description: ApplicationRoleConnectionsMetadataItemRequest["description"], optional?: Omit<ApplicationRoleConnectionsMetadataItemRequest, "type" | "key" | "name" | "description">): ApplicationRoleConnectionsMetadataItemRequest { return { type, key, name, description, ...optional }; }
export interface ApplicationRoleConnectionsMetadataItemResponse {
    type: MetadataItemTypes;
    key: string;
    name: string;
    name_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
    description: string;
    description_localizations?: {
        [key in AvailableLocalesEnum]?: string;
    } | null;
}
export function ApplicationRoleConnectionsMetadataItemResponse(type: ApplicationRoleConnectionsMetadataItemResponse["type"], key: ApplicationRoleConnectionsMetadataItemResponse["key"], name: ApplicationRoleConnectionsMetadataItemResponse["name"], description: ApplicationRoleConnectionsMetadataItemResponse["description"], optional?: Omit<ApplicationRoleConnectionsMetadataItemResponse, "type" | "key" | "name" | "description">): ApplicationRoleConnectionsMetadataItemResponse { return { type, key, name, description, ...optional }; }
export enum ApplicationTypes {
    GUILD_ROLE_SUBSCRIPTIONS = 4
}
export interface ApplicationUserRoleConnectionResponse {
    platform_name?: string;
    platform_username?: string | null;
    metadata?: {
        [key: string]: string;
    };
}
export function ApplicationUserRoleConnectionResponse(optional?: ApplicationUserRoleConnectionResponse): ApplicationUserRoleConnectionResponse { return { ...optional }; }
export interface AttachmentResponse {
    id: SnowflakeType;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    width?: number;
    height?: number;
    duration_secs?: number;
    waveform?: string;
    description?: string;
    content_type?: string;
    ephemeral?: boolean;
    flags?: number;
    placeholder?: string;
    placeholder_version?: number;
    title?: string | null;
    application?: ApplicationResponse;
    clip_created_at?: string;
    clip_participants?: UserResponse[];
}
export function AttachmentResponse(id: AttachmentResponse["id"], filename: AttachmentResponse["filename"], size: AttachmentResponse["size"], url: AttachmentResponse["url"], proxy_url: AttachmentResponse["proxy_url"], optional?: Omit<AttachmentResponse, "id" | "filename" | "size" | "url" | "proxy_url">): AttachmentResponse { return { id, filename, size, url, proxy_url, ...optional }; }
export enum AuditLogActionTypes {
    GUILD_UPDATE = 1,
    CHANNEL_CREATE = 10,
    CHANNEL_UPDATE = 11,
    CHANNEL_DELETE = 12,
    CHANNEL_OVERWRITE_CREATE = 13,
    CHANNEL_OVERWRITE_UPDATE = 14,
    CHANNEL_OVERWRITE_DELETE = 15,
    MEMBER_KICK = 20,
    MEMBER_PRUNE = 21,
    MEMBER_BAN_ADD = 22,
    MEMBER_BAN_REMOVE = 23,
    MEMBER_UPDATE = 24,
    MEMBER_ROLE_UPDATE = 25,
    MEMBER_MOVE = 26,
    MEMBER_DISCONNECT = 27,
    BOT_ADD = 28,
    ROLE_CREATE = 30,
    ROLE_UPDATE = 31,
    ROLE_DELETE = 32,
    INVITE_CREATE = 40,
    INVITE_UPDATE = 41,
    INVITE_DELETE = 42,
    WEBHOOK_CREATE = 50,
    WEBHOOK_UPDATE = 51,
    WEBHOOK_DELETE = 52,
    EMOJI_CREATE = 60,
    EMOJI_UPDATE = 61,
    EMOJI_DELETE = 62,
    MESSAGE_DELETE = 72,
    MESSAGE_BULK_DELETE = 73,
    MESSAGE_PIN = 74,
    MESSAGE_UNPIN = 75,
    INTEGRATION_CREATE = 80,
    INTEGRATION_UPDATE = 81,
    INTEGRATION_DELETE = 82,
    STAGE_INSTANCE_CREATE = 83,
    STAGE_INSTANCE_UPDATE = 84,
    STAGE_INSTANCE_DELETE = 85,
    STICKER_CREATE = 90,
    STICKER_UPDATE = 91,
    STICKER_DELETE = 92,
    GUILD_SCHEDULED_EVENT_CREATE = 100,
    GUILD_SCHEDULED_EVENT_UPDATE = 101,
    GUILD_SCHEDULED_EVENT_DELETE = 102,
    THREAD_CREATE = 110,
    THREAD_UPDATE = 111,
    THREAD_DELETE = 112,
    APPLICATION_COMMAND_PERMISSION_UPDATE = 121,
    SOUNDBOARD_SOUND_CREATE = 130,
    SOUNDBOARD_SOUND_UPDATE = 131,
    SOUNDBOARD_SOUND_DELETE = 132,
    AUTO_MODERATION_RULE_CREATE = 140,
    AUTO_MODERATION_RULE_UPDATE = 141,
    AUTO_MODERATION_RULE_DELETE = 142,
    AUTO_MODERATION_BLOCK_MESSAGE = 143,
    AUTO_MODERATION_FLAG_TO_CHANNEL = 144,
    AUTO_MODERATION_USER_COMM_DISABLED = 145,
    AUTO_MODERATION_QUARANTINE_USER = 146,
    CREATOR_MONETIZATION_REQUEST_CREATED = 150,
    CREATOR_MONETIZATION_TERMS_ACCEPTED = 151,
    ONBOARDING_PROMPT_CREATE = 163,
    ONBOARDING_PROMPT_UPDATE = 164,
    ONBOARDING_PROMPT_DELETE = 165,
    ONBOARDING_CREATE = 166,
    ONBOARDING_UPDATE = 167,
    GUILD_HOME_FEATURE_ITEM = 171,
    GUILD_HOME_REMOVE_ITEM = 172,
    HARMFUL_LINKS_BLOCKED_MESSAGE = 180,
    HOME_SETTINGS_CREATE = 190,
    HOME_SETTINGS_UPDATE = 191,
    VOICE_CHANNEL_STATUS_CREATE = 192,
    VOICE_CHANNEL_STATUS_DELETE = 193,
    GUILD_PROFILE_UPDATE = 211
}
export interface AuditLogEntryResponse {
    id: SnowflakeType;
    action_type: AuditLogActionTypes;
    user_id: null | SnowflakeType;
    target_id: null | SnowflakeType;
    changes?: AuditLogObjectChangeResponse[];
    options?: {
        [key: string]: string;
    };
    reason?: string;
}
export function AuditLogEntryResponse(id: AuditLogEntryResponse["id"], action_type: AuditLogEntryResponse["action_type"], user_id: AuditLogEntryResponse["user_id"], target_id: AuditLogEntryResponse["target_id"], optional?: Omit<AuditLogEntryResponse, "id" | "action_type" | "user_id" | "target_id">): AuditLogEntryResponse { return { id, action_type, user_id, target_id, ...optional }; }
export interface AuditLogObjectChangeResponse {
    key: string | null;
    new_value?: unknown;
    old_value?: unknown;
}
export function AuditLogObjectChangeResponse(key: AuditLogObjectChangeResponse["key"], optional?: Omit<AuditLogObjectChangeResponse, "key">): AuditLogObjectChangeResponse { return { key, ...optional }; }
export enum AuthorType {
    USER = "user",
    BOT = "bot",
    WEBHOOK = "webhook",
    NO_USER = "-user",
    NO_BOT = "-bot",
    NO_WEBHOOK = "-webhook"
}
export enum AutomodActionType {
    /**
     * Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked
     */
    BLOCK_MESSAGE = 1,
    /**
     * Send a system message to a channel in order to log the user message that triggered the rule
     */
    FLAG_TO_CHANNEL = 2,
    /**
     * Temporarily disable a user's ability to communicate in the server (timeout)
     */
    USER_COMMUNICATION_DISABLED = 3,
    /**
     * Prevent a user from interacting in the server
     */
    QUARANTINE_USER = 4
}
export enum AutomodEventType {
    /**
     * A user submitted a message to a channel
     */
    MESSAGE_SEND = 1,
    /**
     * A user is attempting to join the server or a member's properties were updated.
     */
    GUILD_MEMBER_JOIN_OR_UPDATE = 2
}
export enum AutomodKeywordPresetType {
    /**
     * Words and phrases that may be considered profanity
     */
    PROFANITY = 1,
    /**
     * Words and phrases that may be considered as sexual content
     */
    SEXUAL_CONTENT = 2,
    /**
     * Words and phrases that may be considered slurs and hate speech
     */
    SLURS = 3
}
export enum AutomodTriggerType {
    /**
     * Check if content contains words from a list of keywords or matches regex
     */
    KEYWORD = 1,
    /**
     * DEPRECATED
     */
    SPAM_LINK = 2,
    /**
     * Check if content represents generic spam
     */
    ML_SPAM = 3,
    /**
     * Check if content contains words from internal pre-defined wordsets
     */
    DEFAULT_KEYWORD_LIST = 4,
    /**
     * Check if content contains more unique mentions than allowed
     */
    MENTION_SPAM = 5
}
export enum AvailableLocalesEnum {
    /**
     * The ar locale
     */
    ar = "ar",
    /**
     * The bg locale
     */
    bg = "bg",
    /**
     * The cs locale
     */
    cs = "cs",
    /**
     * The da locale
     */
    da = "da",
    /**
     * The de locale
     */
    de = "de",
    /**
     * The el locale
     */
    el = "el",
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
    fi = "fi",
    /**
     * The fr locale
     */
    fr = "fr",
    /**
     * The he locale
     */
    he = "he",
    /**
     * The hi locale
     */
    hi = "hi",
    /**
     * The hr locale
     */
    hr = "hr",
    /**
     * The hu locale
     */
    hu = "hu",
    /**
     * The id locale
     */
    id = "id",
    /**
     * The it locale
     */
    it = "it",
    /**
     * The ja locale
     */
    ja = "ja",
    /**
     * The ko locale
     */
    ko = "ko",
    /**
     * The lt locale
     */
    lt = "lt",
    /**
     * The nl locale
     */
    nl = "nl",
    /**
     * The no locale
     */
    no = "no",
    /**
     * The pl locale
     */
    pl = "pl",
    /**
     * The pt-BR locale
     */
    "pt-BR" = "pt-BR",
    /**
     * The ro locale
     */
    ro = "ro",
    /**
     * The ru locale
     */
    ru = "ru",
    /**
     * The sv-SE locale
     */
    "sv-SE" = "sv-SE",
    /**
     * The th locale
     */
    th = "th",
    /**
     * The tr locale
     */
    tr = "tr",
    /**
     * The uk locale
     */
    uk = "uk",
    /**
     * The vi locale
     */
    vi = "vi",
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
    delete_message_seconds?: number | null;
    delete_message_days?: number | null;
}
export function BanUserFromGuildRequest(optional?: BanUserFromGuildRequest): BanUserFromGuildRequest { return { ...optional }; }
export interface BaseCreateMessageCreateRequest {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    sticker_ids?: SnowflakeType[] | null;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    flags?: number | null;
    attachments?: MessageAttachmentRequest[] | null;
    poll?: null | PollCreateRequest;
    shared_client_theme?: null | CustomClientThemeShareRequest;
}
export function BaseCreateMessageCreateRequest(optional?: BaseCreateMessageCreateRequest): BaseCreateMessageCreateRequest { return { ...optional }; }
export interface BasicApplicationResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string;
    type: null | ApplicationTypes;
    cover_image?: string;
    primary_sku_id?: SnowflakeType;
    bot?: UserResponse;
}
export function BasicApplicationResponse(id: BasicApplicationResponse["id"], name: BasicApplicationResponse["name"], icon: BasicApplicationResponse["icon"], description: BasicApplicationResponse["description"], type: BasicApplicationResponse["type"], optional?: Omit<BasicApplicationResponse, "id" | "name" | "icon" | "description" | "type">): BasicApplicationResponse { return { id, name, icon, description, type, ...optional }; }
export interface BasicGuildMemberResponse {
    avatar: string | null;
    avatar_decoration_data?: null | UserAvatarDecorationResponse;
    banner: string | null;
    communication_disabled_until: string | null;
    flags: number;
    joined_at: string;
    nick: string | null;
    pending: boolean;
    premium_since: string | null;
    roles: SnowflakeType[];
    collectibles?: null | UserCollectiblesResponse;
}
export function BasicGuildMemberResponse(avatar: BasicGuildMemberResponse["avatar"], banner: BasicGuildMemberResponse["banner"], communication_disabled_until: BasicGuildMemberResponse["communication_disabled_until"], flags: BasicGuildMemberResponse["flags"], joined_at: BasicGuildMemberResponse["joined_at"], nick: BasicGuildMemberResponse["nick"], pending: BasicGuildMemberResponse["pending"], premium_since: BasicGuildMemberResponse["premium_since"], roles: BasicGuildMemberResponse["roles"], optional?: Omit<BasicGuildMemberResponse, "avatar" | "banner" | "communication_disabled_until" | "flags" | "joined_at" | "nick" | "pending" | "premium_since" | "roles">): BasicGuildMemberResponse { return { avatar, banner, communication_disabled_until, flags, joined_at, nick, pending, premium_since, roles, ...optional }; }
export interface BasicMessageResponse {
    type: MessageType;
    content: string;
    mentions: UserResponse[];
    mention_roles: SnowflakeType[];
    attachments: MessageAttachmentResponse[];
    embeds: MessageEmbedResponse[];
    timestamp: string;
    edited_timestamp: string | null;
    flags: number;
    components: (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    stickers?: (GuildStickerResponse | StandardStickerResponse)[];
    sticker_items?: MessageStickerItemResponse[];
    id: SnowflakeType;
    channel_id: SnowflakeType;
    author: UserResponse;
    pinned: boolean;
    mention_everyone: boolean;
    tts: boolean;
    call?: MessageCallResponse;
    activity?: MessageActivityResponse;
    application?: BasicApplicationResponse;
    application_id?: SnowflakeType;
    interaction?: MessageInteractionResponse;
    nonce?: number | string;
    webhook_id?: SnowflakeType;
    message_reference?: MessageReferenceResponse;
    thread?: ThreadResponse;
    mention_channels?: MessageMentionChannelResponse[];
    role_subscription_data?: MessageRoleSubscriptionDataResponse;
    purchase_notification?: PurchaseNotificationResponse;
    position?: number;
    resolved?: ResolvedObjectsResponse;
    poll?: PollResponse;
    shared_client_theme?: CustomClientThemeResponse;
    interaction_metadata?: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse;
    message_snapshots?: MessageSnapshotResponse[];
}
export function BasicMessageResponse(type: BasicMessageResponse["type"], content: BasicMessageResponse["content"], mentions: BasicMessageResponse["mentions"], mention_roles: BasicMessageResponse["mention_roles"], attachments: BasicMessageResponse["attachments"], embeds: BasicMessageResponse["embeds"], timestamp: BasicMessageResponse["timestamp"], edited_timestamp: BasicMessageResponse["edited_timestamp"], flags: BasicMessageResponse["flags"], components: BasicMessageResponse["components"], id: BasicMessageResponse["id"], channel_id: BasicMessageResponse["channel_id"], author: BasicMessageResponse["author"], pinned: BasicMessageResponse["pinned"], mention_everyone: BasicMessageResponse["mention_everyone"], tts: BasicMessageResponse["tts"], optional?: Omit<BasicMessageResponse, "type" | "content" | "mentions" | "mention_roles" | "attachments" | "embeds" | "timestamp" | "edited_timestamp" | "flags" | "components" | "id" | "channel_id" | "author" | "pinned" | "mention_everyone" | "tts">): BasicMessageResponse { return { type, content, mentions, mention_roles, attachments, embeds, timestamp, edited_timestamp, flags, components, id, channel_id, author, pinned, mention_everyone, tts, ...optional }; }
export interface BlockMessageAction {
    type: AutomodActionType.BLOCK_MESSAGE;
    metadata?: null | BlockMessageActionMetadata;
}
export function BlockMessageAction(optional?: Omit<BlockMessageAction, "type">): BlockMessageAction { return { type: AutomodActionType.BLOCK_MESSAGE, ...optional }; }
export interface BlockMessageActionMetadata {
    custom_message?: string | null;
}
export function BlockMessageActionMetadata(optional?: BlockMessageActionMetadata): BlockMessageActionMetadata { return { ...optional }; }
export interface BlockMessageActionMetadataResponse {
    custom_message?: string;
}
export function BlockMessageActionMetadataResponse(optional?: BlockMessageActionMetadataResponse): BlockMessageActionMetadataResponse { return { ...optional }; }
export interface BlockMessageActionResponse {
    type: AutomodActionType.BLOCK_MESSAGE;
    metadata: BlockMessageActionMetadataResponse;
}
export function BlockMessageActionResponse(metadata: BlockMessageActionResponse["metadata"]): BlockMessageActionResponse { return { type: AutomodActionType.BLOCK_MESSAGE, metadata }; }
export interface BotAccountPatchRequest {
    username: string;
    avatar?: string | null;
    banner?: string | null;
}
export function BotAccountPatchRequest(username: BotAccountPatchRequest["username"], optional?: Omit<BotAccountPatchRequest, "username">): BotAccountPatchRequest { return { username, ...optional }; }
export interface BotAddGuildMemberRequest {
    nick?: string | null;
    roles?: SnowflakeType[] | null;
    mute?: boolean | null;
    deaf?: boolean | null;
    access_token: string;
    flags?: number | null;
}
export function BotAddGuildMemberRequest(access_token: BotAddGuildMemberRequest["access_token"], optional?: Omit<BotAddGuildMemberRequest, "access_token">): BotAddGuildMemberRequest { return { access_token, ...optional }; }
export interface BulkBanUsersRequest {
    user_ids: SnowflakeType[];
    delete_message_seconds?: number | null;
}
export function BulkBanUsersRequest(user_ids: BulkBanUsersRequest["user_ids"], optional?: Omit<BulkBanUsersRequest, "user_ids">): BulkBanUsersRequest { return { user_ids, ...optional }; }
export interface BulkBanUsersResponse {
    banned_users: SnowflakeType[];
    failed_users: SnowflakeType[];
}
export function BulkBanUsersResponse(banned_users: BulkBanUsersResponse["banned_users"], failed_users: BulkBanUsersResponse["failed_users"]): BulkBanUsersResponse { return { banned_users, failed_users }; }
export interface BulkLobbyMemberRequest {
    id: SnowflakeType;
    metadata?: {
        [key: string]: string;
    } | null;
    flags?: null | 1;
    remove_member?: boolean | null;
}
export function BulkLobbyMemberRequest(id: BulkLobbyMemberRequest["id"], optional?: Omit<BulkLobbyMemberRequest, "id">): BulkLobbyMemberRequest { return { id, ...optional }; }
export interface ButtonComponentForMessageRequest {
    type: MessageComponentTypes.BUTTON;
    id?: number | null;
    custom_id?: string | null;
    style: ButtonStyleTypes;
    label?: string | null;
    disabled?: boolean | null;
    url?: string | null;
    sku_id?: null | SnowflakeType;
    emoji?: null | ComponentEmojiForRequest;
}
export function ButtonComponentForMessageRequest(style: ButtonComponentForMessageRequest["style"], optional?: Omit<ButtonComponentForMessageRequest, "type" | "style">): ButtonComponentForMessageRequest { return { type: MessageComponentTypes.BUTTON, style, ...optional }; }
export interface ButtonComponentResponse {
    type: MessageComponentTypes.BUTTON;
    id: number;
    custom_id?: string;
    style: ButtonStyleTypes;
    label?: string;
    disabled?: boolean;
    emoji?: ComponentEmojiResponse;
    url?: string | null;
    sku_id?: SnowflakeType;
}
export function ButtonComponentResponse(id: ButtonComponentResponse["id"], style: ButtonComponentResponse["style"], optional?: Omit<ButtonComponentResponse, "type" | "id" | "style">): ButtonComponentResponse { return { type: MessageComponentTypes.BUTTON, id, style, ...optional }; }
export enum ButtonStyleTypes {
    PRIMARY = 1,
    SECONDARY = 2,
    SUCCESS = 3,
    DANGER = 4,
    LINK = 5,
    PREMIUM = 6
}
export interface ChannelFollowerResponse {
    channel_id: SnowflakeType;
    webhook_id: SnowflakeType;
}
export function ChannelFollowerResponse(channel_id: ChannelFollowerResponse["channel_id"], webhook_id: ChannelFollowerResponse["webhook_id"]): ChannelFollowerResponse { return { channel_id, webhook_id }; }
export interface ChannelFollowerWebhookResponse {
    application_id: null | SnowflakeType;
    avatar: string | null;
    channel_id: null | SnowflakeType;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    type: WebhookTypes.CHANNEL_FOLLOWER;
    user?: UserResponse;
    source_guild?: WebhookSourceGuildResponse;
    source_channel?: WebhookSourceChannelResponse;
}
export function ChannelFollowerWebhookResponse(application_id: ChannelFollowerWebhookResponse["application_id"], avatar: ChannelFollowerWebhookResponse["avatar"], channel_id: ChannelFollowerWebhookResponse["channel_id"], id: ChannelFollowerWebhookResponse["id"], name: ChannelFollowerWebhookResponse["name"], optional?: Omit<ChannelFollowerWebhookResponse, "type" | "application_id" | "avatar" | "channel_id" | "id" | "name">): ChannelFollowerWebhookResponse { return { type: WebhookTypes.CHANNEL_FOLLOWER, application_id, avatar, channel_id, id, name, ...optional }; }
export interface ChannelPermissionOverwriteRequest {
    id: SnowflakeType;
    type?: null | ChannelPermissionOverwrites;
    allow?: number | null;
    deny?: number | null;
}
export function ChannelPermissionOverwriteRequest(id: ChannelPermissionOverwriteRequest["id"], optional?: Omit<ChannelPermissionOverwriteRequest, "id">): ChannelPermissionOverwriteRequest { return { id, ...optional }; }
export interface ChannelPermissionOverwriteResponse {
    id: SnowflakeType;
    type: ChannelPermissionOverwrites;
    allow: string;
    deny: string;
}
export function ChannelPermissionOverwriteResponse(id: ChannelPermissionOverwriteResponse["id"], type: ChannelPermissionOverwriteResponse["type"], allow: ChannelPermissionOverwriteResponse["allow"], deny: ChannelPermissionOverwriteResponse["deny"]): ChannelPermissionOverwriteResponse { return { id, type, allow, deny }; }
export enum ChannelPermissionOverwrites {
    ROLE = 0,
    MEMBER = 1
}
export interface ChannelSelectComponentForMessageRequest {
    type: MessageComponentTypes.CHANNEL_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: ChannelSelectDefaultValue[] | null;
    channel_types?: ChannelTypes[] | null;
}
export function ChannelSelectComponentForMessageRequest(custom_id: ChannelSelectComponentForMessageRequest["custom_id"], optional?: Omit<ChannelSelectComponentForMessageRequest, "type" | "custom_id">): ChannelSelectComponentForMessageRequest { return { type: MessageComponentTypes.CHANNEL_SELECT, custom_id, ...optional }; }
export interface ChannelSelectComponentForModalRequest {
    type: MessageComponentTypes.CHANNEL_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: ChannelSelectDefaultValue[] | null;
    channel_types?: ChannelTypes[] | null;
}
export function ChannelSelectComponentForModalRequest(custom_id: ChannelSelectComponentForModalRequest["custom_id"], optional?: Omit<ChannelSelectComponentForModalRequest, "type" | "custom_id">): ChannelSelectComponentForModalRequest { return { type: MessageComponentTypes.CHANNEL_SELECT, custom_id, ...optional }; }
export interface ChannelSelectComponentResponse {
    type: MessageComponentTypes.CHANNEL_SELECT;
    id: number;
    custom_id: string;
    placeholder?: string;
    min_values: number;
    max_values: number;
    disabled?: boolean;
    channel_types?: ChannelTypes[];
    default_values?: ChannelSelectDefaultValueResponse[];
}
export function ChannelSelectComponentResponse(id: ChannelSelectComponentResponse["id"], custom_id: ChannelSelectComponentResponse["custom_id"], min_values: ChannelSelectComponentResponse["min_values"], max_values: ChannelSelectComponentResponse["max_values"], optional?: Omit<ChannelSelectComponentResponse, "type" | "id" | "custom_id" | "min_values" | "max_values">): ChannelSelectComponentResponse { return { type: MessageComponentTypes.CHANNEL_SELECT, id, custom_id, min_values, max_values, ...optional }; }
export interface ChannelSelectDefaultValue {
    type: SnowflakeSelectDefaultValueTypes.CHANNEL;
    id: SnowflakeType;
}
export function ChannelSelectDefaultValue(id: ChannelSelectDefaultValue["id"]): ChannelSelectDefaultValue { return { type: SnowflakeSelectDefaultValueTypes.CHANNEL, id }; }
export interface ChannelSelectDefaultValueResponse {
    type: SnowflakeSelectDefaultValueTypes.CHANNEL;
    id: SnowflakeType;
}
export function ChannelSelectDefaultValueResponse(id: ChannelSelectDefaultValueResponse["id"]): ChannelSelectDefaultValueResponse { return { type: SnowflakeSelectDefaultValueTypes.CHANNEL, id }; }
export enum ChannelTypes {
    /**
     * A direct message between users
     */
    DM = 1,
    /**
     * A direct message between multiple users
     */
    GROUP_DM = 3,
    /**
     * A text channel within a server
     */
    GUILD_TEXT = 0,
    /**
     * A voice channel within a server
     */
    GUILD_VOICE = 2,
    /**
     * An organizational category that contains up to 50 channels
     */
    GUILD_CATEGORY = 4,
    /**
     * A channel that users can follow and crosspost into their own server (formerly news channels)
     */
    GUILD_ANNOUNCEMENT = 5,
    /**
     * A temporary sub-channel within a GUILD_ANNOUNCEMENT channel
     */
    ANNOUNCEMENT_THREAD = 10,
    /**
     * A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set
     */
    PUBLIC_THREAD = 11,
    /**
     * A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
     */
    PRIVATE_THREAD = 12,
    /**
     * A voice channel for hosting events with an audience
     */
    GUILD_STAGE_VOICE = 13,
    /**
     * The channel in a hub containing the listed servers
     */
    GUILD_DIRECTORY = 14,
    /**
     * Channel that can only contain threads
     */
    GUILD_FORUM = 15
}
export interface CheckboxComponentForModalRequest {
    type: MessageComponentTypes.CHECKBOX;
    id?: number | null;
    custom_id: string;
    default?: boolean | null;
}
export function CheckboxComponentForModalRequest(custom_id: CheckboxComponentForModalRequest["custom_id"], optional?: Omit<CheckboxComponentForModalRequest, "type" | "custom_id">): CheckboxComponentForModalRequest { return { type: MessageComponentTypes.CHECKBOX, custom_id, ...optional }; }
export interface CheckboxGroupComponentForModalRequest {
    type: MessageComponentTypes.CHECKBOX_GROUP;
    id?: number | null;
    custom_id: string;
    min_values?: number | null;
    max_values?: number | null;
    required?: boolean | null;
    options: CheckboxGroupOptionForRequest[];
}
export function CheckboxGroupComponentForModalRequest(custom_id: CheckboxGroupComponentForModalRequest["custom_id"], options: CheckboxGroupComponentForModalRequest["options"], optional?: Omit<CheckboxGroupComponentForModalRequest, "type" | "custom_id" | "options">): CheckboxGroupComponentForModalRequest { return { type: MessageComponentTypes.CHECKBOX_GROUP, custom_id, options, ...optional }; }
export interface CheckboxGroupOptionForRequest {
    label: string;
    value: string;
    description?: string | null;
    default?: boolean | null;
}
export function CheckboxGroupOptionForRequest(label: CheckboxGroupOptionForRequest["label"], value: CheckboxGroupOptionForRequest["value"], optional?: Omit<CheckboxGroupOptionForRequest, "label" | "value">): CheckboxGroupOptionForRequest { return { label, value, ...optional }; }
export interface CommandPermissionResponse {
    id: SnowflakeType;
    type: ApplicationCommandPermissionType;
    permission: boolean;
}
export function CommandPermissionResponse(id: CommandPermissionResponse["id"], type: CommandPermissionResponse["type"], permission: CommandPermissionResponse["permission"]): CommandPermissionResponse { return { id, type, permission }; }
export interface CommandPermissionsResponse {
    id: SnowflakeType;
    application_id: SnowflakeType;
    guild_id: SnowflakeType;
    permissions: CommandPermissionResponse[];
}
export function CommandPermissionsResponse(id: CommandPermissionsResponse["id"], application_id: CommandPermissionsResponse["application_id"], guild_id: CommandPermissionsResponse["guild_id"], permissions: CommandPermissionsResponse["permissions"]): CommandPermissionsResponse { return { id, application_id, guild_id, permissions }; }
export interface ComponentEmojiForRequest {
    id?: null | SnowflakeType;
    name: string;
}
export function ComponentEmojiForRequest(name: ComponentEmojiForRequest["name"], optional?: Omit<ComponentEmojiForRequest, "name">): ComponentEmojiForRequest { return { name, ...optional }; }
export interface ComponentEmojiResponse {
    id?: SnowflakeType;
    name: string;
    animated?: boolean;
}
export function ComponentEmojiResponse(name: ComponentEmojiResponse["name"], optional?: Omit<ComponentEmojiResponse, "name">): ComponentEmojiResponse { return { name, ...optional }; }
export interface ConnectedAccountGuildResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
}
export function ConnectedAccountGuildResponse(id: ConnectedAccountGuildResponse["id"], name: ConnectedAccountGuildResponse["name"], icon: ConnectedAccountGuildResponse["icon"]): ConnectedAccountGuildResponse { return { id, name, icon }; }
export interface ConnectedAccountIntegrationResponse {
    id: string;
    type: IntegrationTypes;
    account: AccountResponse;
    guild: ConnectedAccountGuildResponse;
}
export function ConnectedAccountIntegrationResponse(id: ConnectedAccountIntegrationResponse["id"], type: ConnectedAccountIntegrationResponse["type"], account: ConnectedAccountIntegrationResponse["account"], guild: ConnectedAccountIntegrationResponse["guild"]): ConnectedAccountIntegrationResponse { return { id, type, account, guild }; }
export enum ConnectedAccountProviders {
    BATTLENET = "battlenet",
    BLUESKY = "bluesky",
    BUNGIE = "bungie",
    EBAY = "ebay",
    EPIC_GAMES = "epicgames",
    FACEBOOK = "facebook",
    GITHUB = "github",
    INSTAGRAM = "instagram",
    MASTODON = "mastodon",
    LEAGUE_OF_LEGENDS = "leagueoflegends",
    PAYPAL = "paypal",
    PLAYSTATION = "playstation",
    REDDIT = "reddit",
    RIOT_GAMES = "riotgames",
    ROBLOX = "roblox",
    SKYPE = "skype",
    SPOTIFY = "spotify",
    STEAM = "steam",
    TIKTOK = "tiktok",
    TWITCH = "twitch",
    TWITTER = "twitter",
    XBOX = "xbox",
    YOUTUBE = "youtube",
    DOMAIN = "domain"
}
export interface ConnectedAccountResponse {
    id: string;
    name: string | null;
    type: ConnectedAccountProviders;
    friend_sync: boolean;
    integrations?: ConnectedAccountIntegrationResponse[];
    show_activity: boolean;
    two_way_link: boolean;
    verified: boolean;
    visibility: ConnectedAccountVisibility;
    revoked?: boolean;
}
export function ConnectedAccountResponse(id: ConnectedAccountResponse["id"], name: ConnectedAccountResponse["name"], type: ConnectedAccountResponse["type"], friend_sync: ConnectedAccountResponse["friend_sync"], show_activity: ConnectedAccountResponse["show_activity"], two_way_link: ConnectedAccountResponse["two_way_link"], verified: ConnectedAccountResponse["verified"], visibility: ConnectedAccountResponse["visibility"], optional?: Omit<ConnectedAccountResponse, "id" | "name" | "type" | "friend_sync" | "show_activity" | "two_way_link" | "verified" | "visibility">): ConnectedAccountResponse { return { id, name, type, friend_sync, show_activity, two_way_link, verified, visibility, ...optional }; }
export enum ConnectedAccountVisibility {
    NONE = 0,
    EVERYONE = 1
}
export interface ContainerComponentForMessageRequest {
    type: MessageComponentTypes.CONTAINER;
    id?: number | null;
    accent_color?: number | null;
    components: (ActionRowComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[];
    spoiler?: boolean | null;
}
export function ContainerComponentForMessageRequest(components: ContainerComponentForMessageRequest["components"], optional?: Omit<ContainerComponentForMessageRequest, "type" | "components">): ContainerComponentForMessageRequest { return { type: MessageComponentTypes.CONTAINER, components, ...optional }; }
export interface ContainerComponentResponse {
    type: MessageComponentTypes.CONTAINER;
    id: number;
    accent_color: number | null;
    components: (ActionRowComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    spoiler: boolean;
}
export function ContainerComponentResponse(id: ContainerComponentResponse["id"], accent_color: ContainerComponentResponse["accent_color"], components: ContainerComponentResponse["components"], spoiler: ContainerComponentResponse["spoiler"]): ContainerComponentResponse { return { type: MessageComponentTypes.CONTAINER, id, accent_color, components, spoiler }; }
export interface CreateEntitlementRequestData {
    sku_id: SnowflakeType;
    owner_id: SnowflakeType;
    owner_type: EntitlementOwnerTypes;
}
export function CreateEntitlementRequestData(sku_id: CreateEntitlementRequestData["sku_id"], owner_id: CreateEntitlementRequestData["owner_id"], owner_type: CreateEntitlementRequestData["owner_type"]): CreateEntitlementRequestData { return { sku_id, owner_id, owner_type }; }
export interface CreateForumThreadRequest {
    name: string;
    auto_archive_duration?: null | ThreadAutoArchiveDuration;
    rate_limit_per_user?: number | null;
    applied_tags?: SnowflakeType[] | null;
    message: BaseCreateMessageCreateRequest;
}
export function CreateForumThreadRequest(name: CreateForumThreadRequest["name"], message: CreateForumThreadRequest["message"], optional?: Omit<CreateForumThreadRequest, "name" | "message">): CreateForumThreadRequest { return { name, message, ...optional }; }
export interface CreateGroupDMInviteRequest {
    max_age?: number | null;
}
export function CreateGroupDMInviteRequest(optional?: CreateGroupDMInviteRequest): CreateGroupDMInviteRequest { return { ...optional }; }
export interface CreateGuildChannelRequest {
    type?: null | (ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_ANNOUNCEMENT | ChannelTypes.GUILD_STAGE_VOICE | ChannelTypes.GUILD_DIRECTORY | ChannelTypes.GUILD_FORUM);
    name: string;
    position?: number | null;
    topic?: string | null;
    bitrate?: number | null;
    user_limit?: number | null;
    nsfw?: boolean | null;
    rate_limit_per_user?: number | null;
    parent_id?: null | SnowflakeType;
    permission_overwrites?: ChannelPermissionOverwriteRequest[] | null;
    rtc_region?: string | null;
    video_quality_mode?: null | VideoQualityModes;
    default_auto_archive_duration?: null | ThreadAutoArchiveDuration;
    default_reaction_emoji?: null | UpdateDefaultReactionEmojiRequest;
    default_thread_rate_limit_per_user?: number | null;
    default_sort_order?: null | ThreadSortOrder;
    default_forum_layout?: null | ForumLayout;
    default_tag_setting?: null | ThreadSearchTagSetting;
    available_tags?: (null | CreateOrUpdateThreadTagRequest)[] | null;
}
export function CreateGuildChannelRequest(name: CreateGuildChannelRequest["name"], optional?: Omit<CreateGuildChannelRequest, "name">): CreateGuildChannelRequest { return { name, ...optional }; }
export interface CreateGuildInviteRequest {
    max_age?: number | null;
    temporary?: boolean | null;
    max_uses?: number | null;
    unique?: boolean | null;
    target_user_id?: null | SnowflakeType;
    target_application_id?: null | SnowflakeType;
    target_type?: null | (InviteTargetTypes.STREAM | InviteTargetTypes.EMBEDDED_APPLICATION);
}
export function CreateGuildInviteRequest(optional?: CreateGuildInviteRequest): CreateGuildInviteRequest { return { ...optional }; }
export interface CreateMessageInteractionCallbackRequest {
    type: InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE;
    data: IncomingWebhookInteractionRequest;
}
export function CreateMessageInteractionCallbackRequest(data: CreateMessageInteractionCallbackRequest["data"]): CreateMessageInteractionCallbackRequest { return { type: InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, data }; }
export interface CreateMessageInteractionCallbackResponse {
    type: InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE;
    message: MessageResponse;
}
export function CreateMessageInteractionCallbackResponse(message: CreateMessageInteractionCallbackResponse["message"]): CreateMessageInteractionCallbackResponse { return { type: InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, message }; }
export interface CreateOrUpdateThreadTagRequest {
    name: string;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
    moderated?: boolean | null;
}
export function CreateOrUpdateThreadTagRequest(name: CreateOrUpdateThreadTagRequest["name"], optional?: Omit<CreateOrUpdateThreadTagRequest, "name">): CreateOrUpdateThreadTagRequest { return { name, ...optional }; }
export interface CreatePrivateChannelRequest {
    recipient_id?: null | SnowflakeType;
    access_tokens?: string[] | null;
    nicks?: {
        [key: string]: string | null;
    } | null;
}
export function CreatePrivateChannelRequest(optional?: CreatePrivateChannelRequest): CreatePrivateChannelRequest { return { ...optional }; }
export interface CreateRoleRequest {
    name?: string | null;
    permissions?: number | null;
    color?: number | null;
    colors?: null | RoleColors;
    hoist?: boolean | null;
    mentionable?: boolean | null;
    icon?: string | null;
    unicode_emoji?: string | null;
}
export function CreateRoleRequest(optional?: CreateRoleRequest): CreateRoleRequest { return { ...optional }; }
export interface CreateTextThreadWithMessageRequest {
    name: string;
    auto_archive_duration?: null | ThreadAutoArchiveDuration;
    rate_limit_per_user?: number | null;
}
export function CreateTextThreadWithMessageRequest(name: CreateTextThreadWithMessageRequest["name"], optional?: Omit<CreateTextThreadWithMessageRequest, "name">): CreateTextThreadWithMessageRequest { return { name, ...optional }; }
export interface CreateTextThreadWithoutMessageRequest {
    name: string;
    auto_archive_duration?: null | ThreadAutoArchiveDuration;
    rate_limit_per_user?: number | null;
    type?: null | (ChannelTypes.ANNOUNCEMENT_THREAD | ChannelTypes.PUBLIC_THREAD | ChannelTypes.PRIVATE_THREAD);
    invitable?: boolean | null;
}
export function CreateTextThreadWithoutMessageRequest(name: CreateTextThreadWithoutMessageRequest["name"], optional?: Omit<CreateTextThreadWithoutMessageRequest, "name">): CreateTextThreadWithoutMessageRequest { return { name, ...optional }; }
export interface CreatedThreadResponse {
    id: SnowflakeType;
    type: ChannelTypes.ANNOUNCEMENT_THREAD | ChannelTypes.PUBLIC_THREAD | ChannelTypes.PRIVATE_THREAD;
    last_message_id?: null | SnowflakeType;
    flags: number;
    last_pin_timestamp?: string | null;
    guild_id: SnowflakeType;
    name: string;
    parent_id?: null | SnowflakeType;
    rate_limit_per_user?: number;
    bitrate?: number;
    user_limit?: number;
    rtc_region?: string | null;
    video_quality_mode?: VideoQualityModes;
    permissions?: string;
    owner_id: SnowflakeType;
    thread_metadata: ThreadMetadataResponse;
    message_count: number;
    member_count: number;
    total_message_sent: number;
    applied_tags?: SnowflakeType[];
    member?: ThreadMemberResponse;
}
export function CreatedThreadResponse(id: CreatedThreadResponse["id"], type: CreatedThreadResponse["type"], flags: CreatedThreadResponse["flags"], guild_id: CreatedThreadResponse["guild_id"], name: CreatedThreadResponse["name"], owner_id: CreatedThreadResponse["owner_id"], thread_metadata: CreatedThreadResponse["thread_metadata"], message_count: CreatedThreadResponse["message_count"], member_count: CreatedThreadResponse["member_count"], total_message_sent: CreatedThreadResponse["total_message_sent"], optional?: Omit<CreatedThreadResponse, "id" | "type" | "flags" | "guild_id" | "name" | "owner_id" | "thread_metadata" | "message_count" | "member_count" | "total_message_sent">): CreatedThreadResponse { return { id, type, flags, guild_id, name, owner_id, thread_metadata, message_count, member_count, total_message_sent, ...optional }; }
export interface CustomClientThemeResponse {
    colors: string[];
    gradient_angle: number;
    base_mix: number;
    base_theme: MessageShareCustomUserThemeBaseTheme;
}
export function CustomClientThemeResponse(colors: CustomClientThemeResponse["colors"], gradient_angle: CustomClientThemeResponse["gradient_angle"], base_mix: CustomClientThemeResponse["base_mix"], base_theme: CustomClientThemeResponse["base_theme"]): CustomClientThemeResponse { return { colors, gradient_angle, base_mix, base_theme }; }
export interface CustomClientThemeShareRequest {
    colors: string[];
    gradient_angle: number;
    base_mix: number;
    base_theme?: null | MessageShareCustomUserThemeBaseTheme;
}
export function CustomClientThemeShareRequest(colors: CustomClientThemeShareRequest["colors"], gradient_angle: CustomClientThemeShareRequest["gradient_angle"], base_mix: CustomClientThemeShareRequest["base_mix"], optional?: Omit<CustomClientThemeShareRequest, "colors" | "gradient_angle" | "base_mix">): CustomClientThemeShareRequest { return { colors, gradient_angle, base_mix, ...optional }; }
export interface DefaultKeywordListTriggerMetadata {
    allow_list?: string[] | null;
    presets?: AutomodKeywordPresetType[] | null;
}
export function DefaultKeywordListTriggerMetadata(optional?: DefaultKeywordListTriggerMetadata): DefaultKeywordListTriggerMetadata { return { ...optional }; }
export interface DefaultKeywordListTriggerMetadataResponse {
    allow_list: string[];
    presets: AutomodKeywordPresetType[];
}
export function DefaultKeywordListTriggerMetadataResponse(allow_list: DefaultKeywordListTriggerMetadataResponse["allow_list"], presets: DefaultKeywordListTriggerMetadataResponse["presets"]): DefaultKeywordListTriggerMetadataResponse { return { allow_list, presets }; }
export interface DefaultKeywordListUpsertRequest {
    name: string;
    event_type: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type: AutomodTriggerType.DEFAULT_KEYWORD_LIST;
    trigger_metadata: DefaultKeywordListTriggerMetadata;
}
export function DefaultKeywordListUpsertRequest(name: DefaultKeywordListUpsertRequest["name"], event_type: DefaultKeywordListUpsertRequest["event_type"], trigger_metadata: DefaultKeywordListUpsertRequest["trigger_metadata"], optional?: Omit<DefaultKeywordListUpsertRequest, "trigger_type" | "name" | "event_type" | "trigger_metadata">): DefaultKeywordListUpsertRequest { return { trigger_type: AutomodTriggerType.DEFAULT_KEYWORD_LIST, name, event_type, trigger_metadata, ...optional }; }
export interface DefaultKeywordListUpsertRequestPartial {
    name?: string;
    event_type?: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type?: AutomodTriggerType.DEFAULT_KEYWORD_LIST;
    trigger_metadata?: DefaultKeywordListTriggerMetadata;
}
export function DefaultKeywordListUpsertRequestPartial(optional?: DefaultKeywordListUpsertRequestPartial): DefaultKeywordListUpsertRequestPartial { return { ...optional }; }
export interface DefaultKeywordRuleResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    creator_id: SnowflakeType;
    name: string;
    event_type: AutomodEventType;
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    trigger_type: AutomodTriggerType.DEFAULT_KEYWORD_LIST;
    enabled: boolean;
    exempt_roles: SnowflakeType[];
    exempt_channels: SnowflakeType[];
    trigger_metadata: DefaultKeywordListTriggerMetadataResponse;
}
export function DefaultKeywordRuleResponse(id: DefaultKeywordRuleResponse["id"], guild_id: DefaultKeywordRuleResponse["guild_id"], creator_id: DefaultKeywordRuleResponse["creator_id"], name: DefaultKeywordRuleResponse["name"], event_type: DefaultKeywordRuleResponse["event_type"], actions: DefaultKeywordRuleResponse["actions"], enabled: DefaultKeywordRuleResponse["enabled"], exempt_roles: DefaultKeywordRuleResponse["exempt_roles"], exempt_channels: DefaultKeywordRuleResponse["exempt_channels"], trigger_metadata: DefaultKeywordRuleResponse["trigger_metadata"]): DefaultKeywordRuleResponse { return { trigger_type: AutomodTriggerType.DEFAULT_KEYWORD_LIST, id, guild_id, creator_id, name, event_type, actions, enabled, exempt_roles, exempt_channels, trigger_metadata }; }
export interface DefaultReactionEmojiResponse {
    emoji_id: null | SnowflakeType;
    emoji_name: string | null;
}
export function DefaultReactionEmojiResponse(emoji_id: DefaultReactionEmojiResponse["emoji_id"], emoji_name: DefaultReactionEmojiResponse["emoji_name"]): DefaultReactionEmojiResponse { return { emoji_id, emoji_name }; }
export interface DiscordIntegrationResponse {
    type: IntegrationTypes.DISCORD;
    name: string | null;
    account: AccountResponse;
    enabled: boolean;
    id: SnowflakeType;
    application: IntegrationApplicationResponse;
    scopes: (OAuth2Scopes.APPLICATIONS_COMMANDS | OAuth2Scopes.BOT | OAuth2Scopes.WEBHOOK_INCOMING)[];
    user?: UserResponse;
}
export function DiscordIntegrationResponse(name: DiscordIntegrationResponse["name"], account: DiscordIntegrationResponse["account"], enabled: DiscordIntegrationResponse["enabled"], id: DiscordIntegrationResponse["id"], application: DiscordIntegrationResponse["application"], scopes: DiscordIntegrationResponse["scopes"], optional?: Omit<DiscordIntegrationResponse, "type" | "name" | "account" | "enabled" | "id" | "application" | "scopes">): DiscordIntegrationResponse { return { type: IntegrationTypes.DISCORD, name, account, enabled, id, application, scopes, ...optional }; }
export interface EmbeddedActivityInstance {
    application_id: SnowflakeType;
    instance_id: string;
    launch_id: string;
    location: GuildChannelLocation | PrivateChannelLocation;
    users: SnowflakeType[];
}
export function EmbeddedActivityInstance(application_id: EmbeddedActivityInstance["application_id"], instance_id: EmbeddedActivityInstance["instance_id"], launch_id: EmbeddedActivityInstance["launch_id"], location: EmbeddedActivityInstance["location"], users: EmbeddedActivityInstance["users"]): EmbeddedActivityInstance { return { application_id, instance_id, launch_id, location, users }; }
export enum EmbeddedActivityLocationKind {
    /**
     * guild channel
     */
    GUILD_CHANNEL = "gc",
    /**
     * private channel
     */
    PRIVATE_CHANNEL = "pc",
    /**
     * party
     */
    PARTY = "party"
}
export interface EmojiResponse {
    id: SnowflakeType;
    name: string;
    user?: UserResponse;
    roles: SnowflakeType[];
    require_colons: boolean;
    managed: boolean;
    animated: boolean;
    available: boolean;
}
export function EmojiResponse(id: EmojiResponse["id"], name: EmojiResponse["name"], roles: EmojiResponse["roles"], require_colons: EmojiResponse["require_colons"], managed: EmojiResponse["managed"], animated: EmojiResponse["animated"], available: EmojiResponse["available"], optional?: Omit<EmojiResponse, "id" | "name" | "roles" | "require_colons" | "managed" | "animated" | "available">): EmojiResponse { return { id, name, roles, require_colons, managed, animated, available, ...optional }; }
export enum EntitlementOwnerTypes {
}
export interface EntitlementResponse {
    id: SnowflakeType;
    sku_id: SnowflakeType;
    application_id: SnowflakeType;
    user_id: SnowflakeType;
    guild_id?: null | SnowflakeType;
    deleted: boolean;
    starts_at: string | null;
    ends_at: string | null;
    type: EntitlementTypes;
    fulfilled_at?: string | null;
    fulfillment_status?: null | EntitlementTenantFulfillmentStatusResponse;
    consumed?: boolean;
    gifter_user_id?: null | SnowflakeType;
    parent_id?: null | SnowflakeType;
}
export function EntitlementResponse(id: EntitlementResponse["id"], sku_id: EntitlementResponse["sku_id"], application_id: EntitlementResponse["application_id"], user_id: EntitlementResponse["user_id"], deleted: EntitlementResponse["deleted"], starts_at: EntitlementResponse["starts_at"], ends_at: EntitlementResponse["ends_at"], type: EntitlementResponse["type"], optional?: Omit<EntitlementResponse, "id" | "sku_id" | "application_id" | "user_id" | "deleted" | "starts_at" | "ends_at" | "type">): EntitlementResponse { return { id, sku_id, application_id, user_id, deleted, starts_at, ends_at, type, ...optional }; }
export enum EntitlementTenantFulfillmentStatusResponse {
    UNKNOWN = 0,
    FULFILLMENT_NOT_NEEDED = 1,
    FULFILLMENT_NEEDED = 2,
    FULFILLED = 3,
    FULFILLMENT_FAILED = 4,
    UNFULFILLMENT_NEEDED = 5,
    UNFULFILLED = 6,
    UNFULFILLMENT_FAILED = 7
}
export enum EntitlementTypes {
    APPLICATION_SUBSCRIPTION = 8,
    QUEST_REWARD = 10
}
export interface EntityMetadataExternal {
    location: string;
}
export function EntityMetadataExternal(location: EntityMetadataExternal["location"]): EntityMetadataExternal { return { location }; }
export interface EntityMetadataExternalResponse {
    location: string;
}
export function EntityMetadataExternalResponse(location: EntityMetadataExternalResponse["location"]): EntityMetadataExternalResponse { return { location }; }
export interface EntityMetadataStageInstance {
    [key: string]: never;
}
export function EntityMetadataStageInstance(): EntityMetadataStageInstance { return {}; }
export interface EntityMetadataStageInstanceResponse {
    [key: string]: never;
}
export function EntityMetadataStageInstanceResponse(): EntityMetadataStageInstanceResponse { return {}; }
export interface EntityMetadataVoice {
    [key: string]: never;
}
export function EntityMetadataVoice(): EntityMetadataVoice { return {}; }
export interface EntityMetadataVoiceResponse {
    [key: string]: never;
}
export function EntityMetadataVoiceResponse(): EntityMetadataVoiceResponse { return {}; }
export interface ExternalConnectionIntegrationResponse {
    type: IntegrationTypes.TWITCH | IntegrationTypes.YOUTUBE;
    name: string | null;
    account: AccountResponse;
    enabled: boolean;
    id: string;
    user: UserResponse;
    revoked?: boolean;
    expire_behavior?: IntegrationExpireBehaviorTypes;
    expire_grace_period?: IntegrationExpireGracePeriodTypes;
    subscriber_count?: number;
    synced_at?: string;
    role_id?: null | SnowflakeType;
    syncing?: boolean;
    enable_emoticons?: boolean;
}
export function ExternalConnectionIntegrationResponse(type: ExternalConnectionIntegrationResponse["type"], name: ExternalConnectionIntegrationResponse["name"], account: ExternalConnectionIntegrationResponse["account"], enabled: ExternalConnectionIntegrationResponse["enabled"], id: ExternalConnectionIntegrationResponse["id"], user: ExternalConnectionIntegrationResponse["user"], optional?: Omit<ExternalConnectionIntegrationResponse, "type" | "name" | "account" | "enabled" | "id" | "user">): ExternalConnectionIntegrationResponse { return { type, name, account, enabled, id, user, ...optional }; }
export interface ExternalScheduledEventCreateRequest {
    name: string;
    description?: string | null;
    image?: string | null;
    scheduled_start_time: string;
    scheduled_end_time?: string | null;
    privacy_level: GuildScheduledEventPrivacyLevels;
    entity_type: GuildScheduledEventEntityTypes.EXTERNAL;
    channel_id?: null | SnowflakeType;
    entity_metadata: EntityMetadataExternal;
}
export function ExternalScheduledEventCreateRequest(name: ExternalScheduledEventCreateRequest["name"], scheduled_start_time: ExternalScheduledEventCreateRequest["scheduled_start_time"], privacy_level: ExternalScheduledEventCreateRequest["privacy_level"], entity_metadata: ExternalScheduledEventCreateRequest["entity_metadata"], optional?: Omit<ExternalScheduledEventCreateRequest, "entity_type" | "name" | "scheduled_start_time" | "privacy_level" | "entity_metadata">): ExternalScheduledEventCreateRequest { return { entity_type: GuildScheduledEventEntityTypes.EXTERNAL, name, scheduled_start_time, privacy_level, entity_metadata, ...optional }; }
export interface ExternalScheduledEventPatchRequestPartial {
    status?: null | GuildScheduledEventStatuses;
    name?: string;
    description?: string | null;
    image?: string | null;
    scheduled_start_time?: string;
    scheduled_end_time?: string | null;
    entity_type?: null | GuildScheduledEventEntityTypes.EXTERNAL;
    privacy_level?: GuildScheduledEventPrivacyLevels;
    channel_id?: null | SnowflakeType;
    entity_metadata?: EntityMetadataExternal;
}
export function ExternalScheduledEventPatchRequestPartial(optional?: ExternalScheduledEventPatchRequestPartial): ExternalScheduledEventPatchRequestPartial { return { ...optional }; }
export interface ExternalScheduledEventResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    name: string;
    description: string | null;
    channel_id: null | SnowflakeType;
    creator_id: null | SnowflakeType;
    creator?: UserResponse;
    image: string | null;
    scheduled_start_time: string;
    scheduled_end_time: string | null;
    status: GuildScheduledEventStatuses;
    entity_type: GuildScheduledEventEntityTypes.EXTERNAL;
    entity_id: null | SnowflakeType;
    user_count?: number;
    privacy_level: GuildScheduledEventPrivacyLevels;
    user_rsvp?: null | ScheduledEventUserResponse;
    entity_metadata: EntityMetadataExternalResponse;
}
export function ExternalScheduledEventResponse(id: ExternalScheduledEventResponse["id"], guild_id: ExternalScheduledEventResponse["guild_id"], name: ExternalScheduledEventResponse["name"], description: ExternalScheduledEventResponse["description"], channel_id: ExternalScheduledEventResponse["channel_id"], creator_id: ExternalScheduledEventResponse["creator_id"], image: ExternalScheduledEventResponse["image"], scheduled_start_time: ExternalScheduledEventResponse["scheduled_start_time"], scheduled_end_time: ExternalScheduledEventResponse["scheduled_end_time"], status: ExternalScheduledEventResponse["status"], entity_id: ExternalScheduledEventResponse["entity_id"], privacy_level: ExternalScheduledEventResponse["privacy_level"], entity_metadata: ExternalScheduledEventResponse["entity_metadata"], optional?: Omit<ExternalScheduledEventResponse, "entity_type" | "id" | "guild_id" | "name" | "description" | "channel_id" | "creator_id" | "image" | "scheduled_start_time" | "scheduled_end_time" | "status" | "entity_id" | "privacy_level" | "entity_metadata">): ExternalScheduledEventResponse { return { entity_type: GuildScheduledEventEntityTypes.EXTERNAL, id, guild_id, name, description, channel_id, creator_id, image, scheduled_start_time, scheduled_end_time, status, entity_id, privacy_level, entity_metadata, ...optional }; }
export interface FileComponentForMessageRequest {
    type: MessageComponentTypes.FILE;
    id?: number | null;
    spoiler?: boolean | null;
    file: UnfurledMediaRequestWithAttachmentReferenceRequired;
}
export function FileComponentForMessageRequest(file: FileComponentForMessageRequest["file"], optional?: Omit<FileComponentForMessageRequest, "type" | "file">): FileComponentForMessageRequest { return { type: MessageComponentTypes.FILE, file, ...optional }; }
export interface FileComponentResponse {
    type: MessageComponentTypes.FILE;
    id: number;
    file: UnfurledMediaResponse;
    name: string | null;
    size: number | null;
    spoiler: boolean;
}
export function FileComponentResponse(id: FileComponentResponse["id"], file: FileComponentResponse["file"], name: FileComponentResponse["name"], size: FileComponentResponse["size"], spoiler: FileComponentResponse["spoiler"]): FileComponentResponse { return { type: MessageComponentTypes.FILE, id, file, name, size, spoiler }; }
export interface FileUploadComponentForModalRequest {
    type: MessageComponentTypes.FILE_UPLOAD;
    id?: number | null;
    custom_id: string;
    min_values?: number | null;
    max_values?: number | null;
    required?: boolean | null;
}
export function FileUploadComponentForModalRequest(custom_id: FileUploadComponentForModalRequest["custom_id"], optional?: Omit<FileUploadComponentForModalRequest, "type" | "custom_id">): FileUploadComponentForModalRequest { return { type: MessageComponentTypes.FILE_UPLOAD, custom_id, ...optional }; }
export interface FlagToChannelAction {
    type: AutomodActionType.FLAG_TO_CHANNEL;
    metadata: FlagToChannelActionMetadata;
}
export function FlagToChannelAction(metadata: FlagToChannelAction["metadata"]): FlagToChannelAction { return { type: AutomodActionType.FLAG_TO_CHANNEL, metadata }; }
export interface FlagToChannelActionMetadata {
    channel_id: SnowflakeType;
}
export function FlagToChannelActionMetadata(channel_id: FlagToChannelActionMetadata["channel_id"]): FlagToChannelActionMetadata { return { channel_id }; }
export interface FlagToChannelActionMetadataResponse {
    channel_id: SnowflakeType;
}
export function FlagToChannelActionMetadataResponse(channel_id: FlagToChannelActionMetadataResponse["channel_id"]): FlagToChannelActionMetadataResponse { return { channel_id }; }
export interface FlagToChannelActionResponse {
    type: AutomodActionType.FLAG_TO_CHANNEL;
    metadata: FlagToChannelActionMetadataResponse;
}
export function FlagToChannelActionResponse(metadata: FlagToChannelActionResponse["metadata"]): FlagToChannelActionResponse { return { type: AutomodActionType.FLAG_TO_CHANNEL, metadata }; }
export enum ForumLayout {
    /**
     * No default has been set for forum channel
     */
    DEFAULT = 0,
    /**
     * Display posts as a list
     */
    LIST = 1,
    /**
     * Display posts as a collection of tiles
     */
    GRID = 2
}
export interface ForumTagResponse {
    id: SnowflakeType;
    name: string;
    moderated: boolean;
    emoji_id: null | SnowflakeType;
    emoji_name: string | null;
}
export function ForumTagResponse(id: ForumTagResponse["id"], name: ForumTagResponse["name"], moderated: ForumTagResponse["moderated"], emoji_id: ForumTagResponse["emoji_id"], emoji_name: ForumTagResponse["emoji_name"]): ForumTagResponse { return { id, name, moderated, emoji_id, emoji_name }; }
export interface FriendInviteResponse {
    type: InviteTypes.FRIEND;
    code: string;
    inviter?: UserResponse;
    max_age?: number;
    created_at?: string;
    expires_at: string | null;
    friends_count?: number;
    channel: null | InviteChannelResponse;
    is_contact?: boolean;
    uses?: number;
    max_uses?: number;
    flags?: number;
}
export function FriendInviteResponse(code: FriendInviteResponse["code"], expires_at: FriendInviteResponse["expires_at"], channel: FriendInviteResponse["channel"], optional?: Omit<FriendInviteResponse, "type" | "code" | "expires_at" | "channel">): FriendInviteResponse { return { type: InviteTypes.FRIEND, code, expires_at, channel, ...optional }; }
export interface GatewayBotResponse {
    url: string;
    session_start_limit: GatewayBotSessionStartLimitResponse;
    shards: number;
}
export function GatewayBotResponse(url: GatewayBotResponse["url"], session_start_limit: GatewayBotResponse["session_start_limit"], shards: GatewayBotResponse["shards"]): GatewayBotResponse { return { url, session_start_limit, shards }; }
export interface GatewayBotSessionStartLimitResponse {
    max_concurrency: number;
    remaining: number;
    reset_after: number;
    total: number;
}
export function GatewayBotSessionStartLimitResponse(max_concurrency: GatewayBotSessionStartLimitResponse["max_concurrency"], remaining: GatewayBotSessionStartLimitResponse["remaining"], reset_after: GatewayBotSessionStartLimitResponse["reset_after"], total: GatewayBotSessionStartLimitResponse["total"]): GatewayBotSessionStartLimitResponse { return { max_concurrency, remaining, reset_after, total }; }
export interface GatewayResponse {
    url: string;
}
export function GatewayResponse(url: GatewayResponse["url"]): GatewayResponse { return { url }; }
export interface GithubAuthor {
    username?: string | null;
    name: string;
}
export function GithubAuthor(name: GithubAuthor["name"], optional?: Omit<GithubAuthor, "name">): GithubAuthor { return { name, ...optional }; }
export interface GithubCheckApp {
    name: string;
}
export function GithubCheckApp(name: GithubCheckApp["name"]): GithubCheckApp { return { name }; }
export interface GithubCheckPullRequest {
    number: number;
}
export function GithubCheckPullRequest(number: GithubCheckPullRequest["number"]): GithubCheckPullRequest { return { number }; }
export interface GithubCheckRun {
    conclusion?: string | null;
    name: string;
    html_url: string;
    check_suite: GithubCheckSuite;
    details_url?: string | null;
    output?: null | GithubCheckRunOutput;
    pull_requests?: GithubCheckPullRequest[] | null;
}
export function GithubCheckRun(name: GithubCheckRun["name"], html_url: GithubCheckRun["html_url"], check_suite: GithubCheckRun["check_suite"], optional?: Omit<GithubCheckRun, "name" | "html_url" | "check_suite">): GithubCheckRun { return { name, html_url, check_suite, ...optional }; }
export interface GithubCheckRunOutput {
    title?: string | null;
    summary?: string | null;
}
export function GithubCheckRunOutput(optional?: GithubCheckRunOutput): GithubCheckRunOutput { return { ...optional }; }
export interface GithubCheckSuite {
    conclusion?: string | null;
    head_branch?: string | null;
    head_sha: string;
    pull_requests?: GithubCheckPullRequest[] | null;
    app: GithubCheckApp;
}
export function GithubCheckSuite(head_sha: GithubCheckSuite["head_sha"], app: GithubCheckSuite["app"], optional?: Omit<GithubCheckSuite, "head_sha" | "app">): GithubCheckSuite { return { head_sha, app, ...optional }; }
export interface GithubComment {
    id: number;
    html_url: string;
    user: GithubUser;
    commit_id?: string | null;
    body: string;
}
export function GithubComment(id: GithubComment["id"], html_url: GithubComment["html_url"], user: GithubComment["user"], body: GithubComment["body"], optional?: Omit<GithubComment, "id" | "html_url" | "user" | "body">): GithubComment { return { id, html_url, user, body, ...optional }; }
export interface GithubCommit {
    id: string;
    url: string;
    message: string;
    author: GithubAuthor;
}
export function GithubCommit(id: GithubCommit["id"], url: GithubCommit["url"], message: GithubCommit["message"], author: GithubCommit["author"]): GithubCommit { return { id, url, message, author }; }
export interface GithubDiscussion {
    title: string;
    number: number;
    html_url: string;
    answer_html_url?: string | null;
    body?: string | null;
    user: GithubUser;
}
export function GithubDiscussion(title: GithubDiscussion["title"], number: GithubDiscussion["number"], html_url: GithubDiscussion["html_url"], user: GithubDiscussion["user"], optional?: Omit<GithubDiscussion, "title" | "number" | "html_url" | "user">): GithubDiscussion { return { title, number, html_url, user, ...optional }; }
export interface GithubIssue {
    id: number;
    number: number;
    html_url: string;
    user: GithubUser;
    title: string;
    body?: string | null;
    pull_request?: unknown;
}
export function GithubIssue(id: GithubIssue["id"], number: GithubIssue["number"], html_url: GithubIssue["html_url"], user: GithubIssue["user"], title: GithubIssue["title"], optional?: Omit<GithubIssue, "id" | "number" | "html_url" | "user" | "title">): GithubIssue { return { id, number, html_url, user, title, ...optional }; }
export interface GithubRelease {
    id: number;
    tag_name: string;
    html_url: string;
    author: GithubUser;
}
export function GithubRelease(id: GithubRelease["id"], tag_name: GithubRelease["tag_name"], html_url: GithubRelease["html_url"], author: GithubRelease["author"]): GithubRelease { return { id, tag_name, html_url, author }; }
export interface GithubRepository {
    id: number;
    html_url: string;
    name: string;
    full_name: string;
}
export function GithubRepository(id: GithubRepository["id"], html_url: GithubRepository["html_url"], name: GithubRepository["name"], full_name: GithubRepository["full_name"]): GithubRepository { return { id, html_url, name, full_name }; }
export interface GithubReview {
    user: GithubUser;
    body?: string | null;
    html_url: string;
    state: string;
}
export function GithubReview(user: GithubReview["user"], html_url: GithubReview["html_url"], state: GithubReview["state"], optional?: Omit<GithubReview, "user" | "html_url" | "state">): GithubReview { return { user, html_url, state, ...optional }; }
export interface GithubUser {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
}
export function GithubUser(id: GithubUser["id"], login: GithubUser["login"], html_url: GithubUser["html_url"], avatar_url: GithubUser["avatar_url"]): GithubUser { return { id, login, html_url, avatar_url }; }
export interface GithubWebhook {
    action?: string | null;
    ref?: string | null;
    ref_type?: string | null;
    comment?: null | GithubComment;
    issue?: null | GithubIssue;
    pull_request?: null | GithubIssue;
    repository?: null | GithubRepository;
    forkee?: null | GithubRepository;
    sender: GithubUser;
    member?: null | GithubUser;
    release?: null | GithubRelease;
    head_commit?: null | GithubCommit;
    commits?: GithubCommit[] | null;
    forced?: boolean | null;
    compare?: string | null;
    review?: null | GithubReview;
    check_run?: null | GithubCheckRun;
    check_suite?: null | GithubCheckSuite;
    discussion?: null | GithubDiscussion;
    answer?: null | GithubComment;
}
export function GithubWebhook(sender: GithubWebhook["sender"], optional?: Omit<GithubWebhook, "sender">): GithubWebhook { return { sender, ...optional }; }
export interface GroupDMInviteResponse {
    type: InviteTypes.GROUP_DM;
    code: string;
    inviter?: UserResponse;
    max_age?: number;
    created_at?: string;
    expires_at: string | null;
    channel: InviteChannelResponse;
    approximate_member_count?: number | null;
}
export function GroupDMInviteResponse(code: GroupDMInviteResponse["code"], expires_at: GroupDMInviteResponse["expires_at"], channel: GroupDMInviteResponse["channel"], optional?: Omit<GroupDMInviteResponse, "type" | "code" | "expires_at" | "channel">): GroupDMInviteResponse { return { type: InviteTypes.GROUP_DM, code, expires_at, channel, ...optional }; }
export interface GuildAuditLogResponse {
    audit_log_entries: AuditLogEntryResponse[];
    users: UserResponse[];
    integrations: (PartialDiscordIntegrationResponse | PartialExternalConnectionIntegrationResponse | PartialGuildSubscriptionIntegrationResponse)[];
    webhooks: (ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse)[];
    guild_scheduled_events: (ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse)[];
    threads: ThreadResponse[];
    application_commands: ApplicationCommandResponse[];
    auto_moderation_rules: (DefaultKeywordRuleResponse | KeywordRuleResponse | MLSpamRuleResponse | MentionSpamRuleResponse | SpamLinkRuleResponse | null)[];
}
export function GuildAuditLogResponse(audit_log_entries: GuildAuditLogResponse["audit_log_entries"], users: GuildAuditLogResponse["users"], integrations: GuildAuditLogResponse["integrations"], webhooks: GuildAuditLogResponse["webhooks"], guild_scheduled_events: GuildAuditLogResponse["guild_scheduled_events"], threads: GuildAuditLogResponse["threads"], application_commands: GuildAuditLogResponse["application_commands"], auto_moderation_rules: GuildAuditLogResponse["auto_moderation_rules"]): GuildAuditLogResponse { return { audit_log_entries, users, integrations, webhooks, guild_scheduled_events, threads, application_commands, auto_moderation_rules }; }
export interface GuildBanResponse {
    user: UserResponse;
    reason: string | null;
}
export function GuildBanResponse(user: GuildBanResponse["user"], reason: GuildBanResponse["reason"]): GuildBanResponse { return { user, reason }; }
export interface GuildChannelLocation {
    id: string;
    kind: EmbeddedActivityLocationKind.GUILD_CHANNEL;
    channel_id: SnowflakeType;
    guild_id: SnowflakeType;
}
export function GuildChannelLocation(id: GuildChannelLocation["id"], channel_id: GuildChannelLocation["channel_id"], guild_id: GuildChannelLocation["guild_id"]): GuildChannelLocation { return { kind: EmbeddedActivityLocationKind.GUILD_CHANNEL, id, channel_id, guild_id }; }
export interface GuildChannelResponse {
    id: SnowflakeType;
    type: ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_ANNOUNCEMENT | ChannelTypes.GUILD_STAGE_VOICE | ChannelTypes.GUILD_DIRECTORY | ChannelTypes.GUILD_FORUM;
    last_message_id?: null | SnowflakeType;
    flags: number;
    last_pin_timestamp?: string | null;
    guild_id: SnowflakeType;
    name: string;
    parent_id?: null | SnowflakeType;
    rate_limit_per_user?: number;
    bitrate?: number;
    user_limit?: number;
    rtc_region?: string | null;
    video_quality_mode?: VideoQualityModes;
    permissions?: string;
    topic?: string | null;
    default_auto_archive_duration?: ThreadAutoArchiveDuration;
    default_thread_rate_limit_per_user?: number;
    position: number;
    permission_overwrites?: ChannelPermissionOverwriteResponse[];
    nsfw?: boolean;
    available_tags?: ForumTagResponse[];
    default_reaction_emoji?: null | DefaultReactionEmojiResponse;
    default_sort_order?: null | ThreadSortOrder;
    default_forum_layout?: ForumLayout;
    default_tag_setting?: null | ThreadSearchTagSetting;
    hd_streaming_until?: string;
    hd_streaming_buyer_id?: SnowflakeType;
}
export function GuildChannelResponse(id: GuildChannelResponse["id"], type: GuildChannelResponse["type"], flags: GuildChannelResponse["flags"], guild_id: GuildChannelResponse["guild_id"], name: GuildChannelResponse["name"], position: GuildChannelResponse["position"], optional?: Omit<GuildChannelResponse, "id" | "type" | "flags" | "guild_id" | "name" | "position">): GuildChannelResponse { return { id, type, flags, guild_id, name, position, ...optional }; }
export enum GuildExplicitContentFilterTypes {
    /**
     * media content will not be scanned
     */
    DISABLED = 0,
    /**
     * media content sent by members without roles will be scanned
     */
    MEMBERS_WITHOUT_ROLES = 1,
    /**
     * media content sent by all members will be scanned
     */
    ALL_MEMBERS = 2
}
export enum GuildFeatures {
    /**
     * guild has access to set an animated guild banner image
     */
    ANIMATED_BANNER = "ANIMATED_BANNER",
    /**
     * guild has access to set an animated guild icon
     */
    ANIMATED_ICON = "ANIMATED_ICON",
    /**
     * guild is using the old permissions configuration behavior
     */
    APPLICATION_COMMAND_PERMISSIONS_V2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
    /**
     * guild has set up auto moderation rules
     */
    AUTO_MODERATION = "AUTO_MODERATION",
    /**
     * guild has access to set a guild banner image
     */
    BANNER = "BANNER",
    /**
     * guild can enable welcome screen, Membership Screening, stage channels and discovery, and             receives community updates
     */
    COMMUNITY = "COMMUNITY",
    /**
     * guild has enabled monetization
     */
    CREATOR_MONETIZABLE_PROVISIONAL = "CREATOR_MONETIZABLE_PROVISIONAL",
    /**
     * guild has enabled the role subscription promo page
     */
    CREATOR_STORE_PAGE = "CREATOR_STORE_PAGE",
    /**
     * guild has been set as a support server on the App Directory
     */
    DEVELOPER_SUPPORT_SERVER = "DEVELOPER_SUPPORT_SERVER",
    /**
     * guild is able to be discovered in the directory
     */
    DISCOVERABLE = "DISCOVERABLE",
    /**
     * guild is able to be featured in the directory
     */
    FEATURABLE = "FEATURABLE",
    /**
     * guild has paused invites, preventing new users from joining
     */
    INVITES_DISABLED = "INVITES_DISABLED",
    /**
     * guild has access to set an invite splash background
     */
    INVITE_SPLASH = "INVITE_SPLASH",
    /**
     * guild has enabled Membership Screening
     */
    MEMBER_VERIFICATION_GATE_ENABLED = "MEMBER_VERIFICATION_GATE_ENABLED",
    /**
     * guild has increased custom sticker slots
     */
    MORE_STICKERS = "MORE_STICKERS",
    /**
     * guild has access to create announcement channels
     */
    NEWS = "NEWS",
    /**
     * guild is partnered
     */
    PARTNERED = "PARTNERED",
    /**
     * guild can be previewed before joining via Membership Screening or the directory
     */
    PREVIEW_ENABLED = "PREVIEW_ENABLED",
    /**
     * guild has disabled activity alerts in the configured safety alerts channel
     */
    RAID_ALERTS_DISABLED = "RAID_ALERTS_DISABLED",
    /**
     * guild is able to set role icons
     */
    ROLE_ICONS = "ROLE_ICONS",
    /**
     * guild has role subscriptions that can be purchased
     */
    ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
    /**
     * guild has enabled role subscriptions
     */
    ROLE_SUBSCRIPTIONS_ENABLED = "ROLE_SUBSCRIPTIONS_ENABLED",
    /**
     * guild has enabled ticketed events
     */
    TICKETED_EVENTS_ENABLED = "TICKETED_EVENTS_ENABLED",
    /**
     * guild has access to set a vanity URL
     */
    VANITY_URL = "VANITY_URL",
    /**
     * guild is verified
     */
    VERIFIED = "VERIFIED",
    /**
     * guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
     */
    VIP_REGIONS = "VIP_REGIONS",
    /**
     * guild has enabled the welcome screen
     */
    WELCOME_SCREEN_ENABLED = "WELCOME_SCREEN_ENABLED",
    /**
     * guild is an official guild for one or more games
     */
    OFFICIAL_GAME_GUILD = "OFFICIAL_GAME_GUILD"
}
export interface GuildHomeSettingsResponse {
    guild_id: SnowflakeType;
    enabled: boolean;
    welcome_message?: WelcomeMessageResponse;
    new_member_actions: NewMemberActionResponse[];
    resource_channels: ResourceChannelResponse[];
}
export function GuildHomeSettingsResponse(guild_id: GuildHomeSettingsResponse["guild_id"], enabled: GuildHomeSettingsResponse["enabled"], new_member_actions: GuildHomeSettingsResponse["new_member_actions"], resource_channels: GuildHomeSettingsResponse["resource_channels"], optional?: Omit<GuildHomeSettingsResponse, "guild_id" | "enabled" | "new_member_actions" | "resource_channels">): GuildHomeSettingsResponse { return { guild_id, enabled, new_member_actions, resource_channels, ...optional }; }
export interface GuildIncidentsDataResponse {
    invites_disabled_until: string | null;
    dms_disabled_until: string | null;
}
export function GuildIncidentsDataResponse(invites_disabled_until: GuildIncidentsDataResponse["invites_disabled_until"], dms_disabled_until: GuildIncidentsDataResponse["dms_disabled_until"]): GuildIncidentsDataResponse { return { invites_disabled_until, dms_disabled_until }; }
export interface GuildIncomingWebhookResponse {
    application_id: null | SnowflakeType;
    avatar: string | null;
    channel_id: null | SnowflakeType;
    guild_id?: null | SnowflakeType;
    id: SnowflakeType;
    name: string;
    type: WebhookTypes.GUILD_INCOMING;
    user?: UserResponse;
    token?: string;
    url?: string;
}
export function GuildIncomingWebhookResponse(application_id: GuildIncomingWebhookResponse["application_id"], avatar: GuildIncomingWebhookResponse["avatar"], channel_id: GuildIncomingWebhookResponse["channel_id"], id: GuildIncomingWebhookResponse["id"], name: GuildIncomingWebhookResponse["name"], optional?: Omit<GuildIncomingWebhookResponse, "type" | "application_id" | "avatar" | "channel_id" | "id" | "name">): GuildIncomingWebhookResponse { return { type: WebhookTypes.GUILD_INCOMING, application_id, avatar, channel_id, id, name, ...optional }; }
export interface GuildInviteResponse {
    type: InviteTypes.GUILD;
    code: string;
    inviter?: UserResponse;
    max_age?: number;
    created_at?: string;
    expires_at: string | null;
    is_contact?: boolean;
    flags?: number;
    guild: InviteGuildResponse;
    guild_id: SnowflakeType;
    channel: InviteChannelResponse;
    target_type?: InviteTargetTypes;
    target_user?: UserResponse;
    target_application?: InviteApplicationResponse;
    guild_scheduled_event?: ScheduledEventResponse;
    uses?: number;
    max_uses?: number;
    temporary?: boolean;
    approximate_member_count?: number | null;
    approximate_presence_count?: number | null;
    is_nickname_changeable?: boolean;
    roles?: InviteGuildRoleResponse[] | null;
}
export function GuildInviteResponse(code: GuildInviteResponse["code"], expires_at: GuildInviteResponse["expires_at"], guild: GuildInviteResponse["guild"], guild_id: GuildInviteResponse["guild_id"], channel: GuildInviteResponse["channel"], optional?: Omit<GuildInviteResponse, "type" | "code" | "expires_at" | "guild" | "guild_id" | "channel">): GuildInviteResponse { return { type: InviteTypes.GUILD, code, expires_at, guild, guild_id, channel, ...optional }; }
export enum GuildJoinRequestApplicationStatus {
    /**
     * Applicant started but not yet submitted join request
     */
    STARTED = "STARTED",
    /**
     * Applicant submitted join request that is awaiting review
     */
    SUBMITTED = "SUBMITTED",
    /**
     * Join request rejected
     */
    REJECTED = "REJECTED",
    /**
     * Join request approved
     */
    APPROVED = "APPROVED"
}
export interface GuildJoinRequestResponse {
    id: SnowflakeType;
    created_at: string;
    reviewed_at: string | null;
    application_status: null | GuildJoinRequestApplicationStatus;
    /**
     * Reason request was rejected. Only set when application_status is REJECTED
     */
    rejection_reason: string | null;
    guild_id: SnowflakeType;
    user_id: SnowflakeType;
    user?: null | UserResponse;
    /**
     * Applicant's responses on join request form
     */
    form_responses?: (MultipleChoiceFormFieldResponse | ParagraphFormFieldResponse | TermsFormFieldResponse | TextInputFormFieldResponse)[] | null;
    actioned_by_user?: null | UserResponse;
}
export function GuildJoinRequestResponse(id: GuildJoinRequestResponse["id"], created_at: GuildJoinRequestResponse["created_at"], reviewed_at: GuildJoinRequestResponse["reviewed_at"], application_status: GuildJoinRequestResponse["application_status"], rejection_reason: GuildJoinRequestResponse["rejection_reason"], guild_id: GuildJoinRequestResponse["guild_id"], user_id: GuildJoinRequestResponse["user_id"], optional?: Omit<GuildJoinRequestResponse, "id" | "created_at" | "reviewed_at" | "application_status" | "rejection_reason" | "guild_id" | "user_id">): GuildJoinRequestResponse { return { id, created_at, reviewed_at, application_status, rejection_reason, guild_id, user_id, ...optional }; }
export interface GuildJoinRequestsListResponse {
    total?: number;
    guild_join_requests?: GuildJoinRequestResponse[];
}
export function GuildJoinRequestsListResponse(optional?: GuildJoinRequestsListResponse): GuildJoinRequestsListResponse { return { ...optional }; }
export enum GuildMFALevel {
    /**
     * Guild has no MFA/2FA requirement for moderation actions
     */
    NONE = 0,
    /**
     * Guild has a 2FA requirement for moderation actions
     */
    ELEVATED = 1
}
export interface GuildMemberResponse {
    avatar: string | null;
    avatar_decoration_data?: null | UserAvatarDecorationResponse;
    banner: string | null;
    communication_disabled_until: string | null;
    flags: number;
    joined_at: string;
    nick: string | null;
    pending: boolean;
    premium_since: string | null;
    roles: SnowflakeType[];
    collectibles?: null | UserCollectiblesResponse;
    user: UserResponse;
    mute: boolean;
    deaf: boolean;
}
export function GuildMemberResponse(avatar: GuildMemberResponse["avatar"], banner: GuildMemberResponse["banner"], communication_disabled_until: GuildMemberResponse["communication_disabled_until"], flags: GuildMemberResponse["flags"], joined_at: GuildMemberResponse["joined_at"], nick: GuildMemberResponse["nick"], pending: GuildMemberResponse["pending"], premium_since: GuildMemberResponse["premium_since"], roles: GuildMemberResponse["roles"], user: GuildMemberResponse["user"], mute: GuildMemberResponse["mute"], deaf: GuildMemberResponse["deaf"], optional?: Omit<GuildMemberResponse, "avatar" | "banner" | "communication_disabled_until" | "flags" | "joined_at" | "nick" | "pending" | "premium_since" | "roles" | "user" | "mute" | "deaf">): GuildMemberResponse { return { avatar, banner, communication_disabled_until, flags, joined_at, nick, pending, premium_since, roles, user, mute, deaf, ...optional }; }
export enum GuildMemberVerificationFormFieldType {
    /**
     * Field requiring applicant to acknowledge list of terms
     */
    TERMS = "TERMS",
    /**
     * Short text input field
     */
    TEXT_INPUT = "TEXT_INPUT",
    /**
     * Long-form text input field
     */
    PARAGRAPH = "PARAGRAPH",
    /**
     * Field where applicant selects one of many options
     */
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE"
}
export enum GuildNSFWContentLevel {
    DEFAULT = 0,
    EXPLICIT = 1,
    SAFE = 2,
    AGE_RESTRICTED = 3
}
export enum GuildOnboardingMode {
    /**
     * Only Default Channels considered in constraints
     */
    ONBOARDING_DEFAULT = 0,
    /**
     * Default Channels and Onboarding Prompts considered in constraints
     */
    ONBOARDING_ADVANCED = 1
}
export interface GuildOnboardingResponse {
    guild_id: SnowflakeType;
    prompts: OnboardingPromptResponse[];
    default_channel_ids: SnowflakeType[];
    enabled: boolean;
    mode: GuildOnboardingMode;
}
export function GuildOnboardingResponse(guild_id: GuildOnboardingResponse["guild_id"], prompts: GuildOnboardingResponse["prompts"], default_channel_ids: GuildOnboardingResponse["default_channel_ids"], enabled: GuildOnboardingResponse["enabled"], mode: GuildOnboardingResponse["mode"]): GuildOnboardingResponse { return { guild_id, prompts, default_channel_ids, enabled, mode }; }
export interface GuildPatchRequestPartial {
    name?: string;
    description?: string | null;
    region?: string | null;
    icon?: string | null;
    verification_level?: null | VerificationLevels;
    default_message_notifications?: null | UserNotificationSettings;
    explicit_content_filter?: null | GuildExplicitContentFilterTypes;
    preferred_locale?: null | AvailableLocalesEnum;
    afk_timeout?: null | AfkTimeouts;
    afk_channel_id?: null | SnowflakeType;
    system_channel_id?: null | SnowflakeType;
    splash?: string | null;
    banner?: string | null;
    system_channel_flags?: number | null;
    features?: (string | null)[] | null;
    discovery_splash?: string | null;
    home_header?: string | null;
    rules_channel_id?: null | SnowflakeType;
    safety_alerts_channel_id?: null | SnowflakeType;
    public_updates_channel_id?: null | SnowflakeType;
    premium_progress_bar_enabled?: boolean | null;
}
export function GuildPatchRequestPartial(optional?: GuildPatchRequestPartial): GuildPatchRequestPartial { return { ...optional }; }
export interface GuildPreviewResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string | null;
    home_header: string | null;
    splash: string | null;
    discovery_splash: string | null;
    features: GuildFeatures[];
    approximate_member_count: number;
    approximate_presence_count: number;
    emojis: EmojiResponse[];
    stickers: GuildStickerResponse[];
}
export function GuildPreviewResponse(id: GuildPreviewResponse["id"], name: GuildPreviewResponse["name"], icon: GuildPreviewResponse["icon"], description: GuildPreviewResponse["description"], home_header: GuildPreviewResponse["home_header"], splash: GuildPreviewResponse["splash"], discovery_splash: GuildPreviewResponse["discovery_splash"], features: GuildPreviewResponse["features"], approximate_member_count: GuildPreviewResponse["approximate_member_count"], approximate_presence_count: GuildPreviewResponse["approximate_presence_count"], emojis: GuildPreviewResponse["emojis"], stickers: GuildPreviewResponse["stickers"]): GuildPreviewResponse { return { id, name, icon, description, home_header, splash, discovery_splash, features, approximate_member_count, approximate_presence_count, emojis, stickers }; }
export interface GuildProductPurchaseResponse {
    listing_id: SnowflakeType;
    product_name: string;
}
export function GuildProductPurchaseResponse(listing_id: GuildProductPurchaseResponse["listing_id"], product_name: GuildProductPurchaseResponse["product_name"]): GuildProductPurchaseResponse { return { listing_id, product_name }; }
export interface GuildPruneResponse {
    pruned: number | null;
}
export function GuildPruneResponse(pruned: GuildPruneResponse["pruned"]): GuildPruneResponse { return { pruned }; }
export interface GuildResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string | null;
    home_header: string | null;
    splash: string | null;
    discovery_splash: string | null;
    features: GuildFeatures[];
    banner: string | null;
    owner_id: SnowflakeType;
    application_id: null | SnowflakeType;
    region: string;
    afk_channel_id: null | SnowflakeType;
    afk_timeout: AfkTimeouts;
    system_channel_id: null | SnowflakeType;
    system_channel_flags: number;
    widget_enabled: boolean;
    widget_channel_id: null | SnowflakeType;
    verification_level: VerificationLevels;
    roles: GuildRoleResponse[];
    default_message_notifications: UserNotificationSettings;
    mfa_level: GuildMFALevel;
    explicit_content_filter: GuildExplicitContentFilterTypes;
    max_presences: number | null;
    max_members: number;
    max_stage_video_channel_users: number;
    max_video_channel_users: number;
    vanity_url_code: string | null;
    premium_tier: PremiumGuildTiers;
    premium_subscription_count: number;
    preferred_locale: AvailableLocalesEnum;
    rules_channel_id: null | SnowflakeType;
    safety_alerts_channel_id: null | SnowflakeType;
    public_updates_channel_id: null | SnowflakeType;
    premium_progress_bar_enabled: boolean;
    premium_progress_bar_enabled_user_updated_at?: string | null;
    nsfw: boolean;
    nsfw_level: GuildNSFWContentLevel;
    emojis: EmojiResponse[];
    stickers: GuildStickerResponse[];
    incidents_data: null | GuildIncidentsDataResponse;
}
export function GuildResponse(id: GuildResponse["id"], name: GuildResponse["name"], icon: GuildResponse["icon"], description: GuildResponse["description"], home_header: GuildResponse["home_header"], splash: GuildResponse["splash"], discovery_splash: GuildResponse["discovery_splash"], features: GuildResponse["features"], banner: GuildResponse["banner"], owner_id: GuildResponse["owner_id"], application_id: GuildResponse["application_id"], region: GuildResponse["region"], afk_channel_id: GuildResponse["afk_channel_id"], afk_timeout: GuildResponse["afk_timeout"], system_channel_id: GuildResponse["system_channel_id"], system_channel_flags: GuildResponse["system_channel_flags"], widget_enabled: GuildResponse["widget_enabled"], widget_channel_id: GuildResponse["widget_channel_id"], verification_level: GuildResponse["verification_level"], roles: GuildResponse["roles"], default_message_notifications: GuildResponse["default_message_notifications"], mfa_level: GuildResponse["mfa_level"], explicit_content_filter: GuildResponse["explicit_content_filter"], max_presences: GuildResponse["max_presences"], max_members: GuildResponse["max_members"], max_stage_video_channel_users: GuildResponse["max_stage_video_channel_users"], max_video_channel_users: GuildResponse["max_video_channel_users"], vanity_url_code: GuildResponse["vanity_url_code"], premium_tier: GuildResponse["premium_tier"], premium_subscription_count: GuildResponse["premium_subscription_count"], preferred_locale: GuildResponse["preferred_locale"], rules_channel_id: GuildResponse["rules_channel_id"], safety_alerts_channel_id: GuildResponse["safety_alerts_channel_id"], public_updates_channel_id: GuildResponse["public_updates_channel_id"], premium_progress_bar_enabled: GuildResponse["premium_progress_bar_enabled"], nsfw: GuildResponse["nsfw"], nsfw_level: GuildResponse["nsfw_level"], emojis: GuildResponse["emojis"], stickers: GuildResponse["stickers"], incidents_data: GuildResponse["incidents_data"], optional?: Omit<GuildResponse, "id" | "name" | "icon" | "description" | "home_header" | "splash" | "discovery_splash" | "features" | "banner" | "owner_id" | "application_id" | "region" | "afk_channel_id" | "afk_timeout" | "system_channel_id" | "system_channel_flags" | "widget_enabled" | "widget_channel_id" | "verification_level" | "roles" | "default_message_notifications" | "mfa_level" | "explicit_content_filter" | "max_presences" | "max_members" | "max_stage_video_channel_users" | "max_video_channel_users" | "vanity_url_code" | "premium_tier" | "premium_subscription_count" | "preferred_locale" | "rules_channel_id" | "safety_alerts_channel_id" | "public_updates_channel_id" | "premium_progress_bar_enabled" | "nsfw" | "nsfw_level" | "emojis" | "stickers" | "incidents_data">): GuildResponse { return { id, name, icon, description, home_header, splash, discovery_splash, features, banner, owner_id, application_id, region, afk_channel_id, afk_timeout, system_channel_id, system_channel_flags, widget_enabled, widget_channel_id, verification_level, roles, default_message_notifications, mfa_level, explicit_content_filter, max_presences, max_members, max_stage_video_channel_users, max_video_channel_users, vanity_url_code, premium_tier, premium_subscription_count, preferred_locale, rules_channel_id, safety_alerts_channel_id, public_updates_channel_id, premium_progress_bar_enabled, nsfw, nsfw_level, emojis, stickers, incidents_data, ...optional }; }
export interface GuildRoleColorsResponse {
    primary_color: number;
    secondary_color: number | null;
    tertiary_color: number | null;
}
export function GuildRoleColorsResponse(primary_color: GuildRoleColorsResponse["primary_color"], secondary_color: GuildRoleColorsResponse["secondary_color"], tertiary_color: GuildRoleColorsResponse["tertiary_color"]): GuildRoleColorsResponse { return { primary_color, secondary_color, tertiary_color }; }
export interface GuildRoleResponse {
    id: SnowflakeType;
    name: string;
    description: string | null;
    permissions: string;
    position: number;
    color: number;
    colors: GuildRoleColorsResponse;
    hoist: boolean;
    managed: boolean;
    mentionable: boolean;
    icon: string | null;
    unicode_emoji: string | null;
    tags?: GuildRoleTagsResponse;
    flags: number;
}
export function GuildRoleResponse(id: GuildRoleResponse["id"], name: GuildRoleResponse["name"], description: GuildRoleResponse["description"], permissions: GuildRoleResponse["permissions"], position: GuildRoleResponse["position"], color: GuildRoleResponse["color"], colors: GuildRoleResponse["colors"], hoist: GuildRoleResponse["hoist"], managed: GuildRoleResponse["managed"], mentionable: GuildRoleResponse["mentionable"], icon: GuildRoleResponse["icon"], unicode_emoji: GuildRoleResponse["unicode_emoji"], flags: GuildRoleResponse["flags"], optional?: Omit<GuildRoleResponse, "id" | "name" | "description" | "permissions" | "position" | "color" | "colors" | "hoist" | "managed" | "mentionable" | "icon" | "unicode_emoji" | "flags">): GuildRoleResponse { return { id, name, description, permissions, position, color, colors, hoist, managed, mentionable, icon, unicode_emoji, flags, ...optional }; }
export interface GuildRoleTagsResponse {
    premium_subscriber?: null;
    bot_id?: SnowflakeType;
    integration_id?: SnowflakeType;
    subscription_listing_id?: SnowflakeType;
    available_for_purchase?: null;
    guild_connections?: null;
}
export function GuildRoleTagsResponse(optional?: GuildRoleTagsResponse): GuildRoleTagsResponse { return { ...optional }; }
export enum GuildScheduledEventEntityTypes {
    NONE = 0,
    STAGE_INSTANCE = 1,
    VOICE = 2,
    EXTERNAL = 3
}
export enum GuildScheduledEventPrivacyLevels {
    /**
     * the scheduled event is only accessible to guild members
     */
    GUILD_ONLY = 2
}
export enum GuildScheduledEventStatuses {
    SCHEDULED = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    CANCELED = 4
}
export interface GuildSearchResponse {
    messages: SearchMessageResponse[][];
    doing_deep_historical_index: boolean;
    total_results: number;
    threads?: ThreadResponse[] | null;
    members?: ThreadMemberResponse[] | null;
    documents_indexed?: number | null;
}
export function GuildSearchResponse(messages: GuildSearchResponse["messages"], doing_deep_historical_index: GuildSearchResponse["doing_deep_historical_index"], total_results: GuildSearchResponse["total_results"], optional?: Omit<GuildSearchResponse, "messages" | "doing_deep_historical_index" | "total_results">): GuildSearchResponse { return { messages, doing_deep_historical_index, total_results, ...optional }; }
export interface GuildStickerResponse {
    id: SnowflakeType;
    name: string;
    tags: string;
    type: StickerTypes.GUILD;
    format_type: null | StickerFormatTypes;
    description: string | null;
    available: boolean;
    guild_id: SnowflakeType;
    user?: UserResponse;
}
export function GuildStickerResponse(id: GuildStickerResponse["id"], name: GuildStickerResponse["name"], tags: GuildStickerResponse["tags"], format_type: GuildStickerResponse["format_type"], description: GuildStickerResponse["description"], available: GuildStickerResponse["available"], guild_id: GuildStickerResponse["guild_id"], optional?: Omit<GuildStickerResponse, "type" | "id" | "name" | "tags" | "format_type" | "description" | "available" | "guild_id">): GuildStickerResponse { return { type: StickerTypes.GUILD, id, name, tags, format_type, description, available, guild_id, ...optional }; }
export interface GuildSubscriptionIntegrationResponse {
    type: IntegrationTypes.GUILD_SUBSCRIPTION;
    name: string | null;
    account: AccountResponse;
    enabled: boolean;
    id: SnowflakeType;
}
export function GuildSubscriptionIntegrationResponse(name: GuildSubscriptionIntegrationResponse["name"], account: GuildSubscriptionIntegrationResponse["account"], enabled: GuildSubscriptionIntegrationResponse["enabled"], id: GuildSubscriptionIntegrationResponse["id"]): GuildSubscriptionIntegrationResponse { return { type: IntegrationTypes.GUILD_SUBSCRIPTION, name, account, enabled, id }; }
export interface GuildTemplateChannelResponse {
    id: number | null;
    type: ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_FORUM;
    name: string | null;
    position: number | null;
    topic: string | null;
    bitrate: number;
    user_limit: number;
    nsfw: boolean;
    rate_limit_per_user: number;
    parent_id: null | SnowflakeType;
    default_auto_archive_duration: null | ThreadAutoArchiveDuration;
    permission_overwrites: ChannelPermissionOverwriteResponse[];
    available_tags: GuildTemplateChannelTags[] | null;
    template: string;
    default_reaction_emoji: null | DefaultReactionEmojiResponse;
    default_thread_rate_limit_per_user: number | null;
    default_sort_order: null | ThreadSortOrder;
    default_forum_layout: null | ForumLayout;
    default_tag_setting: null | ThreadSearchTagSetting;
    icon_emoji: null | IconEmojiResponse;
    theme_color: number | null;
}
export function GuildTemplateChannelResponse(id: GuildTemplateChannelResponse["id"], type: GuildTemplateChannelResponse["type"], name: GuildTemplateChannelResponse["name"], position: GuildTemplateChannelResponse["position"], topic: GuildTemplateChannelResponse["topic"], bitrate: GuildTemplateChannelResponse["bitrate"], user_limit: GuildTemplateChannelResponse["user_limit"], nsfw: GuildTemplateChannelResponse["nsfw"], rate_limit_per_user: GuildTemplateChannelResponse["rate_limit_per_user"], parent_id: GuildTemplateChannelResponse["parent_id"], default_auto_archive_duration: GuildTemplateChannelResponse["default_auto_archive_duration"], permission_overwrites: GuildTemplateChannelResponse["permission_overwrites"], available_tags: GuildTemplateChannelResponse["available_tags"], template: GuildTemplateChannelResponse["template"], default_reaction_emoji: GuildTemplateChannelResponse["default_reaction_emoji"], default_thread_rate_limit_per_user: GuildTemplateChannelResponse["default_thread_rate_limit_per_user"], default_sort_order: GuildTemplateChannelResponse["default_sort_order"], default_forum_layout: GuildTemplateChannelResponse["default_forum_layout"], default_tag_setting: GuildTemplateChannelResponse["default_tag_setting"], icon_emoji: GuildTemplateChannelResponse["icon_emoji"], theme_color: GuildTemplateChannelResponse["theme_color"]): GuildTemplateChannelResponse { return { id, type, name, position, topic, bitrate, user_limit, nsfw, rate_limit_per_user, parent_id, default_auto_archive_duration, permission_overwrites, available_tags, template, default_reaction_emoji, default_thread_rate_limit_per_user, default_sort_order, default_forum_layout, default_tag_setting, icon_emoji, theme_color }; }
export interface GuildTemplateChannelTags {
    id: number | null;
    name: string;
    emoji_id: null | SnowflakeType;
    emoji_name: string | null;
    moderated: boolean | null;
}
export function GuildTemplateChannelTags(id: GuildTemplateChannelTags["id"], name: GuildTemplateChannelTags["name"], emoji_id: GuildTemplateChannelTags["emoji_id"], emoji_name: GuildTemplateChannelTags["emoji_name"], moderated: GuildTemplateChannelTags["moderated"]): GuildTemplateChannelTags { return { id, name, emoji_id, emoji_name, moderated }; }
export interface GuildTemplateResponse {
    code: string;
    name: string;
    description: string | null;
    usage_count: number;
    creator_id: SnowflakeType;
    creator: null | UserResponse;
    created_at: string;
    updated_at: string;
    source_guild_id: SnowflakeType;
    serialized_source_guild: GuildTemplateSnapshotResponse;
    is_dirty: boolean | null;
}
export function GuildTemplateResponse(code: GuildTemplateResponse["code"], name: GuildTemplateResponse["name"], description: GuildTemplateResponse["description"], usage_count: GuildTemplateResponse["usage_count"], creator_id: GuildTemplateResponse["creator_id"], creator: GuildTemplateResponse["creator"], created_at: GuildTemplateResponse["created_at"], updated_at: GuildTemplateResponse["updated_at"], source_guild_id: GuildTemplateResponse["source_guild_id"], serialized_source_guild: GuildTemplateResponse["serialized_source_guild"], is_dirty: GuildTemplateResponse["is_dirty"]): GuildTemplateResponse { return { code, name, description, usage_count, creator_id, creator, created_at, updated_at, source_guild_id, serialized_source_guild, is_dirty }; }
export interface GuildTemplateRoleColorsResponse {
    primary_color: number;
    secondary_color: number | null;
    tertiary_color: number | null;
}
export function GuildTemplateRoleColorsResponse(primary_color: GuildTemplateRoleColorsResponse["primary_color"], secondary_color: GuildTemplateRoleColorsResponse["secondary_color"], tertiary_color: GuildTemplateRoleColorsResponse["tertiary_color"]): GuildTemplateRoleColorsResponse { return { primary_color, secondary_color, tertiary_color }; }
export interface GuildTemplateRoleResponse {
    id: number;
    name: string;
    permissions: string;
    color: number;
    colors: null | GuildTemplateRoleColorsResponse;
    hoist: boolean;
    mentionable: boolean;
    icon: string | null;
    unicode_emoji: string | null;
}
export function GuildTemplateRoleResponse(id: GuildTemplateRoleResponse["id"], name: GuildTemplateRoleResponse["name"], permissions: GuildTemplateRoleResponse["permissions"], color: GuildTemplateRoleResponse["color"], colors: GuildTemplateRoleResponse["colors"], hoist: GuildTemplateRoleResponse["hoist"], mentionable: GuildTemplateRoleResponse["mentionable"], icon: GuildTemplateRoleResponse["icon"], unicode_emoji: GuildTemplateRoleResponse["unicode_emoji"]): GuildTemplateRoleResponse { return { id, name, permissions, color, colors, hoist, mentionable, icon, unicode_emoji }; }
export interface GuildTemplateSnapshotResponse {
    name: string;
    description: string | null;
    region: string | null;
    verification_level: VerificationLevels;
    default_message_notifications: UserNotificationSettings;
    explicit_content_filter: GuildExplicitContentFilterTypes;
    preferred_locale: AvailableLocalesEnum;
    afk_channel_id: null | SnowflakeType;
    afk_timeout: AfkTimeouts;
    system_channel_id: null | SnowflakeType;
    system_channel_flags: number;
    roles: GuildTemplateRoleResponse[];
    channels: GuildTemplateChannelResponse[];
}
export function GuildTemplateSnapshotResponse(name: GuildTemplateSnapshotResponse["name"], description: GuildTemplateSnapshotResponse["description"], region: GuildTemplateSnapshotResponse["region"], verification_level: GuildTemplateSnapshotResponse["verification_level"], default_message_notifications: GuildTemplateSnapshotResponse["default_message_notifications"], explicit_content_filter: GuildTemplateSnapshotResponse["explicit_content_filter"], preferred_locale: GuildTemplateSnapshotResponse["preferred_locale"], afk_channel_id: GuildTemplateSnapshotResponse["afk_channel_id"], afk_timeout: GuildTemplateSnapshotResponse["afk_timeout"], system_channel_id: GuildTemplateSnapshotResponse["system_channel_id"], system_channel_flags: GuildTemplateSnapshotResponse["system_channel_flags"], roles: GuildTemplateSnapshotResponse["roles"], channels: GuildTemplateSnapshotResponse["channels"]): GuildTemplateSnapshotResponse { return { name, description, region, verification_level, default_message_notifications, explicit_content_filter, preferred_locale, afk_channel_id, afk_timeout, system_channel_id, system_channel_flags, roles, channels }; }
export interface GuildWelcomeChannel {
    channel_id: SnowflakeType;
    description: string;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
}
export function GuildWelcomeChannel(channel_id: GuildWelcomeChannel["channel_id"], description: GuildWelcomeChannel["description"], optional?: Omit<GuildWelcomeChannel, "channel_id" | "description">): GuildWelcomeChannel { return { channel_id, description, ...optional }; }
export interface GuildWelcomeScreenChannelResponse {
    channel_id: SnowflakeType;
    description: string;
    emoji_id: null | SnowflakeType;
    emoji_name: string | null;
}
export function GuildWelcomeScreenChannelResponse(channel_id: GuildWelcomeScreenChannelResponse["channel_id"], description: GuildWelcomeScreenChannelResponse["description"], emoji_id: GuildWelcomeScreenChannelResponse["emoji_id"], emoji_name: GuildWelcomeScreenChannelResponse["emoji_name"]): GuildWelcomeScreenChannelResponse { return { channel_id, description, emoji_id, emoji_name }; }
export interface GuildWelcomeScreenResponse {
    description: string | null;
    welcome_channels: GuildWelcomeScreenChannelResponse[];
}
export function GuildWelcomeScreenResponse(description: GuildWelcomeScreenResponse["description"], welcome_channels: GuildWelcomeScreenResponse["welcome_channels"]): GuildWelcomeScreenResponse { return { description, welcome_channels }; }
export interface GuildWithCountsResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string | null;
    home_header: string | null;
    splash: string | null;
    discovery_splash: string | null;
    features: GuildFeatures[];
    banner: string | null;
    owner_id: SnowflakeType;
    application_id: null | SnowflakeType;
    region: string;
    afk_channel_id: null | SnowflakeType;
    afk_timeout: AfkTimeouts;
    system_channel_id: null | SnowflakeType;
    system_channel_flags: number;
    widget_enabled: boolean;
    widget_channel_id: null | SnowflakeType;
    verification_level: VerificationLevels;
    roles: GuildRoleResponse[];
    default_message_notifications: UserNotificationSettings;
    mfa_level: GuildMFALevel;
    explicit_content_filter: GuildExplicitContentFilterTypes;
    max_presences: number | null;
    max_members: number;
    max_stage_video_channel_users: number;
    max_video_channel_users: number;
    vanity_url_code: string | null;
    premium_tier: PremiumGuildTiers;
    premium_subscription_count: number;
    preferred_locale: AvailableLocalesEnum;
    rules_channel_id: null | SnowflakeType;
    safety_alerts_channel_id: null | SnowflakeType;
    public_updates_channel_id: null | SnowflakeType;
    premium_progress_bar_enabled: boolean;
    premium_progress_bar_enabled_user_updated_at?: string | null;
    nsfw: boolean;
    nsfw_level: GuildNSFWContentLevel;
    emojis: EmojiResponse[];
    stickers: GuildStickerResponse[];
    incidents_data: null | GuildIncidentsDataResponse;
    approximate_member_count?: number | null;
    approximate_presence_count?: number | null;
}
export function GuildWithCountsResponse(id: GuildWithCountsResponse["id"], name: GuildWithCountsResponse["name"], icon: GuildWithCountsResponse["icon"], description: GuildWithCountsResponse["description"], home_header: GuildWithCountsResponse["home_header"], splash: GuildWithCountsResponse["splash"], discovery_splash: GuildWithCountsResponse["discovery_splash"], features: GuildWithCountsResponse["features"], banner: GuildWithCountsResponse["banner"], owner_id: GuildWithCountsResponse["owner_id"], application_id: GuildWithCountsResponse["application_id"], region: GuildWithCountsResponse["region"], afk_channel_id: GuildWithCountsResponse["afk_channel_id"], afk_timeout: GuildWithCountsResponse["afk_timeout"], system_channel_id: GuildWithCountsResponse["system_channel_id"], system_channel_flags: GuildWithCountsResponse["system_channel_flags"], widget_enabled: GuildWithCountsResponse["widget_enabled"], widget_channel_id: GuildWithCountsResponse["widget_channel_id"], verification_level: GuildWithCountsResponse["verification_level"], roles: GuildWithCountsResponse["roles"], default_message_notifications: GuildWithCountsResponse["default_message_notifications"], mfa_level: GuildWithCountsResponse["mfa_level"], explicit_content_filter: GuildWithCountsResponse["explicit_content_filter"], max_presences: GuildWithCountsResponse["max_presences"], max_members: GuildWithCountsResponse["max_members"], max_stage_video_channel_users: GuildWithCountsResponse["max_stage_video_channel_users"], max_video_channel_users: GuildWithCountsResponse["max_video_channel_users"], vanity_url_code: GuildWithCountsResponse["vanity_url_code"], premium_tier: GuildWithCountsResponse["premium_tier"], premium_subscription_count: GuildWithCountsResponse["premium_subscription_count"], preferred_locale: GuildWithCountsResponse["preferred_locale"], rules_channel_id: GuildWithCountsResponse["rules_channel_id"], safety_alerts_channel_id: GuildWithCountsResponse["safety_alerts_channel_id"], public_updates_channel_id: GuildWithCountsResponse["public_updates_channel_id"], premium_progress_bar_enabled: GuildWithCountsResponse["premium_progress_bar_enabled"], nsfw: GuildWithCountsResponse["nsfw"], nsfw_level: GuildWithCountsResponse["nsfw_level"], emojis: GuildWithCountsResponse["emojis"], stickers: GuildWithCountsResponse["stickers"], incidents_data: GuildWithCountsResponse["incidents_data"], optional?: Omit<GuildWithCountsResponse, "id" | "name" | "icon" | "description" | "home_header" | "splash" | "discovery_splash" | "features" | "banner" | "owner_id" | "application_id" | "region" | "afk_channel_id" | "afk_timeout" | "system_channel_id" | "system_channel_flags" | "widget_enabled" | "widget_channel_id" | "verification_level" | "roles" | "default_message_notifications" | "mfa_level" | "explicit_content_filter" | "max_presences" | "max_members" | "max_stage_video_channel_users" | "max_video_channel_users" | "vanity_url_code" | "premium_tier" | "premium_subscription_count" | "preferred_locale" | "rules_channel_id" | "safety_alerts_channel_id" | "public_updates_channel_id" | "premium_progress_bar_enabled" | "nsfw" | "nsfw_level" | "emojis" | "stickers" | "incidents_data">): GuildWithCountsResponse { return { id, name, icon, description, home_header, splash, discovery_splash, features, banner, owner_id, application_id, region, afk_channel_id, afk_timeout, system_channel_id, system_channel_flags, widget_enabled, widget_channel_id, verification_level, roles, default_message_notifications, mfa_level, explicit_content_filter, max_presences, max_members, max_stage_video_channel_users, max_video_channel_users, vanity_url_code, premium_tier, premium_subscription_count, preferred_locale, rules_channel_id, safety_alerts_channel_id, public_updates_channel_id, premium_progress_bar_enabled, nsfw, nsfw_level, emojis, stickers, incidents_data, ...optional }; }
export enum HasOption {
    LINK = "link",
    EMBED = "embed",
    FILE = "file",
    IMAGE = "image",
    VIDEO = "video",
    SOUND = "sound",
    STICKER = "sticker",
    POLL = "poll",
    SNAPSHOT = "snapshot",
    NO_LINK = "-link",
    NO_EMBED = "-embed",
    NO_FILE = "-file",
    NO_IMAGE = "-image",
    NO_VIDEO = "-video",
    NO_SOUND = "-sound",
    NO_STICKER = "-sticker",
    NO_POLL = "-poll",
    NO_SNAPSHOT = "-snapshot"
}
export interface IconEmojiResponse {
    [key: string]: never;
}
export function IconEmojiResponse(): IconEmojiResponse { return {}; }
export interface IncomingWebhookInteractionRequest {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    attachments?: MessageAttachmentRequest[] | null;
    poll?: null | PollCreateRequest;
    tts?: boolean | null;
    flags?: number | null;
}
export function IncomingWebhookInteractionRequest(optional?: IncomingWebhookInteractionRequest): IncomingWebhookInteractionRequest { return { ...optional }; }
export interface IncomingWebhookRequestPartial {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    attachments?: MessageAttachmentRequest[] | null;
    poll?: null | PollCreateRequest;
    tts?: boolean | null;
    flags?: number | null;
    username?: string | null;
    avatar_url?: string | null;
    thread_name?: string | null;
    applied_tags?: SnowflakeType[] | null;
}
export function IncomingWebhookRequestPartial(optional?: IncomingWebhookRequestPartial): IncomingWebhookRequestPartial { return { ...optional }; }
export interface IncomingWebhookUpdateForInteractionCallbackRequestPartial {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    attachments?: MessageAttachmentRequest[] | null;
    flags?: number | null;
}
export function IncomingWebhookUpdateForInteractionCallbackRequestPartial(optional?: IncomingWebhookUpdateForInteractionCallbackRequestPartial): IncomingWebhookUpdateForInteractionCallbackRequestPartial { return { ...optional }; }
export interface IncomingWebhookUpdateRequestPartial {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    attachments?: MessageAttachmentRequest[] | null;
    poll?: null | PollCreateRequest;
    flags?: number | null;
}
export function IncomingWebhookUpdateRequestPartial(optional?: IncomingWebhookUpdateRequestPartial): IncomingWebhookUpdateRequestPartial { return { ...optional }; }
export type Int53Type = number;
export interface IntegrationApplicationResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string;
    type: null | ApplicationTypes;
    cover_image?: string;
    primary_sku_id?: SnowflakeType;
    bot?: UserResponse;
}
export function IntegrationApplicationResponse(id: IntegrationApplicationResponse["id"], name: IntegrationApplicationResponse["name"], icon: IntegrationApplicationResponse["icon"], description: IntegrationApplicationResponse["description"], type: IntegrationApplicationResponse["type"], optional?: Omit<IntegrationApplicationResponse, "id" | "name" | "icon" | "description" | "type">): IntegrationApplicationResponse { return { id, name, icon, description, type, ...optional }; }
export enum IntegrationExpireBehaviorTypes {
    /**
     * Remove role
     */
    REMOVE_ROLE = 0,
    /**
     * Kick
     */
    KICK = 1
}
export enum IntegrationExpireGracePeriodTypes {
    /**
     * 1 day
     */
    ONE_DAY = 1,
    /**
     * 3 days
     */
    THREE_DAYS = 3,
    /**
     * 7 days
     */
    SEVEN_DAYS = 7,
    /**
     * 14 days
     */
    FOURTEEN_DAYS = 14,
    /**
     * 30 days
     */
    THIRTY_DAYS = 30
}
export enum IntegrationTypes {
    DISCORD = "discord",
    TWITCH = "twitch",
    YOUTUBE = "youtube",
    GUILD_SUBSCRIPTION = "guild_subscription"
}
export interface InteractionApplicationCommandAutocompleteCallbackIntegerData {
    choices?: (null | ApplicationCommandOptionIntegerChoice)[] | null;
}
export function InteractionApplicationCommandAutocompleteCallbackIntegerData(optional?: InteractionApplicationCommandAutocompleteCallbackIntegerData): InteractionApplicationCommandAutocompleteCallbackIntegerData { return { ...optional }; }
export interface InteractionApplicationCommandAutocompleteCallbackNumberData {
    choices?: (null | ApplicationCommandOptionNumberChoice)[] | null;
}
export function InteractionApplicationCommandAutocompleteCallbackNumberData(optional?: InteractionApplicationCommandAutocompleteCallbackNumberData): InteractionApplicationCommandAutocompleteCallbackNumberData { return { ...optional }; }
export interface InteractionApplicationCommandAutocompleteCallbackStringData {
    choices?: (null | ApplicationCommandOptionStringChoice)[] | null;
}
export function InteractionApplicationCommandAutocompleteCallbackStringData(optional?: InteractionApplicationCommandAutocompleteCallbackStringData): InteractionApplicationCommandAutocompleteCallbackStringData { return { ...optional }; }
export interface InteractionCallbackResponse {
    interaction: InteractionResponse;
    resource?: CreateMessageInteractionCallbackResponse | LaunchActivityInteractionCallbackResponse | UpdateMessageInteractionCallbackResponse;
}
export function InteractionCallbackResponse(interaction: InteractionCallbackResponse["interaction"], optional?: Omit<InteractionCallbackResponse, "interaction">): InteractionCallbackResponse { return { interaction, ...optional }; }
export enum InteractionCallbackTypes {
    PONG = 1,
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
    DEFERRED_UPDATE_MESSAGE = 6,
    UPDATE_MESSAGE = 7,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
    MODAL = 9,
    LAUNCH_ACTIVITY = 12,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY = 13
}
export enum InteractionContextType {
    /**
     * This command can be used within a Guild.
     */
    GUILD = 0,
    /**
     * This command can be used within a DM with this application's bot.
     */
    BOT_DM = 1,
    /**
     * This command can be used within DMs and Group DMs with users.
     */
    PRIVATE_CHANNEL = 2
}
export interface InteractionResponse {
    id: SnowflakeType;
    type: InteractionTypes;
    response_message_id?: SnowflakeType;
    response_message_loading?: boolean;
    response_message_ephemeral?: boolean;
    channel_id?: SnowflakeType;
    guild_id?: SnowflakeType;
}
export function InteractionResponse(id: InteractionResponse["id"], type: InteractionResponse["type"], optional?: Omit<InteractionResponse, "id" | "type">): InteractionResponse { return { id, type, ...optional }; }
export enum InteractionTypes {
    /**
     * Sent by Discord to validate your application's interaction handler
     */
    PING = 1,
    /**
     * Sent when a user uses an application command
     */
    APPLICATION_COMMAND = 2,
    /**
     * Sent when a user interacts with a message component previously sent by your application
     */
    MESSAGE_COMPONENT = 3,
    /**
     * Sent when a user is filling in an autocomplete option in a chat command
     */
    APPLICATION_COMMAND_AUTOCOMPLETE = 4,
    /**
     * Sent when a user submits a modal previously sent by your application
     */
    MODAL_SUBMIT = 5,
    /**
     * Sent when Discord is checking if a user can purchase a Social Layer SKU
     */
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY = 6
}
export interface InviteApplicationResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string;
    type: null | ApplicationTypes;
    cover_image?: string;
    primary_sku_id?: SnowflakeType;
    bot?: UserResponse;
    slug?: string;
    guild_id?: SnowflakeType;
    rpc_origins?: string[];
    bot_public?: boolean;
    bot_require_code_grant?: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    custom_install_url?: string;
    install_params?: ApplicationOAuth2InstallParamsResponse;
    integration_types_config?: {
        [key: string]: ApplicationIntegrationTypeConfigurationResponse;
    };
    verify_key: string;
    flags: number;
    flags_new: string;
    max_participants?: number | null;
    tags?: string[];
}
export function InviteApplicationResponse(id: InviteApplicationResponse["id"], name: InviteApplicationResponse["name"], icon: InviteApplicationResponse["icon"], description: InviteApplicationResponse["description"], type: InviteApplicationResponse["type"], verify_key: InviteApplicationResponse["verify_key"], flags: InviteApplicationResponse["flags"], flags_new: InviteApplicationResponse["flags_new"], optional?: Omit<InviteApplicationResponse, "id" | "name" | "icon" | "description" | "type" | "verify_key" | "flags" | "flags_new">): InviteApplicationResponse { return { id, name, icon, description, type, verify_key, flags, flags_new, ...optional }; }
export interface InviteChannelRecipientResponse {
    username: string;
}
export function InviteChannelRecipientResponse(username: InviteChannelRecipientResponse["username"]): InviteChannelRecipientResponse { return { username }; }
export interface InviteChannelResponse {
    id: SnowflakeType;
    type: ChannelTypes;
    name: string | null;
    icon?: string;
    recipients?: InviteChannelRecipientResponse[];
}
export function InviteChannelResponse(id: InviteChannelResponse["id"], type: InviteChannelResponse["type"], name: InviteChannelResponse["name"], optional?: Omit<InviteChannelResponse, "id" | "type" | "name">): InviteChannelResponse { return { id, type, name, ...optional }; }
export interface InviteGuildResponse {
    id: SnowflakeType;
    name: string;
    splash: string | null;
    banner: string | null;
    description: string | null;
    icon: string | null;
    features: GuildFeatures[];
    verification_level: null | VerificationLevels;
    vanity_url_code: string | null;
    nsfw_level: null | GuildNSFWContentLevel;
    nsfw: boolean | null;
    premium_subscription_count: number;
}
export function InviteGuildResponse(id: InviteGuildResponse["id"], name: InviteGuildResponse["name"], splash: InviteGuildResponse["splash"], banner: InviteGuildResponse["banner"], description: InviteGuildResponse["description"], icon: InviteGuildResponse["icon"], features: InviteGuildResponse["features"], verification_level: InviteGuildResponse["verification_level"], vanity_url_code: InviteGuildResponse["vanity_url_code"], nsfw_level: InviteGuildResponse["nsfw_level"], nsfw: InviteGuildResponse["nsfw"], premium_subscription_count: InviteGuildResponse["premium_subscription_count"]): InviteGuildResponse { return { id, name, splash, banner, description, icon, features, verification_level, vanity_url_code, nsfw_level, nsfw, premium_subscription_count }; }
export interface InviteGuildRoleResponse {
    id: SnowflakeType;
    name: string;
    position: number;
    color: number;
    colors: GuildRoleColorsResponse;
    icon: string | null;
    unicode_emoji: string | null;
    permissions?: string;
}
export function InviteGuildRoleResponse(id: InviteGuildRoleResponse["id"], name: InviteGuildRoleResponse["name"], position: InviteGuildRoleResponse["position"], color: InviteGuildRoleResponse["color"], colors: InviteGuildRoleResponse["colors"], icon: InviteGuildRoleResponse["icon"], unicode_emoji: InviteGuildRoleResponse["unicode_emoji"], optional?: Omit<InviteGuildRoleResponse, "id" | "name" | "position" | "color" | "colors" | "icon" | "unicode_emoji">): InviteGuildRoleResponse { return { id, name, position, color, colors, icon, unicode_emoji, ...optional }; }
export enum InviteTargetTypes {
    STREAM = 1,
    EMBEDDED_APPLICATION = 2,
    ROLE_SUBSCRIPTIONS_PURCHASE = 3
}
export enum InviteTypes {
    GUILD = 0,
    GROUP_DM = 1,
    FRIEND = 2
}
export interface KeywordRuleResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    creator_id: SnowflakeType;
    name: string;
    event_type: AutomodEventType;
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    trigger_type: AutomodTriggerType.KEYWORD;
    enabled: boolean;
    exempt_roles: SnowflakeType[];
    exempt_channels: SnowflakeType[];
    trigger_metadata: KeywordTriggerMetadataResponse;
}
export function KeywordRuleResponse(id: KeywordRuleResponse["id"], guild_id: KeywordRuleResponse["guild_id"], creator_id: KeywordRuleResponse["creator_id"], name: KeywordRuleResponse["name"], event_type: KeywordRuleResponse["event_type"], actions: KeywordRuleResponse["actions"], enabled: KeywordRuleResponse["enabled"], exempt_roles: KeywordRuleResponse["exempt_roles"], exempt_channels: KeywordRuleResponse["exempt_channels"], trigger_metadata: KeywordRuleResponse["trigger_metadata"]): KeywordRuleResponse { return { trigger_type: AutomodTriggerType.KEYWORD, id, guild_id, creator_id, name, event_type, actions, enabled, exempt_roles, exempt_channels, trigger_metadata }; }
export interface KeywordTriggerMetadata {
    keyword_filter?: string[] | null;
    regex_patterns?: string[] | null;
    allow_list?: string[] | null;
}
export function KeywordTriggerMetadata(optional?: KeywordTriggerMetadata): KeywordTriggerMetadata { return { ...optional }; }
export interface KeywordTriggerMetadataResponse {
    keyword_filter: string[];
    regex_patterns: string[];
    allow_list: string[];
}
export function KeywordTriggerMetadataResponse(keyword_filter: KeywordTriggerMetadataResponse["keyword_filter"], regex_patterns: KeywordTriggerMetadataResponse["regex_patterns"], allow_list: KeywordTriggerMetadataResponse["allow_list"]): KeywordTriggerMetadataResponse { return { keyword_filter, regex_patterns, allow_list }; }
export interface KeywordUpsertRequest {
    name: string;
    event_type: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type: AutomodTriggerType.KEYWORD;
    trigger_metadata?: null | KeywordTriggerMetadata;
}
export function KeywordUpsertRequest(name: KeywordUpsertRequest["name"], event_type: KeywordUpsertRequest["event_type"], optional?: Omit<KeywordUpsertRequest, "trigger_type" | "name" | "event_type">): KeywordUpsertRequest { return { trigger_type: AutomodTriggerType.KEYWORD, name, event_type, ...optional }; }
export interface KeywordUpsertRequestPartial {
    name?: string;
    event_type?: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type?: AutomodTriggerType.KEYWORD;
    trigger_metadata?: null | KeywordTriggerMetadata;
}
export function KeywordUpsertRequestPartial(optional?: KeywordUpsertRequestPartial): KeywordUpsertRequestPartial { return { ...optional }; }
export interface LabelComponentForModalRequest {
    type: MessageComponentTypes.LABEL;
    id?: number | null;
    label: string;
    description?: string | null;
    component: ChannelSelectComponentForModalRequest | CheckboxComponentForModalRequest | CheckboxGroupComponentForModalRequest | FileUploadComponentForModalRequest | MentionableSelectComponentForModalRequest | RadioGroupComponentForModalRequest | RoleSelectComponentForModalRequest | StringSelectComponentForModalRequest | TextInputComponentForModalRequest | UserSelectComponentForModalRequest;
}
export function LabelComponentForModalRequest(label: LabelComponentForModalRequest["label"], component: LabelComponentForModalRequest["component"], optional?: Omit<LabelComponentForModalRequest, "type" | "label" | "component">): LabelComponentForModalRequest { return { type: MessageComponentTypes.LABEL, label, component, ...optional }; }
export interface LaunchActivityInteractionCallbackRequest {
    type: InteractionCallbackTypes.LAUNCH_ACTIVITY;
}
export function LaunchActivityInteractionCallbackRequest(): LaunchActivityInteractionCallbackRequest { return { type: InteractionCallbackTypes.LAUNCH_ACTIVITY }; }
export interface LaunchActivityInteractionCallbackResponse {
    type: InteractionCallbackTypes.LAUNCH_ACTIVITY;
}
export function LaunchActivityInteractionCallbackResponse(): LaunchActivityInteractionCallbackResponse { return { type: InteractionCallbackTypes.LAUNCH_ACTIVITY }; }
export interface ListApplicationEmojisResponse {
    items: EmojiResponse[];
}
export function ListApplicationEmojisResponse(items: ListApplicationEmojisResponse["items"]): ListApplicationEmojisResponse { return { items }; }
export interface ListGuildSoundboardSoundsResponse {
    items: SoundboardSoundResponse[];
}
export function ListGuildSoundboardSoundsResponse(items: ListGuildSoundboardSoundsResponse["items"]): ListGuildSoundboardSoundsResponse { return { items }; }
export interface LobbyGuildInviteResponse {
    code: string;
}
export function LobbyGuildInviteResponse(code: LobbyGuildInviteResponse["code"]): LobbyGuildInviteResponse { return { code }; }
export interface LobbyMemberRequest {
    id: SnowflakeType;
    metadata?: {
        [key: string]: string;
    } | null;
    flags?: null | 1;
}
export function LobbyMemberRequest(id: LobbyMemberRequest["id"], optional?: Omit<LobbyMemberRequest, "id">): LobbyMemberRequest { return { id, ...optional }; }
export interface LobbyMemberResponse {
    id: SnowflakeType;
    metadata: {
        [key: string]: string;
    } | null;
    flags: number;
}
export function LobbyMemberResponse(id: LobbyMemberResponse["id"], metadata: LobbyMemberResponse["metadata"], flags: LobbyMemberResponse["flags"]): LobbyMemberResponse { return { id, metadata, flags }; }
export interface LobbyMessageResponse {
    id: SnowflakeType;
    type: MessageType;
    content: string;
    lobby_id: SnowflakeType;
    channel_id: SnowflakeType;
    author: UserResponse;
    metadata?: {
        [key: string]: string;
    };
    moderation_metadata?: {
        [key: string]: string;
    };
    flags: number;
    application_id?: SnowflakeType;
}
export function LobbyMessageResponse(id: LobbyMessageResponse["id"], type: LobbyMessageResponse["type"], content: LobbyMessageResponse["content"], lobby_id: LobbyMessageResponse["lobby_id"], channel_id: LobbyMessageResponse["channel_id"], author: LobbyMessageResponse["author"], flags: LobbyMessageResponse["flags"], optional?: Omit<LobbyMessageResponse, "id" | "type" | "content" | "lobby_id" | "channel_id" | "author" | "flags">): LobbyMessageResponse { return { id, type, content, lobby_id, channel_id, author, flags, ...optional }; }
export interface LobbyResponse {
    id: SnowflakeType;
    application_id: SnowflakeType;
    metadata: {
        [key: string]: string;
    } | null;
    members: LobbyMemberResponse[];
    linked_channel?: GuildChannelResponse;
    flags: UInt32Type;
    override_event_webhooks_url?: string | null;
}
export function LobbyResponse(id: LobbyResponse["id"], application_id: LobbyResponse["application_id"], metadata: LobbyResponse["metadata"], members: LobbyResponse["members"], flags: LobbyResponse["flags"], optional?: Omit<LobbyResponse, "id" | "application_id" | "metadata" | "members" | "flags">): LobbyResponse { return { id, application_id, metadata, members, flags, ...optional }; }
export interface MLSpamRuleResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    creator_id: SnowflakeType;
    name: string;
    event_type: AutomodEventType;
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    trigger_type: AutomodTriggerType.ML_SPAM;
    enabled: boolean;
    exempt_roles: SnowflakeType[];
    exempt_channels: SnowflakeType[];
    trigger_metadata: MLSpamTriggerMetadataResponse;
}
export function MLSpamRuleResponse(id: MLSpamRuleResponse["id"], guild_id: MLSpamRuleResponse["guild_id"], creator_id: MLSpamRuleResponse["creator_id"], name: MLSpamRuleResponse["name"], event_type: MLSpamRuleResponse["event_type"], actions: MLSpamRuleResponse["actions"], enabled: MLSpamRuleResponse["enabled"], exempt_roles: MLSpamRuleResponse["exempt_roles"], exempt_channels: MLSpamRuleResponse["exempt_channels"], trigger_metadata: MLSpamRuleResponse["trigger_metadata"]): MLSpamRuleResponse { return { trigger_type: AutomodTriggerType.ML_SPAM, id, guild_id, creator_id, name, event_type, actions, enabled, exempt_roles, exempt_channels, trigger_metadata }; }
export interface MLSpamTriggerMetadata {
    [key: string]: never;
}
export function MLSpamTriggerMetadata(): MLSpamTriggerMetadata { return {}; }
export interface MLSpamTriggerMetadataResponse {
    [key: string]: never;
}
export function MLSpamTriggerMetadataResponse(): MLSpamTriggerMetadataResponse { return {}; }
export interface MLSpamUpsertRequest {
    name: string;
    event_type: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type: AutomodTriggerType.ML_SPAM;
    trigger_metadata?: null | MLSpamTriggerMetadata;
}
export function MLSpamUpsertRequest(name: MLSpamUpsertRequest["name"], event_type: MLSpamUpsertRequest["event_type"], optional?: Omit<MLSpamUpsertRequest, "trigger_type" | "name" | "event_type">): MLSpamUpsertRequest { return { trigger_type: AutomodTriggerType.ML_SPAM, name, event_type, ...optional }; }
export interface MLSpamUpsertRequestPartial {
    name?: string;
    event_type?: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type?: AutomodTriggerType.ML_SPAM;
    trigger_metadata?: null | MLSpamTriggerMetadata;
}
export function MLSpamUpsertRequestPartial(optional?: MLSpamUpsertRequestPartial): MLSpamUpsertRequestPartial { return { ...optional }; }
export interface MediaGalleryComponentForMessageRequest {
    type: MessageComponentTypes.MEDIA_GALLERY;
    id?: number | null;
    items: MediaGalleryItemRequest[];
}
export function MediaGalleryComponentForMessageRequest(items: MediaGalleryComponentForMessageRequest["items"], optional?: Omit<MediaGalleryComponentForMessageRequest, "type" | "items">): MediaGalleryComponentForMessageRequest { return { type: MessageComponentTypes.MEDIA_GALLERY, items, ...optional }; }
export interface MediaGalleryComponentResponse {
    type: MessageComponentTypes.MEDIA_GALLERY;
    id: number;
    items: MediaGalleryItemResponse[];
}
export function MediaGalleryComponentResponse(id: MediaGalleryComponentResponse["id"], items: MediaGalleryComponentResponse["items"]): MediaGalleryComponentResponse { return { type: MessageComponentTypes.MEDIA_GALLERY, id, items }; }
export interface MediaGalleryItemRequest {
    description?: string | null;
    spoiler?: boolean | null;
    media: UnfurledMediaRequest;
}
export function MediaGalleryItemRequest(media: MediaGalleryItemRequest["media"], optional?: Omit<MediaGalleryItemRequest, "media">): MediaGalleryItemRequest { return { media, ...optional }; }
export interface MediaGalleryItemResponse {
    media: UnfurledMediaResponse;
    description: string | null;
    spoiler: boolean;
}
export function MediaGalleryItemResponse(media: MediaGalleryItemResponse["media"], description: MediaGalleryItemResponse["description"], spoiler: MediaGalleryItemResponse["spoiler"]): MediaGalleryItemResponse { return { media, description, spoiler }; }
export interface MentionSpamRuleResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    creator_id: SnowflakeType;
    name: string;
    event_type: AutomodEventType;
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    trigger_type: AutomodTriggerType.MENTION_SPAM;
    enabled: boolean;
    exempt_roles: SnowflakeType[];
    exempt_channels: SnowflakeType[];
    trigger_metadata: MentionSpamTriggerMetadataResponse;
}
export function MentionSpamRuleResponse(id: MentionSpamRuleResponse["id"], guild_id: MentionSpamRuleResponse["guild_id"], creator_id: MentionSpamRuleResponse["creator_id"], name: MentionSpamRuleResponse["name"], event_type: MentionSpamRuleResponse["event_type"], actions: MentionSpamRuleResponse["actions"], enabled: MentionSpamRuleResponse["enabled"], exempt_roles: MentionSpamRuleResponse["exempt_roles"], exempt_channels: MentionSpamRuleResponse["exempt_channels"], trigger_metadata: MentionSpamRuleResponse["trigger_metadata"]): MentionSpamRuleResponse { return { trigger_type: AutomodTriggerType.MENTION_SPAM, id, guild_id, creator_id, name, event_type, actions, enabled, exempt_roles, exempt_channels, trigger_metadata }; }
export interface MentionSpamTriggerMetadata {
    mention_total_limit?: number | null;
    mention_raid_protection_enabled?: boolean | null;
}
export function MentionSpamTriggerMetadata(optional?: MentionSpamTriggerMetadata): MentionSpamTriggerMetadata { return { ...optional }; }
export interface MentionSpamTriggerMetadataResponse {
    mention_total_limit: number;
    mention_raid_protection_enabled: boolean;
}
export function MentionSpamTriggerMetadataResponse(mention_total_limit: MentionSpamTriggerMetadataResponse["mention_total_limit"], mention_raid_protection_enabled: MentionSpamTriggerMetadataResponse["mention_raid_protection_enabled"]): MentionSpamTriggerMetadataResponse { return { mention_total_limit, mention_raid_protection_enabled }; }
export interface MentionSpamUpsertRequest {
    name: string;
    event_type: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type: AutomodTriggerType.MENTION_SPAM;
    trigger_metadata?: null | MentionSpamTriggerMetadata;
}
export function MentionSpamUpsertRequest(name: MentionSpamUpsertRequest["name"], event_type: MentionSpamUpsertRequest["event_type"], optional?: Omit<MentionSpamUpsertRequest, "trigger_type" | "name" | "event_type">): MentionSpamUpsertRequest { return { trigger_type: AutomodTriggerType.MENTION_SPAM, name, event_type, ...optional }; }
export interface MentionSpamUpsertRequestPartial {
    name?: string;
    event_type?: AutomodEventType;
    actions?: (BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction)[] | null;
    enabled?: boolean | null;
    exempt_roles?: SnowflakeType[] | null;
    exempt_channels?: SnowflakeType[] | null;
    trigger_type?: AutomodTriggerType.MENTION_SPAM;
    trigger_metadata?: null | MentionSpamTriggerMetadata;
}
export function MentionSpamUpsertRequestPartial(optional?: MentionSpamUpsertRequestPartial): MentionSpamUpsertRequestPartial { return { ...optional }; }
export interface MentionableSelectComponentForMessageRequest {
    type: MessageComponentTypes.MENTIONABLE_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: (RoleSelectDefaultValue | UserSelectDefaultValue)[] | null;
}
export function MentionableSelectComponentForMessageRequest(custom_id: MentionableSelectComponentForMessageRequest["custom_id"], optional?: Omit<MentionableSelectComponentForMessageRequest, "type" | "custom_id">): MentionableSelectComponentForMessageRequest { return { type: MessageComponentTypes.MENTIONABLE_SELECT, custom_id, ...optional }; }
export interface MentionableSelectComponentForModalRequest {
    type: MessageComponentTypes.MENTIONABLE_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: (RoleSelectDefaultValue | UserSelectDefaultValue)[] | null;
}
export function MentionableSelectComponentForModalRequest(custom_id: MentionableSelectComponentForModalRequest["custom_id"], optional?: Omit<MentionableSelectComponentForModalRequest, "type" | "custom_id">): MentionableSelectComponentForModalRequest { return { type: MessageComponentTypes.MENTIONABLE_SELECT, custom_id, ...optional }; }
export interface MentionableSelectComponentResponse {
    type: MessageComponentTypes.MENTIONABLE_SELECT;
    id: number;
    custom_id: string;
    placeholder?: string;
    min_values: number;
    max_values: number;
    disabled?: boolean;
    default_values?: (RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse)[];
}
export function MentionableSelectComponentResponse(id: MentionableSelectComponentResponse["id"], custom_id: MentionableSelectComponentResponse["custom_id"], min_values: MentionableSelectComponentResponse["min_values"], max_values: MentionableSelectComponentResponse["max_values"], optional?: Omit<MentionableSelectComponentResponse, "type" | "id" | "custom_id" | "min_values" | "max_values">): MentionableSelectComponentResponse { return { type: MessageComponentTypes.MENTIONABLE_SELECT, id, custom_id, min_values, max_values, ...optional }; }
export interface MessageActivityResponse {
    type: ActivityActionTypes;
    party_id?: string;
}
export function MessageActivityResponse(type: MessageActivityResponse["type"], optional?: Omit<MessageActivityResponse, "type">): MessageActivityResponse { return { type, ...optional }; }
export interface MessageAllowedMentionsRequest {
    parse?: (null | AllowedMentionTypes)[] | null;
    users?: (null | SnowflakeType)[] | null;
    roles?: (null | SnowflakeType)[] | null;
    replied_user?: boolean | null;
}
export function MessageAllowedMentionsRequest(optional?: MessageAllowedMentionsRequest): MessageAllowedMentionsRequest { return { ...optional }; }
export interface MessageAttachmentRequest {
    id: SnowflakeType;
    filename?: string | null;
    description?: string | null;
    duration_secs?: number | null;
    waveform?: string | null;
    title?: string | null;
    is_remix?: boolean | null;
    "data": Blob;
}
export function MessageAttachmentRequest(id: MessageAttachmentRequest["id"], data: MessageAttachmentRequest["data"], optional?: Omit<MessageAttachmentRequest, "id" | "data">): MessageAttachmentRequest { return { id, data, ...optional }; }
export interface MessageAttachmentResponse {
    id: SnowflakeType;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    width?: number;
    height?: number;
    duration_secs?: number;
    waveform?: string;
    description?: string;
    content_type?: string;
    ephemeral?: boolean;
    flags?: number;
    placeholder?: string;
    placeholder_version?: number;
    title?: string | null;
    application?: ApplicationResponse;
    clip_created_at?: string;
    clip_participants?: UserResponse[];
}
export function MessageAttachmentResponse(id: MessageAttachmentResponse["id"], filename: MessageAttachmentResponse["filename"], size: MessageAttachmentResponse["size"], url: MessageAttachmentResponse["url"], proxy_url: MessageAttachmentResponse["proxy_url"], optional?: Omit<MessageAttachmentResponse, "id" | "filename" | "size" | "url" | "proxy_url">): MessageAttachmentResponse { return { id, filename, size, url, proxy_url, ...optional }; }
export interface MessageCallResponse {
    ended_timestamp?: string | null;
    participants: SnowflakeType[];
}
export function MessageCallResponse(participants: MessageCallResponse["participants"], optional?: Omit<MessageCallResponse, "participants">): MessageCallResponse { return { participants, ...optional }; }
export interface MessageComponentInteractionMetadataResponse {
    id: SnowflakeType;
    type: InteractionTypes.MESSAGE_COMPONENT;
    user?: UserResponse;
    authorizing_integration_owners: {
        [key: string]: SnowflakeType;
    };
    original_response_message_id?: SnowflakeType;
    interacted_message_id: SnowflakeType;
}
export function MessageComponentInteractionMetadataResponse(id: MessageComponentInteractionMetadataResponse["id"], authorizing_integration_owners: MessageComponentInteractionMetadataResponse["authorizing_integration_owners"], interacted_message_id: MessageComponentInteractionMetadataResponse["interacted_message_id"], optional?: Omit<MessageComponentInteractionMetadataResponse, "type" | "id" | "authorizing_integration_owners" | "interacted_message_id">): MessageComponentInteractionMetadataResponse { return { type: InteractionTypes.MESSAGE_COMPONENT, id, authorizing_integration_owners, interacted_message_id, ...optional }; }
export enum MessageComponentSeparatorSpacingSize {
    /**
     * Small spacing
     */
    SMALL = 1,
    /**
     * Large spacing
     */
    LARGE = 2
}
export enum MessageComponentTypes {
    /**
     * Container for other components
     */
    ACTION_ROW = 1,
    /**
     * Button object
     */
    BUTTON = 2,
    /**
     * Select menu for picking from defined text options
     */
    STRING_SELECT = 3,
    /**
     * Text input object
     */
    TEXT_INPUT = 4,
    /**
     * Select menu for users
     */
    USER_SELECT = 5,
    /**
     * Select menu for roles
     */
    ROLE_SELECT = 6,
    /**
     * Select menu for mentionables (users and roles)
     */
    MENTIONABLE_SELECT = 7,
    /**
     * Select menu for channels
     */
    CHANNEL_SELECT = 8,
    /**
     * Section component
     */
    SECTION = 9,
    /**
     * Text component
     */
    TEXT_DISPLAY = 10,
    /**
     * Thumbnail component
     */
    THUMBNAIL = 11,
    /**
     * Media gallery component
     */
    MEDIA_GALLERY = 12,
    /**
     * File component
     */
    FILE = 13,
    /**
     * Separator component
     */
    SEPARATOR = 14,
    /**
     * Container component
     */
    CONTAINER = 17,
    /**
     * Label component
     */
    LABEL = 18,
    /**
     * File upload component
     */
    FILE_UPLOAD = 19,
    /**
     * Radio group component
     */
    RADIO_GROUP = 21,
    /**
     * Checkbox group component
     */
    CHECKBOX_GROUP = 22,
    /**
     * Checkbox component
     */
    CHECKBOX = 23
}
export interface MessageCreateRequest {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    sticker_ids?: SnowflakeType[] | null;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    flags?: number | null;
    attachments?: MessageAttachmentRequest[] | null;
    poll?: null | PollCreateRequest;
    shared_client_theme?: null | CustomClientThemeShareRequest;
    message_reference?: null | MessageReferenceRequest;
    nonce?: number | string | null;
    enforce_nonce?: boolean | null;
    tts?: boolean | null;
}
export function MessageCreateRequest(optional?: MessageCreateRequest): MessageCreateRequest { return { ...optional }; }
export interface MessageEditRequestPartial {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    flags?: number | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    sticker_ids?: SnowflakeType[] | null;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    attachments?: MessageAttachmentRequest[] | null;
}
export function MessageEditRequestPartial(optional?: MessageEditRequestPartial): MessageEditRequestPartial { return { ...optional }; }
export interface MessageEmbedAuthorResponse {
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
export function MessageEmbedAuthorResponse(name: MessageEmbedAuthorResponse["name"], optional?: Omit<MessageEmbedAuthorResponse, "name">): MessageEmbedAuthorResponse { return { name, ...optional }; }
export interface MessageEmbedFieldResponse {
    name: string;
    value: string;
    inline: boolean;
}
export function MessageEmbedFieldResponse(name: MessageEmbedFieldResponse["name"], value: MessageEmbedFieldResponse["value"], inline: MessageEmbedFieldResponse["inline"]): MessageEmbedFieldResponse { return { name, value, inline }; }
export interface MessageEmbedFooterResponse {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
export function MessageEmbedFooterResponse(text: MessageEmbedFooterResponse["text"], optional?: Omit<MessageEmbedFooterResponse, "text">): MessageEmbedFooterResponse { return { text, ...optional }; }
export interface MessageEmbedImageResponse {
    url?: string;
    proxy_url?: string;
    width?: UInt32Type;
    height?: UInt32Type;
    content_type?: string;
    placeholder?: string;
    placeholder_version?: UInt32Type;
    description?: string;
    flags?: UInt32Type;
}
export function MessageEmbedImageResponse(optional?: MessageEmbedImageResponse): MessageEmbedImageResponse { return { ...optional }; }
export interface MessageEmbedProviderResponse {
    name: string;
    url?: string;
}
export function MessageEmbedProviderResponse(name: MessageEmbedProviderResponse["name"], optional?: Omit<MessageEmbedProviderResponse, "name">): MessageEmbedProviderResponse { return { name, ...optional }; }
export interface MessageEmbedResponse {
    type: string;
    url?: string;
    title?: string;
    description?: string;
    color?: number;
    timestamp?: string;
    fields?: MessageEmbedFieldResponse[];
    author?: MessageEmbedAuthorResponse;
    provider?: MessageEmbedProviderResponse;
    image?: MessageEmbedImageResponse;
    thumbnail?: MessageEmbedImageResponse;
    video?: MessageEmbedVideoResponse;
    footer?: MessageEmbedFooterResponse;
    flags?: number | null;
    components?: ContainerComponentResponse[];
}
export function MessageEmbedResponse(type: MessageEmbedResponse["type"], optional?: Omit<MessageEmbedResponse, "type">): MessageEmbedResponse { return { type, ...optional }; }
export interface MessageEmbedVideoResponse {
    url?: string;
    proxy_url?: string;
    width?: UInt32Type;
    height?: UInt32Type;
    content_type?: string;
    placeholder?: string;
    placeholder_version?: UInt32Type;
    description?: string;
    flags?: UInt32Type;
}
export function MessageEmbedVideoResponse(optional?: MessageEmbedVideoResponse): MessageEmbedVideoResponse { return { ...optional }; }
export interface MessageInteractionResponse {
    id: SnowflakeType;
    type: InteractionTypes;
    name: string;
    user?: UserResponse;
    name_localized?: string;
}
export function MessageInteractionResponse(id: MessageInteractionResponse["id"], type: MessageInteractionResponse["type"], name: MessageInteractionResponse["name"], optional?: Omit<MessageInteractionResponse, "id" | "type" | "name">): MessageInteractionResponse { return { id, type, name, ...optional }; }
export interface MessageMentionChannelResponse {
    id: SnowflakeType;
    name: string;
    type: ChannelTypes;
    guild_id: SnowflakeType;
}
export function MessageMentionChannelResponse(id: MessageMentionChannelResponse["id"], name: MessageMentionChannelResponse["name"], type: MessageMentionChannelResponse["type"], guild_id: MessageMentionChannelResponse["guild_id"]): MessageMentionChannelResponse { return { id, name, type, guild_id }; }
export interface MessageReactionCountDetailsResponse {
    burst: number;
    normal: number;
}
export function MessageReactionCountDetailsResponse(burst: MessageReactionCountDetailsResponse["burst"], normal: MessageReactionCountDetailsResponse["normal"]): MessageReactionCountDetailsResponse { return { burst, normal }; }
export interface MessageReactionEmojiResponse {
    id: null | SnowflakeType;
    name: string | null;
    animated?: boolean;
}
export function MessageReactionEmojiResponse(id: MessageReactionEmojiResponse["id"], name: MessageReactionEmojiResponse["name"], optional?: Omit<MessageReactionEmojiResponse, "id" | "name">): MessageReactionEmojiResponse { return { id, name, ...optional }; }
export interface MessageReactionResponse {
    emoji: MessageReactionEmojiResponse;
    count: number;
    count_details: MessageReactionCountDetailsResponse;
    burst_colors: string[];
    me_burst: boolean;
    me: boolean;
}
export function MessageReactionResponse(emoji: MessageReactionResponse["emoji"], count: MessageReactionResponse["count"], count_details: MessageReactionResponse["count_details"], burst_colors: MessageReactionResponse["burst_colors"], me_burst: MessageReactionResponse["me_burst"], me: MessageReactionResponse["me"]): MessageReactionResponse { return { emoji, count, count_details, burst_colors, me_burst, me }; }
export interface MessageReferenceRequest {
    guild_id?: null | SnowflakeType;
    channel_id?: null | SnowflakeType;
    message_id: SnowflakeType;
    fail_if_not_exists?: boolean | null;
    type?: null | MessageReferenceType;
}
export function MessageReferenceRequest(message_id: MessageReferenceRequest["message_id"], optional?: Omit<MessageReferenceRequest, "message_id">): MessageReferenceRequest { return { message_id, ...optional }; }
export interface MessageReferenceResponse {
    type: MessageReferenceType;
    channel_id: SnowflakeType;
    message_id?: SnowflakeType;
    guild_id?: SnowflakeType;
}
export function MessageReferenceResponse(type: MessageReferenceResponse["type"], channel_id: MessageReferenceResponse["channel_id"], optional?: Omit<MessageReferenceResponse, "type" | "channel_id">): MessageReferenceResponse { return { type, channel_id, ...optional }; }
export enum MessageReferenceType {
    /**
     * Reference to a message
     */
    DEFAULT = 0
}
export interface MessageResponse {
    type: MessageType;
    content: string;
    mentions: UserResponse[];
    mention_roles: SnowflakeType[];
    attachments: MessageAttachmentResponse[];
    embeds: MessageEmbedResponse[];
    timestamp: string;
    edited_timestamp: string | null;
    flags: number;
    components: (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    stickers?: (GuildStickerResponse | StandardStickerResponse)[];
    sticker_items?: MessageStickerItemResponse[];
    id: SnowflakeType;
    channel_id: SnowflakeType;
    author: UserResponse;
    pinned: boolean;
    mention_everyone: boolean;
    tts: boolean;
    call?: MessageCallResponse;
    activity?: MessageActivityResponse;
    application?: BasicApplicationResponse;
    application_id?: SnowflakeType;
    interaction?: MessageInteractionResponse;
    nonce?: number | string;
    webhook_id?: SnowflakeType;
    message_reference?: MessageReferenceResponse;
    thread?: ThreadResponse;
    mention_channels?: MessageMentionChannelResponse[];
    role_subscription_data?: MessageRoleSubscriptionDataResponse;
    purchase_notification?: PurchaseNotificationResponse;
    position?: number;
    resolved?: ResolvedObjectsResponse;
    poll?: PollResponse;
    shared_client_theme?: CustomClientThemeResponse;
    interaction_metadata?: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse;
    message_snapshots?: MessageSnapshotResponse[];
    reactions?: MessageReactionResponse[];
    referenced_message?: null | BasicMessageResponse;
}
export function MessageResponse(type: MessageResponse["type"], content: MessageResponse["content"], mentions: MessageResponse["mentions"], mention_roles: MessageResponse["mention_roles"], attachments: MessageResponse["attachments"], embeds: MessageResponse["embeds"], timestamp: MessageResponse["timestamp"], edited_timestamp: MessageResponse["edited_timestamp"], flags: MessageResponse["flags"], components: MessageResponse["components"], id: MessageResponse["id"], channel_id: MessageResponse["channel_id"], author: MessageResponse["author"], pinned: MessageResponse["pinned"], mention_everyone: MessageResponse["mention_everyone"], tts: MessageResponse["tts"], optional?: Omit<MessageResponse, "type" | "content" | "mentions" | "mention_roles" | "attachments" | "embeds" | "timestamp" | "edited_timestamp" | "flags" | "components" | "id" | "channel_id" | "author" | "pinned" | "mention_everyone" | "tts">): MessageResponse { return { type, content, mentions, mention_roles, attachments, embeds, timestamp, edited_timestamp, flags, components, id, channel_id, author, pinned, mention_everyone, tts, ...optional }; }
export interface MessageRoleSubscriptionDataResponse {
    role_subscription_listing_id: SnowflakeType;
    tier_name: string;
    total_months_subscribed: number;
    is_renewal: boolean;
}
export function MessageRoleSubscriptionDataResponse(role_subscription_listing_id: MessageRoleSubscriptionDataResponse["role_subscription_listing_id"], tier_name: MessageRoleSubscriptionDataResponse["tier_name"], total_months_subscribed: MessageRoleSubscriptionDataResponse["total_months_subscribed"], is_renewal: MessageRoleSubscriptionDataResponse["is_renewal"]): MessageRoleSubscriptionDataResponse { return { role_subscription_listing_id, tier_name, total_months_subscribed, is_renewal }; }
export enum MessageShareCustomUserThemeBaseTheme {
    /**
     * No base theme
     */
    UNSET = 0,
    /**
     * Dark base theme
     */
    DARK = 1,
    /**
     * Light base theme
     */
    LIGHT = 2,
    /**
     * Darker base theme
     */
    DARKER = 3,
    /**
     * Midnight base theme
     */
    MIDNIGHT = 4
}
export interface MessageSnapshotResponse {
    message: MinimalContentMessageResponse;
}
export function MessageSnapshotResponse(message: MessageSnapshotResponse["message"]): MessageSnapshotResponse { return { message }; }
export interface MessageStickerItemResponse {
    id: SnowflakeType;
    name: string;
    format_type: StickerFormatTypes;
}
export function MessageStickerItemResponse(id: MessageStickerItemResponse["id"], name: MessageStickerItemResponse["name"], format_type: MessageStickerItemResponse["format_type"]): MessageStickerItemResponse { return { id, name, format_type }; }
export enum MessageType {
    DEFAULT = 0,
    RECIPIENT_ADD = 1,
    RECIPIENT_REMOVE = 2,
    CALL = 3,
    CHANNEL_NAME_CHANGE = 4,
    CHANNEL_ICON_CHANGE = 5,
    CHANNEL_PINNED_MESSAGE = 6,
    USER_JOIN = 7,
    GUILD_BOOST = 8,
    GUILD_BOOST_TIER_1 = 9,
    GUILD_BOOST_TIER_2 = 10,
    GUILD_BOOST_TIER_3 = 11,
    CHANNEL_FOLLOW_ADD = 12,
    GUILD_DISCOVERY_DISQUALIFIED = 14,
    GUILD_DISCOVERY_REQUALIFIED = 15,
    GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
    GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
    THREAD_CREATED = 18,
    REPLY = 19,
    CHAT_INPUT_COMMAND = 20,
    THREAD_STARTER_MESSAGE = 21,
    GUILD_INVITE_REMINDER = 22,
    CONTEXT_MENU_COMMAND = 23,
    AUTO_MODERATION_ACTION = 24,
    ROLE_SUBSCRIPTION_PURCHASE = 25,
    INTERACTION_PREMIUM_UPSELL = 26,
    STAGE_START = 27,
    STAGE_END = 28,
    STAGE_SPEAKER = 29,
    STAGE_TOPIC = 31,
    GUILD_APPLICATION_PREMIUM_SUBSCRIPTION = 32,
    GUILD_INCIDENT_ALERT_MODE_ENABLED = 36,
    GUILD_INCIDENT_ALERT_MODE_DISABLED = 37,
    GUILD_INCIDENT_REPORT_RAID = 38,
    GUILD_INCIDENT_REPORT_FALSE_ALARM = 39,
    POLL_RESULT = 46,
    HD_STREAMING_UPGRADED = 55
}
export enum MetadataItemTypes {
    /**
     * the metadata value (integer) is less than or equal to the guild's configured value (integer)
     */
    INTEGER_LESS_THAN_EQUAL = 1,
    /**
     * the metadata value (integer) is greater than or equal to the guild's configured value (integer)
     */
    INTEGER_GREATER_THAN_EQUAL = 2,
    /**
     * the metadata value (integer) is equal to the guild's configured value (integer)
     */
    INTEGER_EQUAL = 3,
    /**
     * the metadata value (integer) is not equal to the guild's configured value (integer)
     */
    INTEGER_NOT_EQUAL = 4,
    /**
     * the metadata value (ISO8601 string) is less than or equal to the guild's configured value (integer; days before current date)
     */
    DATETIME_LESS_THAN_EQUAL = 5,
    /**
     * the metadata value (ISO8601 string) is greater than or equal to the guild's configured value (integer; days before current date)
     */
    DATETIME_GREATER_THAN_EQUAL = 6,
    /**
     * the metadata value (integer) is equal to the guild's configured value (integer; 1)
     */
    BOOLEAN_EQUAL = 7,
    /**
     * the metadata value (integer) is not equal to the guild's configured value (integer; 1)
     */
    BOOLEAN_NOT_EQUAL = 8
}
export interface MinimalContentMessageResponse {
    type: MessageType;
    content: string;
    mentions: UserResponse[];
    mention_roles: SnowflakeType[];
    attachments: MessageAttachmentResponse[];
    embeds: MessageEmbedResponse[];
    timestamp: string;
    edited_timestamp: string | null;
    flags: number;
    components: (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    stickers?: (GuildStickerResponse | StandardStickerResponse)[];
    sticker_items?: MessageStickerItemResponse[];
}
export function MinimalContentMessageResponse(type: MinimalContentMessageResponse["type"], content: MinimalContentMessageResponse["content"], mentions: MinimalContentMessageResponse["mentions"], mention_roles: MinimalContentMessageResponse["mention_roles"], attachments: MinimalContentMessageResponse["attachments"], embeds: MinimalContentMessageResponse["embeds"], timestamp: MinimalContentMessageResponse["timestamp"], edited_timestamp: MinimalContentMessageResponse["edited_timestamp"], flags: MinimalContentMessageResponse["flags"], components: MinimalContentMessageResponse["components"], optional?: Omit<MinimalContentMessageResponse, "type" | "content" | "mentions" | "mention_roles" | "attachments" | "embeds" | "timestamp" | "edited_timestamp" | "flags" | "components">): MinimalContentMessageResponse { return { type, content, mentions, mention_roles, attachments, embeds, timestamp, edited_timestamp, flags, components, ...optional }; }
export interface ModalInteractionCallbackRequest {
    type: InteractionCallbackTypes.MODAL;
    data: ModalInteractionCallbackRequestData;
}
export function ModalInteractionCallbackRequest(data: ModalInteractionCallbackRequest["data"]): ModalInteractionCallbackRequest { return { type: InteractionCallbackTypes.MODAL, data }; }
export interface ModalInteractionCallbackRequestData {
    custom_id: string;
    title: string;
    components: (ActionRowComponentForModalRequest | LabelComponentForModalRequest | TextDisplayComponentForModalRequest)[];
}
export function ModalInteractionCallbackRequestData(custom_id: ModalInteractionCallbackRequestData["custom_id"], title: ModalInteractionCallbackRequestData["title"], components: ModalInteractionCallbackRequestData["components"]): ModalInteractionCallbackRequestData { return { custom_id, title, components }; }
export interface ModalSubmitInteractionMetadataResponse {
    id: SnowflakeType;
    type: InteractionTypes.MODAL_SUBMIT;
    user?: UserResponse;
    authorizing_integration_owners: {
        [key: string]: SnowflakeType;
    };
    original_response_message_id?: SnowflakeType;
    triggering_interaction_metadata: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse;
}
export function ModalSubmitInteractionMetadataResponse(id: ModalSubmitInteractionMetadataResponse["id"], authorizing_integration_owners: ModalSubmitInteractionMetadataResponse["authorizing_integration_owners"], triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse["triggering_interaction_metadata"], optional?: Omit<ModalSubmitInteractionMetadataResponse, "type" | "id" | "authorizing_integration_owners" | "triggering_interaction_metadata">): ModalSubmitInteractionMetadataResponse { return { type: InteractionTypes.MODAL_SUBMIT, id, authorizing_integration_owners, triggering_interaction_metadata, ...optional }; }
export interface MultipleChoiceFormFieldResponse {
    /**
     * Type of form field
     */
    field_type: GuildMemberVerificationFormFieldType.MULTIPLE_CHOICE;
    /**
     * Label shown above field
     */
    label?: string;
    /**
     * Optional helper text shown below label
     */
    description?: string;
    /**
     * Whether applicant must fill in field
     */
    required?: boolean;
    /**
     * Choices applicant can select from
     */
    choices: string[];
    /**
     * Index of choice selected by applicant
     */
    response?: number;
}
export function MultipleChoiceFormFieldResponse(choices: MultipleChoiceFormFieldResponse["choices"], optional?: Omit<MultipleChoiceFormFieldResponse, "field_type" | "choices">): MultipleChoiceFormFieldResponse { return { field_type: GuildMemberVerificationFormFieldType.MULTIPLE_CHOICE, choices, ...optional }; }
export interface MyGuildResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    banner: string | null;
    owner: boolean;
    permissions: string;
    features: GuildFeatures[];
    approximate_member_count?: number | null;
    approximate_presence_count?: number | null;
}
export function MyGuildResponse(id: MyGuildResponse["id"], name: MyGuildResponse["name"], icon: MyGuildResponse["icon"], banner: MyGuildResponse["banner"], owner: MyGuildResponse["owner"], permissions: MyGuildResponse["permissions"], features: MyGuildResponse["features"], optional?: Omit<MyGuildResponse, "id" | "name" | "icon" | "banner" | "owner" | "permissions" | "features">): MyGuildResponse { return { id, name, icon, banner, owner, permissions, features, ...optional }; }
export enum NameplatePalette {
}
export interface NewMemberActionResponse {
    channel_id: SnowflakeType;
    action_type: NewMemberActionType;
    title: string;
    description: string;
    emoji?: SettingsEmojiResponse;
    icon?: string;
}
export function NewMemberActionResponse(channel_id: NewMemberActionResponse["channel_id"], action_type: NewMemberActionResponse["action_type"], title: NewMemberActionResponse["title"], description: NewMemberActionResponse["description"], optional?: Omit<NewMemberActionResponse, "channel_id" | "action_type" | "title" | "description">): NewMemberActionResponse { return { channel_id, action_type, title, description, ...optional }; }
export enum NewMemberActionType {
    VIEW = 0,
    TALK = 1
}
export interface OAuth2GetAuthorizationResponse {
    application: ApplicationResponse;
    expires: string;
    scopes: OAuth2Scopes[];
    user?: UserResponse;
}
export function OAuth2GetAuthorizationResponse(application: OAuth2GetAuthorizationResponse["application"], expires: OAuth2GetAuthorizationResponse["expires"], scopes: OAuth2GetAuthorizationResponse["scopes"], optional?: Omit<OAuth2GetAuthorizationResponse, "application" | "expires" | "scopes">): OAuth2GetAuthorizationResponse { return { application, expires, scopes, ...optional }; }
export interface OAuth2GetKeys {
    keys: OAuth2Key[];
}
export function OAuth2GetKeys(keys: OAuth2GetKeys["keys"]): OAuth2GetKeys { return { keys }; }
export interface OAuth2GetOpenIDConnectUserInfoResponse {
    sub: string;
    email?: string | null;
    email_verified?: boolean;
    preferred_username?: string;
    nickname?: string | null;
    picture?: string;
    locale?: string;
}
export function OAuth2GetOpenIDConnectUserInfoResponse(sub: OAuth2GetOpenIDConnectUserInfoResponse["sub"], optional?: Omit<OAuth2GetOpenIDConnectUserInfoResponse, "sub">): OAuth2GetOpenIDConnectUserInfoResponse { return { sub, ...optional }; }
export interface OAuth2Key {
    kty: string;
    use: string;
    kid: string;
    n: string;
    e: string;
    alg: string;
}
export function OAuth2Key(kty: OAuth2Key["kty"], use: OAuth2Key["use"], kid: OAuth2Key["kid"], n: OAuth2Key["n"], e: OAuth2Key["e"], alg: OAuth2Key["alg"]): OAuth2Key { return { kty, use, kid, n, e, alg }; }
export enum OAuth2Scopes {
    /**
     * allows /users/@me without email
     */
    IDENTIFY = "identify",
    /**
     * enables /users/@me to return an email
     */
    EMAIL = "email",
    /**
     * allows /users/@me/connections to return linked third-party accounts
     */
    CONNECTIONS = "connections",
    /**
     * allows /users/@me/guilds to return basic information about all of a user's guilds
     */
    GUILDS = "guilds",
    /**
     * allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild
     */
    GUILDS_JOIN = "guilds.join",
    /**
     * allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
     */
    GUILDS_MEMBERS_READ = "guilds.members.read",
    /**
     * allows your app to join users to a group dm
     */
    GDM_JOIN = "gdm.join",
    /**
     * for oauth2 bots, this puts the bot in the user's selected guild by default
     */
    BOT = "bot",
    /**
     * for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
     */
    RPC = "rpc",
    /**
     * for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval
     */
    RPC_NOTIFICATIONS_READ = "rpc.notifications.read",
    /**
     * for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval
     */
    RPC_VOICE_READ = "rpc.voice.read",
    /**
     * for local rpc server access, this allows you to update a user's voice settings - requires Discord approval
     */
    RPC_VOICE_WRITE = "rpc.voice.write",
    /**
     * for local rpc server access, this allows you to read a user's video status - requires Discord approval
     */
    RPC_VIDEO_READ = "rpc.video.read",
    /**
     * for local rpc server access, this allows you to update a user's video settings - requires Discord approval
     */
    RPC_VIDEO_WRITE = "rpc.video.write",
    /**
     * for local rpc server access, this allows you to read a user's screenshare status- requires Discord approval
     */
    RPC_SCREENSHARE_READ = "rpc.screenshare.read",
    /**
     * for local rpc server access, this allows you to update a user's screenshare settings- requires Discord approval
     */
    RPC_SCREENSHARE_WRITE = "rpc.screenshare.write",
    /**
     * for local rpc server access, this allows you to update a user's activity - requires Discord approval
     */
    RPC_ACTIVITIES_WRITE = "rpc.activities.write",
    /**
     * this generates a webhook that is returned in the oauth token response for authorization code grants
     */
    WEBHOOK_INCOMING = "webhook.incoming",
    /**
     * for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)
     */
    MESSAGES_READ = "messages.read",
    /**
     * allows your app to upload/update builds for a user's applications - requires Discord approval
     */
    APPLICATIONS_BUILDS_UPLOAD = "applications.builds.upload",
    /**
     * allows your app to read build data for a user's applications
     */
    APPLICATIONS_BUILDS_READ = "applications.builds.read",
    /**
     * allows your app to use commands in a guild
     */
    APPLICATIONS_COMMANDS = "applications.commands",
    /**
     * allows your app to update permissions for its commands in a guild a user has permissions to
     */
    APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE = "applications.commands.permissions.update",
    /**
     * allows your app to update its commands using a Bearer token - client credentials grant only
     */
    APPLICATIONS_COMMANDS_UPDATE = "applications.commands.update",
    /**
     * allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
     */
    APPLICATIONS_STORE_UPDATE = "applications.store.update",
    /**
     * allows your app to read entitlements for a user's applications
     */
    APPLICATIONS_ENTITLEMENTS = "applications.entitlements",
    /**
     * allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval
     */
    ACTIVITIES_READ = "activities.read",
    /**
     * allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
     */
    ACTIVITIES_WRITE = "activities.write",
    /**
     * allows your app to send activity invites - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
     */
    ACTIVITIES_INVITES_WRITE = "activities.invites.write",
    /**
     * allows your app to know a user's friends and implicit relationships - requires Discord approval
     */
    RELATIONSHIPS_READ = "relationships.read",
    /**
     * allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval
     */
    VOICE = "voice",
    /**
     * allows your app to see information about the user's DMs and group DMs - requires Discord approval
     */
    DM_CHANNELS_READ = "dm_channels.read",
    /**
     * allows your app to update a user's connection and metadata for the app
     */
    ROLE_CONNECTIONS_WRITE = "role_connections.write",
    /**
     * for OpenID Connect, this allows your app to receive user id and basic profile information
     */
    OPENID = "openid"
}
export interface OnboardingPromptOptionRequest {
    id?: null | SnowflakeType;
    title: string;
    description?: string | null;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
    emoji_animated?: boolean | null;
    role_ids?: SnowflakeType[] | null;
    channel_ids?: SnowflakeType[] | null;
}
export function OnboardingPromptOptionRequest(title: OnboardingPromptOptionRequest["title"], optional?: Omit<OnboardingPromptOptionRequest, "title">): OnboardingPromptOptionRequest { return { title, ...optional }; }
export interface OnboardingPromptOptionResponse {
    id: SnowflakeType;
    title: string;
    description: string;
    emoji: SettingsEmojiResponse;
    role_ids: SnowflakeType[];
    channel_ids: SnowflakeType[];
}
export function OnboardingPromptOptionResponse(id: OnboardingPromptOptionResponse["id"], title: OnboardingPromptOptionResponse["title"], description: OnboardingPromptOptionResponse["description"], emoji: OnboardingPromptOptionResponse["emoji"], role_ids: OnboardingPromptOptionResponse["role_ids"], channel_ids: OnboardingPromptOptionResponse["channel_ids"]): OnboardingPromptOptionResponse { return { id, title, description, emoji, role_ids, channel_ids }; }
export interface OnboardingPromptResponse {
    id: SnowflakeType;
    title: string;
    options: OnboardingPromptOptionResponse[];
    single_select: boolean;
    required: boolean;
    in_onboarding: boolean;
    type: OnboardingPromptType;
}
export function OnboardingPromptResponse(id: OnboardingPromptResponse["id"], title: OnboardingPromptResponse["title"], options: OnboardingPromptResponse["options"], single_select: OnboardingPromptResponse["single_select"], required: OnboardingPromptResponse["required"], in_onboarding: OnboardingPromptResponse["in_onboarding"], type: OnboardingPromptResponse["type"]): OnboardingPromptResponse { return { id, title, options, single_select, required, in_onboarding, type }; }
export enum OnboardingPromptType {
    /**
     * Multiple choice options
     */
    MULTIPLE_CHOICE = 0,
    /**
     * Many options shown as a dropdown
     */
    DROPDOWN = 1
}
export interface ParagraphFormFieldResponse {
    /**
     * Type of form field
     */
    field_type: GuildMemberVerificationFormFieldType.PARAGRAPH;
    /**
     * Label shown above field
     */
    label?: string;
    /**
     * Optional helper text shown below label
     */
    description?: string;
    /**
     * Whether applicant must fill in field
     */
    required?: boolean;
    /**
     * Placeholder text shown in empty input
     */
    placeholder?: string;
    /**
     * Applicant's text response
     */
    response?: string;
}
export function ParagraphFormFieldResponse(optional?: Omit<ParagraphFormFieldResponse, "field_type">): ParagraphFormFieldResponse { return { field_type: GuildMemberVerificationFormFieldType.PARAGRAPH, ...optional }; }
export interface PartialDiscordIntegrationResponse {
    id: SnowflakeType;
    type: IntegrationTypes.DISCORD;
    name: string | null;
    account: AccountResponse;
    application_id: SnowflakeType;
}
export function PartialDiscordIntegrationResponse(id: PartialDiscordIntegrationResponse["id"], name: PartialDiscordIntegrationResponse["name"], account: PartialDiscordIntegrationResponse["account"], application_id: PartialDiscordIntegrationResponse["application_id"]): PartialDiscordIntegrationResponse { return { type: IntegrationTypes.DISCORD, id, name, account, application_id }; }
export interface PartialExternalConnectionIntegrationResponse {
    id: SnowflakeType;
    type: IntegrationTypes.TWITCH | IntegrationTypes.YOUTUBE;
    name: string | null;
    account: AccountResponse;
}
export function PartialExternalConnectionIntegrationResponse(id: PartialExternalConnectionIntegrationResponse["id"], type: PartialExternalConnectionIntegrationResponse["type"], name: PartialExternalConnectionIntegrationResponse["name"], account: PartialExternalConnectionIntegrationResponse["account"]): PartialExternalConnectionIntegrationResponse { return { id, type, name, account }; }
export interface PartialGuildSubscriptionIntegrationResponse {
    id: SnowflakeType;
    type: IntegrationTypes.GUILD_SUBSCRIPTION;
    name: string | null;
    account: AccountResponse;
}
export function PartialGuildSubscriptionIntegrationResponse(id: PartialGuildSubscriptionIntegrationResponse["id"], name: PartialGuildSubscriptionIntegrationResponse["name"], account: PartialGuildSubscriptionIntegrationResponse["account"]): PartialGuildSubscriptionIntegrationResponse { return { type: IntegrationTypes.GUILD_SUBSCRIPTION, id, name, account }; }
export interface PinnedMessageResponse {
    pinned_at: string;
    message: MessageResponse;
}
export function PinnedMessageResponse(pinned_at: PinnedMessageResponse["pinned_at"], message: PinnedMessageResponse["message"]): PinnedMessageResponse { return { pinned_at, message }; }
export interface PinnedMessagesResponse {
    items: PinnedMessageResponse[];
    has_more: boolean;
}
export function PinnedMessagesResponse(items: PinnedMessagesResponse["items"], has_more: PinnedMessagesResponse["has_more"]): PinnedMessagesResponse { return { items, has_more }; }
export interface PollAnswerCreateRequest {
    poll_media: PollMediaCreateRequest;
}
export function PollAnswerCreateRequest(poll_media: PollAnswerCreateRequest["poll_media"]): PollAnswerCreateRequest { return { poll_media }; }
export interface PollAnswerDetailsResponse {
    users: UserResponse[];
}
export function PollAnswerDetailsResponse(users: PollAnswerDetailsResponse["users"]): PollAnswerDetailsResponse { return { users }; }
export interface PollAnswerResponse {
    answer_id: number;
    poll_media: PollMediaResponse;
}
export function PollAnswerResponse(answer_id: PollAnswerResponse["answer_id"], poll_media: PollAnswerResponse["poll_media"]): PollAnswerResponse { return { answer_id, poll_media }; }
export interface PollCreateRequest {
    question: PollMedia;
    answers: PollAnswerCreateRequest[];
    allow_multiselect?: boolean | null;
    layout_type?: null | PollLayoutTypes;
    duration?: number | null;
}
export function PollCreateRequest(question: PollCreateRequest["question"], answers: PollCreateRequest["answers"], optional?: Omit<PollCreateRequest, "question" | "answers">): PollCreateRequest { return { question, answers, ...optional }; }
export interface PollEmoji {
    id?: null | SnowflakeType;
    name?: string | null;
    animated?: boolean | null;
}
export function PollEmoji(optional?: PollEmoji): PollEmoji { return { ...optional }; }
export interface PollEmojiCreateRequest {
    id?: null | SnowflakeType;
    name?: string | null;
    animated?: boolean | null;
}
export function PollEmojiCreateRequest(optional?: PollEmojiCreateRequest): PollEmojiCreateRequest { return { ...optional }; }
export enum PollLayoutTypes {
}
export interface PollMedia {
    text?: string | null;
    emoji?: null | PollEmoji;
}
export function PollMedia(optional?: PollMedia): PollMedia { return { ...optional }; }
export interface PollMediaCreateRequest {
    text?: string | null;
    emoji?: null | PollEmojiCreateRequest;
}
export function PollMediaCreateRequest(optional?: PollMediaCreateRequest): PollMediaCreateRequest { return { ...optional }; }
export interface PollMediaResponse {
    text?: string;
    emoji?: MessageReactionEmojiResponse;
}
export function PollMediaResponse(optional?: PollMediaResponse): PollMediaResponse { return { ...optional }; }
export interface PollResponse {
    question: PollMediaResponse;
    answers: PollAnswerResponse[];
    expiry: string;
    allow_multiselect: boolean;
    layout_type: PollLayoutTypes;
    results: PollResultsResponse;
}
export function PollResponse(question: PollResponse["question"], answers: PollResponse["answers"], expiry: PollResponse["expiry"], allow_multiselect: PollResponse["allow_multiselect"], layout_type: PollResponse["layout_type"], results: PollResponse["results"]): PollResponse { return { question, answers, expiry, allow_multiselect, layout_type, results }; }
export interface PollResultsEntryResponse {
    id: number;
    count: number;
    me_voted: boolean;
}
export function PollResultsEntryResponse(id: PollResultsEntryResponse["id"], count: PollResultsEntryResponse["count"], me_voted: PollResultsEntryResponse["me_voted"]): PollResultsEntryResponse { return { id, count, me_voted }; }
export interface PollResultsResponse {
    answer_counts: PollResultsEntryResponse[];
    is_finalized: boolean;
}
export function PollResultsResponse(answer_counts: PollResultsResponse["answer_counts"], is_finalized: PollResultsResponse["is_finalized"]): PollResultsResponse { return { answer_counts, is_finalized }; }
export interface PongInteractionCallbackRequest {
    type: InteractionCallbackTypes.PONG;
}
export function PongInteractionCallbackRequest(): PongInteractionCallbackRequest { return { type: InteractionCallbackTypes.PONG }; }
export enum PremiumGuildTiers {
    /**
     * Guild has not unlocked any Server Boost perks
     */
    NONE = 0,
    /**
     * Guild has unlocked Server Boost level 1 perks
     */
    TIER_1 = 1,
    /**
     * Guild has unlocked Server Boost level 2 perks
     */
    TIER_2 = 2,
    /**
     * Guild has unlocked Server Boost level 3 perks
     */
    TIER_3 = 3
}
export enum PremiumTypes {
    /**
     * None
     */
    NONE = 0,
    /**
     * Nitro Classic
     */
    TIER_1 = 1,
    /**
     * Nitro Standard
     */
    TIER_2 = 2,
    /**
     * Nitro Basic
     */
    TIER_0 = 3
}
export interface PrivateApplicationResponse {
    id: SnowflakeType;
    name: string;
    icon: string | null;
    description: string;
    type: null | ApplicationTypes;
    cover_image?: string;
    primary_sku_id?: SnowflakeType;
    bot?: UserResponse;
    slug?: string;
    guild_id?: SnowflakeType;
    rpc_origins?: string[];
    bot_public?: boolean;
    bot_require_code_grant?: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    custom_install_url?: string;
    install_params?: ApplicationOAuth2InstallParamsResponse;
    integration_types_config?: {
        [key: string]: ApplicationIntegrationTypeConfigurationResponse;
    };
    verify_key: string;
    flags: number;
    flags_new: string;
    max_participants?: number | null;
    tags?: string[];
    redirect_uris: string[];
    interactions_endpoint_url: string | null;
    role_connections_verification_url: string | null;
    owner: UserResponse;
    approximate_guild_count: number;
    approximate_user_install_count: number;
    approximate_user_authorization_count: number;
    event_webhooks_url?: string | null;
    event_webhooks_status?: ApplicationEventWebhooksStatus;
    event_webhooks_types?: (ActionTypes.APPLICATION_AUTHORIZED | ActionTypes.APPLICATION_DEAUTHORIZED | ActionTypes.ENTITLEMENT_CREATE | ActionTypes.ENTITLEMENT_DELETE | ActionTypes.ENTITLEMENT_UPDATE | ActionTypes.GAME_DIRECT_MESSAGE_CREATE | ActionTypes.GAME_DIRECT_MESSAGE_DELETE | ActionTypes.GAME_DIRECT_MESSAGE_UPDATE | ActionTypes.LOBBY_MESSAGE_CREATE | ActionTypes.LOBBY_MESSAGE_DELETE | ActionTypes.LOBBY_MESSAGE_UPDATE | ActionTypes.QUEST_USER_ENROLLMENT)[];
    explicit_content_filter: ApplicationExplicitContentFilterTypes;
    team: null | TeamResponse;
}
export function PrivateApplicationResponse(id: PrivateApplicationResponse["id"], name: PrivateApplicationResponse["name"], icon: PrivateApplicationResponse["icon"], description: PrivateApplicationResponse["description"], type: PrivateApplicationResponse["type"], verify_key: PrivateApplicationResponse["verify_key"], flags: PrivateApplicationResponse["flags"], flags_new: PrivateApplicationResponse["flags_new"], redirect_uris: PrivateApplicationResponse["redirect_uris"], interactions_endpoint_url: PrivateApplicationResponse["interactions_endpoint_url"], role_connections_verification_url: PrivateApplicationResponse["role_connections_verification_url"], owner: PrivateApplicationResponse["owner"], approximate_guild_count: PrivateApplicationResponse["approximate_guild_count"], approximate_user_install_count: PrivateApplicationResponse["approximate_user_install_count"], approximate_user_authorization_count: PrivateApplicationResponse["approximate_user_authorization_count"], explicit_content_filter: PrivateApplicationResponse["explicit_content_filter"], team: PrivateApplicationResponse["team"], optional?: Omit<PrivateApplicationResponse, "id" | "name" | "icon" | "description" | "type" | "verify_key" | "flags" | "flags_new" | "redirect_uris" | "interactions_endpoint_url" | "role_connections_verification_url" | "owner" | "approximate_guild_count" | "approximate_user_install_count" | "approximate_user_authorization_count" | "explicit_content_filter" | "team">): PrivateApplicationResponse { return { id, name, icon, description, type, verify_key, flags, flags_new, redirect_uris, interactions_endpoint_url, role_connections_verification_url, owner, approximate_guild_count, approximate_user_install_count, approximate_user_authorization_count, explicit_content_filter, team, ...optional }; }
export interface PrivateChannelLocation {
    id: string;
    kind: EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
    channel_id: SnowflakeType;
}
export function PrivateChannelLocation(id: PrivateChannelLocation["id"], channel_id: PrivateChannelLocation["channel_id"]): PrivateChannelLocation { return { kind: EmbeddedActivityLocationKind.PRIVATE_CHANNEL, id, channel_id }; }
export interface PrivateChannelResponse {
    id: SnowflakeType;
    type: ChannelTypes.DM;
    last_message_id?: null | SnowflakeType;
    flags: number;
    last_pin_timestamp?: string | null;
    recipients: UserResponse[];
}
export function PrivateChannelResponse(id: PrivateChannelResponse["id"], flags: PrivateChannelResponse["flags"], recipients: PrivateChannelResponse["recipients"], optional?: Omit<PrivateChannelResponse, "type" | "id" | "flags" | "recipients">): PrivateChannelResponse { return { type: ChannelTypes.DM, id, flags, recipients, ...optional }; }
export interface PrivateGroupChannelResponse {
    id: SnowflakeType;
    type: ChannelTypes.GROUP_DM;
    last_message_id?: null | SnowflakeType;
    flags: number;
    last_pin_timestamp?: string | null;
    recipients: UserResponse[];
    name: string | null;
    icon: string | null;
    owner_id: SnowflakeType;
    managed?: boolean;
    application_id?: SnowflakeType;
}
export function PrivateGroupChannelResponse(id: PrivateGroupChannelResponse["id"], flags: PrivateGroupChannelResponse["flags"], recipients: PrivateGroupChannelResponse["recipients"], name: PrivateGroupChannelResponse["name"], icon: PrivateGroupChannelResponse["icon"], owner_id: PrivateGroupChannelResponse["owner_id"], optional?: Omit<PrivateGroupChannelResponse, "type" | "id" | "flags" | "recipients" | "name" | "icon" | "owner_id">): PrivateGroupChannelResponse { return { type: ChannelTypes.GROUP_DM, id, flags, recipients, name, icon, owner_id, ...optional }; }
export interface PrivateGuildMemberResponse {
    avatar: string | null;
    avatar_decoration_data?: null | UserAvatarDecorationResponse;
    banner: string | null;
    communication_disabled_until: string | null;
    flags: number;
    joined_at: string;
    nick: string | null;
    pending: boolean;
    premium_since: string | null;
    roles: SnowflakeType[];
    collectibles?: null | UserCollectiblesResponse;
    user: UserResponse;
    mute: boolean;
    deaf: boolean;
    permissions?: string;
}
export function PrivateGuildMemberResponse(avatar: PrivateGuildMemberResponse["avatar"], banner: PrivateGuildMemberResponse["banner"], communication_disabled_until: PrivateGuildMemberResponse["communication_disabled_until"], flags: PrivateGuildMemberResponse["flags"], joined_at: PrivateGuildMemberResponse["joined_at"], nick: PrivateGuildMemberResponse["nick"], pending: PrivateGuildMemberResponse["pending"], premium_since: PrivateGuildMemberResponse["premium_since"], roles: PrivateGuildMemberResponse["roles"], user: PrivateGuildMemberResponse["user"], mute: PrivateGuildMemberResponse["mute"], deaf: PrivateGuildMemberResponse["deaf"], optional?: Omit<PrivateGuildMemberResponse, "avatar" | "banner" | "communication_disabled_until" | "flags" | "joined_at" | "nick" | "pending" | "premium_since" | "roles" | "user" | "mute" | "deaf">): PrivateGuildMemberResponse { return { avatar, banner, communication_disabled_until, flags, joined_at, nick, pending, premium_since, roles, user, mute, deaf, ...optional }; }
export interface ProvisionalTokenResponse {
    token_type: string;
    access_token: string;
    expires_in: number;
    scope: string;
    id_token: string;
    refresh_token?: string | null;
    scopes?: string[] | null;
    expires_at_s?: number | null;
}
export function ProvisionalTokenResponse(token_type: ProvisionalTokenResponse["token_type"], access_token: ProvisionalTokenResponse["access_token"], expires_in: ProvisionalTokenResponse["expires_in"], scope: ProvisionalTokenResponse["scope"], id_token: ProvisionalTokenResponse["id_token"], optional?: Omit<ProvisionalTokenResponse, "token_type" | "access_token" | "expires_in" | "scope" | "id_token">): ProvisionalTokenResponse { return { token_type, access_token, expires_in, scope, id_token, ...optional }; }
export interface PruneGuildRequest {
    days?: number | null;
    compute_prune_count?: boolean | null;
    include_roles?: string | SnowflakeType[] | null;
}
export function PruneGuildRequest(optional?: PruneGuildRequest): PruneGuildRequest { return { ...optional }; }
export interface PurchaseNotificationResponse {
    type: PurchaseType;
    guild_product_purchase?: GuildProductPurchaseResponse;
}
export function PurchaseNotificationResponse(type: PurchaseNotificationResponse["type"], optional?: Omit<PurchaseNotificationResponse, "type">): PurchaseNotificationResponse { return { type, ...optional }; }
export enum PurchaseType {
    GUILD_PRODUCT = 0
}
export interface QuarantineUserAction {
    type: AutomodActionType.QUARANTINE_USER;
    metadata?: null | QuarantineUserActionMetadata;
}
export function QuarantineUserAction(optional?: Omit<QuarantineUserAction, "type">): QuarantineUserAction { return { type: AutomodActionType.QUARANTINE_USER, ...optional }; }
export interface QuarantineUserActionMetadata {
    [key: string]: never;
}
export function QuarantineUserActionMetadata(): QuarantineUserActionMetadata { return {}; }
export interface QuarantineUserActionMetadataResponse {
    [key: string]: never;
}
export function QuarantineUserActionMetadataResponse(): QuarantineUserActionMetadataResponse { return {}; }
export interface QuarantineUserActionResponse {
    type: AutomodActionType.QUARANTINE_USER;
    metadata: QuarantineUserActionMetadataResponse;
}
export function QuarantineUserActionResponse(metadata: QuarantineUserActionResponse["metadata"]): QuarantineUserActionResponse { return { type: AutomodActionType.QUARANTINE_USER, metadata }; }
export interface RadioGroupComponentForModalRequest {
    type: MessageComponentTypes.RADIO_GROUP;
    id?: number | null;
    custom_id: string;
    required?: boolean | null;
    options: RadioGroupOptionForRequest[];
}
export function RadioGroupComponentForModalRequest(custom_id: RadioGroupComponentForModalRequest["custom_id"], options: RadioGroupComponentForModalRequest["options"], optional?: Omit<RadioGroupComponentForModalRequest, "type" | "custom_id" | "options">): RadioGroupComponentForModalRequest { return { type: MessageComponentTypes.RADIO_GROUP, custom_id, options, ...optional }; }
export interface RadioGroupOptionForRequest {
    label: string;
    value: string;
    description?: string | null;
    default?: boolean | null;
}
export function RadioGroupOptionForRequest(label: RadioGroupOptionForRequest["label"], value: RadioGroupOptionForRequest["value"], optional?: Omit<RadioGroupOptionForRequest, "label" | "value">): RadioGroupOptionForRequest { return { label, value, ...optional }; }
export enum ReactionTypes {
    /**
     * Normal reaction type
     */
    NORMAL = 0,
    /**
     * Burst reaction type
     */
    BURST = 1
}
export interface ResolvedObjectsResponse {
    users?: {
        [key: string]: UserResponse;
    } | null;
    members?: {
        [key: string]: BasicGuildMemberResponse;
    } | null;
    channels?: {
        [key: string]: GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse;
    } | null;
    roles?: {
        [key: string]: GuildRoleResponse;
    } | null;
}
export function ResolvedObjectsResponse(optional?: ResolvedObjectsResponse): ResolvedObjectsResponse { return { ...optional }; }
export interface ResourceChannelResponse {
    channel_id: SnowflakeType;
    title: string;
    emoji?: SettingsEmojiResponse;
    icon?: string;
    description: string;
}
export function ResourceChannelResponse(channel_id: ResourceChannelResponse["channel_id"], title: ResourceChannelResponse["title"], description: ResourceChannelResponse["description"], optional?: Omit<ResourceChannelResponse, "channel_id" | "title" | "description">): ResourceChannelResponse { return { channel_id, title, description, ...optional }; }
export interface RichEmbed {
    type?: string | null;
    url?: string | null;
    title?: string | null;
    color?: number | null;
    timestamp?: string | null;
    description?: string | null;
    author?: null | RichEmbedAuthor;
    image?: null | RichEmbedImage;
    thumbnail?: null | RichEmbedThumbnail;
    footer?: null | RichEmbedFooter;
    fields?: RichEmbedField[] | null;
    provider?: null | RichEmbedProvider;
    video?: null | RichEmbedVideo;
}
export function RichEmbed(optional?: RichEmbed): RichEmbed { return { ...optional }; }
export interface RichEmbedAuthor {
    name?: string | null;
    url?: string | null;
    icon_url?: string | null;
}
export function RichEmbedAuthor(optional?: RichEmbedAuthor): RichEmbedAuthor { return { ...optional }; }
export interface RichEmbedField {
    name: string;
    value: string;
    inline?: boolean | null;
}
export function RichEmbedField(name: RichEmbedField["name"], value: RichEmbedField["value"], optional?: Omit<RichEmbedField, "name" | "value">): RichEmbedField { return { name, value, ...optional }; }
export interface RichEmbedFooter {
    text?: string | null;
    icon_url?: string | null;
}
export function RichEmbedFooter(optional?: RichEmbedFooter): RichEmbedFooter { return { ...optional }; }
export interface RichEmbedImage {
    url?: string | null;
    width?: number | null;
    height?: number | null;
    placeholder?: string | null;
    placeholder_version?: number | null;
    is_animated?: boolean | null;
    description?: string | null;
}
export function RichEmbedImage(optional?: RichEmbedImage): RichEmbedImage { return { ...optional }; }
export interface RichEmbedProvider {
    name?: string | null;
    url?: string | null;
}
export function RichEmbedProvider(optional?: RichEmbedProvider): RichEmbedProvider { return { ...optional }; }
export interface RichEmbedThumbnail {
    url?: string | null;
    width?: number | null;
    height?: number | null;
    placeholder?: string | null;
    placeholder_version?: number | null;
    is_animated?: boolean | null;
    description?: string | null;
}
export function RichEmbedThumbnail(optional?: RichEmbedThumbnail): RichEmbedThumbnail { return { ...optional }; }
export interface RichEmbedVideo {
    url?: string | null;
    width?: number | null;
    height?: number | null;
    placeholder?: string | null;
    placeholder_version?: number | null;
    is_animated?: boolean | null;
    description?: string | null;
}
export function RichEmbedVideo(optional?: RichEmbedVideo): RichEmbedVideo { return { ...optional }; }
export interface RoleColors {
    primary_color?: number | null;
    secondary_color?: number | null;
    tertiary_color?: number | null;
}
export function RoleColors(optional?: RoleColors): RoleColors { return { ...optional }; }
export interface RoleSelectComponentForMessageRequest {
    type: MessageComponentTypes.ROLE_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: RoleSelectDefaultValue[] | null;
}
export function RoleSelectComponentForMessageRequest(custom_id: RoleSelectComponentForMessageRequest["custom_id"], optional?: Omit<RoleSelectComponentForMessageRequest, "type" | "custom_id">): RoleSelectComponentForMessageRequest { return { type: MessageComponentTypes.ROLE_SELECT, custom_id, ...optional }; }
export interface RoleSelectComponentForModalRequest {
    type: MessageComponentTypes.ROLE_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: RoleSelectDefaultValue[] | null;
}
export function RoleSelectComponentForModalRequest(custom_id: RoleSelectComponentForModalRequest["custom_id"], optional?: Omit<RoleSelectComponentForModalRequest, "type" | "custom_id">): RoleSelectComponentForModalRequest { return { type: MessageComponentTypes.ROLE_SELECT, custom_id, ...optional }; }
export interface RoleSelectComponentResponse {
    type: MessageComponentTypes.ROLE_SELECT;
    id: number;
    custom_id: string;
    placeholder?: string;
    min_values: number;
    max_values: number;
    disabled?: boolean;
    default_values?: RoleSelectDefaultValueResponse[];
}
export function RoleSelectComponentResponse(id: RoleSelectComponentResponse["id"], custom_id: RoleSelectComponentResponse["custom_id"], min_values: RoleSelectComponentResponse["min_values"], max_values: RoleSelectComponentResponse["max_values"], optional?: Omit<RoleSelectComponentResponse, "type" | "id" | "custom_id" | "min_values" | "max_values">): RoleSelectComponentResponse { return { type: MessageComponentTypes.ROLE_SELECT, id, custom_id, min_values, max_values, ...optional }; }
export interface RoleSelectDefaultValue {
    type: SnowflakeSelectDefaultValueTypes.ROLE;
    id: SnowflakeType;
}
export function RoleSelectDefaultValue(id: RoleSelectDefaultValue["id"]): RoleSelectDefaultValue { return { type: SnowflakeSelectDefaultValueTypes.ROLE, id }; }
export interface RoleSelectDefaultValueResponse {
    type: SnowflakeSelectDefaultValueTypes.ROLE;
    id: SnowflakeType;
}
export function RoleSelectDefaultValueResponse(id: RoleSelectDefaultValueResponse["id"]): RoleSelectDefaultValueResponse { return { type: SnowflakeSelectDefaultValueTypes.ROLE, id }; }
export interface SDKMessageRequest {
    content?: string | null;
    embeds?: RichEmbed[] | null;
    allowed_mentions?: null | MessageAllowedMentionsRequest;
    sticker_ids?: SnowflakeType[] | null;
    components?: (ActionRowComponentForMessageRequest | ContainerComponentForMessageRequest | FileComponentForMessageRequest | MediaGalleryComponentForMessageRequest | SectionComponentForMessageRequest | SeparatorComponentForMessageRequest | TextDisplayComponentForMessageRequest)[] | null;
    flags?: number | null;
    attachments?: MessageAttachmentRequest[] | null;
    poll?: null | PollCreateRequest;
    shared_client_theme?: null | CustomClientThemeShareRequest;
    message_reference?: null | MessageReferenceRequest;
    nonce?: number | string | null;
    enforce_nonce?: boolean | null;
    tts?: boolean | null;
}
export function SDKMessageRequest(optional?: SDKMessageRequest): SDKMessageRequest { return { ...optional }; }
export enum SKUIneligibilityReason {
    /**
     * Other / catch-all
     */
    OTHER = 0,
    /**
     * User already owns this SKU or one of its components
     */
    OWNS_SKU_OR_BUNDLE_COMPONENT = 1,
    /**
     * User account is not on an eligible platform
     */
    PLATFORM_RESTRICTION = 2
}
export interface ScheduledEventResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    name: string;
    description: string | null;
    channel_id: null | SnowflakeType;
    creator_id: null | SnowflakeType;
    creator?: UserResponse;
    image: string | null;
    scheduled_start_time: string;
    scheduled_end_time: string | null;
    status: GuildScheduledEventStatuses;
    entity_type: GuildScheduledEventEntityTypes;
    entity_id: null | SnowflakeType;
    user_count?: number;
    privacy_level: GuildScheduledEventPrivacyLevels;
    user_rsvp?: null | ScheduledEventUserResponse;
}
export function ScheduledEventResponse(id: ScheduledEventResponse["id"], guild_id: ScheduledEventResponse["guild_id"], name: ScheduledEventResponse["name"], description: ScheduledEventResponse["description"], channel_id: ScheduledEventResponse["channel_id"], creator_id: ScheduledEventResponse["creator_id"], image: ScheduledEventResponse["image"], scheduled_start_time: ScheduledEventResponse["scheduled_start_time"], scheduled_end_time: ScheduledEventResponse["scheduled_end_time"], status: ScheduledEventResponse["status"], entity_type: ScheduledEventResponse["entity_type"], entity_id: ScheduledEventResponse["entity_id"], privacy_level: ScheduledEventResponse["privacy_level"], optional?: Omit<ScheduledEventResponse, "id" | "guild_id" | "name" | "description" | "channel_id" | "creator_id" | "image" | "scheduled_start_time" | "scheduled_end_time" | "status" | "entity_type" | "entity_id" | "privacy_level">): ScheduledEventResponse { return { id, guild_id, name, description, channel_id, creator_id, image, scheduled_start_time, scheduled_end_time, status, entity_type, entity_id, privacy_level, ...optional }; }
export interface ScheduledEventUserResponse {
    guild_scheduled_event_id: SnowflakeType;
    user_id: SnowflakeType;
    user?: UserResponse;
    member?: GuildMemberResponse;
}
export function ScheduledEventUserResponse(guild_scheduled_event_id: ScheduledEventUserResponse["guild_scheduled_event_id"], user_id: ScheduledEventUserResponse["user_id"], optional?: Omit<ScheduledEventUserResponse, "guild_scheduled_event_id" | "user_id">): ScheduledEventUserResponse { return { guild_scheduled_event_id, user_id, ...optional }; }
export interface SearchIndexNotReadyResponse {
    message: string;
    code: number;
    documents_indexed: number;
    retry_after: number;
}
export function SearchIndexNotReadyResponse(message: SearchIndexNotReadyResponse["message"], code: SearchIndexNotReadyResponse["code"], documents_indexed: SearchIndexNotReadyResponse["documents_indexed"], retry_after: SearchIndexNotReadyResponse["retry_after"]): SearchIndexNotReadyResponse { return { message, code, documents_indexed, retry_after }; }
export interface SearchMessageResponse {
    type: MessageType;
    content: string;
    mentions: UserResponse[];
    mention_roles: SnowflakeType[];
    attachments: MessageAttachmentResponse[];
    embeds: MessageEmbedResponse[];
    timestamp: string;
    edited_timestamp: string | null;
    flags: number;
    components: (ActionRowComponentResponse | ContainerComponentResponse | FileComponentResponse | MediaGalleryComponentResponse | SectionComponentResponse | SeparatorComponentResponse | TextDisplayComponentResponse)[];
    stickers?: (GuildStickerResponse | StandardStickerResponse)[];
    sticker_items?: MessageStickerItemResponse[];
    id: SnowflakeType;
    channel_id: SnowflakeType;
    author: UserResponse;
    pinned: boolean;
    mention_everyone: boolean;
    tts: boolean;
    call?: MessageCallResponse;
    activity?: MessageActivityResponse;
    application?: BasicApplicationResponse;
    application_id?: SnowflakeType;
    interaction?: MessageInteractionResponse;
    nonce?: number | string;
    webhook_id?: SnowflakeType;
    message_reference?: MessageReferenceResponse;
    thread?: ThreadResponse;
    mention_channels?: MessageMentionChannelResponse[];
    role_subscription_data?: MessageRoleSubscriptionDataResponse;
    purchase_notification?: PurchaseNotificationResponse;
    position?: number;
    resolved?: ResolvedObjectsResponse;
    poll?: PollResponse;
    shared_client_theme?: CustomClientThemeResponse;
    interaction_metadata?: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse;
    message_snapshots?: MessageSnapshotResponse[];
    reactions?: MessageReactionResponse[];
    referenced_message?: null | BasicMessageResponse;
    hit: boolean;
}
export function SearchMessageResponse(type: SearchMessageResponse["type"], content: SearchMessageResponse["content"], mentions: SearchMessageResponse["mentions"], mention_roles: SearchMessageResponse["mention_roles"], attachments: SearchMessageResponse["attachments"], embeds: SearchMessageResponse["embeds"], timestamp: SearchMessageResponse["timestamp"], edited_timestamp: SearchMessageResponse["edited_timestamp"], flags: SearchMessageResponse["flags"], components: SearchMessageResponse["components"], id: SearchMessageResponse["id"], channel_id: SearchMessageResponse["channel_id"], author: SearchMessageResponse["author"], pinned: SearchMessageResponse["pinned"], mention_everyone: SearchMessageResponse["mention_everyone"], tts: SearchMessageResponse["tts"], hit: SearchMessageResponse["hit"], optional?: Omit<SearchMessageResponse, "type" | "content" | "mentions" | "mention_roles" | "attachments" | "embeds" | "timestamp" | "edited_timestamp" | "flags" | "components" | "id" | "channel_id" | "author" | "pinned" | "mention_everyone" | "tts" | "hit">): SearchMessageResponse { return { type, content, mentions, mention_roles, attachments, embeds, timestamp, edited_timestamp, flags, components, id, channel_id, author, pinned, mention_everyone, tts, hit, ...optional }; }
export enum SearchableEmbedType {
    IMAGE = "image",
    VIDEO = "video",
    GIFV = "gif",
    SOUND = "sound",
    ARTICLE = "article"
}
export interface SectionComponentForMessageRequest {
    type: MessageComponentTypes.SECTION;
    id?: number | null;
    components: TextDisplayComponentForMessageRequest[];
    accessory: ButtonComponentForMessageRequest | ThumbnailComponentForMessageRequest;
}
export function SectionComponentForMessageRequest(components: SectionComponentForMessageRequest["components"], accessory: SectionComponentForMessageRequest["accessory"], optional?: Omit<SectionComponentForMessageRequest, "type" | "components" | "accessory">): SectionComponentForMessageRequest { return { type: MessageComponentTypes.SECTION, components, accessory, ...optional }; }
export interface SectionComponentResponse {
    type: MessageComponentTypes.SECTION;
    id: number;
    components: TextDisplayComponentResponse[];
    accessory: ButtonComponentResponse | ThumbnailComponentResponse;
}
export function SectionComponentResponse(id: SectionComponentResponse["id"], components: SectionComponentResponse["components"], accessory: SectionComponentResponse["accessory"]): SectionComponentResponse { return { type: MessageComponentTypes.SECTION, id, components, accessory }; }
export interface SeparatorComponentForMessageRequest {
    type: MessageComponentTypes.SEPARATOR;
    id?: number | null;
    spacing?: null | MessageComponentSeparatorSpacingSize;
    divider?: boolean | null;
}
export function SeparatorComponentForMessageRequest(optional?: Omit<SeparatorComponentForMessageRequest, "type">): SeparatorComponentForMessageRequest { return { type: MessageComponentTypes.SEPARATOR, ...optional }; }
export interface SeparatorComponentResponse {
    type: MessageComponentTypes.SEPARATOR;
    id: number;
    spacing: MessageComponentSeparatorSpacingSize;
    divider: boolean;
}
export function SeparatorComponentResponse(id: SeparatorComponentResponse["id"], spacing: SeparatorComponentResponse["spacing"], divider: SeparatorComponentResponse["divider"]): SeparatorComponentResponse { return { type: MessageComponentTypes.SEPARATOR, id, spacing, divider }; }
export interface SettingsEmojiResponse {
    id: null | SnowflakeType;
    name: string | null;
    animated: boolean;
}
export function SettingsEmojiResponse(id: SettingsEmojiResponse["id"], name: SettingsEmojiResponse["name"], animated: SettingsEmojiResponse["animated"]): SettingsEmojiResponse { return { id, name, animated }; }
export interface SlackWebhook {
    text?: string | null;
    username?: string | null;
    icon_url?: string | null;
    attachments?: WebhookSlackEmbed[] | null;
}
export function SlackWebhook(optional?: SlackWebhook): SlackWebhook { return { ...optional }; }
export enum SnowflakeSelectDefaultValueTypes {
    USER = "user",
    ROLE = "role",
    CHANNEL = "channel"
}
export type SnowflakeType = `${bigint}`;
export interface SocialLayerSKUPurchaseEligibilityCallbackData {
    eligible: boolean;
    ineligible_reason?: null | SKUIneligibilityReason;
    ineligible_reason_description?: string | null;
}
export function SocialLayerSKUPurchaseEligibilityCallbackData(eligible: SocialLayerSKUPurchaseEligibilityCallbackData["eligible"], optional?: Omit<SocialLayerSKUPurchaseEligibilityCallbackData, "eligible">): SocialLayerSKUPurchaseEligibilityCallbackData { return { eligible, ...optional }; }
export interface SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest {
    type: InteractionCallbackTypes.SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY;
    data: SocialLayerSKUPurchaseEligibilityCallbackData;
}
export function SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest(data: SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest["data"]): SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest { return { type: InteractionCallbackTypes.SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY, data }; }
export enum SortingMode {
    RELEVANCE = "relevance",
    TIMESTAMP = "timestamp"
}
export enum SortingOrder {
    ASC = "asc",
    DESC = "desc"
}
export interface SoundboardCreateRequest {
    name: string;
    volume?: number | null;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
    sound: string;
}
export function SoundboardCreateRequest(name: SoundboardCreateRequest["name"], sound: SoundboardCreateRequest["sound"], optional?: Omit<SoundboardCreateRequest, "name" | "sound">): SoundboardCreateRequest { return { name, sound, ...optional }; }
export interface SoundboardPatchRequestPartial {
    name?: string;
    volume?: number | null;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
}
export function SoundboardPatchRequestPartial(optional?: SoundboardPatchRequestPartial): SoundboardPatchRequestPartial { return { ...optional }; }
export interface SoundboardSoundResponse {
    name: string;
    sound_id: SnowflakeType;
    volume: number;
    emoji_id: null | SnowflakeType;
    emoji_name: string | null;
    guild_id?: SnowflakeType;
    available: boolean;
    user?: UserResponse;
}
export function SoundboardSoundResponse(name: SoundboardSoundResponse["name"], sound_id: SoundboardSoundResponse["sound_id"], volume: SoundboardSoundResponse["volume"], emoji_id: SoundboardSoundResponse["emoji_id"], emoji_name: SoundboardSoundResponse["emoji_name"], available: SoundboardSoundResponse["available"], optional?: Omit<SoundboardSoundResponse, "name" | "sound_id" | "volume" | "emoji_id" | "emoji_name" | "available">): SoundboardSoundResponse { return { name, sound_id, volume, emoji_id, emoji_name, available, ...optional }; }
export interface SoundboardSoundSendRequest {
    sound_id: SnowflakeType;
    source_guild_id?: null | SnowflakeType;
}
export function SoundboardSoundSendRequest(sound_id: SoundboardSoundSendRequest["sound_id"], optional?: Omit<SoundboardSoundSendRequest, "sound_id">): SoundboardSoundSendRequest { return { sound_id, ...optional }; }
export interface SpamLinkRuleResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    creator_id: SnowflakeType;
    name: string;
    event_type: AutomodEventType;
    actions: (BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse)[];
    trigger_type: AutomodTriggerType.SPAM_LINK;
    enabled: boolean;
    exempt_roles: SnowflakeType[];
    exempt_channels: SnowflakeType[];
    trigger_metadata: SpamLinkTriggerMetadataResponse;
}
export function SpamLinkRuleResponse(id: SpamLinkRuleResponse["id"], guild_id: SpamLinkRuleResponse["guild_id"], creator_id: SpamLinkRuleResponse["creator_id"], name: SpamLinkRuleResponse["name"], event_type: SpamLinkRuleResponse["event_type"], actions: SpamLinkRuleResponse["actions"], enabled: SpamLinkRuleResponse["enabled"], exempt_roles: SpamLinkRuleResponse["exempt_roles"], exempt_channels: SpamLinkRuleResponse["exempt_channels"], trigger_metadata: SpamLinkRuleResponse["trigger_metadata"]): SpamLinkRuleResponse { return { trigger_type: AutomodTriggerType.SPAM_LINK, id, guild_id, creator_id, name, event_type, actions, enabled, exempt_roles, exempt_channels, trigger_metadata }; }
export interface SpamLinkTriggerMetadataResponse {
    [key: string]: never;
}
export function SpamLinkTriggerMetadataResponse(): SpamLinkTriggerMetadataResponse { return {}; }
export interface StageInstanceResponse {
    guild_id: SnowflakeType;
    channel_id: SnowflakeType;
    topic: string;
    privacy_level: StageInstancesPrivacyLevels;
    id: SnowflakeType;
    discoverable_disabled: boolean;
    guild_scheduled_event_id: null | SnowflakeType;
}
export function StageInstanceResponse(guild_id: StageInstanceResponse["guild_id"], channel_id: StageInstanceResponse["channel_id"], topic: StageInstanceResponse["topic"], privacy_level: StageInstanceResponse["privacy_level"], id: StageInstanceResponse["id"], discoverable_disabled: StageInstanceResponse["discoverable_disabled"], guild_scheduled_event_id: StageInstanceResponse["guild_scheduled_event_id"]): StageInstanceResponse { return { guild_id, channel_id, topic, privacy_level, id, discoverable_disabled, guild_scheduled_event_id }; }
export enum StageInstancesPrivacyLevels {
    /**
     * The Stage instance is visible publicly. (deprecated)
     */
    PUBLIC = 1,
    /**
     * The Stage instance is visible publicly. (deprecated)
     */
    GUILD_ONLY = 2
}
export interface StageScheduledEventCreateRequest {
    name: string;
    description?: string | null;
    image?: string | null;
    scheduled_start_time: string;
    scheduled_end_time?: string | null;
    privacy_level: GuildScheduledEventPrivacyLevels;
    entity_type: GuildScheduledEventEntityTypes.STAGE_INSTANCE;
    channel_id?: null | SnowflakeType;
    entity_metadata?: null | EntityMetadataStageInstance;
}
export function StageScheduledEventCreateRequest(name: StageScheduledEventCreateRequest["name"], scheduled_start_time: StageScheduledEventCreateRequest["scheduled_start_time"], privacy_level: StageScheduledEventCreateRequest["privacy_level"], optional?: Omit<StageScheduledEventCreateRequest, "entity_type" | "name" | "scheduled_start_time" | "privacy_level">): StageScheduledEventCreateRequest { return { entity_type: GuildScheduledEventEntityTypes.STAGE_INSTANCE, name, scheduled_start_time, privacy_level, ...optional }; }
export interface StageScheduledEventPatchRequestPartial {
    status?: null | GuildScheduledEventStatuses;
    name?: string;
    description?: string | null;
    image?: string | null;
    scheduled_start_time?: string;
    scheduled_end_time?: string | null;
    entity_type?: null | GuildScheduledEventEntityTypes.STAGE_INSTANCE;
    privacy_level?: GuildScheduledEventPrivacyLevels;
    channel_id?: null | SnowflakeType;
    entity_metadata?: null | EntityMetadataStageInstance;
}
export function StageScheduledEventPatchRequestPartial(optional?: StageScheduledEventPatchRequestPartial): StageScheduledEventPatchRequestPartial { return { ...optional }; }
export interface StageScheduledEventResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    name: string;
    description: string | null;
    channel_id: null | SnowflakeType;
    creator_id: null | SnowflakeType;
    creator?: UserResponse;
    image: string | null;
    scheduled_start_time: string;
    scheduled_end_time: string | null;
    status: GuildScheduledEventStatuses;
    entity_type: GuildScheduledEventEntityTypes.STAGE_INSTANCE;
    entity_id: null | SnowflakeType;
    user_count?: number;
    privacy_level: GuildScheduledEventPrivacyLevels;
    user_rsvp?: null | ScheduledEventUserResponse;
    entity_metadata: null | EntityMetadataStageInstanceResponse;
}
export function StageScheduledEventResponse(id: StageScheduledEventResponse["id"], guild_id: StageScheduledEventResponse["guild_id"], name: StageScheduledEventResponse["name"], description: StageScheduledEventResponse["description"], channel_id: StageScheduledEventResponse["channel_id"], creator_id: StageScheduledEventResponse["creator_id"], image: StageScheduledEventResponse["image"], scheduled_start_time: StageScheduledEventResponse["scheduled_start_time"], scheduled_end_time: StageScheduledEventResponse["scheduled_end_time"], status: StageScheduledEventResponse["status"], entity_id: StageScheduledEventResponse["entity_id"], privacy_level: StageScheduledEventResponse["privacy_level"], entity_metadata: StageScheduledEventResponse["entity_metadata"], optional?: Omit<StageScheduledEventResponse, "entity_type" | "id" | "guild_id" | "name" | "description" | "channel_id" | "creator_id" | "image" | "scheduled_start_time" | "scheduled_end_time" | "status" | "entity_id" | "privacy_level" | "entity_metadata">): StageScheduledEventResponse { return { entity_type: GuildScheduledEventEntityTypes.STAGE_INSTANCE, id, guild_id, name, description, channel_id, creator_id, image, scheduled_start_time, scheduled_end_time, status, entity_id, privacy_level, entity_metadata, ...optional }; }
export interface StandardStickerResponse {
    id: SnowflakeType;
    name: string;
    tags: string;
    type: StickerTypes.STANDARD;
    format_type: null | StickerFormatTypes;
    description: string | null;
    pack_id: SnowflakeType;
    sort_value: number;
}
export function StandardStickerResponse(id: StandardStickerResponse["id"], name: StandardStickerResponse["name"], tags: StandardStickerResponse["tags"], format_type: StandardStickerResponse["format_type"], description: StandardStickerResponse["description"], pack_id: StandardStickerResponse["pack_id"], sort_value: StandardStickerResponse["sort_value"]): StandardStickerResponse { return { type: StickerTypes.STANDARD, id, name, tags, format_type, description, pack_id, sort_value }; }
export enum StickerFormatTypes {
    PNG = 1,
    APNG = 2,
    LOTTIE = 3,
    GIF = 4
}
export interface StickerPackCollectionResponse {
    sticker_packs: StickerPackResponse[];
}
export function StickerPackCollectionResponse(sticker_packs: StickerPackCollectionResponse["sticker_packs"]): StickerPackCollectionResponse { return { sticker_packs }; }
export interface StickerPackResponse {
    id: SnowflakeType;
    sku_id: SnowflakeType;
    name: string;
    description: string | null;
    stickers: StandardStickerResponse[];
    cover_sticker_id?: SnowflakeType;
    banner_asset_id?: SnowflakeType;
}
export function StickerPackResponse(id: StickerPackResponse["id"], sku_id: StickerPackResponse["sku_id"], name: StickerPackResponse["name"], description: StickerPackResponse["description"], stickers: StickerPackResponse["stickers"], optional?: Omit<StickerPackResponse, "id" | "sku_id" | "name" | "description" | "stickers">): StickerPackResponse { return { id, sku_id, name, description, stickers, ...optional }; }
export enum StickerTypes {
    /**
     * an official sticker in a pack, part of Nitro or in a removed purchasable pack
     */
    STANDARD = 1,
    /**
     * a sticker uploaded to a guild for the guild's members
     */
    GUILD = 2
}
export interface StringSelectComponentForMessageRequest {
    type: MessageComponentTypes.STRING_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    options: StringSelectOptionForRequest[];
}
export function StringSelectComponentForMessageRequest(custom_id: StringSelectComponentForMessageRequest["custom_id"], options: StringSelectComponentForMessageRequest["options"], optional?: Omit<StringSelectComponentForMessageRequest, "type" | "custom_id" | "options">): StringSelectComponentForMessageRequest { return { type: MessageComponentTypes.STRING_SELECT, custom_id, options, ...optional }; }
export interface StringSelectComponentForModalRequest {
    type: MessageComponentTypes.STRING_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    options: StringSelectOptionForRequest[];
}
export function StringSelectComponentForModalRequest(custom_id: StringSelectComponentForModalRequest["custom_id"], options: StringSelectComponentForModalRequest["options"], optional?: Omit<StringSelectComponentForModalRequest, "type" | "custom_id" | "options">): StringSelectComponentForModalRequest { return { type: MessageComponentTypes.STRING_SELECT, custom_id, options, ...optional }; }
export interface StringSelectComponentResponse {
    type: MessageComponentTypes.STRING_SELECT;
    id: number;
    custom_id: string;
    placeholder?: string;
    min_values: number;
    max_values: number;
    disabled?: boolean;
    options: StringSelectOptionResponse[];
}
export function StringSelectComponentResponse(id: StringSelectComponentResponse["id"], custom_id: StringSelectComponentResponse["custom_id"], min_values: StringSelectComponentResponse["min_values"], max_values: StringSelectComponentResponse["max_values"], options: StringSelectComponentResponse["options"], optional?: Omit<StringSelectComponentResponse, "type" | "id" | "custom_id" | "min_values" | "max_values" | "options">): StringSelectComponentResponse { return { type: MessageComponentTypes.STRING_SELECT, id, custom_id, min_values, max_values, options, ...optional }; }
export interface StringSelectOptionForRequest {
    label: string;
    value: string;
    description?: string | null;
    default?: boolean | null;
    emoji?: null | ComponentEmojiForRequest;
}
export function StringSelectOptionForRequest(label: StringSelectOptionForRequest["label"], value: StringSelectOptionForRequest["value"], optional?: Omit<StringSelectOptionForRequest, "label" | "value">): StringSelectOptionForRequest { return { label, value, ...optional }; }
export interface StringSelectOptionResponse {
    label: string;
    value: string;
    description?: string;
    emoji?: ComponentEmojiResponse;
    default?: boolean;
}
export function StringSelectOptionResponse(label: StringSelectOptionResponse["label"], value: StringSelectOptionResponse["value"], optional?: Omit<StringSelectOptionResponse, "label" | "value">): StringSelectOptionResponse { return { label, value, ...optional }; }
export interface TargetUsersJobStatusResponse {
    /**
     * The status of the job processing the target users.
     */
    status: TargetUsersJobStatusTypes;
    /**
     * The total number of users in the provided list.
     */
    total_users: UInt32Type;
    /**
     * The number of users processed so far.
     */
    processed_users: UInt32Type;
    /**
     * The timestamp when the job was created.
     */
    created_at: string | null;
    /**
     * The timestamp when the job was successfully completed.
     */
    completed_at: string | null;
    /**
     * The error message if the job failed.
     */
    error_message: string | null;
}
export function TargetUsersJobStatusResponse(status: TargetUsersJobStatusResponse["status"], total_users: TargetUsersJobStatusResponse["total_users"], processed_users: TargetUsersJobStatusResponse["processed_users"], created_at: TargetUsersJobStatusResponse["created_at"], completed_at: TargetUsersJobStatusResponse["completed_at"], error_message: TargetUsersJobStatusResponse["error_message"]): TargetUsersJobStatusResponse { return { status, total_users, processed_users, created_at, completed_at, error_message }; }
export enum TargetUsersJobStatusTypes {
    /**
     * The default value.
     */
    UNSPECIFIED = 0,
    /**
     * The job is still being processed.
     */
    PROCESSING = 1,
    /**
     * The job has been completed successfully.
     */
    COMPLETED = 2,
    /**
     * The job has failed, see error_message field for more details.
     */
    FAILED = 3
}
export interface TeamMemberResponse {
    user: UserResponse;
    team_id: SnowflakeType;
    membership_state: TeamMembershipStates;
    role: TeamMemberRoles;
    permissions: string[];
}
export function TeamMemberResponse(user: TeamMemberResponse["user"], team_id: TeamMemberResponse["team_id"], membership_state: TeamMemberResponse["membership_state"], role: TeamMemberResponse["role"], permissions: TeamMemberResponse["permissions"]): TeamMemberResponse { return { user, team_id, membership_state, role, permissions }; }
export enum TeamMemberRoles {
    /**
     * Admins have similar access as owners, except they cannot take destructive actions on the team or team-owned apps.
     */
    ADMIN = "admin",
    /**
     * Developers can access information about team-owned apps, like the client secret or public key. They can also take limited actions on team-owned apps, like configuring interaction endpoints or resetting the bot token. Members with the Developer role cannot manage the team or its members, or take destructive actions on team-owned apps.
     */
    DEVELOPER = "developer",
    /**
     * Read-only members can access information about a team and any team-owned apps. Some examples include getting the IDs of applications and exporting payout records. Members can also invite bots associated with team-owned apps that are marked private.
     */
    READ_ONLY = "read_only"
}
export enum TeamMembershipStates {
    /**
     * User has been invited to the team.
     */
    INVITED = 1,
    /**
     * User has accepted the team invitation.
     */
    ACCEPTED = 2
}
export interface TeamResponse {
    id: SnowflakeType;
    icon: string | null;
    name: string;
    owner_user_id: SnowflakeType;
    members: TeamMemberResponse[];
}
export function TeamResponse(id: TeamResponse["id"], icon: TeamResponse["icon"], name: TeamResponse["name"], owner_user_id: TeamResponse["owner_user_id"], members: TeamResponse["members"]): TeamResponse { return { id, icon, name, owner_user_id, members }; }
export interface TermsFormFieldResponse {
    /**
     * Type of form field
     */
    field_type: GuildMemberVerificationFormFieldType.TERMS;
    /**
     * Label shown above field
     */
    label?: string;
    /**
     * Optional helper text shown below label
     */
    description?: string;
    /**
     * Whether applicant must fill in field
     */
    required?: boolean;
    /**
     * Terms applicant must acknowledge
     */
    values: string[];
    /**
     * Whether applicant accepted terms
     */
    response?: boolean;
}
export function TermsFormFieldResponse(values: TermsFormFieldResponse["values"], optional?: Omit<TermsFormFieldResponse, "field_type" | "values">): TermsFormFieldResponse { return { field_type: GuildMemberVerificationFormFieldType.TERMS, values, ...optional }; }
export interface TextDisplayComponentForMessageRequest {
    type: MessageComponentTypes.TEXT_DISPLAY;
    id?: number | null;
    content: string;
}
export function TextDisplayComponentForMessageRequest(content: TextDisplayComponentForMessageRequest["content"], optional?: Omit<TextDisplayComponentForMessageRequest, "type" | "content">): TextDisplayComponentForMessageRequest { return { type: MessageComponentTypes.TEXT_DISPLAY, content, ...optional }; }
export interface TextDisplayComponentForModalRequest {
    type: MessageComponentTypes.TEXT_DISPLAY;
    id?: number | null;
    content: string;
}
export function TextDisplayComponentForModalRequest(content: TextDisplayComponentForModalRequest["content"], optional?: Omit<TextDisplayComponentForModalRequest, "type" | "content">): TextDisplayComponentForModalRequest { return { type: MessageComponentTypes.TEXT_DISPLAY, content, ...optional }; }
export interface TextDisplayComponentResponse {
    type: MessageComponentTypes.TEXT_DISPLAY;
    id: number;
    content: string;
}
export function TextDisplayComponentResponse(id: TextDisplayComponentResponse["id"], content: TextDisplayComponentResponse["content"]): TextDisplayComponentResponse { return { type: MessageComponentTypes.TEXT_DISPLAY, id, content }; }
export interface TextInputComponentForModalRequest {
    type: MessageComponentTypes.TEXT_INPUT;
    id?: number | null;
    custom_id: string;
    style: TextInputStyleTypes;
    label?: string | null;
    value?: string | null;
    placeholder?: string | null;
    required?: boolean | null;
    min_length?: number | null;
    max_length?: number | null;
}
export function TextInputComponentForModalRequest(custom_id: TextInputComponentForModalRequest["custom_id"], style: TextInputComponentForModalRequest["style"], optional?: Omit<TextInputComponentForModalRequest, "type" | "custom_id" | "style">): TextInputComponentForModalRequest { return { type: MessageComponentTypes.TEXT_INPUT, custom_id, style, ...optional }; }
export interface TextInputComponentResponse {
    type: MessageComponentTypes.TEXT_INPUT;
    id: number;
    custom_id: string;
    style: TextInputStyleTypes;
    label: string | null;
    value?: string;
    placeholder?: string;
    required?: boolean;
    min_length: number | null;
    max_length: number | null;
}
export function TextInputComponentResponse(id: TextInputComponentResponse["id"], custom_id: TextInputComponentResponse["custom_id"], style: TextInputComponentResponse["style"], label: TextInputComponentResponse["label"], min_length: TextInputComponentResponse["min_length"], max_length: TextInputComponentResponse["max_length"], optional?: Omit<TextInputComponentResponse, "type" | "id" | "custom_id" | "style" | "label" | "min_length" | "max_length">): TextInputComponentResponse { return { type: MessageComponentTypes.TEXT_INPUT, id, custom_id, style, label, min_length, max_length, ...optional }; }
export interface TextInputFormFieldResponse {
    /**
     * Type of form field
     */
    field_type: GuildMemberVerificationFormFieldType.TEXT_INPUT;
    /**
     * Label shown above field
     */
    label?: string;
    /**
     * Optional helper text shown below label
     */
    description?: string;
    /**
     * Whether applicant must fill in field
     */
    required?: boolean;
    /**
     * Placeholder text shown in empty input
     */
    placeholder?: string;
    /**
     * Applicant's text response
     */
    response?: string;
}
export function TextInputFormFieldResponse(optional?: Omit<TextInputFormFieldResponse, "field_type">): TextInputFormFieldResponse { return { field_type: GuildMemberVerificationFormFieldType.TEXT_INPUT, ...optional }; }
export enum TextInputStyleTypes {
    /**
     * Single-line input
     */
    SHORT = 1,
    /**
     * Multi-line input
     */
    PARAGRAPH = 2
}
export enum ThreadAutoArchiveDuration {
    /**
     * One hour
     */
    ONE_HOUR = 60,
    /**
     * One day
     */
    ONE_DAY = 1440,
    /**
     * Three days
     */
    THREE_DAY = 4320,
    /**
     * Seven days
     */
    SEVEN_DAY = 10080
}
export interface ThreadMemberResponse {
    id: SnowflakeType;
    user_id: SnowflakeType;
    join_timestamp: string;
    flags: number;
    member?: GuildMemberResponse;
}
export function ThreadMemberResponse(id: ThreadMemberResponse["id"], user_id: ThreadMemberResponse["user_id"], join_timestamp: ThreadMemberResponse["join_timestamp"], flags: ThreadMemberResponse["flags"], optional?: Omit<ThreadMemberResponse, "id" | "user_id" | "join_timestamp" | "flags">): ThreadMemberResponse { return { id, user_id, join_timestamp, flags, ...optional }; }
export interface ThreadMetadataResponse {
    archived: boolean;
    archive_timestamp: string | null;
    auto_archive_duration: ThreadAutoArchiveDuration;
    locked: boolean;
    create_timestamp?: string;
    invitable?: boolean;
}
export function ThreadMetadataResponse(archived: ThreadMetadataResponse["archived"], archive_timestamp: ThreadMetadataResponse["archive_timestamp"], auto_archive_duration: ThreadMetadataResponse["auto_archive_duration"], locked: ThreadMetadataResponse["locked"], optional?: Omit<ThreadMetadataResponse, "archived" | "archive_timestamp" | "auto_archive_duration" | "locked">): ThreadMetadataResponse { return { archived, archive_timestamp, auto_archive_duration, locked, ...optional }; }
export interface ThreadResponse {
    id: SnowflakeType;
    type: ChannelTypes.ANNOUNCEMENT_THREAD | ChannelTypes.PUBLIC_THREAD | ChannelTypes.PRIVATE_THREAD;
    last_message_id?: null | SnowflakeType;
    flags: number;
    last_pin_timestamp?: string | null;
    guild_id: SnowflakeType;
    name: string;
    parent_id?: null | SnowflakeType;
    rate_limit_per_user?: number;
    bitrate?: number;
    user_limit?: number;
    rtc_region?: string | null;
    video_quality_mode?: VideoQualityModes;
    permissions?: string;
    owner_id: SnowflakeType;
    thread_metadata: ThreadMetadataResponse;
    message_count: number;
    member_count: number;
    total_message_sent: number;
    applied_tags?: SnowflakeType[];
    member?: ThreadMemberResponse;
}
export function ThreadResponse(id: ThreadResponse["id"], type: ThreadResponse["type"], flags: ThreadResponse["flags"], guild_id: ThreadResponse["guild_id"], name: ThreadResponse["name"], owner_id: ThreadResponse["owner_id"], thread_metadata: ThreadResponse["thread_metadata"], message_count: ThreadResponse["message_count"], member_count: ThreadResponse["member_count"], total_message_sent: ThreadResponse["total_message_sent"], optional?: Omit<ThreadResponse, "id" | "type" | "flags" | "guild_id" | "name" | "owner_id" | "thread_metadata" | "message_count" | "member_count" | "total_message_sent">): ThreadResponse { return { id, type, flags, guild_id, name, owner_id, thread_metadata, message_count, member_count, total_message_sent, ...optional }; }
export interface ThreadSearchResponse {
    threads: ThreadResponse[];
    members: ThreadMemberResponse[];
    has_more: boolean;
    first_messages?: MessageResponse[];
    total_results: number;
}
export function ThreadSearchResponse(threads: ThreadSearchResponse["threads"], members: ThreadSearchResponse["members"], has_more: ThreadSearchResponse["has_more"], total_results: ThreadSearchResponse["total_results"], optional?: Omit<ThreadSearchResponse, "threads" | "members" | "has_more" | "total_results">): ThreadSearchResponse { return { threads, members, has_more, total_results, ...optional }; }
export enum ThreadSearchTagSetting {
    /**
     * The thread tags must contain all tags in the search query
     */
    MATCH_ALL = "match_all",
    /**
     * The thread tags must contain at least one of tags in the search query
     */
    MATCH_SOME = "match_some"
}
export enum ThreadSortOrder {
    /**
     * Sort forum posts by activity
     */
    LATEST_ACTIVITY = 0,
    /**
     * Sort forum posts by creation time (from most recent to oldest)
     */
    CREATION_DATE = 1
}
export enum ThreadSortingMode {
    RELEVANCE = "relevance",
    CREATION_TIME = "creation_time",
    LAST_MESSAGE_TIME = "last_message_time",
    ARCHIVE_TIME = "archive_time"
}
export interface ThreadsResponse {
    threads: ThreadResponse[];
    members: ThreadMemberResponse[];
    has_more: boolean;
    first_messages?: MessageResponse[];
}
export function ThreadsResponse(threads: ThreadsResponse["threads"], members: ThreadsResponse["members"], has_more: ThreadsResponse["has_more"], optional?: Omit<ThreadsResponse, "threads" | "members" | "has_more">): ThreadsResponse { return { threads, members, has_more, ...optional }; }
export interface ThumbnailComponentForMessageRequest {
    type: MessageComponentTypes.THUMBNAIL;
    id?: number | null;
    description?: string | null;
    spoiler?: boolean | null;
    media: UnfurledMediaRequest;
}
export function ThumbnailComponentForMessageRequest(media: ThumbnailComponentForMessageRequest["media"], optional?: Omit<ThumbnailComponentForMessageRequest, "type" | "media">): ThumbnailComponentForMessageRequest { return { type: MessageComponentTypes.THUMBNAIL, media, ...optional }; }
export interface ThumbnailComponentResponse {
    type: MessageComponentTypes.THUMBNAIL;
    id: number;
    media: UnfurledMediaResponse;
    description: string | null;
    spoiler: boolean;
}
export function ThumbnailComponentResponse(id: ThumbnailComponentResponse["id"], media: ThumbnailComponentResponse["media"], description: ThumbnailComponentResponse["description"], spoiler: ThumbnailComponentResponse["spoiler"]): ThumbnailComponentResponse { return { type: MessageComponentTypes.THUMBNAIL, id, media, description, spoiler }; }
export interface TypingIndicatorResponse {
    [key: string]: never;
}
export function TypingIndicatorResponse(): TypingIndicatorResponse { return {}; }
export type UInt32Type = number;
export interface UnbanUserFromGuildRequest {
    [key: string]: never;
}
export function UnbanUserFromGuildRequest(): UnbanUserFromGuildRequest { return {}; }
export interface UnfurledMediaRequest {
    url: string;
}
export function UnfurledMediaRequest(url: UnfurledMediaRequest["url"]): UnfurledMediaRequest { return { url }; }
export interface UnfurledMediaRequestWithAttachmentReferenceRequired {
    url: string;
}
export function UnfurledMediaRequestWithAttachmentReferenceRequired(url: UnfurledMediaRequestWithAttachmentReferenceRequired["url"]): UnfurledMediaRequestWithAttachmentReferenceRequired { return { url }; }
export interface UnfurledMediaResponse {
    id: SnowflakeType;
    url: string;
    proxy_url: string;
    width?: number | null;
    height?: number | null;
    content_type?: string | null;
    attachment_id?: SnowflakeType;
}
export function UnfurledMediaResponse(id: UnfurledMediaResponse["id"], url: UnfurledMediaResponse["url"], proxy_url: UnfurledMediaResponse["proxy_url"], optional?: Omit<UnfurledMediaResponse, "id" | "url" | "proxy_url">): UnfurledMediaResponse { return { id, url, proxy_url, ...optional }; }
export interface UpdateApplicationUserRoleConnectionRequest {
    platform_name?: string | null;
    platform_username?: string | null;
    metadata?: {
        [key: string]: string;
    } | null;
}
export function UpdateApplicationUserRoleConnectionRequest(optional?: UpdateApplicationUserRoleConnectionRequest): UpdateApplicationUserRoleConnectionRequest { return { ...optional }; }
export interface UpdateDMRequestPartial {
    name?: string | null;
}
export function UpdateDMRequestPartial(optional?: UpdateDMRequestPartial): UpdateDMRequestPartial { return { ...optional }; }
export interface UpdateDefaultReactionEmojiRequest {
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
}
export function UpdateDefaultReactionEmojiRequest(optional?: UpdateDefaultReactionEmojiRequest): UpdateDefaultReactionEmojiRequest { return { ...optional }; }
export interface UpdateGroupDMRequestPartial {
    name?: string | null;
    icon?: string | null;
}
export function UpdateGroupDMRequestPartial(optional?: UpdateGroupDMRequestPartial): UpdateGroupDMRequestPartial { return { ...optional }; }
export interface UpdateGuildChannelRequestPartial {
    type?: null | (ChannelTypes.GUILD_TEXT | ChannelTypes.GUILD_VOICE | ChannelTypes.GUILD_CATEGORY | ChannelTypes.GUILD_ANNOUNCEMENT | ChannelTypes.GUILD_STAGE_VOICE | ChannelTypes.GUILD_DIRECTORY | ChannelTypes.GUILD_FORUM);
    name?: string;
    position?: number | null;
    topic?: string | null;
    bitrate?: number | null;
    user_limit?: number | null;
    nsfw?: boolean | null;
    rate_limit_per_user?: number | null;
    parent_id?: null | SnowflakeType;
    permission_overwrites?: ChannelPermissionOverwriteRequest[] | null;
    rtc_region?: string | null;
    video_quality_mode?: null | VideoQualityModes;
    default_auto_archive_duration?: null | ThreadAutoArchiveDuration;
    default_reaction_emoji?: null | UpdateDefaultReactionEmojiRequest;
    default_thread_rate_limit_per_user?: number | null;
    default_sort_order?: null | ThreadSortOrder;
    default_forum_layout?: null | ForumLayout;
    default_tag_setting?: null | ThreadSearchTagSetting;
    flags?: number | null;
    available_tags?: UpdateThreadTagRequest[] | null;
}
export function UpdateGuildChannelRequestPartial(optional?: UpdateGuildChannelRequestPartial): UpdateGuildChannelRequestPartial { return { ...optional }; }
export interface UpdateGuildOnboardingRequest {
    prompts?: UpdateOnboardingPromptRequest[] | null;
    enabled?: boolean | null;
    default_channel_ids?: SnowflakeType[] | null;
    mode?: null | GuildOnboardingMode;
}
export function UpdateGuildOnboardingRequest(optional?: UpdateGuildOnboardingRequest): UpdateGuildOnboardingRequest { return { ...optional }; }
export interface UpdateMessageInteractionCallbackRequest {
    type: InteractionCallbackTypes.UPDATE_MESSAGE;
    data: IncomingWebhookUpdateForInteractionCallbackRequestPartial;
}
export function UpdateMessageInteractionCallbackRequest(data: UpdateMessageInteractionCallbackRequest["data"]): UpdateMessageInteractionCallbackRequest { return { type: InteractionCallbackTypes.UPDATE_MESSAGE, data }; }
export interface UpdateMessageInteractionCallbackResponse {
    type: InteractionCallbackTypes.UPDATE_MESSAGE;
    message: MessageResponse;
}
export function UpdateMessageInteractionCallbackResponse(message: UpdateMessageInteractionCallbackResponse["message"]): UpdateMessageInteractionCallbackResponse { return { type: InteractionCallbackTypes.UPDATE_MESSAGE, message }; }
export interface UpdateOnboardingPromptRequest {
    title: string;
    options: OnboardingPromptOptionRequest[];
    single_select?: boolean | null;
    required?: boolean | null;
    in_onboarding?: boolean | null;
    type?: null | OnboardingPromptType;
    id: SnowflakeType;
}
export function UpdateOnboardingPromptRequest(title: UpdateOnboardingPromptRequest["title"], options: UpdateOnboardingPromptRequest["options"], id: UpdateOnboardingPromptRequest["id"], optional?: Omit<UpdateOnboardingPromptRequest, "title" | "options" | "id">): UpdateOnboardingPromptRequest { return { title, options, id, ...optional }; }
export interface UpdateRolePositionsRequest {
    id?: null | SnowflakeType;
    position?: number | null;
}
export function UpdateRolePositionsRequest(optional?: UpdateRolePositionsRequest): UpdateRolePositionsRequest { return { ...optional }; }
export interface UpdateRoleRequestPartial {
    name?: string | null;
    permissions?: number | null;
    color?: number | null;
    colors?: null | RoleColors;
    hoist?: boolean | null;
    mentionable?: boolean | null;
    icon?: string | null;
    unicode_emoji?: string | null;
}
export function UpdateRoleRequestPartial(optional?: UpdateRoleRequestPartial): UpdateRoleRequestPartial { return { ...optional }; }
export interface UpdateSelfVoiceStateRequestPartial {
    request_to_speak_timestamp?: string | null;
    suppress?: boolean | null;
    channel_id?: null | SnowflakeType;
}
export function UpdateSelfVoiceStateRequestPartial(optional?: UpdateSelfVoiceStateRequestPartial): UpdateSelfVoiceStateRequestPartial { return { ...optional }; }
export interface UpdateThreadRequestPartial {
    name?: string | null;
    archived?: boolean | null;
    locked?: boolean | null;
    invitable?: boolean | null;
    auto_archive_duration?: null | ThreadAutoArchiveDuration;
    rate_limit_per_user?: number | null;
    flags?: number | null;
    applied_tags?: SnowflakeType[] | null;
    bitrate?: number | null;
    user_limit?: number | null;
    rtc_region?: string | null;
    video_quality_mode?: null | VideoQualityModes;
}
export function UpdateThreadRequestPartial(optional?: UpdateThreadRequestPartial): UpdateThreadRequestPartial { return { ...optional }; }
export interface UpdateThreadTagRequest {
    name: string;
    emoji_id?: null | SnowflakeType;
    emoji_name?: string | null;
    moderated?: boolean | null;
    id?: null | SnowflakeType;
}
export function UpdateThreadTagRequest(name: UpdateThreadTagRequest["name"], optional?: Omit<UpdateThreadTagRequest, "name">): UpdateThreadTagRequest { return { name, ...optional }; }
export interface UpdateVoiceStateRequestPartial {
    suppress?: boolean | null;
    channel_id?: null | SnowflakeType;
}
export function UpdateVoiceStateRequestPartial(optional?: UpdateVoiceStateRequestPartial): UpdateVoiceStateRequestPartial { return { ...optional }; }
export interface UserAvatarDecorationResponse {
    asset: string;
    sku_id: null | SnowflakeType;
}
export function UserAvatarDecorationResponse(asset: UserAvatarDecorationResponse["asset"], sku_id: UserAvatarDecorationResponse["sku_id"]): UserAvatarDecorationResponse { return { asset, sku_id }; }
export interface UserCollectiblesResponse {
    nameplate: null | UserNameplateResponse;
}
export function UserCollectiblesResponse(nameplate: UserCollectiblesResponse["nameplate"]): UserCollectiblesResponse { return { nameplate }; }
export interface UserCommunicationDisabledAction {
    type: AutomodActionType.USER_COMMUNICATION_DISABLED;
    metadata: UserCommunicationDisabledActionMetadata;
}
export function UserCommunicationDisabledAction(metadata: UserCommunicationDisabledAction["metadata"]): UserCommunicationDisabledAction { return { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata }; }
export interface UserCommunicationDisabledActionMetadata {
    duration_seconds?: number | null;
}
export function UserCommunicationDisabledActionMetadata(optional?: UserCommunicationDisabledActionMetadata): UserCommunicationDisabledActionMetadata { return { ...optional }; }
export interface UserCommunicationDisabledActionMetadataResponse {
    duration_seconds: number;
}
export function UserCommunicationDisabledActionMetadataResponse(duration_seconds: UserCommunicationDisabledActionMetadataResponse["duration_seconds"]): UserCommunicationDisabledActionMetadataResponse { return { duration_seconds }; }
export interface UserCommunicationDisabledActionResponse {
    type: AutomodActionType.USER_COMMUNICATION_DISABLED;
    metadata: UserCommunicationDisabledActionMetadataResponse;
}
export function UserCommunicationDisabledActionResponse(metadata: UserCommunicationDisabledActionResponse["metadata"]): UserCommunicationDisabledActionResponse { return { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata }; }
export interface UserGuildOnboardingResponse {
    guild_id: SnowflakeType;
    prompts: OnboardingPromptResponse[];
    default_channel_ids: SnowflakeType[];
    enabled: boolean;
    mode: GuildOnboardingMode;
}
export function UserGuildOnboardingResponse(guild_id: UserGuildOnboardingResponse["guild_id"], prompts: UserGuildOnboardingResponse["prompts"], default_channel_ids: UserGuildOnboardingResponse["default_channel_ids"], enabled: UserGuildOnboardingResponse["enabled"], mode: UserGuildOnboardingResponse["mode"]): UserGuildOnboardingResponse { return { guild_id, prompts, default_channel_ids, enabled, mode }; }
export interface UserNameplateResponse {
    sku_id: null | SnowflakeType;
    asset: string;
    label: string;
    palette: NameplatePalette;
}
export function UserNameplateResponse(sku_id: UserNameplateResponse["sku_id"], asset: UserNameplateResponse["asset"], label: UserNameplateResponse["label"], palette: UserNameplateResponse["palette"]): UserNameplateResponse { return { sku_id, asset, label, palette }; }
export enum UserNotificationSettings {
    /**
     * members will receive notifications for all messages by default
     */
    ALL_MESSAGES = 0,
    /**
     * members will receive notifications only for messages that @mention them by default
     */
    ONLY_MENTIONS = 1
}
export interface UserPIIResponse {
    id: SnowflakeType;
    username: string;
    avatar: string | null;
    discriminator: string;
    public_flags: number;
    flags: Int53Type;
    bot?: boolean;
    system?: boolean;
    banner?: string | null;
    accent_color?: number | null;
    global_name: string | null;
    avatar_decoration_data?: null | UserAvatarDecorationResponse;
    collectibles?: null | UserCollectiblesResponse;
    primary_guild?: null | UserPrimaryGuildResponse;
    mfa_enabled: boolean;
    locale: AvailableLocalesEnum;
    premium_type?: PremiumTypes;
    email?: string | null;
    verified?: boolean;
}
export function UserPIIResponse(id: UserPIIResponse["id"], username: UserPIIResponse["username"], avatar: UserPIIResponse["avatar"], discriminator: UserPIIResponse["discriminator"], public_flags: UserPIIResponse["public_flags"], flags: UserPIIResponse["flags"], global_name: UserPIIResponse["global_name"], mfa_enabled: UserPIIResponse["mfa_enabled"], locale: UserPIIResponse["locale"], optional?: Omit<UserPIIResponse, "id" | "username" | "avatar" | "discriminator" | "public_flags" | "flags" | "global_name" | "mfa_enabled" | "locale">): UserPIIResponse { return { id, username, avatar, discriminator, public_flags, flags, global_name, mfa_enabled, locale, ...optional }; }
export interface UserPrimaryGuildResponse {
    identity_guild_id: null | SnowflakeType;
    identity_enabled: boolean | null;
    tag: string | null;
    badge: string | null;
}
export function UserPrimaryGuildResponse(identity_guild_id: UserPrimaryGuildResponse["identity_guild_id"], identity_enabled: UserPrimaryGuildResponse["identity_enabled"], tag: UserPrimaryGuildResponse["tag"], badge: UserPrimaryGuildResponse["badge"]): UserPrimaryGuildResponse { return { identity_guild_id, identity_enabled, tag, badge }; }
export interface UserResponse {
    id: SnowflakeType;
    username: string;
    avatar: string | null;
    discriminator: string;
    public_flags: number;
    flags: Int53Type;
    bot?: boolean;
    system?: boolean;
    banner?: string | null;
    accent_color?: number | null;
    global_name: string | null;
    avatar_decoration_data?: null | UserAvatarDecorationResponse;
    collectibles?: null | UserCollectiblesResponse;
    primary_guild: null | UserPrimaryGuildResponse;
}
export function UserResponse(id: UserResponse["id"], username: UserResponse["username"], avatar: UserResponse["avatar"], discriminator: UserResponse["discriminator"], public_flags: UserResponse["public_flags"], flags: UserResponse["flags"], global_name: UserResponse["global_name"], primary_guild: UserResponse["primary_guild"], optional?: Omit<UserResponse, "id" | "username" | "avatar" | "discriminator" | "public_flags" | "flags" | "global_name" | "primary_guild">): UserResponse { return { id, username, avatar, discriminator, public_flags, flags, global_name, primary_guild, ...optional }; }
export interface UserSelectComponentForMessageRequest {
    type: MessageComponentTypes.USER_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: UserSelectDefaultValue[] | null;
}
export function UserSelectComponentForMessageRequest(custom_id: UserSelectComponentForMessageRequest["custom_id"], optional?: Omit<UserSelectComponentForMessageRequest, "type" | "custom_id">): UserSelectComponentForMessageRequest { return { type: MessageComponentTypes.USER_SELECT, custom_id, ...optional }; }
export interface UserSelectComponentForModalRequest {
    type: MessageComponentTypes.USER_SELECT;
    id?: number | null;
    custom_id: string;
    placeholder?: string | null;
    min_values?: number | null;
    max_values?: number | null;
    disabled?: boolean | null;
    required?: boolean | null;
    default_values?: UserSelectDefaultValue[] | null;
}
export function UserSelectComponentForModalRequest(custom_id: UserSelectComponentForModalRequest["custom_id"], optional?: Omit<UserSelectComponentForModalRequest, "type" | "custom_id">): UserSelectComponentForModalRequest { return { type: MessageComponentTypes.USER_SELECT, custom_id, ...optional }; }
export interface UserSelectComponentResponse {
    type: MessageComponentTypes.USER_SELECT;
    id: number;
    custom_id: string;
    placeholder?: string;
    min_values: number;
    max_values: number;
    disabled?: boolean;
    default_values?: UserSelectDefaultValueResponse[];
}
export function UserSelectComponentResponse(id: UserSelectComponentResponse["id"], custom_id: UserSelectComponentResponse["custom_id"], min_values: UserSelectComponentResponse["min_values"], max_values: UserSelectComponentResponse["max_values"], optional?: Omit<UserSelectComponentResponse, "type" | "id" | "custom_id" | "min_values" | "max_values">): UserSelectComponentResponse { return { type: MessageComponentTypes.USER_SELECT, id, custom_id, min_values, max_values, ...optional }; }
export interface UserSelectDefaultValue {
    type: SnowflakeSelectDefaultValueTypes.USER;
    id: SnowflakeType;
}
export function UserSelectDefaultValue(id: UserSelectDefaultValue["id"]): UserSelectDefaultValue { return { type: SnowflakeSelectDefaultValueTypes.USER, id }; }
export interface UserSelectDefaultValueResponse {
    type: SnowflakeSelectDefaultValueTypes.USER;
    id: SnowflakeType;
}
export function UserSelectDefaultValueResponse(id: UserSelectDefaultValueResponse["id"]): UserSelectDefaultValueResponse { return { type: SnowflakeSelectDefaultValueTypes.USER, id }; }
export interface VanityURLErrorResponse {
    message: string;
    code: number;
}
export function VanityURLErrorResponse(message: VanityURLErrorResponse["message"], code: VanityURLErrorResponse["code"]): VanityURLErrorResponse { return { message, code }; }
export interface VanityURLResponse {
    code: string | null;
    uses: number;
    error?: null | VanityURLErrorResponse;
}
export function VanityURLResponse(code: VanityURLResponse["code"], uses: VanityURLResponse["uses"], optional?: Omit<VanityURLResponse, "code" | "uses">): VanityURLResponse { return { code, uses, ...optional }; }
export enum VerificationLevels {
    /**
     * unrestricted
     */
    NONE = 0,
    /**
     * must have verified email on account
     */
    LOW = 1,
    /**
     * must be registered on Discord for longer than 5 minutes
     */
    MEDIUM = 2,
    /**
     * must be a member of the server for longer than 10 minutes
     */
    HIGH = 3,
    /**
     * must have a verified phone number
     */
    VERY_HIGH = 4
}
export enum VideoQualityModes {
    /**
     * Discord chooses the quality for optimal performance
     */
    AUTO = 1,
    /**
     * 720p
     */
    FULL = 2
}
export interface VoiceRegionResponse {
    id: string;
    name: string;
    custom: boolean;
    deprecated: boolean;
    optimal: boolean;
}
export function VoiceRegionResponse(id: VoiceRegionResponse["id"], name: VoiceRegionResponse["name"], custom: VoiceRegionResponse["custom"], deprecated: VoiceRegionResponse["deprecated"], optimal: VoiceRegionResponse["optimal"]): VoiceRegionResponse { return { id, name, custom, deprecated, optimal }; }
export interface VoiceScheduledEventCreateRequest {
    name: string;
    description?: string | null;
    image?: string | null;
    scheduled_start_time: string;
    scheduled_end_time?: string | null;
    privacy_level: GuildScheduledEventPrivacyLevels;
    entity_type: GuildScheduledEventEntityTypes.VOICE;
    channel_id?: null | SnowflakeType;
    entity_metadata?: null | EntityMetadataVoice;
}
export function VoiceScheduledEventCreateRequest(name: VoiceScheduledEventCreateRequest["name"], scheduled_start_time: VoiceScheduledEventCreateRequest["scheduled_start_time"], privacy_level: VoiceScheduledEventCreateRequest["privacy_level"], optional?: Omit<VoiceScheduledEventCreateRequest, "entity_type" | "name" | "scheduled_start_time" | "privacy_level">): VoiceScheduledEventCreateRequest { return { entity_type: GuildScheduledEventEntityTypes.VOICE, name, scheduled_start_time, privacy_level, ...optional }; }
export interface VoiceScheduledEventPatchRequestPartial {
    status?: null | GuildScheduledEventStatuses;
    name?: string;
    description?: string | null;
    image?: string | null;
    scheduled_start_time?: string;
    scheduled_end_time?: string | null;
    entity_type?: null | GuildScheduledEventEntityTypes.VOICE;
    privacy_level?: GuildScheduledEventPrivacyLevels;
    channel_id?: null | SnowflakeType;
    entity_metadata?: null | EntityMetadataVoice;
}
export function VoiceScheduledEventPatchRequestPartial(optional?: VoiceScheduledEventPatchRequestPartial): VoiceScheduledEventPatchRequestPartial { return { ...optional }; }
export interface VoiceScheduledEventResponse {
    id: SnowflakeType;
    guild_id: SnowflakeType;
    name: string;
    description: string | null;
    channel_id: null | SnowflakeType;
    creator_id: null | SnowflakeType;
    creator?: UserResponse;
    image: string | null;
    scheduled_start_time: string;
    scheduled_end_time: string | null;
    status: GuildScheduledEventStatuses;
    entity_type: GuildScheduledEventEntityTypes.VOICE;
    entity_id: null | SnowflakeType;
    user_count?: number;
    privacy_level: GuildScheduledEventPrivacyLevels;
    user_rsvp?: null | ScheduledEventUserResponse;
    entity_metadata: null | EntityMetadataVoiceResponse;
}
export function VoiceScheduledEventResponse(id: VoiceScheduledEventResponse["id"], guild_id: VoiceScheduledEventResponse["guild_id"], name: VoiceScheduledEventResponse["name"], description: VoiceScheduledEventResponse["description"], channel_id: VoiceScheduledEventResponse["channel_id"], creator_id: VoiceScheduledEventResponse["creator_id"], image: VoiceScheduledEventResponse["image"], scheduled_start_time: VoiceScheduledEventResponse["scheduled_start_time"], scheduled_end_time: VoiceScheduledEventResponse["scheduled_end_time"], status: VoiceScheduledEventResponse["status"], entity_id: VoiceScheduledEventResponse["entity_id"], privacy_level: VoiceScheduledEventResponse["privacy_level"], entity_metadata: VoiceScheduledEventResponse["entity_metadata"], optional?: Omit<VoiceScheduledEventResponse, "entity_type" | "id" | "guild_id" | "name" | "description" | "channel_id" | "creator_id" | "image" | "scheduled_start_time" | "scheduled_end_time" | "status" | "entity_id" | "privacy_level" | "entity_metadata">): VoiceScheduledEventResponse { return { entity_type: GuildScheduledEventEntityTypes.VOICE, id, guild_id, name, description, channel_id, creator_id, image, scheduled_start_time, scheduled_end_time, status, entity_id, privacy_level, entity_metadata, ...optional }; }
export interface VoiceStateResponse {
    channel_id: null | SnowflakeType;
    deaf: boolean;
    guild_id: null | SnowflakeType;
    member?: GuildMemberResponse;
    mute: boolean;
    request_to_speak_timestamp: string | null;
    suppress: boolean;
    self_stream: boolean | null;
    self_deaf: boolean;
    self_mute: boolean;
    self_video: boolean;
    session_id: string;
    user_id: SnowflakeType;
}
export function VoiceStateResponse(channel_id: VoiceStateResponse["channel_id"], deaf: VoiceStateResponse["deaf"], guild_id: VoiceStateResponse["guild_id"], mute: VoiceStateResponse["mute"], request_to_speak_timestamp: VoiceStateResponse["request_to_speak_timestamp"], suppress: VoiceStateResponse["suppress"], self_stream: VoiceStateResponse["self_stream"], self_deaf: VoiceStateResponse["self_deaf"], self_mute: VoiceStateResponse["self_mute"], self_video: VoiceStateResponse["self_video"], session_id: VoiceStateResponse["session_id"], user_id: VoiceStateResponse["user_id"], optional?: Omit<VoiceStateResponse, "channel_id" | "deaf" | "guild_id" | "mute" | "request_to_speak_timestamp" | "suppress" | "self_stream" | "self_deaf" | "self_mute" | "self_video" | "session_id" | "user_id">): VoiceStateResponse { return { channel_id, deaf, guild_id, mute, request_to_speak_timestamp, suppress, self_stream, self_deaf, self_mute, self_video, session_id, user_id, ...optional }; }
export interface WebhookSlackEmbed {
    title?: string | null;
    title_link?: string | null;
    text?: string | null;
    color?: string | null;
    ts?: number | null;
    pretext?: string | null;
    footer?: string | null;
    footer_icon?: string | null;
    author_name?: string | null;
    author_link?: string | null;
    author_icon?: string | null;
    image_url?: string | null;
    thumb_url?: string | null;
    fields?: WebhookSlackEmbedField[] | null;
}
export function WebhookSlackEmbed(optional?: WebhookSlackEmbed): WebhookSlackEmbed { return { ...optional }; }
export interface WebhookSlackEmbedField {
    name?: string | null;
    value?: string | null;
    inline?: boolean | null;
}
export function WebhookSlackEmbedField(optional?: WebhookSlackEmbedField): WebhookSlackEmbedField { return { ...optional }; }
export interface WebhookSourceChannelResponse {
    id: SnowflakeType;
    name: string;
}
export function WebhookSourceChannelResponse(id: WebhookSourceChannelResponse["id"], name: WebhookSourceChannelResponse["name"]): WebhookSourceChannelResponse { return { id, name }; }
export interface WebhookSourceGuildResponse {
    id: SnowflakeType;
    icon: string | null;
    name: string;
}
export function WebhookSourceGuildResponse(id: WebhookSourceGuildResponse["id"], icon: WebhookSourceGuildResponse["icon"], name: WebhookSourceGuildResponse["name"]): WebhookSourceGuildResponse { return { id, icon, name }; }
export enum WebhookTypes {
    /**
     * Incoming Webhooks can post messages to channels with a generated token
     */
    GUILD_INCOMING = 1,
    /**
     * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
     */
    CHANNEL_FOLLOWER = 2,
    /**
     * Application webhooks are webhooks used with Interactions
     */
    APPLICATION_INCOMING = 3
}
export interface WelcomeMessageResponse {
    author_ids: SnowflakeType[];
    message: string;
}
export function WelcomeMessageResponse(author_ids: WelcomeMessageResponse["author_ids"], message: WelcomeMessageResponse["message"]): WelcomeMessageResponse { return { author_ids, message }; }
export interface WelcomeScreenPatchRequestPartial {
    description?: string | null;
    welcome_channels?: GuildWelcomeChannel[] | null;
    enabled?: boolean | null;
}
export function WelcomeScreenPatchRequestPartial(optional?: WelcomeScreenPatchRequestPartial): WelcomeScreenPatchRequestPartial { return { ...optional }; }
export interface WidgetActivity {
    name: string;
}
export function WidgetActivity(name: WidgetActivity["name"]): WidgetActivity { return { name }; }
export interface WidgetChannel {
    id: SnowflakeType;
    name: string;
    position: number;
}
export function WidgetChannel(id: WidgetChannel["id"], name: WidgetChannel["name"], position: WidgetChannel["position"]): WidgetChannel { return { id, name, position }; }
export enum WidgetImageStyles {
    /**
     * shield style widget with Discord icon and guild members online count
     */
    SHIELD = "shield",
    /**
     * large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget
     */
    BANNER1 = "banner1",
    /**
     * smaller widget style with guild icon, name and online count. Split on the right with Discord logo
     */
    BANNER2 = "banner2",
    /**
     * large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right
     */
    BANNER3 = "banner3",
    /**
     * large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom
     */
    BANNER4 = "banner4"
}
export interface WidgetMember {
    id: string;
    username: string;
    discriminator: WidgetUserDiscriminator;
    avatar: null;
    status: string;
    avatar_url: string;
    activity?: WidgetActivity;
    deaf?: boolean;
    mute?: boolean;
    self_deaf?: boolean;
    self_mute?: boolean;
    suppress?: boolean;
    channel_id?: SnowflakeType;
}
export function WidgetMember(id: WidgetMember["id"], username: WidgetMember["username"], discriminator: WidgetMember["discriminator"], avatar: WidgetMember["avatar"], status: WidgetMember["status"], avatar_url: WidgetMember["avatar_url"], optional?: Omit<WidgetMember, "id" | "username" | "discriminator" | "avatar" | "status" | "avatar_url">): WidgetMember { return { id, username, discriminator, avatar, status, avatar_url, ...optional }; }
export interface WidgetResponse {
    id: SnowflakeType;
    name: string;
    instant_invite: string | null;
    channels: WidgetChannel[];
    members: WidgetMember[];
    presence_count: number;
}
export function WidgetResponse(id: WidgetResponse["id"], name: WidgetResponse["name"], instant_invite: WidgetResponse["instant_invite"], channels: WidgetResponse["channels"], members: WidgetResponse["members"], presence_count: WidgetResponse["presence_count"]): WidgetResponse { return { id, name, instant_invite, channels, members, presence_count }; }
export interface WidgetSettingsResponse {
    enabled: boolean;
    channel_id: null | SnowflakeType;
}
export function WidgetSettingsResponse(enabled: WidgetSettingsResponse["enabled"], channel_id: WidgetSettingsResponse["channel_id"]): WidgetSettingsResponse { return { enabled, channel_id }; }
export enum WidgetUserDiscriminator {
    ZEROES = "0000"
}
/**
 * A single error, either for an API response or a specific field.
 */
export interface Error {
    /**
     * Discord internal error code. See error code reference
     */
    code: number;
    /**
     * Human-readable error message
     */
    message: string;
}
export function Error(code: Error["code"], message: Error["message"]): Error { return { code, message }; }
export interface InnerErrors {
    /**
     * The list of errors for this field
     */
    _errors: Error[];
}
export function InnerErrors(_errors: InnerErrors["_errors"]): InnerErrors { return { _errors }; }
export type ErrorDetails = {
    [key: string]: ErrorDetails;
} | InnerErrors;
export interface ErrorResponse extends Error {
    errors?: ErrorDetails;
}
export interface RatelimitedResponse extends Error {
    /**
     * The number of seconds to wait before retrying your request
     */
    retry_after: number;
    /**
     * Whether you are being ratelimited by the global ratelimit or a per-endpoint ratelimit
     */
    global: boolean;
}
export interface DeferredCreateMessageInteractionCallbackRequest {
    type: InteractionCallbackTypes.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE;
    data?: null | IncomingWebhookInteractionRequest;
}
export function DeferredCreateMessageInteractionCallbackRequest(optional?: Omit<DeferredCreateMessageInteractionCallbackRequest, "type">): DeferredCreateMessageInteractionCallbackRequest { return { type: InteractionCallbackTypes.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE, ...optional }; }
export interface DeferredUpdateMessageInteractionCallbackRequest {
    type: InteractionCallbackTypes.DEFERRED_UPDATE_MESSAGE;
}
export function DeferredUpdateMessageInteractionCallbackRequest(): DeferredUpdateMessageInteractionCallbackRequest { return { type: InteractionCallbackTypes.DEFERRED_UPDATE_MESSAGE }; }
export enum GrantTypes {
    AUTHORIZATION_CODE = "authorization_code",
    REFRESH_TOKEN = "refresh_token"
}
export interface AuthorizationCodeRequest {
    client_id: SnowflakeType;
    client_secret: string;
    grant_type: GrantTypes.REFRESH_TOKEN;
    refresh_token: string;
}
export function AuthorizationCodeRequest(client_id: AuthorizationCodeRequest["client_id"], client_secret: AuthorizationCodeRequest["client_secret"], refresh_token: AuthorizationCodeRequest["refresh_token"]): AuthorizationCodeRequest { return { grant_type: GrantTypes.REFRESH_TOKEN, client_id, client_secret, refresh_token }; }
export interface RefreshTokenRequest {
    client_id: SnowflakeType;
    client_secret: string;
    grant_type: GrantTypes.REFRESH_TOKEN;
    refresh_token: string;
}
export function RefreshTokenRequest(client_id: RefreshTokenRequest["client_id"], client_secret: RefreshTokenRequest["client_secret"], refresh_token: RefreshTokenRequest["refresh_token"]): RefreshTokenRequest { return { grant_type: GrantTypes.REFRESH_TOKEN, client_id, client_secret, refresh_token }; }
export interface AccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}
export function AccessTokenResponse(access_token: AccessTokenResponse["access_token"], token_type: AccessTokenResponse["token_type"], expires_in: AccessTokenResponse["expires_in"], refresh_token: AccessTokenResponse["refresh_token"], scope: AccessTokenResponse["scope"]): AccessTokenResponse { return { access_token, token_type, expires_in, refresh_token, scope }; }
