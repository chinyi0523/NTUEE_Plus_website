const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	filename:{type:String},
    columnImg: {//column 的照片
	  data:{type:Buffer},
	  contentType:{type:String}
	}
})
const sourceUrl = 'mongodb+srv://ntueeplus:ntueeplus2020@cluster0.fctiy.mongodb.net/heroku_kbtrwz4h?retryWrites=true&w=majority',
    targetUrl = process.env.MONGO_URI||'mongodb://localhost:27017/eeplus',
    collectionName = 'columns';





(async ()=>{
    const sourceDB = await mongoose.createConnection(sourceUrl);
    const sourceModel = sourceDB.model(collectionName,userSchema);
    const targetDB = await mongoose.createConnection(targetUrl);
    const targetModel = targetDB.model(collectionName,userSchema);
    targetDB.db.dropDatabase(function (err, res) {
        if (err) return console.log(err);
        console.log('docker DB dropped');
    })
    const docs = await sourceModel.find({});
    for(let doc of docs){
        //console.log(doc);
        await new targetModel({
            filename:doc.filename,
            columnImg:doc.columnImg
        }).save();
    }
    mongoose.disconnect();
})();
