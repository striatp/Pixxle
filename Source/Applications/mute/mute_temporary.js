const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "temporary",
        description: "Temporarily mute a user, restricting their ability to send messages or speak.",
        options: [
            {
                type: 6,
                name: "target",
                description: "The user to mute.",
                required: true
            },
            {
                type: 3,
                name: "duration",
                description: "Duration of the mute in minutes.",
                required: true
            },
            {
                type: 3,
                name: "reason",
                description: "The reason for the mute.",
                required: false,
                max_length: 250
            }
        ]
    },
    code: ``
}
