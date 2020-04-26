var Column_Schema = require('../../../Schemas/column');

module.exports = function (name){
	return new Promise((resolve,reject)=>{
		Column_Schema.find({filename:name},function(err,obj){
		if(err){
			console.log(err);
			resolve(false);
		}
		if(obj.length==1){
			objImg = obj[0].columnImg;
			var prefix="data:"+objImg.contentType+";base64,"
			var img = new Buffer(objImg.data, 'binary').toString('base64');
			//console.log("find!!")
			resolve(prefix+img);
		}
		else{
			console.log("查無資料或有多筆資料");
			resolve(false);
		}
	})
	})
	
}