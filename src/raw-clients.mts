import type * as RawTypes from "./raw-types.mts";
import { requestAndParse } from "./request.mts";
function getFormData(json: unknown, attachments: RawTypes.MessageAttachmentRequest[]) {
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
        return requestAndParse("get_gateway", null, "GET", "/gateway", null, undefined, undefined) as Promise<RawTypes.GatewayResponse>;
    }
    getGuildTemplate(code: string) {
        return requestAndParse("get_guild_template", null, "GET", `/guilds/templates/${code}`, null, undefined, undefined) as Promise<RawTypes.GuildTemplateResponse>;
    }
    getGuildWidget(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_widget", guildId, "GET", `/guilds/${guildId}/widget.json`, null, undefined, undefined) as Promise<RawTypes.WidgetResponse>;
    }
    getGuildWidgetPng(guildId: RawTypes.SnowflakeType, parameters?: {
        style?: RawTypes.WidgetImageStyles;
    }) {
        return requestAndParse("get_guild_widget_png", guildId, "GET", `/guilds/${guildId}/widget.png`, null, undefined, parameters) as Promise<unknown>;
    }
    createInteractionResponse(interactionId: RawTypes.SnowflakeType, interactionToken: string, body: RawTypes.ApplicationCommandAutocompleteCallbackRequest | RawTypes.CreateMessageInteractionCallbackRequest | RawTypes.DeferredCreateMessageInteractionCallbackRequest | RawTypes.DeferredUpdateMessageInteractionCallbackRequest | RawTypes.LaunchActivityInteractionCallbackRequest | RawTypes.ModalInteractionCallbackRequest | RawTypes.PongInteractionCallbackRequest | RawTypes.SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest | RawTypes.UpdateMessageInteractionCallbackRequest, parameters?: {
        with_response?: boolean;
    }) {
        return requestAndParse("create_interaction_response", interactionId, "POST", `/interactions/${interactionId}/${interactionToken}/callback`, null, "data" in body && body.data && "attachments" in body.data && body.data.attachments ? getFormData(body, body.data.attachments) : body, parameters) as Promise<RawTypes.InteractionCallbackResponse | void>;
    }
    inviteResolve(code: string, parameters?: {
        with_counts?: boolean;
        guild_scheduled_event_id?: RawTypes.SnowflakeType;
        target_channel_id?: RawTypes.SnowflakeType;
        target_message_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("invite_resolve", null, "GET", `/invites/${code}`, null, undefined, parameters) as Promise<(RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse)>;
    }
    getPublicKeys() {
        return requestAndParse("get_public_keys", null, "GET", "/oauth2/keys", null, undefined, undefined) as Promise<RawTypes.OAuth2GetKeys>;
    }
    getOauth2Token(body: RawTypes.AuthorizationCodeRequest | RawTypes.RefreshTokenRequest) {
        return requestAndParse("get_oauth2_token", null, "POST", "/oauth2/token", null, new URLSearchParams(body as any), undefined) as Promise<RawTypes.AccessTokenResponse>;
    }
    partnerSdkUnmergeProvisionalAccount(body: {
        client_id: RawTypes.SnowflakeType;
        client_secret?: string | null;
        external_auth_token: string;
        external_auth_type: RawTypes.ApplicationIdentityProviderAuthType;
    }) {
        return requestAndParse("partner_sdk_unmerge_provisional_account", null, "POST", "/partner-sdk/provisional-accounts/unmerge", null, body, undefined) as Promise<void>;
    }
    partnerSdkToken(body: {
        client_id: RawTypes.SnowflakeType;
        client_secret?: string | null;
        external_auth_token: string;
        external_auth_type: RawTypes.ApplicationIdentityProviderAuthType;
    }) {
        return requestAndParse("partner_sdk_token", null, "POST", "/partner-sdk/token", null, body, undefined) as Promise<RawTypes.ProvisionalTokenResponse>;
    }
    listStickerPacks() {
        return requestAndParse("list_sticker_packs", null, "GET", "/sticker-packs", null, undefined, undefined) as Promise<RawTypes.StickerPackCollectionResponse>;
    }
    getWebhookByToken(webhookId: RawTypes.SnowflakeType, webhookToken: string) {
        return requestAndParse("use_webhook_by_token", webhookId, "GET", `/webhooks/${webhookId}/${webhookToken}`, null, undefined, undefined) as Promise<(RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)>;
    }
    executeWebhook(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: RawTypes.IncomingWebhookRequestPartial, parameters?: {
        wait?: boolean;
        thread_id?: RawTypes.SnowflakeType;
        with_components?: boolean;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "POST", `/webhooks/${webhookId}/${webhookToken}`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters) as Promise<RawTypes.MessageResponse | void>;
    }
    deleteWebhookByToken(webhookId: RawTypes.SnowflakeType, webhookToken: string) {
        return requestAndParse("use_webhook_by_token", webhookId, "DELETE", `/webhooks/${webhookId}/${webhookToken}`, null, undefined, undefined) as Promise<void>;
    }
    updateWebhookByToken(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: {
        name?: string;
        avatar?: string | null;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "PATCH", `/webhooks/${webhookId}/${webhookToken}`, null, body, undefined) as Promise<(RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)>;
    }
    executeGithubCompatibleWebhook(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: RawTypes.GithubWebhook, parameters?: {
        wait?: boolean;
        thread_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "POST", `/webhooks/${webhookId}/${webhookToken}/github`, null, body, parameters) as Promise<void>;
    }
    getOriginalWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "GET", `/webhooks/${webhookId}/${webhookToken}/messages/@original`, null, undefined, parameters) as Promise<RawTypes.MessageResponse>;
    }
    deleteOriginalWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "DELETE", `/webhooks/${webhookId}/${webhookToken}/messages/@original`, null, undefined, parameters) as Promise<void>;
    }
    updateOriginalWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: RawTypes.IncomingWebhookUpdateRequestPartial, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
        with_components?: boolean;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "PATCH", `/webhooks/${webhookId}/${webhookToken}/messages/@original`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters) as Promise<RawTypes.MessageResponse>;
    }
    getWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, messageId: RawTypes.SnowflakeType, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "GET", `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, null, undefined, parameters) as Promise<RawTypes.MessageResponse>;
    }
    deleteWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, messageId: RawTypes.SnowflakeType, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "DELETE", `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, null, undefined, parameters) as Promise<void>;
    }
    updateWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, messageId: RawTypes.SnowflakeType, body: RawTypes.IncomingWebhookUpdateRequestPartial, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
        with_components?: boolean;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "PATCH", `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters) as Promise<RawTypes.MessageResponse>;
    }
    executeSlackCompatibleWebhook(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: RawTypes.SlackWebhook, parameters?: {
        wait?: boolean;
        thread_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("use_webhook_by_token", webhookId, "POST", `/webhooks/${webhookId}/${webhookToken}/slack`, null, body, parameters) as Promise<string>;
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
        return requestAndParse("get_my_application", null, "GET", "/applications/@me", this.#authorization, undefined, undefined) as Promise<RawTypes.PrivateApplicationResponse>;
    }
    updateMyApplication(body: RawTypes.ApplicationFormPartial) {
        return requestAndParse("update_application", null, "PATCH", "/applications/@me", this.#authorization, body, undefined) as Promise<RawTypes.PrivateApplicationResponse>;
    }
    getApplication(applicationId: RawTypes.SnowflakeType) {
        return requestAndParse("get_application", null, "GET", `/applications/${applicationId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.PrivateApplicationResponse>;
    }
    updateApplication(applicationId: RawTypes.SnowflakeType, body: RawTypes.ApplicationFormPartial) {
        return requestAndParse("update_application", null, "PATCH", `/applications/${applicationId}`, this.#authorization, body, undefined) as Promise<RawTypes.PrivateApplicationResponse>;
    }
    applicationsGetActivityInstance(applicationId: RawTypes.SnowflakeType, instanceId: string) {
        return requestAndParse("applications_get_activity_instance", null, "GET", `/applications/${applicationId}/activity-instances/${instanceId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.EmbeddedActivityInstance>;
    }
    uploadApplicationAttachment(applicationId: RawTypes.SnowflakeType, body: {
        file: Blob;
    }) {
        return requestAndParse("upload_application_attachment", null, "POST", `/applications/${applicationId}/attachment`, this.#authorization, body, undefined) as Promise<RawTypes.ActivitiesAttachmentResponse>;
    }
    listApplicationCommands(applicationId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return requestAndParse("list_application_commands", null, "GET", `/applications/${applicationId}/commands`, this.#authorization, undefined, parameters) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    bulkSetApplicationCommands(applicationId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandUpdateRequest[]) {
        return requestAndParse("bulk_set_application_commands", null, "PUT", `/applications/${applicationId}/commands`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    createApplicationCommand(applicationId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandCreateRequest) {
        return requestAndParse("create_application_command", null, "POST", `/applications/${applicationId}/commands`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationCommandResponse | RawTypes.ApplicationCommandResponse>;
    }
    getApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("get_application_command", null, "GET", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    deleteApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_application_command", null, "DELETE", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandPatchRequestPartial) {
        return requestAndParse("update_application_command", null, "PATCH", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    listApplicationEmojis(applicationId: RawTypes.SnowflakeType) {
        return requestAndParse("list_application_emojis", null, "GET", `/applications/${applicationId}/emojis`, this.#authorization, undefined, undefined) as Promise<RawTypes.ListApplicationEmojisResponse>;
    }
    createApplicationEmoji(applicationId: RawTypes.SnowflakeType, body: {
        name: string;
        image: string;
    }) {
        return requestAndParse("create_application_emoji", null, "POST", `/applications/${applicationId}/emojis`, this.#authorization, body, undefined) as Promise<RawTypes.EmojiResponse>;
    }
    getApplicationEmoji(applicationId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType) {
        return requestAndParse("get_application_emoji", null, "GET", `/applications/${applicationId}/emojis/${emojiId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.EmojiResponse>;
    }
    deleteApplicationEmoji(applicationId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_application_emoji", null, "DELETE", `/applications/${applicationId}/emojis/${emojiId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateApplicationEmoji(applicationId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType, body: {
        name?: string;
    }) {
        return requestAndParse("update_application_emoji", null, "PATCH", `/applications/${applicationId}/emojis/${emojiId}`, this.#authorization, body, undefined) as Promise<RawTypes.EmojiResponse>;
    }
    getEntitlements(applicationId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
        sku_ids?: string | (null | RawTypes.SnowflakeType)[];
        guild_id?: RawTypes.SnowflakeType;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        exclude_ended?: boolean;
        exclude_deleted?: boolean;
        only_active?: boolean;
    }) {
        return requestAndParse("get_entitlements", null, "GET", `/applications/${applicationId}/entitlements`, this.#authorization, undefined, parameters) as Promise<RawTypes.EntitlementResponse[]>;
    }
    createEntitlement(applicationId: RawTypes.SnowflakeType, body: RawTypes.CreateEntitlementRequestData) {
        return requestAndParse("create_entitlement", null, "POST", `/applications/${applicationId}/entitlements`, this.#authorization, body, undefined) as Promise<RawTypes.EntitlementResponse>;
    }
    getEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        return requestAndParse("get_entitlement", null, "GET", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.EntitlementResponse>;
    }
    deleteEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_entitlement", null, "DELETE", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    consumeEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        return requestAndParse("consume_entitlement", null, "POST", `/applications/${applicationId}/entitlements/${entitlementId}/consume`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return requestAndParse("list_guild_application_commands", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, undefined, parameters) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    bulkSetGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandUpdateRequest[], reason?: string) {
        return requestAndParse("bulk_set_application_commands", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, body, undefined, reason) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    createGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandCreateRequest, reason?: string) {
        return requestAndParse("create_application_command", guildId, "POST", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, body, undefined, reason) as Promise<RawTypes.ApplicationCommandResponse | RawTypes.ApplicationCommandResponse>;
    }
    listGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/permissions`, this.#authorization, undefined, undefined) as Promise<RawTypes.CommandPermissionsResponse[]>;
    }
    getGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_application_command", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    deleteGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_application_command", guildId, "DELETE", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandPatchRequestPartial, reason?: string) {
        return requestAndParse("update_application_command", guildId, "PATCH", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    getGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, undefined, undefined) as Promise<RawTypes.CommandPermissionsResponse>;
    }
    setGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: {
        permissions?: RawTypes.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        return requestAndParse("set_guild_application_command_permissions", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, body, undefined, reason) as Promise<RawTypes.CommandPermissionsResponse>;
    }
    getApplicationRoleConnectionsMetadata(applicationId: RawTypes.SnowflakeType) {
        return requestAndParse("get_application_role_connections_metadata", null, "GET", `/applications/${applicationId}/role-connections/metadata`, this.#authorization, undefined, undefined) as Promise<RawTypes.ApplicationRoleConnectionsMetadataItemResponse[]>;
    }
    updateApplicationRoleConnectionsMetadata(applicationId: RawTypes.SnowflakeType, body: RawTypes.ApplicationRoleConnectionsMetadataItemRequest[]) {
        return requestAndParse("update_application_role_connections_metadata", null, "PUT", `/applications/${applicationId}/role-connections/metadata`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationRoleConnectionsMetadataItemResponse[]>;
    }
    getChannel(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("get_channel", channelId, "GET", `/channels/${channelId}`, this.#authorization, undefined, undefined) as Promise<(RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)>;
    }
    deleteChannel(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_channel", channelId, "DELETE", `/channels/${channelId}`, this.#authorization, undefined, undefined) as Promise<(RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)>;
    }
    updateChannel(channelId: RawTypes.SnowflakeType, body: RawTypes.UpdateDMRequestPartial | RawTypes.UpdateGroupDMRequestPartial | RawTypes.UpdateGuildChannelRequestPartial | RawTypes.UpdateThreadRequestPartial) {
        return requestAndParse("update_channel", channelId, "PATCH", `/channels/${channelId}`, this.#authorization, body, undefined) as Promise<(RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)>;
    }
    followChannel(channelId: RawTypes.SnowflakeType, body: {
        webhook_channel_id: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("follow_channel", channelId, "POST", `/channels/${channelId}/followers`, this.#authorization, body, undefined) as Promise<RawTypes.ChannelFollowerResponse>;
    }
    listChannelInvites(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("list_channel_invites", channelId, "GET", `/channels/${channelId}/invites`, this.#authorization, undefined, undefined) as Promise<((RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse) | null)[]>;
    }
    createChannelInvite(channelId: RawTypes.SnowflakeType, body: (RawTypes.CreateGroupDMInviteRequest | RawTypes.CreateGuildInviteRequest) & {
        target_users_file?: Blob;
    }) {
        return requestAndParse("create_channel_invite", channelId, "POST", `/channels/${channelId}/invites`, this.#authorization, body, undefined) as Promise<(RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse) | void>;
    }
    listMessages(channelId: RawTypes.SnowflakeType, parameters?: {
        around?: RawTypes.SnowflakeType;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        return requestAndParse("list_messages", channelId, "GET", `/channels/${channelId}/messages`, this.#authorization, undefined, parameters) as Promise<RawTypes.MessageResponse[]>;
    }
    createMessage(channelId: RawTypes.SnowflakeType, body: RawTypes.MessageCreateRequest) {
        return requestAndParse("create_message", channelId, "POST", `/channels/${channelId}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<RawTypes.MessageResponse>;
    }
    bulkDeleteMessages(channelId: RawTypes.SnowflakeType, body: {
        messages: RawTypes.SnowflakeType[];
    }) {
        return requestAndParse("bulk_delete_messages", channelId, "POST", `/channels/${channelId}/messages/bulk-delete`, this.#authorization, body, undefined) as Promise<void>;
    }
    listPins(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        return requestAndParse("list_pins", channelId, "GET", `/channels/${channelId}/messages/pins`, this.#authorization, undefined, parameters) as Promise<RawTypes.PinnedMessagesResponse>;
    }
    createPin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("create_pin", channelId, "PUT", `/channels/${channelId}/messages/pins/${messageId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deletePin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_pin", channelId, "DELETE", `/channels/${channelId}/messages/pins/${messageId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    getMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("get_message", channelId, "GET", `/channels/${channelId}/messages/${messageId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.MessageResponse>;
    }
    deleteMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_message", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: RawTypes.MessageEditRequestPartial) {
        return requestAndParse("update_message", channelId, "PATCH", `/channels/${channelId}/messages/${messageId}`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<RawTypes.MessageResponse>;
    }
    crosspostMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("crosspost_message", channelId, "POST", `/channels/${channelId}/messages/${messageId}/crosspost`, this.#authorization, undefined, undefined) as Promise<RawTypes.MessageResponse>;
    }
    deleteAllMessageReactions(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listMessageReactionsByEmoji(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string, parameters?: {
        after?: RawTypes.SnowflakeType;
        limit?: number;
        type?: RawTypes.ReactionTypes;
    }) {
        return requestAndParse("list_message_reactions_by_emoji", channelId, "GET", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`, this.#authorization, undefined, parameters) as Promise<RawTypes.UserResponse[]>;
    }
    deleteAllMessageReactionsByEmoji(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string) {
        return requestAndParse("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    addMyMessageReaction(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string) {
        return requestAndParse("update_reactions", channelId, "PUT", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deleteMyMessageReaction(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string) {
        return requestAndParse("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deleteUserMessageReaction(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string, userId: RawTypes.SnowflakeType) {
        return requestAndParse("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/${userId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createThreadFromMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: RawTypes.CreateTextThreadWithMessageRequest) {
        return requestAndParse("create_thread", channelId, "POST", `/channels/${channelId}/messages/${messageId}/threads`, this.#authorization, body, undefined) as Promise<RawTypes.ThreadResponse>;
    }
    setChannelPermissionOverwrite(channelId: RawTypes.SnowflakeType, overwriteId: RawTypes.SnowflakeType, body: {
        type?: null | RawTypes.ChannelPermissionOverwrites;
        allow?: number | null;
        deny?: number | null;
    }) {
        return requestAndParse("set_channel_permission_overwrite", channelId, "PUT", `/channels/${channelId}/permissions/${overwriteId}`, this.#authorization, body, undefined) as Promise<void>;
    }
    deleteChannelPermissionOverwrite(channelId: RawTypes.SnowflakeType, overwriteId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_channel_permission_overwrite", channelId, "DELETE", `/channels/${channelId}/permissions/${overwriteId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deprecatedListPins(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("list_pins", channelId, "GET", `/channels/${channelId}/pins`, this.#authorization, undefined, undefined) as Promise<RawTypes.MessageResponse[]>;
    }
    deprecatedCreatePin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("deprecated_create_pin", channelId, "PUT", `/channels/${channelId}/pins/${messageId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deprecatedDeletePin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("deprecated_delete_pin", channelId, "DELETE", `/channels/${channelId}/pins/${messageId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    getAnswerVoters(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, answerId: number, parameters?: {
        after?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        return requestAndParse("get_answer_voters", channelId, "GET", `/channels/${channelId}/polls/${messageId}/answers/${answerId}`, this.#authorization, undefined, parameters) as Promise<RawTypes.PollAnswerDetailsResponse>;
    }
    pollExpire(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        return requestAndParse("poll_expire", channelId, "POST", `/channels/${channelId}/polls/${messageId}/expire`, this.#authorization, undefined, undefined) as Promise<RawTypes.MessageResponse>;
    }
    addGroupDmUser(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: {
        access_token?: string | null;
        nick?: string | null;
    }) {
        return requestAndParse("add_group_dm_user", channelId, "PUT", `/channels/${channelId}/recipients/${userId}`, this.#authorization, body, undefined) as Promise<(RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse) | void>;
    }
    deleteGroupDmUser(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_group_dm_user", channelId, "DELETE", `/channels/${channelId}/recipients/${userId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    sendSoundboardSound(channelId: RawTypes.SnowflakeType, body: RawTypes.SoundboardSoundSendRequest) {
        return requestAndParse("send_soundboard_sound", channelId, "POST", `/channels/${channelId}/send-soundboard-sound`, this.#authorization, body, undefined) as Promise<void>;
    }
    listThreadMembers(channelId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        after?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("list_thread_members", channelId, "GET", `/channels/${channelId}/thread-members`, this.#authorization, undefined, parameters) as Promise<RawTypes.ThreadMemberResponse[]>;
    }
    joinThread(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("join_thread", channelId, "PUT", `/channels/${channelId}/thread-members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    leaveThread(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("leave_thread", channelId, "DELETE", `/channels/${channelId}/thread-members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    getThreadMember(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
    }) {
        return requestAndParse("get_thread_member", channelId, "GET", `/channels/${channelId}/thread-members/${userId}`, this.#authorization, undefined, parameters) as Promise<RawTypes.ThreadMemberResponse>;
    }
    addThreadMember(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("add_thread_member", channelId, "PUT", `/channels/${channelId}/thread-members/${userId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    deleteThreadMember(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_thread_member", channelId, "DELETE", `/channels/${channelId}/thread-members/${userId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createThread(channelId: RawTypes.SnowflakeType, body: RawTypes.CreateForumThreadRequest | RawTypes.CreateTextThreadWithoutMessageRequest) {
        return requestAndParse("create_thread", channelId, "POST", `/channels/${channelId}/threads`, this.#authorization, "message" in body && body.message.attachments ? getFormData(body, body.message.attachments) : body, undefined) as Promise<RawTypes.CreatedThreadResponse>;
    }
    listPrivateArchivedThreads(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        return requestAndParse("list_private_archived_threads", channelId, "GET", `/channels/${channelId}/threads/archived/private`, this.#authorization, undefined, parameters) as Promise<RawTypes.ThreadsResponse>;
    }
    listPublicArchivedThreads(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        return requestAndParse("list_public_archived_threads", channelId, "GET", `/channels/${channelId}/threads/archived/public`, this.#authorization, undefined, parameters) as Promise<RawTypes.ThreadsResponse>;
    }
    threadSearch(channelId: RawTypes.SnowflakeType, parameters?: {
        name?: string;
        slop?: number;
        min_id?: RawTypes.SnowflakeType;
        max_id?: RawTypes.SnowflakeType;
        tag?: string | RawTypes.SnowflakeType[];
        tag_setting?: RawTypes.ThreadSearchTagSetting;
        archived?: boolean;
        sort_by?: RawTypes.ThreadSortingMode;
        sort_order?: RawTypes.SortingOrder;
        limit?: number;
        offset?: number;
    }) {
        return requestAndParse("thread_search", channelId, "GET", `/channels/${channelId}/threads/search`, this.#authorization, undefined, parameters) as Promise<RawTypes.ThreadSearchResponse | RawTypes.SearchIndexNotReadyResponse>;
    }
    triggerTypingIndicator(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("trigger_typing_indicator", channelId, "POST", `/channels/${channelId}/typing`, this.#authorization, undefined, undefined) as Promise<RawTypes.TypingIndicatorResponse | void>;
    }
    listMyPrivateArchivedThreads(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        return requestAndParse("list_my_private_archived_threads", channelId, "GET", `/channels/${channelId}/users/@me/threads/archived/private`, this.#authorization, undefined, parameters) as Promise<RawTypes.ThreadsResponse>;
    }
    /**
     * Set a voice channel's status.
     */
    updateVoiceChannelStatus(channelId: RawTypes.SnowflakeType, body: {
        /**
         * The new voice channel status
         */
        status?: string | null;
    }) {
        return requestAndParse("update_voice_channel_status", channelId, "PUT", `/channels/${channelId}/voice-status`, this.#authorization, body, undefined) as Promise<void>;
    }
    listChannelWebhooks(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("list_channel_webhooks", channelId, "GET", `/channels/${channelId}/webhooks`, this.#authorization, undefined, undefined) as Promise<(RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)[]>;
    }
    createWebhook(channelId: RawTypes.SnowflakeType, body: {
        name: string;
        avatar?: string | null;
    }) {
        return requestAndParse("create_webhook", channelId, "POST", `/channels/${channelId}/webhooks`, this.#authorization, body, undefined) as Promise<RawTypes.GuildIncomingWebhookResponse>;
    }
    getBotGateway() {
        return requestAndParse("get_bot_gateway", null, "GET", "/gateway/bot", this.#authorization, undefined, undefined) as Promise<RawTypes.GatewayBotResponse>;
    }
    getGuild(guildId: RawTypes.SnowflakeType, parameters?: {
        with_counts?: boolean;
    }) {
        return requestAndParse("get_guild", guildId, "GET", `/guilds/${guildId}`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildWithCountsResponse>;
    }
    updateGuild(guildId: RawTypes.SnowflakeType, body: RawTypes.GuildPatchRequestPartial, reason?: string) {
        return requestAndParse("update_guild", guildId, "PATCH", `/guilds/${guildId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildResponse>;
    }
    listGuildAuditLogEntries(guildId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
        target_id?: RawTypes.SnowflakeType;
        action_type?: RawTypes.AuditLogActionTypes;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        return requestAndParse("list_guild_audit_log_entries", guildId, "GET", `/guilds/${guildId}/audit-logs`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildAuditLogResponse>;
    }
    listAutoModerationRules(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_auto_moderation_rules", guildId, "GET", `/guilds/${guildId}/auto-moderation/rules`, this.#authorization, undefined, undefined) as Promise<((RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse) | null)[]>;
    }
    createAutoModerationRule(guildId: RawTypes.SnowflakeType, body: RawTypes.DefaultKeywordListUpsertRequest | RawTypes.KeywordUpsertRequest | RawTypes.MLSpamUpsertRequest | RawTypes.MentionSpamUpsertRequest | RawTypes.UserProfileUpsertRequest, reason?: string) {
        return requestAndParse("create_auto_moderation_rule", guildId, "POST", `/guilds/${guildId}/auto-moderation/rules`, this.#authorization, body, undefined, reason) as Promise<(RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse)>;
    }
    getAutoModerationRule(guildId: RawTypes.SnowflakeType, ruleId: RawTypes.SnowflakeType) {
        return requestAndParse("get_auto_moderation_rule", guildId, "GET", `/guilds/${guildId}/auto-moderation/rules/${ruleId}`, this.#authorization, undefined, undefined) as Promise<(RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse)>;
    }
    deleteAutoModerationRule(guildId: RawTypes.SnowflakeType, ruleId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_auto_moderation_rule", guildId, "DELETE", `/guilds/${guildId}/auto-moderation/rules/${ruleId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateAutoModerationRule(guildId: RawTypes.SnowflakeType, ruleId: RawTypes.SnowflakeType, body: RawTypes.DefaultKeywordListUpsertRequestPartial | RawTypes.KeywordUpsertRequestPartial | RawTypes.MLSpamUpsertRequestPartial | RawTypes.MentionSpamUpsertRequestPartial | RawTypes.UserProfileUpsertRequestPartial, reason?: string) {
        return requestAndParse("update_auto_moderation_rule", guildId, "PATCH", `/guilds/${guildId}/auto-moderation/rules/${ruleId}`, this.#authorization, body, undefined, reason) as Promise<(RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse)>;
    }
    listGuildBans(guildId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("list_guild_bans", guildId, "GET", `/guilds/${guildId}/bans`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildBanResponse[]>;
    }
    getGuildBan(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_ban", guildId, "GET", `/guilds/${guildId}/bans/${userId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildBanResponse>;
    }
    banUserFromGuild(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: RawTypes.BanUserFromGuildRequest, reason?: string) {
        return requestAndParse("ban_user_from_guild", guildId, "PUT", `/guilds/${guildId}/bans/${userId}`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    unbanUserFromGuild(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: RawTypes.UnbanUserFromGuildRequest, reason?: string) {
        return requestAndParse("unban_user_from_guild", guildId, "DELETE", `/guilds/${guildId}/bans/${userId}`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    bulkBanUsersFromGuild(guildId: RawTypes.SnowflakeType, body: RawTypes.BulkBanUsersRequest, reason?: string) {
        return requestAndParse("bulk_ban_users_from_guild", guildId, "POST", `/guilds/${guildId}/bulk-ban`, this.#authorization, body, undefined, reason) as Promise<RawTypes.BulkBanUsersResponse>;
    }
    listGuildChannels(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_channels", guildId, "GET", `/guilds/${guildId}/channels`, this.#authorization, undefined, undefined) as Promise<(RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)[]>;
    }
    createGuildChannel(guildId: RawTypes.SnowflakeType, body: RawTypes.CreateGuildChannelRequest, reason?: string) {
        return requestAndParse("create_guild_channel", guildId, "POST", `/guilds/${guildId}/channels`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildChannelResponse>;
    }
    bulkUpdateGuildChannels(guildId: RawTypes.SnowflakeType, body: {
        id?: null | RawTypes.SnowflakeType;
        position?: number | null;
        parent_id?: null | RawTypes.SnowflakeType;
        lock_permissions?: boolean | null;
    }[], reason?: string) {
        return requestAndParse("update_channel", guildId, "PATCH", `/guilds/${guildId}/channels`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    listGuildEmojis(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_emojis", guildId, "GET", `/guilds/${guildId}/emojis`, this.#authorization, undefined, undefined) as Promise<RawTypes.EmojiResponse[]>;
    }
    createGuildEmoji(guildId: RawTypes.SnowflakeType, body: {
        name: string;
        image: string;
        roles?: (null | RawTypes.SnowflakeType)[] | null;
    }, reason?: string) {
        return requestAndParse("create_guild_emoji", guildId, "POST", `/guilds/${guildId}/emojis`, this.#authorization, body, undefined, reason) as Promise<RawTypes.EmojiResponse>;
    }
    getGuildEmoji(guildId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_emoji", guildId, "GET", `/guilds/${guildId}/emojis/${emojiId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.EmojiResponse>;
    }
    deleteGuildEmoji(guildId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_emoji", guildId, "DELETE", `/guilds/${guildId}/emojis/${emojiId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildEmoji(guildId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType, body: {
        name?: string;
        roles?: (null | RawTypes.SnowflakeType)[] | null;
    }, reason?: string) {
        return requestAndParse("update_guild_emoji", guildId, "PATCH", `/guilds/${guildId}/emojis/${emojiId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.EmojiResponse>;
    }
    /**
     * Modifies the incident actions of the guild
     */
    updateGuildIncidentActions(guildId: RawTypes.SnowflakeType, body: RawTypes.GuildIncidentActionsRequest, reason?: string) {
        return requestAndParse("update_guild_incident_actions", guildId, "PUT", `/guilds/${guildId}/incident-actions`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildIncidentsDataResponse>;
    }
    listGuildIntegrations(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_integrations", guildId, "GET", `/guilds/${guildId}/integrations`, this.#authorization, undefined, undefined) as Promise<(RawTypes.DiscordIntegrationResponse | RawTypes.ExternalConnectionIntegrationResponse | RawTypes.GuildSubscriptionIntegrationResponse)[]>;
    }
    deleteGuildIntegration(guildId: RawTypes.SnowflakeType, integrationId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_integration", guildId, "DELETE", `/guilds/${guildId}/integrations/${integrationId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    listGuildInvites(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_invites", guildId, "GET", `/guilds/${guildId}/invites`, this.#authorization, undefined, undefined) as Promise<((RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse) | null)[]>;
    }
    listGuildMembers(guildId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
        after?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("list_guild_members", guildId, "GET", `/guilds/${guildId}/members`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildMemberResponse[]>;
    }
    updateMyGuildMember(guildId: RawTypes.SnowflakeType, body: {
        nick?: string | null;
        avatar?: string | null;
        bio?: string | null;
        banner?: string | null;
    }, reason?: string) {
        return requestAndParse("update_my_guild_member", guildId, "PATCH", `/guilds/${guildId}/members/@me`, this.#authorization, body, undefined, reason) as Promise<RawTypes.PrivateGuildMemberResponse>;
    }
    searchGuildMembers(guildId: RawTypes.SnowflakeType, parameters: {
        limit?: number;
        query: string;
    }) {
        return requestAndParse("search_guild_members", guildId, "GET", `/guilds/${guildId}/members/search`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildMemberResponse[]>;
    }
    getGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_member", guildId, "GET", `/guilds/${guildId}/members/${userId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildMemberResponse>;
    }
    addGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: RawTypes.BotAddGuildMemberRequest, reason?: string) {
        return requestAndParse("add_guild_member", guildId, "PUT", `/guilds/${guildId}/members/${userId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildMemberResponse | void>;
    }
    deleteGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_member", guildId, "DELETE", `/guilds/${guildId}/members/${userId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: {
        nick?: string | null;
        roles?: (null | RawTypes.SnowflakeType)[] | null;
        mute?: boolean | null;
        deaf?: boolean | null;
        channel_id?: null | RawTypes.SnowflakeType;
        communication_disabled_until?: string | null;
        flags?: number | null;
    }, reason?: string) {
        return requestAndParse("update_guild_member", guildId, "PATCH", `/guilds/${guildId}/members/${userId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildMemberResponse | void>;
    }
    addGuildMemberRole(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("edit_guild_member_role", guildId, "PUT", `/guilds/${guildId}/members/${userId}/roles/${roleId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    deleteGuildMemberRole(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("edit_guild_member_role", guildId, "DELETE", `/guilds/${guildId}/members/${userId}/roles/${roleId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    guildSearch(guildId: RawTypes.SnowflakeType, parameters?: {
        sort_by?: RawTypes.SortingMode;
        sort_order?: RawTypes.SortingOrder;
        content?: string;
        slop?: number;
        author_id?: RawTypes.SnowflakeType[];
        author_type?: RawTypes.AuthorType[];
        mentions?: RawTypes.SnowflakeType[];
        mentions_role_id?: RawTypes.SnowflakeType[];
        replied_to_user_id?: RawTypes.SnowflakeType[];
        replied_to_message_id?: RawTypes.SnowflakeType[];
        mention_everyone?: boolean;
        min_id?: RawTypes.SnowflakeType;
        max_id?: RawTypes.SnowflakeType;
        limit?: number;
        offset?: number;
        has?: RawTypes.HasOption[];
        link_hostname?: string[];
        embed_provider?: string[];
        embed_type?: RawTypes.SearchableEmbedType[];
        attachment_extension?: string[];
        attachment_filename?: string[];
        pinned?: boolean;
        include_nsfw?: boolean;
        channel_id?: RawTypes.SnowflakeType[];
    }) {
        return requestAndParse("guild_search", guildId, "GET", `/guilds/${guildId}/messages/search`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildSearchResponse | RawTypes.SearchIndexNotReadyResponse>;
    }
    getGuildNewMemberWelcome(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_new_member_welcome", guildId, "GET", `/guilds/${guildId}/new-member-welcome`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildHomeSettingsResponse | void>;
    }
    getGuildsOnboarding(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guilds_onboarding", guildId, "GET", `/guilds/${guildId}/onboarding`, this.#authorization, undefined, undefined) as Promise<RawTypes.UserGuildOnboardingResponse>;
    }
    putGuildsOnboarding(guildId: RawTypes.SnowflakeType, body: RawTypes.UpdateGuildOnboardingRequest, reason?: string) {
        return requestAndParse("put_guilds_onboarding", guildId, "PUT", `/guilds/${guildId}/onboarding`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildOnboardingResponse>;
    }
    getGuildPreview(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_preview", guildId, "GET", `/guilds/${guildId}/preview`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildPreviewResponse>;
    }
    previewPruneGuild(guildId: RawTypes.SnowflakeType, parameters?: {
        days?: number;
        include_roles?: string | (null | RawTypes.SnowflakeType)[];
    }) {
        return requestAndParse("preview_prune_guild", guildId, "GET", `/guilds/${guildId}/prune`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildPruneResponse>;
    }
    pruneGuild(guildId: RawTypes.SnowflakeType, body: RawTypes.PruneGuildRequest, reason?: string) {
        return requestAndParse("prune_guild", guildId, "POST", `/guilds/${guildId}/prune`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildPruneResponse>;
    }
    listGuildVoiceRegions(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_voice_regions", guildId, "GET", `/guilds/${guildId}/regions`, this.#authorization, undefined, undefined) as Promise<RawTypes.VoiceRegionResponse[]>;
    }
    /**
     * List join requests for guild, optionally filtered by application status
     */
    getGuildJoinRequests(guildId: RawTypes.SnowflakeType, parameters?: {
        status?: RawTypes.GuildJoinRequestApplicationStatus;
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("get_guild_join_requests", guildId, "GET", `/guilds/${guildId}/requests`, this.#authorization, undefined, parameters) as Promise<RawTypes.GuildJoinRequestsListResponse>;
    }
    /**
     * Approve or reject guild join request
     */
    actionGuildJoinRequest(guildId: RawTypes.SnowflakeType, requestId: RawTypes.SnowflakeType, body: {
        /**
         * Whether to approve or reject the join request
         */
        action?: RawTypes.GuildJoinRequestApplicationStatus;
        /**
         * Reason for rejection. Only used when action is REJECTED
         */
        rejection_reason?: string | null;
    }, reason?: string) {
        return requestAndParse("action_guild_join_request", guildId, "PATCH", `/guilds/${guildId}/requests/${requestId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildJoinRequestResponse>;
    }
    listGuildRoles(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_roles", guildId, "GET", `/guilds/${guildId}/roles`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildRoleResponse[]>;
    }
    createGuildRole(guildId: RawTypes.SnowflakeType, body: RawTypes.CreateRoleRequest, reason?: string) {
        return requestAndParse("create_guild_role", guildId, "POST", `/guilds/${guildId}/roles`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildRoleResponse>;
    }
    bulkUpdateGuildRoles(guildId: RawTypes.SnowflakeType, body: RawTypes.UpdateRolePositionsRequest[], reason?: string) {
        return requestAndParse("bulk_update_guild_roles", guildId, "PATCH", `/guilds/${guildId}/roles`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildRoleResponse[]>;
    }
    guildRoleMemberCounts(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("guild_role_member_counts", guildId, "GET", `/guilds/${guildId}/roles/member-counts`, this.#authorization, undefined, undefined) as Promise<{
            [key: string]: number;
        }>;
    }
    getGuildRole(guildId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_role", guildId, "GET", `/guilds/${guildId}/roles/${roleId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildRoleResponse>;
    }
    deleteGuildRole(guildId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_role", guildId, "DELETE", `/guilds/${guildId}/roles/${roleId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildRole(guildId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, body: RawTypes.UpdateRoleRequestPartial, reason?: string) {
        return requestAndParse("update_guild_role", guildId, "PATCH", `/guilds/${guildId}/roles/${roleId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildRoleResponse>;
    }
    listGuildScheduledEvents(guildId: RawTypes.SnowflakeType, parameters?: {
        with_user_count?: boolean;
    }) {
        return requestAndParse("list_guild_scheduled_events", guildId, "GET", `/guilds/${guildId}/scheduled-events`, this.#authorization, undefined, parameters) as Promise<(RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse)[]>;
    }
    createGuildScheduledEvent(guildId: RawTypes.SnowflakeType, body: RawTypes.ExternalScheduledEventCreateRequest | RawTypes.StageScheduledEventCreateRequest | RawTypes.VoiceScheduledEventCreateRequest, reason?: string) {
        return requestAndParse("create_guild_scheduled_event", guildId, "POST", `/guilds/${guildId}/scheduled-events`, this.#authorization, body, undefined, reason) as Promise<(RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse)>;
    }
    getGuildScheduledEvent(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, parameters?: {
        with_user_count?: boolean;
    }) {
        return requestAndParse("get_guild_scheduled_event", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, this.#authorization, undefined, parameters) as Promise<(RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse)>;
    }
    deleteGuildScheduledEvent(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_scheduled_event", guildId, "DELETE", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildScheduledEvent(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, body: RawTypes.ExternalScheduledEventPatchRequestPartial | RawTypes.StageScheduledEventPatchRequestPartial | RawTypes.VoiceScheduledEventPatchRequestPartial, reason?: string) {
        return requestAndParse("update_guild_scheduled_event", guildId, "PATCH", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, this.#authorization, body, undefined, reason) as Promise<(RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse)>;
    }
    /**
     * Create an exception to a recurring guild scheduled event
     */
    createGuildScheduledEventException(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, body: RawTypes.GuildScheduledEventExceptionCreateRequest, reason?: string) {
        return requestAndParse("create_guild_scheduled_event", guildId, "POST", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/exceptions`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildScheduledEventExceptionResponse>;
    }
    /**
     * Delete an exception to a recurring guild scheduled event
     */
    deleteGuildScheduledEventException(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, exceptionId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_scheduled_event", guildId, "DELETE", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/exceptions/${exceptionId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    /**
     * Modify an exception to a recurring guild scheduled event
     */
    updateGuildScheduledEventException(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, exceptionId: RawTypes.SnowflakeType, body: RawTypes.GuildScheduledEventExceptionPatchRequestPartial, reason?: string) {
        return requestAndParse("update_guild_scheduled_event", guildId, "PATCH", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/exceptions/${exceptionId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildScheduledEventExceptionResponse>;
    }
    listGuildScheduledEventUsers(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("list_guild_scheduled_event_users", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`, this.#authorization, undefined, parameters) as Promise<RawTypes.ScheduledEventUserResponse[]>;
    }
    /**
     * Get the count of users subscribed to a guild scheduled event
     */
    countGuildScheduledEventUsers(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, parameters?: {
        guild_scheduled_event_exception_ids?: RawTypes.SnowflakeType[];
    }) {
        return requestAndParse("count_guild_scheduled_event_users", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users/counts`, this.#authorization, undefined, parameters) as Promise<RawTypes.ScheduledEventUserCountResponse>;
    }
    /**
     * Get a list of users subscribed to a guild scheduled event exception
     */
    listGuildScheduledEventExceptionUsers(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, guildScheduledEventExceptionId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("list_guild_scheduled_event_exception_users", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/${guildScheduledEventExceptionId}/users`, this.#authorization, undefined, parameters) as Promise<RawTypes.ScheduledEventUserResponse[]>;
    }
    listGuildSoundboardSounds(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_soundboard_sounds", guildId, "GET", `/guilds/${guildId}/soundboard-sounds`, this.#authorization, undefined, undefined) as Promise<RawTypes.ListGuildSoundboardSoundsResponse>;
    }
    createGuildSoundboardSound(guildId: RawTypes.SnowflakeType, body: RawTypes.SoundboardCreateRequest, reason?: string) {
        return requestAndParse("create_guild_soundboard_sound", guildId, "POST", `/guilds/${guildId}/soundboard-sounds`, this.#authorization, body, undefined, reason) as Promise<RawTypes.SoundboardSoundResponse>;
    }
    getGuildSoundboardSound(guildId: RawTypes.SnowflakeType, soundId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_soundboard_sound", guildId, "GET", `/guilds/${guildId}/soundboard-sounds/${soundId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.SoundboardSoundResponse>;
    }
    deleteGuildSoundboardSound(guildId: RawTypes.SnowflakeType, soundId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_soundboard_sound", guildId, "DELETE", `/guilds/${guildId}/soundboard-sounds/${soundId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildSoundboardSound(guildId: RawTypes.SnowflakeType, soundId: RawTypes.SnowflakeType, body: RawTypes.SoundboardPatchRequestPartial, reason?: string) {
        return requestAndParse("update_guild_soundboard_sound", guildId, "PATCH", `/guilds/${guildId}/soundboard-sounds/${soundId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.SoundboardSoundResponse>;
    }
    listGuildStickers(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_stickers", guildId, "GET", `/guilds/${guildId}/stickers`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildStickerResponse[]>;
    }
    createGuildSticker(guildId: RawTypes.SnowflakeType, body: {
        name: string;
        tags: string;
        description?: string | null;
        file: Blob;
    }, reason?: string) {
        return requestAndParse("create_guild_sticker", guildId, "POST", `/guilds/${guildId}/stickers`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildStickerResponse>;
    }
    getGuildSticker(guildId: RawTypes.SnowflakeType, stickerId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_sticker", guildId, "GET", `/guilds/${guildId}/stickers/${stickerId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildStickerResponse>;
    }
    deleteGuildSticker(guildId: RawTypes.SnowflakeType, stickerId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_guild_sticker", guildId, "DELETE", `/guilds/${guildId}/stickers/${stickerId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildSticker(guildId: RawTypes.SnowflakeType, stickerId: RawTypes.SnowflakeType, body: {
        name?: string;
        tags?: string;
        description?: string | null;
    }, reason?: string) {
        return requestAndParse("update_guild_sticker", guildId, "PATCH", `/guilds/${guildId}/stickers/${stickerId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildStickerResponse>;
    }
    listGuildTemplates(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_templates", guildId, "GET", `/guilds/${guildId}/templates`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildTemplateResponse[]>;
    }
    createGuildTemplate(guildId: RawTypes.SnowflakeType, body: {
        name: string;
        description?: string | null;
    }, reason?: string) {
        return requestAndParse("update_guild_template", guildId, "POST", `/guilds/${guildId}/templates`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildTemplateResponse>;
    }
    syncGuildTemplate(guildId: RawTypes.SnowflakeType, code: string, reason?: string) {
        return requestAndParse("update_guild_template", guildId, "PUT", `/guilds/${guildId}/templates/${code}`, this.#authorization, undefined, undefined, reason) as Promise<RawTypes.GuildTemplateResponse>;
    }
    deleteGuildTemplate(guildId: RawTypes.SnowflakeType, code: string, reason?: string) {
        return requestAndParse("delete_guild_template", guildId, "DELETE", `/guilds/${guildId}/templates/${code}`, this.#authorization, undefined, undefined, reason) as Promise<RawTypes.GuildTemplateResponse>;
    }
    updateGuildTemplate(guildId: RawTypes.SnowflakeType, code: string, body: {
        name?: string;
        description?: string | null;
    }, reason?: string) {
        return requestAndParse("update_guild_template", guildId, "PATCH", `/guilds/${guildId}/templates/${code}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildTemplateResponse>;
    }
    getActiveGuildThreads(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_active_guild_threads", guildId, "GET", `/guilds/${guildId}/threads/active`, this.#authorization, undefined, undefined) as Promise<RawTypes.ThreadsResponse>;
    }
    getGuildVanityUrl(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_vanity_url", guildId, "GET", `/guilds/${guildId}/vanity-url`, this.#authorization, undefined, undefined) as Promise<RawTypes.VanityURLResponse>;
    }
    getSelfVoiceState(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_self_voice_state", guildId, "GET", `/guilds/${guildId}/voice-states/@me`, this.#authorization, undefined, undefined) as Promise<RawTypes.VoiceStateResponse>;
    }
    updateSelfVoiceState(guildId: RawTypes.SnowflakeType, body: RawTypes.UpdateSelfVoiceStateRequestPartial, reason?: string) {
        return requestAndParse("update_self_voice_state", guildId, "PATCH", `/guilds/${guildId}/voice-states/@me`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    getVoiceState(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("get_voice_state", guildId, "GET", `/guilds/${guildId}/voice-states/${userId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.VoiceStateResponse>;
    }
    updateVoiceState(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: RawTypes.UpdateVoiceStateRequestPartial, reason?: string) {
        return requestAndParse("update_voice_state", guildId, "PATCH", `/guilds/${guildId}/voice-states/${userId}`, this.#authorization, body, undefined, reason) as Promise<void>;
    }
    getGuildWebhooks(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_webhooks", guildId, "GET", `/guilds/${guildId}/webhooks`, this.#authorization, undefined, undefined) as Promise<(RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)[]>;
    }
    getGuildWelcomeScreen(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_welcome_screen", guildId, "GET", `/guilds/${guildId}/welcome-screen`, this.#authorization, undefined, undefined) as Promise<RawTypes.GuildWelcomeScreenResponse>;
    }
    updateGuildWelcomeScreen(guildId: RawTypes.SnowflakeType, body: RawTypes.WelcomeScreenPatchRequestPartial, reason?: string) {
        return requestAndParse("update_guild_welcome_screen", guildId, "PATCH", `/guilds/${guildId}/welcome-screen`, this.#authorization, body, undefined, reason) as Promise<RawTypes.GuildWelcomeScreenResponse>;
    }
    getGuildWidgetSettings(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_widget_settings", guildId, "GET", `/guilds/${guildId}/widget`, this.#authorization, undefined, undefined) as Promise<RawTypes.WidgetSettingsResponse>;
    }
    updateGuildWidgetSettings(guildId: RawTypes.SnowflakeType, body: {
        channel_id?: null | RawTypes.SnowflakeType;
        enabled?: boolean | null;
    }, reason?: string) {
        return requestAndParse("update_guild_widget_settings", guildId, "PATCH", `/guilds/${guildId}/widget`, this.#authorization, body, undefined, reason) as Promise<RawTypes.WidgetSettingsResponse>;
    }
    inviteRevoke(code: string) {
        return requestAndParse("invite_revoke", null, "DELETE", `/invites/${code}`, this.#authorization, undefined, undefined) as Promise<(RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse)>;
    }
    /**
     * Get the target users for an invite.
     */
    getInviteTargetUsers(code: string) {
        return requestAndParse("get_invite_target_users", null, "GET", `/invites/${code}/target-users`, this.#authorization, undefined, undefined) as Promise<unknown>;
    }
    /**
     * Update the target users for an existing invite.
     */
    updateInviteTargetUsers(code: string, body: {
        target_users_file: Blob;
    }) {
        return requestAndParse("update_invite_target_users", null, "PUT", `/invites/${code}/target-users`, this.#authorization, body, undefined) as Promise<void>;
    }
    /**
     * Get the target users job status for an invite.
     */
    getInviteTargetUsersJobStatus(code: string) {
        return requestAndParse("get_invite_target_users_job_status", null, "GET", `/invites/${code}/target-users/job-status`, this.#authorization, undefined, undefined) as Promise<RawTypes.TargetUsersJobStatusResponse>;
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
        return requestAndParse("create_or_join_lobby", null, "PUT", "/lobbies", this.#authorization, body, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    createLobby(body: {
        idle_timeout_seconds?: number | null;
        members?: RawTypes.LobbyMemberRequest[] | null;
        metadata?: {
            [key: string]: string;
        } | null;
        flags?: null | 1;
        override_event_webhooks_url?: `${string}:${string}` | null;
    }) {
        return requestAndParse("create_lobby", null, "POST", "/lobbies", this.#authorization, body, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    getLobby(lobbyId: RawTypes.SnowflakeType) {
        return requestAndParse("get_lobby", null, "GET", `/lobbies/${lobbyId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    /**
     * Deletes the specified lobby if it exists. It is safe to call even if the lobby is already deleted.
     */
    deleteLobby(lobbyId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_lobby", null, "DELETE", `/lobbies/${lobbyId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    editLobby(lobbyId: RawTypes.SnowflakeType, body: {
        idle_timeout_seconds?: number | null;
        metadata?: {
            [key: string]: string;
        } | null;
        members?: RawTypes.LobbyMemberRequest[] | null;
        flags?: null | 1;
        override_event_webhooks_url?: `${string}:${string}` | null;
    }) {
        return requestAndParse("edit_lobby", null, "PATCH", `/lobbies/${lobbyId}`, this.#authorization, body, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    editLobbyChannelLink(lobbyId: RawTypes.SnowflakeType, body: {
        channel_id?: null | RawTypes.SnowflakeType;
    }) {
        return requestAndParse("edit_lobby_channel_link", null, "PATCH", `/lobbies/${lobbyId}/channel-linking`, this.#authorization, body, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    leaveLobby(lobbyId: RawTypes.SnowflakeType) {
        return requestAndParse("leave_lobby", null, "DELETE", `/lobbies/${lobbyId}/members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForSelf(lobbyId: RawTypes.SnowflakeType) {
        return requestAndParse("create_linked_lobby_guild_invite_for_self", null, "POST", `/lobbies/${lobbyId}/members/@me/invites`, this.#authorization, undefined, undefined) as Promise<RawTypes.LobbyGuildInviteResponse>;
    }
    bulkUpdateLobbyMembers(lobbyId: RawTypes.SnowflakeType, body: RawTypes.BulkLobbyMemberRequest[]) {
        return requestAndParse("bulk_update_lobby_members", null, "POST", `/lobbies/${lobbyId}/members/bulk`, this.#authorization, body, undefined) as Promise<RawTypes.LobbyMemberResponse[]>;
    }
    addLobbyMember(lobbyId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: {
        metadata?: {
            [key: string]: string;
        } | null;
        flags?: null | 1;
        additional_name?: string | null;
    }) {
        return requestAndParse("add_lobby_member", null, "PUT", `/lobbies/${lobbyId}/members/${userId}`, this.#authorization, body, undefined) as Promise<RawTypes.LobbyMemberResponse>;
    }
    deleteLobbyMember(lobbyId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_lobby_member", null, "DELETE", `/lobbies/${lobbyId}/members/${userId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForUser(lobbyId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        return requestAndParse("create_linked_lobby_guild_invite_for_user", null, "POST", `/lobbies/${lobbyId}/members/${userId}/invites`, this.#authorization, undefined, undefined) as Promise<RawTypes.LobbyGuildInviteResponse>;
    }
    getLobbyMessages(lobbyId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
    }) {
        return requestAndParse("get_lobby_messages", null, "GET", `/lobbies/${lobbyId}/messages`, this.#authorization, undefined, parameters) as Promise<RawTypes.LobbyMessageResponse[]>;
    }
    createLobbyMessage(lobbyId: RawTypes.SnowflakeType, body: RawTypes.SDKMessageRequest) {
        return requestAndParse("create_lobby_message", null, "POST", `/lobbies/${lobbyId}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<RawTypes.LobbyMessageResponse>;
    }
    /**
     * Update the external moderation metadata for a lobby message.
     */
    updateLobbyMessageExternalModerationMetadata(lobbyId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: {
        [key: string]: string;
    }) {
        return requestAndParse("update_lobby_message_external_moderation_metadata", null, "PUT", `/lobbies/${lobbyId}/messages/${messageId}/moderation-metadata`, this.#authorization, body, undefined) as Promise<void>;
    }
    getMyOauth2Authorization() {
        return requestAndParse("get_my_oauth2_authorization", null, "GET", "/oauth2/@me", this.#authorization, undefined, undefined) as Promise<RawTypes.OAuth2GetAuthorizationResponse>;
    }
    getMyOauth2Application() {
        return requestAndParse("get_my_oauth2_application", null, "GET", "/oauth2/applications/@me", this.#authorization, undefined, undefined) as Promise<RawTypes.PrivateApplicationResponse>;
    }
    getOpenidConnectUserinfo() {
        return requestAndParse("get_openid_connect_userinfo", null, "GET", "/oauth2/userinfo", this.#authorization, undefined, undefined) as Promise<RawTypes.OAuth2GetOpenIDConnectUserInfoResponse>;
    }
    /**
     * Update the external moderation metadata for a user message (DM).
     */
    updateUserMessageExternalModerationMetadata(userId1: RawTypes.SnowflakeType, userId2: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: {
        [key: string]: string;
    }) {
        return requestAndParse("update_user_message_external_moderation_metadata", null, "PUT", `/partner-sdk/dms/${userId1}/${userId2}/messages/${messageId}/moderation-metadata`, this.#authorization, body, undefined) as Promise<void>;
    }
    botPartnerSdkUnmergeProvisionalAccount(body: {
        external_user_id: string;
    }) {
        return requestAndParse("bot_partner_sdk_unmerge_provisional_account", null, "POST", "/partner-sdk/provisional-accounts/unmerge/bot", this.#authorization, body, undefined) as Promise<void>;
    }
    botPartnerSdkToken(body: {
        provisional_user_id?: null | RawTypes.SnowflakeType;
        external_user_id: string;
        preferred_global_name?: string | null;
    }) {
        return requestAndParse("bot_partner_sdk_token", null, "POST", "/partner-sdk/token/bot", this.#authorization, body, undefined) as Promise<RawTypes.ProvisionalTokenResponse>;
    }
    /**
     * Returns all subscriptions containing the SKU, filtered by user.
     */
    getSkuSubscriptions(skuId: RawTypes.SnowflakeType, parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        user_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("get_sku_subscriptions", null, "GET", `/skus/${skuId}/subscriptions`, this.#authorization, undefined, parameters) as Promise<RawTypes.SubscriptionResponse[]>;
    }
    /**
     * Get a subscription by its ID.
     */
    getSkuSubscription(skuId: RawTypes.SnowflakeType, subscriptionId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("get_sku_subscription", null, "GET", `/skus/${skuId}/subscriptions/${subscriptionId}`, this.#authorization, undefined, parameters) as Promise<RawTypes.SubscriptionResponse>;
    }
    getSoundboardDefaultSounds() {
        return requestAndParse("get_soundboard_default_sounds", null, "GET", "/soundboard-default-sounds", this.#authorization, undefined, undefined) as Promise<RawTypes.SoundboardSoundResponse[]>;
    }
    createStageInstance(body: {
        topic: string;
        channel_id: RawTypes.SnowflakeType;
        privacy_level?: null | RawTypes.StageInstancesPrivacyLevels;
        guild_scheduled_event_id?: null | RawTypes.SnowflakeType;
        send_start_notification?: boolean | null;
    }) {
        return requestAndParse("create_stage_instance", null, "POST", "/stage-instances", this.#authorization, body, undefined) as Promise<RawTypes.StageInstanceResponse>;
    }
    getStageInstance(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("get_stage_instance", channelId, "GET", `/stage-instances/${channelId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.StageInstanceResponse>;
    }
    deleteStageInstance(channelId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_stage_instance", channelId, "DELETE", `/stage-instances/${channelId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateStageInstance(channelId: RawTypes.SnowflakeType, body: {
        topic?: string;
        privacy_level?: RawTypes.StageInstancesPrivacyLevels;
    }) {
        return requestAndParse("update_stage_instance", channelId, "PATCH", `/stage-instances/${channelId}`, this.#authorization, body, undefined) as Promise<RawTypes.StageInstanceResponse>;
    }
    getStickerPack(packId: RawTypes.SnowflakeType) {
        return requestAndParse("get_sticker_pack", null, "GET", `/sticker-packs/${packId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.StickerPackResponse>;
    }
    getSticker(stickerId: RawTypes.SnowflakeType) {
        return requestAndParse("get_sticker", null, "GET", `/stickers/${stickerId}`, this.#authorization, undefined, undefined) as Promise<(RawTypes.GuildStickerResponse | RawTypes.StandardStickerResponse)>;
    }
    getMyUser() {
        return requestAndParse("get_my_user", null, "GET", "/users/@me", this.#authorization, undefined, undefined) as Promise<RawTypes.UserPIIResponse>;
    }
    updateMyUser(body: RawTypes.BotAccountPatchRequest) {
        return requestAndParse("update_my_user", null, "PATCH", "/users/@me", this.#authorization, body, undefined) as Promise<RawTypes.UserPIIResponse>;
    }
    createDm(body: RawTypes.CreatePrivateChannelRequest) {
        return requestAndParse("create_dm", null, "POST", "/users/@me/channels", this.#authorization, body, undefined) as Promise<(RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse)>;
    }
    listMyConnections() {
        return requestAndParse("list_my_connections", null, "GET", "/users/@me/connections", this.#authorization, undefined, undefined) as Promise<RawTypes.ConnectedAccountResponse[]>;
    }
    listMyGuilds(parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    }) {
        return requestAndParse("list_my_guilds", null, "GET", "/users/@me/guilds", this.#authorization, undefined, parameters) as Promise<RawTypes.MyGuildResponse[]>;
    }
    leaveGuild(guildId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("leave_guild", guildId, "DELETE", `/users/@me/guilds/${guildId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    getUser(userId: RawTypes.SnowflakeType) {
        return requestAndParse("get_user", null, "GET", `/users/${userId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.UserResponse>;
    }
    listVoiceRegions() {
        return requestAndParse("list_voice_regions", null, "GET", "/voice/regions", this.#authorization, undefined, undefined) as Promise<RawTypes.VoiceRegionResponse[]>;
    }
    getWebhook(webhookId: RawTypes.SnowflakeType) {
        return requestAndParse("get_webhook", webhookId, "GET", `/webhooks/${webhookId}`, this.#authorization, undefined, undefined) as Promise<(RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)>;
    }
    deleteWebhook(webhookId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_webhook", webhookId, "DELETE", `/webhooks/${webhookId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateWebhook(webhookId: RawTypes.SnowflakeType, body: {
        name?: string;
        avatar?: string | null;
        channel_id?: null | RawTypes.SnowflakeType;
    }) {
        return requestAndParse("update_webhook", webhookId, "PATCH", `/webhooks/${webhookId}`, this.#authorization, body, undefined) as Promise<(RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)>;
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
    uploadApplicationAttachment(applicationId: RawTypes.SnowflakeType, body: {
        file: Blob;
    }) {
        return requestAndParse("upload_application_attachment", null, "POST", `/applications/${applicationId}/attachment`, this.#authorization, body, undefined) as Promise<RawTypes.ActivitiesAttachmentResponse>;
    }
    listApplicationCommands(applicationId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return requestAndParse("list_application_commands", null, "GET", `/applications/${applicationId}/commands`, this.#authorization, undefined, parameters) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    bulkSetApplicationCommands(applicationId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandUpdateRequest[]) {
        return requestAndParse("bulk_set_application_commands", null, "PUT", `/applications/${applicationId}/commands`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    createApplicationCommand(applicationId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandCreateRequest) {
        return requestAndParse("create_application_command", null, "POST", `/applications/${applicationId}/commands`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationCommandResponse | RawTypes.ApplicationCommandResponse>;
    }
    getApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("get_application_command", null, "GET", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    deleteApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_application_command", null, "DELETE", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    updateApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandPatchRequestPartial) {
        return requestAndParse("update_application_command", null, "PATCH", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    getEntitlements(applicationId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
        sku_ids?: string | (null | RawTypes.SnowflakeType)[];
        guild_id?: RawTypes.SnowflakeType;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        exclude_ended?: boolean;
        exclude_deleted?: boolean;
        only_active?: boolean;
    }) {
        return requestAndParse("get_entitlements", null, "GET", `/applications/${applicationId}/entitlements`, this.#authorization, undefined, parameters) as Promise<RawTypes.EntitlementResponse[]>;
    }
    getEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        return requestAndParse("get_entitlement", null, "GET", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.EntitlementResponse>;
    }
    deleteEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_entitlement", null, "DELETE", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    consumeEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        return requestAndParse("consume_entitlement", null, "POST", `/applications/${applicationId}/entitlements/${entitlementId}/consume`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        return requestAndParse("list_guild_application_commands", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, undefined, parameters) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    bulkSetGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandUpdateRequest[], reason?: string) {
        return requestAndParse("bulk_set_application_commands", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, body, undefined, reason) as Promise<RawTypes.ApplicationCommandResponse[]>;
    }
    createGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandCreateRequest, reason?: string) {
        return requestAndParse("create_application_command", guildId, "POST", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, body, undefined, reason) as Promise<RawTypes.ApplicationCommandResponse | RawTypes.ApplicationCommandResponse>;
    }
    listGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/permissions`, this.#authorization, undefined, undefined) as Promise<RawTypes.CommandPermissionsResponse[]>;
    }
    getGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_application_command", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    deleteGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, reason?: string) {
        return requestAndParse("delete_application_command", guildId, "DELETE", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined, reason) as Promise<void>;
    }
    updateGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: RawTypes.ApplicationCommandPatchRequestPartial, reason?: string) {
        return requestAndParse("update_application_command", guildId, "PATCH", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, body, undefined, reason) as Promise<RawTypes.ApplicationCommandResponse>;
    }
    getGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        return requestAndParse("get_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, undefined, undefined) as Promise<RawTypes.CommandPermissionsResponse>;
    }
    setGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: {
        permissions?: RawTypes.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        return requestAndParse("set_guild_application_command_permissions", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, body, undefined, reason) as Promise<RawTypes.CommandPermissionsResponse>;
    }
    listGuildChannels(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("list_guild_channels", guildId, "GET", `/guilds/${guildId}/channels`, this.#authorization, undefined, undefined) as Promise<(RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)[]>;
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
        return requestAndParse("create_or_join_lobby", null, "PUT", "/lobbies", this.#authorization, body, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    editLobbyChannelLink(lobbyId: RawTypes.SnowflakeType, body: {
        channel_id?: null | RawTypes.SnowflakeType;
    }) {
        return requestAndParse("edit_lobby_channel_link", null, "PATCH", `/lobbies/${lobbyId}/channel-linking`, this.#authorization, body, undefined) as Promise<RawTypes.LobbyResponse>;
    }
    leaveLobby(lobbyId: RawTypes.SnowflakeType) {
        return requestAndParse("leave_lobby", null, "DELETE", `/lobbies/${lobbyId}/members/@me`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForSelf(lobbyId: RawTypes.SnowflakeType) {
        return requestAndParse("create_linked_lobby_guild_invite_for_self", null, "POST", `/lobbies/${lobbyId}/members/@me/invites`, this.#authorization, undefined, undefined) as Promise<RawTypes.LobbyGuildInviteResponse>;
    }
    getLobbyMessages(lobbyId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
    }) {
        return requestAndParse("get_lobby_messages", null, "GET", `/lobbies/${lobbyId}/messages`, this.#authorization, undefined, parameters) as Promise<RawTypes.LobbyMessageResponse[]>;
    }
    createLobbyMessage(lobbyId: RawTypes.SnowflakeType, body: RawTypes.SDKMessageRequest) {
        return requestAndParse("create_lobby_message", null, "POST", `/lobbies/${lobbyId}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined) as Promise<RawTypes.LobbyMessageResponse>;
    }
    getMyOauth2Authorization() {
        return requestAndParse("get_my_oauth2_authorization", null, "GET", "/oauth2/@me", this.#authorization, undefined, undefined) as Promise<RawTypes.OAuth2GetAuthorizationResponse>;
    }
    getOpenidConnectUserinfo() {
        return requestAndParse("get_openid_connect_userinfo", null, "GET", "/oauth2/userinfo", this.#authorization, undefined, undefined) as Promise<RawTypes.OAuth2GetOpenIDConnectUserInfoResponse>;
    }
    /**
     * Returns all subscriptions containing the SKU, filtered by user.
     */
    getSkuSubscriptions(skuId: RawTypes.SnowflakeType, parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        user_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("get_sku_subscriptions", null, "GET", `/skus/${skuId}/subscriptions`, this.#authorization, undefined, parameters) as Promise<RawTypes.SubscriptionResponse[]>;
    }
    /**
     * Get a subscription by its ID.
     */
    getSkuSubscription(skuId: RawTypes.SnowflakeType, subscriptionId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
    }) {
        return requestAndParse("get_sku_subscription", null, "GET", `/skus/${skuId}/subscriptions/${subscriptionId}`, this.#authorization, undefined, parameters) as Promise<RawTypes.SubscriptionResponse>;
    }
    getMyUser() {
        return requestAndParse("get_my_user", null, "GET", "/users/@me", this.#authorization, undefined, undefined) as Promise<RawTypes.UserPIIResponse>;
    }
    getCurrentUserApplicationEntitlements(applicationId: RawTypes.SnowflakeType, parameters?: {
        sku_ids?: string | (null | RawTypes.SnowflakeType)[];
        exclude_consumed?: boolean;
    }) {
        return requestAndParse("get_current_user_application_entitlements", null, "GET", `/users/@me/applications/${applicationId}/entitlements`, this.#authorization, undefined, parameters) as Promise<RawTypes.EntitlementResponse[]>;
    }
    getApplicationUserRoleConnection(applicationId: RawTypes.SnowflakeType) {
        return requestAndParse("get_application_user_role_connection", null, "GET", `/users/@me/applications/${applicationId}/role-connection`, this.#authorization, undefined, undefined) as Promise<RawTypes.ApplicationUserRoleConnectionResponse>;
    }
    updateApplicationUserRoleConnection(applicationId: RawTypes.SnowflakeType, body: RawTypes.UpdateApplicationUserRoleConnectionRequest) {
        return requestAndParse("update_application_user_role_connection", null, "PUT", `/users/@me/applications/${applicationId}/role-connection`, this.#authorization, body, undefined) as Promise<RawTypes.ApplicationUserRoleConnectionResponse>;
    }
    deleteApplicationUserRoleConnection(applicationId: RawTypes.SnowflakeType) {
        return requestAndParse("delete_application_user_role_connection", null, "DELETE", `/users/@me/applications/${applicationId}/role-connection`, this.#authorization, undefined, undefined) as Promise<void>;
    }
    listMyConnections() {
        return requestAndParse("list_my_connections", null, "GET", "/users/@me/connections", this.#authorization, undefined, undefined) as Promise<RawTypes.ConnectedAccountResponse[]>;
    }
    listMyGuilds(parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    }) {
        return requestAndParse("list_my_guilds", null, "GET", "/users/@me/guilds", this.#authorization, undefined, parameters) as Promise<RawTypes.MyGuildResponse[]>;
    }
    getMyGuildMember(guildId: RawTypes.SnowflakeType) {
        return requestAndParse("get_my_guild_member", guildId, "GET", `/users/@me/guilds/${guildId}/member`, this.#authorization, undefined, undefined) as Promise<RawTypes.PrivateGuildMemberResponse>;
    }
}
