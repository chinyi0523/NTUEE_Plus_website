//srcs/login.js
var user_l_Schema = require('../../Schemas/user_login');

module.exports = function (req, res, next) {
	var facebookID = req.body.facebookID;
	var query = {facebookID: facebookID};
	user_l_Schema.find(query, function(err, obj){
		if (err) {
			console.log("Error:" + err);
			return res.send({status:'success',message:false,description:"資料庫發生錯誤"});
		}
		else {
			if(obj.length == 1){
				console.log('登入成功',obj);
				req.session.regenerate(function(err) {
					if(err){
						console.log("session建立失敗，err=\n",err);
						return res.send({
							status:'success',
							message:false,
							description:"session建立失敗"
							});                
					}
					req.session.loginName = obj[0].username;
					req.session.loginAccount = obj[0].account;
					return res.send({status:'success',message:true, username:obj[0].username});
					//res.redirect('/');
					});
			}else{
				console.log('帳號不存在');
				return res.send({status:'success',message:false,username:"Not found!"}); 
			}
		}
	})
}