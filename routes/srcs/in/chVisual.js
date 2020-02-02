//srcs/chLogin.js
var user_v_Schema = require('../../Schemas/user_visual');

module.exports = function (req, res, next) {
  var session_account = req.session.loginAccount;
  if(session_account){
     user_v_Schema.find({"account.data":session_account}, function(err, obj){
        if (err) {
            console.log("Error:" + err);
			return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
        }
        else {
            if(obj.length === 1){
                console.log('發現帳號',obj);
				console.log('req',req.body);
				console.log('name',req.body.username);
				
				/*user_v_Schema.updateOne({"account.data":session_account},{$set:req.body},function(err,result){
					console.log(result);
					if (err) return res.send({status:'success',message:false, description:err});
				});*/
				return res.send({status:'success',message:true});
            }else{
                console.log('駭客4你?');
				console.log("session:",session_account);
                return res.send({status:'success',message:false, description:"帳號不存在或重複"}); 
            }
        }
    })
  }else{
	  return res.send({status:'success',message:false,description:"session不存在/已過期"}); 
  }
}