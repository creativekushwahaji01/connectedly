const mongoose = require('./config');

const speakerSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String
});

const agendaSchema = new mongoose.Schema({
  time: String,
  title: String
});

const eventSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, default: "Online" },
  organizer: { type: String, enum: ['global', 'community'], default: 'community' },
  organizerName: { type: String, required: true },
  imgUrl: { type: String, default: '' },
  description: { type: String, required: true },
  status: { type: String, enum: ['upcoming', 'past'], default: 'upcoming' },
  speakers: [speakerSchema],
  agenda: [agendaSchema]
});

module.exports = mongoose.model('Event', eventSchema);
