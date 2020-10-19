//srcs/register.js
const Login = require('../../../Schemas/user_login');
//const crypto = require("crypto");
const Visual = require('../../../Schemas/user_visual');

/*新增一筆使用者資料*/
async function insertFB(name, account, facebookID, file) {
    //格式
    await new Login({
        username: name,
        account: account,
        facebookID: facebookID,
        img: {
            data: file.buffer,
            contentType: file.mimetype
        }
    }).save();
    // console.log('img=', user.img)
    // user.save(function (err, res) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log('成功儲存：', user);
    //         console.log(res);
    //     }
    // })
}
async function insertVisual(name,account){
    await new Visual({
        username:{data : name},
        account:{data: account}
    }).save();
      
    //   user.save(function(err,res){
    //       if(err){
    //           console.log(err);
    //           resolve(false);
    //       }
    //       else{
    //           console.log('成功儲存：',user);
    //           resolve( res);
    //       }
    //   })
}
module.exports = async function (req, res) {
    const username = req.body.username;
    const account = req.body.account.toLowerCase();
    const userFBid = req.body.facebookID;

    if(req.file===undefined) return res.status(400).send({message:false,description:"請添加照片"});

    try{
        const query = { account: account }
        const isRegistered = await Login.exists(query)
        if(isRegistered) return res.status(403).send({description: "帳號已存在" })
        await insertFB(username, account, userFBid, req.file);
        await insertVisual(username,account);
        req.session.loginName = username;
        req.session.loginAccount = account;
        return res.status(201).send({username});
    }catch(e){
        console.log(e)
        return res.status(500).send({description:"資料庫錯誤"});
    }

    // Login.find(query, function (err, obj) {
    //     if (err) {
    //         console.log("Error:" + err);
    //         return res.status(500).send({description: "資料庫錯誤" });
    //     }
    //     else {
    //         if (obj.length == 0) {
    //             console.log("新增帳號");
    //             insertFB(username, account, userFBid, req.file);
    //             insertVisual(username,account);
    //             res.status(201).send({username: username })
    //         } else {
    //             console.log("已有此帳號");
    //             res.status(403).send({description: "帳號已存在" })
    //         }
    //     }
    // })
}