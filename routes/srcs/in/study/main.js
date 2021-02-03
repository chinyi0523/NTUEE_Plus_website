const express = require("express");
const router = express.Router();

router.post('study_matching',require('./runMatch/main'))

module.exports = router