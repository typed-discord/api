import { Public, Bot } from "../src/clients.mts";
import { ApplicationCommandType, AutomodActionType, AutomodEventType, AutomodTriggerType, AvailableLocalesEnum, ChannelTypes, GuildExplicitContentFilterTypes, GuildFeatures, GuildOnboardingMode, GuildScheduledEventEntityTypes, GuildScheduledEventPrivacyLevels, MetadataItemTypes, RecurrenceRuleFrequencies, StageInstancesPrivacyLevels, VerificationLevels, type SnowflakeType } from "../src/types.mts";

import test from 'node:test'
import assert from 'node:assert/strict'

const applicationId = process.env["APPLICATION_ID"] as SnowflakeType;
if (!applicationId) throw new Error("Bot ID not specified");
const testGuildId = process.env["GUILD_ID"] as SnowflakeType;
if (!testGuildId) throw new Error("Guild ID not specified");
const channelId = process.env["CHANNEL_ID"] as SnowflakeType;
if (!channelId) throw new Error("Channel ID not specified");
const botToken = process.env["BOT_TOKEN"];
if (!botToken) throw new Error("Bot token not specified");
const bot = new Bot(botToken);
const publicClient = new Public();

test("Application Role Connection Metadata", async () => {
    await testApplicationRoleConnectionMetadata(applicationId);
});

test("Application", async () => {
    await testApplication(applicationId);
});

test("Audit Log", async () => {
    await testAuditLog(testGuildId);
});

test("Auto Moderation", async () => {
    await testAutoModeration(testGuildId);
});

test("Channel", async () => {
    await testChannel(channelId);
});

test("Guild Template", async () => {
    await testGuildTemplate(testGuildId);
});

test("Stickers", async () => {
    await testStickers();
});

test("Stage Instance", async () => {
    await testStageInstance("1506623815889846273");
});

test("Application Commands", async () => {
    await testApplicationCommands(applicationId);
});

test("Application Guild Commands", async () => {
    await testApplicationGuildCommands(applicationId, testGuildId);
});

test("Application Emojis", async () => {
    await testApplicationEmojis(applicationId);
});

test("Guild", async () => {
    await testGuild(testGuildId);
});

test("Guild Channels", async () => {
    await testGuildChannels(testGuildId);
});

test("Guild Events", async () => {
    await testGuildEvents(testGuildId);
});

test("Guild Roles", async () => {
    await testGuildRoles(testGuildId);
});

test("Polls", async () => {
    await testPolls(channelId);
});

test("Guild Members", async () => {
    await testGuildMembers(testGuildId);
});

test("Webhooks", async () => {
    await testWebhooks(testGuildId, channelId);
});

test("Soundboard", async () => {
    await testSoundboard(testGuildId);
});

export async function testApplicationRoleConnectionMetadata(applicationId: SnowflakeType) {
    await bot.updateApplicationRoleConnectionsMetadata(applicationId, [{
        name: "Test",
        description: "Test",
        type: MetadataItemTypes.BOOLEAN_EQUAL,
        key: "test"
    }]);
    const metadata = (await bot.getApplicationRoleConnectionsMetadata(applicationId))!;
    assert(metadata.length === 1);
    const metadata2 = (await bot.updateApplicationRoleConnectionsMetadata(applicationId, []))!;
    assert(metadata2.length === 0);
}

export async function testApplication(applicationId: SnowflakeType) {
    await bot.updateMyApplication({
        "description": {
            "default": "Default Description",
            "localizations": {
                "en-US": "English Description",
                "fr": "Description Française"
            }
        }
    });
    const myApplication = await bot.getMyApplication();
    await bot.updateApplication(applicationId, {
        "description": {
            "default": "Default Description",
            "localizations": {
                "en-US": "English Description",
                "fr": "Description Française"
            }
        }
    });
    const application = await bot.getApplication(applicationId);
}

export async function testAuditLog(guildId: SnowflakeType) {
    const logs = await bot.listGuildAuditLogEntries(guildId);
}

