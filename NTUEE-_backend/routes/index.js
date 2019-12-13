var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", __dirname + "../public/index.html");
});

module.exports = router;
