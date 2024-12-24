const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "edit",
        description: "Modify the reason or details of an existing warning.",
        options: [
            {
                type: 4,
                name: "case_id",
                description: "The unique case ID of the warning to edit.",
                required: true
            },
            {
                type: 3,
                name: "new_reason",
                description: "The updated reason for the warning.",
                required: true
            }
        ]
    },
    code: ``
}