export async function testAutoModeration(guildId: SnowflakeType) {
    const rule = await bot.createAutoModerationRule(guildId, {
        eventType: AutomodEventType.MESSAGE_SEND,
        name: "Test Rule",
        triggerType: AutomodTriggerType.KEYWORD,
        actions: [{
            type: AutomodActionType.BLOCK_MESSAGE
        }],
        triggerMetadata: {
            keywordFilter: ["@everyone", "@here"]
        }
    });
    const rules = await bot.listAutoModerationRules(guildId);
    console.assert(rules!.some(r => r!.id === rule.id));
    const rule2 = await bot.getAutoModerationRule(guildId, rule.id);
    const edited = await bot.updateAutoModerationRule(guildId, rule.id, {
        "name": "Edited Test Rule"
    });
    await bot.deleteAutoModerationRule(guildId, edited.id);
}

export async function testChannel(channelId: SnowflakeType) {
    const privateThread = await bot.createThread(channelId, {
        "name": "Private Test Thread",
        "type": ChannelTypes.PRIVATE_THREAD,
        "message": {
            "content": "Test Thread Message"
        }
    });

    const threadMembers = await bot.listThreadMembers(privateThread.id);
    console.assert(threadMembers.some(member => member.userId === applicationId));

    await bot.leaveThread(privateThread.id);
    await bot.joinThread(privateThread.id);

    const invite = await bot.createChannelInvite(channelId, {});
    const invites = await bot.listChannelInvites(channelId);
    await bot.inviteRevoke(invite!.code);

    await bot.triggerTypingIndicator(channelId);
    const message = await bot.createMessage(channelId, {
        content: "test"
    });

    const threadFromMessage = await bot.createThreadFromMessage(channelId, message.id, {
        "name": "Test Thread From Message"
    });

    await bot.deleteThreadMember(threadFromMessage.id, applicationId);
    await bot.addThreadMember(threadFromMessage.id, applicationId);
    const threadMember = await bot.getThreadMember(threadFromMessage.id, applicationId);

    const threads = await bot.threadSearch(channelId, {
        "name": "Thread"
    });

    await bot.updateChannel(privateThread.id, {
        "archived": true,
        "locked": true
    });

    const privateArchivedThreads = await bot.listPrivateArchivedThreads(channelId);
    console.assert(privateArchivedThreads.threads.some(thread => thread.id === privateThread.id));
    const myPrivateArchivedThreads = await bot.listMyPrivateArchivedThreads(channelId);
    console.assert(myPrivateArchivedThreads.threads.some(thread => thread.id === privateThread.id))

    await bot.deleteChannel(privateThread.id);

    await bot.updateChannel(threadFromMessage.id, {
        "archived": true,
        "locked": true
    });

    const publicArchivedThreads = await bot.listPublicArchivedThreads(channelId);
    console.assert(publicArchivedThreads.threads.some(thread => thread.id === threadFromMessage.id));
    await bot.deleteChannel(threadFromMessage.id);

    await bot.updateMessage(message.channelId, message.id, {
        content: "test2"
    });

    await bot.createPin(channelId, message.id);
    const pins = await bot.listPins(channelId);
    console.assert(pins.items.some(pin => pin.message.id === message.id));
    await bot.deletePin(channelId, message.id);

    await bot.deprecatedCreatePin(channelId, message.id);
    const pinsDeprecated = await bot.deprecatedListPins(channelId);
    console.assert(pinsDeprecated!.some(pin => pin.id === message.id));
    await bot.deprecatedDeletePin(channelId, message.id);

    await bot.addMyMessageReaction(channelId, message.id, "👍");
    const emojis = await bot.listMessageReactionsByEmoji(channelId, message.id, "👍");
    console.assert(emojis.length === 1);
    await bot.deleteMyMessageReaction(channelId, message.id, "👍");
    await bot.addMyMessageReaction(channelId, message.id, "👎");
    await bot.deleteUserMessageReaction(channelId, message.id, "👎", applicationId);
    await bot.deleteAllMessageReactionsByEmoji(channelId, message.id, "👍");
    await bot.deleteAllMessageReactions(channelId, message.id);

    await bot.deleteMessage(message.channelId, message.id);
}

export async function testGuildTemplate(guildId: SnowflakeType) {
    const template = await bot.createGuildTemplate(guildId, {
        name: "Test Template",
        description: "Test Template Description"
    });
    const templates = await bot.listGuildTemplates(guildId);
    const template2 = await publicClient.getGuildTemplate(template.code);
    await bot.updateGuildTemplate(guildId, template.code, {
        name: "Updated Test Template",
        description: "Updated Test Template Description"
    });
    await bot.syncGuildTemplate(guildId, template.code);
    await bot.deleteGuildTemplate(guildId, template.code);
}

