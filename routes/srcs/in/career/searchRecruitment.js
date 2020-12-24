const { dbCatch } = require('../../../error')
const Recruitment = require('../../../Schemas/recruitment')
const asyncHandler = require('express-async-handler')

const recruitment = {
    "title":[
        "title",
        "company_name",
        "work_type"
    ],
    "info":[
        "salary",
        "experience",
        "diploma"
    ],
    "spec":[
        "requirement",
        "description"
    ]
}

const search = (req) => {
	const query = {};
	recruitment.title.forEach(element => {
		if(req.body[element] !== undefined){
            const regex = new RegExp(req.body[element], "i")
			query["title." + element] = {$regex: regex};
		}
	});
	recruitment.info.forEach(element => {
		if(req.body[element] !== undefined){
            const regex = new RegExp(req.body[element], "i")
			query["info." + element] = {$regex: regex};
		}
	});
	recruitment.spec.forEach(element => {
		if(req.body[element] !== undefined){
            const regex = new RegExp(req.body[element], "i")
			query["spec." + element] = {$regex: regex};
		}
	});
	console.log('query=', query);
	return query;
}

const searchRecuitment = async function (req, res, next) {
    const query = search(req);
    const objs = await Recruitment.find(query, {_id:0}).catch(dbCatch);
    const recruitments = [];
    objs.forEach(each => {
        recruitments.push(each.getPublic());
    })
    return res.status(201).send({data: recruitments})
}

module.exports = asyncHandler(searchRecuitment)