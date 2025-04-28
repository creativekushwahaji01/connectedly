const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://database_connect:connect0987@cluster0.okeuehz.mongodb.net/connectedly?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

module.exports = mongoose;
