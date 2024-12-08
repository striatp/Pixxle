const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "issue",
        description: "Issue a warning to a member and log the case with optional escalation options.",
        options: [
            {
                type: 6, // User option type
                name: "target",
                description: "The member to warn.",
                required: true
            },
            {
                type: 3, // String option type
                name: "reason",
                description: "Provide a reason for the warning (default: 'No reason provided.').",
                required: false
            },
            {
                type: 4, // Integer option type
                name: "severity",
                description: "Set the severity level of the warning (1 = Low, 2 = Medium, 3 = High).",
                required: false,
                choices: [
                    { name: "Low", value: 1 },
                    { name: "Medium", value: 2 },
                    { name: "High", value: 3 }
                ]
            },
            {
                type: 3, // String option type
                name: "action",
                description: "Choose an optional follow-up action after issuing the warning (default: 'None').",
                required: false,
                choices: [
                    { name: "None", value: "none" },
                    { name: "Mute", value: "mute" },
                    { name: "Kick", value: "kick" },
                    { name: "Ban", value: "ban" }
                ]
            },
            {
                type: 3, // String option type
                name: "duration",
                description: "Optional: Specify duration for actions like mute (e.g., '10m', '1h').",
                required: false
            }
        ]
    },
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ModerateMembers]==true;$interactionReply[
    $ephemeral
    $description[You do not have the necessary permissions to issue a warning to a member.]
    $color[${primary_color}]
]]
$onlyIf[$option[target]!=$authorID;$interactionReply[
    $ephemeral
    $description[You cannot issue a warning to yourself.]
    $color[${primary_color}]
]]
$onlyIf[$rolePosition[$guildID;$memberHighestRoleID[$guildID;$option[target]]]<$rolePosition[$guildID;$memberHighestRoleID[$guildID;$authorID]];$interactionReply[
    $ephemeral
    $description[You cannot issue a warning to a member with a role higher than or equal to your highest role.]
    $color[${primary_color}]
]]
`
};
