//srcs/register.js
const { ErrorHandler, dbCatch } = require('../../../error');
const Login = require('../../../Schemas/user_login');
//const crypto = require("crypto");
const Visual = require('../../../Schemas/user_visual');
const asyncHandler = require('express-async-handler')

async function insertFB(name, account, facebookID, file, user) {
    await new Login({
        username: name,
        account: account,
        facebookID: facebookID,
        img: {
            data: file.buffer,
            contentType: file.mimetype
        },
        visual:user._id
    }).save().catch(dbCatch)
}
async function insertVisual(name,account){
    return await new Visual({
        username:{data : name},
        account:{data: account}
    }).save().catch(dbCatch)
}
const registerFB = async (req, res) => {
    const username = req.body.username;
    const account = req.body.account.toLowerCase();
    const userFBid = req.body.facebookID;

    if(req.file===undefined) throw new ErrorHandler(400,'請添加照片')

    const query = { account }
    const isRegistered = await Login.exists(query).catch(dbCatch)
    if(isRegistered) throw new ErrorHandler(403,'帳號已存在')
    const user = await insertVisual(username,account)
    await insertFB(username, account, userFBid, req.file, user)
    req.session.loginName = username
    req.session.loginAccount = account
    return res.status(201).send({username})
}

module.exports = asyncHandler(registerFB)