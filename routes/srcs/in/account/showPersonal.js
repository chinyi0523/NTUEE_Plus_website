//srcs/login.js
const { dbCatch } = require('../../../error');
const Login = require('../../../Schemas/user_login');

module.exports = async function (req, res, next) {
    const session_account = req.session.loginAccount

    const obj = await Login.findOne({account:session_account},"username account").catch(dbCatch)
    
    if(!obj) return//throw new ErrorHandler(403,'帳號不存在')
    return res.status(201).json({
        username:obj.username,
        account:obj.account
    })
}