const express = require("express");
const router = express.Router();

router.post('/manageAuth',require('./manageAuth'))
router.post('/handlePending',require('./handlePending'))
router.post('/showPending',require('./showPending'))

module.exports = router