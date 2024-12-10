module.exports = {
    data: {
        type: 1,
        name: "records",
        description: "Retrieve and manage warning records for members.",
        options: [
            {
                type: 6, // User option type
                name: "member",
                description: "The member whose warning records you want to view.",
                required: true
            }
        ]
    },
    code: ``
};
