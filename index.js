const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Hacking Mainframe', { type: ActivityType.Watching });
});

// Railway sets BOT_TOKEN in its environment variables
client.login(process.env.BOT_TOKEN);
