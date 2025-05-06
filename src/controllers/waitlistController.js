// controllers/waitlistController.js
const prisma = require('../config/prisma');

exports.addToWaitlist = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const newUser = await prisma.waitListUser.create({
      data: { email: email.toLowerCase() },
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'This email is already on the waitlist.' });
    }
    console.error('Error adding to waitlist:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getWaitlistCount = async (req, res) => {
    
    try {
      const waitlistUserCount = await prisma.waitListUser.count()
      res.status(201).json({waitlistCount: waitlistUserCount});
    } catch (error) {
      console.error('There was an error fetching the waitlist count.', error);
      res.status(500).json({ error: 'Error fetching waitlist.' });
    }
  };
