"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
app.post("/logpush", function (req, res) {
  console.log(req);
});
app.listen(918, function () {
  return console.log("Server running on port 0918");
});