const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "restrict",
        description: "Exclude specific channels from Auto-Mod actions.",
        options: [
            {
                type: 7,
                name: "channel",
                description: "The channel to exclude.",
                required: true,
                channel_types: [0, 11, 12]
            }
        ]
    },
    code: ``
}
