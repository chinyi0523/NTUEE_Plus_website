//routes/api.js 控管後端所有頁面部屬 
var express = require("express");
var router = express.Router();
const ValidSend = require("./validation/controll");//若valid未通過則send err 422


router.post("/login",
	require("./validation/valiLogin")(),
	ValidSend,
	require("./srcs/out/login"));
router.post("/register",
	require("./validation/valiRegister")(),
	ValidSend,
	require("./srcs/out/register"));
router.post("/forget",
	require("./validation/valiForget")(),
	ValidSend,
	require("./srcs/out/forget"));
router.get("/activation", require("./srcs/out/activation"));

router.post("/showPersonal", require("./srcs/in/showPersonal"));
router.post("/chLogin",
	require("./validation/valiChLogin")(),
	ValidSend,
	require("./srcs/in/chLogin"));
router.post("/logout", require("./srcs/in/logout"));

module.exports = router;