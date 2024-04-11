// user.js (user schema)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  imgUrl: String,
  rank: { type: String, default: "member" },
  collegeName: { type: String, default: "collegeName" },
  address: { type: String, default: "Address" },
  mobileNumber: { type: String, default: "0000000000" },
  instaLink: { type: String, default: "#" },
  twitterLink: { type: String, default: "#" },
  linkedinLink: { type: String, default: "#" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
