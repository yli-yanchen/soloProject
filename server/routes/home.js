const path = require("path");
const express = require("express");
const routes = express.Router();

app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/subpage/signup.html"));
});

routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/index.html"));
});




module.exports = routes;
