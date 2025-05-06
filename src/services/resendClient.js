const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async ({ to, token }) => {
  const url = `https://vouchforme.org/verify-email?token=${token}`;

  return resend.emails.send({
    from: 'VouchForMe <noreply@vouchforme.org>',
    to,
    subject: 'Verify your email address',
    html: `
      <p>Welcome to VouchForMe!</p>
      <p>Please <a href="${url}">click here to verify your email</a>.</p>
      <p>If you didn't request this, you can safely ignore it.</p>
    `,
  });
};

module.exports = {
  sendVerificationEmail
};
