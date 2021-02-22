const express = require("express");
const router = express.Router();

router.post('/manageAuth',require('./manageAuth'))

module.exports = router