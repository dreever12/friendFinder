var friends = require("../data/friends");

module.exports = function(app) {
    //displays all information
    app.get("/api/friends", function(req, res) {
        //this is the array of friends sent back in JSON
      return res.json(friends);
    });

      
    // Create New reservations - takes in JSON input
    app.post("/api/friends", function(req, res) {
        
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newFriends = req.body;
      console.log(newFriends); 
      var newFriendsScores = newFriends.scores;
      var difference;

      var bestFriend = {
        name: "",
        photo: "",
        difference: 0,
      };


      for (var i = 0; i < friends.length; i++) {
           console.log(friends[i].scores);
           var currentFriends = friends[i];
           var difference = 0;

           for (var j = 0; j < newFriends.length; j++) {
             currentFriends.scores[j];
             newFriendsScores[j];
             difference+= Math.abs(parseInt(currentFriends.scores[j] - newfriends[i].scores[j]));

           }

           if (difference <= 40) {
             // statement
             bestFriend.name = currentFriends.name;
             bestFriend.photo = currentFriends.photo;
             bestFriend.difference = currentFriends.difference;
           }
         }   

         friends.push(bestFriend);
         res.send(bestFriend);
    });

};
