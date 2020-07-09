const user_l_Schema = require('../../Schemas/user_login');
const crypto = require("crypto");
const Activation = require('../../Schemas/activation');
const sendmail = require('./mail/send');


function insert_active(name,psw,act){ //激活碼
	Activation.find({account:name},function(err,obj){
		if (err) {
            console.log("ErrorFind:" + err);
        }
        else {
            if(obj.length == 0){//新增
				const data =  new Activation({
					account : name,
					newpsw : psw,
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
				console.log(psw,act);
				Activation.updateOne({account:name},{$set:{newpsw:psw, active:act, expireDate:Date.now()}},function(err,res){
					if (err) throw err;
				});
				Activation.find({account:name},function(err,obj2){console.log('有複寫成功嗎?：',obj2)});				
            }
        }
	})
}


module.exports = function (req, res, next) {
  const Useraccount = req.body.account.toLowerCase();
  const question = req.body.question;
  const Email = req.body.Email;
  const UserPsw = req.body.password;
  //密碼加密
  let md5 = crypto.createHash("md5");
  const newPas = md5.update(UserPsw).digest("hex");
  console.log(UserPsw,newPas);
  const query = {account: Useraccount};//, question:question};
   user_l_Schema.find(query, function(err, obj){
        if (err) {
            console.log("Error:" + err);
			return res.send({status:'success',message:false,description:"資料庫錯誤"});
        }else {
            if(obj.length == 1){
				if(obj[0].question===question&&question!==""){
					console.log('答案正確');
					//寄送激活碼
					const Garbled = Math.random().toString(36).substr(2); //產生亂碼
					insert_active(Useraccount, newPas, Garbled);
					const hylink = '<a href="'+req.protocol+"://"+req.get('host')+'/api/activation?name='+Useraccount+'&active='+Garbled+'">點擊激活</a>';
					sendmail(Email,hylink);
					return res.send({status:'success',message:true});
				}else{
					console.log('答案錯誤');
					return res.send({status:'success',message:false,description:"答案錯誤"});
				}
            }else{
                console.log('帳號不存在');
                res.send({status:'success',message:false,description:"帳號不存在"});
            }
        }
    })
}