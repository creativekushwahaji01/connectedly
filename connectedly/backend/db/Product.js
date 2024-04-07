const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    img:String,
    price:String,
    category:String,
    company:String,
    userId:String
});

module.exports=mongoose.model("products", productSchema)    
      