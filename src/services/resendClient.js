const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async ({ to, token }) => {
  return resend.emails.send({
    from: 'VouchForMe <noreply@vouchforme.org>',
    to,
    subject: 'Verify your email address',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; background-color: #f9f9f9; border-radius: 8px; color: #333;">
        <h2 style="color: #e9636c; margin-bottom: 16px;">Welcome to VouchForMe 👋</h2>
        <p style="font-size: 16px; line-height: 1.5;">
          Thanks for signing up! To get started, please confirm your email address by entering the following code in VouchForMe:
        </p>

        <div style="text-align: center; margin: 32px 0;">
          <span style="display: inline-block; padding: 12px 24px; background-color: #e9636c; color: #fff; font-size: 24px; font-weight: bold; letter-spacing: 2px; border-radius: 6px;">
            ${token}
          </span>
        </div>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #ddd;" />
        <p style="font-size: 12px; color: #888;">If you didn’t request this email, you can safely ignore it.</p>
      </div>
    `,
  });
};


module.exports = {
  sendVerificationEmail
};
