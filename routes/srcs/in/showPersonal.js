//srcs/login.js
var user_l_Schema = require('../../Schemas/user_login');

module.exports = function (req, res, next) {
  var session_account = req.session.loginAccount;
  if(session_account){
     user_l_Schema.find({account:session_account}, function(err, obj){
        if (err) {
            console.log("Error:" + err);
			return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
        }
        else {
            if(obj.length === 1){
                console.log('登入成功',obj);
				var prefix="data:"+obj[0].img.contentType+";base64,"
				//var img = window.btoa(String.fromCharCode.apply(null, obj[0].img.data));
				var img = new Buffer(obj[0].img.data, 'binary').toString('base64')
				res.send({status:'success',message:true,data:{
					username:obj[0].username,
					account:obj[0].account,
					email:obj[0].private_Email,
					SQ:obj[0].question,
					img:(prefix+img)
				}});
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