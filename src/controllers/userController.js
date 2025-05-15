// controllers/waitlistController.js
const prisma = require('../config/prisma');

exports.addUserToDb = async (req, res) => {
  const { email, uid } = req.body;

  if (!email || !uid) {
    return res.status(400).json({ error: 'Missing Required fields.' });
  }

  try {
    const newUser = await prisma.user.create({
      data: { email: email.toLowerCase(), uid: uid },
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

exports.getUser = async (req, res) => {
    const { email, uid } = req.query;
  
    if (!email || !uid) {
      return res.status(400).json({ error: 'Missing Required fields.' });
    }
  
    try {
        const user = await prisma.user.findUnique({
            where: { email: email, uid: uid },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error fetching user: ', error);
        res.status(500).json({ error: 'Error fetching user.' });
    }
};

exports.updateUser = async (req, res) => {
  const {
    uid,
    email,
    emailVerified,
    firstName,
    middleInitial,
    lastName,
    profilePictureUrl
  } = req.body;

  if (!uid) {
    return res.status(400).json({ error: 'Missing UID.' });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { uid },
      data: {
        email: email?.toLowerCase(),
        emailVerified,
        firstName,
        middleInitial,
        lastName,
        profilePictureUrl
      }
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'User not found.' });
    }

    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


