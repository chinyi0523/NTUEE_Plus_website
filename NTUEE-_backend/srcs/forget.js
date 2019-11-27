var user_l_Schema = require('../Schemas/user_login');
var crypto = require("crypto");
var Activation = require('../Schemas/activation');
var sendmail = require('./send_test');

function insert_active(name,psw,act){ //激活碼
	Activation.find({account:name},function(err,obj){
		if (err) {
            console.log("ErrorFind:" + err);
        }
        else {
            if(obj.length == 0){//如果查出无数据,就插入数据库
				//数据格式
				var data =  new Activation({
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
  var UserName = req.body.StudentID;
  var question = req.body.question;
  var Email = req.body.Email;
  var UserPsw = req.body.password;
  //密码加密
  var md5 = crypto.createHash("md5");
  var newPas = md5.update(UserPsw).digest("hex");
    console.log(UserPsw,newPas);
  //通过账号密码搜索验证
  var updatestr = {account: UserName, question:question};
  //处理跨域的问题
    res.setHeader('Content-type','application/json;charset=utf-8')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    
    user_l_Schema.find(updatestr, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 1){
                console.log('答案正確');
				//寄送激活碼
				var Garbled = Math.random().toString(36).substr(2); //產生亂碼
				insert_active(UserName, newPas, Garbled);
				var hylink = '<a href="http://localhost:1993/activation?name='+UserName+'&active='+Garbled+'">點擊激活</a>';
				sendmail(Email,hylink);
				res.send({status:'success',message:true});
            }else{
                console.log('答案錯誤或帳號不存在'); 
				console.log(updatestr); 
                res.send({status:'success',message:false}); 
            }
        }
    })
}