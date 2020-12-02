//srcs/login.js
const Login = require('../../../Schemas/user_login');
const {ErrorHandler, dbCatch} = require('../../../error')

/**
 * @api {post} /loginFB loginFB
 * @apiName LoginFB
 * @apiGroup Out/account
 * @apiDescription 登入by facebook
 *
 * @apiparam {String} facebookID facebook ID
 * 
 * @apiSuccess (201) {String} username 登入者名字
 * 
 * @apiError (404) {String} description 帳號不存在
 * 
 * @apiError (500) {String} description 資料庫錯誤
 */
module.exports = async function (req, res, next) {
	const {facebookID} = req.body
	const query = { facebookID }
	const obj = await Login.findOne(query, "username account")
						   .catch(dbCatch)
	if(!obj) throw new ErrorHandler(404,'帳號不存在')
	req.session.loginName = obj.username
	req.session.loginAccount = obj.account
	return res.status(201).send({username: obj.username })
}