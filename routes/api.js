//routes/api.js 控管後端所有頁面部屬 
var express = require("express");
var router = express.Router();

router.post("/login", require("../srcs/out/login"));
router.post("/register", require("../srcs/out/register"));
router.post("/forget", require("../srcs/out/forget"));
router.get("/activation", require("../srcs/out/activation"));

router.post("/showPersonal", require("../srcs/in/showPersonal"));
router.post("/chLogin", require("../srcs/in/chLogin"));
router.post("/logout", require("../srcs/in/logout"));

module.exports = router;