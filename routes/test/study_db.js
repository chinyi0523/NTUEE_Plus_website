const mongoose = require('mongoose');

//數據地址
// const local = true;
// let DB_URL;
// if(local){
//     DB_URL = 'mongodb+srv://ntueeplus:ntueeplus2020@cluster0.fctiy.mongodb.net/heroku_kbtrwz4h?retryWrites=true&w=majority'
//     //'mongodb://localhost:27017/mongoose';
// }else{
//     DB_URL = "mongodb://heroku_kbtrwz4h:f13g3thhm7uo2ip6o2qcnaufk9@ds155718.mlab.com:55718/heroku_kbtrwz4h";
// }
//"mongodb://heroku_b6klgxdz:lmed4cj2a50535mbei4fnsfq58@ds213529.mlab.com:13529/heroku_b6klgxdz"
// ; // || process.env.MONGODB_URI || 'mongodb://localhost:27017/mongoose';

const DB_URL1 = 'mongodb+srv://ntueeplus:ntueeplus2020@cluster0.fctiy.mongodb.net/heroku_kbtrwz4h?retryWrites=true&w=majority'
const DB_URL2 = 'mongodb://localhost:27017/eeplus';
const DB_URL = process.env.MONGO_URI||DB_URL1
//"mongodb://127.0.0.1/27021"
console.log('mongoose try to connect to： '+DB_URL);
mongoose.connect(DB_URL);


mongoose.connection.on('disconnected',function(){
    console.log('db disconnectted to '+DB_URL);
})

mongoose.connection.on('error',function(err){
    console.log(err);
})

module.exports = mongoose;
//mongodb://heroku_kbtrwz4h:f13g3thhm7uo2ip6o2qcnaufk9@ds155718.mlab.com:55718/heroku_kbtrwz4h
//mongodb://heroku_b6klgxdz:lmed4cj2a50535mbei4fnsfq58@ds213529.mlab.com:13529/heroku_b6klgxdz


//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://<username>:<password>@cluster0.4z3c2.mongodb.net/<dbname>?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//});
