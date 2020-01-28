//ee0125/index.js
var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');

//post, get時的解碼
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})


//由 api/當後端
app.use("/api", require("./routes/api"));

//Serve static files from the React app
//詳細資訊看：https://expressjs.com/zh-tw/starter/static-files.html
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


var server = app.listen(process.env.PORT||1993,function(){
    console.log('server connect');
	console.log('port name: ',process.env.PORT||1993);
})