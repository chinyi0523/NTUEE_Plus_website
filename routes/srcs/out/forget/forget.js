const Visual = require('../../../Schemas/user_visual');
const Activation = require('../../../Schemas/activation');
const sendmail = require('../../../middleware/mail');
const template = require('./mail/template_generator');
const { dbCatch, ErrorHandler } = require('../../../error');
const asyncHandler = require('express-async-handler')

async function insertActive(name,act){
	const obj = await Activation.findOne({account:name});
	if(!obj){//新建activation
		await new Activation({
			account:name,
			active:act
		}).save()
	}else{
		await Activation.updateOne(
			{account:name},
			{$set:{
				active:act,
				createdAt:Date.now()
			}}
		)
	}
}

const forget = async (req, res, next) => {
	const account = req.body.account.toLowerCase()
	
	const query = {"account.data": account}
	const obj = await Visual.findOne(query,'publicEmail').catch(dbCatch)
	if(!obj) throw new ErrorHandler(404,'帳號不存在')
	if(!obj.publicEmail.data) throw new ErrorHandler(404,"未設定信箱，請聯絡管理員")
	const email = obj.publicEmail.data
	const randomNum = Math.random().toString(36).substr(2) //產生亂碼
	await insertActive(account,randomNum).catch(dbCatch)
	
	//寄信
	const hylink = `${req.protocol}://${req.get('host')}/ResetPassword/${account}/${randomNum}`
	const hy_br = `${req.protocol}://${req.get('host')}/<wbr>ResetPassword/<wbr>${account}/<wbr>${randomNum}`
	const htmlText = await template(hylink,hy_br)
	await sendmail(email, '重設密碼(一小時後到期)', htmlText)
	if(obj.publicEmail.show) return res.status(200).send({email})
	else return res.status(200).send({email:"您的私人信箱"})
}
module.exports = asyncHandler(forget)