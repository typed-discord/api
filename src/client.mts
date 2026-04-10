import * as Schemas from "./types.mjs";
import { BaseClient, getFormData } from "./fetch.mjs"

export class Client extends BaseClient {
    constructor(public token: string) {
        super(`Bot ${token}`);
    }

    getMyApplication() {
    return this.get<Schemas.PrivateApplicationResponse>("/applications/@me");
}

updateMyApplication(body: Schemas.ApplicationFormPartial, reason?: string) {
    return this.patch<Schemas.PrivateApplicationResponse>("/applications/@me", body, reason);
}

getApplication(application_id: Schemas.SnowflakeType) {
    return this.get<Schemas.PrivateApplicationResponse>(`/applications/${application_id}`);
}

updateApplication(application_id: Schemas.SnowflakeType, body: Schemas.ApplicationFormPartial, reason?: string) {
    return this.patch<Schemas.PrivateApplicationResponse>(`/applications/${application_id}`, body, reason);
}

applicationsGetActivityInstance(application_id: Schemas.SnowflakeType, instance_id: string) {
    return this.get<Schemas.EmbeddedActivityInstance>(`/applications/${application_id}/activity-instances/${instance_id}`);
}

uploadApplicationAttachment(application_id: Schemas.SnowflakeType, body: {
    "file": string;
}, reason?: string) {
    return this.post<Schemas.ActivitiesAttachmentResponse>(`/applications/${application_id}/attachment`, body, reason);
}

listApplicationCommands(application_id: Schemas.SnowflakeType, { with_localizations }: {
    with_localizations?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_localizations !== undefined)
        searchParams.append("with_localizations", with_localizations.toString());
    return this.get<(Schemas.ApplicationCommandResponse[] | null)>(`/applications/${application_id}/commands`, searchParams);
}

bulkSetApplicationCommands(application_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandUpdateRequest[] | null, reason?: string) {
    return this.put<(Schemas.ApplicationCommandResponse[] | null)>(`/applications/${application_id}/commands`, body, reason);
}

createApplicationCommand(application_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandCreateRequest, reason?: string) {
    return this.post<Schemas.ApplicationCommandResponse | Schemas.ApplicationCommandResponse>(`/applications/${application_id}/commands`, body, reason);
}

getApplicationCommand(application_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType) {
    return this.get<Schemas.ApplicationCommandResponse>(`/applications/${application_id}/commands/${command_id}`);
}

deleteApplicationCommand(application_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/applications/${application_id}/commands/${command_id}`, reason);
}

updateApplicationCommand(application_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandPatchRequestPartial, reason?: string) {
    return this.patch<Schemas.ApplicationCommandResponse>(`/applications/${application_id}/commands/${command_id}`, body, reason);
}

listApplicationEmojis(application_id: Schemas.SnowflakeType) {
    return this.get<Schemas.ListApplicationEmojisResponse>(`/applications/${application_id}/emojis`);
}

createApplicationEmoji(application_id: Schemas.SnowflakeType, body: {
    "name": string;
    "image": string;
}, reason?: string) {
    return this.post<Schemas.EmojiResponse>(`/applications/${application_id}/emojis`, body, reason);
}

getApplicationEmoji(application_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType) {
    return this.get<Schemas.EmojiResponse>(`/applications/${application_id}/emojis/${emoji_id}`);
}

deleteApplicationEmoji(application_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/applications/${application_id}/emojis/${emoji_id}`, reason);
}

updateApplicationEmoji(application_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, body: {
    "name"?: string;
}, reason?: string) {
    return this.patch<Schemas.EmojiResponse>(`/applications/${application_id}/emojis/${emoji_id}`, body, reason);
}

getEntitlements(application_id: Schemas.SnowflakeType, { user_id, sku_ids, guild_id, before, after, limit, exclude_ended, exclude_deleted, only_active }: {
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
    const searchParams = new URLSearchParams();
    if (user_id !== undefined)
        searchParams.append("user_id", user_id.toString());
    if (sku_ids !== undefined)
        searchParams.append("sku_ids", sku_ids.toString());
    if (guild_id !== undefined)
        searchParams.append("guild_id", guild_id.toString());
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (exclude_ended !== undefined)
        searchParams.append("exclude_ended", exclude_ended.toString());
    if (exclude_deleted !== undefined)
        searchParams.append("exclude_deleted", exclude_deleted.toString());
    if (only_active !== undefined)
        searchParams.append("only_active", only_active.toString());
    return this.get<(null | Schemas.EntitlementResponse)[]>(`/applications/${application_id}/entitlements`, searchParams);
}

createEntitlement(application_id: Schemas.SnowflakeType, body: Schemas.CreateEntitlementRequestData, reason?: string) {
    return this.post<Schemas.EntitlementResponse>(`/applications/${application_id}/entitlements`, body, reason);
}

getEntitlement(application_id: Schemas.SnowflakeType, entitlement_id: Schemas.SnowflakeType) {
    return this.get<Schemas.EntitlementResponse>(`/applications/${application_id}/entitlements/${entitlement_id}`);
}

deleteEntitlement(application_id: Schemas.SnowflakeType, entitlement_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/applications/${application_id}/entitlements/${entitlement_id}`, reason);
}

consumeEntitlement(application_id: Schemas.SnowflakeType, entitlement_id: Schemas.SnowflakeType, reason?: string) {
    return this.post<void>(`/applications/${application_id}/entitlements/${entitlement_id}/consume`, undefined, reason);
}

listGuildApplicationCommands(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, { with_localizations }: {
    with_localizations?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_localizations !== undefined)
        searchParams.append("with_localizations", with_localizations.toString());
    return this.get<(Schemas.ApplicationCommandResponse[] | null)>(`/applications/${application_id}/guilds/${guild_id}/commands`, searchParams);
}

bulkSetGuildApplicationCommands(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandUpdateRequest[] | null, reason?: string) {
    return this.put<(Schemas.ApplicationCommandResponse[] | null)>(`/applications/${application_id}/guilds/${guild_id}/commands`, body, reason);
}

createGuildApplicationCommand(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandCreateRequest, reason?: string) {
    return this.post<Schemas.ApplicationCommandResponse | Schemas.ApplicationCommandResponse>(`/applications/${application_id}/guilds/${guild_id}/commands`, body, reason);
}

listGuildApplicationCommandPermissions(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.CommandPermissionsResponse[]>(`/applications/${application_id}/guilds/${guild_id}/commands/permissions`);
}

getGuildApplicationCommand(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType) {
    return this.get<Schemas.ApplicationCommandResponse>(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`);
}

deleteGuildApplicationCommand(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, reason);
}

