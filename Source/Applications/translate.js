const system = require("../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 3,
        name: "Translate Message"
    },
    code: `
$defer
$ephemeral

$let[Message;$getMessage[$channelID;$option[message];content]]
$!httpRequest[https://api.kastg.xyz/api/tool/translate?input=$get[Message]&to=$locale&from=auto;GET]
$onlyIf[$httpResult[status]==true;$interactionReply[
    $ephemeral
    $description[Something went wrong.]
    $color[${primary_color}]
]]

$httpResult[result;0;output]
`
};
