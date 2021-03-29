const getAbroadInfo = require('./info/getAbroadInfo')
const asynchandler = require('express-async-handler')
const { dbCatch , ErrorHandler } = require('../../../error')

/**
 * @api {post} getAbroadInfo 拿AbroadInfo資料
 * @apiName GetAbroadInfo
 * @apiGroup In/column
 * 
 * @apiparam {String} //?
 * 
 * @apiSuccess
 * 
 * @apiError (404) {String} 資料不存在
 * @apiError (500) {String} 資料庫錯誤
 */

module.exports = asyncHandler(async (req, res, next)=>{
    const getDone = await getAbroadInfo(req.body.id)
    if (!getDone) throw new ErrorHandler(404, "找不到資料")
    return res.status(201).send(getDone)
})