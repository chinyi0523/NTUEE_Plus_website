const express = require("express");
const router = express.Router();
const ValidSend = require("../../../validation/control");//若valid未通過則res.send false
const ValidTest = require("../../../validation/validation");

router.post("/forget",
	ValidTest('forget'),
	ValidSend,
	require("./forget"));
router.post("/activation",
	ValidTest('activation'),
	ValidSend,
    require("./activation"));

module.exports = router;