const Mood = require('../models/Mood');

exports.logMood = async (req, res) => {
  try {
    const { mood, tags } = req.body;
    const moodEntry = await Mood.create({ userId: req.user.id, mood, tags });
    res.json(moodEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
