var job_Schema = require('../../Schemas/job');
var readDB = require('./readDB');

module.exports = function (req, res, next) {
	var jobTitle = req.body.title

	if(jobTitle){
		var query = readDB.search_job(req);
		job_Schema.find(query, {_id:0}, function(err,obj){
			if (err) {
				console.log("Error:" + err);
				return res.send({status:'success',message:false, description:"資料庫錯誤"}); 
			}
			else{
				var output = []
				obj.forEach(item=>{
					var output1 = readDB.getOtherDB_job(item)
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
