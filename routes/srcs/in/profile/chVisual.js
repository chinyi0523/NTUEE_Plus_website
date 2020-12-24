//srcs/chLogin.js
const { dbCatch, ErrorHandler } = require('../../../error');
const Visual = require('../../../Schemas/user_visual');
const updatePro = require('./DBquery/update');
const asyncHandler = require('express-async-handler')

const chVisual = async (req, res, next)=>{
    const session_account = (req.session.loginAccount)

    const obj = await Visual.findOne({"account.data":session_account}).catch(dbCatch)
    if(!obj) throw new ErrorHandler(404,'帳號不存在')
    const update = updatePro(req)
    await Visual.updateOne({"account.data":session_account},update).catch(dbCatch)
    return res.status(204).end()
}
module.exports = asyncHandler(chVisual)