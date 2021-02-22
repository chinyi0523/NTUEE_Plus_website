const mongoose = require("./db"),
  Schema = mongoose.Schema;
require('mongoose-type-email');

const User_login_Schema = new Schema({
  username: { type: String, required: true },//名字
  facebookID: String,
  account: { type: String, required: true, lowercase: true },//學號
  userpsw: String,//密碼
  email: {type:mongoose.SchemaTypes.Email},
  img: {
    data: { type: Buffer },
    contentType: { type: String }
  }
});

module.exports = mongoose.model("User_login", User_login_Schema);