updateGuildApplicationCommand(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, body: Schemas.ApplicationCommandPatchRequestPartial, reason?: string) {
    return this.patch<Schemas.ApplicationCommandResponse>(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`, body, reason);
}

getGuildApplicationCommandPermissions(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType) {
    return this.get<Schemas.CommandPermissionsResponse>(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`);
}

setGuildApplicationCommandPermissions(application_id: Schemas.SnowflakeType, guild_id: Schemas.SnowflakeType, command_id: Schemas.SnowflakeType, body: {
    "permissions"?: Schemas.ApplicationCommandPermission[] | null;
}, reason?: string) {
    return this.put<Schemas.CommandPermissionsResponse>(`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`, body, reason);
}

getApplicationRoleConnectionsMetadata(application_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.ApplicationRoleConnectionsMetadataItemResponse[] | null)>(`/applications/${application_id}/role-connections/metadata`);
}

updateApplicationRoleConnectionsMetadata(application_id: Schemas.SnowflakeType, body: Schemas.ApplicationRoleConnectionsMetadataItemRequest[] | null, reason?: string) {
    return this.put<(Schemas.ApplicationRoleConnectionsMetadataItemResponse[] | null)>(`/applications/${application_id}/role-connections/metadata`, body, reason);
}

getChannel(channel_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)>(`/channels/${channel_id}`);
}

deleteChannel(channel_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<(Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)>(`/channels/${channel_id}`, reason);
}

updateChannel(channel_id: Schemas.SnowflakeType, body: Schemas.UpdateDMRequestPartial | Schemas.UpdateGroupDMRequestPartial | Schemas.UpdateGuildChannelRequestPartial | Schemas.UpdateThreadRequestPartial, reason?: string) {
    return this.patch<(Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)>(`/channels/${channel_id}`, body, reason);
}

followChannel(channel_id: Schemas.SnowflakeType, body: {
    "webhook_channel_id": Schemas.SnowflakeType;
}, reason?: string) {
    return this.post<Schemas.ChannelFollowerResponse>(`/channels/${channel_id}/followers`, body, reason);
}

listChannelInvites(channel_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse | null)[] | null)>(`/channels/${channel_id}/invites`);
}

createChannelInvite(channel_id: Schemas.SnowflakeType, body: (Schemas.CreateGroupDMInviteRequest | Schemas.CreateGuildInviteRequest) & {
    "target_users_file"?: string;
}, reason?: string) {
    return this.post<(Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse) | void>(`/channels/${channel_id}/invites`, body, reason);
}

listMessages(channel_id: Schemas.SnowflakeType, { around, before, after, limit }: {
    around?: Schemas.SnowflakeType;
    before?: Schemas.SnowflakeType;
    after?: Schemas.SnowflakeType;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (around !== undefined)
        searchParams.append("around", around.toString());
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<(Schemas.MessageResponse[] | null)>(`/channels/${channel_id}/messages`, searchParams);
}

createMessage(channel_id: Schemas.SnowflakeType, body: Schemas.MessageCreateRequest, reason?: string) {
    return this.post<Schemas.MessageResponse>(`/channels/${channel_id}/messages`, getFormData(body, (body as any)?.attachments), reason);
}

bulkDeleteMessages(channel_id: Schemas.SnowflakeType, body: {
    "messages": Schemas.SnowflakeType[];
}, reason?: string) {
    return this.post<void>(`/channels/${channel_id}/messages/bulk-delete`, body, reason);
}

listPins(channel_id: Schemas.SnowflakeType, { before, limit }: {
    before?: string;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<Schemas.PinnedMessagesResponse>(`/channels/${channel_id}/messages/pins`, searchParams);
}

createPin(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.put<void>(`/channels/${channel_id}/messages/pins/${message_id}`, undefined, reason);
}

deletePin(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/messages/pins/${message_id}`, reason);
}

getMessage(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType) {
    return this.get<Schemas.MessageResponse>(`/channels/${channel_id}/messages/${message_id}`);
}

deleteMessage(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/messages/${message_id}`, reason);
}

updateMessage(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, body: Schemas.MessageEditRequestPartial, reason?: string) {
    return this.patch<Schemas.MessageResponse>(`/channels/${channel_id}/messages/${message_id}`, getFormData(body, (body as any)?.attachments), reason);
}

crosspostMessage(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.post<Schemas.MessageResponse>(`/channels/${channel_id}/messages/${message_id}/crosspost`, undefined, reason);
}

deleteAllMessageReactions(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/messages/${message_id}/reactions`, reason);
}

listMessageReactionsByEmoji(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, { after, limit, type }: {
    after?: Schemas.SnowflakeType;
    limit?: number;
    type?: Schemas.ReactionTypes;
} = {}) {
    const searchParams = new URLSearchParams();
    if (after !== undefined)
        searchParams.append("after", after.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (type !== undefined)
        searchParams.append("type", type.toString());
    return this.get<Schemas.UserResponse[]>(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`, searchParams);
}

deleteAllMessageReactionsByEmoji(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}`, reason);
}

addMyMessageReaction(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, reason?: string) {
    return this.put<void>(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/@me`, undefined, reason);
}

deleteMyMessageReaction(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/@me`, reason);
}

deleteUserMessageReaction(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, emoji_name: string, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/messages/${message_id}/reactions/${emoji_name}/${user_id}`, reason);
}

createThreadFromMessage(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, body: Schemas.CreateTextThreadWithMessageRequest, reason?: string) {
    return this.post<Schemas.ThreadResponse>(`/channels/${channel_id}/messages/${message_id}/threads`, body, reason);
}

setChannelPermissionOverwrite(channel_id: Schemas.SnowflakeType, overwrite_id: Schemas.SnowflakeType, body: {
    "type"?: null | Schemas.ChannelPermissionOverwrites;
    "allow"?: number | null;
    "deny"?: number | null;
}, reason?: string) {
    return this.put<void>(`/channels/${channel_id}/permissions/${overwrite_id}`, body, reason);
}

deleteChannelPermissionOverwrite(channel_id: Schemas.SnowflakeType, overwrite_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/permissions/${overwrite_id}`, reason);
}

deprecatedListPins(channel_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.MessageResponse[] | null)>(`/channels/${channel_id}/pins`);
}

deprecatedCreatePin(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.put<void>(`/channels/${channel_id}/pins/${message_id}`, undefined, reason);
}

deprecatedDeletePin(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/pins/${message_id}`, reason);
}

