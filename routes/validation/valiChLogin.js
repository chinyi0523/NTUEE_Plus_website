const {body} = require('express-validator');

//Register
module.exports=()=>{
	return[
		body('question')
			.isLength({min:2,max:40}).withMessage("問題過短或過長")
	]
}
