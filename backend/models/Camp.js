const mongoose = require('mongoose');

const CampSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organizer: { type: String, required: true },
  type: { type: String, enum: ['govt', 'ngo', 'private'], required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String, required: true },
  distance: { type: String },
  services: [{ type: String }],
  verified: { type: Boolean, default: false },
  participants: { type: String },
  description: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String }
});

module.exports = mongoose.model('Camp', CampSchema);



