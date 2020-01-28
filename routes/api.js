//routes/api.js 控管後端所有頁面部屬 
var express = require("express");
var router = express.Router();

router.post("/login", require("../srcs/login"));
router.post("/register", require("../srcs/register"));
router.post("/forget", require("../srcs/forget"));
router.get("/activation", require("../srcs/activation"));


module.exports = router;