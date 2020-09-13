const job_Schema = require('../../Schemas/job');
const readDB = require('./readDB');

module.exports = function (req, res, next) {
	const jobTitle = req.body.title

	if(jobTitle){
		const query = readDB.search_job(req);
		job_Schema.find(query, {_id:0}, function(err,obj){
			if (err) {
				console.log("Error:" + err);
				return res.status(500).send({description:"資料庫錯誤"}); 
			}
			else{
				const output = []
				obj.forEach(item=>{
					const output1 = readDB.getOtherDB_job(item)
					output.push(output1)
				})
				return res.status(200).send({data:output});
			}
		})
	}
	// else{
	// 	res.send({status:'success', message:false, description:"session不存在(已過期)"});
	// }//改到Auth.js
}
