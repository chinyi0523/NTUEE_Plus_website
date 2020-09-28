//routes/api.js 控管後端所有頁面部屬 
const express = require("express");
const router = express.Router();
const ValidSend = require("./validation/control");//若valid未通過則send false
const ValidTest = require("./validation/validation");
const ImgGet = require('./middleware/multer');
const Auth = require("./srcs/in/Auth");
// const asyncHandler = require("express-async-handler");//for aysnc err handling
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
	require("./srcs/out/account/login"));
router.post("/loginFB",
	require("./srcs/out/account/loginFB"));
router.post("/register",
	ImgGet('file'),
	ValidTest('register'),
	ValidSend,
	require("./srcs/out/account/register"));
router.post("/registerFB",
	ImgGet('file'),
	ValidTest("registerFB"),
	ValidSend,
	require("./srcs/out/account/registerFB"));
router.post("/forget",
	ValidTest('forget'),
	ValidSend,
	require("./srcs/out/forget/forget"));
router.post("/activation",
	ValidTest('activation'),
	ValidSend,
	require("./srcs/out/forget/activation"));

//in
router.post("/showPersonal",
	Auth,
	require("./srcs/in/account/showPersonal"));
router.post("/chLogin",	Auth,
	ValidTest('chLogin'),
	ValidSend,
	require("./srcs/in/account/chLogin"));
router.post("/logout",require("./srcs/in/account/logout"));
router.post("/showVisual", Auth, require('./srcs/in/profile/showVisual'));
router.post("/chVisual", Auth,
	ImgGet('userimage'),
	require('./srcs/in/profile/chVisual'));
router.post('/searchVisual', Auth,
	require('./srcs/in/profile/searchVisual'))
router.post('/addJob',	Auth,
	require('./srcs/in/career/addJob'))
router.post('/searchJob', 	Auth,
	require('./srcs/in/career/searchJob'))
router.post('/saveImg',	Auth,
	ImgGet('file'),
	require('./srcs/in/column/saveImg'))
router.post('/getImg',	Auth,
	require('./srcs/in/column/getImg'))

router.post('/isLogin',
	require('./srcs/in/account/isLogin'))

router.post('/addRecruitment',
	require('./srcs/in/career/addRecruitment'))

module.exports = router;