export async function testStickers() {
    const packs = await publicClient.listStickerPacks();
    const pack = await bot.getStickerPack(packs.stickerPacks[0]!.id);
    const sticker = await bot.getSticker(pack.stickers[0]!.id);
    /*const guildSticker = await bot.createGuildSticker(testGuildId, {
        name: "Test Sticker",
        description: "A test sticker",
        tags: "sticker",
        file: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2NfZkAAAAASUVORK5CYII=`
    });*/
    const guildStikers = await bot.listGuildStickers(testGuildId);
    const sticker2 = await bot.getGuildSticker(testGuildId, "1506627304279904276");
    await bot.updateGuildSticker(testGuildId, "1506627304279904276", {
        name: "Updated Sticker Name"
    });
    //await bot.deleteGuildSticker(testGuildId, "1506627304279904276");
}

export async function testStageInstance(channelId: SnowflakeType) {
    const instance = await bot.createStageInstance({
        channelId,
        topic: "A stage instance",
        privacyLevel: StageInstancesPrivacyLevels.PUBLIC,
        sendStartNotification: true
    });
    await bot.getStageInstance(channelId);
    await bot.updateStageInstance(channelId, {
        topic: "A stage instance updated"
    });
    await bot.deleteStageInstance(channelId);
}

export async function testApplicationCommands(applicationId: SnowflakeType) {
    await bot.bulkSetApplicationCommands(applicationId, []);

    const command = await bot.createApplicationCommand(applicationId, {
        name: "test",
        description: "Test command",
        type: ApplicationCommandType.CHAT
    });
    const commands = await bot.listApplicationCommands(applicationId);
    await bot.updateApplicationCommand(applicationId, command.id, {
        name: "edited_test"
    });
    const command2 = await bot.getApplicationCommand(applicationId, command.id);
    await bot.deleteApplicationCommand(applicationId, command.id);
}

export async function testApplicationGuildCommands(applicationId: SnowflakeType, guildId: SnowflakeType) {
    await bot.bulkSetGuildApplicationCommands(applicationId, guildId, []);
    const command = await bot.createGuildApplicationCommand(applicationId, guildId, {
        name: "test",
        description: "Test command",
        type: ApplicationCommandType.CHAT
    });
    const commands = await bot.listGuildApplicationCommands(applicationId, guildId);
    const permissions = await bot.listGuildApplicationCommandPermissions(applicationId, guildId);
    await bot.updateGuildApplicationCommand(applicationId, guildId, command.id, {
        name: "edited_test"
    });
    const command2 = await bot.getGuildApplicationCommand(applicationId, guildId, command.id);
    await bot.deleteGuildApplicationCommand(applicationId, guildId, command.id);
}

export async function testApplicationEmojis(applicationId: SnowflakeType) {
    const emoji = await bot.createApplicationEmoji(applicationId, {
        "name": "test_emoji",
        "image": `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2NfZkAAAAASUVORK5CYII=`
    });
    const emojis = await bot.listApplicationEmojis(applicationId);
    const emoji2 = await bot.getApplicationEmoji(applicationId, emoji.id);
    await bot.updateApplicationEmoji(applicationId, emoji.id, {
        name: "updated_test_emoji"
    });
    await bot.deleteApplicationEmoji(applicationId, emoji.id);
}

