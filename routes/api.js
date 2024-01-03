var express = require("express");
var router = express.Router();

const projects = require("../data/projects.json");
const articles = require("../data/articles.json");

router.get("/projects", (request, response, next) => {
  response.json(projects);
});

router.get("/articles", (request, response, next) => {
  response.json(articles);
});

module.exports = router;
