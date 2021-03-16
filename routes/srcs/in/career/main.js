const express = require("express");
const router = express.Router();
const ImgGet = require('../../../middleware/fileProcess');
// const Auth = require("../Auth");
// const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
// const ValidTest = require("../../../validation/validation");
// const ImgGet = require('../../../middleware/multer');

// router.post('/addJob',
// 	require('./addJob'))
// router.post('/searchJob',
// 	require('./searchJob'))
router.post('/addRecruitment',
	ImgGet('file'),
	require('./addRecruitment'))
router.post('/showRecruitment',
	require('./showRecruitment'))
router.post('/searchRecruitment',
	require('./searchRecruitment'))
router.delete('/deleteRecruitment',
	require('./deleteRecruitment'))
    
module.exports = router