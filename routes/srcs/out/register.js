//srcs/register.js
const user_l_Schema = require('../../Schemas/user_login');
const crypto = require("crypto");
const user_v_Schema = require('../../Schemas/user_visual');

/*新增一筆使用者資料*/
function insert(name,account,psw,file){
      //格式
    const user =  new user_l_Schema({
                username : name,
				account: account,
                userpsw : psw,
				// img:{
				// 	data:file.buffer,
				// 	contentType:file.mimetype
				// }
            });
	// console.log('img=',user.img)
    user.save(function(err,res){
        if(err){
            console.log(err);
        }
        else{
			// console.log('成功儲存：',user);
            // console.log(res);
        }
    })
}
function insertVisual(name,account){
    return new Promise((resolve,reject)=>{
      const user =  new user_v_Schema({
                  username:{data : name},
                  account:{data: account}
              });
      
      user.save(function(err,res){
          if(err){
              console.log(err);
              resolve(false);
          }
          else{
              // console.log('成功儲存：',user);
              resolve( res);
          }
      })
    })
  }
module.exports = function (req, res) {
  const UserName = req.body.username;
  const Useraccount = req.body.account.toLowerCase();
  const UserPsw = req.body.password;
  
  //密碼加密
  let md5 = crypto.createHash("md5");
  const newPas = md5.update(UserPsw).digest("hex");
  
//   if(req.file===undefined){
//       return res.send({message:false,description:"請添加照片"});
//   }
  //查詢用戶是否存在
  const query = {account: Useraccount};
    user_l_Schema.find(query, function(err, obj){
        if (err) {
            console.log("Error:" + err);
			return res.send({status:'success',message:false,description:"資料庫錯誤"});
        }
        else {
            if(obj.length == 0){
				// console.log("新增帳號");
                insert(UserName,Useraccount,newPas,null);//req.file);
				req.session.regenerate(function(err) {
					if(err){
						// console.log("session建立失敗，err=\n",err);
						return res.send({
							status:'success',
							message:false,
							description:"session建立失敗"
							});                
					}
					req.session.loginName = UserName;
                    req.session.loginAccount = Useraccount;
                    insertVisual(UserName,Useraccount);
					return res.send({status:'success',message:true,data:UserName});
						//res.redirect('/');
				});
                
            }else{
				// console.log("已有此帳號");
                res.send({status:'success',message:false,description:"帳號已存在"}) 
            }
        }
    })
}