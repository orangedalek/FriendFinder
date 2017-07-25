
// import data from friends array
var friends = require("../data/friendFinder.js");

module.exports = function(app){

	 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

	 // push new user data to friends array
	  app.post("/api/friends", function(req, res){

	  	var match = {
	  		name: "",
	  		photo: "",
	  		difference: 1000
	  	};

	  	var user = req.body;
	  	var userName = user.name;
	  	var userPhoto = user.photo;
	  	var userScores = user.scores;
	  	var scoreDifference = 0;
	  	var totalDifference = 0;
	  	var matchName = [];
	  	var matchPhoto = [];
	  	// compare user score to database
	  	for (var i = 0; i < friends.length; i++) {
	  		var diffArray = [];
	  		// console.log(friends[i]);
	  		for (var j = 0; j < 10; j++) {
	  			scoreDifference = Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
	  			diffArray.push(scoreDifference);
	  		};
	  			// console.log(diffArray);
	  				totalDifference = 0;
	  			    for(var k = 0; k < friends.length; k++){
        				totalDifference += diffArray[k];
        				if(totalDifference < match.difference){
        					friendName = friends[k].name;
        					friendPhoto = friends[k].photo;
        				}
        					matchName.push(friendName);
        					matchPhoto.push(friendPhoto);
      				};
      				
      				// console.log(totalDifference);


      				}

	 
      			

	  	friends.push(req.body);
      	res.json(matchName);
      	res.json(matchPhoto);
	  });
	};