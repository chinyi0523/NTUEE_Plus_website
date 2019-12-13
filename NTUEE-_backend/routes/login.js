var express = require("express");
var router = express.Router();
var loginPage = require("../srcs/loginFunc");

// 登入主頁面
router.post("/", function(req, res, next) {
  loginPage(req, res, next);
});

module.exports = router;
