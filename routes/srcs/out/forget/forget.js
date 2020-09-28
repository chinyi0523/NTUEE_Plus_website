const Login = require('../../Schemas/user_visual');
const Activation = require('../../Schemas/activation');
const sendmail = require('./mail/send');


function insert_active(name,act){ //激活碼
	Activation.find({"account":name},function(err,obj){
		if (err) {
            console.log("ErrorFind:" + err);
        }
        else {
            if(obj.length == 0){//新增
				const data =  new Activation({
					account : name,
					//newpsw : psw,
					active : act
				});	
                data.save(function(err,res){
					if(err){
						console.log(err);
					}
					else{
						console.log('新建');
						console.log(data.account);
					}
				})
            }else if(obj.length >=1){
				console.log(obj);
				console.log('複寫成');
				//console.log(psw,act);
				Activation.updateOne({account:name},{$set:{active:act, expireDate:Date.now()}},function(err,res){
					if (err) throw err;
				});
				Activation.find({account:name},function(err,obj2){console.log('有複寫成功嗎?：',obj2)});				
            }
        }
	})
}


module.exports = function (req, res, next) {
  const Useraccount = req.body.account.toLowerCase();
  //const question = req.body.question;
  //const Email = req.body.Email;
  //const UserPsw = req.body.password;
  //密碼加密
  //let md5 = crypto.createHash("md5");
  //const newPas = md5.update(UserPsw).digest("hex");
  //console.log(UserPsw,newPas);
  const query = {"account.data": Useraccount};//, question:question};
   Login.find(query, function(err, obj){
        if (err) {
            console.log("Error:" + err);
			return res.status(500).send({status:'success',message:false,description:"資料庫錯誤"});
        }else {
            if(obj.length == 1){
				if(obj[0].publicEmail.data!==(''||undefined)){
					console.log('信箱：'+obj[0].publicEmail.data);
					//寄送激活碼
					const Email = obj[0].publicEmail.data;
					const Garbled = Math.random().toString(36).substr(2); //產生亂碼
					insert_active(Useraccount,  Garbled);
					const hylink = '<a href="'+req.protocol+"://"+req.get('host')+'/ResetPassword/'+Useraccount+'/'+Garbled+'">點擊進入變更密碼頁面</a>';
					sendmail(Email,hylink);
					if(obj[0].publicEmail.show){
						return res.status(200).send({email:Email});
					}else{
						return res.status(200).send({email:"您的私人信箱"});
					}
					
				}else{
					console.log('信箱不存在');
					return res.status(404).send({description:"未設定信箱，請聯絡管理員"});
				}
            }else{
                console.log('帳號不存在');
                res.status(404).send({description:"帳號不存在"});
            }
        }
    })
}