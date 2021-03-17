const { dbCatch } = require('../../../error')
const Abroad_info = require('../../../Schemas/abroad_info')
const asyncHandler = require('express-async-handler')

module.exports = asyncHandler(async (req, res)=>{
    const {title, info} = req.body
    const schoolIcon = req.file
    const icon = {data:schoolIcon.buffer, contentType:schoolIcon.mimetype}
    console.log("新增abroadInfo", title)
    const objAbroadInfo = {title, info, icon}
    await new Abroad_info(objAbroadInfo).save().catch(dbCatch)
    res.status(201).send({title})
    return title
})