//scrs/activation
//處理express中 http://<hostname>/activation?name=<UserName>&active=<Gradled>
const Activation = require('../../Schemas/activation');
const Login = require('../../Schemas/user_login');
const crypto = require("crypto");


module.exports = function(req,res){
	const UserName = req.body.account;
	console.log('使用者是：',UserName);
	const Garbled = req.body.active;
	let newPsw = req.body.password;
	let md5 = crypto.createHash("md5");
  	newPsw = md5.update(newPsw).digest("hex");
	Activation.find({account:UserName,active:Garbled}, function(err, obj){
        if (err) {
			console.log("Error:" + err);
			return res.status(500).send({message:false,description:"資料庫發生錯誤"});
        }
        else {
            if(obj.length == 1){
				console.log("obj.active",obj[0].active);
				console.log("datenow-datebegin=",Date.now()-obj[0].expireDate,"(ms) < 60*60*1000?");
                if((Date.now()-obj[0].expireDate)<=60*60*1000){//認證成功
					console.log('認證成功，新密碼：',newPsw);
					Login.updateOne({account:UserName},{$set:{userpsw:newPsw}},function(err,res){
						if (err) throw err;
					});
					Activation.deleteMany({account:UserName},function(err,obj){
						if(err) throw err;
						console.log(obj+" document(s) from Activation deleted");
					});
					console.log('密碼更新');
					//const URL = '<a href="'+req.protocol+"://"+req.get('host')+'/Login">點擊跳轉</a>';
					res.status(200).end();
				}else{
					console.log('驗證碼過期');
					res.status(401).send({description:"驗證碼過期"});
				}
            }else{
                // console.log('驗證碼錯誤');
				// console.log(obj, Garbled);
				// const URL = '<a href="'+req.protocol+"://"+req.get('host')+'/Forget">點擊跳轉</a>';
                res.status(401).send({description:"驗證碼已過期"});
            }
        }
    })
}
