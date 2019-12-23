var express = require("express");
var router = express.Router();
var regPage = require("../srcs/registerFunc");

// 註冊主頁面
router.post("/", function(req, res) {
  regPage(req, res);
});

module.exports = router;
