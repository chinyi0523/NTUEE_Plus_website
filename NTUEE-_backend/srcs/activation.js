//處理express中 http://localhost:1993/activation?name=<UserName>&active=<Gradled>
var Activation = require('../Schemas/activation');
var user_l_Schema = require('../Schemas/user_login');

module.exports = function(req,res){
	var UserName = req.query.name;
	console.log('使用者是：',UserName);
	var Garbled = req.query.active;
	Activation.find({account:UserName}, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 1){
				console.log("obj.active",obj[0].active);
				console.log("datenow-datebegin=",Date.now()-obj[0].expireDate,"(ms) < 60*60*1000?");
                if(obj[0].active===Garbled && (Date.now()-obj[0].expireDate)<=60*60*1000){//認證成功
					console.log('認證成功，新密碼：',obj[0].newpsw);
					user_l_Schema.updateOne({account:UserName},{$set:{userpsw:obj[0].newpsw}},function(err,res){
						if (err) throw err;
					});
					Activation.deleteMany({account:UserName},function(err,obj){
						if(err) throw err;
						console.log(obj+" document(s) deleted");
					});
					console.log('密碼更新');
					res.send('認證成功，密碼已更新');
					//res.send('http://loaclhost:1993/login.html');
				}else{
					console.log('驗證碼過期');
					res.send('驗證碼過期');
				}
            }else{
                console.log('驗證碼錯誤');
				console.log(obj, Garbled);
                res.send('驗證碼錯誤'); 
            }
        }
    })
}
