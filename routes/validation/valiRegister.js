const {body} = require('express-validator');

//Register
module.exports=(req,res)=>{
	return[
		body('username')
			.not().isEmpty().withMessage('請填入姓名'),
		body('account')
			.isLength({min:9,max:9}).withMessage("學號長度錯誤")
			.matches(/^[a-zA-Z]\d{8}$/).withMessage("學號形式錯誤"),
		body('password')
			.isLength({min:2}).withMessage("密碼過短")
			.matches(/^\w{2,30}$/).withMessage("包含特殊字符"),
		body('ConfirmPassword')
			.custom((val,{req})=>{
				if(val!==req.body.password){
					throw new Error('兩段密碼不一致');
				}
				return true
			})
	]
}
