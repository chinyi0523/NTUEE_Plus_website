//const {body} = require('express-validator');

const mat = {
	"register":["username","account","password","ConfirmPassword","Email"],
	"registerFB":["username","account"],
	"login":["account","password"],
	"forget":["account"],//,"question","Email","password","ConfirmPassword"],
	"chLogin":["question"],
	"chPassword":[],
	"activation":["account","password"]
}

const Valid = function(method){
	const output = [];
	mat[method].forEach(element=>{
		output.push(require("./Name/"+element));
	});
	return output;
}


// module.exports=(method,req)=>Valid(method,req);
module.exports=(method)=>Valid(method);
/*module.exports.Login=()=>Valid("login");
module.exports.Register=(req,res)=>{Valid("register",req,res)};
module.exports.Forget=()=>Valid("forget");
module.exports.chLogin=()=>Valid("chLogin");*/
