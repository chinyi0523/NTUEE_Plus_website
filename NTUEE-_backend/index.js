var express = require('express');
var app = express();
var router = express.Router(); //後端處理的地方
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require("crypto");

//链接本地数据库
var DB_URL = 'mongodb://localhost:27017/mongoose'
mongoose.connect(DB_URL);

app.use(express.static('public'));
//解析表单数据
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})
//這個到時候要刪掉
router.get('/',function(req,res){
    res.render('index',__dirname+"/public/index.html")
})

/*注册页面数据接收*/
router.post('/register', function(req, res){
	var regPage = require('./srcs/register');
	regPage(req, res);
});

/*登录处理*/
router.post('/login', function (req, res, next) {
  var loginPage = require('./srcs/login');
  loginPage(req,res,next);
});

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

router.post('/forget', function (req, res, next) {
  var forgetPage = require('./srcs/forget');
  forgetPage(req, res, next);
});

router.get('/activation',function(req,res){
	var activePage = require('./srcs/activation');
	activePage(req,res);
});

app.use('/api', router);

var server = app.listen(1993,function(){
    console.log('server connect');
})