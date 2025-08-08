const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  moodTag: { type: String },
  createdAt: { type: Date, default: Date.now },
  type: { type: String, enum: ['journal', 'mirror'], default: 'journal' }
});

module.exports = mongoose.model('Journal', journalSchema);
