var Column_Schema = require('../../../Schemas/column');

module.exports = function (name){
	Column_Schema.find({filename:name},function(err,obj){
		if(err){
			console.log(err);
			return false;
		}
		if(obj.length==1){
			objImg = obj[0].columnImg;
			var prefix="data:"+objImg.contentType+";base64,"
			var img = new Buffer(objImg.data, 'binary').toString('base64');
			return prefix+img;
		}
		else{
			console.log("查到多筆資料");
			return false;
		}
	})
}