import { Public, Bot } from "../src/clients.mts";
import { ApplicationCommandType, AutomodActionType, AutomodEventType, AutomodTriggerType, ChannelTypes, ExternalScheduledEventCreateRequest, GuildExplicitContentFilterTypes, GuildFeatures, GuildOnboardingMode, GuildScheduledEventPrivacyLevels, MetadataItemTypes, StageInstancesPrivacyLevels, VerificationLevels, type SnowflakeType } from "../src/types.mts";

import test from 'node:test'
import assert from 'node:assert/strict'

const application_id = process.env["APPLICATION_ID"] as SnowflakeType;
if (!application_id) throw new Error("Bot ID not specified");
const test_guild_id = process.env["GUILD_ID"] as SnowflakeType;
if (!test_guild_id) throw new Error("Guild ID not specified");
const channel_id = process.env["CHANNEL_ID"] as SnowflakeType;
if (!channel_id) throw new Error("Channel ID not specified");
const bot_token = process.env["BOT_TOKEN"];
if (!bot_token) throw new Error("Bot token not specified");
const bot = new Bot(bot_token);
const publicClient = new Public();

test("Application Role Connection Metadata", async () => {
    await testApplicationRoleConnectionMetadata(application_id);
});

test("Application", async () => {
    await testApplication(application_id);
});

test("Audit Log", async () => {
    await testAuditLog(test_guild_id);
});

test("Auto Moderation", async () => {
    await testAutoModeration(test_guild_id);
});

test("Channel", async () => {
    await testChannel(channel_id);
});

test("Guild Template", async () => {
    await testGuildTemplate(test_guild_id);
});

test("Stickers", async () => {
    await testStickers();
});

test("Stage Instance", async () => {
    await testStageInstance("1506623815889846273");
});

test("Application Commands", async () => {
    await testApplicationCommands(application_id);
});

test("Application Guild Commands", async () => {
    await testApplicationGuildCommands(application_id, test_guild_id);
});

test("Application Emojis", async () => {
    await testApplicationEmojis(application_id);
});

test("Guild", async () => {
    await testGuild(test_guild_id);
});

test("Guild Channels", async () => {
    await testGuildChannels(test_guild_id);
});

test("Guild Events", async () => {
    await testGuildEvents(test_guild_id);
});

test("Guild Roles", async () => {
    await testGuildRoles(test_guild_id);
});

test("Polls", async () => {
    await testPolls(channel_id);
});

test("Guild Members", async () => {
    await testGuildMembers(test_guild_id);
});

test("Webhooks", async () => {
    await testWebhooks(test_guild_id, channel_id);
});

test("Soundboard", async () => {
    await testSoundboard(test_guild_id);
});

export async function testApplicationRoleConnectionMetadata(application_id: SnowflakeType) {
    await bot.updateApplicationRoleConnectionsMetadata(application_id, [{
        name: "Test",
        description: "Test",
        type: MetadataItemTypes.BOOLEAN_EQUAL,
        key: "test"
    }]);
    const metadata = (await bot.getApplicationRoleConnectionsMetadata(application_id))!;
    assert(metadata.length === 1);
    const metadata2 = (await bot.updateApplicationRoleConnectionsMetadata(application_id, []))!;
    assert(metadata2.length === 0);
}

export async function testApplication(application_id: SnowflakeType) {
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
    await bot.updateApplication(application_id, {
        "description": {
            "default": "Default Description",
            "localizations": {
                "en-US": "English Description",
                "fr": "Description Française"
            }
        }
    });
    const application = await bot.getApplication(application_id);
}

export async function testAuditLog(guild_id: SnowflakeType) {
    const logs = await bot.listGuildAuditLogEntries(guild_id);
}

export async function testAutoModeration(guild_id: SnowflakeType) {
    const rule = await bot.createAutoModerationRule(guild_id, {
        "event_type": AutomodEventType.MESSAGE_SEND,
        "name": "Test Rule",
        "trigger_type": AutomodTriggerType.KEYWORD,
        "actions": [{
            "type": AutomodActionType.BLOCK_MESSAGE
        }],
        "trigger_metadata": {
            "keyword_filter": ["@everyone", "@here"]
        }
    });
    const rules = await bot.listAutoModerationRules(guild_id);
    console.assert(rules!.some(r => r!.id === rule.id));
    const rule2 = await bot.getAutoModerationRule(guild_id, rule.id);
    const edited = await bot.updateAutoModerationRule(guild_id, rule.id, {
        "name": "Edited Test Rule"
    });
    await bot.deleteAutoModerationRule(guild_id, edited.id);
}

