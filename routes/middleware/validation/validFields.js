
//{key:url,value:files to import from Name folder}
module.exports = {
	"register":["username","account","password","ConfirmPassword"],
	"registerFB":["username","account"],
	"login":["account","password"],
	"forget":["account"],//,"question","Email","password","ConfirmPassword"],
	"chLogin":["question"],
	"chPassword":['chPassword/oldpassword','chPassword/newpassword'],
	"activation":["account","password"],
	"searchVisual":["account.data"],
	"chVisual":['chVisual/account','chVisual/phone','chVisual/homephone','chVisual/email']
}