export async function testGuild(guildId: SnowflakeType) {
    const voices = await bot.listGuildVoiceRegions(guildId);
    const incidents = await bot.updateGuildIncidentActions(guildId, {
        dmsDisabledUntil: new Date(Date.now() + 60 * 60 * 1_000)
    });
    const channel1 = await bot.createGuildChannel(guildId, {
        name: "test-channel-1",
        type: ChannelTypes.GUILD_TEXT
    });
    const channel2 = await bot.createGuildChannel(guildId, {
        name: "test-channel-2",
        type: ChannelTypes.GUILD_TEXT
    });

    const guild = await bot.getGuild(guildId);

    await bot.updateGuild(guildId, {
        features: guild.features.add(GuildFeatures.COMMUNITY),
        rulesChannelId: channel1.id,
        publicUpdatesChannelId: channel2.id,
        verificationLevel: VerificationLevels.VERY_HIGH,
        explicitContentFilter: GuildExplicitContentFilterTypes.ALL_MEMBERS
    });

    const emoji = await bot.createGuildEmoji(guildId, {
        "name": "test_emoji",
        "image": `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2NfZkAAAAASUVORK5CYII=`
    });
    const emojis = await bot.listGuildEmojis(guildId);
    await bot.getGuildEmoji(guildId, emoji.id);
    await bot.updateGuildEmoji(guildId, emoji.id, {
        name: "edited_test_emoji"
    });
    await bot.deleteGuildEmoji(guildId, emoji.id);

    const integrations = await bot.listGuildIntegrations(guildId);
    const invites = await bot.listGuildInvites(guildId);
    const members = await bot.listGuildMembers(guildId, {
        limit: 100
    });

    const newMemberWelcome = await bot.getGuildNewMemberWelcome(guildId);
    await bot.putGuildsOnboarding(guildId, {
        enabled: true,
        mode: GuildOnboardingMode.ONBOARDING_DEFAULT,
        defaultChannelIds: new Set(["1470733335285334097"])
    });
    const onboarding = await bot.getGuildsOnboarding(guildId);
    const preview = await bot.getGuildPreview(guildId);
    const previewPrune = await bot.previewPruneGuild(guildId);
    //await bot.pruneGuild(guildId, {});

    const logs = await bot.listGuildAuditLogEntries(guildId);
    const bans = await bot.listGuildBans(guildId);
    // await bot.bulkBanUsersFromGuild(guildId, {
    //     "user_ids": ["844698294583820308"]
    // });


    const channels = await bot.listGuildChannels(guildId);

    console.assert(channels!.some(c => c.id === channel1.id));
    await bot.getChannel(channel1.id);

    await bot.bulkUpdateGuildChannels(guildId, [{
        "id": channel1.id,
        "position": channel2.position
    }, {
        "id": channel2.id,
        "position": channel1.position
    }]);
    await bot.updateChannel(channel1.id, {
        name: "edited test channel"
    });
    //await bot.deleteChannel(channel1.id);

    await bot.updateGuildIncidentActions(guildId, {
        dmsDisabledUntil: null
    });
}

export async function testGuildChannels(guildId: SnowflakeType) {
    const channel = await bot.createGuildChannel(guildId, {
        name: "test channel",
        type: 0
    });
    const channels = await bot.listGuildChannels(guildId);
    console.assert(channels!.some(c => c.id === channel.id));
    const channel2 = await bot.getChannel(channel.id);
    await bot.updateChannel(channel2.id, {
        name: "edited test channel"
    });
    await bot.deleteChannel(channel2.id);
}

export async function testGuildEvents(guildId: SnowflakeType) {
    const now = Date.now();
    const start = now + 10_000;
    const end = now + 10_000 + 5 * 1_000;
    const event = await bot.createGuildScheduledEvent(guildId, {
        entityType: GuildScheduledEventEntityTypes.EXTERNAL,
        name: "test",
        scheduledStartTime: new Date(start),
        privacyLevel: GuildScheduledEventPrivacyLevels.GUILD_ONLY,
        entityMetadata: {
            location: "test"
        },
        scheduledEndTime: new Date(end),
        recurrenceRule: {
            start: new Date(start),
            frequency: RecurrenceRuleFrequencies.DAILY
        }
    });
    const exception = await bot.createGuildScheduledEventException(guildId, event.id, {
        originalScheduledStartTime: new Date(start),
        scheduledStartTime: new Date(start + 5 * 60_000),
        scheduledEndTime: new Date(end + 5 * 60_000)
    });
    await bot.listGuildScheduledEventExceptionUsers(guildId, event.id, exception.eventExceptionId);
    await bot.updateGuildScheduledEventException(guildId, event.id, exception.eventExceptionId, {
        isCanceled: true
    });
    await bot.deleteGuildScheduledEventException(guildId, event.id, exception.eventExceptionId);
    await bot.updateGuildScheduledEvent(event.guildId, event.id, {
        "name": "test2"
    });

    await bot.deleteGuildScheduledEvent(event.guildId, event.id);
}

