const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "list",
        description: "Display a list of all warnings issued on the server.",
        options: [
            {
                type: 4,
                name: "limit",
                description: "The number of warnings to display.",
                required: true
            },
            {
                type: 3,
                name: "sort-by",
                description: "Sort the list by date or severity.",
                required: false,
                choices: [
                    { name: "Newest", value: "newest" },
                    { name: "Oldest", value: "oldest" },
                    { name: "Severity", value: "severity" }
                ]
            }
        ]
    },
    code: ``
}
