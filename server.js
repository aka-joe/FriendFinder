// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC DATA ROUTE
app.use(express.static(path.join(__dirname, 'app')));

// ROUTER
require(path.join(__dirname, "app/routing/apiRoutes"))(app);
require(path.join(__dirname, "app/routing/htmlRoutes"))(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});