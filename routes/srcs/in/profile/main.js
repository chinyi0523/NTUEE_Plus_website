const express = require("express");
const router = express.Router();
const Auth = require("../Auth");
const ImgGet = require('../../../middleware/multer');

router.post("/showVisual", Auth, require('./showVisual'));
router.post("/chVisual", Auth,
	ImgGet('userimage'),
	require('./chVisual'));
router.post('/searchVisual', Auth,
    require('./searchVisual'));
    
module.exports = router