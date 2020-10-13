const getColumn = require('./imgProcess/getImg');
module.exports = async function (req, res, next){
	// let getDone = false;
	try{
		const getDone = await getColumn(req.body.filename);
		console.log("getDone"+req.body.filename)
		if(!getDone) return res.status(500).send({description:"圖片不存在"})
		return res.status(201).send({data:getDone})
	}catch(e){
		console.log(e)
		return res.status(500).send({description:"資料庫錯誤"})
	}
}