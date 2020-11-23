const mongoose = require('./db'),
    Schema = mongoose.Schema;

const Column_Outline = new Schema({
    filename:{type:String},
    anno:[{type:String}],
    title:[{type:String}],
    exp:[{type:String}],
    edu:[{type:String}],
    intro:[{type:String}],
    id:{type:String},
    columnImg: {//column 的照片
	  data:{type:Buffer},
	  contentType:{type:String}
	}
})

module.exports = mongoose.model('Column_outline',Column_Outline);
