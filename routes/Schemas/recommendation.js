const mongoose = require('./db'),
    Schema = mongoose.Schema;

const Recommendation_Schema = new Schema({
  title:{
		title: String,
		name: String,
		desire_work_type: String
	},
	info:{
		contact: String,
		email: String,
		diploma: String,
	},
	
	spec:{
		experience: String,
		speciality: String
	},
	//image:eesa_icon,
  id: String
})

module.exports = mongoose.model('Recommendation', Recommendation_Schema);
