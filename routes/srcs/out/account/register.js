//srcs/register.js
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");
const Visual = require('../../../Schemas/user_visual');

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
    }).save();
}

async function insertVisual(name,account,email){
    return await new Visual({
        username:{data : name},
        account:{data: account},
        publicEmail:{data: email}
    }).save();
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
 * @apiError (400) {String} description "請添加照片"
 * 
 * @apiError (403) {String} description "帳號已存在"
 * 
 * @apiError (500) {String} description "資料庫錯誤"
 */
module.exports = async function (req, res) {
    const {username,password,Email} = req.body;
    const account = req.body.account.toLowerCase();

    //密碼加密
    const newPsw = crypto.createHash("md5").update(password).digest("hex");

    if(req.file===undefined) return res.status(400).send({description:"請添加照片"});
    
    try{
        const query = {account};
        const isRegistered = await Login.exists(query);
        if(isRegistered) return res.status(403).send({description:"帳號已存在"});
        const user = await insertVisual(username,account,Email);
        await insert(username,account,newPsw,req.file,user);
        req.session.loginName = username;
        req.session.loginAccount = account;
        return res.status(201).send({username});
    }catch(e){
        console.log(e);
        return res.status(500).send({description:"資料庫錯誤"});
    }
//   if(obj)
//     Login.find(query, function(err, obj){
//         if (err) {
//             console.log("Error:" + err);
// 			return res.status(500).send({description:"資料庫錯誤"});
//         }
//         else {
//             if(obj.length == 0){
// 				console.log("新增帳號");
//                 insert(UserName,Useraccount,newPas,req.file);
// 				req.session.regenerate(function(err) {
// 					if(err){
// 						console.log("session建立失敗，err=\n",err);
// 						return res.status(500).send({
// 							description:"session建立失敗"
// 							});
// 					}
// 					req.session.loginName = UserName;
//                     req.session.loginAccount = Useraccount;
//                     insertVisual(UserName,Useraccount);
// 					return res.status(201).send({username:UserName});
// 						//res.redirect('/');
// 				});
                
//             }else{
// 				console.log("已有此帳號");
//                 res.status(403).send({description:"帳號已存在"});
//             }
//         }
//     })
}