export async function testChannel(channel_id: SnowflakeType) {
    const privateThread = await bot.createThread(channel_id, {
        "name": "Private Test Thread",
        "type": ChannelTypes.PRIVATE_THREAD,
        "message": {
            "content": "Test Thread Message"
        }
    });

    const threadMembers = await bot.listThreadMembers(privateThread.id);
    console.assert(threadMembers.some(member => member.user_id === application_id));

    await bot.leaveThread(privateThread.id);
    await bot.joinThread(privateThread.id);

    const invite = await bot.createChannelInvite(channel_id, {});
    const invites = await bot.listChannelInvites(channel_id);
    await bot.inviteRevoke(invite!.code);

    await bot.triggerTypingIndicator(channel_id);
    const message = await bot.createMessage(channel_id, {
        content: "test"
    });

    const threadFromMessage = await bot.createThreadFromMessage(channel_id, message.id, {
        "name": "Test Thread From Message"
    });

    await bot.deleteThreadMember(threadFromMessage.id, application_id);
    await bot.addThreadMember(threadFromMessage.id, application_id);
    const threadMember = await bot.getThreadMember(threadFromMessage.id, application_id);

    const threads = await bot.threadSearch(channel_id, {
        "name": "Thread"
    });

    await bot.updateChannel(privateThread.id, {
        "archived": true,
        "locked": true
    });

    const privateArchivedThreads = await bot.listPrivateArchivedThreads(channel_id);
    console.assert(privateArchivedThreads.threads.some(thread => thread.id === privateThread.id));
    const myPrivateArchivedThreads = await bot.listMyPrivateArchivedThreads(channel_id);
    console.assert(myPrivateArchivedThreads.threads.some(thread => thread.id === privateThread.id))

    await bot.deleteChannel(privateThread.id);

    await bot.updateChannel(threadFromMessage.id, {
        "archived": true,
        "locked": true
    });

    const publicArchivedThreads = await bot.listPublicArchivedThreads(channel_id);
    console.assert(publicArchivedThreads.threads.some(thread => thread.id === threadFromMessage.id));
    await bot.deleteChannel(threadFromMessage.id);

    await bot.updateMessage(message.channel_id, message.id, {
        content: "test2"
    });

    await bot.createPin(channel_id, message.id);
    const pins = await bot.listPins(channel_id);
    console.assert(pins.items.some(pin => pin.message.id === message.id));
    await bot.deletePin(channel_id, message.id);

    await bot.deprecatedCreatePin(channel_id, message.id);
    const pinsDeprecated = await bot.deprecatedListPins(channel_id);
    console.assert(pinsDeprecated!.some(pin => pin.id === message.id));
    await bot.deprecatedDeletePin(channel_id, message.id);

    await bot.addMyMessageReaction(channel_id, message.id, "👍");
    const emojis = await bot.listMessageReactionsByEmoji(channel_id, message.id, "👍");
    console.assert(emojis.length === 1);
    await bot.deleteMyMessageReaction(channel_id, message.id, "👍");
    await bot.addMyMessageReaction(channel_id, message.id, "👎");
    await bot.deleteUserMessageReaction(channel_id, message.id, "👎", application_id);
    await bot.deleteAllMessageReactionsByEmoji(channel_id, message.id, "👍");
    await bot.deleteAllMessageReactions(channel_id, message.id);

    await bot.deleteMessage(message.channel_id, message.id);
}

export async function testGuildTemplate(guild_id: SnowflakeType) {
    const template = await bot.createGuildTemplate(guild_id, {
        name: "Test Template",
        description: "Test Template Description"
    });
    const templates = await bot.listGuildTemplates(guild_id);
    const template2 = await publicClient.getGuildTemplate(template.code);
    await bot.updateGuildTemplate(guild_id, template.code, {
        name: "Updated Test Template",
        description: "Updated Test Template Description"
    });
    await bot.syncGuildTemplate(guild_id, template.code);
    await bot.deleteGuildTemplate(guild_id, template.code);
}

export async function testStickers() {
    const packs = await publicClient.listStickerPacks();
    const pack = await bot.getStickerPack(packs.sticker_packs[0]!.id);
    const sticker = await bot.getSticker(pack.stickers[0]!.id);
    /*const guildSticker = await bot.createGuildSticker(test_guild_id, {
        name: "Test Sticker",
        description: "A test sticker",
        tags: "sticker",
        file: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2NfZkAAAAASUVORK5CYII=`
    });*/
    const guildStikers = await bot.listGuildStickers(test_guild_id);
    const sticker2 = await bot.getGuildSticker(test_guild_id, "1506627304279904276");
    await bot.updateGuildSticker(test_guild_id, "1506627304279904276", {
        name: "Updated Sticker Name"
    });
    //await bot.deleteGuildSticker(test_guild_id, "1506627304279904276");
}

