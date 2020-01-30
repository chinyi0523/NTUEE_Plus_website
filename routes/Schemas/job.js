var mongoose = require('./db'),
    Schema = mongoose.Schema;

var Job_Schema = new Schema({
    ID : String,
	title : String,
	subtitle: String,
	discription: String
})

module.exports = mongoose.model('Job',Job_Schema);