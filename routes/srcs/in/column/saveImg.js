const addColumn = require('./imgProcess/addImg');
module.exports = async function (req, res, next){
	try{
		await addColumn(req.body.filename,req.file)
		return res.status(204).end()
	}catch(e){
		return res.status(500).send({description:"儲存失敗"})
	}
}