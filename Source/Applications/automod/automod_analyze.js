const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "analyze",
        description: "Analyze server activity for violations during a specific time frame.",
        options: [
            {
                type: 3,
                name: "duration",
                description: "Specify the time frame to analyze (e.g., 1d, 7d).",
                required: false
            },
            {
                type: 3,
                name: "type",
                description: "Choose the type of violations to focus on.",
                required: false,
                choices: [
                    { name: "Spam", value: "spam" },
                    { name: "Profanity", value: "profanity" },
                    { name: "All", value: "all" }
                ]
            }
        ]
    },
    code: ``
}
