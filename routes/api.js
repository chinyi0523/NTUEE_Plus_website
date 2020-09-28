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
//login, loginFB, register, registerFB
router.use(require("./srcs/out/account/main"));
//forget, activation
router.use(require("./srcs/out/forget/main"));

//in
//showVisual, chVisual, searchVisual
router.use(require("./srcs/in/profile/main"));
//showPerson, chLogin, isLogin, logout
router.use(require("./srcs/in/account/main"));
//getImg, saveImg
router.use(require("./srcs/in/column/main"));
//searchJob, addJob, addRecruitment
router.use(require("./srcs/in/career/main"));

module.exports = router;
