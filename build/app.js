"use strict";

var express = require('express');
var userService = require('../routes/index.js');
var app = express();
app.use("/user", userService);
app.use(express.json());
var PORT = process.env.PORT || 4590;
app.get("/", function (req, res) {
  res.send("Hello World");
});
var start = function start() {
  app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
  });
};
start();