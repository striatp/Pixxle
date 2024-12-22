const system = require("../../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "remove",
        description: "Block specific domains from being shared.",
        options: [
            {
                type: 3,
                name: "domain",
                description: "The domain to block (e.g.: google.come).",
                required: true
            }
        ]
    },
    code: ``
}
