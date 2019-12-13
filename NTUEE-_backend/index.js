var express = require("express");
var router = express.Router(); //後端處理的地方
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var crypto = require("crypto");

var app = express();

//链接本地数据库
var DB_URL = "mongodb://localhost:27017/mongoose";
mongoose.connect(DB_URL);

var indexRouter = require("./routes/index");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");

app.use(cors());
app.use(express.static("public"));
//解析表单数据
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// 之後刪掉根目錄的router, router功能定義在/routes裡
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

//处理昵称和头像的上传
/*app.post('/uploadImg',function(req,res,next){
    res.setHeader('Content-type','application/json;charset=utf-8')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    //id
    var getName = req.body.sendName;
    //昵称
    var myName = req.body.myName;

    var checkName = {username: getName};
    //修改默认的昵称
    userSchema.update(checkName,{nickname:myName},function(err, nick){
        console.log('我是昵称'+nick);
        res.send({status:'success',message:true,data:nick}); 
    })
})*/

router.post("/forget", function(req, res, next) {
  var forgetPage = require("./srcs/forget");
  forgetPage(req, res, next);
});

router.get("/activation", function(req, res) {
  var activePage = require("./srcs/activation");
  activePage(req, res);
});

app.use("/api", router);

var server = app.listen(1993, function() {
  console.log("server connect");
});
