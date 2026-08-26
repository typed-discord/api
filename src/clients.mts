import * as RawTypes from "./raw-types.mts";
import * as Types from "./types.mts";
import { request, handleError } from "./request.mts";
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
    async getGateway() {
        const response = await request("get_gateway", null, "GET", "/gateway", null, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GatewayResponse;
                    return Types.fromRawGatewayResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildTemplate(code: string) {
        const response = await request("get_guild_template", null, "GET", `/guilds/templates/${code}`, null, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildTemplateResponse;
                    return Types.fromRawGuildTemplateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildWidget(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_widget", guildId, "GET", `/guilds/${guildId}/widget.json`, null, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.WidgetResponse;
                    return Types.fromRawWidgetResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildWidgetPng(guildId: RawTypes.SnowflakeType, parameters?: {
        style?: RawTypes.WidgetImageStyles;
    }) {
        const response = await request("get_guild_widget_png", guildId, "GET", `/guilds/${guildId}/widget.png`, null, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "image/png": return await response.blob();
                default: throw new Error();
            }
        return handleError(response);
    }
    async createInteractionResponse(interactionId: RawTypes.SnowflakeType, interactionToken: string, data: Types.ApplicationCommandAutocompleteCallbackRequest | Types.CreateMessageInteractionCallbackRequest | Types.DeferredCreateMessageInteractionCallbackRequest | Types.DeferredUpdateMessageInteractionCallbackRequest | Types.LaunchActivityInteractionCallbackRequest | Types.ModalInteractionCallbackRequest | Types.PongInteractionCallbackRequest | Types.SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest | Types.UpdateMessageInteractionCallbackRequest, parameters?: {
        with_response?: boolean;
    }) {
        const body = (() => {
            switch (data.type) {
                case Types.InteractionCallbackTypes.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT: return Types.toRawApplicationCommandAutocompleteCallbackRequest(data);
                case Types.InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE: return Types.toRawCreateMessageInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE: return Types.toRawDeferredCreateMessageInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.DEFERRED_UPDATE_MESSAGE: return Types.toRawDeferredUpdateMessageInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.LAUNCH_ACTIVITY: return Types.toRawLaunchActivityInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.MODAL: return Types.toRawModalInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.PONG: return Types.toRawPongInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY: return Types.toRawSocialLayerSKUPurchaseEligibilityInteractionCallbackRequest(data);
                case Types.InteractionCallbackTypes.UPDATE_MESSAGE: return Types.toRawUpdateMessageInteractionCallbackRequest(data);
            }
        })();
        const response = await request("create_interaction_response", interactionId, "POST", `/interactions/${interactionId}/${interactionToken}/callback`, null, "data" in body && body.data && "attachments" in body.data && body.data.attachments ? getFormData(body, body.data.attachments) : body, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.InteractionCallbackResponse;
                    return Types.fromRawInteractionCallbackResponse(json);
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async inviteResolve(code: string, parameters?: {
        with_counts?: boolean;
        guild_scheduled_event_id?: RawTypes.SnowflakeType;
        target_channel_id?: RawTypes.SnowflakeType;
        target_message_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("invite_resolve", null, "GET", `/invites/${code}`, null, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse;
                    switch (json.type) {
                        case RawTypes.InviteTypes.FRIEND: return Types.fromRawFriendInviteResponse(json);
                        case RawTypes.InviteTypes.GROUP_DM: return Types.fromRawGroupDMInviteResponse(json);
                        case RawTypes.InviteTypes.GUILD: return Types.fromRawGuildInviteResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async getPublicKeys() {
        const response = await request("get_public_keys", null, "GET", "/oauth2/keys", null, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.OAuth2GetKeys;
                    return Types.fromRawOAuth2GetKeys(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getOauth2Token(body: RawTypes.AuthorizationCodeRequest | RawTypes.RefreshTokenRequest) {
        const response = await request("get_oauth2_token", null, "POST", "/oauth2/token", null, new URLSearchParams(body as any), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.AccessTokenResponse;
                    return Types.fromRawAccessTokenResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async partnerSdkUnmergeProvisionalAccount(body: {
        clientId: Types.SnowflakeType;
        clientSecret?: string | null;
        externalAuthToken: string;
        externalAuthType: Types.ApplicationIdentityProviderAuthType;
    }) {
        const response = await request("partner_sdk_unmerge_provisional_account", null, "POST", "/partner-sdk/provisional-accounts/unmerge", null, {
            client_id: body.clientId,
            client_secret: body.clientSecret,
            external_auth_token: body.externalAuthToken,
            external_auth_type: body.externalAuthType
        }, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async partnerSdkToken(body: {
        clientId: Types.SnowflakeType;
        clientSecret?: string | null;
        externalAuthToken: string;
        externalAuthType: Types.ApplicationIdentityProviderAuthType;
    }) {
        const response = await request("partner_sdk_token", null, "POST", "/partner-sdk/token", null, {
            client_id: body.clientId,
            client_secret: body.clientSecret,
            external_auth_token: body.externalAuthToken,
            external_auth_type: body.externalAuthType
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ProvisionalTokenResponse;
                    return Types.fromRawProvisionalTokenResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listStickerPacks() {
        const response = await request("list_sticker_packs", null, "GET", "/sticker-packs", null, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.StickerPackCollectionResponse;
                    return Types.fromRawStickerPackCollectionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getWebhookByToken(webhookId: RawTypes.SnowflakeType, webhookToken: string) {
        const response = await request("use_webhook_by_token", webhookId, "GET", `/webhooks/${webhookId}/${webhookToken}`, null, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse;
                    switch (json.type) {
                        case RawTypes.WebhookTypes.APPLICATION_INCOMING: return Types.fromRawApplicationIncomingWebhookResponse(json);
                        case RawTypes.WebhookTypes.CHANNEL_FOLLOWER: return Types.fromRawChannelFollowerWebhookResponse(json);
                        case RawTypes.WebhookTypes.GUILD_INCOMING: return Types.fromRawGuildIncomingWebhookResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async executeWebhook(webhookId: RawTypes.SnowflakeType, webhookToken: string, data: Types.IncomingWebhookRequestPartial, parameters?: {
        wait?: boolean;
        thread_id?: RawTypes.SnowflakeType;
        with_components?: boolean;
    }) {
        const body = Types.toRawIncomingWebhookRequestPartial(data);
        const response = await request("use_webhook_by_token", webhookId, "POST", `/webhooks/${webhookId}/${webhookToken}`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteWebhookByToken(webhookId: RawTypes.SnowflakeType, webhookToken: string) {
        const response = await request("use_webhook_by_token", webhookId, "DELETE", `/webhooks/${webhookId}/${webhookToken}`, null, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateWebhookByToken(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: {
        name?: string;
        avatar?: string | null;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "PATCH", `/webhooks/${webhookId}/${webhookToken}`, null, {
            name: body.name,
            avatar: body.avatar
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse;
                    switch (json.type) {
                        case RawTypes.WebhookTypes.APPLICATION_INCOMING: return Types.fromRawApplicationIncomingWebhookResponse(json);
                        case RawTypes.WebhookTypes.CHANNEL_FOLLOWER: return Types.fromRawChannelFollowerWebhookResponse(json);
                        case RawTypes.WebhookTypes.GUILD_INCOMING: return Types.fromRawGuildIncomingWebhookResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async executeGithubCompatibleWebhook(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: Types.GithubWebhook, parameters?: {
        wait?: boolean;
        thread_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "POST", `/webhooks/${webhookId}/${webhookToken}/github`, null, Types.toRawGithubWebhook(body), parameters);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getOriginalWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "GET", `/webhooks/${webhookId}/${webhookToken}/messages/@original`, null, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteOriginalWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "DELETE", `/webhooks/${webhookId}/${webhookToken}/messages/@original`, null, undefined, parameters);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateOriginalWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, data: Types.IncomingWebhookUpdateRequestPartial, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
        with_components?: boolean;
    }) {
        const body = Types.toRawIncomingWebhookUpdateRequestPartial(data);
        const response = await request("use_webhook_by_token", webhookId, "PATCH", `/webhooks/${webhookId}/${webhookToken}/messages/@original`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, messageId: RawTypes.SnowflakeType, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "GET", `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, null, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, messageId: RawTypes.SnowflakeType, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "DELETE", `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, null, undefined, parameters);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateWebhookMessage(webhookId: RawTypes.SnowflakeType, webhookToken: string, messageId: RawTypes.SnowflakeType, data: Types.IncomingWebhookUpdateRequestPartial, parameters?: {
        thread_id?: RawTypes.SnowflakeType;
        with_components?: boolean;
    }) {
        const body = Types.toRawIncomingWebhookUpdateRequestPartial(data);
        const response = await request("use_webhook_by_token", webhookId, "PATCH", `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, null, body.attachments ? getFormData(body, body.attachments) : body, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async executeSlackCompatibleWebhook(webhookId: RawTypes.SnowflakeType, webhookToken: string, body: RawTypes.SlackWebhook, parameters?: {
        wait?: boolean;
        thread_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("use_webhook_by_token", webhookId, "POST", `/webhooks/${webhookId}/${webhookToken}/slack`, null, body, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as string;
                    return json;
                default: throw new Error();
            }
        return handleError(response);
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
    async getMyApplication() {
        const response = await request("get_my_application", null, "GET", "/applications/@me", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateApplicationResponse;
                    return Types.fromRawPrivateApplicationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateMyApplication(body: Types.ApplicationFormPartial) {
        const response = await request("update_application", null, "PATCH", "/applications/@me", this.#authorization, Types.toRawApplicationFormPartial(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateApplicationResponse;
                    return Types.fromRawPrivateApplicationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getApplication(applicationId: RawTypes.SnowflakeType) {
        const response = await request("get_application", null, "GET", `/applications/${applicationId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateApplicationResponse;
                    return Types.fromRawPrivateApplicationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateApplication(applicationId: RawTypes.SnowflakeType, body: Types.ApplicationFormPartial) {
        const response = await request("update_application", null, "PATCH", `/applications/${applicationId}`, this.#authorization, Types.toRawApplicationFormPartial(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateApplicationResponse;
                    return Types.fromRawPrivateApplicationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async applicationsGetActivityInstance(applicationId: RawTypes.SnowflakeType, instanceId: string) {
        const response = await request("applications_get_activity_instance", null, "GET", `/applications/${applicationId}/activity-instances/${instanceId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmbeddedActivityInstance;
                    return Types.fromRawEmbeddedActivityInstance(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async uploadApplicationAttachment(applicationId: RawTypes.SnowflakeType, body: {
        file: Blob;
    }) {
        const response = await request("upload_application_attachment", null, "POST", `/applications/${applicationId}/attachment`, this.#authorization, body, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ActivitiesAttachmentResponse;
                    return Types.fromRawActivitiesAttachmentResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listApplicationCommands(applicationId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        const response = await request("list_application_commands", null, "GET", `/applications/${applicationId}/commands`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkSetApplicationCommands(applicationId: RawTypes.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[]) {
        const response = await request("bulk_set_application_commands", null, "PUT", `/applications/${applicationId}/commands`, this.#authorization, body.map(item => Types.toRawApplicationCommandUpdateRequest(item)), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createApplicationCommand(applicationId: RawTypes.SnowflakeType, body: Types.ApplicationCommandCreateRequest) {
        const response = await request("create_application_command", null, "POST", `/applications/${applicationId}/commands`, this.#authorization, Types.toRawApplicationCommandCreateRequest(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("get_application_command", null, "GET", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("delete_application_command", null, "DELETE", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial) {
        const response = await request("update_application_command", null, "PATCH", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, Types.toRawApplicationCommandPatchRequestPartial(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listApplicationEmojis(applicationId: RawTypes.SnowflakeType) {
        const response = await request("list_application_emojis", null, "GET", `/applications/${applicationId}/emojis`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ListApplicationEmojisResponse;
                    return Types.fromRawListApplicationEmojisResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async createApplicationEmoji(applicationId: RawTypes.SnowflakeType, body: {
        name: string;
        image: string;
    }) {
        const response = await request("create_application_emoji", null, "POST", `/applications/${applicationId}/emojis`, this.#authorization, {
            name: body.name,
            image: body.image
        }, undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse;
                    return Types.fromRawEmojiResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getApplicationEmoji(applicationId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType) {
        const response = await request("get_application_emoji", null, "GET", `/applications/${applicationId}/emojis/${emojiId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse;
                    return Types.fromRawEmojiResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteApplicationEmoji(applicationId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType) {
        const response = await request("delete_application_emoji", null, "DELETE", `/applications/${applicationId}/emojis/${emojiId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateApplicationEmoji(applicationId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType, body: {
        name?: string;
    }) {
        const response = await request("update_application_emoji", null, "PATCH", `/applications/${applicationId}/emojis/${emojiId}`, this.#authorization, {
            name: body.name
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse;
                    return Types.fromRawEmojiResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getEntitlements(applicationId: RawTypes.SnowflakeType, parameters?: {
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
        const response = await request("get_entitlements", null, "GET", `/applications/${applicationId}/entitlements`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EntitlementResponse[];
                    return json.map(item => Types.fromRawEntitlementResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createEntitlement(applicationId: RawTypes.SnowflakeType, body: Types.CreateEntitlementRequestData) {
        const response = await request("create_entitlement", null, "POST", `/applications/${applicationId}/entitlements`, this.#authorization, Types.toRawCreateEntitlementRequestData(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EntitlementResponse;
                    return Types.fromRawEntitlementResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        const response = await request("get_entitlement", null, "GET", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EntitlementResponse;
                    return Types.fromRawEntitlementResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        const response = await request("delete_entitlement", null, "DELETE", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async consumeEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        const response = await request("consume_entitlement", null, "POST", `/applications/${applicationId}/entitlements/${entitlementId}/consume`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        const response = await request("list_guild_application_commands", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkSetGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[], reason?: string) {
        const response = await request("bulk_set_application_commands", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, body.map(item => Types.toRawApplicationCommandUpdateRequest(item)), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: Types.ApplicationCommandCreateRequest, reason?: string) {
        const response = await request("create_application_command", guildId, "POST", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, Types.toRawApplicationCommandCreateRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/permissions`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CommandPermissionsResponse[];
                    return json.map(item => Types.fromRawCommandPermissionsResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_application_command", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_application_command", guildId, "DELETE", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial, reason?: string) {
        const response = await request("update_application_command", guildId, "PATCH", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, Types.toRawApplicationCommandPatchRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CommandPermissionsResponse;
                    return Types.fromRawCommandPermissionsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async setGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: {
        permissions?: Types.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        const response = await request("set_guild_application_command_permissions", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, {
            permissions: body.permissions == null ? body.permissions : body.permissions.map(item => Types.toRawApplicationCommandPermission(item))
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CommandPermissionsResponse;
                    return Types.fromRawCommandPermissionsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getApplicationRoleConnectionsMetadata(applicationId: RawTypes.SnowflakeType) {
        const response = await request("get_application_role_connections_metadata", null, "GET", `/applications/${applicationId}/role-connections/metadata`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationRoleConnectionsMetadataItemResponse[];
                    return json.map(item => Types.fromRawApplicationRoleConnectionsMetadataItemResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateApplicationRoleConnectionsMetadata(applicationId: RawTypes.SnowflakeType, body: Types.ApplicationRoleConnectionsMetadataItemRequest[]) {
        const response = await request("update_application_role_connections_metadata", null, "PUT", `/applications/${applicationId}/role-connections/metadata`, this.#authorization, body.map(item => Types.toRawApplicationRoleConnectionsMetadataItemRequest(item)), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationRoleConnectionsMetadataItemResponse[];
                    return json.map(item => Types.fromRawApplicationRoleConnectionsMetadataItemResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getChannel(channelId: RawTypes.SnowflakeType) {
        const response = await request("get_channel", channelId, "GET", `/channels/${channelId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse;
                    switch (json.type) {
                        case RawTypes.ChannelTypes.GUILD_TEXT:
                        case RawTypes.ChannelTypes.GUILD_VOICE:
                        case RawTypes.ChannelTypes.GUILD_CATEGORY:
                        case RawTypes.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case RawTypes.ChannelTypes.GUILD_STAGE_VOICE:
                        case RawTypes.ChannelTypes.GUILD_DIRECTORY:
                        case RawTypes.ChannelTypes.GUILD_FORUM: return Types.fromRawGuildChannelResponse(json);
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(json);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(json);
                        case RawTypes.ChannelTypes.ANNOUNCEMENT_THREAD:
                        case RawTypes.ChannelTypes.PUBLIC_THREAD:
                        case RawTypes.ChannelTypes.PRIVATE_THREAD: return Types.fromRawThreadResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteChannel(channelId: RawTypes.SnowflakeType) {
        const response = await request("delete_channel", channelId, "DELETE", `/channels/${channelId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse;
                    switch (json.type) {
                        case RawTypes.ChannelTypes.GUILD_TEXT:
                        case RawTypes.ChannelTypes.GUILD_VOICE:
                        case RawTypes.ChannelTypes.GUILD_CATEGORY:
                        case RawTypes.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case RawTypes.ChannelTypes.GUILD_STAGE_VOICE:
                        case RawTypes.ChannelTypes.GUILD_DIRECTORY:
                        case RawTypes.ChannelTypes.GUILD_FORUM: return Types.fromRawGuildChannelResponse(json);
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(json);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(json);
                        case RawTypes.ChannelTypes.ANNOUNCEMENT_THREAD:
                        case RawTypes.ChannelTypes.PUBLIC_THREAD:
                        case RawTypes.ChannelTypes.PRIVATE_THREAD: return Types.fromRawThreadResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateChannel(channelId: RawTypes.SnowflakeType, body: RawTypes.UpdateDMRequestPartial | RawTypes.UpdateGroupDMRequestPartial | RawTypes.UpdateGuildChannelRequestPartial | RawTypes.UpdateThreadRequestPartial) {
        const response = await request("update_channel", channelId, "PATCH", `/channels/${channelId}`, this.#authorization, body, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse;
                    switch (json.type) {
                        case RawTypes.ChannelTypes.GUILD_TEXT:
                        case RawTypes.ChannelTypes.GUILD_VOICE:
                        case RawTypes.ChannelTypes.GUILD_CATEGORY:
                        case RawTypes.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case RawTypes.ChannelTypes.GUILD_STAGE_VOICE:
                        case RawTypes.ChannelTypes.GUILD_DIRECTORY:
                        case RawTypes.ChannelTypes.GUILD_FORUM: return Types.fromRawGuildChannelResponse(json);
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(json);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(json);
                        case RawTypes.ChannelTypes.ANNOUNCEMENT_THREAD:
                        case RawTypes.ChannelTypes.PUBLIC_THREAD:
                        case RawTypes.ChannelTypes.PRIVATE_THREAD: return Types.fromRawThreadResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async followChannel(channelId: RawTypes.SnowflakeType, body: {
        webhookChannelId: Types.SnowflakeType;
    }) {
        const response = await request("follow_channel", channelId, "POST", `/channels/${channelId}/followers`, this.#authorization, {
            webhook_channel_id: body.webhookChannelId
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ChannelFollowerResponse;
                    return Types.fromRawChannelFollowerResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listChannelInvites(channelId: RawTypes.SnowflakeType) {
        const response = await request("list_channel_invites", channelId, "GET", `/channels/${channelId}/invites`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as ((RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse) | null)[];
                    return json.map(item => item === null ? item : (() => {
                        switch (item.type) {
                            case RawTypes.InviteTypes.FRIEND: return Types.fromRawFriendInviteResponse(item);
                            case RawTypes.InviteTypes.GROUP_DM: return Types.fromRawGroupDMInviteResponse(item);
                            case RawTypes.InviteTypes.GUILD: return Types.fromRawGuildInviteResponse(item);
                        }
                    })());
                default: throw new Error();
            }
        return handleError(response);
    }
    async createChannelInvite(channelId: RawTypes.SnowflakeType, body: (RawTypes.CreateGroupDMInviteRequest | RawTypes.CreateGuildInviteRequest) & {
        target_users_file?: Blob;
    }) {
        const response = await request("create_channel_invite", channelId, "POST", `/channels/${channelId}/invites`, this.#authorization, body, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse;
                    switch (json.type) {
                        case RawTypes.InviteTypes.FRIEND: return Types.fromRawFriendInviteResponse(json);
                        case RawTypes.InviteTypes.GROUP_DM: return Types.fromRawGroupDMInviteResponse(json);
                        case RawTypes.InviteTypes.GUILD: return Types.fromRawGuildInviteResponse(json);
                    }
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listMessages(channelId: RawTypes.SnowflakeType, parameters?: {
        around?: RawTypes.SnowflakeType;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        const response = await request("list_messages", channelId, "GET", `/channels/${channelId}/messages`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse[];
                    return json.map(item => Types.fromRawMessageResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createMessage(channelId: RawTypes.SnowflakeType, data: Types.MessageCreateRequest) {
        const body = Types.toRawMessageCreateRequest(data);
        const response = await request("create_message", channelId, "POST", `/channels/${channelId}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkDeleteMessages(channelId: RawTypes.SnowflakeType, body: {
        messages: Set<Types.SnowflakeType>;
    }) {
        const response = await request("bulk_delete_messages", channelId, "POST", `/channels/${channelId}/messages/bulk-delete`, this.#authorization, {
            messages: [...body.messages]
        }, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listPins(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        const response = await request("list_pins", channelId, "GET", `/channels/${channelId}/messages/pins`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PinnedMessagesResponse;
                    return Types.fromRawPinnedMessagesResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async createPin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("create_pin", channelId, "PUT", `/channels/${channelId}/messages/pins/${messageId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deletePin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("delete_pin", channelId, "DELETE", `/channels/${channelId}/messages/pins/${messageId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("get_message", channelId, "GET", `/channels/${channelId}/messages/${messageId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("delete_message", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, data: Types.MessageEditRequestPartial) {
        const body = Types.toRawMessageEditRequestPartial(data);
        const response = await request("update_message", channelId, "PATCH", `/channels/${channelId}/messages/${messageId}`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async crosspostMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("crosspost_message", channelId, "POST", `/channels/${channelId}/messages/${messageId}/crosspost`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteAllMessageReactions(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listMessageReactionsByEmoji(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string, parameters?: {
        after?: RawTypes.SnowflakeType;
        limit?: number;
        type?: RawTypes.ReactionTypes;
    }) {
        const response = await request("list_message_reactions_by_emoji", channelId, "GET", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.UserResponse[];
                    return json.map(item => Types.fromRawUserResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteAllMessageReactionsByEmoji(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string) {
        const response = await request("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async addMyMessageReaction(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string) {
        const response = await request("update_reactions", channelId, "PUT", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteMyMessageReaction(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string) {
        const response = await request("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteUserMessageReaction(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, emojiName: string, userId: RawTypes.SnowflakeType) {
        const response = await request("update_reactions", channelId, "DELETE", `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async createThreadFromMessage(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: Types.CreateTextThreadWithMessageRequest) {
        const response = await request("create_thread", channelId, "POST", `/channels/${channelId}/messages/${messageId}/threads`, this.#authorization, Types.toRawCreateTextThreadWithMessageRequest(body), undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadResponse;
                    return Types.fromRawThreadResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async setChannelPermissionOverwrite(channelId: RawTypes.SnowflakeType, overwriteId: RawTypes.SnowflakeType, body: {
        type?: null | Types.ChannelPermissionOverwrites;
        allow?: number | null;
        deny?: number | null;
    }) {
        const response = await request("set_channel_permission_overwrite", channelId, "PUT", `/channels/${channelId}/permissions/${overwriteId}`, this.#authorization, {
            type: body.type,
            allow: body.allow,
            deny: body.deny
        }, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteChannelPermissionOverwrite(channelId: RawTypes.SnowflakeType, overwriteId: RawTypes.SnowflakeType) {
        const response = await request("delete_channel_permission_overwrite", channelId, "DELETE", `/channels/${channelId}/permissions/${overwriteId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deprecatedListPins(channelId: RawTypes.SnowflakeType) {
        const response = await request("list_pins", channelId, "GET", `/channels/${channelId}/pins`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse[];
                    return json.map(item => Types.fromRawMessageResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async deprecatedCreatePin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("deprecated_create_pin", channelId, "PUT", `/channels/${channelId}/pins/${messageId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deprecatedDeletePin(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("deprecated_delete_pin", channelId, "DELETE", `/channels/${channelId}/pins/${messageId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getAnswerVoters(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, answerId: number, parameters?: {
        after?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        const response = await request("get_answer_voters", channelId, "GET", `/channels/${channelId}/polls/${messageId}/answers/${answerId}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PollAnswerDetailsResponse;
                    return Types.fromRawPollAnswerDetailsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async pollExpire(channelId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType) {
        const response = await request("poll_expire", channelId, "POST", `/channels/${channelId}/polls/${messageId}/expire`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MessageResponse;
                    return Types.fromRawMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async addGroupDmUser(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: {
        accessToken?: string | null;
        nick?: string | null;
    }) {
        const response = await request("add_group_dm_user", channelId, "PUT", `/channels/${channelId}/recipients/${userId}`, this.#authorization, {
            access_token: body.accessToken,
            nick: body.nick
        }, undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse;
                    switch (json.type) {
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(json);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(json);
                    }
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteGroupDmUser(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("delete_group_dm_user", channelId, "DELETE", `/channels/${channelId}/recipients/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async sendSoundboardSound(channelId: RawTypes.SnowflakeType, body: Types.SoundboardSoundSendRequest) {
        const response = await request("send_soundboard_sound", channelId, "POST", `/channels/${channelId}/send-soundboard-sound`, this.#authorization, Types.toRawSoundboardSoundSendRequest(body), undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listThreadMembers(channelId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        after?: RawTypes.SnowflakeType;
    }) {
        const response = await request("list_thread_members", channelId, "GET", `/channels/${channelId}/thread-members`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadMemberResponse[];
                    return json.map(item => Types.fromRawThreadMemberResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async joinThread(channelId: RawTypes.SnowflakeType) {
        const response = await request("join_thread", channelId, "PUT", `/channels/${channelId}/thread-members/@me`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async leaveThread(channelId: RawTypes.SnowflakeType) {
        const response = await request("leave_thread", channelId, "DELETE", `/channels/${channelId}/thread-members/@me`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getThreadMember(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
    }) {
        const response = await request("get_thread_member", channelId, "GET", `/channels/${channelId}/thread-members/${userId}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadMemberResponse;
                    return Types.fromRawThreadMemberResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async addThreadMember(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("add_thread_member", channelId, "PUT", `/channels/${channelId}/thread-members/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteThreadMember(channelId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("delete_thread_member", channelId, "DELETE", `/channels/${channelId}/thread-members/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async createThread(channelId: RawTypes.SnowflakeType, data: RawTypes.CreateForumThreadRequest | RawTypes.CreateTextThreadWithoutMessageRequest) {
        const body = data;
        const response = await request("create_thread", channelId, "POST", `/channels/${channelId}/threads`, this.#authorization, "message" in body && body.message.attachments ? getFormData(body, body.message.attachments) : body, undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CreatedThreadResponse;
                    return Types.fromRawCreatedThreadResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listPrivateArchivedThreads(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        const response = await request("list_private_archived_threads", channelId, "GET", `/channels/${channelId}/threads/archived/private`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadsResponse;
                    return Types.fromRawThreadsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listPublicArchivedThreads(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: string;
        limit?: number;
    }) {
        const response = await request("list_public_archived_threads", channelId, "GET", `/channels/${channelId}/threads/archived/public`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadsResponse;
                    return Types.fromRawThreadsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async threadSearch(channelId: RawTypes.SnowflakeType, parameters?: {
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
        const response = await request("thread_search", channelId, "GET", `/channels/${channelId}/threads/search`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadSearchResponse;
                    return Types.fromRawThreadSearchResponse(json);
                default: throw new Error();
            }
        if (response.status === 202)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SearchIndexNotReadyResponse;
                    return Types.fromRawSearchIndexNotReadyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async triggerTypingIndicator(channelId: RawTypes.SnowflakeType) {
        const response = await request("trigger_typing_indicator", channelId, "POST", `/channels/${channelId}/typing`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.TypingIndicatorResponse;
                    return Types.fromRawTypingIndicatorResponse(json);
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listMyPrivateArchivedThreads(channelId: RawTypes.SnowflakeType, parameters?: {
        before?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        const response = await request("list_my_private_archived_threads", channelId, "GET", `/channels/${channelId}/users/@me/threads/archived/private`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadsResponse;
                    return Types.fromRawThreadsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Set a voice channel's status.
     */
    async updateVoiceChannelStatus(channelId: RawTypes.SnowflakeType, body: {
        /**
         * The new voice channel status
         */
        status?: string | null;
    }) {
        const response = await request("update_voice_channel_status", channelId, "PUT", `/channels/${channelId}/voice-status`, this.#authorization, {
            status: body.status
        }, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listChannelWebhooks(channelId: RawTypes.SnowflakeType) {
        const response = await request("list_channel_webhooks", channelId, "GET", `/channels/${channelId}/webhooks`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as (RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)[];
                    return json.map(item => { switch (item.type) {
                        case RawTypes.WebhookTypes.APPLICATION_INCOMING: return Types.fromRawApplicationIncomingWebhookResponse(item);
                        case RawTypes.WebhookTypes.CHANNEL_FOLLOWER: return Types.fromRawChannelFollowerWebhookResponse(item);
                        case RawTypes.WebhookTypes.GUILD_INCOMING: return Types.fromRawGuildIncomingWebhookResponse(item);
                    } });
                default: throw new Error();
            }
        return handleError(response);
    }
    async createWebhook(channelId: RawTypes.SnowflakeType, body: {
        name: string;
        avatar?: string | null;
    }) {
        const response = await request("create_webhook", channelId, "POST", `/channels/${channelId}/webhooks`, this.#authorization, {
            name: body.name,
            avatar: body.avatar
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildIncomingWebhookResponse;
                    return Types.fromRawGuildIncomingWebhookResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getBotGateway() {
        const response = await request("get_bot_gateway", null, "GET", "/gateway/bot", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GatewayBotResponse;
                    return Types.fromRawGatewayBotResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuild(guildId: RawTypes.SnowflakeType, parameters?: {
        with_counts?: boolean;
    }) {
        const response = await request("get_guild", guildId, "GET", `/guilds/${guildId}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildWithCountsResponse;
                    return Types.fromRawGuildWithCountsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateGuild(guildId: RawTypes.SnowflakeType, body: Types.GuildPatchRequestPartial, reason?: string) {
        const response = await request("update_guild", guildId, "PATCH", `/guilds/${guildId}`, this.#authorization, Types.toRawGuildPatchRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildResponse;
                    return Types.fromRawGuildResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildAuditLogEntries(guildId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
        target_id?: RawTypes.SnowflakeType;
        action_type?: RawTypes.AuditLogActionTypes;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
    }) {
        const response = await request("list_guild_audit_log_entries", guildId, "GET", `/guilds/${guildId}/audit-logs`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildAuditLogResponse;
                    return Types.fromRawGuildAuditLogResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listAutoModerationRules(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_auto_moderation_rules", guildId, "GET", `/guilds/${guildId}/auto-moderation/rules`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as ((RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse) | null)[];
                    return json.map(item => item === null ? item : (() => {
                        switch (item.trigger_type) {
                            case RawTypes.AutomodTriggerType.DEFAULT_KEYWORD_LIST: return Types.fromRawDefaultKeywordRuleResponse(item);
                            case RawTypes.AutomodTriggerType.KEYWORD: return Types.fromRawKeywordRuleResponse(item);
                            case RawTypes.AutomodTriggerType.ML_SPAM: return Types.fromRawMLSpamRuleResponse(item);
                            case RawTypes.AutomodTriggerType.MENTION_SPAM: return Types.fromRawMentionSpamRuleResponse(item);
                            case RawTypes.AutomodTriggerType.USER_PROFILE: return Types.fromRawUserProfileRuleResponse(item);
                        }
                    })());
                default: throw new Error();
            }
        return handleError(response);
    }
    async createAutoModerationRule(guildId: RawTypes.SnowflakeType, body: Types.DefaultKeywordListUpsertRequest | Types.KeywordUpsertRequest | Types.MLSpamUpsertRequest | Types.MentionSpamUpsertRequest | Types.UserProfileUpsertRequest, reason?: string) {
        const response = await request("create_auto_moderation_rule", guildId, "POST", `/guilds/${guildId}/auto-moderation/rules`, this.#authorization, (() => {
            switch (body.triggerType) {
                case Types.AutomodTriggerType.DEFAULT_KEYWORD_LIST: return Types.toRawDefaultKeywordListUpsertRequest(body);
                case Types.AutomodTriggerType.KEYWORD: return Types.toRawKeywordUpsertRequest(body);
                case Types.AutomodTriggerType.ML_SPAM: return Types.toRawMLSpamUpsertRequest(body);
                case Types.AutomodTriggerType.MENTION_SPAM: return Types.toRawMentionSpamUpsertRequest(body);
                case Types.AutomodTriggerType.USER_PROFILE: return Types.toRawUserProfileUpsertRequest(body);
            }
        })(), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse;
                    switch (json.trigger_type) {
                        case RawTypes.AutomodTriggerType.DEFAULT_KEYWORD_LIST: return Types.fromRawDefaultKeywordRuleResponse(json);
                        case RawTypes.AutomodTriggerType.KEYWORD: return Types.fromRawKeywordRuleResponse(json);
                        case RawTypes.AutomodTriggerType.ML_SPAM: return Types.fromRawMLSpamRuleResponse(json);
                        case RawTypes.AutomodTriggerType.MENTION_SPAM: return Types.fromRawMentionSpamRuleResponse(json);
                        case RawTypes.AutomodTriggerType.USER_PROFILE: return Types.fromRawUserProfileRuleResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async getAutoModerationRule(guildId: RawTypes.SnowflakeType, ruleId: RawTypes.SnowflakeType) {
        const response = await request("get_auto_moderation_rule", guildId, "GET", `/guilds/${guildId}/auto-moderation/rules/${ruleId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse;
                    switch (json.trigger_type) {
                        case RawTypes.AutomodTriggerType.DEFAULT_KEYWORD_LIST: return Types.fromRawDefaultKeywordRuleResponse(json);
                        case RawTypes.AutomodTriggerType.KEYWORD: return Types.fromRawKeywordRuleResponse(json);
                        case RawTypes.AutomodTriggerType.ML_SPAM: return Types.fromRawMLSpamRuleResponse(json);
                        case RawTypes.AutomodTriggerType.MENTION_SPAM: return Types.fromRawMentionSpamRuleResponse(json);
                        case RawTypes.AutomodTriggerType.USER_PROFILE: return Types.fromRawUserProfileRuleResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteAutoModerationRule(guildId: RawTypes.SnowflakeType, ruleId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_auto_moderation_rule", guildId, "DELETE", `/guilds/${guildId}/auto-moderation/rules/${ruleId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateAutoModerationRule(guildId: RawTypes.SnowflakeType, ruleId: RawTypes.SnowflakeType, body: RawTypes.DefaultKeywordListUpsertRequestPartial | RawTypes.KeywordUpsertRequestPartial | RawTypes.MLSpamUpsertRequestPartial | RawTypes.MentionSpamUpsertRequestPartial | RawTypes.UserProfileUpsertRequestPartial, reason?: string) {
        const response = await request("update_auto_moderation_rule", guildId, "PATCH", `/guilds/${guildId}/auto-moderation/rules/${ruleId}`, this.#authorization, body, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.DefaultKeywordRuleResponse | RawTypes.KeywordRuleResponse | RawTypes.MLSpamRuleResponse | RawTypes.MentionSpamRuleResponse | RawTypes.UserProfileRuleResponse;
                    switch (json.trigger_type) {
                        case RawTypes.AutomodTriggerType.DEFAULT_KEYWORD_LIST: return Types.fromRawDefaultKeywordRuleResponse(json);
                        case RawTypes.AutomodTriggerType.KEYWORD: return Types.fromRawKeywordRuleResponse(json);
                        case RawTypes.AutomodTriggerType.ML_SPAM: return Types.fromRawMLSpamRuleResponse(json);
                        case RawTypes.AutomodTriggerType.MENTION_SPAM: return Types.fromRawMentionSpamRuleResponse(json);
                        case RawTypes.AutomodTriggerType.USER_PROFILE: return Types.fromRawUserProfileRuleResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildBans(guildId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        const response = await request("list_guild_bans", guildId, "GET", `/guilds/${guildId}/bans`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildBanResponse[];
                    return json.map(item => Types.fromRawGuildBanResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildBan(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_ban", guildId, "GET", `/guilds/${guildId}/bans/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildBanResponse;
                    return Types.fromRawGuildBanResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async banUserFromGuild(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: Types.BanUserFromGuildRequest, reason?: string) {
        const response = await request("ban_user_from_guild", guildId, "PUT", `/guilds/${guildId}/bans/${userId}`, this.#authorization, Types.toRawBanUserFromGuildRequest(body), undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async unbanUserFromGuild(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: Types.UnbanUserFromGuildRequest, reason?: string) {
        const response = await request("unban_user_from_guild", guildId, "DELETE", `/guilds/${guildId}/bans/${userId}`, this.#authorization, Types.toRawUnbanUserFromGuildRequest(body), undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async bulkBanUsersFromGuild(guildId: RawTypes.SnowflakeType, body: Types.BulkBanUsersRequest, reason?: string) {
        const response = await request("bulk_ban_users_from_guild", guildId, "POST", `/guilds/${guildId}/bulk-ban`, this.#authorization, Types.toRawBulkBanUsersRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.BulkBanUsersResponse;
                    return Types.fromRawBulkBanUsersResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildChannels(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_channels", guildId, "GET", `/guilds/${guildId}/channels`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as (RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)[];
                    return json.map(item => { switch (item.type) {
                        case RawTypes.ChannelTypes.GUILD_TEXT:
                        case RawTypes.ChannelTypes.GUILD_VOICE:
                        case RawTypes.ChannelTypes.GUILD_CATEGORY:
                        case RawTypes.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case RawTypes.ChannelTypes.GUILD_STAGE_VOICE:
                        case RawTypes.ChannelTypes.GUILD_DIRECTORY:
                        case RawTypes.ChannelTypes.GUILD_FORUM: return Types.fromRawGuildChannelResponse(item);
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(item);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(item);
                        case RawTypes.ChannelTypes.ANNOUNCEMENT_THREAD:
                        case RawTypes.ChannelTypes.PUBLIC_THREAD:
                        case RawTypes.ChannelTypes.PRIVATE_THREAD: return Types.fromRawThreadResponse(item);
                    } });
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildChannel(guildId: RawTypes.SnowflakeType, body: Types.CreateGuildChannelRequest, reason?: string) {
        const response = await request("create_guild_channel", guildId, "POST", `/guilds/${guildId}/channels`, this.#authorization, Types.toRawCreateGuildChannelRequest(body), undefined, reason);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildChannelResponse;
                    return Types.fromRawGuildChannelResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkUpdateGuildChannels(guildId: RawTypes.SnowflakeType, body: {
        id?: null | Types.SnowflakeType;
        position?: number | null;
        parentId?: null | Types.SnowflakeType;
        lockPermissions?: boolean | null;
    }[], reason?: string) {
        const response = await request("update_channel", guildId, "PATCH", `/guilds/${guildId}/channels`, this.#authorization, body.map(item => ({
            id: item.id,
            position: item.position,
            parent_id: item.parentId,
            lock_permissions: item.lockPermissions
        })), undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listGuildEmojis(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_emojis", guildId, "GET", `/guilds/${guildId}/emojis`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse[];
                    return json.map(item => Types.fromRawEmojiResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildEmoji(guildId: RawTypes.SnowflakeType, body: {
        name: string;
        image: string;
        roles?: Set<null | Types.SnowflakeType> | null;
    }, reason?: string) {
        const response = await request("create_guild_emoji", guildId, "POST", `/guilds/${guildId}/emojis`, this.#authorization, {
            name: body.name,
            image: body.image,
            roles: body.roles == null ? body.roles : [...body.roles]
        }, undefined, reason);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse;
                    return Types.fromRawEmojiResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildEmoji(guildId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_emoji", guildId, "GET", `/guilds/${guildId}/emojis/${emojiId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse;
                    return Types.fromRawEmojiResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildEmoji(guildId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_emoji", guildId, "DELETE", `/guilds/${guildId}/emojis/${emojiId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildEmoji(guildId: RawTypes.SnowflakeType, emojiId: RawTypes.SnowflakeType, body: {
        name?: string;
        roles?: Set<null | Types.SnowflakeType> | null;
    }, reason?: string) {
        const response = await request("update_guild_emoji", guildId, "PATCH", `/guilds/${guildId}/emojis/${emojiId}`, this.#authorization, {
            name: body.name,
            roles: body.roles == null ? body.roles : [...body.roles]
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EmojiResponse;
                    return Types.fromRawEmojiResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Modifies the incident actions of the guild
     */
    async updateGuildIncidentActions(guildId: RawTypes.SnowflakeType, body: Types.GuildIncidentActionsRequest, reason?: string) {
        const response = await request("update_guild_incident_actions", guildId, "PUT", `/guilds/${guildId}/incident-actions`, this.#authorization, Types.toRawGuildIncidentActionsRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildIncidentsDataResponse;
                    return Types.fromRawGuildIncidentsDataResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildIntegrations(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_integrations", guildId, "GET", `/guilds/${guildId}/integrations`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as (RawTypes.DiscordIntegrationResponse | RawTypes.ExternalConnectionIntegrationResponse | RawTypes.GuildSubscriptionIntegrationResponse)[];
                    return json.map(item => { switch (item.type) {
                        case RawTypes.IntegrationTypes.DISCORD: return Types.fromRawDiscordIntegrationResponse(item);
                        case RawTypes.IntegrationTypes.TWITCH:
                        case RawTypes.IntegrationTypes.YOUTUBE: return Types.fromRawExternalConnectionIntegrationResponse(item);
                        case RawTypes.IntegrationTypes.GUILD_SUBSCRIPTION: return Types.fromRawGuildSubscriptionIntegrationResponse(item);
                    } });
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildIntegration(guildId: RawTypes.SnowflakeType, integrationId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_integration", guildId, "DELETE", `/guilds/${guildId}/integrations/${integrationId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listGuildInvites(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_invites", guildId, "GET", `/guilds/${guildId}/invites`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as ((RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse) | null)[];
                    return json.map(item => item === null ? item : (() => {
                        switch (item.type) {
                            case RawTypes.InviteTypes.FRIEND: return Types.fromRawFriendInviteResponse(item);
                            case RawTypes.InviteTypes.GROUP_DM: return Types.fromRawGroupDMInviteResponse(item);
                            case RawTypes.InviteTypes.GUILD: return Types.fromRawGuildInviteResponse(item);
                        }
                    })());
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildMembers(guildId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
        after?: RawTypes.SnowflakeType;
    }) {
        const response = await request("list_guild_members", guildId, "GET", `/guilds/${guildId}/members`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildMemberResponse[];
                    return json.map(item => Types.fromRawGuildMemberResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateMyGuildMember(guildId: RawTypes.SnowflakeType, body: {
        nick?: string | null;
        avatar?: string | null;
        bio?: string | null;
        banner?: string | null;
    }, reason?: string) {
        const response = await request("update_my_guild_member", guildId, "PATCH", `/guilds/${guildId}/members/@me`, this.#authorization, {
            nick: body.nick,
            avatar: body.avatar,
            bio: body.bio,
            banner: body.banner
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateGuildMemberResponse;
                    return Types.fromRawPrivateGuildMemberResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async searchGuildMembers(guildId: RawTypes.SnowflakeType, parameters: {
        limit?: number;
        query: string;
    }) {
        const response = await request("search_guild_members", guildId, "GET", `/guilds/${guildId}/members/search`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildMemberResponse[];
                    return json.map(item => Types.fromRawGuildMemberResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_member", guildId, "GET", `/guilds/${guildId}/members/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildMemberResponse;
                    return Types.fromRawGuildMemberResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async addGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: Types.BotAddGuildMemberRequest, reason?: string) {
        const response = await request("add_guild_member", guildId, "PUT", `/guilds/${guildId}/members/${userId}`, this.#authorization, Types.toRawBotAddGuildMemberRequest(body), undefined, reason);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildMemberResponse;
                    return Types.fromRawGuildMemberResponse(json);
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_member", guildId, "DELETE", `/guilds/${guildId}/members/${userId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildMember(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: {
        nick?: string | null;
        roles?: Set<null | Types.SnowflakeType> | null;
        mute?: boolean | null;
        deaf?: boolean | null;
        channelId?: null | Types.SnowflakeType;
        communicationDisabledUntil?: Date | null;
        flags?: number | null;
    }, reason?: string) {
        const response = await request("update_guild_member", guildId, "PATCH", `/guilds/${guildId}/members/${userId}`, this.#authorization, {
            nick: body.nick,
            roles: body.roles == null ? body.roles : [...body.roles],
            mute: body.mute,
            deaf: body.deaf,
            channel_id: body.channelId,
            communication_disabled_until: body.communicationDisabledUntil == null ? body.communicationDisabledUntil : body.communicationDisabledUntil.toISOString(),
            flags: body.flags
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildMemberResponse;
                    return Types.fromRawGuildMemberResponse(json);
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async addGuildMemberRole(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("edit_guild_member_role", guildId, "PUT", `/guilds/${guildId}/members/${userId}/roles/${roleId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async deleteGuildMemberRole(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("edit_guild_member_role", guildId, "DELETE", `/guilds/${guildId}/members/${userId}/roles/${roleId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async guildSearch(guildId: RawTypes.SnowflakeType, parameters?: {
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
        const response = await request("guild_search", guildId, "GET", `/guilds/${guildId}/messages/search`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildSearchResponse;
                    return Types.fromRawGuildSearchResponse(json);
                default: throw new Error();
            }
        if (response.status === 202)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SearchIndexNotReadyResponse;
                    return Types.fromRawSearchIndexNotReadyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildNewMemberWelcome(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_new_member_welcome", guildId, "GET", `/guilds/${guildId}/new-member-welcome`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildHomeSettingsResponse;
                    return Types.fromRawGuildHomeSettingsResponse(json);
                default: throw new Error();
            }
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getGuildsOnboarding(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guilds_onboarding", guildId, "GET", `/guilds/${guildId}/onboarding`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.UserGuildOnboardingResponse;
                    return Types.fromRawUserGuildOnboardingResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async putGuildsOnboarding(guildId: RawTypes.SnowflakeType, body: Types.UpdateGuildOnboardingRequest, reason?: string) {
        const response = await request("put_guilds_onboarding", guildId, "PUT", `/guilds/${guildId}/onboarding`, this.#authorization, Types.toRawUpdateGuildOnboardingRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildOnboardingResponse;
                    return Types.fromRawGuildOnboardingResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildPreview(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_preview", guildId, "GET", `/guilds/${guildId}/preview`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildPreviewResponse;
                    return Types.fromRawGuildPreviewResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async previewPruneGuild(guildId: RawTypes.SnowflakeType, parameters?: {
        days?: number;
        include_roles?: string | (null | RawTypes.SnowflakeType)[];
    }) {
        const response = await request("preview_prune_guild", guildId, "GET", `/guilds/${guildId}/prune`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildPruneResponse;
                    return Types.fromRawGuildPruneResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async pruneGuild(guildId: RawTypes.SnowflakeType, body: Types.PruneGuildRequest, reason?: string) {
        const response = await request("prune_guild", guildId, "POST", `/guilds/${guildId}/prune`, this.#authorization, Types.toRawPruneGuildRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildPruneResponse;
                    return Types.fromRawGuildPruneResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildVoiceRegions(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_voice_regions", guildId, "GET", `/guilds/${guildId}/regions`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.VoiceRegionResponse[];
                    return json.map(item => Types.fromRawVoiceRegionResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * List join requests for guild, optionally filtered by application status
     */
    async getGuildJoinRequests(guildId: RawTypes.SnowflakeType, parameters?: {
        status?: RawTypes.GuildJoinRequestApplicationStatus;
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        const response = await request("get_guild_join_requests", guildId, "GET", `/guilds/${guildId}/requests`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildJoinRequestsListResponse;
                    return Types.fromRawGuildJoinRequestsListResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Approve or reject guild join request
     */
    async actionGuildJoinRequest(guildId: RawTypes.SnowflakeType, requestId: RawTypes.SnowflakeType, body: {
        /**
         * Whether to approve or reject the join request
         */
        action?: Types.GuildJoinRequestApplicationStatus;
        /**
         * Reason for rejection. Only used when action is REJECTED
         */
        rejectionReason?: string | null;
    }, reason?: string) {
        const response = await request("action_guild_join_request", guildId, "PATCH", `/guilds/${guildId}/requests/${requestId}`, this.#authorization, {
            action: body.action,
            rejection_reason: body.rejectionReason
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildJoinRequestResponse;
                    return Types.fromRawGuildJoinRequestResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildRoles(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_roles", guildId, "GET", `/guilds/${guildId}/roles`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildRoleResponse[];
                    return json.map(item => Types.fromRawGuildRoleResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildRole(guildId: RawTypes.SnowflakeType, body: Types.CreateRoleRequest, reason?: string) {
        const response = await request("create_guild_role", guildId, "POST", `/guilds/${guildId}/roles`, this.#authorization, Types.toRawCreateRoleRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildRoleResponse;
                    return Types.fromRawGuildRoleResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkUpdateGuildRoles(guildId: RawTypes.SnowflakeType, body: Types.UpdateRolePositionsRequest[], reason?: string) {
        const response = await request("bulk_update_guild_roles", guildId, "PATCH", `/guilds/${guildId}/roles`, this.#authorization, body.map(item => Types.toRawUpdateRolePositionsRequest(item)), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildRoleResponse[];
                    return json.map(item => Types.fromRawGuildRoleResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async guildRoleMemberCounts(guildId: RawTypes.SnowflakeType) {
        const response = await request("guild_role_member_counts", guildId, "GET", `/guilds/${guildId}/roles/member-counts`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as {
                        [key: string]: number;
                    };
                    return new Map(Object.entries(json));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildRole(guildId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_role", guildId, "GET", `/guilds/${guildId}/roles/${roleId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildRoleResponse;
                    return Types.fromRawGuildRoleResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildRole(guildId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_role", guildId, "DELETE", `/guilds/${guildId}/roles/${roleId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildRole(guildId: RawTypes.SnowflakeType, roleId: RawTypes.SnowflakeType, body: Types.UpdateRoleRequestPartial, reason?: string) {
        const response = await request("update_guild_role", guildId, "PATCH", `/guilds/${guildId}/roles/${roleId}`, this.#authorization, Types.toRawUpdateRoleRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildRoleResponse;
                    return Types.fromRawGuildRoleResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildScheduledEvents(guildId: RawTypes.SnowflakeType, parameters?: {
        with_user_count?: boolean;
    }) {
        const response = await request("list_guild_scheduled_events", guildId, "GET", `/guilds/${guildId}/scheduled-events`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as (RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse)[];
                    return json.map(item => { switch (item.entity_type) {
                        case RawTypes.GuildScheduledEventEntityTypes.EXTERNAL: return Types.fromRawExternalScheduledEventResponse(item);
                        case RawTypes.GuildScheduledEventEntityTypes.STAGE_INSTANCE: return Types.fromRawStageScheduledEventResponse(item);
                        case RawTypes.GuildScheduledEventEntityTypes.VOICE: return Types.fromRawVoiceScheduledEventResponse(item);
                    } });
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildScheduledEvent(guildId: RawTypes.SnowflakeType, body: Types.ExternalScheduledEventCreateRequest | Types.StageScheduledEventCreateRequest | Types.VoiceScheduledEventCreateRequest, reason?: string) {
        const response = await request("create_guild_scheduled_event", guildId, "POST", `/guilds/${guildId}/scheduled-events`, this.#authorization, (() => {
            switch (body.entityType) {
                case Types.GuildScheduledEventEntityTypes.EXTERNAL: return Types.toRawExternalScheduledEventCreateRequest(body);
                case Types.GuildScheduledEventEntityTypes.STAGE_INSTANCE: return Types.toRawStageScheduledEventCreateRequest(body);
                case Types.GuildScheduledEventEntityTypes.VOICE: return Types.toRawVoiceScheduledEventCreateRequest(body);
            }
        })(), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse;
                    switch (json.entity_type) {
                        case RawTypes.GuildScheduledEventEntityTypes.EXTERNAL: return Types.fromRawExternalScheduledEventResponse(json);
                        case RawTypes.GuildScheduledEventEntityTypes.STAGE_INSTANCE: return Types.fromRawStageScheduledEventResponse(json);
                        case RawTypes.GuildScheduledEventEntityTypes.VOICE: return Types.fromRawVoiceScheduledEventResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildScheduledEvent(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, parameters?: {
        with_user_count?: boolean;
    }) {
        const response = await request("get_guild_scheduled_event", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse;
                    switch (json.entity_type) {
                        case RawTypes.GuildScheduledEventEntityTypes.EXTERNAL: return Types.fromRawExternalScheduledEventResponse(json);
                        case RawTypes.GuildScheduledEventEntityTypes.STAGE_INSTANCE: return Types.fromRawStageScheduledEventResponse(json);
                        case RawTypes.GuildScheduledEventEntityTypes.VOICE: return Types.fromRawVoiceScheduledEventResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildScheduledEvent(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_scheduled_event", guildId, "DELETE", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildScheduledEvent(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, body: RawTypes.ExternalScheduledEventPatchRequestPartial | RawTypes.StageScheduledEventPatchRequestPartial | RawTypes.VoiceScheduledEventPatchRequestPartial, reason?: string) {
        const response = await request("update_guild_scheduled_event", guildId, "PATCH", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, this.#authorization, body, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ExternalScheduledEventResponse | RawTypes.StageScheduledEventResponse | RawTypes.VoiceScheduledEventResponse;
                    switch (json.entity_type) {
                        case RawTypes.GuildScheduledEventEntityTypes.EXTERNAL: return Types.fromRawExternalScheduledEventResponse(json);
                        case RawTypes.GuildScheduledEventEntityTypes.STAGE_INSTANCE: return Types.fromRawStageScheduledEventResponse(json);
                        case RawTypes.GuildScheduledEventEntityTypes.VOICE: return Types.fromRawVoiceScheduledEventResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Create an exception to a recurring guild scheduled event
     */
    async createGuildScheduledEventException(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, body: Types.GuildScheduledEventExceptionCreateRequest, reason?: string) {
        const response = await request("create_guild_scheduled_event", guildId, "POST", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/exceptions`, this.#authorization, Types.toRawGuildScheduledEventExceptionCreateRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildScheduledEventExceptionResponse;
                    return Types.fromRawGuildScheduledEventExceptionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Delete an exception to a recurring guild scheduled event
     */
    async deleteGuildScheduledEventException(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, exceptionId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_scheduled_event", guildId, "DELETE", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/exceptions/${exceptionId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    /**
     * Modify an exception to a recurring guild scheduled event
     */
    async updateGuildScheduledEventException(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, exceptionId: RawTypes.SnowflakeType, body: Types.GuildScheduledEventExceptionPatchRequestPartial, reason?: string) {
        const response = await request("update_guild_scheduled_event", guildId, "PATCH", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/exceptions/${exceptionId}`, this.#authorization, Types.toRawGuildScheduledEventExceptionPatchRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildScheduledEventExceptionResponse;
                    return Types.fromRawGuildScheduledEventExceptionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildScheduledEventUsers(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        const response = await request("list_guild_scheduled_event_users", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ScheduledEventUserResponse[];
                    return json.map(item => Types.fromRawScheduledEventUserResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Get the count of users subscribed to a guild scheduled event
     */
    async countGuildScheduledEventUsers(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, parameters?: {
        guild_scheduled_event_exception_ids?: RawTypes.SnowflakeType[];
    }) {
        const response = await request("count_guild_scheduled_event_users", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users/counts`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ScheduledEventUserCountResponse;
                    return Types.fromRawScheduledEventUserCountResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Get a list of users subscribed to a guild scheduled event exception
     */
    async listGuildScheduledEventExceptionUsers(guildId: RawTypes.SnowflakeType, guildScheduledEventId: RawTypes.SnowflakeType, guildScheduledEventExceptionId: RawTypes.SnowflakeType, parameters?: {
        with_member?: boolean;
        limit?: number;
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
    }) {
        const response = await request("list_guild_scheduled_event_exception_users", guildId, "GET", `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/${guildScheduledEventExceptionId}/users`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ScheduledEventUserResponse[];
                    return json.map(item => Types.fromRawScheduledEventUserResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildSoundboardSounds(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_soundboard_sounds", guildId, "GET", `/guilds/${guildId}/soundboard-sounds`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ListGuildSoundboardSoundsResponse;
                    return Types.fromRawListGuildSoundboardSoundsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildSoundboardSound(guildId: RawTypes.SnowflakeType, body: Types.SoundboardCreateRequest, reason?: string) {
        const response = await request("create_guild_soundboard_sound", guildId, "POST", `/guilds/${guildId}/soundboard-sounds`, this.#authorization, Types.toRawSoundboardCreateRequest(body), undefined, reason);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SoundboardSoundResponse;
                    return Types.fromRawSoundboardSoundResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildSoundboardSound(guildId: RawTypes.SnowflakeType, soundId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_soundboard_sound", guildId, "GET", `/guilds/${guildId}/soundboard-sounds/${soundId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SoundboardSoundResponse;
                    return Types.fromRawSoundboardSoundResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildSoundboardSound(guildId: RawTypes.SnowflakeType, soundId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_soundboard_sound", guildId, "DELETE", `/guilds/${guildId}/soundboard-sounds/${soundId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildSoundboardSound(guildId: RawTypes.SnowflakeType, soundId: RawTypes.SnowflakeType, body: Types.SoundboardPatchRequestPartial, reason?: string) {
        const response = await request("update_guild_soundboard_sound", guildId, "PATCH", `/guilds/${guildId}/soundboard-sounds/${soundId}`, this.#authorization, Types.toRawSoundboardPatchRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SoundboardSoundResponse;
                    return Types.fromRawSoundboardSoundResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildStickers(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_stickers", guildId, "GET", `/guilds/${guildId}/stickers`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildStickerResponse[];
                    return json.map(item => Types.fromRawGuildStickerResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildSticker(guildId: RawTypes.SnowflakeType, body: {
        name: string;
        tags: string;
        description?: string | null;
        file: Blob;
    }, reason?: string) {
        const response = await request("create_guild_sticker", guildId, "POST", `/guilds/${guildId}/stickers`, this.#authorization, body, undefined, reason);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildStickerResponse;
                    return Types.fromRawGuildStickerResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildSticker(guildId: RawTypes.SnowflakeType, stickerId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_sticker", guildId, "GET", `/guilds/${guildId}/stickers/${stickerId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildStickerResponse;
                    return Types.fromRawGuildStickerResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildSticker(guildId: RawTypes.SnowflakeType, stickerId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_guild_sticker", guildId, "DELETE", `/guilds/${guildId}/stickers/${stickerId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildSticker(guildId: RawTypes.SnowflakeType, stickerId: RawTypes.SnowflakeType, body: {
        name?: string;
        tags?: string;
        description?: string | null;
    }, reason?: string) {
        const response = await request("update_guild_sticker", guildId, "PATCH", `/guilds/${guildId}/stickers/${stickerId}`, this.#authorization, {
            name: body.name,
            tags: body.tags,
            description: body.description
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildStickerResponse;
                    return Types.fromRawGuildStickerResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildTemplates(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_templates", guildId, "GET", `/guilds/${guildId}/templates`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildTemplateResponse[];
                    return json.map(item => Types.fromRawGuildTemplateResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildTemplate(guildId: RawTypes.SnowflakeType, body: {
        name: string;
        description?: string | null;
    }, reason?: string) {
        const response = await request("update_guild_template", guildId, "POST", `/guilds/${guildId}/templates`, this.#authorization, {
            name: body.name,
            description: body.description
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildTemplateResponse;
                    return Types.fromRawGuildTemplateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async syncGuildTemplate(guildId: RawTypes.SnowflakeType, code: string, reason?: string) {
        const response = await request("update_guild_template", guildId, "PUT", `/guilds/${guildId}/templates/${code}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildTemplateResponse;
                    return Types.fromRawGuildTemplateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildTemplate(guildId: RawTypes.SnowflakeType, code: string, reason?: string) {
        const response = await request("delete_guild_template", guildId, "DELETE", `/guilds/${guildId}/templates/${code}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildTemplateResponse;
                    return Types.fromRawGuildTemplateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateGuildTemplate(guildId: RawTypes.SnowflakeType, code: string, body: {
        name?: string;
        description?: string | null;
    }, reason?: string) {
        const response = await request("update_guild_template", guildId, "PATCH", `/guilds/${guildId}/templates/${code}`, this.#authorization, {
            name: body.name,
            description: body.description
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildTemplateResponse;
                    return Types.fromRawGuildTemplateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getActiveGuildThreads(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_active_guild_threads", guildId, "GET", `/guilds/${guildId}/threads/active`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ThreadsResponse;
                    return Types.fromRawThreadsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildVanityUrl(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_vanity_url", guildId, "GET", `/guilds/${guildId}/vanity-url`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.VanityURLResponse;
                    return Types.fromRawVanityURLResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getSelfVoiceState(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_self_voice_state", guildId, "GET", `/guilds/${guildId}/voice-states/@me`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.VoiceStateResponse;
                    return Types.fromRawVoiceStateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateSelfVoiceState(guildId: RawTypes.SnowflakeType, body: Types.UpdateSelfVoiceStateRequestPartial, reason?: string) {
        const response = await request("update_self_voice_state", guildId, "PATCH", `/guilds/${guildId}/voice-states/@me`, this.#authorization, Types.toRawUpdateSelfVoiceStateRequestPartial(body), undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getVoiceState(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("get_voice_state", guildId, "GET", `/guilds/${guildId}/voice-states/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.VoiceStateResponse;
                    return Types.fromRawVoiceStateResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateVoiceState(guildId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: Types.UpdateVoiceStateRequestPartial, reason?: string) {
        const response = await request("update_voice_state", guildId, "PATCH", `/guilds/${guildId}/voice-states/${userId}`, this.#authorization, Types.toRawUpdateVoiceStateRequestPartial(body), undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getGuildWebhooks(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_webhooks", guildId, "GET", `/guilds/${guildId}/webhooks`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as (RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse)[];
                    return json.map(item => { switch (item.type) {
                        case RawTypes.WebhookTypes.APPLICATION_INCOMING: return Types.fromRawApplicationIncomingWebhookResponse(item);
                        case RawTypes.WebhookTypes.CHANNEL_FOLLOWER: return Types.fromRawChannelFollowerWebhookResponse(item);
                        case RawTypes.WebhookTypes.GUILD_INCOMING: return Types.fromRawGuildIncomingWebhookResponse(item);
                    } });
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildWelcomeScreen(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_welcome_screen", guildId, "GET", `/guilds/${guildId}/welcome-screen`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildWelcomeScreenResponse;
                    return Types.fromRawGuildWelcomeScreenResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateGuildWelcomeScreen(guildId: RawTypes.SnowflakeType, body: Types.WelcomeScreenPatchRequestPartial, reason?: string) {
        const response = await request("update_guild_welcome_screen", guildId, "PATCH", `/guilds/${guildId}/welcome-screen`, this.#authorization, Types.toRawWelcomeScreenPatchRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildWelcomeScreenResponse;
                    return Types.fromRawGuildWelcomeScreenResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildWidgetSettings(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_widget_settings", guildId, "GET", `/guilds/${guildId}/widget`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.WidgetSettingsResponse;
                    return Types.fromRawWidgetSettingsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateGuildWidgetSettings(guildId: RawTypes.SnowflakeType, body: {
        channelId?: null | Types.SnowflakeType;
        enabled?: boolean | null;
    }, reason?: string) {
        const response = await request("update_guild_widget_settings", guildId, "PATCH", `/guilds/${guildId}/widget`, this.#authorization, {
            channel_id: body.channelId,
            enabled: body.enabled
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.WidgetSettingsResponse;
                    return Types.fromRawWidgetSettingsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async inviteRevoke(code: string) {
        const response = await request("invite_revoke", null, "DELETE", `/invites/${code}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.FriendInviteResponse | RawTypes.GroupDMInviteResponse | RawTypes.GuildInviteResponse;
                    switch (json.type) {
                        case RawTypes.InviteTypes.FRIEND: return Types.fromRawFriendInviteResponse(json);
                        case RawTypes.InviteTypes.GROUP_DM: return Types.fromRawGroupDMInviteResponse(json);
                        case RawTypes.InviteTypes.GUILD: return Types.fromRawGuildInviteResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Get the target users for an invite.
     */
    async getInviteTargetUsers(code: string) {
        const response = await request("get_invite_target_users", null, "GET", `/invites/${code}/target-users`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "text/csv": return await response.text();
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Update the target users for an existing invite.
     */
    async updateInviteTargetUsers(code: string, body: {
        target_users_file: Blob;
    }) {
        const response = await request("update_invite_target_users", null, "PUT", `/invites/${code}/target-users`, this.#authorization, body, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    /**
     * Get the target users job status for an invite.
     */
    async getInviteTargetUsersJobStatus(code: string) {
        const response = await request("get_invite_target_users_job_status", null, "GET", `/invites/${code}/target-users/job-status`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.TargetUsersJobStatusResponse;
                    return Types.fromRawTargetUsersJobStatusResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async createOrJoinLobby(body: {
        idleTimeoutSeconds?: number | null;
        lobbyMetadata?: Map<string, string> | null;
        memberMetadata?: Map<string, string> | null;
        secret: string;
        flags?: null | 1;
    }) {
        const response = await request("create_or_join_lobby", null, "PUT", "/lobbies", this.#authorization, {
            idle_timeout_seconds: body.idleTimeoutSeconds,
            lobby_metadata: body.lobbyMetadata == null ? body.lobbyMetadata : Object.fromEntries(body.lobbyMetadata),
            member_metadata: body.memberMetadata == null ? body.memberMetadata : Object.fromEntries(body.memberMetadata),
            secret: body.secret,
            flags: body.flags
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async createLobby(body: {
        idleTimeoutSeconds?: number | null;
        members?: Types.LobbyMemberRequest[] | null;
        metadata?: Map<string, string> | null;
        flags?: null | 1;
        overrideEventWebhooksUrl?: URL | null;
    }) {
        const response = await request("create_lobby", null, "POST", "/lobbies", this.#authorization, {
            idle_timeout_seconds: body.idleTimeoutSeconds,
            members: body.members == null ? body.members : body.members.map(item => Types.toRawLobbyMemberRequest(item)),
            metadata: body.metadata == null ? body.metadata : Object.fromEntries(body.metadata),
            flags: body.flags,
            override_event_webhooks_url: body.overrideEventWebhooksUrl == null ? body.overrideEventWebhooksUrl : body.overrideEventWebhooksUrl.toString() as `${string}:${string}`
        }, undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getLobby(lobbyId: RawTypes.SnowflakeType) {
        const response = await request("get_lobby", null, "GET", `/lobbies/${lobbyId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Deletes the specified lobby if it exists. It is safe to call even if the lobby is already deleted.
     */
    async deleteLobby(lobbyId: RawTypes.SnowflakeType) {
        const response = await request("delete_lobby", null, "DELETE", `/lobbies/${lobbyId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async editLobby(lobbyId: RawTypes.SnowflakeType, body: {
        idleTimeoutSeconds?: number | null;
        metadata?: Map<string, string> | null;
        members?: Types.LobbyMemberRequest[] | null;
        flags?: null | 1;
        overrideEventWebhooksUrl?: URL | null;
    }) {
        const response = await request("edit_lobby", null, "PATCH", `/lobbies/${lobbyId}`, this.#authorization, {
            idle_timeout_seconds: body.idleTimeoutSeconds,
            metadata: body.metadata == null ? body.metadata : Object.fromEntries(body.metadata),
            members: body.members == null ? body.members : body.members.map(item => Types.toRawLobbyMemberRequest(item)),
            flags: body.flags,
            override_event_webhooks_url: body.overrideEventWebhooksUrl == null ? body.overrideEventWebhooksUrl : body.overrideEventWebhooksUrl.toString() as `${string}:${string}`
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async editLobbyChannelLink(lobbyId: RawTypes.SnowflakeType, body: {
        channelId?: null | Types.SnowflakeType;
    }) {
        const response = await request("edit_lobby_channel_link", null, "PATCH", `/lobbies/${lobbyId}/channel-linking`, this.#authorization, {
            channel_id: body.channelId
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async leaveLobby(lobbyId: RawTypes.SnowflakeType) {
        const response = await request("leave_lobby", null, "DELETE", `/lobbies/${lobbyId}/members/@me`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async createLinkedLobbyGuildInviteForSelf(lobbyId: RawTypes.SnowflakeType) {
        const response = await request("create_linked_lobby_guild_invite_for_self", null, "POST", `/lobbies/${lobbyId}/members/@me/invites`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyGuildInviteResponse;
                    return Types.fromRawLobbyGuildInviteResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkUpdateLobbyMembers(lobbyId: RawTypes.SnowflakeType, body: Types.BulkLobbyMemberRequest[]) {
        const response = await request("bulk_update_lobby_members", null, "POST", `/lobbies/${lobbyId}/members/bulk`, this.#authorization, body.map(item => Types.toRawBulkLobbyMemberRequest(item)), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyMemberResponse[];
                    return json.map(item => Types.fromRawLobbyMemberResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async addLobbyMember(lobbyId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType, body: {
        metadata?: Map<string, string> | null;
        flags?: null | 1;
        additionalName?: string | null;
    }) {
        const response = await request("add_lobby_member", null, "PUT", `/lobbies/${lobbyId}/members/${userId}`, this.#authorization, {
            metadata: body.metadata == null ? body.metadata : Object.fromEntries(body.metadata),
            flags: body.flags,
            additional_name: body.additionalName
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyMemberResponse;
                    return Types.fromRawLobbyMemberResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteLobbyMember(lobbyId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("delete_lobby_member", null, "DELETE", `/lobbies/${lobbyId}/members/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async createLinkedLobbyGuildInviteForUser(lobbyId: RawTypes.SnowflakeType, userId: RawTypes.SnowflakeType) {
        const response = await request("create_linked_lobby_guild_invite_for_user", null, "POST", `/lobbies/${lobbyId}/members/${userId}/invites`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyGuildInviteResponse;
                    return Types.fromRawLobbyGuildInviteResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getLobbyMessages(lobbyId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
    }) {
        const response = await request("get_lobby_messages", null, "GET", `/lobbies/${lobbyId}/messages`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyMessageResponse[];
                    return json.map(item => Types.fromRawLobbyMessageResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createLobbyMessage(lobbyId: RawTypes.SnowflakeType, data: Types.SDKMessageRequest) {
        const body = Types.toRawSDKMessageRequest(data);
        const response = await request("create_lobby_message", null, "POST", `/lobbies/${lobbyId}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyMessageResponse;
                    return Types.fromRawLobbyMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Update the external moderation metadata for a lobby message.
     */
    async updateLobbyMessageExternalModerationMetadata(lobbyId: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: {
        [key: string]: string;
    }) {
        const response = await request("update_lobby_message_external_moderation_metadata", null, "PUT", `/lobbies/${lobbyId}/messages/${messageId}/moderation-metadata`, this.#authorization, body, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getMyOauth2Authorization() {
        const response = await request("get_my_oauth2_authorization", null, "GET", "/oauth2/@me", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.OAuth2GetAuthorizationResponse;
                    return Types.fromRawOAuth2GetAuthorizationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getMyOauth2Application() {
        const response = await request("get_my_oauth2_application", null, "GET", "/oauth2/applications/@me", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateApplicationResponse;
                    return Types.fromRawPrivateApplicationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getOpenidConnectUserinfo() {
        const response = await request("get_openid_connect_userinfo", null, "GET", "/oauth2/userinfo", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.OAuth2GetOpenIDConnectUserInfoResponse;
                    return Types.fromRawOAuth2GetOpenIDConnectUserInfoResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Update the external moderation metadata for a user message (DM).
     */
    async updateUserMessageExternalModerationMetadata(userId1: RawTypes.SnowflakeType, userId2: RawTypes.SnowflakeType, messageId: RawTypes.SnowflakeType, body: {
        [key: string]: string;
    }) {
        const response = await request("update_user_message_external_moderation_metadata", null, "PUT", `/partner-sdk/dms/${userId1}/${userId2}/messages/${messageId}/moderation-metadata`, this.#authorization, body, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async botPartnerSdkUnmergeProvisionalAccount(body: {
        externalUserId: string;
    }) {
        const response = await request("bot_partner_sdk_unmerge_provisional_account", null, "POST", "/partner-sdk/provisional-accounts/unmerge/bot", this.#authorization, {
            external_user_id: body.externalUserId
        }, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async botPartnerSdkToken(body: {
        provisionalUserId?: null | Types.SnowflakeType;
        externalUserId: string;
        preferredGlobalName?: string | null;
    }) {
        const response = await request("bot_partner_sdk_token", null, "POST", "/partner-sdk/token/bot", this.#authorization, {
            provisional_user_id: body.provisionalUserId,
            external_user_id: body.externalUserId,
            preferred_global_name: body.preferredGlobalName
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ProvisionalTokenResponse;
                    return Types.fromRawProvisionalTokenResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Returns all subscriptions containing the SKU, filtered by user.
     */
    async getSkuSubscriptions(skuId: RawTypes.SnowflakeType, parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        user_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("get_sku_subscriptions", null, "GET", `/skus/${skuId}/subscriptions`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SubscriptionResponse[];
                    return json.map(item => Types.fromRawSubscriptionResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Get a subscription by its ID.
     */
    async getSkuSubscription(skuId: RawTypes.SnowflakeType, subscriptionId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("get_sku_subscription", null, "GET", `/skus/${skuId}/subscriptions/${subscriptionId}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SubscriptionResponse;
                    return Types.fromRawSubscriptionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getSoundboardDefaultSounds() {
        const response = await request("get_soundboard_default_sounds", null, "GET", "/soundboard-default-sounds", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SoundboardSoundResponse[];
                    return json.map(item => Types.fromRawSoundboardSoundResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createStageInstance(body: {
        topic: string;
        channelId: Types.SnowflakeType;
        privacyLevel?: null | Types.StageInstancesPrivacyLevels;
        guildScheduledEventId?: null | Types.SnowflakeType;
        sendStartNotification?: boolean | null;
    }) {
        const response = await request("create_stage_instance", null, "POST", "/stage-instances", this.#authorization, {
            topic: body.topic,
            channel_id: body.channelId,
            privacy_level: body.privacyLevel,
            guild_scheduled_event_id: body.guildScheduledEventId,
            send_start_notification: body.sendStartNotification
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.StageInstanceResponse;
                    return Types.fromRawStageInstanceResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getStageInstance(channelId: RawTypes.SnowflakeType) {
        const response = await request("get_stage_instance", channelId, "GET", `/stage-instances/${channelId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.StageInstanceResponse;
                    return Types.fromRawStageInstanceResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteStageInstance(channelId: RawTypes.SnowflakeType) {
        const response = await request("delete_stage_instance", channelId, "DELETE", `/stage-instances/${channelId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateStageInstance(channelId: RawTypes.SnowflakeType, body: {
        topic?: string;
        privacyLevel?: Types.StageInstancesPrivacyLevels;
    }) {
        const response = await request("update_stage_instance", channelId, "PATCH", `/stage-instances/${channelId}`, this.#authorization, {
            topic: body.topic,
            privacy_level: body.privacyLevel
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.StageInstanceResponse;
                    return Types.fromRawStageInstanceResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getStickerPack(packId: RawTypes.SnowflakeType) {
        const response = await request("get_sticker_pack", null, "GET", `/sticker-packs/${packId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.StickerPackResponse;
                    return Types.fromRawStickerPackResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getSticker(stickerId: RawTypes.SnowflakeType) {
        const response = await request("get_sticker", null, "GET", `/stickers/${stickerId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.GuildStickerResponse | RawTypes.StandardStickerResponse;
                    switch (json.type) {
                        case RawTypes.StickerTypes.GUILD: return Types.fromRawGuildStickerResponse(json);
                        case RawTypes.StickerTypes.STANDARD: return Types.fromRawStandardStickerResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async getMyUser() {
        const response = await request("get_my_user", null, "GET", "/users/@me", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.UserPIIResponse;
                    return Types.fromRawUserPIIResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateMyUser(body: Types.BotAccountPatchRequest) {
        const response = await request("update_my_user", null, "PATCH", "/users/@me", this.#authorization, Types.toRawBotAccountPatchRequest(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.UserPIIResponse;
                    return Types.fromRawUserPIIResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async createDm(body: Types.CreatePrivateChannelRequest) {
        const response = await request("create_dm", null, "POST", "/users/@me/channels", this.#authorization, Types.toRawCreatePrivateChannelRequest(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse;
                    switch (json.type) {
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(json);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async listMyConnections() {
        const response = await request("list_my_connections", null, "GET", "/users/@me/connections", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ConnectedAccountResponse[];
                    return json.map(item => Types.fromRawConnectedAccountResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async listMyGuilds(parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    }) {
        const response = await request("list_my_guilds", null, "GET", "/users/@me/guilds", this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MyGuildResponse[];
                    return json.map(item => Types.fromRawMyGuildResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async leaveGuild(guildId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("leave_guild", guildId, "DELETE", `/users/@me/guilds/${guildId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async getUser(userId: RawTypes.SnowflakeType) {
        const response = await request("get_user", null, "GET", `/users/${userId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.UserResponse;
                    return Types.fromRawUserResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listVoiceRegions() {
        const response = await request("list_voice_regions", null, "GET", "/voice/regions", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.VoiceRegionResponse[];
                    return json.map(item => Types.fromRawVoiceRegionResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getWebhook(webhookId: RawTypes.SnowflakeType) {
        const response = await request("get_webhook", webhookId, "GET", `/webhooks/${webhookId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse;
                    switch (json.type) {
                        case RawTypes.WebhookTypes.APPLICATION_INCOMING: return Types.fromRawApplicationIncomingWebhookResponse(json);
                        case RawTypes.WebhookTypes.CHANNEL_FOLLOWER: return Types.fromRawChannelFollowerWebhookResponse(json);
                        case RawTypes.WebhookTypes.GUILD_INCOMING: return Types.fromRawGuildIncomingWebhookResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteWebhook(webhookId: RawTypes.SnowflakeType) {
        const response = await request("delete_webhook", webhookId, "DELETE", `/webhooks/${webhookId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateWebhook(webhookId: RawTypes.SnowflakeType, body: {
        name?: string;
        avatar?: string | null;
        channelId?: null | Types.SnowflakeType;
    }) {
        const response = await request("update_webhook", webhookId, "PATCH", `/webhooks/${webhookId}`, this.#authorization, {
            name: body.name,
            avatar: body.avatar,
            channel_id: body.channelId
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationIncomingWebhookResponse | RawTypes.ChannelFollowerWebhookResponse | RawTypes.GuildIncomingWebhookResponse;
                    switch (json.type) {
                        case RawTypes.WebhookTypes.APPLICATION_INCOMING: return Types.fromRawApplicationIncomingWebhookResponse(json);
                        case RawTypes.WebhookTypes.CHANNEL_FOLLOWER: return Types.fromRawChannelFollowerWebhookResponse(json);
                        case RawTypes.WebhookTypes.GUILD_INCOMING: return Types.fromRawGuildIncomingWebhookResponse(json);
                    }
                default: throw new Error();
            }
        return handleError(response);
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
    async uploadApplicationAttachment(applicationId: RawTypes.SnowflakeType, body: {
        file: Blob;
    }) {
        const response = await request("upload_application_attachment", null, "POST", `/applications/${applicationId}/attachment`, this.#authorization, body, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ActivitiesAttachmentResponse;
                    return Types.fromRawActivitiesAttachmentResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listApplicationCommands(applicationId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        const response = await request("list_application_commands", null, "GET", `/applications/${applicationId}/commands`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkSetApplicationCommands(applicationId: RawTypes.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[]) {
        const response = await request("bulk_set_application_commands", null, "PUT", `/applications/${applicationId}/commands`, this.#authorization, body.map(item => Types.toRawApplicationCommandUpdateRequest(item)), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createApplicationCommand(applicationId: RawTypes.SnowflakeType, body: Types.ApplicationCommandCreateRequest) {
        const response = await request("create_application_command", null, "POST", `/applications/${applicationId}/commands`, this.#authorization, Types.toRawApplicationCommandCreateRequest(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("get_application_command", null, "GET", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("delete_application_command", null, "DELETE", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateApplicationCommand(applicationId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial) {
        const response = await request("update_application_command", null, "PATCH", `/applications/${applicationId}/commands/${commandId}`, this.#authorization, Types.toRawApplicationCommandPatchRequestPartial(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getEntitlements(applicationId: RawTypes.SnowflakeType, parameters?: {
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
        const response = await request("get_entitlements", null, "GET", `/applications/${applicationId}/entitlements`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EntitlementResponse[];
                    return json.map(item => Types.fromRawEntitlementResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        const response = await request("get_entitlement", null, "GET", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EntitlementResponse;
                    return Types.fromRawEntitlementResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        const response = await request("delete_entitlement", null, "DELETE", `/applications/${applicationId}/entitlements/${entitlementId}`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async consumeEntitlement(applicationId: RawTypes.SnowflakeType, entitlementId: RawTypes.SnowflakeType) {
        const response = await request("consume_entitlement", null, "POST", `/applications/${applicationId}/entitlements/${entitlementId}/consume`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, parameters?: {
        with_localizations?: boolean;
    }) {
        const response = await request("list_guild_application_commands", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async bulkSetGuildApplicationCommands(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: Types.ApplicationCommandUpdateRequest[], reason?: string) {
        const response = await request("bulk_set_application_commands", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, body.map(item => Types.toRawApplicationCommandUpdateRequest(item)), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse[];
                    return json.map(item => Types.fromRawApplicationCommandResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, body: Types.ApplicationCommandCreateRequest, reason?: string) {
        const response = await request("create_application_command", guildId, "POST", `/applications/${applicationId}/guilds/${guildId}/commands`, this.#authorization, Types.toRawApplicationCommandCreateRequest(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/permissions`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CommandPermissionsResponse[];
                    return json.map(item => Types.fromRawCommandPermissionsResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_application_command", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, reason?: string) {
        const response = await request("delete_application_command", guildId, "DELETE", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, undefined, undefined, reason);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async updateGuildApplicationCommand(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: Types.ApplicationCommandPatchRequestPartial, reason?: string) {
        const response = await request("update_application_command", guildId, "PATCH", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`, this.#authorization, Types.toRawApplicationCommandPatchRequestPartial(body), undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationCommandResponse;
                    return Types.fromRawApplicationCommandResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType) {
        const response = await request("get_guild_application_command_permissions", guildId, "GET", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CommandPermissionsResponse;
                    return Types.fromRawCommandPermissionsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async setGuildApplicationCommandPermissions(applicationId: RawTypes.SnowflakeType, guildId: RawTypes.SnowflakeType, commandId: RawTypes.SnowflakeType, body: {
        permissions?: Types.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        const response = await request("set_guild_application_command_permissions", guildId, "PUT", `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, this.#authorization, {
            permissions: body.permissions == null ? body.permissions : body.permissions.map(item => Types.toRawApplicationCommandPermission(item))
        }, undefined, reason);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.CommandPermissionsResponse;
                    return Types.fromRawCommandPermissionsResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async listGuildChannels(guildId: RawTypes.SnowflakeType) {
        const response = await request("list_guild_channels", guildId, "GET", `/guilds/${guildId}/channels`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as (RawTypes.GuildChannelResponse | RawTypes.PrivateChannelResponse | RawTypes.PrivateGroupChannelResponse | RawTypes.ThreadResponse)[];
                    return json.map(item => { switch (item.type) {
                        case RawTypes.ChannelTypes.GUILD_TEXT:
                        case RawTypes.ChannelTypes.GUILD_VOICE:
                        case RawTypes.ChannelTypes.GUILD_CATEGORY:
                        case RawTypes.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case RawTypes.ChannelTypes.GUILD_STAGE_VOICE:
                        case RawTypes.ChannelTypes.GUILD_DIRECTORY:
                        case RawTypes.ChannelTypes.GUILD_FORUM: return Types.fromRawGuildChannelResponse(item);
                        case RawTypes.ChannelTypes.DM: return Types.fromRawPrivateChannelResponse(item);
                        case RawTypes.ChannelTypes.GROUP_DM: return Types.fromRawPrivateGroupChannelResponse(item);
                        case RawTypes.ChannelTypes.ANNOUNCEMENT_THREAD:
                        case RawTypes.ChannelTypes.PUBLIC_THREAD:
                        case RawTypes.ChannelTypes.PRIVATE_THREAD: return Types.fromRawThreadResponse(item);
                    } });
                default: throw new Error();
            }
        return handleError(response);
    }
    async createOrJoinLobby(body: {
        idleTimeoutSeconds?: number | null;
        lobbyMetadata?: Map<string, string> | null;
        memberMetadata?: Map<string, string> | null;
        secret: string;
        flags?: null | 1;
    }) {
        const response = await request("create_or_join_lobby", null, "PUT", "/lobbies", this.#authorization, {
            idle_timeout_seconds: body.idleTimeoutSeconds,
            lobby_metadata: body.lobbyMetadata == null ? body.lobbyMetadata : Object.fromEntries(body.lobbyMetadata),
            member_metadata: body.memberMetadata == null ? body.memberMetadata : Object.fromEntries(body.memberMetadata),
            secret: body.secret,
            flags: body.flags
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async editLobbyChannelLink(lobbyId: RawTypes.SnowflakeType, body: {
        channelId?: null | Types.SnowflakeType;
    }) {
        const response = await request("edit_lobby_channel_link", null, "PATCH", `/lobbies/${lobbyId}/channel-linking`, this.#authorization, {
            channel_id: body.channelId
        }, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyResponse;
                    return Types.fromRawLobbyResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async leaveLobby(lobbyId: RawTypes.SnowflakeType) {
        const response = await request("leave_lobby", null, "DELETE", `/lobbies/${lobbyId}/members/@me`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async createLinkedLobbyGuildInviteForSelf(lobbyId: RawTypes.SnowflakeType) {
        const response = await request("create_linked_lobby_guild_invite_for_self", null, "POST", `/lobbies/${lobbyId}/members/@me/invites`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyGuildInviteResponse;
                    return Types.fromRawLobbyGuildInviteResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getLobbyMessages(lobbyId: RawTypes.SnowflakeType, parameters?: {
        limit?: number;
    }) {
        const response = await request("get_lobby_messages", null, "GET", `/lobbies/${lobbyId}/messages`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyMessageResponse[];
                    return json.map(item => Types.fromRawLobbyMessageResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async createLobbyMessage(lobbyId: RawTypes.SnowflakeType, data: Types.SDKMessageRequest) {
        const body = Types.toRawSDKMessageRequest(data);
        const response = await request("create_lobby_message", null, "POST", `/lobbies/${lobbyId}/messages`, this.#authorization, body.attachments ? getFormData(body, body.attachments) : body, undefined);
        if (response.status === 201)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.LobbyMessageResponse;
                    return Types.fromRawLobbyMessageResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getMyOauth2Authorization() {
        const response = await request("get_my_oauth2_authorization", null, "GET", "/oauth2/@me", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.OAuth2GetAuthorizationResponse;
                    return Types.fromRawOAuth2GetAuthorizationResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getOpenidConnectUserinfo() {
        const response = await request("get_openid_connect_userinfo", null, "GET", "/oauth2/userinfo", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.OAuth2GetOpenIDConnectUserInfoResponse;
                    return Types.fromRawOAuth2GetOpenIDConnectUserInfoResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Returns all subscriptions containing the SKU, filtered by user.
     */
    async getSkuSubscriptions(skuId: RawTypes.SnowflakeType, parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        user_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("get_sku_subscriptions", null, "GET", `/skus/${skuId}/subscriptions`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SubscriptionResponse[];
                    return json.map(item => Types.fromRawSubscriptionResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    /**
     * Get a subscription by its ID.
     */
    async getSkuSubscription(skuId: RawTypes.SnowflakeType, subscriptionId: RawTypes.SnowflakeType, parameters?: {
        user_id?: RawTypes.SnowflakeType;
    }) {
        const response = await request("get_sku_subscription", null, "GET", `/skus/${skuId}/subscriptions/${subscriptionId}`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.SubscriptionResponse;
                    return Types.fromRawSubscriptionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getMyUser() {
        const response = await request("get_my_user", null, "GET", "/users/@me", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.UserPIIResponse;
                    return Types.fromRawUserPIIResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async getCurrentUserApplicationEntitlements(applicationId: RawTypes.SnowflakeType, parameters?: {
        sku_ids?: string | (null | RawTypes.SnowflakeType)[];
        exclude_consumed?: boolean;
    }) {
        const response = await request("get_current_user_application_entitlements", null, "GET", `/users/@me/applications/${applicationId}/entitlements`, this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.EntitlementResponse[];
                    return json.map(item => Types.fromRawEntitlementResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getApplicationUserRoleConnection(applicationId: RawTypes.SnowflakeType) {
        const response = await request("get_application_user_role_connection", null, "GET", `/users/@me/applications/${applicationId}/role-connection`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationUserRoleConnectionResponse;
                    return Types.fromRawApplicationUserRoleConnectionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async updateApplicationUserRoleConnection(applicationId: RawTypes.SnowflakeType, body: Types.UpdateApplicationUserRoleConnectionRequest) {
        const response = await request("update_application_user_role_connection", null, "PUT", `/users/@me/applications/${applicationId}/role-connection`, this.#authorization, Types.toRawUpdateApplicationUserRoleConnectionRequest(body), undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ApplicationUserRoleConnectionResponse;
                    return Types.fromRawApplicationUserRoleConnectionResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
    async deleteApplicationUserRoleConnection(applicationId: RawTypes.SnowflakeType) {
        const response = await request("delete_application_user_role_connection", null, "DELETE", `/users/@me/applications/${applicationId}/role-connection`, this.#authorization, undefined, undefined);
        if (response.status === 204)
            return;
        return handleError(response);
    }
    async listMyConnections() {
        const response = await request("list_my_connections", null, "GET", "/users/@me/connections", this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.ConnectedAccountResponse[];
                    return json.map(item => Types.fromRawConnectedAccountResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async listMyGuilds(parameters?: {
        before?: RawTypes.SnowflakeType;
        after?: RawTypes.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    }) {
        const response = await request("list_my_guilds", null, "GET", "/users/@me/guilds", this.#authorization, undefined, parameters);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.MyGuildResponse[];
                    return json.map(item => Types.fromRawMyGuildResponse(item));
                default: throw new Error();
            }
        return handleError(response);
    }
    async getMyGuildMember(guildId: RawTypes.SnowflakeType) {
        const response = await request("get_my_guild_member", guildId, "GET", `/users/@me/guilds/${guildId}/member`, this.#authorization, undefined, undefined);
        if (response.status === 200)
            switch (response.headers.get("Content-Type")) {
                case "application/json":
                    const json = await response.json() as RawTypes.PrivateGuildMemberResponse;
                    return Types.fromRawPrivateGuildMemberResponse(json);
                default: throw new Error();
            }
        return handleError(response);
    }
}
