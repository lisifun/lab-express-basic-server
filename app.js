// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
require("dotenv").config();
var express = require("express");
var logger = require("morgan");

var apiRouter = require("./routes/api");

// CREATE EXPRESS APP
// Here you should create your Express app:
var app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));

app.use("/api", apiRouter);

// ROUTES
// Start defining your routes here:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response, next) => {
  response.sendFile(__dirname + "/views/blog.html");
});

// START THE SERVER
// Make your Express server listen on port 4000:
app.listen(process.env.PORT, () => {
  console.log("Server is listening on " + process.env.PORT);
});
