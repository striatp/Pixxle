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

$let[CaseID;$option[case_id]]
$let[ServerCases;$getGuildVar[ServerCases;$guildID]]
$arrayLoad[ServerCases;//!//;$get[ServerCases]]

$onlyIf[$arrayAt[ServerCases;$get[CaseID]]!=;$interactionReply[
    $ephemeral
    $description[There is no case with this specific ID ($get[CaseID]).]
    $color[${primary_color}]
]]

$let[UserWarningsCount;$getUserVar[$guildID-UserWarningsCount;$get[User]]]
$let[CaseData;$arrayAt[ServerCases;$math[$get[CaseID]-1]]]
$arrayLoad[CaseData;///;$get[CaseData]]

$onlyIf[$arrayAt[CaseData;0]==warning;$interactionReply[
    $ephemeral
    $description[This case is not a warning.]
    $color[${primary_color}]
]]

$interactionReply[
    $author[Target: $username[$arrayAt[CaseData;2]];$userAvatar[$arrayAt[CaseData;2]]]
    $title[Warning Case]
    $description[This warning was issued to **$username[$arrayAt[CaseData;2]]**.]
    $addField[Moderator;$username[$arrayAt[CaseData;3]] \`($arrayAt[CaseData;3])\`]
    $addField[Reason;$arrayAt[CaseData;4]]
    $addField[Severity;$arrayAt[CaseData;6] ($arrayAt[CaseData;5])]
    $addField[Action Taken;$arrayAt[CaseData;7] ($if[$arrayAt[CaseData;8]==0;No duration.;$parseMS[$arrayAt[CaseData;8]]])]
    $color[${primary_color}]
    $footer[Case #$arrayAt[CaseData;1] - $arrayAt[CaseData;2]]
    $timestamp[$arrayAt[CaseData;9]]
]
`
};
