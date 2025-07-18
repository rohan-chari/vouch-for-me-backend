const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/waitlist
router.post('/create-user', userController.addUserToDb);
router.get('/get-user', userController.getUser);
router.patch('/update-user',userController.updateUser)


module.exports = router;
