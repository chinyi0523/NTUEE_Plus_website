//srcs/chLogin.js
const user_v_Schema = require('../../Schemas/user_visual');
const readDB = require('./readDB');
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
				const update = readDB.chDB(req);
				user_v_Schema.updateOne({"account.data":session_account},update,function(err,result){
					console.log("result=",result);
					user_v_Schema.updateOne({"account.data":session_account},
					{$pull:{"Occupation":null}},
					function(err2,result2){console.log('deleted array(may be undefined)=',result2)});
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