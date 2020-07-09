const job_Schema = require('../../Schemas/job');
const readDB = require('./readDB');

module.exports = function (req, res, next) {
	const jobTitle = req.body.title

	if(jobTitle){
		const query = readDB.search_job(req);
		job_Schema.find(query, {_id:0}, function(err,obj){
			if (err) {
				console.log("Error:" + err);
				return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
			}
			else{
				const output = []
				obj.forEach(item=>{
					const output1 = readDB.getOtherDB_job(item)
					output.push(output1)
				})
				return res.send({status:'success',message:true,data:output});
			}
		})
	}
	else{
		res.send({status:'success', message:false, description:"session不存在(已過期)"});
	}
}
