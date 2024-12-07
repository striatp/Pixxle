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
$c[Local variables definition]
$let[User;$if[$option[target]==;$authorID;$option[target]]]
$let[Level;$getUserVar[$guildID-Level;$get[User];0]]
$let[XP;$getUserVar[$guildID-XP;$get[User];0]]
$let[ReqXP;$getUserVar[$guildID-ReqXP;$get[User];100]]
$let[Avatar;$userAvatar[$get[User]]]
$let[Username;$username[$get[User]]]

$c[Outputting the embed]
$interactionReply[
    $ifx[
        $if[$get[User]==$authorID;
            $description[Successfully set your leveling progression levels to **$option[amount]**.]
        ]
        $else[
        
        ]
    ]
    $color[${primary}]
]
`
}
