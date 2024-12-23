const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "clear",
        description: "Clear all warnings for a specific user.",
        options: [
            {
                type: 6,
                name: "target",
                description: "The user whose warnings you want to clear.",
                required: true
            }
        ]
    },
    code: ``
}
