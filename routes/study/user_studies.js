const mongoose = require('./study_db'),
    Schema = mongoose.Schema;

const Study_Schema = new Schema({
    ID : String,
	title : String,
	subtitle: String,
	description: String
})

module.exports = mongoose.model('User_Study',Study_Schema);
