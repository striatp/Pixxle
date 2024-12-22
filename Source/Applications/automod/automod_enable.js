const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "enable",
        description: "Enable the Auto-Mod system in the server."
    },
    code: `
$onlyIf[$guildOwnerID[$guildId]==$authorID;$interactionReply[
    $ephemeral
    $description[Only the server owner can enable Auto-Mod features.]
    $color[${primary_color}]
]]

$let[AutoMod;$getGuildVar[AutoMod;$guildID;false]]
$onlyIf[$get[AutoMod]==false;$interactionReply[
    $ephemeral
    $description[Auto-Mod features are already enabled.]
    $color[${primary_color}]
]]

$setGuildVar[AutoMod;true;$guildID]

$interactionReply[
    $ephemeral
    $description[Auto-Mod features have been enabled.]
    $color[${primary_color}]
]
`
}
