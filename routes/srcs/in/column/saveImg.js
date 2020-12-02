const { dbCatch } = require('../../../error');
const addColumn = require('./imgProcess/addImg');

module.exports = async function (req, res, next){
	await addColumn(req.body.filename,req.file)
	return res.status(204).end()
}