module.exports = function(app) {

	// Basic routes for HTML pages 
	app.get("./public/home", function(req, res) {
	  res.sendFile(path.join(__dirname, "home.html"));
	});

	app.get("./public/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "survey.html"));
	});
};



