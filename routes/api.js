//routes/api.js 控管後端所有頁面部屬 
var express = require("express");
var router = express.Router();
const ValidSend = require("./validation/controll");//若valid未通過則send false
var ValidTest = require("./validation/validation");
var ImgGet = require('./middleware/multer');
//test
router.get("/test",function(req,res){
	const path = require('path');
    res.sendFile(path.join(__dirname+"/testClient/test.html"))
})
//out
router.post("/login",
	ValidTest('login'),
	ValidSend,
	require("./srcs/out/login"));
router.post("/register",
	ImgGet('file'),
	ValidTest('register'),
	ValidSend,
	require("./srcs/out/register"));
router.post("/forget",
	ValidTest('forget'),
	ValidSend,
	require("./srcs/out/forget"));
router.get("/activation", require("./srcs/out/activation"));

//in
router.post("/showPersonal", require("./srcs/in/showPersonal"));
router.post("/chLogin",
	ValidTest('chLogin'),
	ValidSend,
	require("./srcs/in/chLogin"));
router.post("/logout",require("./srcs/in/logout"));
router.post("/showVisual",require('./srcs/in/showVisual'));
router.post("/chVisual",
	ImgGet('userimage'),
	require('./srcs/in/chVisual'));
router.post('/searchVisual',
	require('./srcs/in/searchVisual'))
router.post('/addJob',
	require('./srcs/in/addJob'))
router.post('/saveImg',
	ImgGet('file'),
	require('./srcs/in/saveImg'))

module.exports = router;
