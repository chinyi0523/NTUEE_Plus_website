const Visual = require('../../../Schemas/user_visual');
const search = require('./DBquery/searchOr');
const getPublic = require('./DBquery/getPublic');
module.exports = function (req, res, next) {
	// let session_account = req.session.loginAccount;
	const query = search(req);
	Visual.find(query,{_id:0},function(err,obj){
		if (err) {
			console.log("Error:" + err);
			return res.status(500).send({description:"資料庫錯誤"}); 
		}
		else{
			const output = []
			obj.forEach(people=>{
				console.log(people)
				output.push(getPublic(people))
			})
			return res.status(201).send({data:output});
		}
	})
}