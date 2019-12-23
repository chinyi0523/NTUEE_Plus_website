var user_l_Schema = require("../Schemas/user_login");
var crypto = require("crypto");

module.exports = function(req, res, next) {
  //先查询有没有这个user
  // console.log("req.body = " + req.body);
  var account = req.body.Login_username_input;
  console.log("account = " + req.body.Login_username_input);
  var UserPsw = req.body.Login_password_input;
  //密码加密
  var md5 = crypto.createHash("md5");
  var newPas = md5.update(UserPsw).digest("hex");
  //通过账号密码搜索验证
  var updatestr = { account: account, userpsw: newPas };
  //处理跨域的问题
  res.setHeader("Content-type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");

  user_l_Schema.find(updatestr, function(err, obj) {
    if (err) {
      console.log("Error:" + err);
    } else {
      if (obj.length == 1) {
        res.send({
          status: "success",
          message: true,
          data: { username: obj[0].username, account: obj[0].account }
        });
      } else {
        console.log("請註冊帳號");
        console.log(updatestr);
        res.send({ status: "success", message: false });
      }
    }
  });
};
