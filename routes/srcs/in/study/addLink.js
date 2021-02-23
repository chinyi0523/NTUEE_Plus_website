const { dbCatch } = require('../../../error');
const Study_Link = require('../../../Schemas/googlesheet_link');
const asyncHandle = require('express-async-handler')

/**
 * @api {post} /study/addLink 新增本年表單連結
 * @apiName addLink
 * @apiGroup In/study
 * @apiDescription 設定本年表單
 *
 * @apiparam {String} senior 學長姊表單連結
 * @apiparam {String} junior 學弟妹表單連結
 * 
 * @apiSuccess (201) {String} x data stored
 * 
 * @apiError (500) {String} description 資料庫錯誤
 */
module.exports = asyncHandle(async function (req, res) {
	const {senior,junior} = req.body
	await new Study_Link({
		link1: senior,
		link2: junior,
		publishTime: Date.now() //need further change
	}).save().catch(dbCatch)
	res.send('data stored')
})