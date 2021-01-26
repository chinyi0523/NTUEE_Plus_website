const { dbCatch } = require('../../../error');
const Recruitment = require('../../../Schemas/recruitment');
const asyncHandler = require('express-async-handler')

async function deleteRecruitment (req, res, next) {
    console.log(req.body)
    const deletedRecruitment = await Recruitment.findByIdAndDelete(req.body._id).catch(dbCatch)
    let deletedtitle = deletedRecruitment? deletedRecruitment.title.title : '_id not exists'
    console.log('delete:', deletedtitle)
    res.status(200).send({data: deletedtitle})
}


/**
 * @api {delete} /deleteRecruitment 新增職缺
 * @apiName DeleteRecruitment
 * @apiGroup In/career
 * 
 * @apiparam {String} _id 要刪除職缺的mongodb _id
 * 
 * @apiSuccess (200) data 刪除職缺標題
 * 
 * @apiError (500) {String} description 資料庫錯誤
 */

module.exports = asyncHandler(deleteRecruitment);