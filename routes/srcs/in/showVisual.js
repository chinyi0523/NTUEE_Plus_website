//srcs/login.js
const user_v_Schema = require('../../Schemas/user_visual');
const readDB = require('./readDB');

function insert(name,account){
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
			console.log('成功儲存：',user);
			resolve( res);
        }
    })
  })
}

module.exports = function (req, res, next) {
  let session_account = req.session.loginAccount
  if(!session_account){
	  session_account = 'b07901028' //測試用
  }
  if(session_account){
     user_v_Schema.find({"account.data":session_account}, async function(err, obj){
        if (err) {
            console.log("Error:" + err);
			      return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
        }
        else {
            if(obj.length === 1){
              const output=readDB.getOwnDB(obj[0]);
              console.log('帳號存在',output.account);
              res.send({status:'success',message:true,data:
                output
              });
            }else if(obj.length === 0){//存在session但不在資料庫裡
              console.log("session:",session_account);
              output = await insert(req.session.loginName||'無名氏',session_account);
              console.log("output",output)
              if(!output){
                return res.send({status:'success',message:false, description:"資料庫錯誤(資料插入錯誤)"}); 
              }else{
                output.userimage = '';
                return res.send({status:'success',message:true, data:output}); 
              }
            }else{
              return res.send({status:'success',message:false, description:"資料庫錯誤(帳號重複)"}); 
            }
        }
    })
  }else{
	  res.send({status:'success',message:false,description:"session不存在(已過期)"}); 
  }
}