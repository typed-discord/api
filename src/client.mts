import * as Schemas from "./types.mjs";
import { BaseClient, getFormData, Bot, OAuth2 } from "./base_client.mjs";
export class Client<Authorization extends Bot | OAuth2 | null> extends BaseClient<Authorization> {
    getMyApplication(this: Client<Bot>) {
        return this.get("/applications/@me") as Promise<Schemas.PrivateApplicationResponse>;
    }
    updateMyApplication(this: Client<Bot>, body: Schemas.ApplicationFormPartial, reason?: string) {
        return this.patch("/applications/@me", body, reason) as Promise<Schemas.PrivateApplicationResponse>;
    }
    getApplication(this: Client<Bot>, application_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}`) as Promise<Schemas.PrivateApplicationResponse>;
    }
    updateApplication(this: Client<Bot>, application_id: Schemas.SnowflakeType, body: Schemas.ApplicationFormPartial, reason?: string) {
        return this.patch(`/applications/${application_id}`, body, reason) as Promise<Schemas.PrivateApplicationResponse>;
    }
    applicationsGetActivityInstance(this: Client<Bot>, application_id: Schemas.SnowflakeType, instance_id: string) {
        return this.get(`/applications/${application_id}/activity-instances/${instance_id}`) as Promise<Schemas.EmbeddedActivityInstance>;
    }
    uploadApplicationAttachment(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, body: {
        "file": string;
    }, reason?: string) {
        return this.post(`/applications/${application_id}/attachment`, body, reason) as Promise<Schemas.ActivitiesAttachmentResponse>;
    }
    listApplicationCommands(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, parameters: {
        with_localizations?: boolean;
    } = {}) {
        return this.get(`/applications/${application_id}/commands`, parameters) as Promise<(Schemas.ApplicationCommandResponse[] | null)>;
    }
    bulkSetApplicationCommands(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandUpdateRequest[] | null, reason?: string) {
        return this.put(`/applications/${application_id}/commands`, body, reason) as Promise<(Schemas.ApplicationCommandResponse[] | null)>;
    }
    createApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandCreateRequest, reason?: string) {
        return this.post(`/applications/${application_id}/commands`, body, reason) as Promise<Schemas.ApplicationCommandResponse | Schemas.ApplicationCommandResponse>;
    }
    getApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/commands/${command_id}`) as Promise<Schemas.ApplicationCommandResponse>;
    }
    deleteApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/applications/${application_id}/commands/${command_id}`, reason) as Promise<void>;
    }
    updateApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandPatchRequestPartial, reason?: string) {
        return this.patch(`/applications/${application_id}/commands/${command_id}`, body, reason) as Promise<Schemas.ApplicationCommandResponse>;
    }
    listApplicationEmojis(this: Client<Bot>, application_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/emojis`) as Promise<Schemas.ListApplicationEmojisResponse>;
    }
    createApplicationEmoji(this: Client<Bot>, application_id: Schemas.SnowflakeType, body: {
        "name": string;
        "image": string;
    }, reason?: string) {
        return this.post(`/applications/${application_id}/emojis`, body, reason) as Promise<Schemas.EmojiResponse>;
    }
    getApplicationEmoji(this: Client<Bot>, application_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/emojis/${emoji_id}`) as Promise<Schemas.EmojiResponse>;
    }
    deleteApplicationEmoji(this: Client<Bot>, application_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/applications/${application_id}/emojis/${emoji_id}`, reason) as Promise<void>;
    }
    updateApplicationEmoji(this: Client<Bot>, application_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, body: {
        "name"?: string;
    }, reason?: string) {
        return this.patch(`/applications/${application_id}/emojis/${emoji_id}`, body, reason) as Promise<Schemas.EmojiResponse>;
    }
    getEntitlements(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, parameters: {
        user_id?: Schemas.SnowflakeType;
        sku_ids?: string | (null | Schemas.SnowflakeType)[];
        guild_id?: Schemas.SnowflakeType;
        before?: Schemas.SnowflakeType;
        after?: Schemas.SnowflakeType;
        limit?: number;
        exclude_ended?: boolean;
        exclude_deleted?: boolean;
        only_active?: boolean;
    } = {}) {
        return this.get(`/applications/${application_id}/entitlements`, parameters) as Promise<Schemas.EntitlementResponse[]>;
    }
    createEntitlement(this: Client<Bot>, application_id: Schemas.SnowflakeType, body: Schemas.CreateEntitlementRequestData, reason?: string) {
        return this.post(`/applications/${application_id}/entitlements`, body, reason) as Promise<Schemas.EntitlementResponse>;
    }
    getEntitlement(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, entitlement_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/entitlements/${entitlement_id}`) as Promise<Schemas.EntitlementResponse>;
    }
    deleteEntitlement(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, entitlement_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/applications/${application_id}/entitlements/${entitlement_id}`, reason) as Promise<void>;
    }
    consumeEntitlement(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, entitlement_id: Schemas.SnowflakeType, reason?: string) {
        return this.post(`/applications/${application_id}/entitlements/${entitlement_id}/consume`, undefined, reason) as Promise<void>;
    }
    listGuildApplicationCommands(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, parameters: {
        with_localizations?: boolean;
    } = {}) {
        return this.get(`/applications/${application_id}/guilds/${guild_id}/commands`, parameters) as Promise<(Schemas.ApplicationCommandResponse[] | null)>;
    }
    bulkSetGuildApplicationCommands(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandUpdateRequest[] | null, reason?: string) {
        return this.put(`/applications/${application_id}/guilds/${guild_id}/commands`, body, reason) as Promise<(Schemas.ApplicationCommandResponse[] | null)>;
    }
    createGuildApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandCreateRequest, reason?: string) {
        return this.post(`/applications/${application_id}/guilds/${guild_id}/commands`, body, reason) as Promise<Schemas.ApplicationCommandResponse | Schemas.ApplicationCommandResponse>;
    }
    listGuildApplicationCommandPermissions(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/guilds/${guild_id}/commands/permissions`) as Promise<Schemas.CommandPermissionsResponse[]>;
    }
    getGuildApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`) as Promise<Schemas.ApplicationCommandResponse>;
    }
    deleteGuildApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, reason) as Promise<void>;
    }
    updateGuildApplicationCommand(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandPatchRequestPartial, reason?: string) {
        return this.patch(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, body, reason) as Promise<Schemas.ApplicationCommandResponse>;
    }
    getGuildApplicationCommandPermissions(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`) as Promise<Schemas.CommandPermissionsResponse>;
    }
    setGuildApplicationCommandPermissions(this: Client<Bot> | Client<OAuth2>, application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, body: {
        "permissions"?: Schemas.ApplicationCommandPermission[] | null;
    }, reason?: string) {
        return this.put(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`, body, reason) as Promise<Schemas.CommandPermissionsResponse>;
    }
    getApplicationRoleConnectionsMetadata(this: Client<Bot>, application_id: Schemas.SnowflakeType) {
        return this.get(`/applications/${application_id}/role-connections/metadata`) as Promise<(Schemas.ApplicationRoleConnectionsMetadataItemResponse[] | null)>;
    }
    updateApplicationRoleConnectionsMetadata(this: Client<Bot>, application_id: Schemas.SnowflakeType, body: Schemas.ApplicationRoleConnectionsMetadataItemRequest[] | null, reason?: string) {
        return this.put(`/applications/${application_id}/role-connections/metadata`, body, reason) as Promise<(Schemas.ApplicationRoleConnectionsMetadataItemResponse[] | null)>;
    }
    getChannel(this: Client<Bot>, channel_id: Schemas.SnowflakeType) {
        return this.get(`/channels/${channel_id}`) as Promise<(Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)>;
    }
    deleteChannel(this: Client<Bot>, channel_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}`, reason) as Promise<(Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)>;
    }
    updateChannel(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: Schemas.UpdateDMRequestPartial | Schemas.UpdateGroupDMRequestPartial | Schemas.UpdateGuildChannelRequestPartial | Schemas.UpdateThreadRequestPartial, reason?: string) {
        return this.patch(`/channels/${channel_id}`, body, reason) as Promise<(Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)>;
    }
    followChannel(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: {
        "webhook_channel_id": Schemas.SnowflakeType;
    }, reason?: string) {
        return this.post(`/channels/${channel_id}/followers`, body, reason) as Promise<Schemas.ChannelFollowerResponse>;
    }
    listChannelInvites(this: Client<Bot>, channel_id: Schemas.SnowflakeType) {
        return this.get(`/channels/${channel_id}/invites`) as Promise<((Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse | null)[] | null)>;
    }
    createChannelInvite(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: (Schemas.CreateGroupDMInviteRequest | Schemas.CreateGuildInviteRequest) & {
        "target_users_file"?: string;
    }, reason?: string) {
        return this.post(`/channels/${channel_id}/invites`, body, reason) as Promise<(Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse) | void>;
    }
    listMessages(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        around?: Schemas.SnowflakeType;
        before?: Schemas.SnowflakeType;
        after?: Schemas.SnowflakeType;
        limit?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/messages`, parameters) as Promise<(Schemas.MessageResponse[] | null)>;
    }
    createMessage(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: Schemas.MessageCreateRequest, reason?: string) {
        return this.post(`/channels/${channel_id}/messages`, body.attachments ? getFormData(body, body.attachments) : body, reason) as Promise<Schemas.MessageResponse>;
    }
    bulkDeleteMessages(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: {
        "messages": Schemas.SnowflakeType[];
    }, reason?: string) {
        return this.post(`/channels/${channel_id}/messages/bulk-delete`, body, reason) as Promise<void>;
    }
    listPins(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        before?: string;
        limit?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/messages/pins`, parameters) as Promise<Schemas.PinnedMessagesResponse>;
    }
    createPin(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.put(`/channels/${channel_id}/messages/pins/${message_id}`, undefined, reason) as Promise<void>;
    }
    deletePin(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/messages/pins/${message_id}`, reason) as Promise<void>;
    }
    getMessage(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType) {
        return this.get(`/channels/${channel_id}/messages/${message_id}`) as Promise<Schemas.MessageResponse>;
    }
    deleteMessage(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/messages/${message_id}`, reason) as Promise<void>;
    }
    updateMessage(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, body: Schemas.MessageEditRequestPartial, reason?: string) {
        return this.patch(`/channels/${channel_id}/messages/${message_id}`, body.attachments ? getFormData(body, body.attachments) : body, reason) as Promise<Schemas.MessageResponse>;
    }
    crosspostMessage(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.post(`/channels/${channel_id}/messages/${message_id}/crosspost`, undefined, reason) as Promise<Schemas.MessageResponse>;
    }
    deleteAllMessageReactions(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/messages/${message_id}/reactions`, reason) as Promise<void>;
    }
    listMessageReactionsByEmoji(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, parameters: {
        after?: Schemas.SnowflakeType;
        limit?: number;
        type?: Schemas.ReactionTypes;
    } = {}) {
        return this.get(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`, parameters) as Promise<Schemas.UserResponse[]>;
    }
    deleteAllMessageReactionsByEmoji(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, reason?: string) {
        return this.delete(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`, reason) as Promise<void>;
    }
    addMyMessageReaction(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, reason?: string) {
        return this.put(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/@me`, undefined, reason) as Promise<void>;
    }
    deleteMyMessageReaction(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, reason?: string) {
        return this.delete(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/@me`, reason) as Promise<void>;
    }
    deleteUserMessageReaction(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/${user_id}`, reason) as Promise<void>;
    }
    createThreadFromMessage(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, body: Schemas.CreateTextThreadWithMessageRequest, reason?: string) {
        return this.post(`/channels/${channel_id}/messages/${message_id}/threads`, body, reason) as Promise<Schemas.ThreadResponse>;
    }
    setChannelPermissionOverwrite(this: Client<Bot>, channel_id: Schemas.SnowflakeType, overwrite_id: Schemas.SnowflakeType, body: {
        "type"?: null | Schemas.ChannelPermissionOverwrites;
        "allow"?: number | null;
        "deny"?: number | null;
    }, reason?: string) {
        return this.put(`/channels/${channel_id}/permissions/${overwrite_id}`, body, reason) as Promise<void>;
    }
    deleteChannelPermissionOverwrite(this: Client<Bot>, channel_id: Schemas.SnowflakeType, overwrite_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/permissions/${overwrite_id}`, reason) as Promise<void>;
    }
    deprecatedListPins(this: Client<Bot>, channel_id: Schemas.SnowflakeType) {
        return this.get(`/channels/${channel_id}/pins`) as Promise<(Schemas.MessageResponse[] | null)>;
    }
    deprecatedCreatePin(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.put(`/channels/${channel_id}/pins/${message_id}`, undefined, reason) as Promise<void>;
    }
    deprecatedDeletePin(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/pins/${message_id}`, reason) as Promise<void>;
    }
    getAnswerVoters(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, answer_id: number, parameters: {
        after?: Schemas.SnowflakeType;
        limit?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/polls/${message_id}/answers/${answer_id}`, parameters) as Promise<Schemas.PollAnswerDetailsResponse>;
    }
    pollExpire(this: Client<Bot>, channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
        return this.post(`/channels/${channel_id}/polls/${message_id}/expire`, undefined, reason) as Promise<Schemas.MessageResponse>;
    }
    addGroupDMUser(this: Client<Bot>, channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: {
        "access_token"?: string | null;
        "nick"?: string | null;
    }, reason?: string) {
        return this.put(`/channels/${channel_id}/recipients/${user_id}`, body, reason) as Promise<(Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse) | void>;
    }
    deleteGroupDMUser(this: Client<Bot>, channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/recipients/${user_id}`, reason) as Promise<void>;
    }
    sendSoundboardSound(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: Schemas.SoundboardSoundSendRequest, reason?: string) {
        return this.post(`/channels/${channel_id}/send-soundboard-sound`, body, reason) as Promise<void>;
    }
    listThreadMembers(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        with_member?: boolean;
        limit?: number;
        after?: Schemas.SnowflakeType;
    } = {}) {
        return this.get(`/channels/${channel_id}/thread-members`, parameters) as Promise<Schemas.ThreadMemberResponse[]>;
    }
    joinThread(this: Client<Bot>, channel_id: Schemas.SnowflakeType, reason?: string) {
        return this.put(`/channels/${channel_id}/thread-members/@me`, undefined, reason) as Promise<void>;
    }
    leaveThread(this: Client<Bot>, channel_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/thread-members/@me`, reason) as Promise<void>;
    }
    getThreadMember(this: Client<Bot>, channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, parameters: {
        with_member?: boolean;
    } = {}) {
        return this.get(`/channels/${channel_id}/thread-members/${user_id}`, parameters) as Promise<Schemas.ThreadMemberResponse>;
    }
    addThreadMember(this: Client<Bot>, channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.put(`/channels/${channel_id}/thread-members/${user_id}`, undefined, reason) as Promise<void>;
    }
    deleteThreadMember(this: Client<Bot>, channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/channels/${channel_id}/thread-members/${user_id}`, reason) as Promise<void>;
    }
    createThread(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: Schemas.CreateForumThreadRequest | Schemas.CreateTextThreadWithoutMessageRequest, reason?: string) {
        return this.post(`/channels/${channel_id}/threads`, "message" in body && body.message.attachments ? getFormData(body, body.message.attachments) : body, reason) as Promise<Schemas.CreatedThreadResponse>;
    }
    listPrivateArchivedThreads(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        before?: string;
        limit?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/threads/archived/private`, parameters) as Promise<Schemas.ThreadsResponse>;
    }
    listPublicArchivedThreads(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        before?: string;
        limit?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/threads/archived/public`, parameters) as Promise<Schemas.ThreadsResponse>;
    }
    threadSearch(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        name?: string;
        slop?: number;
        min_id?: Schemas.SnowflakeType;
        max_id?: Schemas.SnowflakeType;
        tag?: string | Schemas.SnowflakeType[];
        tag_setting?: Schemas.ThreadSearchTagSetting;
        archived?: boolean;
        sort_by?: Schemas.ThreadSortingMode;
        sort_order?: Schemas.SortingOrder;
        limit?: number;
        offset?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/threads/search`, parameters) as Promise<Schemas.ThreadSearchResponse>;
    }
    triggerTypingIndicator(this: Client<Bot>, channel_id: Schemas.SnowflakeType, reason?: string) {
        return this.post(`/channels/${channel_id}/typing`, undefined, reason) as Promise<Schemas.TypingIndicatorResponse | void>;
    }
    listMyPrivateArchivedThreads(this: Client<Bot>, channel_id: Schemas.SnowflakeType, parameters: {
        before?: Schemas.SnowflakeType;
        limit?: number;
    } = {}) {
        return this.get(`/channels/${channel_id}/users/@me/threads/archived/private`, parameters) as Promise<Schemas.ThreadsResponse>;
    }
    updateVoiceChannelStatus(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: {
        /**
         * The new voice channel status
         */
        "status"?: string | null;
    }, reason?: string) {
        return this.put(`/channels/${channel_id}/voice-status`, body, reason) as Promise<void>;
    }
    listChannelWebhooks(this: Client<Bot>, channel_id: Schemas.SnowflakeType) {
        return this.get(`/channels/${channel_id}/webhooks`) as Promise<((Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)[] | null)>;
    }
    createWebhook(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: {
        "name": string;
        "avatar"?: string | null;
    }, reason?: string) {
        return this.post(`/channels/${channel_id}/webhooks`, body, reason) as Promise<Schemas.GuildIncomingWebhookResponse>;
    }
    getGateway() {
        return this.get("/gateway") as Promise<Schemas.GatewayResponse>;
    }
    getBotGateway(this: Client<Bot>) {
        return this.get("/gateway/bot") as Promise<Schemas.GatewayBotResponse>;
    }
    getGuildTemplate(code: string) {
        return this.get(`/guilds/templates/${code}`) as Promise<Schemas.GuildTemplateResponse>;
    }
    getGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        with_counts?: boolean;
    } = {}) {
        return this.get(`/guilds/${guild_id}`, parameters) as Promise<Schemas.GuildWithCountsResponse>;
    }
    updateGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.GuildPatchRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}`, body, reason) as Promise<Schemas.GuildResponse>;
    }
    listGuildAuditLogEntries(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        user_id?: Schemas.SnowflakeType;
        target_id?: Schemas.SnowflakeType;
        action_type?: Schemas.AuditLogActionTypes;
        before?: Schemas.SnowflakeType;
        after?: Schemas.SnowflakeType;
        limit?: number;
    } = {}) {
        return this.get(`/guilds/${guild_id}/audit-logs`, parameters) as Promise<Schemas.GuildAuditLogResponse>;
    }
    listAutoModerationRules(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/auto-moderation/rules`) as Promise<((Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse | null)[] | null)>;
    }
    createAutoModerationRule(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.DefaultKeywordListUpsertRequest | Schemas.KeywordUpsertRequest | Schemas.MLSpamUpsertRequest | Schemas.MentionSpamUpsertRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/auto-moderation/rules`, body, reason) as Promise<(Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse)>;
    }
    getAutoModerationRule(this: Client<Bot>, guild_id: Schemas.SnowflakeType, rule_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/auto-moderation/rules/${rule_id}`) as Promise<(Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse)>;
    }
    deleteAutoModerationRule(this: Client<Bot>, guild_id: Schemas.SnowflakeType, rule_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, reason) as Promise<void>;
    }
    updateAutoModerationRule(this: Client<Bot>, guild_id: Schemas.SnowflakeType, rule_id: Schemas.SnowflakeType, body: Schemas.DefaultKeywordListUpsertRequestPartial | Schemas.KeywordUpsertRequestPartial | Schemas.MLSpamUpsertRequestPartial | Schemas.MentionSpamUpsertRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, body, reason) as Promise<(Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse)>;
    }
    listGuildBans(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        limit?: number;
        before?: Schemas.SnowflakeType;
        after?: Schemas.SnowflakeType;
    } = {}) {
        return this.get(`/guilds/${guild_id}/bans`, parameters) as Promise<(Schemas.GuildBanResponse[] | null)>;
    }
    getGuildBan(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/bans/${user_id}`) as Promise<Schemas.GuildBanResponse>;
    }
    banUserFromGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: Schemas.BanUserFromGuildRequest, reason?: string) {
        return this.put(`/guilds/${guild_id}/bans/${user_id}`, body, reason) as Promise<void>;
    }
    unbanUserFromGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/bans/${user_id}`, reason) as Promise<void>;
    }
    bulkBanUsersFromGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.BulkBanUsersRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/bulk-ban`, body, reason) as Promise<Schemas.BulkBanUsersResponse | void>;
    }
    listGuildChannels(this: Client<Bot> | Client<OAuth2>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/channels`) as Promise<((Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)[] | null)>;
    }
    createGuildChannel(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.CreateGuildChannelRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/channels`, body, reason) as Promise<Schemas.GuildChannelResponse>;
    }
    bulkUpdateGuildChannels(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: {
        "id"?: null | Schemas.SnowflakeType;
        "position"?: number | null;
        "parent_id"?: null | Schemas.SnowflakeType;
        "lock_permissions"?: boolean | null;
    }[], reason?: string) {
        return this.patch(`/guilds/${guild_id}/channels`, body, reason) as Promise<void>;
    }
    listGuildEmojis(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/emojis`) as Promise<(Schemas.EmojiResponse[] | null)>;
    }
    createGuildEmoji(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: {
        "name": string;
        "image": string;
        "roles"?: (null | Schemas.SnowflakeType)[] | null;
    }, reason?: string) {
        return this.post(`/guilds/${guild_id}/emojis`, body, reason) as Promise<Schemas.EmojiResponse>;
    }
    getGuildEmoji(this: Client<Bot>, guild_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/emojis/${emoji_id}`) as Promise<Schemas.EmojiResponse>;
    }
    deleteGuildEmoji(this: Client<Bot>, guild_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/emojis/${emoji_id}`, reason) as Promise<void>;
    }
    updateGuildEmoji(this: Client<Bot>, guild_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, body: {
        "name"?: string;
        "roles"?: (null | Schemas.SnowflakeType)[] | null;
    }, reason?: string) {
        return this.patch(`/guilds/${guild_id}/emojis/${emoji_id}`, body, reason) as Promise<Schemas.EmojiResponse>;
    }
    listGuildIntegrations(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/integrations`) as Promise<((Schemas.DiscordIntegrationResponse | Schemas.ExternalConnectionIntegrationResponse | Schemas.GuildSubscriptionIntegrationResponse)[] | null)>;
    }
    deleteGuildIntegration(this: Client<Bot>, guild_id: Schemas.SnowflakeType, integration_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/integrations/${integration_id}`, reason) as Promise<void>;
    }
    listGuildInvites(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/invites`) as Promise<((Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse | null)[] | null)>;
    }
    listGuildMembers(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        limit?: number;
        after?: number;
    } = {}) {
        return this.get(`/guilds/${guild_id}/members`, parameters) as Promise<Schemas.GuildMemberResponse[]>;
    }
    updateMyGuildMember(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: {
        "nick"?: string | null;
        "avatar"?: string | null;
        "bio"?: string | null;
        "banner"?: string | null;
    }, reason?: string) {
        return this.patch(`/guilds/${guild_id}/members/@me`, body, reason) as Promise<Schemas.PrivateGuildMemberResponse>;
    }
    searchGuildMembers(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        limit?: number;
        query: string;
    }) {
        return this.get(`/guilds/${guild_id}/members/search`, parameters) as Promise<Schemas.GuildMemberResponse[]>;
    }
    getGuildMember(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/members/${user_id}`) as Promise<Schemas.GuildMemberResponse>;
    }
    addGuildMember(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: Schemas.BotAddGuildMemberRequest, reason?: string) {
        return this.put(`/guilds/${guild_id}/members/${user_id}`, body, reason) as Promise<Schemas.GuildMemberResponse | void>;
    }
    deleteGuildMember(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/members/${user_id}`, reason) as Promise<void>;
    }
    updateGuildMember(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: {
        "nick"?: string | null;
        "roles"?: (null | Schemas.SnowflakeType)[] | null;
        "mute"?: boolean | null;
        "deaf"?: boolean | null;
        "channel_id"?: null | Schemas.SnowflakeType;
        "communication_disabled_until"?: string | null;
        "flags"?: number | null;
    }, reason?: string) {
        return this.patch(`/guilds/${guild_id}/members/${user_id}`, body, reason) as Promise<Schemas.GuildMemberResponse | void>;
    }
    addGuildMemberRole(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, reason?: string) {
        return this.put(`/guilds/${guild_id}/members/${user_id}/roles/${role_id}`, undefined, reason) as Promise<void>;
    }
    deleteGuildMemberRole(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/members/${user_id}/roles/${role_id}`, reason) as Promise<void>;
    }
    guildSearch(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        sort_by?: Schemas.SortingMode;
        sort_order?: Schemas.SortingOrder;
        content?: string;
        slop?: number;
        author_id?: Schemas.SnowflakeType[];
        author_type?: Schemas.AuthorType[];
        mentions?: Schemas.SnowflakeType[];
        mentions_role_id?: Schemas.SnowflakeType[];
        replied_to_user_id?: Schemas.SnowflakeType[];
        replied_to_message_id?: Schemas.SnowflakeType[];
        mention_everyone?: boolean;
        min_id?: Schemas.SnowflakeType;
        max_id?: Schemas.SnowflakeType;
        limit?: number;
        offset?: number;
        has?: Schemas.HasOption[];
        link_hostname?: string[];
        embed_provider?: string[];
        embed_type?: Schemas.SearchableEmbedType[];
        attachment_extension?: string[];
        attachment_filename?: string[];
        pinned?: boolean;
        include_nsfw?: boolean;
        channel_id?: Schemas.SnowflakeType[];
    } = {}) {
        return this.get(`/guilds/${guild_id}/messages/search`, parameters) as Promise<Schemas.GuildSearchResponse | Schemas.SearchIndexNotReadyResponse>;
    }
    getGuildNewMemberWelcome(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/new-member-welcome`) as Promise<Schemas.GuildHomeSettingsResponse | void>;
    }
    getGuildsOnboarding(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/onboarding`) as Promise<Schemas.UserGuildOnboardingResponse>;
    }
    putGuildsOnboarding(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.UpdateGuildOnboardingRequest, reason?: string) {
        return this.put(`/guilds/${guild_id}/onboarding`, body, reason) as Promise<Schemas.GuildOnboardingResponse>;
    }
    getGuildPreview(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/preview`) as Promise<Schemas.GuildPreviewResponse>;
    }
    previewPruneGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        days?: number;
        include_roles?: string | (null | Schemas.SnowflakeType)[];
    } = {}) {
        return this.get(`/guilds/${guild_id}/prune`, parameters) as Promise<Schemas.GuildPruneResponse>;
    }
    pruneGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.PruneGuildRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/prune`, body, reason) as Promise<Schemas.GuildPruneResponse>;
    }
    listGuildVoiceRegions(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/regions`) as Promise<(Schemas.VoiceRegionResponse[] | null)>;
    }
    listGuildRoles(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/roles`) as Promise<Schemas.GuildRoleResponse[]>;
    }
    createGuildRole(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.CreateRoleRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/roles`, body, reason) as Promise<Schemas.GuildRoleResponse>;
    }
    bulkUpdateGuildRoles(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.UpdateRolePositionsRequest[], reason?: string) {
        return this.patch(`/guilds/${guild_id}/roles`, body, reason) as Promise<Schemas.GuildRoleResponse[]>;
    }
    guildRoleMemberCounts(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/roles/member-counts`) as Promise<{
            [additionalProperties: string]: number;
        }>;
    }
    getGuildRole(this: Client<Bot>, guild_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/roles/${role_id}`) as Promise<Schemas.GuildRoleResponse>;
    }
    deleteGuildRole(this: Client<Bot>, guild_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/roles/${role_id}`, reason) as Promise<void>;
    }
    updateGuildRole(this: Client<Bot>, guild_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, body: Schemas.UpdateRoleRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/roles/${role_id}`, body, reason) as Promise<Schemas.GuildRoleResponse>;
    }
    listGuildScheduledEvents(this: Client<Bot>, guild_id: Schemas.SnowflakeType, parameters: {
        with_user_count?: boolean;
    } = {}) {
        return this.get(`/guilds/${guild_id}/scheduled-events`, parameters) as Promise<((Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)[] | null)>;
    }
    createGuildScheduledEvent(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.ExternalScheduledEventCreateRequest | Schemas.StageScheduledEventCreateRequest | Schemas.VoiceScheduledEventCreateRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/scheduled-events`, body, reason) as Promise<(Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)>;
    }
    getGuildScheduledEvent(this: Client<Bot>, guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, parameters: {
        with_user_count?: boolean;
    } = {}) {
        return this.get(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, parameters) as Promise<(Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)>;
    }
    deleteGuildScheduledEvent(this: Client<Bot>, guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, reason) as Promise<void>;
    }
    updateGuildScheduledEvent(this: Client<Bot>, guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, body: Schemas.ExternalScheduledEventPatchRequestPartial | Schemas.StageScheduledEventPatchRequestPartial | Schemas.VoiceScheduledEventPatchRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, body, reason) as Promise<(Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)>;
    }
    listGuildScheduledEventUsers(this: Client<Bot>, guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, parameters: {
        with_member?: boolean;
        limit?: number;
        before?: Schemas.SnowflakeType;
        after?: Schemas.SnowflakeType;
    } = {}) {
        return this.get(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/users`, parameters) as Promise<(Schemas.ScheduledEventUserResponse[] | null)>;
    }
    listGuildSoundboardSounds(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/soundboard-sounds`) as Promise<Schemas.ListGuildSoundboardSoundsResponse>;
    }
    createGuildSoundboardSound(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.SoundboardCreateRequest, reason?: string) {
        return this.post(`/guilds/${guild_id}/soundboard-sounds`, body, reason) as Promise<Schemas.SoundboardSoundResponse>;
    }
    getGuildSoundboardSound(this: Client<Bot>, guild_id: Schemas.SnowflakeType, sound_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/soundboard-sounds/${sound_id}`) as Promise<Schemas.SoundboardSoundResponse>;
    }
    deleteGuildSoundboardSound(this: Client<Bot>, guild_id: Schemas.SnowflakeType, sound_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/soundboard-sounds/${sound_id}`, reason) as Promise<void>;
    }
    updateGuildSoundboardSound(this: Client<Bot>, guild_id: Schemas.SnowflakeType, sound_id: Schemas.SnowflakeType, body: Schemas.SoundboardPatchRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/soundboard-sounds/${sound_id}`, body, reason) as Promise<Schemas.SoundboardSoundResponse>;
    }
    listGuildStickers(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/stickers`) as Promise<Schemas.GuildStickerResponse[]>;
    }
    createGuildSticker(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: {
        "name": string;
        "tags": string;
        "description"?: string | null;
        "file": string;
    }, reason?: string) {
        return this.post(`/guilds/${guild_id}/stickers`, body, reason) as Promise<Schemas.GuildStickerResponse>;
    }
    getGuildSticker(this: Client<Bot>, guild_id: Schemas.SnowflakeType, sticker_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/stickers/${sticker_id}`) as Promise<Schemas.GuildStickerResponse>;
    }
    deleteGuildSticker(this: Client<Bot>, guild_id: Schemas.SnowflakeType, sticker_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/guilds/${guild_id}/stickers/${sticker_id}`, reason) as Promise<void>;
    }
    updateGuildSticker(this: Client<Bot>, guild_id: Schemas.SnowflakeType, sticker_id: Schemas.SnowflakeType, body: {
        "name"?: string;
        "tags"?: string;
        "description"?: string | null;
    }, reason?: string) {
        return this.patch(`/guilds/${guild_id}/stickers/${sticker_id}`, body, reason) as Promise<Schemas.GuildStickerResponse>;
    }
    listGuildTemplates(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/templates`) as Promise<(Schemas.GuildTemplateResponse[] | null)>;
    }
    createGuildTemplate(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: {
        "name": string;
        "description"?: string | null;
    }, reason?: string) {
        return this.post(`/guilds/${guild_id}/templates`, body, reason) as Promise<Schemas.GuildTemplateResponse>;
    }
    syncGuildTemplate(this: Client<Bot>, guild_id: Schemas.SnowflakeType, code: string, reason?: string) {
        return this.put(`/guilds/${guild_id}/templates/${code}`, undefined, reason) as Promise<Schemas.GuildTemplateResponse>;
    }
    deleteGuildTemplate(this: Client<Bot>, guild_id: Schemas.SnowflakeType, code: string, reason?: string) {
        return this.delete(`/guilds/${guild_id}/templates/${code}`, reason) as Promise<Schemas.GuildTemplateResponse>;
    }
    updateGuildTemplate(this: Client<Bot>, guild_id: Schemas.SnowflakeType, code: string, body: {
        "name"?: string;
        "description"?: string | null;
    }, reason?: string) {
        return this.patch(`/guilds/${guild_id}/templates/${code}`, body, reason) as Promise<Schemas.GuildTemplateResponse>;
    }
    getActiveGuildThreads(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/threads/active`) as Promise<Schemas.ThreadsResponse>;
    }
    getGuildVanityUrl(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/vanity-url`) as Promise<Schemas.VanityURLResponse>;
    }
    getSelfVoiceState(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/voice-states/@me`) as Promise<Schemas.VoiceStateResponse>;
    }
    updateSelfVoiceState(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.UpdateSelfVoiceStateRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/voice-states/@me`, body, reason) as Promise<void>;
    }
    getVoiceState(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/voice-states/${user_id}`) as Promise<Schemas.VoiceStateResponse>;
    }
    updateVoiceState(this: Client<Bot>, guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: Schemas.UpdateVoiceStateRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/voice-states/${user_id}`, body, reason) as Promise<void>;
    }
    getGuildWebhooks(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/webhooks`) as Promise<((Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)[] | null)>;
    }
    getGuildWelcomeScreen(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/welcome-screen`) as Promise<Schemas.GuildWelcomeScreenResponse>;
    }
    updateGuildWelcomeScreen(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: Schemas.WelcomeScreenPatchRequestPartial, reason?: string) {
        return this.patch(`/guilds/${guild_id}/welcome-screen`, body, reason) as Promise<Schemas.GuildWelcomeScreenResponse>;
    }
    getGuildWidgetSettings(this: Client<Bot>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/widget`) as Promise<Schemas.WidgetSettingsResponse>;
    }
    updateGuildWidgetSettings(this: Client<Bot>, guild_id: Schemas.SnowflakeType, body: {
        "channel_id"?: null | Schemas.SnowflakeType;
        "enabled"?: boolean | null;
    }, reason?: string) {
        return this.patch(`/guilds/${guild_id}/widget`, body, reason) as Promise<Schemas.WidgetSettingsResponse>;
    }
    getGuildWidget(guild_id: Schemas.SnowflakeType) {
        return this.get(`/guilds/${guild_id}/widget.json`) as Promise<Schemas.WidgetResponse>;
    }
    getGuildWidgetPng(guild_id: Schemas.SnowflakeType, parameters: {
        style?: Schemas.WidgetImageStyles;
    } = {}) {
        return this.get(`/guilds/${guild_id}/widget.png`, parameters) as Promise<unknown>;
    }
    createInteractionResponse(interaction_id: Schemas.SnowflakeType, interaction_token: string, body: Schemas.ApplicationCommandAutocompleteCallbackRequest | Schemas.CreateMessageInteractionCallbackRequest | Schemas.DeferredCreateMessageInteractionCallbackRequest | Schemas.LaunchActivityInteractionCallbackRequest | Schemas.ModalInteractionCallbackRequest | Schemas.PongInteractionCallbackRequest | Schemas.UpdateMessageInteractionCallbackRequest | Schemas.DeferredUpdateMessageInteractionCallbackRequest, reason?: string, parameters: {
        with_response?: boolean;
    } = {}) {
        return this.post(`/interactions/${interaction_id}/${interaction_token}/callback`, "data" in body && body.data && "attachments" in body.data && body.data.attachments ? getFormData(body, body.data.attachments) : body, reason, parameters) as Promise<Schemas.InteractionCallbackResponse | void>;
    }
    inviteResolve(code: string, parameters: {
        with_counts?: boolean;
        guild_scheduled_event_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.get(`/invites/${code}`, parameters) as Promise<(Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse)>;
    }
    inviteRevoke(this: Client<Bot>, code: string, reason?: string) {
        return this.delete(`/invites/${code}`, reason) as Promise<(Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse)>;
    }
    getInviteTargetUsers(this: Client<Bot>, code: string) {
        return this.get(`/invites/${code}/target-users`) as Promise<unknown>;
    }
    updateInviteTargetUsers(this: Client<Bot>, code: string, body: {
        "target_users_file": string;
    }, reason?: string) {
        return this.put(`/invites/${code}/target-users`, body, reason) as Promise<void>;
    }
    getInviteTargetUsersJobStatus(this: Client<Bot>, code: string) {
        return this.get(`/invites/${code}/target-users/job-status`) as Promise<Schemas.TargetUsersJobStatusResponse>;
    }
    createOrJoinLobby(this: Client<Bot> | Client<OAuth2>, body: {
        "idle_timeout_seconds"?: number | null;
        "lobby_metadata"?: {
            [additionalProperties: string]: string;
        } | null;
        "member_metadata"?: {
            [additionalProperties: string]: string;
        } | null;
        "secret": string;
        "flags"?: null | 1;
    }, reason?: string) {
        return this.put("/lobbies", body, reason) as Promise<Schemas.LobbyResponse>;
    }
    createLobby(this: Client<Bot>, body: {
        "idle_timeout_seconds"?: number | null;
        "members"?: Schemas.LobbyMemberRequest[] | null;
        "metadata"?: {
            [additionalProperties: string]: string;
        } | null;
        "flags"?: null | 1;
        "override_event_webhooks_url"?: string | null;
    }, reason?: string) {
        return this.post("/lobbies", body, reason) as Promise<Schemas.LobbyResponse>;
    }
    getLobby(this: Client<Bot>, lobby_id: Schemas.SnowflakeType) {
        return this.get(`/lobbies/${lobby_id}`) as Promise<Schemas.LobbyResponse>;
    }
    editLobby(this: Client<Bot>, lobby_id: Schemas.SnowflakeType, body: {
        "idle_timeout_seconds"?: number | null;
        "metadata"?: {
            [additionalProperties: string]: string;
        } | null;
        "members"?: Schemas.LobbyMemberRequest[] | null;
        "flags"?: null | 1;
        "override_event_webhooks_url"?: string | null;
    }, reason?: string) {
        return this.patch(`/lobbies/${lobby_id}`, body, reason) as Promise<Schemas.LobbyResponse>;
    }
    editLobbyChannelLink(this: Client<Bot> | Client<OAuth2>, lobby_id: Schemas.SnowflakeType, body: {
        "channel_id"?: null | Schemas.SnowflakeType;
    }, reason?: string) {
        return this.patch(`/lobbies/${lobby_id}/channel-linking`, body, reason) as Promise<Schemas.LobbyResponse>;
    }
    leaveLobby(this: Client<Bot> | Client<OAuth2>, lobby_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/lobbies/${lobby_id}/members/@me`, reason) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForSelf(this: Client<Bot> | Client<OAuth2>, lobby_id: Schemas.SnowflakeType, reason?: string) {
        return this.post(`/lobbies/${lobby_id}/members/@me/invites`, undefined, reason) as Promise<Schemas.LobbyGuildInviteResponse>;
    }
    bulkUpdateLobbyMembers(this: Client<Bot>, lobby_id: Schemas.SnowflakeType, body: Schemas.BulkLobbyMemberRequest[] | null, reason?: string) {
        return this.post(`/lobbies/${lobby_id}/members/bulk`, body, reason) as Promise<(Schemas.LobbyMemberResponse[] | null)>;
    }
    addLobbyMember(this: Client<Bot>, lobby_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: {
        "metadata"?: {
            [additionalProperties: string]: string;
        } | null;
        "flags"?: null | 1;
    }, reason?: string) {
        return this.put(`/lobbies/${lobby_id}/members/${user_id}`, body, reason) as Promise<Schemas.LobbyMemberResponse>;
    }
    deleteLobbyMember(this: Client<Bot>, lobby_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/lobbies/${lobby_id}/members/${user_id}`, reason) as Promise<void>;
    }
    createLinkedLobbyGuildInviteForUser(this: Client<Bot>, lobby_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
        return this.post(`/lobbies/${lobby_id}/members/${user_id}/invites`, undefined, reason) as Promise<Schemas.LobbyGuildInviteResponse>;
    }
    getLobbyMessages(this: Client<Bot> | Client<OAuth2>, lobby_id: Schemas.SnowflakeType, parameters: {
        limit?: number;
    } = {}) {
        return this.get(`/lobbies/${lobby_id}/messages`, parameters) as Promise<(Schemas.LobbyMessageResponse[] | null)>;
    }
    createLobbyMessage(this: Client<Bot> | Client<OAuth2>, lobby_id: Schemas.SnowflakeType, body: Schemas.SDKMessageRequest, reason?: string) {
        return this.post(`/lobbies/${lobby_id}/messages`, body.attachments ? getFormData(body, body.attachments) : body, reason) as Promise<Schemas.LobbyMessageResponse>;
    }
    updateLobbyMessageExternalModerationMetadata(this: Client<Bot>, lobby_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, body: {
        [additionalProperties: string]: string;
    }, reason?: string) {
        return this.put(`/lobbies/${lobby_id}/messages/${message_id}/moderation-metadata`, body, reason) as Promise<void>;
    }
    getMyOauth2Authorization(this: Client<Bot> | Client<OAuth2>) {
        return this.get("/oauth2/@me") as Promise<Schemas.OAuth2GetAuthorizationResponse>;
    }
    getMyOauth2Application(this: Client<Bot>) {
        return this.get("/oauth2/applications/@me") as Promise<Schemas.PrivateApplicationResponse>;
    }
    getPublicKeys() {
        return this.get("/oauth2/keys") as Promise<Schemas.OAuth2GetKeys>;
    }
    getOpenidConnectUserinfo(this: Client<Bot> | Client<OAuth2>) {
        return this.get("/oauth2/userinfo") as Promise<Schemas.OAuth2GetOpenIDConnectUserInfoResponse>;
    }
    updateUserMessageExternalModerationMetadata(this: Client<Bot>, user_id_1: Schemas.SnowflakeType, user_id_2: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, body: {
        [additionalProperties: string]: string;
    }, reason?: string) {
        return this.put(`/partner-sdk/dms/${user_id_1}/${user_id_2}/messages/${message_id}/moderation-metadata`, body, reason) as Promise<void>;
    }
    partnerSdkUnmergeProvisionalAccount(body: {
        "client_id": Schemas.SnowflakeType;
        "client_secret"?: string | null;
        "external_auth_token": string;
        "external_auth_type": Schemas.ApplicationIdentityProviderAuthType;
    }, reason?: string) {
        return this.post("/partner-sdk/provisional-accounts/unmerge", body, reason) as Promise<void>;
    }
    botPartnerSdkUnmergeProvisionalAccount(this: Client<Bot>, body: {
        "external_user_id": string;
    }, reason?: string) {
        return this.post("/partner-sdk/provisional-accounts/unmerge/bot", body, reason) as Promise<void>;
    }
    partnerSdkToken(body: {
        "client_id": Schemas.SnowflakeType;
        "client_secret"?: string | null;
        "external_auth_token": string;
        "external_auth_type": Schemas.ApplicationIdentityProviderAuthType;
    }, reason?: string) {
        return this.post("/partner-sdk/token", body, reason) as Promise<Schemas.ProvisionalTokenResponse>;
    }
    botPartnerSdkToken(this: Client<Bot>, body: {
        "external_user_id": string;
        "preferred_global_name"?: string | null;
    }, reason?: string) {
        return this.post("/partner-sdk/token/bot", body, reason) as Promise<Schemas.ProvisionalTokenResponse>;
    }
    getSoundboardDefaultSounds(this: Client<Bot>) {
        return this.get("/soundboard-default-sounds") as Promise<Schemas.SoundboardSoundResponse[]>;
    }
    createStageInstance(this: Client<Bot>, body: {
        "topic": string;
        "channel_id": Schemas.SnowflakeType;
        "privacy_level"?: null | Schemas.StageInstancesPrivacyLevels;
        "guild_scheduled_event_id"?: null | Schemas.SnowflakeType;
        "send_start_notification"?: boolean | null;
    }, reason?: string) {
        return this.post("/stage-instances", body, reason) as Promise<Schemas.StageInstanceResponse>;
    }
    getStageInstance(this: Client<Bot>, channel_id: Schemas.SnowflakeType) {
        return this.get(`/stage-instances/${channel_id}`) as Promise<Schemas.StageInstanceResponse>;
    }
    deleteStageInstance(this: Client<Bot>, channel_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/stage-instances/${channel_id}`, reason) as Promise<void>;
    }
    updateStageInstance(this: Client<Bot>, channel_id: Schemas.SnowflakeType, body: {
        "topic"?: string;
        "privacy_level"?: Schemas.StageInstancesPrivacyLevels;
    }, reason?: string) {
        return this.patch(`/stage-instances/${channel_id}`, body, reason) as Promise<Schemas.StageInstanceResponse>;
    }
    listStickerPacks() {
        return this.get("/sticker-packs") as Promise<Schemas.StickerPackCollectionResponse>;
    }
    getStickerPack(this: Client<Bot>, pack_id: Schemas.SnowflakeType) {
        return this.get(`/sticker-packs/${pack_id}`) as Promise<Schemas.StickerPackResponse>;
    }
    getSticker(this: Client<Bot>, sticker_id: Schemas.SnowflakeType) {
        return this.get(`/stickers/${sticker_id}`) as Promise<(Schemas.GuildStickerResponse | Schemas.StandardStickerResponse)>;
    }
    getMyUser(this: Client<Bot> | Client<OAuth2>) {
        return this.get("/users/@me") as Promise<Schemas.UserPIIResponse>;
    }
    updateMyUser(this: Client<Bot>, body: Schemas.BotAccountPatchRequest, reason?: string) {
        return this.patch("/users/@me", body, reason) as Promise<Schemas.UserPIIResponse>;
    }
    getCurrentUserApplicationEntitlements(this: Client<OAuth2>, application_id: Schemas.SnowflakeType, parameters: {
        sku_ids?: string | (null | Schemas.SnowflakeType)[];
        exclude_consumed?: boolean;
    } = {}) {
        return this.get(`/users/@me/applications/${application_id}/entitlements`, parameters) as Promise<Schemas.EntitlementResponse[]>;
    }
    getApplicationUserRoleConnection(this: Client<OAuth2>, application_id: Schemas.SnowflakeType) {
        return this.get(`/users/@me/applications/${application_id}/role-connection`) as Promise<Schemas.ApplicationUserRoleConnectionResponse>;
    }
    updateApplicationUserRoleConnection(this: Client<OAuth2>, application_id: Schemas.SnowflakeType, body: Schemas.UpdateApplicationUserRoleConnectionRequest, reason?: string) {
        return this.put(`/users/@me/applications/${application_id}/role-connection`, body, reason) as Promise<Schemas.ApplicationUserRoleConnectionResponse>;
    }
    deleteApplicationUserRoleConnection(this: Client<OAuth2>, application_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/users/@me/applications/${application_id}/role-connection`, reason) as Promise<void>;
    }
    createDM(this: Client<Bot>, body: Schemas.CreatePrivateChannelRequest, reason?: string) {
        return this.post("/users/@me/channels", body, reason) as Promise<(Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse)>;
    }
    listMyConnections(this: Client<Bot> | Client<OAuth2>) {
        return this.get("/users/@me/connections") as Promise<(Schemas.ConnectedAccountResponse[] | null)>;
    }
    listMyGuilds(this: Client<Bot> | Client<OAuth2>, parameters: {
        before?: Schemas.SnowflakeType;
        after?: Schemas.SnowflakeType;
        limit?: number;
        with_counts?: boolean;
    } = {}) {
        return this.get("/users/@me/guilds", parameters) as Promise<(Schemas.MyGuildResponse[] | null)>;
    }
    leaveGuild(this: Client<Bot>, guild_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/users/@me/guilds/${guild_id}`, reason) as Promise<void>;
    }
    getMyGuildMember(this: Client<OAuth2>, guild_id: Schemas.SnowflakeType) {
        return this.get(`/users/@me/guilds/${guild_id}/member`) as Promise<Schemas.PrivateGuildMemberResponse>;
    }
    getUser(this: Client<Bot>, user_id: Schemas.SnowflakeType) {
        return this.get(`/users/${user_id}`) as Promise<Schemas.UserResponse>;
    }
    listVoiceRegions(this: Client<Bot>) {
        return this.get("/voice/regions") as Promise<(Schemas.VoiceRegionResponse[] | null)>;
    }
    getWebhook(this: Client<Bot>, webhook_id: Schemas.SnowflakeType) {
        return this.get(`/webhooks/${webhook_id}`) as Promise<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>;
    }
    deleteWebhook(this: Client<Bot>, webhook_id: Schemas.SnowflakeType, reason?: string) {
        return this.delete(`/webhooks/${webhook_id}`, reason) as Promise<void>;
    }
    updateWebhook(this: Client<Bot>, webhook_id: Schemas.SnowflakeType, body: {
        "name"?: string;
        "avatar"?: string | null;
        "channel_id"?: null | Schemas.SnowflakeType;
    }, reason?: string) {
        return this.patch(`/webhooks/${webhook_id}`, body, reason) as Promise<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>;
    }
    getWebhookByToken(webhook_id: Schemas.SnowflakeType, webhook_token: string) {
        return this.get(`/webhooks/${webhook_id}/${webhook_token}`) as Promise<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>;
    }
    executeWebhook(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.IncomingWebhookRequestPartial | Schemas.IncomingWebhookUpdateRequestPartial, reason?: string, parameters: {
        wait?: boolean;
        thread_id?: Schemas.SnowflakeType;
        with_components?: boolean;
    } = {}) {
        return this.post(`/webhooks/${webhook_id}/${webhook_token}`, body.attachments ? getFormData(body, body.attachments) : body, reason, parameters) as Promise<Schemas.MessageResponse | void>;
    }
    deleteWebhookByToken(webhook_id: Schemas.SnowflakeType, webhook_token: string, reason?: string) {
        return this.delete(`/webhooks/${webhook_id}/${webhook_token}`, reason) as Promise<void>;
    }
    updateWebhookByToken(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: {
        "name"?: string;
        "avatar"?: string | null;
    }, reason?: string) {
        return this.patch(`/webhooks/${webhook_id}/${webhook_token}`, body, reason) as Promise<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>;
    }
    executeGithubCompatibleWebhook(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.GithubWebhook, reason?: string, parameters: {
        wait?: boolean;
        thread_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.post(`/webhooks/${webhook_id}/${webhook_token}/github`, body, reason, parameters) as Promise<void>;
    }
    getOriginalWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, parameters: {
        thread_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.get(`/webhooks/${webhook_id}/${webhook_token}/messages/@original`, parameters) as Promise<Schemas.MessageResponse>;
    }
    deleteOriginalWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, reason?: string, parameters: {
        thread_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.delete(`/webhooks/${webhook_id}/${webhook_token}/messages/@original`, reason, parameters) as Promise<void>;
    }
    updateOriginalWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.IncomingWebhookUpdateRequestPartial, reason?: string, parameters: {
        thread_id?: Schemas.SnowflakeType;
        with_components?: boolean;
    } = {}) {
        return this.patch(`/webhooks/${webhook_id}/${webhook_token}/messages/@original`, body.attachments ? getFormData(body, body.attachments) : body, reason, parameters) as Promise<Schemas.MessageResponse>;
    }
    getWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, message_id: Schemas.SnowflakeType, parameters: {
        thread_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.get(`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, parameters) as Promise<Schemas.MessageResponse>;
    }
    deleteWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, message_id: Schemas.SnowflakeType, reason?: string, parameters: {
        thread_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.delete(`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, reason, parameters) as Promise<void>;
    }
    updateWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, message_id: Schemas.SnowflakeType, body: Schemas.IncomingWebhookUpdateRequestPartial, reason?: string, parameters: {
        thread_id?: Schemas.SnowflakeType;
        with_components?: boolean;
    } = {}) {
        return this.patch(`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, body.attachments ? getFormData(body, body.attachments) : body, reason, parameters) as Promise<Schemas.MessageResponse>;
    }
    executeSlackCompatibleWebhook(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.SlackWebhook, reason?: string, parameters: {
        wait?: boolean;
        thread_id?: Schemas.SnowflakeType;
    } = {}) {
        return this.post(`/webhooks/${webhook_id}/${webhook_token}/slack`, body, reason, parameters) as Promise<(string | null)>;
    }
}
