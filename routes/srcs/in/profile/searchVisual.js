const Visual = require('../../../Schemas/user_visual');
const search = require('./DBquery/searchOr');
const getPublic = require('./DBquery/getPublic');
const { dbCatch } = require('../../../error');

module.exports = async function (req, res, next) {
	const query = search(req)
	const objs = await Visual.find(query,{_id:0}).catch(dbCatch)
	const users = []
	objs.forEach(person=>{
		users.push(getPublic(person))
	})
	return res.status(201).send({data:users})
}