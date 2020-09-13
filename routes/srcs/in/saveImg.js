const SaveFunc = require('./imgProcess/addImg');
module.exports = function (req, res, next){
	let saveDone = false;
	if(req.body.filename){
		saveDone = SaveFunc(req.body.filename,req.file);
	}
	
	if(saveDone){return res.status(204).end()}
	else{return res.status(500).send({description:"儲存失敗"})}
}