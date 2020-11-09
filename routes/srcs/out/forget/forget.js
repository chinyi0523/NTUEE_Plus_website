const Visual = require('../../../Schemas/user_visual');
const Activation = require('../../../Schemas/activation');
const sendmail = require('../../../middleware/mail');

async function insertActive(name,act){
	const obj = await Activation.findOne({account:name});
	if(!obj){//新建activation
		await new Activation({
			account:name,
			active:act
		}).save()
	}else{
		await Activation.updateOne(
			{account:name},
			{$set:{
				active:act,
				createdAt:Date.now()
			}}
		)
	}
}


module.exports = async function (req, res, next) {
	const account = req.body.account.toLowerCase()
	
	const query = {"account.data": account};//, question:question};
	try{
		const obj = await Visual.findOne(query,'publicEmail')
		if(!obj) return res.status(404).send({description:"帳號不存在"});
		if(!obj.publicEmail.data) return res.status(404).send({description:"未設定信箱，請聯絡管理員"})
		const email = obj.publicEmail.data;
		const randomNum = Math.random().toString(36).substr(2); //產生亂碼
		await insertActive(account,randomNum);
		//寄信
		const hylink = `${req.protocol}://${req.get('host')}/ResetPassword/${account}/${randomNum}`
		const hy_br = `${req.protocol}://${req.get('host')}/<wbr>ResetPassword/<wbr>${account}/<wbr>${randomNum}`
		const htmlText = await require('./mail/template_generator')(hylink,hy_br)
		await sendmail(email, '重設密碼(一小時後到期)', htmlText)
		if(obj.publicEmail.show) return res.status(200).send({email})
		else return res.status(200).send({email:"您的私人信箱"})
	}catch(e){
		console.log(e)
		return res.status(500).send({description:"資料庫錯誤"})
	}
   	// Login.find(query, function(err, obj){
    //     if (err) {
    //         console.log("Error:" + err);
	// 		return res.status(500).send({status:'success',message:false,description:"資料庫錯誤"});
    //     }else {
    //         if(obj.length == 1){
	// 			if(obj[0].publicEmail.data!==(''||undefined)){
	// 				console.log('信箱：'+obj[0].publicEmail.data);
	// 				//寄送激活碼
	// 				const Email = obj[0].publicEmail.data;
	// 				const Garbled = Math.random().toString(36).substr(2); //產生亂碼
	// 				insertActive(account,  Garbled);
	// 				const hylink = '<a href="'+req.protocol+"://"+req.get('host')+'/ResetPassword/'+account+'/'+Garbled+'">點擊進入變更密碼頁面</a>';
	// 				sendmail(Email,hylink);
	// 				if(obj[0].publicEmail.show){
	// 					return res.status(200).send({email:Email});
	// 				}else{
	// 					return res.status(200).send({email:"您的私人信箱"});
	// 				}
					
	// 			}else{
	// 				console.log('信箱不存在');
	// 				return res.status(404).send({description:"未設定信箱，請聯絡管理員"});
	// 			}
    //         }else{
    //             console.log('帳號不存在');
    //             res.status(404).send({description:"帳號不存在"});
    //         }
    //     }
    // })
}