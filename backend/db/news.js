const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  topic: String,
  date: { type: Date, default: Date.now },
  description: String,
  imgUrl:String
});

module.exports = mongoose.model('News', newsSchema);
