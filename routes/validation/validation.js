const {body} = require('express-validator');

mat = {
	"register":["username","account","password","ConfirmPassword"],//],//
	"login":["account","password"],
	"forget":["account","question","Email","password"],
	"chLogin":["question"]
}

Valid = function(url,req,res){
	var output = [];
	mat[url].forEach(element=>{
		if(element==="ConfirmPassword"){
			output.push(require("./Name/"+element)(req,res));
		}else{
			output.push(require("./Name/"+element));
		}
	});
	return output;
}

module.exports.Login=()=>Valid("login");
module.exports.Register=(req,res)=>Valid("register",req,res);
module.exports.Forget=()=>Valid("forget");
module.exports.chLogin=()=>Valid("chLogin");
