var mongoose = require('./db'),
    Schema = mongoose.Schema;

var Column_Schema = new Schema({
	name:{type:String},
    columnImg: {//column 的照片
	  data:{type:Buffer},
	  contentType:{type:String}
	}
})

module.exports = mongoose.model('Column',Column_Schema);