export async function testStageInstance(channel_id: SnowflakeType) {
    const instance = await bot.createStageInstance({
        channel_id,
        topic: "A stage instance",
        privacy_level: StageInstancesPrivacyLevels.PUBLIC,
        send_start_notification: true
    });
    await bot.getStageInstance(channel_id);
    await bot.updateStageInstance(channel_id, {
       topic: "A stage instance updated"
    });
    await bot.deleteStageInstance(channel_id);
}

export async function testApplicationCommands(application_id: SnowflakeType) {
    await bot.bulkSetApplicationCommands(application_id, []);

    const command = await bot.createApplicationCommand(application_id, {
        name: "test",
        description: "Test command",
        type: ApplicationCommandType.CHAT
    });
    const commands = await bot.listApplicationCommands(application_id);
    await bot.updateApplicationCommand(application_id, command.id, {
        name: "edited_test"
    });
    const command2 = await bot.getApplicationCommand(application_id, command.id);
    await bot.deleteApplicationCommand(application_id, command.id);
}

export async function testApplicationGuildCommands(application_id: SnowflakeType, guild_id: SnowflakeType) {
    await bot.bulkSetGuildApplicationCommands(application_id, guild_id, []);
    const command = await bot.createGuildApplicationCommand(application_id, guild_id, {
        name: "test",
        description: "Test command",
        type: ApplicationCommandType.CHAT
    });
    const commands = await bot.listGuildApplicationCommands(application_id, guild_id);
    const permissions = await bot.listGuildApplicationCommandPermissions(application_id, guild_id);
    await bot.updateGuildApplicationCommand(application_id, guild_id, command.id, {
        name: "edited_test"
    });
    const command2 = await bot.getGuildApplicationCommand(application_id, guild_id, command.id);
    await bot.deleteGuildApplicationCommand(application_id, guild_id, command.id);
}

export async function testApplicationEmojis(application_id: SnowflakeType) {
    const emoji = await bot.createApplicationEmoji(application_id, {
        "name": "test_emoji",
        "image": `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2NfZkAAAAASUVORK5CYII=`
    });
    const emojis = await bot.listApplicationEmojis(application_id);
    const emoji2 = await bot.getApplicationEmoji(application_id, emoji.id);
    await bot.updateApplicationEmoji(application_id, emoji.id, {
        name: "updated_test_emoji"
    });
    await bot.deleteApplicationEmoji(application_id, emoji.id);
}

