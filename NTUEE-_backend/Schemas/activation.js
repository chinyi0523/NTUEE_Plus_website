var mongoose = require("./db"),
  Schema = mongoose.Schema;

var activation_Schema = new Schema({
  account: { type: String, required: true },
  newpsw: { type: String, required: true },
  active: String, //激活碼
  expireDate: { type: Date, default: Date.now } //1小時時限
});

module.exports = mongoose.model("Activation", activation_Schema);
