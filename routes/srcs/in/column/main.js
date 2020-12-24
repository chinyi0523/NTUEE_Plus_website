const express = require("express");
const router = express.Router();
// const Auth = require("../Auth");
// const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
// const ValidTest = require("../../../validation/validation");
const ImgGet = require('../../../middleware/fileProcess');

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
	require('./addColumn'))

module.exports = router