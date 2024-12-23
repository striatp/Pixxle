module.exports = {
    data: {
        type: 1,
        name: "records",
        description: "View the warning history of a user.",
        options: [
            {
                type: 6, // User option type
                name: "target",
                description: "The user whose warning history you want to check.",
                required: true
            },
            {
                type: 4,
                name: "limit",
                description: "The maximum number of warnings to display.",
                required: false
            }
        ]
    },
    code: ``
};
