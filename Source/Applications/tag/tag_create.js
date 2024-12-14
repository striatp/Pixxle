const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "create",
        description: "Create a tag.",
        options: [
            {
                type: 3,
                name: "name",
                description: "The name of the tag you're creating.",
                required: true,
                max_length: 30,
                min_length: 2
            },
            {
                type: 3,
                name: "content",
                description: "Provide the content of the tag.",
                required: true,
                max_length: 1800,
                min_length: 1
            }
        ]
    },
    code: ``
};
