// LOAD DATA
var friendsData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  
    // API GET Request
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  
  // API POST Requests
  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    res.json(req.body);
  });
};