const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "remove",
        description: "Remove a keyword from the Auto-Mod filter.",
        options: [
            {
                type: 3,
                name: "keyword",
                description: "The keyword to remove.",
                required: true
            }
        ]
    },
    code: ``
}
