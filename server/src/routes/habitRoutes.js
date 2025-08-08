const router = require('express').Router();
const auth = require('../middleware/auth');
const { saveHabit, getHabits } = require('../controllers/habitController');

router.post('/habit', auth, saveHabit);
router.get('/habits', auth, getHabits);

module.exports = router;
