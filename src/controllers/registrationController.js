const crypto = require('crypto');
const prisma = require('../config/prisma');
const { sendVerificationEmail } = require('../services/resendClient');

const sendVerificationEmailHandler = async (req, res) => {
  const { email } = req.body;

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60);

  await prisma.emailVerificationToken.create({
    data: { email, token, expiresAt }
  });

  await sendVerificationEmail({ to: email, token });

  res.status(200).json({ message: 'Verification email sent' });
};

const verifyEmailHandler = async (req, res) => {
  const { token } = req.query;

  const record = await prisma.emailVerificationToken.findUnique({ where: { token } });

  if (!record || record.expiresAt < new Date()) {
    return res.status(400).json({ error: 'Invalid or expired token' });
  }

  const userExists = await prisma.user.findUnique({ where: { email: record.email } });
  if (userExists) {
    return res.redirect('/already-verified');
  }

  await prisma.user.create({ data: { email: record.email } });

  await prisma.emailVerificationToken.delete({ where: { token } });

  res.redirect('/email-verified-success');
};

module.exports = {
  sendVerificationEmailHandler,
  verifyEmailHandler
};