getAnswerVoters(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, answer_id: number, { after, limit }: {
    after?: Schemas.SnowflakeType;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (after !== undefined)
        searchParams.append("after", after.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<Schemas.PollAnswerDetailsResponse>(`/channels/${channel_id}/polls/${message_id}/answers/${answer_id}`, searchParams);
}

pollExpire(channel_id: Schemas.SnowflakeType, message_id: Schemas.SnowflakeType, reason?: string) {
    return this.post<Schemas.MessageResponse>(`/channels/${channel_id}/polls/${message_id}/expire`, undefined, reason);
}

addGroupDMUser(channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: {
    "access_token"?: string | null;
    "nick"?: string | null;
}, reason?: string) {
    return this.put<(Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse) | void>(`/channels/${channel_id}/recipients/${user_id}`, body, reason);
}

deleteGroupDMUser(channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/recipients/${user_id}`, reason);
}

sendSoundboardSound(channel_id: Schemas.SnowflakeType, body: Schemas.SoundboardSoundSendRequest, reason?: string) {
    return this.post<void>(`/channels/${channel_id}/send-soundboard-sound`, body, reason);
}

listThreadMembers(channel_id: Schemas.SnowflakeType, { with_member, limit, after }: {
    with_member?: boolean;
    limit?: number;
    after?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_member !== undefined)
        searchParams.append("with_member", with_member.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    return this.get<Schemas.ThreadMemberResponse[]>(`/channels/${channel_id}/thread-members`, searchParams);
}

joinThread(channel_id: Schemas.SnowflakeType, reason?: string) {
    return this.put<void>(`/channels/${channel_id}/thread-members/@me`, undefined, reason);
}

leaveThread(channel_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/thread-members/@me`, reason);
}

getThreadMember(channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, { with_member }: {
    with_member?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_member !== undefined)
        searchParams.append("with_member", with_member.toString());
    return this.get<Schemas.ThreadMemberResponse>(`/channels/${channel_id}/thread-members/${user_id}`, searchParams);
}

addThreadMember(channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.put<void>(`/channels/${channel_id}/thread-members/${user_id}`, undefined, reason);
}

deleteThreadMember(channel_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/channels/${channel_id}/thread-members/${user_id}`, reason);
}

createThread(channel_id: Schemas.SnowflakeType, body: Schemas.CreateForumThreadRequest | Schemas.CreateTextThreadWithoutMessageRequest, reason?: string) {
    return this.post<Schemas.CreatedThreadResponse>(`/channels/${channel_id}/threads`, getFormData(body, (body as any)?.message?.attachments), reason);
}

listPrivateArchivedThreads(channel_id: Schemas.SnowflakeType, { before, limit }: {
    before?: string;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<Schemas.ThreadsResponse>(`/channels/${channel_id}/threads/archived/private`, searchParams);
}

listPublicArchivedThreads(channel_id: Schemas.SnowflakeType, { before, limit }: {
    before?: string;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<Schemas.ThreadsResponse>(`/channels/${channel_id}/threads/archived/public`, searchParams);
}

threadSearch(channel_id: Schemas.SnowflakeType, { name, slop, min_id, max_id, tag, tag_setting, archived, sort_by, sort_order, limit, offset }: {
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
    const searchParams = new URLSearchParams();
    if (name !== undefined)
        searchParams.append("name", name.toString());
    if (slop !== undefined)
        searchParams.append("slop", slop.toString());
    if (min_id !== undefined)
        searchParams.append("min_id", min_id.toString());
    if (max_id !== undefined)
        searchParams.append("max_id", max_id.toString());
    if (tag !== undefined)
        searchParams.append("tag", tag.toString());
    if (tag_setting !== undefined)
        searchParams.append("tag_setting", tag_setting.toString());
    if (archived !== undefined)
        searchParams.append("archived", archived.toString());
    if (sort_by !== undefined)
        searchParams.append("sort_by", sort_by.toString());
    if (sort_order !== undefined)
        searchParams.append("sort_order", sort_order.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (offset !== undefined)
        searchParams.append("offset", offset.toString());
    return this.get<Schemas.ThreadSearchResponse>(`/channels/${channel_id}/threads/search`, searchParams);
}

triggerTypingIndicator(channel_id: Schemas.SnowflakeType, reason?: string) {
    return this.post<Schemas.TypingIndicatorResponse | void>(`/channels/${channel_id}/typing`, undefined, reason);
}

listMyPrivateArchivedThreads(channel_id: Schemas.SnowflakeType, { before, limit }: {
    before?: Schemas.SnowflakeType;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<Schemas.ThreadsResponse>(`/channels/${channel_id}/users/@me/threads/archived/private`, searchParams);
}

listChannelWebhooks(channel_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)[] | null)>(`/channels/${channel_id}/webhooks`);
}

createWebhook(channel_id: Schemas.SnowflakeType, body: {
    "name": string;
    "avatar"?: string | null;
}, reason?: string) {
    return this.post<Schemas.GuildIncomingWebhookResponse>(`/channels/${channel_id}/webhooks`, body, reason);
}

getGateway() {
    return this.get<Schemas.GatewayResponse>("/gateway");
}

getBotGateway() {
    return this.get<Schemas.GatewayBotResponse>("/gateway/bot");
}

getGuildTemplate(code: string) {
    return this.get<Schemas.GuildTemplateResponse>(`/guilds/templates/${code}`);
}

getGuild(guild_id: Schemas.SnowflakeType, { with_counts }: {
    with_counts?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_counts !== undefined)
        searchParams.append("with_counts", with_counts.toString());
    return this.get<Schemas.GuildWithCountsResponse>(`/guilds/${guild_id}`, searchParams);
}

updateGuild(guild_id: Schemas.SnowflakeType, body: Schemas.GuildPatchRequestPartial, reason?: string) {
    return this.patch<Schemas.GuildResponse>(`/guilds/${guild_id}`, body, reason);
}

listGuildAuditLogEntries(guild_id: Schemas.SnowflakeType, { user_id, target_id, action_type, before, after, limit }: {
    user_id?: Schemas.SnowflakeType;
    target_id?: Schemas.SnowflakeType;
    action_type?: Schemas.AuditLogActionTypes;
    before?: Schemas.SnowflakeType;
    after?: Schemas.SnowflakeType;
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (user_id !== undefined)
        searchParams.append("user_id", user_id.toString());
    if (target_id !== undefined)
        searchParams.append("target_id", target_id.toString());
    if (action_type !== undefined)
        searchParams.append("action_type", action_type.toString());
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<Schemas.GuildAuditLogResponse>(`/guilds/${guild_id}/audit-logs`, searchParams);
}

listAutoModerationRules(guild_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse | null)[] | null)>(`/guilds/${guild_id}/auto-moderation/rules`);
}

createAutoModerationRule(guild_id: Schemas.SnowflakeType, body: Schemas.DefaultKeywordListUpsertRequest | Schemas.KeywordUpsertRequest | Schemas.MLSpamUpsertRequest | Schemas.MentionSpamUpsertRequest, reason?: string) {
    return this.post<(Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse)>(`/guilds/${guild_id}/auto-moderation/rules`, body, reason);
}

getAutoModerationRule(guild_id: Schemas.SnowflakeType, rule_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse)>(`/guilds/${guild_id}/auto-moderation/rules/${rule_id}`);
}

deleteAutoModerationRule(guild_id: Schemas.SnowflakeType, rule_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, reason);
}

updateAutoModerationRule(guild_id: Schemas.SnowflakeType, rule_id: Schemas.SnowflakeType, body: Schemas.DefaultKeywordListUpsertRequestPartial | Schemas.KeywordUpsertRequestPartial | Schemas.MLSpamUpsertRequestPartial | Schemas.MentionSpamUpsertRequestPartial, reason?: string) {
    return this.patch<(Schemas.DefaultKeywordRuleResponse | Schemas.KeywordRuleResponse | Schemas.MLSpamRuleResponse | Schemas.MentionSpamRuleResponse | Schemas.SpamLinkRuleResponse)>(`/guilds/${guild_id}/auto-moderation/rules/${rule_id}`, body, reason);
}

listGuildBans(guild_id: Schemas.SnowflakeType, { limit, before, after }: {
    limit?: number;
    before?: Schemas.SnowflakeType;
    after?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    return this.get<(Schemas.GuildBanResponse[] | null)>(`/guilds/${guild_id}/bans`, searchParams);
}

getGuildBan(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildBanResponse>(`/guilds/${guild_id}/bans/${user_id}`);
}

banUserFromGuild(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: Schemas.BanUserFromGuildRequest, reason?: string) {
    return this.put<void>(`/guilds/${guild_id}/bans/${user_id}`, body, reason);
}

unbanUserFromGuild(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/bans/${user_id}`, reason);
}

