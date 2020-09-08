//const ColumnSchema = require('./column')
const mongoose = require('mongoose')
const url = 'mongodb+srv://ntueeplus:ntueeplus2020@cluster0.fctiy.mongodb.net/heroku_kbtrwz4h?retryWrites=true&w=majority'
mongoose.connect(url)

const Schema = mongoose.Schema;

const Column_Schema = new Schema({
	filename:{type:String},
    columnImg: {//column 的照片
	  data:{type:Buffer},
	  contentType:{type:String}
	}
})

const Column = mongoose.model('Column',Column_Schema);


mongoose.connection.once('open',async function () {    
    console.log('Mongoose connection open to ' + url);  
    const obj = await Column.find().exec()
    
});
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});