export async function testGuildRoles(guildId: SnowflakeType) {
    const role = await bot.createGuildRole(guildId, {
        name: "Test Role"
    });
    const roles = await bot.listGuildRoles(guildId);
    console.assert(roles.some(r => r.id === role.id));
    const role2 = await bot.getGuildRole(guildId, role.id);
    await bot.updateGuildRole(guildId, role2.id, {
        name: "Edited Test Role"
    });
    await bot.deleteGuildRole(guildId, role2.id);
}

export async function testPolls(channelId: SnowflakeType) {
    const poll = await bot.createMessage(channelId, {
        poll: {
            allowMultiselect: true,
            question: {
                text: "A poll!"
            },
            answers: [{
                pollMedia: {
                    text: "An answer!"
                }
            }]
        }
    });
    const voters = await bot.getAnswerVoters(channelId, poll.id, 1);
    await bot.pollExpire(channelId, poll.id);
}

export async function testGuildMembers(guildId: SnowflakeType) {
    const members = await bot.listGuildMembers(guildId, {
        limit: 100
    });
    const members2 = await bot.searchGuildMembers(guildId, {
        query: "bot"
    });
    const me = await bot.getGuildMember(guildId, applicationId);
    await bot.addGuildMemberRole(guildId, me.user.id, "1506248155577057361");
    await bot.deleteGuildMemberRole(guildId, me.user.id, "1506248155577057361");
    await bot.updateMyGuildMember(guildId, {
        nick: "Updated nick"
    });
}

export async function testWebhooks(guildId: SnowflakeType, channelId: SnowflakeType) {
    const webhook = await bot.createWebhook(channelId, {
        "name": "Test Webhook"
    });
    const webhooks = await bot.listChannelWebhooks(channelId);
    console.assert(webhooks!.some(w => w!.id === webhook.id));
    const guildWebhooks = await bot.getGuildWebhooks(guildId);
    console.assert(guildWebhooks!.some(w => w!.id === webhook.id && w.channelId === channelId));
    await bot.getWebhook(webhook.id);
    await publicClient.getWebhookByToken(webhook.id, webhook.token!);
    await bot.updateWebhook(webhook.id, {
        "name": "Edited Test Webhook"
    });
    await publicClient.updateWebhookByToken(webhook.id, webhook.token!, {
        "name": "Edited Test Webhook By Token"
    });
    const message = await publicClient.executeWebhook(webhook.id, webhook.token!, {
        content: "Test 1"
    }, { wait: true });
    const message_fetched = await publicClient.getWebhookMessage(webhook.id, webhook.token!, message!.id);
    console.assert(message_fetched.id === message!.id);
    await publicClient.updateWebhookMessage(webhook.id, webhook.token!, message!.id, {
        content: "Edited Test 1"
    });
    await publicClient.deleteWebhookMessage(webhook.id, webhook.token!, message!.id);
    await bot.deleteWebhook(webhook.id);
    const webhookByToken = await bot.createWebhook(channelId, {
        "name": "Test Webhook By Token"
    });
    await publicClient.deleteWebhookByToken(webhookByToken.id, webhookByToken.token!);
}

export async function testSoundboard(guildId: SnowflakeType) {
    const defaultSoundboards = await bot.getSoundboardDefaultSounds();

    async function fetchSoundAsDataURI() {
        const res = await fetch(`https://cdn.discordapp.com/soundboard-sounds/${defaultSoundboards[0]!.soundId}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch sound: ${res.status} ${res.statusText}`);
        }

        const arrayBuffer = await res.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);

        let binary = "";
        for (let i = 0; i < bytes.length; i++) {
            binary += String.fromCharCode(bytes[i]!);
        }
        const base64 = btoa(binary);
        const mime = res.headers.get("content-type") || "audio/ogg";

        return `data:${mime};base64,${base64}`;
    }

    const data = await fetchSoundAsDataURI();

    const sound = await bot.createGuildSoundboardSound(guildId, {
        name: "Test",
        sound: data
    });

    const sound2 = await bot.getGuildSoundboardSound(guildId, sound.soundId);
    const sounds = await bot.listGuildSoundboardSounds(guildId);
    await bot.updateGuildSoundboardSound(guildId, sound.soundId, {
        name: "New name"
    });
    await bot.deleteGuildSoundboardSound(guildId, sound.soundId);
}
