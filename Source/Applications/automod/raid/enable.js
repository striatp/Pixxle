const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "enable",
        description: "Enable anti-raid protection with customizable thresholds.",
        options: [
            {
                type: 4,
                name: "threshold",
                description: "Set the maximum joins or messages per minute (default: 0).",
                required: true
            },
            {
                type: 3,
                name: "action",
                description: "Specify the action to take during a raid.",
                required: true,
                choices: [
                    { name: "Lockdown", value: "lockdown" },
                    { name: "Mute", value: "mute" },
                    { name: "Kick", value: "kick" }
                ]
            }
        ]
    },
    code: ``
}
