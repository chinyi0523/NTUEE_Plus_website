//srcs/login.js
const { dbCatch } = require('../../../error');
const Visual = require('../../../Schemas/user_visual');
const Login = require('../../../Schemas/user_login');
const getPrivate = require('./DBquery/getPrivate');
const asyncHandler = require('express-async-handler')

async function insertVisual(name,account){
    const user = await new Visual({
        username:{data : name},
        account:{data: account}
    }).save().catch(dbCatch)

    Login.updateOne({account},{$set:{visual:user._id}}).exec().catch(dbCatch)

    return user
}

const shVisual = async (req, res, next)=>{
    let session_account = req.session.loginAccount

    let obj = await Visual.findOne({"account.data":session_account}).catch(dbCatch)
    if(!obj){
        if(!session_account) return//for dev
        obj = await insertVisual(req.session.loginName,session_account)
    }
    const user = getPrivate(obj)
    return res.status(201).send({data:user})
}
module.exports = asyncHandler(shVisual)