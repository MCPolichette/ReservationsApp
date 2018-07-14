// This page was coppied directly from starwars class - delete this comment after cleanup

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all reservations
app.get("/api/view", function (req, res) {
    return res.json(view);
});

// Displays a single guest, or returns false
app.get("/api/tables/:guest", function (req, res) {
    var chosen = req.params.guest;
    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }

    return res.json(false);
});

// Create New tables - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newTable
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});