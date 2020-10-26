const { validationResult } = require('express-validator');

const validationHandling = (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log("errors=",errors);
		return res.status(400).send({
			description:errors.array()[0].msg,
			errors: errors.array()});
	}else{
		console.log("validation pass")
		return next();
	}
}
module.exports=validationHandling;