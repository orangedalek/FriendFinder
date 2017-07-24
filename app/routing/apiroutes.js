
// import data from friends array
var friends = require("../data/friendFinder.js");

module.exports = function(app){

	 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

	 // push new user data to friends array
	  app.post("/api/friends", function(req, res){

	  	friends.push(req.body);
      	res.json(true);
	  });
};