const express = require("express");
const cors = require('cors');
require('./db/config');
const User=require('./db/user');
const News=require('./db/news');
const Events=require('./db/events');
const Partners = require('./db/partners')

const app = express();
app.use(express.json());
app.use(cors())

app.post("/register", async (req,resp)=>{
  let user = new User(req.body);
  let result= await user.save();
  result=result.toObject();  
  delete result.password;
  resp.send(result);
})

app.post("/login",async (req,resp)=>{
  let user= await User.findOne(req.body).select("-password")
  if(user){
    resp.send(user) 
  }
  else{
    resp.send({result:"user not found"})
  }
})

app.get('/user/:_id', async (req, resp) => {
  const result = await User.findOne({ _id: req.params._id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: 'user not found' });
  }
});


app.delete('/user/:_id', async (req, resp) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ error: "Internal server error" });
  }
});



app.get("/search/:key", async (req,resp)=>{
  let result=await User.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {collegeName:{$regex:req.params.key}}
    ]
  })
  resp.send(result);
})

app.post("/news", async (req,resp)=>{
  let news = new News(req.body);
  let result= await news.save();
  result=result.toObject();
  resp.send(result);
})

app.get("/news", async (req, resp) => {
  try {
    const news = await News.find();
    resp.send(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    resp.status(500).send({ error: "Internal server error" });
  }
});

app.post("/events", async (req,resp)=>{
  let events = new Events(req.body);
  let result= await events.save();
  result=result.toObject();
  resp.send(result);
})

app.get('/events', async(req,resp)=>{
  let result=await Events.find();
  resp.send(result);
})
app.post("/partners", async (req,resp)=>{
  let partners = new Partners(req.body);
  let result= await partners.save();
  result=result.toObject();
  resp.send(result);
})
app.get('/partners', async(req,resp)=>{
  let result=await Partners.find();
  resp.send(result);
})

app.put('/user', async (req, res) => {
  try {
    const updatedUserData = req.body;

    // Update user data in the database
    const user = await User.findOneAndUpdate({}, updatedUserData, { new: true });

    res.json({ message: 'User data updated successfully', userData: user });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/user', async(req,resp)=>{
  let result=await Partners.find();
  resp.send(result);
})

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});