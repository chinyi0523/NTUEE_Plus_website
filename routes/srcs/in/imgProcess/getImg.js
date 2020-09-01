const Column_Schema = require('../../../Schemas/column');

module.exports = function (name){
	return new Promise((resolve,reject)=>{
		Column_Schema.find({filename:name},function(err,obj){
		if(err){
			console.log(err);
			resolve(false);
		}
		if(obj.length==1){
			objImg = obj[0].columnImg;
			//const prefix="data:"+objImg.contentType+";base64,"
			//const img = new Buffer(objImg.data, 'binary').toString('base64');
			//console.log("find!!")
			resolve(objImg);
		}
		else{
			// console.log("查無資料或有多筆資料");
			resolve(false);
		}
	})
	})
	
}