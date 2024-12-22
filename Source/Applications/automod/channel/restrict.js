const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "restrict",
        description: "Apply stricter Auto-Mod rules to specific channels.",
        options: [
            {
                type: 7,
                name: "channel",
                description: "The channel to restrict.",
                required: true,
                channel_types: [0, 11, 12]
            }
        ]
    },
    code: ``
}