bulkBanUsersFromGuild(guild_id: Schemas.SnowflakeType, body: Schemas.BulkBanUsersRequest, reason?: string) {
    return this.post<Schemas.BulkBanUsersResponse | void>(`/guilds/${guild_id}/bulk-ban`, body, reason);
}

listGuildChannels(guild_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.GuildChannelResponse | Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse | Schemas.ThreadResponse)[] | null)>(`/guilds/${guild_id}/channels`);
}

createGuildChannel(guild_id: Schemas.SnowflakeType, body: Schemas.CreateGuildChannelRequest, reason?: string) {
    return this.post<Schemas.GuildChannelResponse>(`/guilds/${guild_id}/channels`, body, reason);
}

bulkUpdateGuildChannels(guild_id: Schemas.SnowflakeType, body: {
    "id"?: null | Schemas.SnowflakeType;
    "position"?: number | null;
    "parent_id"?: null | Schemas.SnowflakeType;
    "lock_permissions"?: boolean | null;
}[], reason?: string) {
    return this.patch<void>(`/guilds/${guild_id}/channels`, body, reason);
}

listGuildEmojis(guild_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.EmojiResponse[] | null)>(`/guilds/${guild_id}/emojis`);
}

createGuildEmoji(guild_id: Schemas.SnowflakeType, body: {
    "name": string;
    "image": string;
    "roles"?: (null | Schemas.SnowflakeType)[] | null;
}, reason?: string) {
    return this.post<Schemas.EmojiResponse>(`/guilds/${guild_id}/emojis`, body, reason);
}

getGuildEmoji(guild_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType) {
    return this.get<Schemas.EmojiResponse>(`/guilds/${guild_id}/emojis/${emoji_id}`);
}

deleteGuildEmoji(guild_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/emojis/${emoji_id}`, reason);
}

updateGuildEmoji(guild_id: Schemas.SnowflakeType, emoji_id: Schemas.SnowflakeType, body: {
    "name"?: string;
    "roles"?: (null | Schemas.SnowflakeType)[] | null;
}, reason?: string) {
    return this.patch<Schemas.EmojiResponse>(`/guilds/${guild_id}/emojis/${emoji_id}`, body, reason);
}

listGuildIntegrations(guild_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.DiscordIntegrationResponse | Schemas.ExternalConnectionIntegrationResponse | Schemas.GuildSubscriptionIntegrationResponse)[] | null)>(`/guilds/${guild_id}/integrations`);
}

deleteGuildIntegration(guild_id: Schemas.SnowflakeType, integration_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/integrations/${integration_id}`, reason);
}

listGuildInvites(guild_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse | null)[] | null)>(`/guilds/${guild_id}/invites`);
}

listGuildMembers(guild_id: Schemas.SnowflakeType, { limit, after }: {
    limit?: number;
    after?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    return this.get<Schemas.GuildMemberResponse[]>(`/guilds/${guild_id}/members`, searchParams);
}

updateMyGuildMember(guild_id: Schemas.SnowflakeType, body: {
    "nick"?: string | null;
    "avatar"?: string | null;
    "bio"?: string | null;
    "banner"?: string | null;
}, reason?: string) {
    return this.patch<Schemas.PrivateGuildMemberResponse>(`/guilds/${guild_id}/members/@me`, body, reason);
}

searchGuildMembers(guild_id: Schemas.SnowflakeType, { limit, query }: {
    limit?: number;
    query: string;
}) {
    const searchParams = new URLSearchParams();
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (query !== undefined)
        searchParams.append("query", query.toString());
    return this.get<Schemas.GuildMemberResponse[]>(`/guilds/${guild_id}/members/search`, searchParams);
}

getGuildMember(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildMemberResponse>(`/guilds/${guild_id}/members/${user_id}`);
}

addGuildMember(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: Schemas.BotAddGuildMemberRequest, reason?: string) {
    return this.put<Schemas.GuildMemberResponse | void>(`/guilds/${guild_id}/members/${user_id}`, body, reason);
}

deleteGuildMember(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/members/${user_id}`, reason);
}

updateGuildMember(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: {
    "nick"?: string | null;
    "roles"?: (null | Schemas.SnowflakeType)[] | null;
    "mute"?: boolean | null;
    "deaf"?: boolean | null;
    "channel_id"?: null | Schemas.SnowflakeType;
    "communication_disabled_until"?: string | null;
    "flags"?: number | null;
}, reason?: string) {
    return this.patch<Schemas.GuildMemberResponse | void>(`/guilds/${guild_id}/members/${user_id}`, body, reason);
}

addGuildMemberRole(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, reason?: string) {
    return this.put<void>(`/guilds/${guild_id}/members/${user_id}/roles/${role_id}`, undefined, reason);
}

deleteGuildMemberRole(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/members/${user_id}/roles/${role_id}`, reason);
}

getGuildNewMemberWelcome(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildHomeSettingsResponse | void>(`/guilds/${guild_id}/new-member-welcome`);
}

getGuildsOnboarding(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.UserGuildOnboardingResponse>(`/guilds/${guild_id}/onboarding`);
}

putGuildsOnboarding(guild_id: Schemas.SnowflakeType, body: Schemas.UpdateGuildOnboardingRequest, reason?: string) {
    return this.put<Schemas.GuildOnboardingResponse>(`/guilds/${guild_id}/onboarding`, body, reason);
}

