const { dbCatch } = require('../../../../error');
const Study_Link = require('../../../../Schemas/googlesheet_link');

module.exports = async function(name,file){
	await new Study_Link({
        link1: String,
        link2: String,
		year:{type:Number, default: Date.getFullyear()}
	}).save().catch(dbCatch)
}