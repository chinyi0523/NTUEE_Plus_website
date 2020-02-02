const {body} = require('express-validator');

mat = {
	"register":["username","account","password","ConfirmPassword"],
	"login":["account","password"],
	"forget":["account","question","Email","password","ConfirmPassword"],
	"chLogin":["question"]
}

Valid = function(method,req){
	var output = [];
	mat[method].forEach(element=>{
		if(element==="ConfirmPassword"){//如果需要抓req就用它
			output.push(require("./Name/"+element)(req));
		}else{
			output.push(require("./Name/"+element));
		}
	});
	return output;
}


module.exports=(method,req)=>Valid(method,req);
/*module.exports.Login=()=>Valid("login");
module.exports.Register=(req,res)=>{Valid("register",req,res)};
module.exports.Forget=()=>Valid("forget");
module.exports.chLogin=()=>Valid("chLogin");*/
