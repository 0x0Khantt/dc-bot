require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Hacking Mainframe', { type: ActivityType.Watching });
});

client.login(process.env.BOT_TOKEN);
