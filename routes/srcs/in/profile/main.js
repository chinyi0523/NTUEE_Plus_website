const express = require("express");
const router = express.Router();
// const Auth = require("../Auth");
const getImg = require('../../../middleware/multer');
const valid = require('../../../validation')

router.post("/showVisual",
	require('./showVisual'));
router.post("/chVisual",
	getImg('userimage'),
	require('./chVisual'));
router.post('/searchVisual',
	valid('searchVisual'),
	require('./searchVisual'));
    
module.exports = router