const Visual = require('../../Schemas/user_visual');
const readDB = require('./readDB');

module.exports = function (req, res, next) {
	let session_account = req.session.loginAccount;
	const query = readDB.searchOr(req);
	Visual.find(query,{_id:0},function(err,obj){
		if (err) {
			console.log("Error:" + err);
			return res.status(500).send({description:"資料庫錯誤"}); 
		}
		else{
			const output = []
			obj.forEach(people=>{
				console.log(obj)
				const output1 = readDB.getOtherDB(people)
				output.push(output1)
			})
			return res.status(201).send({data:output});
		}
	})
}