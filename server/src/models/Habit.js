const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['water', 'sleep'], required: true },
  value: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Habit', habitSchema);
