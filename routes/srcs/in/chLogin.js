//srcs/chLogin.js
const user_l_Schema = require('../../Schemas/user_login');

module.exports = function (req, res, next) {
  const session_account = req.session.loginAccount;
  const NQ = req.body.question;
  if(NQ===""||!NQ){
	  return res.send({status:'success',message:false, description:"問題不得為空"}); 
  }
  if(session_account){
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
                console.log('駭客4你?'); 
				console.log("session:",session_account);
                res.send({status:'success',message:false, description:"session不匹配"}); 
            }
        }
    })
  }else{
	  res.send({status:'success',message:false,description:"session不存在(已過期?)"}); 
  }
}