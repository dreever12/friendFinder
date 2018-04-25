app.get("/api/freinds", function(req, res) {
	res.json(friends);
});


// Create New reservations - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;

  console.log(newFriend);

  if(friends.length === true) {
    friends.push(newFreind);
      res.json(true);
  } else {
    alert("Please Aanswser all questions");
      res.json(false);
  }
});