getGuildPreview(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildPreviewResponse>(`/guilds/${guild_id}/preview`);
}

previewPruneGuild(guild_id: Schemas.SnowflakeType, { days, include_roles }: {
    days?: number;
    include_roles?: string | (null | Schemas.SnowflakeType)[];
} = {}) {
    const searchParams = new URLSearchParams();
    if (days !== undefined)
        searchParams.append("days", days.toString());
    if (include_roles !== undefined)
        searchParams.append("include_roles", include_roles.toString());
    return this.get<Schemas.GuildPruneResponse>(`/guilds/${guild_id}/prune`, searchParams);
}

pruneGuild(guild_id: Schemas.SnowflakeType, body: Schemas.PruneGuildRequest, reason?: string) {
    return this.post<Schemas.GuildPruneResponse>(`/guilds/${guild_id}/prune`, body, reason);
}

listGuildVoiceRegions(guild_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.VoiceRegionResponse[] | null)>(`/guilds/${guild_id}/regions`);
}

listGuildRoles(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildRoleResponse[]>(`/guilds/${guild_id}/roles`);
}

createGuildRole(guild_id: Schemas.SnowflakeType, body: Schemas.CreateRoleRequest, reason?: string) {
    return this.post<Schemas.GuildRoleResponse>(`/guilds/${guild_id}/roles`, body, reason);
}

bulkUpdateGuildRoles(guild_id: Schemas.SnowflakeType, body: Schemas.UpdateRolePositionsRequest[], reason?: string) {
    return this.patch<Schemas.GuildRoleResponse[]>(`/guilds/${guild_id}/roles`, body, reason);
}

guildRoleMemberCounts(guild_id: Schemas.SnowflakeType) {
    return this.get<{
        [key: string]: number;
    }>(`/guilds/${guild_id}/roles/member-counts`);
}

getGuildRole(guild_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildRoleResponse>(`/guilds/${guild_id}/roles/${role_id}`);
}

deleteGuildRole(guild_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/roles/${role_id}`, reason);
}

updateGuildRole(guild_id: Schemas.SnowflakeType, role_id: Schemas.SnowflakeType, body: Schemas.UpdateRoleRequestPartial, reason?: string) {
    return this.patch<Schemas.GuildRoleResponse>(`/guilds/${guild_id}/roles/${role_id}`, body, reason);
}

listGuildScheduledEvents(guild_id: Schemas.SnowflakeType, { with_user_count }: {
    with_user_count?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_user_count !== undefined)
        searchParams.append("with_user_count", with_user_count.toString());
    return this.get<((Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)[] | null)>(`/guilds/${guild_id}/scheduled-events`, searchParams);
}

createGuildScheduledEvent(guild_id: Schemas.SnowflakeType, body: Schemas.ExternalScheduledEventCreateRequest | Schemas.StageScheduledEventCreateRequest | Schemas.VoiceScheduledEventCreateRequest, reason?: string) {
    return this.post<(Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)>(`/guilds/${guild_id}/scheduled-events`, body, reason);
}

getGuildScheduledEvent(guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, { with_user_count }: {
    with_user_count?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_user_count !== undefined)
        searchParams.append("with_user_count", with_user_count.toString());
    return this.get<(Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)>(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, searchParams);
}

deleteGuildScheduledEvent(guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, reason);
}

updateGuildScheduledEvent(guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, body: Schemas.ExternalScheduledEventPatchRequestPartial | Schemas.StageScheduledEventPatchRequestPartial | Schemas.VoiceScheduledEventPatchRequestPartial, reason?: string) {
    return this.patch<(Schemas.ExternalScheduledEventResponse | Schemas.StageScheduledEventResponse | Schemas.VoiceScheduledEventResponse)>(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}`, body, reason);
}

listGuildScheduledEventUsers(guild_id: Schemas.SnowflakeType, guild_scheduled_event_id: Schemas.SnowflakeType, { with_member, limit, before, after }: {
    with_member?: boolean;
    limit?: number;
    before?: Schemas.SnowflakeType;
    after?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_member !== undefined)
        searchParams.append("with_member", with_member.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    return this.get<(Schemas.ScheduledEventUserResponse[] | null)>(`/guilds/${guild_id}/scheduled-events/${guild_scheduled_event_id}/users`, searchParams);
}

listGuildSoundboardSounds(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.ListGuildSoundboardSoundsResponse>(`/guilds/${guild_id}/soundboard-sounds`);
}

createGuildSoundboardSound(guild_id: Schemas.SnowflakeType, body: Schemas.SoundboardCreateRequest, reason?: string) {
    return this.post<Schemas.SoundboardSoundResponse>(`/guilds/${guild_id}/soundboard-sounds`, body, reason);
}

getGuildSoundboardSound(guild_id: Schemas.SnowflakeType, sound_id: Schemas.SnowflakeType) {
    return this.get<Schemas.SoundboardSoundResponse>(`/guilds/${guild_id}/soundboard-sounds/${sound_id}`);
}

deleteGuildSoundboardSound(guild_id: Schemas.SnowflakeType, sound_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/soundboard-sounds/${sound_id}`, reason);
}

updateGuildSoundboardSound(guild_id: Schemas.SnowflakeType, sound_id: Schemas.SnowflakeType, body: Schemas.SoundboardPatchRequestPartial, reason?: string) {
    return this.patch<Schemas.SoundboardSoundResponse>(`/guilds/${guild_id}/soundboard-sounds/${sound_id}`, body, reason);
}

listGuildStickers(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildStickerResponse[]>(`/guilds/${guild_id}/stickers`);
}

createGuildSticker(guild_id: Schemas.SnowflakeType, body: {
    "name": string;
    "tags": string;
    "description"?: string | null;
    "file": string;
}, reason?: string) {
    return this.post<Schemas.GuildStickerResponse>(`/guilds/${guild_id}/stickers`, body, reason);
}

getGuildSticker(guild_id: Schemas.SnowflakeType, sticker_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildStickerResponse>(`/guilds/${guild_id}/stickers/${sticker_id}`);
}

deleteGuildSticker(guild_id: Schemas.SnowflakeType, sticker_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/guilds/${guild_id}/stickers/${sticker_id}`, reason);
}

updateGuildSticker(guild_id: Schemas.SnowflakeType, sticker_id: Schemas.SnowflakeType, body: {
    "name"?: string;
    "tags"?: string;
    "description"?: string | null;
}, reason?: string) {
    return this.patch<Schemas.GuildStickerResponse>(`/guilds/${guild_id}/stickers/${sticker_id}`, body, reason);
}

listGuildTemplates(guild_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.GuildTemplateResponse[] | null)>(`/guilds/${guild_id}/templates`);
}

