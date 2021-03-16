const { dbCatch } = require('../../../error')
const asyncHandler = require('express-async-handler')

module.exports = asyncHandler(async (req, res)=>{
    const {title, info} = req.body
    const schoolIcon = req.file
    const icon = {data:schoolIcon.buffer, contentType:schoolIcon.mimetype}
    
})