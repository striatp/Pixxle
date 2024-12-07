const config = require("../../config.js");
const primary = `${config.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "view",
        description: "Shows yours or another member's leveling progression.",
        options: [
            {
                type: 6,
                name: "member",
                description: "Select a member to view their leveling progression.",
                required: false
            }
        ]
    },
    code: `
$c[Local variables definition]
$let[User;$if[$option[member]==;$authorID;$option[member]]]
$let[Level;$getUserVar[$guildID-Level;$get[User];0]]
$let[XP;$getUserVar[$guildID-XP;$get[User];0]]
$let[ReqXP;$getUserVar[$guildID-ReqXP;$get[User];100]]
$let[Avatar;$userAvatar[$get[User]]]
$let[Username;$username[$get[User]]]

$c[Generating the card]
$let[Image;https://api.aggelos-007.xyz/rankcard?username=$get[Username]&xp=$get[XP]&maxxp=$get[ReqXP]&level=$get[Level]&avatar=$get[Avatar]&xpcolor=ff3c65]

$c[Outputting the embed]
$interactionReply[
    $image[$get[Image]]
    $color[${primary}]

    $addActionRow
      $addButton[$authorID-Edit-Level-Card;Edit Background;Secondary;🪄]
]
`
}
