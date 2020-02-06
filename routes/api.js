//routes/api.js 控管後端所有頁面部屬 
var express = require("express");
var router = express.Router();
const ValidSend = require("./validation/controll");//若valid未通過則send false
var ValidTest = require("./validation/validation");
var ImgGet = require('./middleware/multer')

router.post("/login",
	ValidTest('login'),
	ValidSend,
	require("./srcs/out/login"));
router.post("/register",
	ImgGet,
	ValidTest('register'),
	ValidSend,
	require("./srcs/out/register"));
router.post("/forget",
	ValidTest('forget'),
	ValidSend,
	require("./srcs/out/forget"));
router.get("/activation", require("./srcs/out/activation"));

router.post("/showPersonal", require("./srcs/in/showPersonal"));
router.post("/chLogin",
	ValidTest('chLogin'),
	ValidSend,
	require("./srcs/in/chLogin"));
router.post("/logout",require("./srcs/in/logout"));
router.post("/showVisual",require('./srcs/in/showVisual'));
router.post("/chVisual",
	ImgGet,
	require('./srcs/in/chVisual'));
	

module.exports = router;