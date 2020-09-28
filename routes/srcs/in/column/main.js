const express = require("express");
const router = express.Router();
const Auth = require("../Auth");
// const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
// const ValidTest = require("../../../validation/validation");
const ImgGet = require('../../../middleware/multer');

router.post('/saveImg',	Auth,
	ImgGet('file'),
	require('./saveImg'))
router.post('/getImg',	Auth,
	require('./getImg'))
    
module.exports = router