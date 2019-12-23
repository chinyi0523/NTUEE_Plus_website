var express = require("express");
var router = express.Router();

var loginRouter = require("./login");
var indexRouter = require("./index");
var registerRouter = require("./register");

router.use("/", indexRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);

module.exports = router;