export async function testGuild(guild_id: SnowflakeType) {
    const voices = bot.listGuildVoiceRegions(guild_id);

    const channel1 = await bot.createGuildChannel(guild_id, {
        name: "test-channel-1",
        type: ChannelTypes.GUILD_TEXT
    });
    const channel2 = await bot.createGuildChannel(guild_id, {
        name: "test-channel-2",
        type: ChannelTypes.GUILD_TEXT
    });

    const guild = await bot.getGuild(guild_id);

    await bot.updateGuild(guild_id, {
        features: [...new Set([...guild.features, GuildFeatures.COMMUNITY])],
        rules_channel_id: channel1.id,
        public_updates_channel_id: channel2.id,
        verification_level: VerificationLevels.VERY_HIGH,
        explicit_content_filter: GuildExplicitContentFilterTypes.ALL_MEMBERS
    });

    const emoji = await bot.createGuildEmoji(guild_id, {
        "name": "test_emoji",
        "image": `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2NfZkAAAAASUVORK5CYII=`
    });
    const emojis = await bot.listGuildEmojis(guild_id);
    await bot.getGuildEmoji(guild_id, emoji.id);
    await bot.updateGuildEmoji(guild_id, emoji.id, {
        name: "edited_test_emoji"
    });
    await bot.deleteGuildEmoji(guild_id, emoji.id);

    const integrations = await bot.listGuildIntegrations(guild_id);
    const invites = await bot.listGuildInvites(guild_id);
    const members = await bot.listGuildMembers(guild_id, {
        limit: 100
    });

    const newMemberWelcome = await bot.getGuildNewMemberWelcome(guild_id);
    await bot.putGuildsOnboarding(guild_id, {
        "enabled": true,
        "mode": GuildOnboardingMode.ONBOARDING_DEFAULT,
        default_channel_ids: ["1470733335285334097"]
    });
    const onboarding = await bot.getGuildsOnboarding(guild_id);
    const preview = await bot.getGuildPreview(guild_id);
    const previewPrune = await bot.previewPruneGuild(guild_id);
    //await bot.pruneGuild(guild_id, {});

    const logs = await bot.listGuildAuditLogEntries(guild_id);
    const bans = await bot.listGuildBans(guild_id);
    // await bot.bulkBanUsersFromGuild(guild_id, {
    //     "user_ids": ["844698294583820308"]
    // });


    const channels = await bot.listGuildChannels(guild_id);

    console.assert(channels!.some(c => c.id === channel1.id));
    await bot.getChannel(channel1.id);

    await bot.bulkUpdateGuildChannels(guild_id, [{
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


}

export async function testGuildChannels(guild_id: SnowflakeType) {
    const channel = await bot.createGuildChannel(guild_id, {
        name: "test channel",
        type: 0
    });
    const channels = await bot.listGuildChannels(guild_id);
    console.assert(channels!.some(c => c.id === channel.id));
    const channel2 = await bot.getChannel(channel.id);
    await bot.updateChannel(channel2.id, {
        name: "edited test channel"
    });
    await bot.deleteChannel(channel2.id);
}

export async function testGuildEvents(guild_id: SnowflakeType) {
    const event = await bot.createGuildScheduledEvent(guild_id, ExternalScheduledEventCreateRequest("test", new Date(Date.now() + 10000).toISOString(), GuildScheduledEventPrivacyLevels.GUILD_ONLY, {
        location: "test"
    }, {
        scheduled_end_time: new Date(Date.now() + 20000).toISOString()
    }));

    await bot.updateGuildScheduledEvent(event.guild_id, event.id, {
        "name": "test2"
    });

    await bot.deleteGuildScheduledEvent(event.guild_id, event.id);
}

export async function testGuildRoles(guild_id: SnowflakeType) {
    const role = await bot.createGuildRole(guild_id, {
        name: "Test Role"
    });
    const roles = await bot.listGuildRoles(guild_id);
    console.assert(roles.some(r => r.id === role.id));
    const role2 = await bot.getGuildRole(guild_id, role.id);
    await bot.updateGuildRole(guild_id, role2.id, {
        name: "Edited Test Role"
    });
    await bot.deleteGuildRole(guild_id, role2.id);
}

export async function testPolls(channel_id: SnowflakeType) {
    const poll = await bot.createMessage(channel_id, {
        poll: {
            allow_multiselect: true,
            question: {
                text: "A poll!"
            },
            answers: [{
                poll_media: {
                    text: "An answer!"
                }
            }]
        }
    });
    const voters = await bot.getAnswerVoters(channel_id, poll.id, 1);
    await bot.pollExpire(channel_id, poll.id);
}

export async function testGuildMembers(guild_id: SnowflakeType) {
    const members = await bot.listGuildMembers(guild_id, {
        limit: 100
    });
    const members2 = await bot.searchGuildMembers(guild_id, {
        query: "bot"
    });
    const me = await bot.getGuildMember(guild_id, application_id);
    await bot.addGuildMemberRole(guild_id, me.user.id, "1506248155577057361");
    await bot.deleteGuildMemberRole(guild_id, me.user.id, "1506248155577057361");
    await bot.updateMyGuildMember(guild_id, {
        nick: "Updated nick"
    });
}

export async function testWebhooks(guild_id: SnowflakeType, channel_id: SnowflakeType) {
    const webhook = await bot.createWebhook(channel_id, {
        "name": "Test Webhook"
    });
    const webhooks = await bot.listChannelWebhooks(channel_id);
    console.assert(webhooks!.some(w => w!.id === webhook.id));
    const guildWebhooks = await bot.getGuildWebhooks(guild_id);
    console.assert(guildWebhooks!.some(w => w!.id === webhook.id && w.channel_id === channel_id));
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
    const webhookByToken = await bot.createWebhook(channel_id, {
        "name": "Test Webhook By Token"
    });
    await publicClient.deleteWebhookByToken(webhookByToken.id, webhookByToken.token!);
}

export async function testSoundboard(guild_id: SnowflakeType) {
    const defaultSoundboards = await bot.getSoundboardDefaultSounds();

    async function fetchSoundAsDataURI() {
        const res = await fetch(`https://cdn.discordapp.com/soundboard-sounds/${defaultSoundboards[0]!.sound_id}`);
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

    const sound = await bot.createGuildSoundboardSound(guild_id, {
        name: "Test",
        sound: data
    });

    const sound2 = await bot.getGuildSoundboardSound(guild_id, sound.sound_id);
    const sounds = await bot.listGuildSoundboardSounds(guild_id);
    await bot.updateGuildSoundboardSound(guild_id, sound.sound_id, {
        name: "New name"
    });
    await bot.deleteGuildSoundboardSound(guild_id, sound.sound_id);
}
