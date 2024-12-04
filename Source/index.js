const config = require("./config.js");

// Defining packages
const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { ForgeCanvas } = require("@tryforge/forge.canvas");

// Client initialization
const client = new ForgeClient({
    // intents
    "intents": [
        "Guilds",
        "GuildMessages",
        "MessageContent"
    ],
    // Events
    "events": [
        "debug",
        "error",
        "interactionCreate",
        "messageCreate",
        "ready",
        "shardDisconnect",
        "shardReady",
        "shardError",
        "shardReconnecting",
        "shardResume"
    ],
    // Extensions
    "extensions": [
        new ForgeDB(),
        new ForgeCanvas()
    ],
    // Prefix
    "prefixes": [
        "?"
    ]
})

// Importing custom functions
const functions = require("./functions.js");
functions.forEach((func) => client.functions.add(func));

// Commands loader
client.commands.load("./Commands");
client.applicationCommands.load("./Applications");

// Client login
client.login(config.TOKEN);
