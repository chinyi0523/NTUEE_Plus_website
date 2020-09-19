const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Column_Schema = new Schema({
	filename:{type:String},
    columnImg: {//column 的照片
	  data:{type:Buffer},
	  contentType:{type:String}
	}
})
//module.exports.userSchema = Column_Schema;
module.exports =  mongoose.model('Column',Column_Schema);
