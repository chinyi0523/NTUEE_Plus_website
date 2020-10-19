//srcs/login.js
const Login = require('../../../Schemas/user_login');

module.exports = async function (req, res, next) {
	const facebookID = req.body.facebookID;
	try{
		const query = { facebookID };
		const obj = await Login.findOne(query, "username account");
		if(!obj) return res.status(404).send({description: "account Not found!" });
		req.session.loginName = obj.username;
		req.session.loginAccount = obj.account;
		return res.status(201).send({username: obj.username });
	}catch(e){
		console.log(e)
		return res.status(500).send({description:"資料庫錯誤"})
	}
	// Login.find (query, function (err, obj) {
	// 	if (err) {
	// 		console.log("Error:" + err);
	// 		return res.status(500).send({description: "DB Error!"});
	// 	}
	// 	else {
	// 		if (obj.length == 1) {
	// 			console.log('Login successfully', obj);
	// 			req.session.regenerate (function (err) {
	// 				if (err) {
	// 					console.log("Session created failed! Err=\n", err);
	// 					return res.status(500).send({
	// 						description: "session created failed!"
	// 					});
	// 				}
	// 				req.session.loginName = obj[0].username;
	// 				req.session.loginAccount = obj[0].account;
	// 				return res.status(201).send({username: obj[0].username });
	// 			});
	// 		} else {
	// 			console.log('The account does not exist!');
	// 			return res.status(404).send({description: "account Not found!" });
	// 		}
	// 	}
	// })
}