createGuildTemplate(guild_id: Schemas.SnowflakeType, body: {
    "name": string;
    "description"?: string | null;
}, reason?: string) {
    return this.post<Schemas.GuildTemplateResponse>(`/guilds/${guild_id}/templates`, body, reason);
}

syncGuildTemplate(guild_id: Schemas.SnowflakeType, code: string, reason?: string) {
    return this.put<Schemas.GuildTemplateResponse>(`/guilds/${guild_id}/templates/${code}`, undefined, reason);
}

deleteGuildTemplate(guild_id: Schemas.SnowflakeType, code: string, reason?: string) {
    return this.delete<Schemas.GuildTemplateResponse>(`/guilds/${guild_id}/templates/${code}`, reason);
}

updateGuildTemplate(guild_id: Schemas.SnowflakeType, code: string, body: {
    "name"?: string;
    "description"?: string | null;
}, reason?: string) {
    return this.patch<Schemas.GuildTemplateResponse>(`/guilds/${guild_id}/templates/${code}`, body, reason);
}

getActiveGuildThreads(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.ThreadsResponse>(`/guilds/${guild_id}/threads/active`);
}

getGuildVanityUrl(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.VanityURLResponse>(`/guilds/${guild_id}/vanity-url`);
}

getSelfVoiceState(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.VoiceStateResponse>(`/guilds/${guild_id}/voice-states/@me`);
}

updateSelfVoiceState(guild_id: Schemas.SnowflakeType, body: Schemas.UpdateSelfVoiceStateRequestPartial, reason?: string) {
    return this.patch<void>(`/guilds/${guild_id}/voice-states/@me`, body, reason);
}

getVoiceState(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType) {
    return this.get<Schemas.VoiceStateResponse>(`/guilds/${guild_id}/voice-states/${user_id}`);
}

updateVoiceState(guild_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: Schemas.UpdateVoiceStateRequestPartial, reason?: string) {
    return this.patch<void>(`/guilds/${guild_id}/voice-states/${user_id}`, body, reason);
}

getGuildWebhooks(guild_id: Schemas.SnowflakeType) {
    return this.get<((Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)[] | null)>(`/guilds/${guild_id}/webhooks`);
}

getGuildWelcomeScreen(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.GuildWelcomeScreenResponse>(`/guilds/${guild_id}/welcome-screen`);
}

updateGuildWelcomeScreen(guild_id: Schemas.SnowflakeType, body: Schemas.WelcomeScreenPatchRequestPartial, reason?: string) {
    return this.patch<Schemas.GuildWelcomeScreenResponse>(`/guilds/${guild_id}/welcome-screen`, body, reason);
}

getGuildWidgetSettings(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.WidgetSettingsResponse>(`/guilds/${guild_id}/widget`);
}

updateGuildWidgetSettings(guild_id: Schemas.SnowflakeType, body: {
    "channel_id"?: null | Schemas.SnowflakeType;
    "enabled"?: boolean | null;
}, reason?: string) {
    return this.patch<Schemas.WidgetSettingsResponse>(`/guilds/${guild_id}/widget`, body, reason);
}

getGuildWidget(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.WidgetResponse>(`/guilds/${guild_id}/widget.json`);
}

getGuildWidgetPng(guild_id: Schemas.SnowflakeType, { style }: {
    style?: Schemas.WidgetImageStyles;
} = {}) {
    const searchParams = new URLSearchParams();
    if (style !== undefined)
        searchParams.append("style", style.toString());
    return this.get<unknown>(`/guilds/${guild_id}/widget.png`, searchParams);
}

createInteractionResponse(interaction_id: Schemas.SnowflakeType, interaction_token: string, body: Schemas.ApplicationCommandAutocompleteCallbackRequest | Schemas.CreateMessageInteractionCallbackRequest | Schemas.DeferredCreateMessageInteractionCallbackRequest | Schemas.LaunchActivityInteractionCallbackRequest | Schemas.ModalInteractionCallbackRequest | Schemas.PongInteractionCallbackRequest | Schemas.UpdateMessageInteractionCallbackRequest | Schemas.DeferredUpdateMessageInteractionCallbackRequest, reason?: string, { with_response }: {
    with_response?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_response !== undefined)
        searchParams.append("with_response", with_response.toString());
    return this.post<Schemas.InteractionCallbackResponse | void>(`/interactions/${interaction_id}/${interaction_token}/callback`, getFormData(body, (body as any)?.data?.attachments), reason, searchParams);
}

inviteResolve(code: string, { with_counts, guild_scheduled_event_id }: {
    with_counts?: boolean;
    guild_scheduled_event_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (with_counts !== undefined)
        searchParams.append("with_counts", with_counts.toString());
    if (guild_scheduled_event_id !== undefined)
        searchParams.append("guild_scheduled_event_id", guild_scheduled_event_id.toString());
    return this.get<(Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse)>(`/invites/${code}`, searchParams);
}

inviteRevoke(code: string, reason?: string) {
    return this.delete<(Schemas.FriendInviteResponse | Schemas.GroupDMInviteResponse | Schemas.GuildInviteResponse)>(`/invites/${code}`, reason);
}

getInviteTargetUsers(code: string) {
    return this.get<unknown>(`/invites/${code}/target-users`);
}

updateInviteTargetUsers(code: string, body: {
    "target_users_file": string;
}, reason?: string) {
    return this.put<void>(`/invites/${code}/target-users`, body, reason);
}

getInviteTargetUsersJobStatus(code: string) {
    return this.get<Schemas.TargetUsersJobStatusResponse>(`/invites/${code}/target-users/job-status`);
}

createOrJoinLobby(body: {
    "idle_timeout_seconds"?: number | null;
    "lobby_metadata"?: {
        [key: string]: string;
    } | null;
    "member_metadata"?: {
        [key: string]: string;
    } | null;
    "secret": string;
    "flags"?: null | 1;
}, reason?: string) {
    return this.put<Schemas.LobbyResponse>("/lobbies", body, reason);
}

createLobby(body: {
    "idle_timeout_seconds"?: number | null;
    "members"?: Schemas.LobbyMemberRequest[] | null;
    "metadata"?: {
        [key: string]: string;
    } | null;
    "flags"?: null | 1;
    "override_event_webhooks_url"?: string | null;
}, reason?: string) {
    return this.post<Schemas.LobbyResponse>("/lobbies", body, reason);
}

getLobby(lobby_id: Schemas.SnowflakeType) {
    return this.get<Schemas.LobbyResponse>(`/lobbies/${lobby_id}`);
}

editLobby(lobby_id: Schemas.SnowflakeType, body: {
    "idle_timeout_seconds"?: number | null;
    "metadata"?: {
        [key: string]: string;
    } | null;
    "members"?: Schemas.LobbyMemberRequest[] | null;
    "flags"?: null | 1;
    "override_event_webhooks_url"?: string | null;
}, reason?: string) {
    return this.patch<Schemas.LobbyResponse>(`/lobbies/${lobby_id}`, body, reason);
}

editLobbyChannelLink(lobby_id: Schemas.SnowflakeType, body: {
    "channel_id"?: null | Schemas.SnowflakeType;
}, reason?: string) {
    return this.patch<Schemas.LobbyResponse>(`/lobbies/${lobby_id}/channel-linking`, body, reason);
}

leaveLobby(lobby_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/lobbies/${lobby_id}/members/@me`, reason);
}

createLinkedLobbyGuildInviteForSelf(lobby_id: Schemas.SnowflakeType, reason?: string) {
    return this.post<Schemas.LobbyGuildInviteResponse>(`/lobbies/${lobby_id}/members/@me/invites`, undefined, reason);
}

bulkUpdateLobbyMembers(lobby_id: Schemas.SnowflakeType, body: Schemas.BulkLobbyMemberRequest[] | null, reason?: string) {
    return this.post<(Schemas.LobbyMemberResponse[] | null)>(`/lobbies/${lobby_id}/members/bulk`, body, reason);
}

addLobbyMember(lobby_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, body: {
    "metadata"?: {
        [key: string]: string;
    } | null;
    "flags"?: null | 1;
}, reason?: string) {
    return this.put<Schemas.LobbyMemberResponse>(`/lobbies/${lobby_id}/members/${user_id}`, body, reason);
}

deleteLobbyMember(lobby_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/lobbies/${lobby_id}/members/${user_id}`, reason);
}

