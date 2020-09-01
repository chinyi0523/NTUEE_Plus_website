const { validationResult } = require('express-validator');

const RegValid = (req,res,next)=>{
	const errors = validationResult(req);
	// console.log("errors=",errors);
	if (!errors.isEmpty()) {
		return res.send({
			status:'success',
			message:false,
			description:errors.array()[0].msg,
			errors: errors.array()});
	}else{
		return next();
	}
}
module.exports=RegValid;