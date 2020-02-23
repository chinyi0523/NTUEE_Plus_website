var user_v_Schema = require('../../Schemas/user_visual');
var readDB = require('./readDB');

module.exports = function (req, res, next) {
	var session_account = req.session.loginAccount
	if(!session_account){
		session_account = 'b07901028' //測試用
	}
	if(session_account){
		var query = readDB.search(req);
		user_v_Schema.find(query,{_id:0},function(err,obj){
			if (err) {
				console.log("Error:" + err);
				return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
			}
			else{
				var output = []
				obj.forEach(people=>{
					var output1 = readDB.getOtherDB(people)
					output.push(output1)
				})
				return res.send({status:'success',message:true,data:output});
			}
		})
	}else{
		res.send({status:'success',message:false,description:"session不存在(已過期)"});
	}
}