//srcs/chLogin.js
const user_l_Schema = require('../../Schemas/user_login');

module.exports = function (req, res, next) {
    const session_account = req.session.loginAccount;
    const NQ = req.body.question;
    user_l_Schema.find({account:session_account}, function(err, obj){
    if (err) {
        console.log("Error:" + err);
        return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
    }
    else {
        if(obj.length === 1){
            console.log('發現帳號',obj);
            user_l_Schema.updateOne({account:session_account},{$set:{question:NQ}},function(err,res){
                if (err) return res.send({status:'success',message:false, description:err});
            });
            res.send({status:'success',message:true});
        }else{
            console.log("session:",session_account);
            res.send({status:'success',message:false, description:"帳號不存在或存在多個帳號"}); 
        }
    }
    })
}