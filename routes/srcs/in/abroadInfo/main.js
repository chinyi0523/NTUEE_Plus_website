const express = require("express")
const router = express.Router()
const router_auth = express.Router()
const ImgGet = require('../../../middleware/fileProcess');

router_auth.post('/addAbroadInfo',
    ImgGet('file'),
    require('./addAbroadInfo'))

router.post('/getAbroadInfo',
    require('./getAbroadInfo'))

