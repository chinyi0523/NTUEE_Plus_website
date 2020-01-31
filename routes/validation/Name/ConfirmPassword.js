const {body} = require('express-validator');

module.exports=(req,res)=>{
	console.log("confirm!");
	body('ConfirmPassword')
			.custom((val,{req})=>{
				if(val!==req.body.password){
					throw new Error('兩段密碼不一致');
				}
				return true
			})
}