const system = require("../../../config.js");
const primary_color = `${system.COLORS.primary}`;

module.exports = {
    data: {
        type: 1,
        name: "allow",
        description: "Add domains to the allowlist for link sharing.",
        options: [
            {
                type: 3,
                name: "domain",
                description: "The domain to allow.",
                required: true
            }
        ]
    },
    code: ``
}
