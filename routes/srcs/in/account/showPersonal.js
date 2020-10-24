//srcs/login.js
const Login = require('../../../Schemas/user_login');

module.exports = async function (req, res, next) {
    const session_account = req.session.loginAccount;

    try{
        const obj = await Login.findOne({account:session_account},"username account");
        if(!obj) return res.status(403).send({description:"帳號不存在"});
        return res.status(201).send({
            username:obj.username,
            account:obj.account,
            email:obj.private_Email,
            SQ:obj.question
        })
    }catch(e){
        console.log(e)
        return res.status(500).send({description:"資料庫錯誤"})
    }
//     Login.find({account:session_account}, function(err, obj){
//     if (err) {
//         console.log("Error:" + err);
//         return res.status(500).send({description:"資料庫錯誤"}); 
//     }
//     else {
//         if(obj.length === 1){
//             //console.log('登入成功',obj);
//             //const prefix="data:"+obj[0].img.contentType+";base64,"
//             //var img = window.btoa(String.fromCharCode.apply(null, obj[0].img.data));
//             //const img = new Buffer(obj[0].img.data, 'binary').toString('base64')
//             res.status(201).send({
//                 username:obj[0].username,
//                 account:obj[0].account,
//                 email:obj[0].private_Email,
//                 SQ:obj[0].question,
//                 //img:(prefix+img)
//             });
//         }else{
//             console.log("session不匹配:",session_account);
//             //res.send({status:'success',message:false, description:"session不匹配"}); 
//             res.status(403).send({data:'session不匹配'});
//         }
//     }
// })
}