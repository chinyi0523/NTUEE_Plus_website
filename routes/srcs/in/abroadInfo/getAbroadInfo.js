const asyncHandler = require('express-async-handler')
const { dbcatch, ErrorHandler } = require('../../../error')
const AbroadInfo = require('../../../Schemas/abroad_info')

module.exports = asyncHandler(async (req, res)=>{
	//const getDone = await getAbroadInfo(req.body.title)
    const getDone = await AbroadInfo.findOne(req.body.title).catch(dbcatch)
	if (!getDone) throw new ErrorHandler(404, "找不到資料")
	return res.status(201).send(getDone)
})