const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "report",
        description: "Generate a detailed report of flagged messages and actions.",
        options: [
            {
                type: 3,
                name: "duration",
                description: "Specify the time frame for the report (e.g., 1d, 7d).",
                required: false
            },
            {
                type: 6,
                name: "user",
                description: "Filter the report for a specific user.",
                required: false
            }
        ]
    },
    code: ``
}
