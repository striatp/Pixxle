const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "remove",
        description: "Remove a specific warning from a user.",
        options: [
            {
                type: 6,
                name: "target",
                description: "The user whose warning you want to remove.",
                required: true
            },
            {
                type: 4,
                name: "case-id",
                description: "The unique case ID of the warning.",
                required: true
            }
        ]
    },
    code: ``
}
