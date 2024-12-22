const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "warnings",
        description: "View all warnings issued to a specific user.",
        options: [
            {
                type: 6,
                name: "user",
                description: "The user whose warnings you want to view.",
                required: true
            }
        ]
    },
    code: ``
}
