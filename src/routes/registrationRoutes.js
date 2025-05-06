const express = require('express');
const {
  sendVerificationEmailHandler,
  verifyEmailHandler
} = require('../controllers/registrationController');

const router = express.Router();

router.post('/send-verification-email', sendVerificationEmailHandler);
router.get('/verify-email', verifyEmailHandler);

module.exports = router;
