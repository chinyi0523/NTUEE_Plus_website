//srcs/login.js
var user_v_Schema = require('../../Schemas/user_visual');

function insert(name,account){
  return new Promise((resolve,reject)=>{
    var user =  new user_v_Schema({
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
  var session_account = req.session.loginAccount
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
				var output=JSON.parse(JSON.stringify(obj[0]));//手動深拷貝，但function會炸掉要注意
				console.log('帳號存在',output);
				if(output.userimage.contentType){
					var prefix="data:"+output.userimage.contentType+";base64,"
					var img = new Buffer(output.userimage.data, 'binary').toString('base64');
					prefix+=img
				}
				output.userimage = (prefix)||'';
				res.send({status:'success',message:true,data:
					output
				});
            }else if(obj.length === 0){//存在session但不在資料庫裡
				console.log("session:",session_account);
				output = await insert(req.session.loginName||'均府',session_account);
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