const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "create",
        description: "Create a new tag to store reusable content.",
        options: [
            {
                type: 3, // String option type
                name: "name",
                description: "The unique name for the tag (2-30 characters).",
                required: true,
                max_length: 30, // String maximum length
                min_length: 2 // String minimal length
            },
            {
                type: 3, // String option type
                name: "content",
                description: "The content of the tag (1-1800 characters).",
                required: true,
                max_length: 1800, // String maximum length
                min_length: 1 // String minimal length
            }
        ]
    },
    code: ``
};