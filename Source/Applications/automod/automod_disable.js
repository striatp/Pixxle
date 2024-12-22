const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "disable",
        description: "Disable the Auto-Mod system in the server."
    },
    code: `
$onlyIf[$guildOwnerID[$guildId]==$authorID;$interactionReply[
    $ephemeral
    $description[Only the server owner can disable Auto-Mod features.]
    $color[${primary_color}]
]]

$let[AutoMod;$getGuildVar[AutoMod;$guildID;false]]
$onlyIf[$get[AutoMod]==true;$interactionReply[
    $ephemeral
    $description[Auto-Mod features are already disabled.]
    $color[${primary_color}]
]]

$setGuildVar[AutoMod;false;$guildID]

$interactionReply[
    $ephemeral
    $description[Auto-Mod features have been disabled. (Old settings are saved)]
    $color[${primary_color}]
]
`
}
