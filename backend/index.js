const express = require("express");
const cors = require('cors');
require('./db/config');
const User = require('./db/user');
const News = require('./db/news');
const Events = require('./db/events');
const Partners = require('./db/partners');

const app = express();
app.use(express.json());
app.use(cors());

// ======== Auth ========

// Register a new user
app.post("/register", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
  } catch (error) {
    console.error('Error registering user:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// Login user
app.post("/login", async (req, resp) => {
  try {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "User not found" });
    }
  } catch (error) {
    console.error('Error during login:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// Get a user by ID
app.get('/user/:_id', async (req, resp) => {
  try {
    const result = await User.findOne({ _id: req.params._id }).select("-password");
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// Update user by ID
app.put('/user/:_id', async (req, res) => {
  try {
    const updatedUserData = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.params._id },
      updatedUserData,
      { new: true }
    ).select("-password");
    res.json({ message: 'User data updated successfully', userData: user });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete user by ID
app.delete('/user/:_id', async (req, resp) => {
  try {
    const result = await User.deleteOne({ _id: req.params._id });
    resp.send(result);
  } catch (error) {
    console.error('Error deleting user:', error);
    resp.status(500).send({ error: "Internal server error" });
  }
});

// Search users by name or college
app.get("/search/:key", async (req, resp) => {
  try {
    const result = await User.find({
      "$or": [
        { name: { $regex: req.params.key, $options: "i" } },
        { collegeName: { $regex: req.params.key, $options: "i" } }
      ]
    }).select("-password");
    resp.send(result);
  } catch (error) {
    console.error('Error searching users:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// ======== News ========

// Post news
app.post("/news", async (req, resp) => {
  try {
    let news = new News(req.body);
    let result = await news.save();
    resp.send(result);
  } catch (error) {
    console.error('Error posting news:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// Get all news
app.get("/news", async (req, resp) => {
  try {
    const news = await News.find();
    resp.send(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    resp.status(500).send({ error: "Internal server error" });
  }
});

// ======== Events ========

// Post event
app.post("/events", async (req, resp) => {
  try {
    let events = new Events(req.body);
    let result = await events.save();
    resp.send(result);
  } catch (error) {
    console.error('Error posting event:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// Get all events
app.get('/events', async (req, resp) => {
  try {
    const result = await Events.find();
    resp.send(result);
  } catch (error) {
    console.error('Error fetching events:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// ======== Partners ========

// Post partner
app.post("/partners", async (req, resp) => {
  try {
    let partners = new Partners(req.body);
    let result = await partners.save();
    resp.send(result);
  } catch (error) {
    console.error('Error posting partner:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// Get all partners
app.get('/partners', async (req, resp) => {
  try {
    const result = await Partners.find();
    resp.send(result);
  } catch (error) {
    console.error('Error fetching partners:', error);
    resp.status(500).send({ error: 'Internal server error' });
  }
});

// ======== Start Server ========

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
