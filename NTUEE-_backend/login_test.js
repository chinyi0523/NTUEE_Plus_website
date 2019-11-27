var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*dbo.createCollection("login", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  /*var data ={ account:"b06901180" , password:"NTUEE" , session:"",private_email:"james31423a@gmail.com",safe_question:"What's your elementary school?"}
   dbo.collection("login").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });*/
  dbo.collection("login").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.account);
    db.close();
  });
});