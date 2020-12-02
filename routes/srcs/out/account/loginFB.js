//srcs/login.js
const Login = require('../../../Schemas/user_login');
const {ErrorHandler, dbCatch} = require('../../../error')
const asyncHandler = require('express-async-handler')

const loginFB = async (req, res, next) => {
	const {facebookID} = req.body
	const query = { facebookID }
	const obj = await Login.findOne(query, "username account")
						   .catch(dbCatch)
	if(!obj) throw new ErrorHandler(404,'帳號不存在')
	req.session.loginName = obj.username
	req.session.loginAccount = obj.account
	return res.status(201).send({username: obj.username })
}

module.exports = asyncHandler(loginFB)