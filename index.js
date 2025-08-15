const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// Create a new client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Hacking Mainframe', { type: ActivityType.Watching });
});

// Login with token from Railway environment variables
const token = process.env.BOT_TOKEN;

if (!token) {
    console.error("Error: BOT_TOKEN is not defined in environment variables!");
    process.exit(1);
}

client.login(token).catch(err => {
    console.error("Failed to login:", err);
    process.exit(1);
});
