var mongoose = require("./db"),
  Schema = mongoose.Schema;
require('mongoose-type-email');

var User_visual_Schema = new Schema({
  account:  { type: String, required: true, lowercase: true },
  username: { type: String, required: true },
  nickname: { type: String},
  profile: String,
  education: [
	{
		SD:{type:String},//school and department
		Note:{type:String}
	}
  ],
  publicEmail:{ type:mongoose.SchemaTypes.Email},
  office:{type:String},//phone
  cellphone:{type:String},
  CC:{type:String},//city+country
  Occupation:[
	title:{type:String},
	Company:{type:String}
  ],
  JobID:{type:String}
});

module.exports = mongoose.model("User_visual", User_visual_Schema);
