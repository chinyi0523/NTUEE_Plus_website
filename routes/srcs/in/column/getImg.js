const GetFunc = require('./imgProcess/getImg');
module.exports = async function (req, res, next){
	let getDone = false;
	getDone = await GetFunc(req.body.filename);
	console.log("getDone"+req.body.filename)
	if(getDone){		
		return res.status(201).send({data:getDone})
	}
	else{return res.status(500).send({description:"get Img 發生錯誤"})}
}