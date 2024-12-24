const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "configure",
        description: "Configure the warning system's behavior and thresholds.",
        options: [
            {
                type: 4,
                name: "escalation_threshold",
                description: " of warnings before an automatic action (e.g., mute, ban).",
                required: false,
                max_value: 50,
                min_value: 1
            },
            {
                type: 3,
                name: "action_on_threshold",
                description: "The action to take when the threshold is reached (e.g., mute, ban).",
                required: false,
                choices: [
                    { name: "Mute", value: "mute" },
                    { name: "Kick", value: "kick" },
                    { name: "Ban", value: "ban" }
                ]
            }
        ]
    },
    code: ``
}
