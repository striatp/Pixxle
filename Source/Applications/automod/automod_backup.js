const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "backup",
        description: "Save flagged messages in a secure channel for manual review.",
        options: [
            {
                type: 7,
                name: "channel",
                description: "Specify the channel to store flagged messages.",
                required: true,
                channel_types: [0]
            }
        ]
    },
    code: ``
}
