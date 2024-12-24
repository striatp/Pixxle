const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "purge",
        description: "Remove all warnings issued on the server.",
        options: [
            {
                type: 3,
                name: "confirm",
                description: "Confirmation to purge all warnings.",
                required: true,
                choices: [
                    { name: "True", value: "true" },
                    { name: "False", value: "false" }
                ]
            }
        ]
    },
    code: ``
}
