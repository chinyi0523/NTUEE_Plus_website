var mongoose = require("./db"),
  Schema = mongoose.Schema;

var User_login_Schema = new Schema({
  username: { type: String, required: true },//名字
  account: { type: String, required: true },//學號
  userpsw: { type: String, required: true },//密碼
  private_Email: String,
  question: { type: String, default: "Hello World" }//安全問題
});

module.exports = mongoose.model("User_login", User_login_Schema);
