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
                 // { name: "Undefined", value: 0 },
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
$onlyIf[$rolePosition[$guildID;$memberHighestRoleID[$guildID;$option[target]]]<$rolePosition[$guildID;$memberHighestRoleID[$guildID;$authorID]];$interactionReply[
    $ephemeral
    $description[You cannot issue a warning to a member with a role higher than or equal to your highest role.]
    $color[${primary_color}]
]]
$onlyIf[$isBot[$option[target]]!=true;$interactionReply[
    $ephemeral
    $description[You cannot issue a warning to a bot.]
    $color[${primary_color}]
]]
$onlyIf[$option[target]!=$authorID;$interactionReply[
    $ephemeral
    $description[You cannot issue a warning to yourself.]
    $color[${primary_color}]
]]

$c[Local variables]

$let[User;$option[target]]
$let[Reason;$if[$option[reason]==;No reason provided.;$option[reason]]]
$let[SeverityInt;$if[$option[severity]==;0;$option[severity]]]
$let[SeverityStr;]
$ifx[
    $if[$get[SeverityInt]==1;$let[SeverityStr;Low]]
    $elseIf[$get[SeverityInt]==2;$let[SeverityStr;Medium]]
    $elseIf[$get[SeverityInt]==3;$let[SeverityStr;High]]
    $else[$let[SeverityStr;Undefined]]
]
$let[Action;$if[$option[action]==;none;$option[action]]]
$let[Duration;$parseString[$option[duration]]]

$c[Server & User variables management]

$let[ServerCases;$getGuildVar[ServerCases;$guildID]]
$let[UserCases;$getUserVar[$guildID-UserCases;$get[User]]]
$let[ServerCasesCount;$getGuildVar[ServerCasesCount;$guildID;0]]
$let[CurrentCase;$math[$get[ServerCasesCount]+1]]
$let[UserWarningsCount;$getUserVar[$guildID-UserWarningsCount;$get[User];0]]

$arrayLoad[ServerCases;//!//;$get[ServerCases]]
$arrayLoad[UserCases;//!//;$get[UserCases]]

$let[CaseData;warning///$get[CurrentCase]///$get[User]///$authorID///$get[Reason]///$get[SeverityInt]///$get[SeverityStr]///$get[Action]///$get[Duration]///$getTimestamp]

$setGuildVar[ServerCases;$if[$get[ServerCases]==;;//!//]$get[ServerCases]$get[CaseData];$guildID]
$setUserVar[$guildID-UserCases;$if[$get[UserCases]==;;//!//]$get[UserCases]$get[CaseData];$get[User]]
$setUserVar[$guildID-UserWarningsCount;$math[$get[UserWarningsCount]+1];$get[User]]
$let[UserWarningsCount;$getUserVar[$guildID-UserWarningsCount;$get[User]]]
$setGuildVar[ServerCasesCount;$math[$get[ServerCasesCount]+1];$guildID]
$let[ServerCasesCount;$getGuildVar[ServerCasesCount;$guildID]]

$c[Direct messaging]

$if[$isUserDMEnabled[$get[User]]==true;
    $let[DMMessageID;$sendMessage[$dmChannelID[$get[User]];
        $title[Warning Received]
        $description[You have received a warning from **$guildName**. You now have **$get[UserWarningsCount]** warning(s).]
        $addField[Moderator;$username[$authorID]]
        $addField[Reason;$get[Reason]]
        $color[${primary_color}]
        $footer[Case #$get[ServerCasesCount] : $get[SeverityStr]]
        $timestamp
    ;true]]
    $!addButtonTo[$dmChannelID[$get[User]];$get[DMMessageID];None;Sent from $cropText[$guildName;;30];Secondary;;true]
;]

$c[Response]

$interactionReply[
    $ephemeral
    $description[A warning has been successfully issued to **$username[$get[User]]**.]
    $color[${primary_color}]
]
`
};
