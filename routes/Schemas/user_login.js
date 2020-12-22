const mongoose = require("./db"),
  Schema = mongoose.Schema;

const User_login_Schema = new Schema({
  username: { type: String, required: true },//名字
  facebookID: String,
  account: { type: String, required: true, lowercase: true },//學號
  userpsw: String,//密碼
  isAuth: {type:Boolean, default:false},
  visual:  { type: Schema.Types.ObjectId, ref: 'User_visual' },
  question: { type: String},//安全問題
  img: {
    data: { type: Buffer },
    contentType: { type: String }
  }
});

module.exports = mongoose.model("User_login", User_login_Schema);
