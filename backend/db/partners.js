const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  imgUrl: String,
  bio: String,
  instaLink: { type: String, default: "#" },
  twitterLink: { type: String, default: "#" },
  linkedinLink: { type: String, default: "#" },
});

module.exports= mongoose.model('partners', partnerSchema)