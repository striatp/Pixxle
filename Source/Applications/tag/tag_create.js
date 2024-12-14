const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "create",
        description: "Create a new tag to store reusable content.",
        options: [
            {
                type: 3,
                name: "name",
                description: "The unique name for the tag (2-30 characters).",
                required: true,
                max_length: 30,
                min_length: 2
            },
            {
                type: 3,
                name: "content",
                description: "The content of the tag (1-1800 characters).",
                required: true,
                max_length: 1800,
                min_length: 1
            }
        ]
    },
    code: ``
};
