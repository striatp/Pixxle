const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "stats",
        description: "Display server-wide warning statistics.",
        options: [
            {
                type: 3,
                name: "top_offenders",
                description: "Show the users with the most warnings.",
                required: false,
                choices: [
                    { name: "True", value: "true" },
                    { name: "False", value: "false" }
                ]
            }
        ]
    },
    code: ``
}
