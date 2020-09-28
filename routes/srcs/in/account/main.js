const express = require("express");
const router = express.Router();
const Auth = require("../Auth");
const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
const ValidTest = require("../../../validation/validation");
// const ImgGet = require('../../../middleware/multer');

router.post("/showPersonal",
	Auth,
	require("./showPersonal"));
router.post("/chLogin",	Auth,
	ValidTest('chLogin'),
	ValidSend,
	require("./chLogin"));
router.post("/logout",require("./logout"));
router.post('/isLogin',
	require('./isLogin'))
    
module.exports = router