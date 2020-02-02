var mongoose = require("./db"),
  Schema = mongoose.Schema;
require('mongoose-type-email');

var User_visual_Schema = new Schema({
  account:  {
	show: {type:Boolean,default:true},
	data: {type: String, required: true, lowercase: true }
  },
  username: {
	show:{type:Boolean,default:true},
	data:{ type: String, required: true }
  },
  nickname: {
	show:{type:Boolean,default:true},
	data:{type: String}
  },
  profile: {
	show:{type:Boolean,default:true},
	data:{type: String}
  },
  education: [
	{
		show:{type:Boolean,default:true},
		SD:{type:String},//school and department
		Note:{type:String}//一些備註，如：畢業、在學....
	}
  ],
  publicEmail:{
	show:{type:Boolean,default:true},
	data:{type:mongoose.SchemaTypes.Email}
  },
  office:{
	show:{type:Boolean,default:true},
	data:{type:String}
  },//phone
  cellphone:{
	show:{type:Boolean,default:false},
	data:{type:String}
  },
  CC:{
	show:{type:Boolean,default:false},
	data:{type:String}
  },//city+country
  Occupation:[{
	show:{type:Boolean,default:true},
	title:{type:String},
	Company:{type:String}
  }],
  JobID:{type:String}//有空去查一下mongoose的ref和populate
});

module.exports = mongoose.model("User_visual", User_visual_Schema);