createLinkedLobbyGuildInviteForUser(lobby_id: Schemas.SnowflakeType, user_id: Schemas.SnowflakeType, reason?: string) {
    return this.post<Schemas.LobbyGuildInviteResponse>(`/lobbies/${lobby_id}/members/${user_id}/invites`, undefined, reason);
}

getLobbyMessages(lobby_id: Schemas.SnowflakeType, { limit }: {
    limit?: number;
} = {}) {
    const searchParams = new URLSearchParams();
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    return this.get<(Schemas.LobbyMessageResponse[] | null)>(`/lobbies/${lobby_id}/messages`, searchParams);
}

createLobbyMessage(lobby_id: Schemas.SnowflakeType, body: Schemas.SDKMessageRequest, reason?: string) {
    return this.post<Schemas.LobbyMessageResponse>(`/lobbies/${lobby_id}/messages`, getFormData(body, (body as any)?.attachments), reason);
}

getMyOauth2Authorization() {
    return this.get<Schemas.OAuth2GetAuthorizationResponse>("/oauth2/@me");
}

getMyOauth2Application() {
    return this.get<Schemas.PrivateApplicationResponse>("/oauth2/applications/@me");
}

getPublicKeys() {
    return this.get<Schemas.OAuth2GetKeys>("/oauth2/keys");
}

getOpenidConnectUserinfo() {
    return this.get<Schemas.OAuth2GetOpenIDConnectUserInfoResponse>("/oauth2/userinfo");
}

partnerSdkUnmergeProvisionalAccount(body: {
    "client_id": Schemas.SnowflakeType;
    "client_secret"?: string | null;
    "external_auth_token": string;
    "external_auth_type": Schemas.ApplicationIdentityProviderAuthType;
}, reason?: string) {
    return this.post<void>("/partner-sdk/provisional-accounts/unmerge", body, reason);
}

botPartnerSdkUnmergeProvisionalAccount(body: {
    "external_user_id": string;
}, reason?: string) {
    return this.post<void>("/partner-sdk/provisional-accounts/unmerge/bot", body, reason);
}

partnerSdkToken(body: {
    "client_id": Schemas.SnowflakeType;
    "client_secret"?: string | null;
    "external_auth_token": string;
    "external_auth_type": Schemas.ApplicationIdentityProviderAuthType;
}, reason?: string) {
    return this.post<Schemas.ProvisionalTokenResponse>("/partner-sdk/token", body, reason);
}

botPartnerSdkToken(body: {
    "external_user_id": string;
    "preferred_global_name"?: string | null;
}, reason?: string) {
    return this.post<Schemas.ProvisionalTokenResponse>("/partner-sdk/token/bot", body, reason);
}

getSoundboardDefaultSounds() {
    return this.get<Schemas.SoundboardSoundResponse[]>("/soundboard-default-sounds");
}

createStageInstance(body: {
    "topic": string;
    "channel_id": Schemas.SnowflakeType;
    "privacy_level"?: null | Schemas.StageInstancesPrivacyLevels;
    "guild_scheduled_event_id"?: null | Schemas.SnowflakeType;
    "send_start_notification"?: boolean | null;
}, reason?: string) {
    return this.post<Schemas.StageInstanceResponse>("/stage-instances", body, reason);
}

getStageInstance(channel_id: Schemas.SnowflakeType) {
    return this.get<Schemas.StageInstanceResponse>(`/stage-instances/${channel_id}`);
}

deleteStageInstance(channel_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/stage-instances/${channel_id}`, reason);
}

updateStageInstance(channel_id: Schemas.SnowflakeType, body: {
    "topic"?: string;
    "privacy_level"?: Schemas.StageInstancesPrivacyLevels;
}, reason?: string) {
    return this.patch<Schemas.StageInstanceResponse>(`/stage-instances/${channel_id}`, body, reason);
}

listStickerPacks() {
    return this.get<Schemas.StickerPackCollectionResponse>("/sticker-packs");
}

getStickerPack(pack_id: Schemas.SnowflakeType) {
    return this.get<Schemas.StickerPackResponse>(`/sticker-packs/${pack_id}`);
}

getSticker(sticker_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.GuildStickerResponse | Schemas.StandardStickerResponse)>(`/stickers/${sticker_id}`);
}

getMyUser() {
    return this.get<Schemas.UserPIIResponse>("/users/@me");
}

updateMyUser(body: Schemas.BotAccountPatchRequest, reason?: string) {
    return this.patch<Schemas.UserPIIResponse>("/users/@me", body, reason);
}

getCurrentUserApplicationEntitlements(application_id: Schemas.SnowflakeType, { sku_ids, exclude_consumed }: {
    sku_ids?: string | (null | Schemas.SnowflakeType)[];
    exclude_consumed?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (sku_ids !== undefined)
        searchParams.append("sku_ids", sku_ids.toString());
    if (exclude_consumed !== undefined)
        searchParams.append("exclude_consumed", exclude_consumed.toString());
    return this.get<(null | Schemas.EntitlementResponse)[]>(`/users/@me/applications/${application_id}/entitlements`, searchParams);
}

getApplicationUserRoleConnection(application_id: Schemas.SnowflakeType) {
    return this.get<Schemas.ApplicationUserRoleConnectionResponse>(`/users/@me/applications/${application_id}/role-connection`);
}

updateApplicationUserRoleConnection(application_id: Schemas.SnowflakeType, body: Schemas.UpdateApplicationUserRoleConnectionRequest, reason?: string) {
    return this.put<Schemas.ApplicationUserRoleConnectionResponse>(`/users/@me/applications/${application_id}/role-connection`, body, reason);
}

deleteApplicationUserRoleConnection(application_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/users/@me/applications/${application_id}/role-connection`, reason);
}

