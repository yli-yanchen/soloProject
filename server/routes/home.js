const path = require("path");
const express = require("express");
const routes = express.Router();


routes.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/subpage/about.html"));
});

routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/index.html"));
});


module.exports = routes;
