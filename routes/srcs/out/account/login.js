//srcs/login.js
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");


module.exports = function (req, res, next) {
	const account = req.body.account.toLowerCase();
	const UserPsw = req.body.password;
	//密碼加密  
	let md5 = crypto.createHash("md5");
	const newPas = md5.update(UserPsw).digest("hex");
	const query = {account: account};//,userpsw:newPas};
	Login.find(query, function(err, obj){
		if (err) {
			console.log("Error:" + err);
			return res.status(500).send({description:"資料庫發生錯誤"});
		}
		else {
			if(obj.length == 1){
				if(obj[0].userpsw===newPas){
					console.log('登入成功');
					req.session.regenerate(function(err) {
						if(err){
							console.log("session建立失敗，err=\n",err);
							return res.status(500).send({
								description:"session建立失敗"
								});
						}
						req.session.loginName = obj[0].username;
						req.session.loginAccount = obj[0].account;
						return res.status(201).send({username:obj[0].username,account:obj[0].account});
						//res.redirect('/');
					});
				}else{
					console.log('密碼錯誤\n',obj[0].userpsw,'\n!=\n',newPas);
					return res.status(401).send({description:"密碼錯誤"});
				}
			}else{
				console.log('帳號不存在');
				return res.status(404).send({description:"帳號不存在"});
			}
		}
	})
}