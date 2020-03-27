var GetFunc = require('./imgProcess/getImg');
module.exports = function (req, res, next){
	var getDone = false;
	getDone = GetFunc(req.body.filename);
	
	if(getDone){return res.send({status:'success',message:true,data:getDone})}
	else{return res.send({status:'success',message:false,description:"get Img 發生錯誤"})}
}