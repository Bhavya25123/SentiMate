const router = require('express').Router();
const auth = require('../middleware/auth');
const { logMood, getMoods } = require('../controllers/moodController');

router.post('/mood', auth, logMood);
router.get('/moods', auth, getMoods);

module.exports = router;
