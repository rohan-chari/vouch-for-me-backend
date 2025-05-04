const express = require('express');
const router = express.Router();
const prisma = require('../config/prisma');

// POST /api/waitlist
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const newUser = await prisma.waitListUser.create({
      data: { email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') { // Prisma unique constraint violation
      return res.status(409).json({ error: 'This email is already on the waitlist.' });
    }

    console.error('Error adding to waitlist:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
