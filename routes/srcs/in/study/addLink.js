const { dbCatch } = require('../../../error');
const Study_Link = require('../../../Schemas/googlesheet_link');
const asyncHandle = require('express-async-handler')

module.exports = asyncHandle(async function (req, res) {
	const {senior,junior} = req.body
	await new Study_Link({
		link1: senior,
		link2: junior,
		publishTime: Date.now() //need further change
	}).save().catch(dbCatch)
	res.end()
})