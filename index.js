require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    // Set custom activity
    client.user.setActivity('Hacking Mainframe', { type: ActivityType.Watching });
});

// Login with the token from .env
client.login(process.env.BOT_TOKEN)
    .then(() => console.log('Bot logged in successfully!'))
    .catch(err => console.error('Login failed:', err));
