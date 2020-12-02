//srcs/register.js
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");
const Visual = require('../../../Schemas/user_visual');
const { ErrorHandler, dbCatch } = require('../../../error');

/*新增一筆使用者資料*/
async function insert(username,account,psw,file,visual){
    await new Login({
        username : username,
        account: account,
        userpsw : psw,
        img:{
            data:file.buffer,
            contentType:file.mimetype
        },
        visual:visual._id
    }).save().catch(dbCatch)
}

async function insertVisual(name,account,email){
    return await new Visual({
        username:{data : name},
        account:{data: account},
        publicEmail:{data: email}
    }).save().catch(dbCatch)
}

/**
 * @api {post} /register register
 * @apiName Register
 * @apiGroup Out/account
 * @apiDescription 註冊(by 學號 & email)
 * 
 * @apiHeaderExample {json} config
                 { "content-type": "multipart/form-data" }
 *
 * @apiparam {String} account 學號
 * @apiparam {String} password 密碼(以後建議在前端加密)
 * @apiparam {String} username 使用者名字
 * @apiparam {String} Email 信箱 
 * @apiparam {File} file 身分證明的照片
 * 
 * @apiSuccess (201) {String} username 使用者名字
 * 
 * @apiError (400) {String} description 請添加照片
 * @apiError (403) {String} description 帳號已存在
 * 
 * @apiError (500) {String} description 資料庫錯誤
 */
module.exports = async function (req, res) {
    const {username,password,Email} = req.body
    const account = req.body.account.toLowerCase()

    //密碼加密
    const newPsw = crypto.createHash("md5").update(password).digest("hex")

    if(req.file===undefined) throw new ErrorHandler(400,"請添加照片")
    
    const query = {account}
    const isRegistered = await Login.exists(query).catch(dbCatch)
    if(isRegistered) throw new ErrorHandler(403,'帳號已存在')
    const user = await insertVisual(username,account,Email)
    await insert(username,account,newPsw,req.file,user)
    req.session.loginName = username
    req.session.loginAccount = account
    return res.status(201).send({username})
}