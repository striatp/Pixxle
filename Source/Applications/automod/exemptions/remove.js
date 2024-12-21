const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "remove",
        description: "Remove roles exempt from Auto-Mod actions.",
        options: [
            {
                type: 8,
                name: "role",
                description: "Select a roles exempt from Auto-Mod actions.",
                required: true
            }
        ]
    },
    code: ``
}
