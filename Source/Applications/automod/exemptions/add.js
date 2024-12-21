const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "add",
        description: "Add roles exempt from Auto-Mod actions.",
        options: [
            {
                type: 8,
                name: "role",
                description: "Specify the role you want to add to the Auto-Mod exemptions list.",
                required: true
            }
        ]
    },
    code: ``
}
