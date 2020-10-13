const express = require("express");
const router = express.Router();
// const Auth = require("../Auth");
const ImgGet = require('../../../middleware/multer');

router.post("/showVisual",
	require('./showVisual'));
router.post("/chVisual",
	ImgGet('userimage'),
	require('./chVisual'));
router.post('/searchVisual',
    require('./searchVisual'));
    
module.exports = router