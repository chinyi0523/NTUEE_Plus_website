//scrs/activation
//處理express中 http://<hostname>/activation?name=<UserName>&active=<Gradled>
const Activation = require('../../../Schemas/activation');
const Login = require('../../../Schemas/user_login');
const crypto = require("crypto");


module.exports = async function(req,res){
	const {account,active,password} = req.body;
	
	const newPsw = crypto.createHash("md5").update(password).digest("hex");
	
	try{
		const obj = await Activation.findOne({account,active})
		if(!obj) return res.status(401).send({description:"驗證碼已不存在"})
		// if((Date.now()-obj.expireDate)>=60*60*1000){
		// 	Activation.deleteMany({account}).exec()
		// 	return res.status(401).send({description:"驗證碼過期"})
		// }
		console.log(obj.createdAt)
		//更新密碼
		await Login.updateOne(
			{account},
			{$set:{userpsw:newPsw}}
		)
		Activation.deleteMany({account}).exec()
		return res.status(200).end()
	}catch(e){
		console.log(e)
		return res.status(500).send({description:"資料庫錯誤"})
	}
	// Activation.find({account:account,active:active}, function(err, obj){
    //     if (err) {
	// 		console.log("Error:" + err);
	// 		return res.status(500).send({message:false,description:"資料庫發生錯誤"});
    //     }
    //     else {
    //         if(obj.length == 1){
	// 			console.log("obj.active",obj[0].active);
	// 			console.log("datenow-datebegin=",Date.now()-obj[0].expireDate,"(ms) < 60*60*1000?");
    //             if((Date.now()-obj[0].expireDate)<=60*60*1000){//認證成功
	// 				console.log('認證成功，新密碼：',newPsw);
	// 				Login.updateOne({account:account},{$set:{userpsw:newPsw}},function(err,res){
	// 					if (err) throw err;
	// 				});
	// 				Activation.deleteMany({account:account},function(err,obj){
	// 					if(err) throw err;
	// 					console.log(obj+" document(s) from Activation deleted");
	// 				});
	// 				console.log('密碼更新');
	// 				//const URL = '<a href="'+req.protocol+"://"+req.get('host')+'/Login">點擊跳轉</a>';
	// 				res.status(200).end();
	// 			}else{
	// 				console.log('驗證碼過期');
	// 				res.status(401).send({description:"驗證碼過期"});
	// 			}
    //         }else{
    //             // console.log('驗證碼錯誤');
	// 			// console.log(obj, Garbled);
	// 			// const URL = '<a href="'+req.protocol+"://"+req.get('host')+'/Forget">點擊跳轉</a>';
    //             res.status(401).send({description:"驗證碼已過期"});
    //         }
    //     }
    // })
}
