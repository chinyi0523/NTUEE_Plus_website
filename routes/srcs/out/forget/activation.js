//scrs/activation
//處理express中 http://<hostname>/activation?name=<UserName>&active=<Gradled>
const Activation = require('../../../Schemas/activation');
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");
const { ErrorHandler, dbCatch } = require('../../../error');

/**
 * @api {post} /activation activation
 * @apiName Activation
 * @apiGroup Out/forget
 * @apiDescription 檢查激活碼，忘記密碼重設
 * 
 * @apiparam {String} account 學號
 * @apiparam {String} active 激活碼(附在信箱的連結裡)
 * @apiparam {String} password 要重設的密碼
 * 
 * @apiSuccess (200) -
 * 
 * @apiError (401) {String} description 驗證碼已不存在
 * @apiError (500) {String} description 資料庫錯誤
 */
module.exports = async function(req,res){
	const {account,active,password} = req.body
	const newPsw = crypto.createHash("md5").update(password).digest("hex")
	
	const obj = await Activation.exists({account,active}).catch(dbCatch)
	if(!obj) throw new ErrorHandler(401,'驗證碼已不存在')
	//更新密碼
	await Login.updateOne(
		{account},
		{$set:{userpsw:newPsw}}
	).catch(dbCatch)
	Activation.deleteMany({account}).exec().catch(e=>{console.log(e.message)})
	return res.status(200).end()
}
