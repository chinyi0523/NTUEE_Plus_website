//ee0125/index.js
var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

//post, get時的解碼
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

//session 設定
//參考網站https://www.cnblogs.com/chyingp/p/nodejs-learning-express-session.html
app.use(session({
	name: 'test',
    secret: 'chyingp',  // 用来對session id相關的cookie進行簽名，建議128byte亂碼
    store: new FileStore({logFn: function(){}}),  // 本地儲存session（文本文件，也可以選擇其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的會話，建議false
    resave: false,  // 是否每次都重新保存會話，建議false
    cookie: {
		httpOnly: true, //false前端可read和set
        maxAge: 60 * 60 * 1000  // 有效期(ms)
    }
}));

//由 api/當後端
app.use("/api", require("./routes/api"));

//Serve static files from the React app
//詳細資訊看：https://expressjs.com/zh-tw/starter/static-files.html
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html')); //這個缺點是react build的index不是我們寫的那個
  //res.redirect('/'); //這個按F5會亂跳，先捨棄
});


var server = app.listen(process.env.PORT||1993,function(){
    console.log('server connect');
	console.log('port name: ',process.env.PORT||1993);
})