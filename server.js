const express = require("express");

// Set the environment variable PORT or 8080
const PORT = process.env.PORT || 8080;

// Use the express.urlencoded built-in middleware function to parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// Use the express.json built-in middleware function to parses incoming requests with JSON payloads 
app.use(express.json());
// Use the express.static built-in middleware function to serve static files
app.use(express.static('public'));

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/burgersController");
app.use(routes);

// Start the server so that it can begin listening to client requests
app.listen(PORT, function() {
  // Log (server-side) when the server has started
  console.log("Server listening on: http://localhost:" + PORT);
});