//srcs/login.js
var user_l_Schema = require('../../Schemas/user_login');
var crypto = require("crypto");

module.exports = function (req, res, next) {
  var account = req.body.account;
  var UserPsw = req.body.password;
  //密碼加密  
  var md5 = crypto.createHash("md5");
  var newPas = md5.update(UserPsw).digest("hex");
  var query = {account: account,userpsw:newPas};
     user_l_Schema.find(query, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 1){
                console.log('登入成功',obj);
				req.session.regenerate(function(err) {
					if(err){
						return res.json({ret_code: 2, ret_msg: 'session 建立失敗'});                
					}
					req.session.loginName = obj[0].username;
					req.session.loginAccount = obj[0].account;
					res.send({status:'success',message:true,data:{username:obj[0].username,account:obj[0].account}});
					//res.redirect('/');
				});
            }else{
                console.log('請註冊帳號'); 
				console.log(query); 
                res.send({status:'success',message:false}); 
            }
        }
    })
}