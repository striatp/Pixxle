const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "clearwarnings",
        description: "Clear all Auto-Mod warnings for a specific user.",
        options: [
            {
                type: 6,
                name: "user",
                description: "The user whose Auto-Mod warnings you want to clear.",
                required: true
            }
        ]
    },
    code: ``
}