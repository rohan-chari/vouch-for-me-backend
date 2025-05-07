const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/waitlist
router.post('/create-user', userController.addUserToDb);

module.exports = router;
