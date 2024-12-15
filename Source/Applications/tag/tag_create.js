const system = require("../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "create",
        description: "Create a new tag to store reusable content.",
        options: [
            {
                type: 3, // String option type
                name: "name",
                description: "The unique name for the tag (2-30 characters).",
                required: true,
                max_length: 30, // String maximum length
                min_length: 2 // String minimal length
            },
            {
                type: 3, // String option type
                name: "content",
                description: "The content of the tag (1-1800 characters).",
                required: true,
                max_length: 1800, // String maximum length
                min_length: 1 // String minimal length
            },
            {
                type: 3, // String option type
                name: "nsfw",
                description: "The tag is considered NSFW (default: False).",
                required: false,
                choices: [
                    { name: "True", value: "true" },
                    { name: "False", value: "false" }
                ]
            }
        ]
    },
    code: `
$let[TagsRestricted;$getGuildVar[TagsRestricted;$guildID;false]]
$onlyIf[$get[TagsRestricted]!=true;$interactionReply[
    $ephemeral
    $description[You do not have the permission to create tags.]
    $color[${primary_color}]
]]

$let[Tags;$getGuildVar[ServerTags;$guildID]]
$let[Author;$authorID]
$let[IsNSFW;$if[$option[nsfw]==;false;$option[nsfw]]]
$let[Name;$option[name]]
$let[Content;$option[content]]

$interactionReply[
    $ephemeral
    *This is a preview only of the tag.*
    $title[$get[Name]]
    $description[$get[Content]]
    $color[${primary_color}]
    $footer[Written by $username[$get[Author]];$userAvatar[$get[Author]]]
    $timestamp

    $addActionRow
    $addButton[Tag_Btn_Create;Create;Secondary]
]
`
};
