const crypto = require('crypto');
const prisma = require('../config/prisma');
const { sendVerificationEmail } = require('../services/resendClient');

const sendVerificationEmailHandler = async (req, res) => {
  const { email } = req.body;

  const token = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60);

  await prisma.emailVerificationToken.create({
    data: { email, token, expiresAt }
  });

  await sendVerificationEmail({ to: email, token });
  res.status(200).json({ message:"Email Sent" });

};

const verifyEmailHandler = async (req, res) => {
  const { token } = req.query;

  const record = await prisma.emailVerificationToken.findUnique({
    where: { token },
  });

  if (!record || record.expiresAt < new Date()) {
    return res.status(400).json({ error: 'Invalid or expired token' });
  }

  const user = await prisma.user.findUnique({
    where: { email: record.email },
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  await prisma.user.update({
    where: { email: record.email },
    data: { emailVerified: true },
  });

  await prisma.emailVerificationToken.delete({
    where: { token },
  });

  res.status(200).json({ emailVerified: true });
};


module.exports = {
  sendVerificationEmailHandler,
  verifyEmailHandler
};
