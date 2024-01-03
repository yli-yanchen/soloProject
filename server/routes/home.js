const path = require("path");
const express = require("express");
const app = require("..");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("this is signup page.");
});

router.get("/", (req, res) => {
  // console.log("this is home.js under routes");
  try {
    res.sendFile(path.resolve(__dirname, "../../client/index.html"));
  } catch (error) {
    res.status(500).send({ message: "router get method error" }); 
  }
});


module.exports = router;
