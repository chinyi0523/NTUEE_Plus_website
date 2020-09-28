const express = require("express");
const router = express.Router();
const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
const ValidTest = require("../../../validation/validation");
const ImgGet = require('../../../middleware/multer');

router.post("/login",
	ValidTest('login'),
	ValidSend,
	require("./login"));
router.post("/loginFB",
	require("./loginFB"));
router.post("/register",
	ImgGet('file'),
	ValidTest('register'),
	ValidSend,
	require("./register"));
router.post("/registerFB",
	ImgGet('file'),
	ValidTest("registerFB"),
	ValidSend,
    require("./registerFB"));
    
module.exports = router;
