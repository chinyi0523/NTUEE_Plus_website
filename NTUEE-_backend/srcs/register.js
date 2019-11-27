var user_l_Schema = require('../Schemas/user_login');
var crypto = require("crypto");

/*插入数据库函数*/
function insert(name,account,psw){
      //数据格式
    var user =  new user_l_Schema({
                username : name,
				account: account,
                userpsw : psw
            });
	
    user.save(function(err,res){
        if(err){
            console.log(err);
        }
        else{
			console.log('成功儲存：',user);
            console.log(res);
        }
    })
}

module.exports = function (req, res) {
  //处理跨域的问题
  res.setHeader('Content-type','application/json;charset=utf-8')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
   //先查询有没有这个user
  var UserName = req.body.username;
  var Useraccount = req.body.account;
  var UserPsw = req.body.password;
  //密码加密
  var md5 = crypto.createHash("md5");
  var newPas = md5.update(UserPsw).digest("hex");
  //通过账号验证
  var updatestr = {account: Useraccount};
    if(Useraccount === ''){
       res.send({status:'success',message:false}) ;
    }
    res.setHeader('Content-type','application/json;charset=utf-8')
    user_l_Schema.find(updatestr, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 0){
                //如果查出无数据,就将账户密码插入数据库
				console.log("新增帳號");
                insert(UserName,Useraccount,newPas); 
                //返回数据到前端
                res.send({status:'success',message:true}) 
            }else if(obj.length !=0){
				console.log("已有此帳號");
                res.send({status:'success',message:false}) 
            }else{
				console.log("find發生錯誤");
                res.send({status:'success',message:false}) 
            }
        }
    })  
}