const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "add",
        description: "The keyword to block.",
        options: [
            {
                type: 3,
                name: "keyword",
                description: "The keyword to block.",
                required: true
            },
            {
                type: 3,
                name: "severity",
                description: "Set the importance of the keyword for stricter handling.",
                required: true,
                choices: [
                    { name: "Low", value: "low" },
                    { name: "Medium", value: "medium" },
                    { name: "High", value: "high" }
                ]
            }
        ]
    },
    code: ``
}
