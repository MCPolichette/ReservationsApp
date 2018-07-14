// This page was coppied directly from starwars class - delete this comment after cleanup
// Requirements:

var tableData = require('../dataTables/data.js');
var path = require('path');

module.exports = function (app) {

    // Displays a single table, or returns false
    app.get("/api/tables/:table", function (req, res) {
        res.json(tableData);
    });

    // Create New tables - takes in JSON input
    app.post("/api/tables", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newTable = req.body;
        tables.push(newTable);

        res.json(true);
    });
}