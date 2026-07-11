import type * as Types from "./types.mts";
import { request } from "./request.mts";
function getFormData(json: unknown, attachments: Types.MessageAttachmentRequest[]) {
    const formData = new FormData();
    formData.append("payload_json", JSON.stringify(json, (_key, value) => {
        return value instanceof Blob ? undefined : value
    }));

    for (const { id, data, filename } of attachments) {
        formData.append(`files[${id}]`, data, filename ?? undefined);
    }

    return formData;
}
/**
 * Client class for interacting with the Discord REST API without authorization.
 */
export class Public {
    getGateway() {
        return request("get_gateway", null, "GET", "/gateway", null, undefined, undefined) as Promise<Types.GatewayResponse>;
    }
    getGuildTemplate(code: string) {
        return request("get_guild_template", null, "GET", `/guilds/templates/${code}`, null, undefined, undefined) as Promise<Types.GuildTemplateResponse>;
    }
    getGuildWidget(guild_id: Types.SnowflakeType) {
        return request("get_guild_widget", guild_id, "GET", `/guilds/${guild_id}/widget.json`, null, undefined, undefined) as Promise<Types.WidgetResponse>;
    }
    getGuildWidgetPng(guild_id: Types.SnowflakeType, parameters?: {
        style?: Types.WidgetImageStyles;
    }) {
        return request("get_guild_widget_png", guild_id, "GET", `/guilds/${guild_id}/widget.png`, null, undefined, parameters) as Promise<unknown>;
    }
    createInteractionResponse(interaction_id: Types.SnowflakeType, interaction_token: string, body: Types.ApplicationCommandAutocompleteCallbackRequest | Types.CreateMessageInteractionCallbackRequest | Types.DeferredCreateMessageInteractionCallbackRequest | Types.LaunchActivityInteractionCallbackRequest | Types.ModalInteractionCallbackRequest | Types.PongInteractionCallbackRequest | Types.UpdateMessageInteractionCallbackRequest | Types.DeferredUpdateMessageInteractionCallbackRequest, parameters?: {
        with_response?: boolean;
    }) {
        return request("create_interaction_response", interaction_id, "POST", `/interactions/${interaction_id}/${interaction_token}/callback`, null, "data" in body && body.data && "attachments" in body.data && body.data.attachments ? getFormData(body, body.data.attachments) : body, parameters) as Promise<Types.InteractionCallbackResponse | void>;
    }
    inviteResolve(code: string, parameters?: {
        with_counts?: boolean;
        guild_scheduled_event_id?: Types.SnowflakeType;
        target_channel_id?: Types.SnowflakeType;
        target_message_id?: Types.SnowflakeType;
    }) {
        return request("invite_resolve", null, "GET", `/invites/${code}`, null, undefined, parameters) as Promise<(Types.FriendInviteResponse | Types.GroupDMInviteResponse | Types.GuildInviteResponse)>;
    }
    getPublicKeys() {
        return request("get_public_keys", null, "GET", "/oauth2/keys", null, undefined, undefined) as Promise<Types.OAuth2GetKeys>;
    }
    partnerSdkUnmergeProvisionalAccount(body: {
        client_id: Types.SnowflakeType;
        client_secret?: string | null;
        external_auth_token: string;
        external_auth_type: Types.ApplicationIdentityProviderAuthType;
    }) {
        return request("partner_sdk_unmerge_provisional_account", null, "POST", "/partner-sdk/provisional-accounts/unmerge", null, body, undefined) as Promise<void>;
    }
    partnerSdkToken(body: {
        client_id: Types.SnowflakeType;
        client_secret?: string | null;
        external_auth_token: string;
        external_auth_type: Types.ApplicationIdentityProviderAuthType;
    }) {
        return request("partner_sdk_token", null, "POST", "/partner-sdk/token", null, body, undefined) as Promise<Types.ProvisionalTokenResponse>;
    }
    listStickerPacks() {
        return request("list_sticker_packs", null, "GET", "/sticker-packs", null, undefined, undefined) as Promise<Types.StickerPackCollectionResponse>;
    }
    getWebhookByToken(webhook_id: Types.SnowflakeType, webhook_token: string) {
        return request("use_webhook_by_token", webhook_id, "GET", `/webhooks/${webhook_id}/${webhook_token}`, null, undefined, undefined) as Promise<(Types.ApplicationIncomingWebhookResponse | Types.ChannelFollowerWebhookResponse | Types.GuildIncomingWebhookResponse)>;
    }
    executeWebhook(webhook_id: Types.SnowflakeType, webhook_token: string, body: Types.IncomingWebhookRequestPartial | Types.IncomingWebhookUpdateRequestPartial, parameters?: {
        wait?: boolean;
        thread_id?: Types.SnowflakeType;
        with_components?: boolean;
    }) {
        return request("use_webhook_by_token", webhook_id, "POST", `/webhooks/${webhook_id}/${webhook_token}`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters) as Promise<Types.MessageResponse | void>;
    }
    deleteWebhookByToken(webhook_id: Types.SnowflakeType, webhook_token: string) {
        return request("use_webhook_by_token", webhook_id, "DELETE", `/webhooks/${webhook_id}/${webhook_token}`, null, undefined, undefined) as Promise<void>;
    }
    updateWebhookByToken(webhook_id: Types.SnowflakeType, webhook_token: string, body: {
        name?: string;
        avatar?: string | null;
    }) {
        return request("use_webhook_by_token", webhook_id, "PATCH", `/webhooks/${webhook_id}/${webhook_token}`, null, body, undefined) as Promise<(Types.ApplicationIncomingWebhookResponse | Types.ChannelFollowerWebhookResponse | Types.GuildIncomingWebhookResponse)>;
    }
    executeGithubCompatibleWebhook(webhook_id: Types.SnowflakeType, webhook_token: string, body: Types.GithubWebhook, parameters?: {
        wait?: boolean;
        thread_id?: Types.SnowflakeType;
    }) {
        return request("use_webhook_by_token", webhook_id, "POST", `/webhooks/${webhook_id}/${webhook_token}/github`, null, body, parameters) as Promise<void>;
    }
    getOriginalWebhookMessage(webhook_id: Types.SnowflakeType, webhook_token: string, parameters?: {
        thread_id?: Types.SnowflakeType;
    }) {
        return request("use_webhook_by_token", webhook_id, "GET", `/webhooks/${webhook_id}/${webhook_token}/messages/@original`, null, undefined, parameters) as Promise<Types.MessageResponse>;
    }
    deleteOriginalWebhookMessage(webhook_id: Types.SnowflakeType, webhook_token: string, parameters?: {
        thread_id?: Types.SnowflakeType;
    }) {
        return request("use_webhook_by_token", webhook_id, "DELETE", `/webhooks/${webhook_id}/${webhook_token}/messages/@original`, null, undefined, parameters) as Promise<void>;
    }
    updateOriginalWebhookMessage(webhook_id: Types.SnowflakeType, webhook_token: string, body: Types.IncomingWebhookUpdateRequestPartial, parameters?: {
        thread_id?: Types.SnowflakeType;
        with_components?: boolean;
    }) {
        return request("use_webhook_by_token", webhook_id, "PATCH", `/webhooks/${webhook_id}/${webhook_token}/messages/@original`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters) as Promise<Types.MessageResponse>;
    }
    getWebhookMessage(webhook_id: Types.SnowflakeType, webhook_token: string, message_id: Types.SnowflakeType, parameters?: {
        thread_id?: Types.SnowflakeType;
    }) {
        return request("use_webhook_by_token", webhook_id, "GET", `/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, null, undefined, parameters) as Promise<Types.MessageResponse>;
    }
    deleteWebhookMessage(webhook_id: Types.SnowflakeType, webhook_token: string, message_id: Types.SnowflakeType, parameters?: {
        thread_id?: Types.SnowflakeType;
    }) {
        return request("use_webhook_by_token", webhook_id, "DELETE", `/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, null, undefined, parameters) as Promise<void>;
    }
    updateWebhookMessage(webhook_id: Types.SnowflakeType, webhook_token: string, message_id: Types.SnowflakeType, body: Types.IncomingWebhookUpdateRequestPartial, parameters?: {
        thread_id?: Types.SnowflakeType;
        with_components?: boolean;
    }) {
        return request("use_webhook_by_token", webhook_id, "PATCH", `/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters) as Promise<Types.MessageResponse>;
    }
    executeSlackCompatibleWebhook(webhook_id: Types.SnowflakeType, webhook_token: string, body: Types.SlackWebhook, parameters?: {
        wait?: boolean;
        thread_id?: Types.SnowflakeType;
    }) {
        return request("use_webhook_by_token", webhook_id, "POST", `/webhooks/${webhook_id}/${webhook_token}/slack`, null, body, parameters) as Promise<(string | null)>;
    }
    getOauth2Token(body: Types.AuthorizationCodeRequest | Types.RefreshTokenRequest) {
        return request("get_oauth2_token", null, "POST", "/oauth2/token", null, new URLSearchParams(body as any), undefined) as Promise<Types.AccessTokenResponse>;
    }
}
/**
 * Client class for interacting with the Discord REST API with a Bot token.
 */
export class Bot {
    #authorization: string;
    constructor(token: string) {
        this.#authorization = `Bot ${token}`;
    }
    getMyApplication() {
        return request("get_my_application", null, "GET", "/applications/@me", this.#authorization, undefined, undefined) as Promise<Types.PrivateApplicationResponse>;
    }
    updateMyApplication(body: Types.ApplicationFormPartial) {
        return request("update_application", null, "PATCH", "/applications/@me", this.#authorization, body, undefined) as Promise<Types.PrivateApplicationResponse>;
    }
    getApplication(application_id: Types.SnowflakeType) {
        return request("get_application", null, "GET", `/applications/${application_id}`, this.#authorization, undefined, undefined) as Promise<Types.PrivateApplicationResponse>;
    }
    updateApplication(application_id: Types.SnowflakeType, body: Types.ApplicationFormPartial) {
        return request("update_application", null, "PATCH", `/applications/${application_id}`, this.#authorization, body, undefined) as Promise<Types.PrivateApplicationResponse>;
    }
    applicationsGetActivityInstance(application_id: Types.SnowflakeType, instance_id: string) {
        return request("applications_get_activity_instance", null, "GET", `/applications/${application_id}/activity-instances/${instance_id}`, this.#authorization, undefined, undefined) as Promise<Types.EmbeddedActivityInstance>;
    }
    uploadApplicationAttachment(application_id: Types.SnowflakeType, body: {
        file: string;
    }) {
        return request("upload_application_attachment", null, "POST", `/applications/${application_id}/attachment`, this.#authorization, body, undefined) as Promise<Types.ActivitiesAttachmentResponse>;
    }
    listApplicationCommands(application_id: Types.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return request("list_application_commands", null, "GET", `/applications/${application_id}/commands`, this.#authorization, undefined, parameters) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    bulkSetApplicationCommands(application_id: Types.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[] | null) {
        return request("bulk_set_application_commands", null, "PUT", `/applications/${application_id}/commands`, this.#authorization, body, undefined) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    createApplicationCommand(application_id: Types.SnowflakeType, body: Types.ApplicationCommandCreateRequest) {
        return request("create_application_command", null, "POST", `/applications/${application_id}/commands`, this.#authorization, body, undefined) as Promise<Types.ApplicationCommandResponse | Types.ApplicationCommandResponse>;
    }
    getApplicationCommand(application_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("get_application_command", null, "GET", `/applications/${application_id}/commands/${command_id}`, this.#authorization, undefined, undefined) as Promise<Types.ApplicationCommandResponse>;
    }
    deleteApplicationCommand(application_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("delete_application_command", null, "DELETE", `/applications/${application_id}/commands/${command_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateApplicationCommand(application_id: Types.SnowflakeType, command_id: Types.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial) {
        return request("update_application_command", null, "PATCH", `/applications/${application_id}/commands/${command_id}`, this.#authorization, body, undefined) as Promise<Types.ApplicationCommandResponse>;
    }
    listApplicationEmojis(application_id: Types.SnowflakeType) {
        return request("list_application_emojis", null, "GET", `/applications/${application_id}/emojis`, this.#authorization, undefined, undefined) as Promise<Types.ListApplicationEmojisResponse>;
    }
    createApplicationEmoji(application_id: Types.SnowflakeType, body: {
        name: string;
        image: string;
    }) {
        return request("create_application_emoji", null, "POST", `/applications/${application_id}/emojis`, this.#authorization, body, undefined) as Promise<Types.EmojiResponse>;
    }
    getApplicationEmoji(application_id: Types.SnowflakeType, emoji_id: Types.SnowflakeType) {
        return request("get_application_emoji", null, "GET", `/applications/${application_id}/emojis/${emoji_id}`, this.#authorization, undefined, undefined) as Promise<Types.EmojiResponse>;
    }
    deleteApplicationEmoji(application_id: Types.SnowflakeType, emoji_id: Types.SnowflakeType) {
        return request("delete_application_emoji", null, "DELETE", `/applications/${application_id}/emojis/${emoji_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateApplicationEmoji(application_id: Types.SnowflakeType, emoji_id: Types.SnowflakeType, body: {
        name?: string;
    }) {
        return request("update_application_emoji", null, "PATCH", `/applications/${application_id}/emojis/${emoji_id}`, this.#authorization, body, undefined) as Promise<Types.EmojiResponse>;
    }
    getEntitlements(application_id: Types.SnowflakeType, parameters?: {
        user_id?: Types.SnowflakeType;
        sku_ids?: string | (null | Types.SnowflakeType)[];
        guild_id?: Types.SnowflakeType;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
        exclude_ended?: boolean;
        exclude_deleted?: boolean;
        only_active?: boolean;
    }) {
        return request("get_entitlements", null, "GET", `/applications/${application_id}/entitlements`, this.#authorization, undefined, parameters) as Promise<Types.EntitlementResponse[]>;
    }
    createEntitlement(application_id: Types.SnowflakeType, body: Types.CreateEntitlementRequestData) {
        return request("create_entitlement", null, "POST", `/applications/${application_id}/entitlements`, this.#authorization, body, undefined) as Promise<Types.EntitlementResponse>;
    }
    getEntitlement(application_id: Types.SnowflakeType, entitlement_id: Types.SnowflakeType) {
        return request("get_entitlement", null, "GET", `/applications/${application_id}/entitlements/${entitlement_id}`, this.#authorization, undefined, undefined) as Promise<Types.EntitlementResponse>;
    }
    deleteEntitlement(application_id: Types.SnowflakeType, entitlement_id: Types.SnowflakeType) {
        return request("delete_entitlement", null, "DELETE", `/applications/${application_id}/entitlements/${entitlement_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    consumeEntitlement(application_id: Types.SnowflakeType, entitlement_id: Types.SnowflakeType) {
        return request("consume_entitlement", null, "POST", `/applications/${application_id}/entitlements/${entitlement_id}/consume`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listGuildApplicationCommands(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return request("list_guild_application_commands", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands`, this.#authorization, undefined, parameters) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    bulkSetGuildApplicationCommands(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[] | null, reason?: string) {
        return request("bulk_set_application_commands", guild_id, "PUT", `/applications/${application_id}/guilds/${guild_id}/commands`, this.#authorization, body, undefined, reason) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    createGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, body: Types.ApplicationCommandCreateRequest, reason?: string) {
        return request("create_application_command", guild_id, "POST", `/applications/${application_id}/guilds/${guild_id}/commands`, this.#authorization, body, undefined, reason) as Promise<Types.ApplicationCommandResponse | Types.ApplicationCommandResponse>;
    }
    listGuildApplicationCommandPermissions(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType) {
        return request("list_guild_application_command_permissions", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands/permissions`, this.#authorization, undefined, undefined) as Promise<Types.CommandPermissionsResponse[]>;
    }
    getGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("get_guild_application_command", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, this.#authorization, undefined, undefined) as Promise<Types.ApplicationCommandResponse>;
    }
    deleteGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType, reason?: string) {
        return request("delete_application_command", guild_id, "DELETE", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial, reason?: string) {
        return request("update_application_command", guild_id, "PATCH", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, this.#authorization, body, undefined, reason) as Promise<Types.ApplicationCommandResponse>;
    }
    getGuildApplicationCommandPermissions(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("get_guild_application_command_permissions", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`, this.#authorization, undefined, undefined) as Promise<Types.CommandPermissionsResponse>;
    }
    setGuildApplicationCommandPermissions(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType, body: {
        permissions?: Types.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        return request("set_guild_application_command_permissions", guild_id, "PUT", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`, this.#authorization, body, undefined, reason) as Promise<Types.CommandPermissionsResponse>;
    }
    getApplicationRoleConnectionsMetadata(application_id: Types.SnowflakeType) {
        return request("get_application_role_connections_metadata", null, "GET", `/applications/${application_id}/role-connections/metadata`, this.#authorization, undefined, undefined) as Promise<(Types.ApplicationRoleConnectionsMetadataItemResponse[] | null)>;
    }
    updateApplicationRoleConnectionsMetadata(application_id: Types.SnowflakeType, body: Types.ApplicationRoleConnectionsMetadataItemRequest[] | null) {
        return request("update_application_role_connections_metadata", null, "PUT", `/applications/${application_id}/role-connections/metadata`, this.#authorization, body, undefined) as Promise<(Types.ApplicationRoleConnectionsMetadataItemResponse[] | null)>;
    }
    getChannel(channel_id: Types.SnowflakeType) {
        return request("get_channel", channel_id, "GET", `/channels/${channel_id}`, this.#authorization, undefined, undefined) as Promise<(Types.GuildChannelResponse | Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse | Types.ThreadResponse)>;
    }
    deleteChannel(channel_id: Types.SnowflakeType) {
        return request("delete_channel", channel_id, "DELETE", `/channels/${channel_id}`, this.#authorization, undefined, undefined) as Promise<(Types.GuildChannelResponse | Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse | Types.ThreadResponse)>;
    }
    updateChannel(channel_id: Types.SnowflakeType, body: Types.UpdateDMRequestPartial | Types.UpdateGroupDMRequestPartial | Types.UpdateGuildChannelRequestPartial | Types.UpdateThreadRequestPartial) {
        return request("update_channel", channel_id, "PATCH", `/channels/${channel_id}`, this.#authorization, body, undefined) as Promise<(Types.GuildChannelResponse | Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse | Types.ThreadResponse)>;
    }
    followChannel(channel_id: Types.SnowflakeType, body: {
        webhook_channel_id: Types.SnowflakeType;
    }) {
        return request("follow_channel", channel_id, "POST", `/channels/${channel_id}/followers`, this.#authorization, body, undefined) as Promise<Types.ChannelFollowerResponse>;
    }
    listChannelInvites(channel_id: Types.SnowflakeType) {
        return request("list_channel_invites", channel_id, "GET", `/channels/${channel_id}/invites`, this.#authorization, undefined, undefined) as Promise<((Types.FriendInviteResponse | Types.GroupDMInviteResponse | Types.GuildInviteResponse | null)[] | null)>;
    }
    createChannelInvite(channel_id: Types.SnowflakeType, body: (Types.CreateGroupDMInviteRequest | Types.CreateGuildInviteRequest) & {
        target_users_file?: string;
    }) {
        return request("create_channel_invite", channel_id, "POST", `/channels/${channel_id}/invites`, this.#authorization, body, undefined) as Promise<(Types.FriendInviteResponse | Types.GroupDMInviteResponse | Types.GuildInviteResponse) | void>;
    }
    listMessages(channel_id: Types.SnowflakeType, parameters?: {
        around?: Types.SnowflakeType;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
    }) {
        return request("list_messages", channel_id, "GET", `/channels/${channel_id}/messages`, this.#authorization, undefined, parameters) as Promise<(Types.MessageResponse[] | null)>;
    }
    createMessage(channel_id: Types.SnowflakeType, body: Types.MessageCreateRequest) {
        return request("create_message", channel_id, "POST", `/channels/${channel_id}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<Types.MessageResponse>;
    }
    bulkDeleteMessages(channel_id: Types.SnowflakeType, body: {
        messages: Types.SnowflakeType[];
    }) {
        return request("bulk_delete_messages", channel_id, "POST", `/channels/${channel_id}/messages/bulk-delete`, this.#authorization, body, undefined) as Promise<void>;
    }
    listPins(channel_id: Types.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        return request("list_pins", channel_id, "GET", `/channels/${channel_id}/messages/pins`, this.#authorization, undefined, parameters) as Promise<Types.PinnedMessagesResponse>;
    }
    createPin(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("create_pin", channel_id, "PUT", `/channels/${channel_id}/messages/pins/${message_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deletePin(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("delete_pin", channel_id, "DELETE", `/channels/${channel_id}/messages/pins/${message_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    getMessage(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("get_message", channel_id, "GET", `/channels/${channel_id}/messages/${message_id}`, this.#authorization, undefined, undefined) as Promise<Types.MessageResponse>;
    }
    deleteMessage(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("delete_message", channel_id, "DELETE", `/channels/${channel_id}/messages/${message_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateMessage(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, body: Types.MessageEditRequestPartial) {
        return request("update_message", channel_id, "PATCH", `/channels/${channel_id}/messages/${message_id}`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<Types.MessageResponse>;
    }
    crosspostMessage(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("crosspost_message", channel_id, "POST", `/channels/${channel_id}/messages/${message_id}/crosspost`, this.#authorization, undefined, undefined) as Promise<Types.MessageResponse>;
    }
    deleteAllMessageReactions(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("update_reactions", channel_id, "DELETE", `/channels/${channel_id}/messages/${message_id}/reactions`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listMessageReactionsByEmoji(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, emoji_name: string, parameters?: {
        after?: Types.SnowflakeType;
        limit?: number;
        type?: Types.ReactionTypes;
    }) {
        return request("list_message_reactions_by_emoji", channel_id, "GET", `/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`, this.#authorization, undefined, parameters) as Promise<Types.UserResponse[]>;
    }
    deleteAllMessageReactionsByEmoji(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, emoji_name: string) {
        return request("update_reactions", channel_id, "DELETE", `/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    addMyMessageReaction(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, emoji_name: string) {
        return request("update_reactions", channel_id, "PUT", `/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deleteMyMessageReaction(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, emoji_name: string) {
        return request("update_reactions", channel_id, "DELETE", `/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deleteUserMessageReaction(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, emoji_name: string, user_id: Types.SnowflakeType) {
        return request("update_reactions", channel_id, "DELETE", `/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/${user_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createThreadFromMessage(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, body: Types.CreateTextThreadWithMessageRequest) {
        return request("create_thread", channel_id, "POST", `/channels/${channel_id}/messages/${message_id}/threads`, this.#authorization, body, undefined) as Promise<Types.ThreadResponse>;
    }
    setChannelPermissionOverwrite(channel_id: Types.SnowflakeType, overwrite_id: Types.SnowflakeType, body: {
        type?: null | Types.ChannelPermissionOverwrites;
        allow?: number | null;
        deny?: number | null;
    }) {
        return request("set_channel_permission_overwrite", channel_id, "PUT", `/channels/${channel_id}/permissions/${overwrite_id}`, this.#authorization, body, undefined) as Promise<void>;
    }
    deleteChannelPermissionOverwrite(channel_id: Types.SnowflakeType, overwrite_id: Types.SnowflakeType) {
        return request("delete_channel_permission_overwrite", channel_id, "DELETE", `/channels/${channel_id}/permissions/${overwrite_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deprecatedListPins(channel_id: Types.SnowflakeType) {
        return request("list_pins", channel_id, "GET", `/channels/${channel_id}/pins`, this.#authorization, undefined, undefined) as Promise<(Types.MessageResponse[] | null)>;
    }
    deprecatedCreatePin(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("deprecated_create_pin", channel_id, "PUT", `/channels/${channel_id}/pins/${message_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deprecatedDeletePin(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("deprecated_delete_pin", channel_id, "DELETE", `/channels/${channel_id}/pins/${message_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    getAnswerVoters(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType, answer_id: number, parameters?: {
        after?: Types.SnowflakeType;
        limit?: number;
    }) {
        return request("get_answer_voters", channel_id, "GET", `/channels/${channel_id}/polls/${message_id}/answers/${answer_id}`, this.#authorization, undefined, parameters) as Promise<Types.PollAnswerDetailsResponse>;
    }
    pollExpire(channel_id: Types.SnowflakeType, message_id: Types.SnowflakeType) {
        return request("poll_expire", channel_id, "POST", `/channels/${channel_id}/polls/${message_id}/expire`, this.#authorization, undefined, undefined) as Promise<Types.MessageResponse>;
    }
    addGroupDMUser(channel_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: {
        access_token?: string | null;
        nick?: string | null;
    }) {
        return request("add_group_dm_user", channel_id, "PUT", `/channels/${channel_id}/recipients/${user_id}`, this.#authorization, body, undefined) as Promise<(Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse) | void>;
    }
    deleteGroupDMUser(channel_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("delete_group_dm_user", channel_id, "DELETE", `/channels/${channel_id}/recipients/${user_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    sendSoundboardSound(channel_id: Types.SnowflakeType, body: Types.SoundboardSoundSendRequest) {
        return request("send_soundboard_sound", channel_id, "POST", `/channels/${channel_id}/send-soundboard-sound`, this.#authorization, body, undefined) as Promise<void>;
    }
    listThreadMembers(channel_id: Types.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        after?: Types.SnowflakeType;
    }) {
        return request("list_thread_members", channel_id, "GET", `/channels/${channel_id}/thread-members`, this.#authorization, undefined, parameters) as Promise<Types.ThreadMemberResponse[]>;
    }
    joinThread(channel_id: Types.SnowflakeType) {
        return request("join_thread", channel_id, "PUT", `/channels/${channel_id}/thread-members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    leaveThread(channel_id: Types.SnowflakeType) {
        return request("leave_thread", channel_id, "DELETE", `/channels/${channel_id}/thread-members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    getThreadMember(channel_id: Types.SnowflakeType, user_id: Types.SnowflakeType, parameters?: {
        with_member?: boolean;
    }) {
        return request("get_thread_member", channel_id, "GET", `/channels/${channel_id}/thread-members/${user_id}`, this.#authorization, undefined, parameters) as Promise<Types.ThreadMemberResponse>;
    }
    addThreadMember(channel_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("add_thread_member", channel_id, "PUT", `/channels/${channel_id}/thread-members/${user_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deleteThreadMember(channel_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("delete_thread_member", channel_id, "DELETE", `/channels/${channel_id}/thread-members/${user_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createThread(channel_id: Types.SnowflakeType, body: Types.CreateForumThreadRequest | Types.CreateTextThreadWithoutMessageRequest) {
        return request("create_thread", channel_id, "POST", `/channels/${channel_id}/threads`, this.#authorization, "message" in body && body.message.attachments ? getFormData(body, body.message.attachments) : body, undefined) as Promise<Types.CreatedThreadResponse>;
    }
    listPrivateArchivedThreads(channel_id: Types.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        return request("list_private_archived_threads", channel_id, "GET", `/channels/${channel_id}/threads/archived/private`, this.#authorization, undefined, parameters) as Promise<Types.ThreadsResponse>;
    }
    listPublicArchivedThreads(channel_id: Types.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        return request("list_public_archived_threads", channel_id, "GET", `/channels/${channel_id}/threads/archived/public`, this.#authorization, undefined, parameters) as Promise<Types.ThreadsResponse>;
    }
    threadSearch(channel_id: Types.SnowflakeType, parameters?: {
        name?: string;
        slop?: number;
        min_id?: Types.SnowflakeType;
        max_id?: Types.SnowflakeType;
        tag?: string | Types.SnowflakeType[];
        tag_setting?: Types.ThreadSearchTagSetting;
        archived?: boolean;
        sort_by?: Types.ThreadSortingMode;
        sort_order?: Types.SortingOrder;
        limit?: number;
        offset?: number;
    }) {
        return request("thread_search", channel_id, "GET", `/channels/${channel_id}/threads/search`, this.#authorization, undefined, parameters) as Promise<Types.ThreadSearchResponse | Types.SearchIndexNotReadyResponse>;
    }
    triggerTypingIndicator(channel_id: Types.SnowflakeType) {
        return request("trigger_typing_indicator", channel_id, "POST", `/channels/${channel_id}/typing`, this.#authorization, undefined, undefined) as Promise<Types.TypingIndicatorResponse | void>;
    }
    listMyPrivateArchivedThreads(channel_id: Types.SnowflakeType, parameters?: {
        before?: Types.SnowflakeType;
        limit?: number;
    }) {
        return request("list_my_private_archived_threads", channel_id, "GET", `/channels/${channel_id}/users/@me/threads/archived/private`, this.#authorization, undefined, parameters) as Promise<Types.ThreadsResponse>;
    }
    /**
     * Set a voice channel's status.
     */
    updateVoiceChannelStatus(channel_id: Types.SnowflakeType, body: {
        /**
         * The new voice channel status
         */
        status?: string | null;
    }) {
        return request("update_voice_channel_status", channel_id, "PUT", `/channels/${channel_id}/voice-status`, this.#authorization, body, undefined) as Promise<void>;
    }
    listChannelWebhooks(channel_id: Types.SnowflakeType) {
        return request("list_channel_webhooks", channel_id, "GET", `/channels/${channel_id}/webhooks`, this.#authorization, undefined, undefined) as Promise<((Types.ApplicationIncomingWebhookResponse | Types.ChannelFollowerWebhookResponse | Types.GuildIncomingWebhookResponse)[] | null)>;
    }
    createWebhook(channel_id: Types.SnowflakeType, body: {
        name: string;
        avatar?: string | null;
    }) {
        return request("create_webhook", channel_id, "POST", `/channels/${channel_id}/webhooks`, this.#authorization, body, undefined) as Promise<Types.GuildIncomingWebhookResponse>;
    }
    getBotGateway() {
        return request("get_bot_gateway", null, "GET", "/gateway/bot", this.#authorization, undefined, undefined) as Promise<Types.GatewayBotResponse>;
    }
    getGuild(guild_id: Types.SnowflakeType, parameters?: {
        with_counts?: boolean;
    }) {
        return request("get_guild", guild_id, "GET", `/guilds/${guild_id}`, this.#authorization, undefined, parameters) as Promise<Types.GuildWithCountsResponse>;
    }
    updateGuild(guild_id: Types.SnowflakeType, body: Types.GuildPatchRequestPartial, reason?: string) {
        return request("update_guild", guild_id, "PATCH", `/guilds/${guild_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildResponse>;
    }
    listGuildAuditLogEntries(guild_id: Types.SnowflakeType, parameters?: {
        user_id?: Types.SnowflakeType;
        target_id?: Types.SnowflakeType;
        action_type?: Types.AuditLogActionTypes;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
    }) {
        return request("list_guild_audit_log_entries", guild_id, "GET", `/guilds/${guild_id}/audit-logs`, this.#authorization, undefined, parameters) as Promise<Types.GuildAuditLogResponse>;
    }
    listAutoModerationRules(guild_id: Types.SnowflakeType) {
        return request("list_auto_moderation_rules", guild_id, "GET", `/guilds/${guild_id}/auto-moderation/rules`, this.#authorization, undefined, undefined) as Promise<((Types.DefaultKeywordRuleResponse | Types.KeywordRuleResponse | Types.MLSpamRuleResponse | Types.MentionSpamRuleResponse | Types.UserProfileRuleResponse | null)[] | null)>;
    }
    createAutoModerationRule(guild_id: Types.SnowflakeType, body: Types.DefaultKeywordListUpsertRequest | Types.KeywordUpsertRequest | Types.MLSpamUpsertRequest | Types.MentionSpamUpsertRequest | Types.UserProfileUpsertRequest, reason?: string) {
        return request("create_auto_moderation_rule", guild_id, "POST", `/guilds/${guild_id}/auto-moderation/rules`, this.#authorization, body, undefined, reason) as Promise<(Types.DefaultKeywordRuleResponse | Types.KeywordRuleResponse | Types.MLSpamRuleResponse | Types.MentionSpamRuleResponse | Types.UserProfileRuleResponse)>;
    }
    getAutoModerationRule(guild_id: Types.SnowflakeType, rule_id: Types.SnowflakeType) {
        return request("get_auto_moderation_rule", guild_id, "GET", `/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, this.#authorization, undefined, undefined) as Promise<(Types.DefaultKeywordRuleResponse | Types.KeywordRuleResponse | Types.MLSpamRuleResponse | Types.MentionSpamRuleResponse | Types.UserProfileRuleResponse)>;
    }
    deleteAutoModerationRule(guild_id: Types.SnowflakeType, rule_id: Types.SnowflakeType, reason?: string) {
        return request("delete_auto_moderation_rule", guild_id, "DELETE", `/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateAutoModerationRule(guild_id: Types.SnowflakeType, rule_id: Types.SnowflakeType, body: Types.DefaultKeywordListUpsertRequestPartial | Types.KeywordUpsertRequestPartial | Types.MLSpamUpsertRequestPartial | Types.MentionSpamUpsertRequestPartial | Types.UserProfileUpsertRequestPartial, reason?: string) {
        return request("update_auto_moderation_rule", guild_id, "PATCH", `/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, this.#authorization, body, undefined, reason) as Promise<(Types.DefaultKeywordRuleResponse | Types.KeywordRuleResponse | Types.MLSpamRuleResponse | Types.MentionSpamRuleResponse | Types.UserProfileRuleResponse)>;
    }
    listGuildBans(guild_id: Types.SnowflakeType, parameters?: {
        limit?: number;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
    }) {
        return request("list_guild_bans", guild_id, "GET", `/guilds/${guild_id}/bans`, this.#authorization, undefined, parameters) as Promise<(Types.GuildBanResponse[] | null)>;
    }
    getGuildBan(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("get_guild_ban", guild_id, "GET", `/guilds/${guild_id}/bans/${user_id}`, this.#authorization, undefined, undefined) as Promise<Types.GuildBanResponse>;
    }
    banUserFromGuild(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: Types.BanUserFromGuildRequest, reason?: string) {
        return request("ban_user_from_guild", guild_id, "PUT", `/guilds/${guild_id}/bans/${user_id}`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    unbanUserFromGuild(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: Types.UnbanUserFromGuildRequest, reason?: string) {
        return request("unban_user_from_guild", guild_id, "DELETE", `/guilds/${guild_id}/bans/${user_id}`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    bulkBanUsersFromGuild(guild_id: Types.SnowflakeType, body: Types.BulkBanUsersRequest, reason?: string) {
        return request("bulk_ban_users_from_guild", guild_id, "POST", `/guilds/${guild_id}/bulk-ban`, this.#authorization, body, undefined, reason) as Promise<Types.BulkBanUsersResponse>;
    }
    listGuildChannels(guild_id: Types.SnowflakeType) {
        return request("list_guild_channels", guild_id, "GET", `/guilds/${guild_id}/channels`, this.#authorization, undefined, undefined) as Promise<((Types.GuildChannelResponse | Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse | Types.ThreadResponse)[] | null)>;
    }
    createGuildChannel(guild_id: Types.SnowflakeType, body: Types.CreateGuildChannelRequest, reason?: string) {
        return request("create_guild_channel", guild_id, "POST", `/guilds/${guild_id}/channels`, this.#authorization, body, undefined, reason) as Promise<Types.GuildChannelResponse>;
    }
    bulkUpdateGuildChannels(guild_id: Types.SnowflakeType, body: {
        id?: null | Types.SnowflakeType;
        position?: number | null;
        parent_id?: null | Types.SnowflakeType;
        lock_permissions?: boolean | null;
    }[], reason?: string) {
        return request("update_channel", guild_id, "PATCH", `/guilds/${guild_id}/channels`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    listGuildEmojis(guild_id: Types.SnowflakeType) {
        return request("list_guild_emojis", guild_id, "GET", `/guilds/${guild_id}/emojis`, this.#authorization, undefined, undefined) as Promise<(Types.EmojiResponse[] | null)>;
    }
    createGuildEmoji(guild_id: Types.SnowflakeType, body: {
        name: string;
        image: string;
        roles?: (null | Types.SnowflakeType)[] | null;
    }, reason?: string) {
        return request("create_guild_emoji", guild_id, "POST", `/guilds/${guild_id}/emojis`, this.#authorization, body, undefined, reason) as Promise<Types.EmojiResponse>;
    }
    getGuildEmoji(guild_id: Types.SnowflakeType, emoji_id: Types.SnowflakeType) {
        return request("get_guild_emoji", guild_id, "GET", `/guilds/${guild_id}/emojis/${emoji_id}`, this.#authorization, undefined, undefined) as Promise<Types.EmojiResponse>;
    }
    deleteGuildEmoji(guild_id: Types.SnowflakeType, emoji_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_emoji", guild_id, "DELETE", `/guilds/${guild_id}/emojis/${emoji_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildEmoji(guild_id: Types.SnowflakeType, emoji_id: Types.SnowflakeType, body: {
        name?: string;
        roles?: (null | Types.SnowflakeType)[] | null;
    }, reason?: string) {
        return request("update_guild_emoji", guild_id, "PATCH", `/guilds/${guild_id}/emojis/${emoji_id}`, this.#authorization, body, undefined, reason) as Promise<Types.EmojiResponse>;
    }
    /**
     * Modifies the incident actions of the guild
     */
    updateGuildIncidentActions(guild_id: Types.SnowflakeType, body: Types.GuildIncidentActionsRequest, reason?: string) {
        return request("update_guild_incident_actions", guild_id, "PUT", `/guilds/${guild_id}/incident-actions`, this.#authorization, body, undefined, reason) as Promise<Types.GuildIncidentsDataResponse>;
    }
    listGuildIntegrations(guild_id: Types.SnowflakeType) {
        return request("list_guild_integrations", guild_id, "GET", `/guilds/${guild_id}/integrations`, this.#authorization, undefined, undefined) as Promise<((Types.DiscordIntegrationResponse | Types.ExternalConnectionIntegrationResponse | Types.GuildSubscriptionIntegrationResponse)[] | null)>;
    }
    deleteGuildIntegration(guild_id: Types.SnowflakeType, integration_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_integration", guild_id, "DELETE", `/guilds/${guild_id}/integrations/${integration_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    listGuildInvites(guild_id: Types.SnowflakeType) {
        return request("list_guild_invites", guild_id, "GET", `/guilds/${guild_id}/invites`, this.#authorization, undefined, undefined) as Promise<((Types.FriendInviteResponse | Types.GroupDMInviteResponse | Types.GuildInviteResponse | null)[] | null)>;
    }
    listGuildMembers(guild_id: Types.SnowflakeType, parameters?: {
        limit?: number;
        after?: number;
    }) {
        return request("list_guild_members", guild_id, "GET", `/guilds/${guild_id}/members`, this.#authorization, undefined, parameters) as Promise<Types.GuildMemberResponse[]>;
    }
    updateMyGuildMember(guild_id: Types.SnowflakeType, body: {
        nick?: string | null;
        avatar?: string | null;
        bio?: string | null;
        banner?: string | null;
    }, reason?: string) {
        return request("update_my_guild_member", guild_id, "PATCH", `/guilds/${guild_id}/members/@me`, this.#authorization, body, undefined, reason) as Promise<Types.PrivateGuildMemberResponse>;
    }
    searchGuildMembers(guild_id: Types.SnowflakeType, parameters: {
        limit?: number;
        query: string;
    }) {
        return request("search_guild_members", guild_id, "GET", `/guilds/${guild_id}/members/search`, this.#authorization, undefined, parameters) as Promise<Types.GuildMemberResponse[]>;
    }
    getGuildMember(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("get_guild_member", guild_id, "GET", `/guilds/${guild_id}/members/${user_id}`, this.#authorization, undefined, undefined) as Promise<Types.GuildMemberResponse>;
    }
    addGuildMember(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: Types.BotAddGuildMemberRequest, reason?: string) {
        return request("add_guild_member", guild_id, "PUT", `/guilds/${guild_id}/members/${user_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildMemberResponse | void>;
    }
    deleteGuildMember(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_member", guild_id, "DELETE", `/guilds/${guild_id}/members/${user_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildMember(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: {
        nick?: string | null;
        roles?: (null | Types.SnowflakeType)[] | null;
        mute?: boolean | null;
        deaf?: boolean | null;
        channel_id?: null | Types.SnowflakeType;
        communication_disabled_until?: string | null;
        flags?: number | null;
    }, reason?: string) {
        return request("update_guild_member", guild_id, "PATCH", `/guilds/${guild_id}/members/${user_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildMemberResponse | void>;
    }
    addGuildMemberRole(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, role_id: Types.SnowflakeType, reason?: string) {
        return request("edit_guild_member_role", guild_id, "PUT", `/guilds/${guild_id}/members/${user_id}/roles/${role_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    deleteGuildMemberRole(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, role_id: Types.SnowflakeType, reason?: string) {
        return request("edit_guild_member_role", guild_id, "DELETE", `/guilds/${guild_id}/members/${user_id}/roles/${role_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    guildSearch(guild_id: Types.SnowflakeType, parameters?: {
        sort_by?: Types.SortingMode;
        sort_order?: Types.SortingOrder;
        content?: string;
        slop?: number;
        author_id?: Types.SnowflakeType[];
        author_type?: Types.AuthorType[];
        mentions?: Types.SnowflakeType[];
        mentions_role_id?: Types.SnowflakeType[];
        replied_to_user_id?: Types.SnowflakeType[];
        replied_to_message_id?: Types.SnowflakeType[];
        mention_everyone?: boolean;
        min_id?: Types.SnowflakeType;
        max_id?: Types.SnowflakeType;
        limit?: number;
        offset?: number;
        has?: Types.HasOption[];
        link_hostname?: string[];
        embed_provider?: string[];
        embed_type?: Types.SearchableEmbedType[];
        attachment_extension?: string[];
        attachment_filename?: string[];
        pinned?: boolean;
        include_nsfw?: boolean;
        channel_id?: Types.SnowflakeType[];
    }) {
        return request("guild_search", guild_id, "GET", `/guilds/${guild_id}/messages/search`, this.#authorization, undefined, parameters) as Promise<Types.GuildSearchResponse | Types.SearchIndexNotReadyResponse>;
    }
    getGuildNewMemberWelcome(guild_id: Types.SnowflakeType) {
        return request("get_guild_new_member_welcome", guild_id, "GET", `/guilds/${guild_id}/new-member-welcome`, this.#authorization, undefined, undefined) as Promise<Types.GuildHomeSettingsResponse | void>;
    }
    getGuildsOnboarding(guild_id: Types.SnowflakeType) {
        return request("get_guilds_onboarding", guild_id, "GET", `/guilds/${guild_id}/onboarding`, this.#authorization, undefined, undefined) as Promise<Types.UserGuildOnboardingResponse>;
    }
    putGuildsOnboarding(guild_id: Types.SnowflakeType, body: Types.UpdateGuildOnboardingRequest, reason?: string) {
        return request("put_guilds_onboarding", guild_id, "PUT", `/guilds/${guild_id}/onboarding`, this.#authorization, body, undefined, reason) as Promise<Types.GuildOnboardingResponse>;
    }
    getGuildPreview(guild_id: Types.SnowflakeType) {
        return request("get_guild_preview", guild_id, "GET", `/guilds/${guild_id}/preview`, this.#authorization, undefined, undefined) as Promise<Types.GuildPreviewResponse>;
    }
    previewPruneGuild(guild_id: Types.SnowflakeType, parameters?: {
        days?: number;
        include_roles?: string | (null | Types.SnowflakeType)[];
    }) {
        return request("preview_prune_guild", guild_id, "GET", `/guilds/${guild_id}/prune`, this.#authorization, undefined, parameters) as Promise<Types.GuildPruneResponse>;
    }
    pruneGuild(guild_id: Types.SnowflakeType, body: Types.PruneGuildRequest, reason?: string) {
        return request("prune_guild", guild_id, "POST", `/guilds/${guild_id}/prune`, this.#authorization, body, undefined, reason) as Promise<Types.GuildPruneResponse>;
    }
    listGuildVoiceRegions(guild_id: Types.SnowflakeType) {
        return request("list_guild_voice_regions", guild_id, "GET", `/guilds/${guild_id}/regions`, this.#authorization, undefined, undefined) as Promise<(Types.VoiceRegionResponse[] | null)>;
    }
    /**
     * List join requests for guild, optionally filtered by application status
     */
    getGuildJoinRequests(guild_id: Types.SnowflakeType, parameters?: {
        status?: never;
        limit?: number;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
    }) {
        return request("get_guild_join_requests", guild_id, "GET", `/guilds/${guild_id}/requests`, this.#authorization, undefined, parameters) as Promise<Types.GuildJoinRequestsListResponse>;
    }
    /**
     * Approve or reject guild join request
     */
    actionGuildJoinRequest(guild_id: Types.SnowflakeType, request_id: Types.SnowflakeType, body: {
        /**
         * Whether to approve or reject the join request
         */
        action?: never;
        /**
         * Reason for rejection. Only used when action is REJECTED
         */
        rejection_reason?: string | null;
    }, reason?: string) {
        return request("action_guild_join_request", guild_id, "PATCH", `/guilds/${guild_id}/requests/${request_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildJoinRequestResponse>;
    }
    listGuildRoles(guild_id: Types.SnowflakeType) {
        return request("list_guild_roles", guild_id, "GET", `/guilds/${guild_id}/roles`, this.#authorization, undefined, undefined) as Promise<Types.GuildRoleResponse[]>;
    }
    createGuildRole(guild_id: Types.SnowflakeType, body: Types.CreateRoleRequest, reason?: string) {
        return request("create_guild_role", guild_id, "POST", `/guilds/${guild_id}/roles`, this.#authorization, body, undefined, reason) as Promise<Types.GuildRoleResponse>;
    }
    bulkUpdateGuildRoles(guild_id: Types.SnowflakeType, body: Types.UpdateRolePositionsRequest[], reason?: string) {
        return request("bulk_update_guild_roles", guild_id, "PATCH", `/guilds/${guild_id}/roles`, this.#authorization, body, undefined, reason) as Promise<Types.GuildRoleResponse[]>;
    }
    guildRoleMemberCounts(guild_id: Types.SnowflakeType) {
        return request("guild_role_member_counts", guild_id, "GET", `/guilds/${guild_id}/roles/member-counts`, this.#authorization, undefined, undefined) as Promise<{
            [key: string]: number;
        }>;
    }
    getGuildRole(guild_id: Types.SnowflakeType, role_id: Types.SnowflakeType) {
        return request("get_guild_role", guild_id, "GET", `/guilds/${guild_id}/roles/${role_id}`, this.#authorization, undefined, undefined) as Promise<Types.GuildRoleResponse>;
    }
    deleteGuildRole(guild_id: Types.SnowflakeType, role_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_role", guild_id, "DELETE", `/guilds/${guild_id}/roles/${role_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildRole(guild_id: Types.SnowflakeType, role_id: Types.SnowflakeType, body: Types.UpdateRoleRequestPartial, reason?: string) {
        return request("update_guild_role", guild_id, "PATCH", `/guilds/${guild_id}/roles/${role_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildRoleResponse>;
    }
    listGuildScheduledEvents(guild_id: Types.SnowflakeType, parameters?: {
        with_user_count?: boolean;
    }) {
        return request("list_guild_scheduled_events", guild_id, "GET", `/guilds/${guild_id}/scheduled-events`, this.#authorization, undefined, parameters) as Promise<((Types.ExternalScheduledEventResponse | Types.StageScheduledEventResponse | Types.VoiceScheduledEventResponse)[] | null)>;
    }
    createGuildScheduledEvent(guild_id: Types.SnowflakeType, body: Types.ExternalScheduledEventCreateRequest | Types.StageScheduledEventCreateRequest | Types.VoiceScheduledEventCreateRequest, reason?: string) {
        return request("create_guild_scheduled_event", guild_id, "POST", `/guilds/${guild_id}/scheduled-events`, this.#authorization, body, undefined, reason) as Promise<(Types.ExternalScheduledEventResponse | Types.StageScheduledEventResponse | Types.VoiceScheduledEventResponse)>;
    }
    getGuildScheduledEvent(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, parameters?: {
        with_user_count?: boolean;
    }) {
        return request("get_guild_scheduled_event", guild_id, "GET", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, this.#authorization, undefined, parameters) as Promise<(Types.ExternalScheduledEventResponse | Types.StageScheduledEventResponse | Types.VoiceScheduledEventResponse)>;
    }
    deleteGuildScheduledEvent(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_scheduled_event", guild_id, "DELETE", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildScheduledEvent(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, body: Types.ExternalScheduledEventPatchRequestPartial | Types.StageScheduledEventPatchRequestPartial | Types.VoiceScheduledEventPatchRequestPartial, reason?: string) {
        return request("update_guild_scheduled_event", guild_id, "PATCH", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, this.#authorization, body, undefined, reason) as Promise<(Types.ExternalScheduledEventResponse | Types.StageScheduledEventResponse | Types.VoiceScheduledEventResponse)>;
    }
    /**
     * Create an exception to a recurring guild scheduled event
     */
    createGuildScheduledEventException(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, body: Types.GuildScheduledEventExceptionCreateRequest, reason?: string) {
        return request("create_guild_scheduled_event", guild_id, "POST", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/exceptions`, this.#authorization, body, undefined, reason) as Promise<Types.GuildScheduledEventExceptionResponse>;
    }
    /**
     * Delete an exception to a recurring guild scheduled event
     */
    deleteGuildScheduledEventException(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, exception_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_scheduled_event", guild_id, "DELETE", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/exceptions/${exception_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    /**
     * Modify an exception to a recurring guild scheduled event
     */
    updateGuildScheduledEventException(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, exception_id: Types.SnowflakeType, body: Types.GuildScheduledEventExceptionPatchRequestPartial, reason?: string) {
        return request("update_guild_scheduled_event", guild_id, "PATCH", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/exceptions/${exception_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildScheduledEventExceptionResponse>;
    }
    listGuildScheduledEventUsers(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
    }) {
        return request("list_guild_scheduled_event_users", guild_id, "GET", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/users`, this.#authorization, undefined, parameters) as Promise<(Types.ScheduledEventUserResponse[] | null)>;
    }
    /**
     * Get the count of users subscribed to a guild scheduled event
     */
    countGuildScheduledEventUsers(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, parameters?: {
        guild_scheduled_event_exception_ids?: Types.SnowflakeType[];
    }) {
        return request("count_guild_scheduled_event_users", guild_id, "GET", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/users/counts`, this.#authorization, undefined, parameters) as Promise<Types.ScheduledEventUserCountResponse>;
    }
    /**
     * Get a list of users subscribed to a guild scheduled event exception
     */
    listGuildScheduledEventExceptionUsers(guild_id: Types.SnowflakeType, guild_scheduled_event_id: Types.SnowflakeType, guild_scheduled_event_exception_id: Types.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
    }) {
        return request("list_guild_scheduled_event_exception_users", guild_id, "GET", `/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/${guild_scheduled_event_exception_id}/users`, this.#authorization, undefined, parameters) as Promise<(Types.ScheduledEventUserResponse[] | null)>;
    }
    listGuildSoundboardSounds(guild_id: Types.SnowflakeType) {
        return request("list_guild_soundboard_sounds", guild_id, "GET", `/guilds/${guild_id}/soundboard-sounds`, this.#authorization, undefined, undefined) as Promise<Types.ListGuildSoundboardSoundsResponse>;
    }
    createGuildSoundboardSound(guild_id: Types.SnowflakeType, body: Types.SoundboardCreateRequest, reason?: string) {
        return request("create_guild_soundboard_sound", guild_id, "POST", `/guilds/${guild_id}/soundboard-sounds`, this.#authorization, body, undefined, reason) as Promise<Types.SoundboardSoundResponse>;
    }
    getGuildSoundboardSound(guild_id: Types.SnowflakeType, sound_id: Types.SnowflakeType) {
        return request("get_guild_soundboard_sound", guild_id, "GET", `/guilds/${guild_id}/soundboard-sounds/${sound_id}`, this.#authorization, undefined, undefined) as Promise<Types.SoundboardSoundResponse>;
    }
    deleteGuildSoundboardSound(guild_id: Types.SnowflakeType, sound_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_soundboard_sound", guild_id, "DELETE", `/guilds/${guild_id}/soundboard-sounds/${sound_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildSoundboardSound(guild_id: Types.SnowflakeType, sound_id: Types.SnowflakeType, body: Types.SoundboardPatchRequestPartial, reason?: string) {
        return request("update_guild_soundboard_sound", guild_id, "PATCH", `/guilds/${guild_id}/soundboard-sounds/${sound_id}`, this.#authorization, body, undefined, reason) as Promise<Types.SoundboardSoundResponse>;
    }
    listGuildStickers(guild_id: Types.SnowflakeType) {
        return request("list_guild_stickers", guild_id, "GET", `/guilds/${guild_id}/stickers`, this.#authorization, undefined, undefined) as Promise<Types.GuildStickerResponse[]>;
    }
    createGuildSticker(guild_id: Types.SnowflakeType, body: {
        name: string;
        tags: string;
        description?: string | null;
        file: string;
    }, reason?: string) {
        return request("create_guild_sticker", guild_id, "POST", `/guilds/${guild_id}/stickers`, this.#authorization, body, undefined, reason) as Promise<Types.GuildStickerResponse>;
    }
    getGuildSticker(guild_id: Types.SnowflakeType, sticker_id: Types.SnowflakeType) {
        return request("get_guild_sticker", guild_id, "GET", `/guilds/${guild_id}/stickers/${sticker_id}`, this.#authorization, undefined, undefined) as Promise<Types.GuildStickerResponse>;
    }
    deleteGuildSticker(guild_id: Types.SnowflakeType, sticker_id: Types.SnowflakeType, reason?: string) {
        return request("delete_guild_sticker", guild_id, "DELETE", `/guilds/${guild_id}/stickers/${sticker_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildSticker(guild_id: Types.SnowflakeType, sticker_id: Types.SnowflakeType, body: {
        name?: string;
        tags?: string;
        description?: string | null;
    }, reason?: string) {
        return request("update_guild_sticker", guild_id, "PATCH", `/guilds/${guild_id}/stickers/${sticker_id}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildStickerResponse>;
    }
    listGuildTemplates(guild_id: Types.SnowflakeType) {
        return request("list_guild_templates", guild_id, "GET", `/guilds/${guild_id}/templates`, this.#authorization, undefined, undefined) as Promise<(Types.GuildTemplateResponse[] | null)>;
    }
    createGuildTemplate(guild_id: Types.SnowflakeType, body: {
        name: string;
        description?: string | null;
    }, reason?: string) {
        return request("update_guild_template", guild_id, "POST", `/guilds/${guild_id}/templates`, this.#authorization, body, undefined, reason) as Promise<Types.GuildTemplateResponse>;
    }
    syncGuildTemplate(guild_id: Types.SnowflakeType, code: string, reason?: string) {
        return request("update_guild_template", guild_id, "PUT", `/guilds/${guild_id}/templates/${code}`, this.#authorization, undefined, undefined, reason) as Promise<Types.GuildTemplateResponse>;
    }
    deleteGuildTemplate(guild_id: Types.SnowflakeType, code: string, reason?: string) {
        return request("delete_guild_template", guild_id, "DELETE", `/guilds/${guild_id}/templates/${code}`, this.#authorization, undefined, undefined, reason) as Promise<Types.GuildTemplateResponse>;
    }
    updateGuildTemplate(guild_id: Types.SnowflakeType, code: string, body: {
        name?: string;
        description?: string | null;
    }, reason?: string) {
        return request("update_guild_template", guild_id, "PATCH", `/guilds/${guild_id}/templates/${code}`, this.#authorization, body, undefined, reason) as Promise<Types.GuildTemplateResponse>;
    }
    getActiveGuildThreads(guild_id: Types.SnowflakeType) {
        return request("get_active_guild_threads", guild_id, "GET", `/guilds/${guild_id}/threads/active`, this.#authorization, undefined, undefined) as Promise<Types.ThreadsResponse>;
    }
    getGuildVanityUrl(guild_id: Types.SnowflakeType) {
        return request("get_guild_vanity_url", guild_id, "GET", `/guilds/${guild_id}/vanity-url`, this.#authorization, undefined, undefined) as Promise<Types.VanityURLResponse>;
    }
    getSelfVoiceState(guild_id: Types.SnowflakeType) {
        return request("get_self_voice_state", guild_id, "GET", `/guilds/${guild_id}/voice-states/@me`, this.#authorization, undefined, undefined) as Promise<Types.VoiceStateResponse>;
    }
    updateSelfVoiceState(guild_id: Types.SnowflakeType, body: Types.UpdateSelfVoiceStateRequestPartial, reason?: string) {
        return request("update_self_voice_state", guild_id, "PATCH", `/guilds/${guild_id}/voice-states/@me`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    getVoiceState(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("get_voice_state", guild_id, "GET", `/guilds/${guild_id}/voice-states/${user_id}`, this.#authorization, undefined, undefined) as Promise<Types.VoiceStateResponse>;
    }
    updateVoiceState(guild_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: Types.UpdateVoiceStateRequestPartial, reason?: string) {
        return request("update_voice_state", guild_id, "PATCH", `/guilds/${guild_id}/voice-states/${user_id}`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    getGuildWebhooks(guild_id: Types.SnowflakeType) {
        return request("get_guild_webhooks", guild_id, "GET", `/guilds/${guild_id}/webhooks`, this.#authorization, undefined, undefined) as Promise<((Types.ApplicationIncomingWebhookResponse | Types.ChannelFollowerWebhookResponse | Types.GuildIncomingWebhookResponse)[] | null)>;
    }
    getGuildWelcomeScreen(guild_id: Types.SnowflakeType) {
        return request("get_guild_welcome_screen", guild_id, "GET", `/guilds/${guild_id}/welcome-screen`, this.#authorization, undefined, undefined) as Promise<Types.GuildWelcomeScreenResponse>;
    }
    updateGuildWelcomeScreen(guild_id: Types.SnowflakeType, body: Types.WelcomeScreenPatchRequestPartial, reason?: string) {
        return request("update_guild_welcome_screen", guild_id, "PATCH", `/guilds/${guild_id}/welcome-screen`, this.#authorization, body, undefined, reason) as Promise<Types.GuildWelcomeScreenResponse>;
    }
    getGuildWidgetSettings(guild_id: Types.SnowflakeType) {
        return request("get_guild_widget_settings", guild_id, "GET", `/guilds/${guild_id}/widget`, this.#authorization, undefined, undefined) as Promise<Types.WidgetSettingsResponse>;
    }
    updateGuildWidgetSettings(guild_id: Types.SnowflakeType, body: {
        channel_id?: null | Types.SnowflakeType;
        enabled?: boolean | null;
    }, reason?: string) {
        return request("update_guild_widget_settings", guild_id, "PATCH", `/guilds/${guild_id}/widget`, this.#authorization, body, undefined, reason) as Promise<Types.WidgetSettingsResponse>;
    }
    inviteRevoke(code: string) {
        return request("invite_revoke", null, "DELETE", `/invites/${code}`, this.#authorization, undefined, undefined) as Promise<(Types.FriendInviteResponse | Types.GroupDMInviteResponse | Types.GuildInviteResponse)>;
    }
    /**
     * Get the target users for an invite.
     */
    getInviteTargetUsers(code: string) {
        return request("get_invite_target_users", null, "GET", `/invites/${code}/target-users`, this.#authorization, undefined, undefined) as Promise<unknown>;
    }
    /**
     * Update the target users for an existing invite.
     */
    updateInviteTargetUsers(code: string, body: {
        target_users_file: string;
    }) {
        return request("update_invite_target_users", null, "PUT", `/invites/${code}/target-users`, this.#authorization, body, undefined) as Promise<void>;
    }
    /**
     * Get the target users job status for an invite.
     */
    getInviteTargetUsersJobStatus(code: string) {
        return request("get_invite_target_users_job_status", null, "GET", `/invites/${code}/target-users/job-status`, this.#authorization, undefined, undefined) as Promise<Types.TargetUsersJobStatusResponse>;
    }
    createOrJoinLobby(body: {
        idle_timeout_seconds?: number | null;
        lobby_metadata?: {
            [key: string]: string;
        } | null;
        member_metadata?: {
            [key: string]: string;
        } | null;
        secret: string;
        flags?: null | 1;
    }) {
        return request("create_or_join_lobby", null, "PUT", "/lobbies", this.#authorization, body, undefined) as Promise<Types.LobbyResponse>;
    }
    createLobby(body: {
        idle_timeout_seconds?: number | null;
        members?: Types.LobbyMemberRequest[] | null;
        metadata?: {
            [key: string]: string;
        } | null;
        flags?: null | 1;
        override_event_webhooks_url?: string | null;
    }) {
        return request("create_lobby", null, "POST", "/lobbies", this.#authorization, body, undefined) as Promise<Types.LobbyResponse>;
    }
    getLobby(lobby_id: Types.SnowflakeType) {
        return request("get_lobby", null, "GET", `/lobbies/${lobby_id}`, this.#authorization, undefined, undefined) as Promise<Types.LobbyResponse>;
    }
    /**
     * Deletes the specified lobby if it exists. It is safe to call even if the lobby is already deleted.
     */
    deleteLobby(lobby_id: Types.SnowflakeType) {
        return request("delete_lobby", null, "DELETE", `/lobbies/${lobby_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    editLobby(lobby_id: Types.SnowflakeType, body: {
        idle_timeout_seconds?: number | null;
        metadata?: {
            [key: string]: string;
        } | null;
        members?: Types.LobbyMemberRequest[] | null;
        flags?: null | 1;
        override_event_webhooks_url?: string | null;
    }) {
        return request("edit_lobby", null, "PATCH", `/lobbies/${lobby_id}`, this.#authorization, body, undefined) as Promise<Types.LobbyResponse>;
    }
    editLobbyChannelLink(lobby_id: Types.SnowflakeType, body: {
        channel_id?: null | Types.SnowflakeType;
    }) {
        return request("edit_lobby_channel_link", null, "PATCH", `/lobbies/${lobby_id}/channel-linking`, this.#authorization, body, undefined) as Promise<Types.LobbyResponse>;
    }
    leaveLobby(lobby_id: Types.SnowflakeType) {
        return request("leave_lobby", null, "DELETE", `/lobbies/${lobby_id}/members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForSelf(lobby_id: Types.SnowflakeType) {
        return request("create_linked_lobby_guild_invite_for_self", null, "POST", `/lobbies/${lobby_id}/members/@me/invites`, this.#authorization, undefined, undefined) as Promise<Types.LobbyGuildInviteResponse>;
    }
    bulkUpdateLobbyMembers(lobby_id: Types.SnowflakeType, body: Types.BulkLobbyMemberRequest[] | null) {
        return request("bulk_update_lobby_members", null, "POST", `/lobbies/${lobby_id}/members/bulk`, this.#authorization, body, undefined) as Promise<(Types.LobbyMemberResponse[] | null)>;
    }
    addLobbyMember(lobby_id: Types.SnowflakeType, user_id: Types.SnowflakeType, body: {
        metadata?: {
            [key: string]: string;
        } | null;
        flags?: null | 1;
    }) {
        return request("add_lobby_member", null, "PUT", `/lobbies/${lobby_id}/members/${user_id}`, this.#authorization, body, undefined) as Promise<Types.LobbyMemberResponse>;
    }
    deleteLobbyMember(lobby_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("delete_lobby_member", null, "DELETE", `/lobbies/${lobby_id}/members/${user_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForUser(lobby_id: Types.SnowflakeType, user_id: Types.SnowflakeType) {
        return request("create_linked_lobby_guild_invite_for_user", null, "POST", `/lobbies/${lobby_id}/members/${user_id}/invites`, this.#authorization, undefined, undefined) as Promise<Types.LobbyGuildInviteResponse>;
    }
    getLobbyMessages(lobby_id: Types.SnowflakeType, parameters?: {
        limit?: number;
    }) {
        return request("get_lobby_messages", null, "GET", `/lobbies/${lobby_id}/messages`, this.#authorization, undefined, parameters) as Promise<(Types.LobbyMessageResponse[] | null)>;
    }
    createLobbyMessage(lobby_id: Types.SnowflakeType, body: Types.SDKMessageRequest) {
        return request("create_lobby_message", null, "POST", `/lobbies/${lobby_id}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<Types.LobbyMessageResponse>;
    }
    /**
     * Update the external moderation metadata for a lobby message.
     */
    updateLobbyMessageExternalModerationMetadata(lobby_id: Types.SnowflakeType, message_id: Types.SnowflakeType, body: {
        [key: string]: string;
    }) {
        return request("update_lobby_message_external_moderation_metadata", null, "PUT", `/lobbies/${lobby_id}/messages/${message_id}/moderation-metadata`, this.#authorization, body, undefined) as Promise<void>;
    }
    getMyOauth2Authorization() {
        return request("get_my_oauth2_authorization", null, "GET", "/oauth2/@me", this.#authorization, undefined, undefined) as Promise<Types.OAuth2GetAuthorizationResponse>;
    }
    getMyOauth2Application() {
        return request("get_my_oauth2_application", null, "GET", "/oauth2/applications/@me", this.#authorization, undefined, undefined) as Promise<Types.PrivateApplicationResponse>;
    }
    getOpenidConnectUserinfo() {
        return request("get_openid_connect_userinfo", null, "GET", "/oauth2/userinfo", this.#authorization, undefined, undefined) as Promise<Types.OAuth2GetOpenIDConnectUserInfoResponse>;
    }
    /**
     * Update the external moderation metadata for a user message (DM).
     */
    updateUserMessageExternalModerationMetadata(user_id_1: Types.SnowflakeType, user_id_2: Types.SnowflakeType, message_id: Types.SnowflakeType, body: {
        [key: string]: string;
    }) {
        return request("update_user_message_external_moderation_metadata", null, "PUT", `/partner-sdk/dms/${user_id_1}/${user_id_2}/messages/${message_id}/moderation-metadata`, this.#authorization, body, undefined) as Promise<void>;
    }
    botPartnerSdkUnmergeProvisionalAccount(body: {
        external_user_id: string;
    }) {
        return request("bot_partner_sdk_unmerge_provisional_account", null, "POST", "/partner-sdk/provisional-accounts/unmerge/bot", this.#authorization, body, undefined) as Promise<void>;
    }
    botPartnerSdkToken(body: {
        provisional_user_id?: null | Types.SnowflakeType;
        external_user_id: string;
        preferred_global_name?: string | null;
    }) {
        return request("bot_partner_sdk_token", null, "POST", "/partner-sdk/token/bot", this.#authorization, body, undefined) as Promise<Types.ProvisionalTokenResponse>;
    }
    /**
     * Returns all subscriptions containing the SKU, filtered by user.
     */
    getSkuSubscriptions(sku_id: Types.SnowflakeType, parameters?: {
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
        user_id?: Types.SnowflakeType;
    }) {
        return request("get_sku_subscriptions", null, "GET", `/skus/${sku_id}/subscriptions`, this.#authorization, undefined, parameters) as Promise<Types.SubscriptionResponse[]>;
    }
    /**
     * Get a subscription by its ID.
     */
    getSkuSubscription(sku_id: Types.SnowflakeType, subscription_id: Types.SnowflakeType, parameters?: {
        user_id?: Types.SnowflakeType;
    }) {
        return request("get_sku_subscription", null, "GET", `/skus/${sku_id}/subscriptions/${subscription_id}`, this.#authorization, undefined, parameters) as Promise<Types.SubscriptionResponse>;
    }
    getSoundboardDefaultSounds() {
        return request("get_soundboard_default_sounds", null, "GET", "/soundboard-default-sounds", this.#authorization, undefined, undefined) as Promise<Types.SoundboardSoundResponse[]>;
    }
    createStageInstance(body: {
        topic: string;
        channel_id: Types.SnowflakeType;
        privacy_level?: null | Types.StageInstancesPrivacyLevels;
        guild_scheduled_event_id?: null | Types.SnowflakeType;
        send_start_notification?: boolean | null;
    }) {
        return request("create_stage_instance", null, "POST", "/stage-instances", this.#authorization, body, undefined) as Promise<Types.StageInstanceResponse>;
    }
    getStageInstance(channel_id: Types.SnowflakeType) {
        return request("get_stage_instance", channel_id, "GET", `/stage-instances/${channel_id}`, this.#authorization, undefined, undefined) as Promise<Types.StageInstanceResponse>;
    }
    deleteStageInstance(channel_id: Types.SnowflakeType) {
        return request("delete_stage_instance", channel_id, "DELETE", `/stage-instances/${channel_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateStageInstance(channel_id: Types.SnowflakeType, body: {
        topic?: string;
        privacy_level?: Types.StageInstancesPrivacyLevels;
    }) {
        return request("update_stage_instance", channel_id, "PATCH", `/stage-instances/${channel_id}`, this.#authorization, body, undefined) as Promise<Types.StageInstanceResponse>;
    }
    getStickerPack(pack_id: Types.SnowflakeType) {
        return request("get_sticker_pack", null, "GET", `/sticker-packs/${pack_id}`, this.#authorization, undefined, undefined) as Promise<Types.StickerPackResponse>;
    }
    getSticker(sticker_id: Types.SnowflakeType) {
        return request("get_sticker", null, "GET", `/stickers/${sticker_id}`, this.#authorization, undefined, undefined) as Promise<(Types.GuildStickerResponse | Types.StandardStickerResponse)>;
    }
    getMyUser() {
        return request("get_my_user", null, "GET", "/users/@me", this.#authorization, undefined, undefined) as Promise<Types.UserPIIResponse>;
    }
    updateMyUser(body: Types.BotAccountPatchRequest) {
        return request("update_my_user", null, "PATCH", "/users/@me", this.#authorization, body, undefined) as Promise<Types.UserPIIResponse>;
    }
    createDM(body: Types.CreatePrivateChannelRequest) {
        return request("create_dm", null, "POST", "/users/@me/channels", this.#authorization, body, undefined) as Promise<(Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse)>;
    }
    listMyConnections() {
        return request("list_my_connections", null, "GET", "/users/@me/connections", this.#authorization, undefined, undefined) as Promise<(Types.ConnectedAccountResponse[] | null)>;
    }
    listMyGuilds(parameters?: {
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    }) {
        return request("list_my_guilds", null, "GET", "/users/@me/guilds", this.#authorization, undefined, parameters) as Promise<(Types.MyGuildResponse[] | null)>;
    }
    leaveGuild(guild_id: Types.SnowflakeType, reason?: string) {
        return request("leave_guild", guild_id, "DELETE", `/users/@me/guilds/${guild_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    getUser(user_id: Types.SnowflakeType) {
        return request("get_user", null, "GET", `/users/${user_id}`, this.#authorization, undefined, undefined) as Promise<Types.UserResponse>;
    }
    listVoiceRegions() {
        return request("list_voice_regions", null, "GET", "/voice/regions", this.#authorization, undefined, undefined) as Promise<(Types.VoiceRegionResponse[] | null)>;
    }
    getWebhook(webhook_id: Types.SnowflakeType) {
        return request("get_webhook", webhook_id, "GET", `/webhooks/${webhook_id}`, this.#authorization, undefined, undefined) as Promise<(Types.ApplicationIncomingWebhookResponse | Types.ChannelFollowerWebhookResponse | Types.GuildIncomingWebhookResponse)>;
    }
    deleteWebhook(webhook_id: Types.SnowflakeType) {
        return request("delete_webhook", webhook_id, "DELETE", `/webhooks/${webhook_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateWebhook(webhook_id: Types.SnowflakeType, body: {
        name?: string;
        avatar?: string | null;
        channel_id?: null | Types.SnowflakeType;
    }) {
        return request("update_webhook", webhook_id, "PATCH", `/webhooks/${webhook_id}`, this.#authorization, body, undefined) as Promise<(Types.ApplicationIncomingWebhookResponse | Types.ChannelFollowerWebhookResponse | Types.GuildIncomingWebhookResponse)>;
    }
}
/**
 * Client class for interacting with the Discord REST API with a Bearer token.
 */
export class Bearer {
    #authorization: string;
    constructor(token: string) {
        this.#authorization = `Bearer ${token}`;
    }
    uploadApplicationAttachment(application_id: Types.SnowflakeType, body: {
        file: string;
    }) {
        return request("upload_application_attachment", null, "POST", `/applications/${application_id}/attachment`, this.#authorization, body, undefined) as Promise<Types.ActivitiesAttachmentResponse>;
    }
    listApplicationCommands(application_id: Types.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return request("list_application_commands", null, "GET", `/applications/${application_id}/commands`, this.#authorization, undefined, parameters) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    bulkSetApplicationCommands(application_id: Types.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[] | null) {
        return request("bulk_set_application_commands", null, "PUT", `/applications/${application_id}/commands`, this.#authorization, body, undefined) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    createApplicationCommand(application_id: Types.SnowflakeType, body: Types.ApplicationCommandCreateRequest) {
        return request("create_application_command", null, "POST", `/applications/${application_id}/commands`, this.#authorization, body, undefined) as Promise<Types.ApplicationCommandResponse | Types.ApplicationCommandResponse>;
    }
    getApplicationCommand(application_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("get_application_command", null, "GET", `/applications/${application_id}/commands/${command_id}`, this.#authorization, undefined, undefined) as Promise<Types.ApplicationCommandResponse>;
    }
    deleteApplicationCommand(application_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("delete_application_command", null, "DELETE", `/applications/${application_id}/commands/${command_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateApplicationCommand(application_id: Types.SnowflakeType, command_id: Types.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial) {
        return request("update_application_command", null, "PATCH", `/applications/${application_id}/commands/${command_id}`, this.#authorization, body, undefined) as Promise<Types.ApplicationCommandResponse>;
    }
    getEntitlements(application_id: Types.SnowflakeType, parameters?: {
        user_id?: Types.SnowflakeType;
        sku_ids?: string | (null | Types.SnowflakeType)[];
        guild_id?: Types.SnowflakeType;
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
        exclude_ended?: boolean;
        exclude_deleted?: boolean;
        only_active?: boolean;
    }) {
        return request("get_entitlements", null, "GET", `/applications/${application_id}/entitlements`, this.#authorization, undefined, parameters) as Promise<Types.EntitlementResponse[]>;
    }
    getEntitlement(application_id: Types.SnowflakeType, entitlement_id: Types.SnowflakeType) {
        return request("get_entitlement", null, "GET", `/applications/${application_id}/entitlements/${entitlement_id}`, this.#authorization, undefined, undefined) as Promise<Types.EntitlementResponse>;
    }
    deleteEntitlement(application_id: Types.SnowflakeType, entitlement_id: Types.SnowflakeType) {
        return request("delete_entitlement", null, "DELETE", `/applications/${application_id}/entitlements/${entitlement_id}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    consumeEntitlement(application_id: Types.SnowflakeType, entitlement_id: Types.SnowflakeType) {
        return request("consume_entitlement", null, "POST", `/applications/${application_id}/entitlements/${entitlement_id}/consume`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listGuildApplicationCommands(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return request("list_guild_application_commands", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands`, this.#authorization, undefined, parameters) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    bulkSetGuildApplicationCommands(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[] | null, reason?: string) {
        return request("bulk_set_application_commands", guild_id, "PUT", `/applications/${application_id}/guilds/${guild_id}/commands`, this.#authorization, body, undefined, reason) as Promise<(Types.ApplicationCommandResponse[] | null)>;
    }
    createGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, body: Types.ApplicationCommandCreateRequest, reason?: string) {
        return request("create_application_command", guild_id, "POST", `/applications/${application_id}/guilds/${guild_id}/commands`, this.#authorization, body, undefined, reason) as Promise<Types.ApplicationCommandResponse | Types.ApplicationCommandResponse>;
    }
    listGuildApplicationCommandPermissions(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType) {
        return request("list_guild_application_command_permissions", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands/permissions`, this.#authorization, undefined, undefined) as Promise<Types.CommandPermissionsResponse[]>;
    }
    getGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("get_guild_application_command", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, this.#authorization, undefined, undefined) as Promise<Types.ApplicationCommandResponse>;
    }
    deleteGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType, reason?: string) {
        return request("delete_application_command", guild_id, "DELETE", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildApplicationCommand(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial, reason?: string) {
        return request("update_application_command", guild_id, "PATCH", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, this.#authorization, body, undefined, reason) as Promise<Types.ApplicationCommandResponse>;
    }
    getGuildApplicationCommandPermissions(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType) {
        return request("get_guild_application_command_permissions", guild_id, "GET", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`, this.#authorization, undefined, undefined) as Promise<Types.CommandPermissionsResponse>;
    }
    setGuildApplicationCommandPermissions(application_id: Types.SnowflakeType, guild_id: Types.SnowflakeType, command_id: Types.SnowflakeType, body: {
        permissions?: Types.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        return request("set_guild_application_command_permissions", guild_id, "PUT", `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`, this.#authorization, body, undefined, reason) as Promise<Types.CommandPermissionsResponse>;
    }
    listGuildChannels(guild_id: Types.SnowflakeType) {
        return request("list_guild_channels", guild_id, "GET", `/guilds/${guild_id}/channels`, this.#authorization, undefined, undefined) as Promise<((Types.GuildChannelResponse | Types.PrivateChannelResponse | Types.PrivateGroupChannelResponse | Types.ThreadResponse)[] | null)>;
    }
    createOrJoinLobby(body: {
        idle_timeout_seconds?: number | null;
        lobby_metadata?: {
            [key: string]: string;
        } | null;
        member_metadata?: {
            [key: string]: string;
        } | null;
        secret: string;
        flags?: null | 1;
    }) {
        return request("create_or_join_lobby", null, "PUT", "/lobbies", this.#authorization, body, undefined) as Promise<Types.LobbyResponse>;
    }
    editLobbyChannelLink(lobby_id: Types.SnowflakeType, body: {
        channel_id?: null | Types.SnowflakeType;
    }) {
        return request("edit_lobby_channel_link", null, "PATCH", `/lobbies/${lobby_id}/channel-linking`, this.#authorization, body, undefined) as Promise<Types.LobbyResponse>;
    }
    leaveLobby(lobby_id: Types.SnowflakeType) {
        return request("leave_lobby", null, "DELETE", `/lobbies/${lobby_id}/members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForSelf(lobby_id: Types.SnowflakeType) {
        return request("create_linked_lobby_guild_invite_for_self", null, "POST", `/lobbies/${lobby_id}/members/@me/invites`, this.#authorization, undefined, undefined) as Promise<Types.LobbyGuildInviteResponse>;
    }
    getLobbyMessages(lobby_id: Types.SnowflakeType, parameters?: {
        limit?: number;
    }) {
        return request("get_lobby_messages", null, "GET", `/lobbies/${lobby_id}/messages`, this.#authorization, undefined, parameters) as Promise<(Types.LobbyMessageResponse[] | null)>;
    }
    createLobbyMessage(lobby_id: Types.SnowflakeType, body: Types.SDKMessageRequest) {
        return request("create_lobby_message", null, "POST", `/lobbies/${lobby_id}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<Types.LobbyMessageResponse>;
    }
    getMyOauth2Authorization() {
        return request("get_my_oauth2_authorization", null, "GET", "/oauth2/@me", this.#authorization, undefined, undefined) as Promise<Types.OAuth2GetAuthorizationResponse>;
    }
    getOpenidConnectUserinfo() {
        return request("get_openid_connect_userinfo", null, "GET", "/oauth2/userinfo", this.#authorization, undefined, undefined) as Promise<Types.OAuth2GetOpenIDConnectUserInfoResponse>;
    }
    /**
     * Returns all subscriptions containing the SKU, filtered by user.
     */
    getSkuSubscriptions(sku_id: Types.SnowflakeType, parameters?: {
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
        user_id?: Types.SnowflakeType;
    }) {
        return request("get_sku_subscriptions", null, "GET", `/skus/${sku_id}/subscriptions`, this.#authorization, undefined, parameters) as Promise<Types.SubscriptionResponse[]>;
    }
    /**
     * Get a subscription by its ID.
     */
    getSkuSubscription(sku_id: Types.SnowflakeType, subscription_id: Types.SnowflakeType, parameters?: {
        user_id?: Types.SnowflakeType;
    }) {
        return request("get_sku_subscription", null, "GET", `/skus/${sku_id}/subscriptions/${subscription_id}`, this.#authorization, undefined, parameters) as Promise<Types.SubscriptionResponse>;
    }
    getMyUser() {
        return request("get_my_user", null, "GET", "/users/@me", this.#authorization, undefined, undefined) as Promise<Types.UserPIIResponse>;
    }
    getCurrentUserApplicationEntitlements(application_id: Types.SnowflakeType, parameters?: {
        sku_ids?: string | (null | Types.SnowflakeType)[];
        exclude_consumed?: boolean;
    }) {
        return request("get_current_user_application_entitlements", null, "GET", `/users/@me/applications/${application_id}/entitlements`, this.#authorization, undefined, parameters) as Promise<Types.EntitlementResponse[]>;
    }
    getApplicationUserRoleConnection(application_id: Types.SnowflakeType) {
        return request("get_application_user_role_connection", null, "GET", `/users/@me/applications/${application_id}/role-connection`, this.#authorization, undefined, undefined) as Promise<Types.ApplicationUserRoleConnectionResponse>;
    }
    updateApplicationUserRoleConnection(application_id: Types.SnowflakeType, body: Types.UpdateApplicationUserRoleConnectionRequest) {
        return request("update_application_user_role_connection", null, "PUT", `/users/@me/applications/${application_id}/role-connection`, this.#authorization, body, undefined) as Promise<Types.ApplicationUserRoleConnectionResponse>;
    }
    deleteApplicationUserRoleConnection(application_id: Types.SnowflakeType) {
        return request("delete_application_user_role_connection", null, "DELETE", `/users/@me/applications/${application_id}/role-connection`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listMyConnections() {
        return request("list_my_connections", null, "GET", "/users/@me/connections", this.#authorization, undefined, undefined) as Promise<(Types.ConnectedAccountResponse[] | null)>;
    }
    listMyGuilds(parameters?: {
        before?: Types.SnowflakeType;
        after?: Types.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    }) {
        return request("list_my_guilds", null, "GET", "/users/@me/guilds", this.#authorization, undefined, parameters) as Promise<(Types.MyGuildResponse[] | null)>;
    }
    getMyGuildMember(guild_id: Types.SnowflakeType) {
        return request("get_my_guild_member", guild_id, "GET", `/users/@me/guilds/${guild_id}/member`, this.#authorization, undefined, undefined) as Promise<Types.PrivateGuildMemberResponse>;
    }
}
