const Activation = require('../../../Schemas/activation');
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");
const { ErrorHandler, dbCatch } = require('../../../error');
const asyncHandler = require('express-async-handler')

const activate = async (req,res) => {
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
module.exports = asyncHandler(activate)