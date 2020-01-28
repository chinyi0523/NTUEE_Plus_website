var mongoose = require("./db"),
  Schema = mongoose.Schema;

var User_visual_Schema = new Schema({
  username: { type: String, required: true },
  nickname: { type: String, required: true },
  profile: String
});

module.exports = mongoose.model("User_visual", User_visual_Schema);
