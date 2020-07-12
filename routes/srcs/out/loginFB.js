//srcs/login.js
const user_l_Schema = require('../../Schemas/user_login');

module.exports = function (req, res, next) {
	const facebookID = req.body.facebookID;
	const query = { facebookID: facebookID };
	user_l_Schema.find (query, function (err, obj) {
		if (err) {
			console.log("Error:" + err);
			return res.send({ status: 'success', message: false, description: "DB Error!"});
		}
		else {
			if (obj.length == 1) {
				console.log('Login successfully', obj);
				req.session.regenerate (function (err) {
					if (err) {
						console.log("Session created failed! Err=\n", err);
						return res.send({
							status: 'success',
							message: false,
							description: "session created failed!"
						});
					}
					req.session.loginName = obj[0].username;
					req.session.loginAccount = obj[0].account;
					return res.send({ status: 'success', message: true, username: obj[0].username });
				});
			} else {
				console.log('The account does not exist!');
				return res.send({ status: 'success', message: false, username: "Not found!" });
			}
		}
	})
}