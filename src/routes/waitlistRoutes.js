const express = require('express');
const router = express.Router();
const waitlistController = require('../controllers/waitlistController');

// POST /api/waitlist
router.post('/', waitlistController.addToWaitlist);
router.get('/',waitlistController.getWaitlistCount)

module.exports = router;
