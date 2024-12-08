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
            },
            {
                type: 3, // String option type
                name: "filter",
                description: "Filter records by severity or time period.",
                required: false,
                choices: [
                    { name: "All", value: "all" },
                    { name: "Low Severity", value: "low" },
                    { name: "Medium Severity", value: "medium" },
                    { name: "High Severity", value: "high" },
                    { name: "Last 7 Days", value: "last7" },
                    { name: "Last 30 Days", value: "last30" }
                ]
            },
            {
                type: 3, // String option type
                name: "format",
                description: "Choose the format to display the records.",
                required: false,
                choices: [
                    { name: "Summary", value: "summary" },
                    { name: "Detailed", value: "detailed" },
                    { name: "CSV File", value: "csv" }
                ]
            },
            {
                type: 5, // Boolean option type
                name: "private",
                description: "Show the records in a private message (default: false).",
                required: false
            }
        ]
    },
    code: ``
};
