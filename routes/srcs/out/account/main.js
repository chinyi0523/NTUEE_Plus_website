const express = require("express");
const router = express.Router();
const valid = require("../../../validation");
const getImg = require('../../../middleware/multer');

router.post("/login",
	valid('login'),
	require("./login"));
router.post("/loginFB",
	require("./loginFB"));
router.post("/register",
	getImg('file'),
	valid('register'),
	require("./register"));
router.post("/registerFB",
	getImg('file'),
	valid("registerFB"),
	require("./registerFB"));
router.post("/logout",require("./logout"));
router.post('/isLogin',
	require('./isLogin'))
    
module.exports = router;
