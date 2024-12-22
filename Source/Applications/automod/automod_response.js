const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "response",
        description: "Set custom responses for flagged messages.",
        options: [
            {
                type: 3,
                name: "message",
                description: "The custom message to respond with.",
                required: false,
                max_length: 150,
                min_length: 1
            },
            {
                type: 3,
                name: "action",
                description: "Specify the action to take.",
                required: false,
                choices: [
                    { name: "Delete", value: "delete" },
                    { name: "Mute", value: "mute" },
                    { name: "Ban", value: "ban" },
                    { name: "Kick", value: "kick" }
                ]
            }
        ]
    },
    code: ``
}
