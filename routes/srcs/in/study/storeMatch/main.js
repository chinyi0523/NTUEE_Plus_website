const asyncHandle = require('express-async-handler')
const parseExcel = require('./parseExcel')
const store = require('./sendmails')

/**
 * @api {post} /study_matching 配對
 * @apiName Study_matching
 * @apiGroup In/study
 * @apiDescription 給學長姊跟學弟妹留學配對的.xlsx檔，幫他們配對
 * 
 * @apiHeaderExample {json} config
                 { "content-type": "multipart/form-data" }
 * @apiParam {File} senior 學長姐的.xlsx
 * @apiParam {File} junior 學弟妹的.xlsx
 * 
 * @apiSuccess (200) {File} - output.xlsx
 */
const post = asyncHandle(async (req,res,next)=>{
    const result = req.file
    console.log(result)
    
    await store(__dirname+'/uploads/result.xlsx')
})

module.exports = [parseExcel('result'),post]