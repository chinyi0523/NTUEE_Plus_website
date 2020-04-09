var job_Schema = require('../../Schemas/job');
var readDB = require('./readDB');

module.exports = function (req, res, next) {
	var jobTitle = req.body.title
	if(!jobTitle){
		jobTitle = 'Job Title' //測試用
	}
	if(jobTitle){
		var query = readDB.search(req);
		job_Schema.find(query,{_id:0},function(err,obj){
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
