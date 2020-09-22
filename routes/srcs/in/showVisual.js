//srcs/login.js
const Visual = require('../../Schemas/user_visual');
const readDB = require('./readDB');

function insert(name,account){
  return new Promise((resolve,reject)=>{
    const user =  new Visual({
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
     Visual.find({"account.data":session_account}, async function(err, obj){
        if (err) {
            console.log("Error:" + err);
			      return res.status(500).send({description:"資料庫錯誤"}); 
        }
        else {
            let output=null;
            if(obj.length === 1){
              output=readDB.getOwnDB(obj[0]);
              console.log('即將傳出使用者資料',output.account);
              res.status(201).send({data:output});
            }else if(obj.length === 0){//存在session但不在資料庫裡
              console.log("session:",session_account);
              if(req.session.loginName && session_account){
                output = await insert(req.session.loginName,session_account);
              }
              if(!output){
                return res.status(500).send({description:"資料庫錯誤(資料插入錯誤)"}); 
              }else{
                output.userimage = '';
                return res.status(201).send({data:output}); 
              }
            }else{
              return res.status(404).send({description:"帳號重複"}); 
            }
        }
    })
}