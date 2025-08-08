const Habit = require('../models/Habit');

exports.saveHabit = async (req, res) => {
  try {
    const { type, value } = req.body;
    const habit = await Habit.create({ userId: req.user.id, type, value });
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
