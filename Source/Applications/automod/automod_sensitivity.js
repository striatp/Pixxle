const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "sensitivity",
        description: "Adjust Auto-Mod sensitivity levels (low, medium, high, custom).",
        options: [
            {
                type: 3,
                name: "severity",
                description: "Choose a predefined sensitivity level settings.",
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
