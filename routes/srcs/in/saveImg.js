const SaveFunc = require('./imgProcess/addImg');
module.exports = function (req, res, next){
	let saveDone = false;
	if(req.body.filename){
		saveDone = SaveFunc(req.body.filename,req.file);
	}
	
	if(saveDone){return res.send({status:'success',message:true})}
	else{return res.send({status:'success',message:false,description:"儲存失敗"})}
}