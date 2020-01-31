//srcs/login.js
var user_l_Schema = require('../../Schemas/user_login');
var crypto = require("crypto");

module.exports = function (req, res, next) {
	var account = req.body.account.toLowerCase();
	var UserPsw = req.body.password;
	//密碼加密  
	var md5 = crypto.createHash("md5");
	var newPas = md5.update(UserPsw).digest("hex");
	var query = {account: account};//,userpsw:newPas};
	user_l_Schema.find(query, function(err, obj){
		if (err) {
			console.log("Error:" + err);
			return res.send({status:'success',message:false,description:"資料庫發生錯誤"});
		}
		else {
			if(obj.length == 1){
				if(obj[0].userpsw===newPas){
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
						return res.send({status:'success',message:true,data:{username:obj[0].username,account:obj[0].account}});
						//res.redirect('/');
					});
				}else{
					console.log('密碼錯誤\n',obj[0].userpsw,'\n!=\n',newPas);
					return res.send({status:'success',message:false,description:"密碼錯誤"});
				}
			}else{
				console.log('帳號不存在');
				return res.send({status:'success',message:false,description:"帳號不存在"}); 
			}
		}
	})
}