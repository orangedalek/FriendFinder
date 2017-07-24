// add express and body-parser

var express = require("express");
var bodyParser = require("body-parser");

// create express server
var app = express();

// select a port to listen with

var PORT = 8080;

// standard code to set up body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// link to routing files inside the app folder

require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// set up listening on selected port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

