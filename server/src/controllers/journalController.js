const Journal = require('../models/Journal');

exports.createJournal = async (req, res) => {
  try {
    const { text, moodTag } = req.body;
    const journal = await Journal.create({ userId: req.user.id, text, moodTag });
    res.json(journal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