createDM(body: Schemas.CreatePrivateChannelRequest, reason?: string) {
    return this.post<(Schemas.PrivateChannelResponse | Schemas.PrivateGroupChannelResponse)>("/users/@me/channels", body, reason);
}

listMyConnections() {
    return this.get<(Schemas.ConnectedAccountResponse[] | null)>("/users/@me/connections");
}

listMyGuilds({ before, after, limit, with_counts }: {
    before?: Schemas.SnowflakeType;
    after?: Schemas.SnowflakeType;
    limit?: number;
    with_counts?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (before !== undefined)
        searchParams.append("before", before.toString());
    if (after !== undefined)
        searchParams.append("after", after.toString());
    if (limit !== undefined)
        searchParams.append("limit", limit.toString());
    if (with_counts !== undefined)
        searchParams.append("with_counts", with_counts.toString());
    return this.get<(Schemas.MyGuildResponse[] | null)>("/users/@me/guilds", searchParams);
}

leaveGuild(guild_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/users/@me/guilds/${guild_id}`, reason);
}

getMyGuildMember(guild_id: Schemas.SnowflakeType) {
    return this.get<Schemas.PrivateGuildMemberResponse>(`/users/@me/guilds/${guild_id}/member`);
}

getUser(user_id: Schemas.SnowflakeType) {
    return this.get<Schemas.UserResponse>(`/users/${user_id}`);
}

listVoiceRegions() {
    return this.get<(Schemas.VoiceRegionResponse[] | null)>("/voice/regions");
}

getWebhook(webhook_id: Schemas.SnowflakeType) {
    return this.get<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>(`/webhooks/${webhook_id}`);
}

deleteWebhook(webhook_id: Schemas.SnowflakeType, reason?: string) {
    return this.delete<void>(`/webhooks/${webhook_id}`, reason);
}

updateWebhook(webhook_id: Schemas.SnowflakeType, body: {
    "name"?: string;
    "avatar"?: string | null;
    "channel_id"?: null | Schemas.SnowflakeType;
}, reason?: string) {
    return this.patch<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>(`/webhooks/${webhook_id}`, body, reason);
}

getWebhookByToken(webhook_id: Schemas.SnowflakeType, webhook_token: string) {
    return this.get<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>(`/webhooks/${webhook_id}/${webhook_token}`);
}

executeWebhook(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.IncomingWebhookRequestPartial | Schemas.IncomingWebhookUpdateRequestPartial, reason?: string, { wait, thread_id, with_components }: {
    wait?: boolean;
    thread_id?: Schemas.SnowflakeType;
    with_components?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (wait !== undefined)
        searchParams.append("wait", wait.toString());
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    if (with_components !== undefined)
        searchParams.append("with_components", with_components.toString());
    return this.post<Schemas.MessageResponse | void>(`/webhooks/${webhook_id}/${webhook_token}`, getFormData(body, (body as any)?.attachments), reason, searchParams);
}

deleteWebhookByToken(webhook_id: Schemas.SnowflakeType, webhook_token: string, reason?: string) {
    return this.delete<void>(`/webhooks/${webhook_id}/${webhook_token}`, reason);
}

updateWebhookByToken(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: {
    "name"?: string;
    "avatar"?: string | null;
}, reason?: string) {
    return this.patch<(Schemas.ApplicationIncomingWebhookResponse | Schemas.ChannelFollowerWebhookResponse | Schemas.GuildIncomingWebhookResponse)>(`/webhooks/${webhook_id}/${webhook_token}`, body, reason);
}

executeGithubCompatibleWebhook(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.GithubWebhook, reason?: string, { wait, thread_id }: {
    wait?: boolean;
    thread_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (wait !== undefined)
        searchParams.append("wait", wait.toString());
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    return this.post<void>(`/webhooks/${webhook_id}/${webhook_token}/github`, body, reason, searchParams);
}

getOriginalWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, { thread_id }: {
    thread_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    return this.get<Schemas.MessageResponse>(`/webhooks/${webhook_id}/${webhook_token}/messages/@original`, searchParams);
}

deleteOriginalWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, reason?: string, { thread_id }: {
    thread_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    return this.delete<void>(`/webhooks/${webhook_id}/${webhook_token}/messages/@original`, reason, searchParams);
}

updateOriginalWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.IncomingWebhookUpdateRequestPartial, reason?: string, { thread_id, with_components }: {
    thread_id?: Schemas.SnowflakeType;
    with_components?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    if (with_components !== undefined)
        searchParams.append("with_components", with_components.toString());
    return this.patch<Schemas.MessageResponse>(`/webhooks/${webhook_id}/${webhook_token}/messages/@original`, getFormData(body, (body as any)?.attachments), reason, searchParams);
}

getWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, message_id: Schemas.SnowflakeType, { thread_id }: {
    thread_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    return this.get<Schemas.MessageResponse>(`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, searchParams);
}

deleteWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, message_id: Schemas.SnowflakeType, reason?: string, { thread_id }: {
    thread_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    return this.delete<void>(`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, reason, searchParams);
}

updateWebhookMessage(webhook_id: Schemas.SnowflakeType, webhook_token: string, message_id: Schemas.SnowflakeType, body: Schemas.IncomingWebhookUpdateRequestPartial, reason?: string, { thread_id, with_components }: {
    thread_id?: Schemas.SnowflakeType;
    with_components?: boolean;
} = {}) {
    const searchParams = new URLSearchParams();
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    if (with_components !== undefined)
        searchParams.append("with_components", with_components.toString());
    return this.patch<Schemas.MessageResponse>(`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`, getFormData(body, (body as any)?.attachments), reason, searchParams);
}

executeSlackCompatibleWebhook(webhook_id: Schemas.SnowflakeType, webhook_token: string, body: Schemas.SlackWebhook, reason?: string, { wait, thread_id }: {
    wait?: boolean;
    thread_id?: Schemas.SnowflakeType;
} = {}) {
    const searchParams = new URLSearchParams();
    if (wait !== undefined)
        searchParams.append("wait", wait.toString());
    if (thread_id !== undefined)
        searchParams.append("thread_id", thread_id.toString());
    return this.post<(string | null)>(`/webhooks/${webhook_id}/${webhook_token}/slack`, body, reason, searchParams);
}
}