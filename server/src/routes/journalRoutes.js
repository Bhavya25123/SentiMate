const router = require('express').Router();
const auth = require('../middleware/auth');
const { createJournal, getJournals } = require('../controllers/journalController');

router.post('/journal', auth, createJournal);
router.get('/journal', auth, getJournals);

module.exports = router;
