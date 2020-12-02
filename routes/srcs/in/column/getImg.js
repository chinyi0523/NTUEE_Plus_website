const getColumn = require('./imgProcess/getImg');

module.exports = async function (req, res, next){
	const getDone = await getColumn(req.body.filename)
	return res.status(201).send({data:getDone})
}