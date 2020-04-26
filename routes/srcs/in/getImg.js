var GetFunc = require('./imgProcess/getImg');
module.exports = async function (req, res, next){
	var getDone = false;
	getDone = await GetFunc(req.body.filename);
	
	if(getDone){return res.send({status:'success',message:true,data:getDone})}
	else{return res.send({status:'success',message:false,description:"get Img 發生錯誤"})}
}