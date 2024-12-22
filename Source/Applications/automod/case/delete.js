const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "delete",
        description: "Delete a specific violation case from the log.",
        options: [
            {
                type: 4,
                name: "case_id",
                description: "The ID of the case to delete.",
                required: true,
                min_value: 1
            }
        ]
    },
    code: ``
}
