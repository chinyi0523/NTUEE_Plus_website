var mongoose = require("./db"),
  Schema = mongoose.Schema;

var User_login_Schema = new Schema({
  username: { type: String, required: true }, // name
  facebookID: { type: String, required: true }, // facebook id
  account: { type: String, required: true, lowercase: true }, // 學號
  img: {
    data: { type: Buffer },
    contentType: { type: String }
  }
});

module.exports = mongoose.model("User_loginFB", User_login_Schema);
