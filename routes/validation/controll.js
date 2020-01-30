const { validationResult } = require('express-validator');

const RegValid = (req,res,next)=>{
	console.log("controll?");
	const errors = validationResult(req);
	console.log("errors=",errors);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}else{
		return next();
	}
}
module.exports=RegValid;