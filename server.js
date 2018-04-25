// Dependencies
// =============================================================
const apiRoutes = require("app/routing/htmlRoutes");
apiRoutes(app);

const htmlRoutes = require("app/routing/apiRoutes");
htmlRoutes(app);

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Friends array 
//==============================================================
var freinds = [
{
	name: "Kevin Beeler",
	photo: "#",
	scores: [
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,

	]
},
];

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});