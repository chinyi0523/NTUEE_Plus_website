const express = require("express");
const router = express.Router();
const router_auth = express.Router()

router_auth.post('/addLink',require('./addLink'))
router_auth.post('/study_matching',require('./runMatch/main'))

module.exports = {router,router_auth}