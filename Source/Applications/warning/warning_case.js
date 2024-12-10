const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "caseinfo",
        description: "Retrieve details about a specific warning case.",
        options: [
            {
                type: 4, // Integer input type
                name: "case_id",
                description: "Enter the unique ID of the warning case to view its details.",
                required: true
            }
        ]
    },
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ModerateMembers]==true;$interactionReply[
    $ephemeral
    $description[You do not have the necessary permissions to view details about a specific warning case.]
    $color[${primary_color}]
]]

$let[ServerCases;$getGuildVar[ServerCases;$guildID]]
$arrayLoad[ServerCases;//!//;$get[ServerCases]]

$sendMessage[$channelID;
$arrayAt[ServerCases;$get[CaseID]]]
$let[CaseID;$option[case_id]]
$onlyIf[$arrayAt[ServerCases;$get[CaseID]]!=;$interactionReply[
    $ephemeral
    $description[There is no case with the id **$get[CaseID]**.]
    $color[${primary_color}]
]]
`
};
