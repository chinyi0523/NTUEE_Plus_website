const express = require("express");
const router = express.Router();
// const Auth = require("../Auth");
const valid = require("../../../validation");
// const ImgGet = require('../../../middleware/multer');

router.post("/showPersonal",
	require("./showPersonal"));
router.post("/chPassword",
	valid('chPassword'),
	require("./chPassword"));

module.exports = router