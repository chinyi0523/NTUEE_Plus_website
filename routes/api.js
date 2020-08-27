//routes/api.js 控管後端所有頁面部屬 
const express = require("express");
const router = express.Router();
const ValidSend = require("./validation/control");//若valid未通過則send false
const ValidTest = require("./validation/validation");
const ImgGet = require('./middleware/multer');
const Auth = require("./srcs/in/Auth")
//test
router.get("/testClient",function(req,res){
	const path = require('path');
    res.sendFile(path.join(__dirname+"/test/testClient.html"))
})
router.post("/testRoute",require("./test/testRoute"))
//out
router.post("/login",
	ValidTest('login'),
	ValidSend,
	require("./srcs/out/login"));
router.post("/loginFB",
	require("./srcs/out/loginFB"));
router.post("/register",
	ImgGet('file'),
	ValidTest('register'),
	ValidSend,
	require("./srcs/out/register"));
router.post("/registerFB",
	ImgGet('file'),
	ValidTest("registerFB"),
	ValidSend,
	require("./srcs/out/registerFB"));
router.post("/forget",
	ValidTest('forget'),
	ValidSend,
	require("./srcs/out/forget"));
router.get("/activation", require("./srcs/out/activation"));

//in
router.post("/showPersonal",
	Auth,
	require("./srcs/in/showPersonal"));
router.post("/chLogin",	Auth,
	ValidTest('chLogin'),
	ValidSend,
	require("./srcs/in/chLogin"));
router.post("/logout",require("./srcs/in/logout"));
router.post("/showVisual", Auth, require('./srcs/in/showVisual'));
router.post("/chVisual", Auth,
	ImgGet('userimage'),
	require('./srcs/in/chVisual'));
router.post('/searchVisual', Auth,
	require('./srcs/in/searchVisual'))
router.post('/addJob',	Auth,
	require('./srcs/in/addJob'))
router.post('/searchJob', 	Auth,
	require('./srcs/in/searchJob'))
router.post('/saveImg',	Auth,
	ImgGet('file'),
	require('./srcs/in/saveImg'))
router.post('/getImg',	Auth,
	require('./srcs/in/getImg'))

router.post('/isLogin',
	require('./srcs/in/isLogin'))

router.post('/addRecruitment',
	require('./srcs/in/addRecruitment'))

module.exports = router;
