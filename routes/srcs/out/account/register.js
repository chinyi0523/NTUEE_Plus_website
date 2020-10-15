//srcs/register.js
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");
const Visual = require('../../../Schemas/user_visual');

/*新增一筆使用者資料*/
async function insert(username,account,psw,file){
    await new Login({
        username : username,
        account: account,
        userpsw : psw,
        img:{
            data:file.buffer,
            contentType:file.mimetype
        }
    }).save();
}

async function insertVisual(name,account){
    await new Visual({
        username:{data : name},
        account:{data: account}
    }).save();
}
module.exports = async function (req, res) {
    const username = req.body.username;
    const account = req.body.account.toLowerCase();
    const userPsw = req.body.password;

    //密碼加密
    const newPsw = crypto.createHash("md5").update(userPsw).digest("hex");

    if(req.file===undefined) return res.status(400).send({description:"請添加照片"});
    
    try{
        const query = {account};
        const obj = await Login.findOne(query);
        if(obj) return res.status(403).send({description:"帳號已存在"});
        await insert(username,account,newPsw,req.file);
        await insertVisual(username,account);
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