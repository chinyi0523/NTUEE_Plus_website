const express = require("express");
const router = express.Router();
// const Auth = require("../Auth");
// const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
// const ValidTest = require("../../../validation/validation");
const ImgGet = require('../../../middleware/fileProcess');
const getImg = require("./getImg");

router.post('/saveImg',
	ImgGet('file'),
	require('./saveImg'))
	
router.post('/getImg',
	require('./getImg'))
	
router.post('/getDetail',
	require('./getDetail'))

router.post('/getOutline',
	require('./getOutline'))

router.post('/addColumn',
	ImgGet('file'),
	require('./addColumn'))

router.post('/column/search',
	require('./search'))

module.exports = router