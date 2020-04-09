var Job_Schema = require('../../Schemas/job');

/*新增一筆資料*/
function insert(title,subtitle,description){
      //格式
    var job =  new Job_Schema({ 
		title: title,
                subtitle : subtitle,
		description: description
            });
	
    job.save(function(err,res){ //save to db
        if(err){
            console.log(err);
        }
        else{
		console.log('成功儲存：',job);
		console.log(res);
        }
    })
}

module.exports = function (req, res) {
    var jobTitle = req.body.title;
    var jobSubtitle = req.body.subtitle;
    var jobDescription = req.body.description;

    //var query = {ID: ID};
    console.log("新增工作");
    insert(jobTitle, jobSubtitle, jobDescription);
    res.send({status:'success', message:true, data: jobTitle})
}
