const mongoose=require('./config');

const eventSchema = new mongoose.Schema({
    topic:String,
    date:{ type: String, default: Date.now },
    vanue:{type:String, default:"Online"},
    speaker:String,
    description:String,
    imgUrl:String
})

module.exports=mongoose.model('vanue',eventSchema);