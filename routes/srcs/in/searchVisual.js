const user_v_Schema = require('../../Schemas/user_visual');
const readDB = require('./readDB');

module.exports = function (req, res, next) {
	let session_account = req.session.loginAccount;
	if(!session_account){
		session_account = 'b07901028' //測試用
	}
	if(session_account){
		const query = readDB.searchOr(req);
		user_v_Schema.find(query,{_id:0},function(err,obj){
			if (err) {
				console.log("Error:" + err);
				return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
			}
			else{
				const output = []
				obj.forEach(people=>{
					console.log(obj)
					const output1 = readDB.getOtherDB(people)
					output.push(output1)
				})
				return res.send({status:'success',message:true,data:output});
			}
		})
	}else{
		res.send({status:'success',message:false,description:"session不存在(已過期)"});
	}
}