//srcs/chLogin.js
const { dbCatch, ErrorHandler } = require('../../../error');
const Login = require('../../../Schemas/user_login');
const asyncHandler = require('express-async-handler')

const chPsw = async (req, res, next) => {
    const session_account = req.session.loginAccount

    let {oldPsw,newPsw} = req.body;
    oldPsw = crypto.createHash("md5").update(oldPsw).digest("hex")
    newPsw = crypto.createHash("md5").update(newPsw).digest("hex")

    const obj = await Login.findOne({account:session_account}).catch(dbCatch)
    if(!obj) throw new ErrorHandler(404,'帳號不存在')
    if(obj.userpsw!==oldPsw) throw new ErrorHandler(401,'原始密碼錯誤')
    
    await Login.updateOne(
        {account:session_account},
        {$set:{userpsw:newPsw}}
    ).catch(dbCatch)
    return res.status(204).end()
}
module.exports = asyncHandler(chPsw)