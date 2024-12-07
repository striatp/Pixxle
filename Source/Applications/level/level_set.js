const config = require("../../config.js");
const primary = `${config.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "set",
        description: "Adjust your or another member's leveling progression to a specified level.",
        options: [
            {
                type: 4,
                name: "level",
                description: "Specify the level to set for your or another member's leveling progression.",
                required: true
            },
            {
                type: 6,
                name: "target",
                description: "Optionally, choose a member whose leveling progression you want to adjust.",
                required: false
            }
        ]
    },
    code: `
$onlyIf[$hasPerms[$guildID;$authorID;ModerateMembers];$interactionReply[
    $description[You do not have the necessary permissions to use this command.]
    $color[${primary}]
]]

$let[User;$if[$option[target]==;$authorID;$option[target]]]

$setUserVar[$guildID-Level;$option[level];$get[User]]
$setUserVar[$guildID-ReqXP;$math[$option[level]*100+100];$get[User]]

$interactionReply[
    $ifx[
        $if[$get[User]==$authorID;
            $description[Successfully set your leveling progression to **$option[level]**.]
        ]
        $else[
            $description[Successfully set <@$get[User]>'s leveling progression to **$option[level]**.]
        ]
    ]
    $color[${primary}]
]
`
}
