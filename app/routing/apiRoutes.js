// LOAD DATA
var friends = require("../data/friends");

// ROUTING
module.exports = function (app) {

  // API GET Request
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var bestMatch = {};
    var bestMatchIndex = 0;
    var bestMatchDifference = 40;

    // Find the best match
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      // Calculate scores
      for (var j = 0; j < friends[i].scores.length; j++) {
        var differenceOneScore = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
        totalDifference += differenceOneScore;
      }

      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      }
    }

    // the best match index is used to get the best match data from the friends index
    bestMatch = friends[bestMatchIndex];

    // Put new friend from survey in database array
    friends.push(newFriend);

    // return the best match friend
    res.json(bestMatch);
  });
};