//Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("Hello World");
})

//parse application/ url encoded
app.use(bodyParser.urlencoded({ extended: false}))

//parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.write("you posted:\n")
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})