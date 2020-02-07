//srcs/chLogin.js
var user_v_Schema = require('../../Schemas/user_visual');

module.exports = function (req, res, next) {
  var session_account = (req.session.loginAccount)
  if(!session_account){
	  session_account = 'b07901028' //測試用
  }
  if(session_account){
     user_v_Schema.find({"account.data":session_account}, function(err, obj){
        if (err) {
            console.log("Error:" + err);
			return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
        }
        else {
            if(obj.length === 1){
                console.log('即將更改資料',obj);
				console.log('req',req.body);
				var input = req.body;
				delete input.userimage;
				if(req.file){
					input["userimage"]={
						data:req.file.buffer,
						contentType:req.file.mimetype
					}
					console.log(input.userimage)
				}
				console.log('img=',input.userimage)
				user_v_Schema.updateOne({"account.data":session_account},{$set:input},function(err,result){
					console.log("result=",result);
					if (err) {
						console.log(err);
						return res.send({status:'success',message:false, description:err});
					}
				});
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