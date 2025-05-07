const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async ({ to, token }) => {
  const url = `https://vouchforme.org/#/verify-email?token=${token}`;

  return resend.emails.send({
    from: 'VouchForMe <noreply@vouchforme.org>',
    to,
    subject: 'Verify your email address',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; background-color: #f9f9f9; border-radius: 8px; color: #333;">
            <h2 style="color: #e9636c;">Welcome to VouchForMe 👋</h2>
            <p>Thanks for signing up! To get started, please confirm your email address by clicking the button below:</p>
            
            <div style="text-align: center; margin: 32px 0;">
            <a href="${url}" style="display: inline-block; background-color: #e9636c; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                Verify My Email
            </a>
            </div>

            <p>If the button doesn’t work, copy and paste the link below into your browser:</p>
            <p style="word-break: break-all;"><a href="${url}" style="color: #e9636c;">${url}</a></p>

            <hr style="margin: 32px 0; border: none; border-top: 1px solid #ddd;" />
            <p style="font-size: 12px; color: #888;">If you didn’t request this email, you can safely ignore it.</p>
        </div>
        `,
  });
};

module.exports = {
  sendVerificationEmail
};
