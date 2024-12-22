const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "notify",
        description: "Enable or disable user notifications for flagged messages.",
        options: [
            {
                type: 3,
                name: "status",
                description: "Enable or disable notifications.",
                required: true,
                choices: [
                    { name: "On", value: "on" },
                    { name: "Off", value: "off" }
                ]
            }
        ]
    },
    code: ``
}
