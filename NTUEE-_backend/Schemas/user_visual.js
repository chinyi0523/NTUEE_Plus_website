var mongoose = require("./db"),
  Schema = mongoose.Schema;

var User_visual_Schema = new Schema({
  username: { type: String, required: true },
  nickname: { type: String, required: true },

  profile: String,
  education:
  [
    {
      Bachelor_university: { type: String, required: true },
      Major: { type: String, required: true },
      Double_Major: String,
      Minor: String, 
      Graduate_year_BS: Number
    },
    {
      Master_university: String,
      Field_MS: String,
      Graduate_year_MS: Number
    },
    {
      PHD_university: String,
      Field_PHD: String,
      Graduate_year_PHD: Number
    }
  ],
  email: String,
  phone:
  { cellphone: String, office: String },
  location: 
  { country: String, state: String, city: String },
  profession:
  [
    {
      Company1: String, Title1: String
    },
    {
      Company2: String, Title2: String
    },
    {
      Company3: String, Title3: String
    }
  ]
});

module.exports = mongoose.model("User_visual", User_visual_Schema);
