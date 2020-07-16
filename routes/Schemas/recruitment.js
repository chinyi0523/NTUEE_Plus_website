const mongoose = require('./db'),
    Schema = mongoose.Schema;

const Recruitment_Schema = new Schema({
    title:{
		title: String,
		company_name: String,
		work_type: String
	},
	info:{
		salary: String,
		experience: String,
		diploma: String
	},
	
	spec:{
		requirement: String,
		description: String
	},
	//image:eesa_icon,
  id: String
})

module.exports = mongoose.model('Recruitment', Recruitment_Schema);
