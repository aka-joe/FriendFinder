// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;

// TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC DATA
app.use(express.static(path.join(__dirname, 'app/public')));

// ROUTER
require(path.join(__dirname, "app/routing/apiRoutes"))(app);
require(path.join(__dirname, "app/routing/htmlRoutes"))(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});