import { TokenType } from "@prisma/client";
import nodemailer from "nodemailer";

export async function sendConfirmationEmail(
  email: string,
  confirmationLink: string,
  type: TokenType
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT as string) ?? 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    if (type === "EMAIL_VERIFICATION") {
      const mailOptions = {
        from: process.env.NEXT_AUTH_URL,
        to: email,
        subject: "Confirm your Email",
        text: `Click the following link to confirm your email: ${confirmationLink}`,
        html: `<p>Click the following link to confirm your email:</p><a href="${confirmationLink}">Confirm Email</a>`,
      };

      await transporter.sendMail(mailOptions);
    } else if (type === "RESET_PASSWORD") {
      const mailOptions = {
        from: process.env.NEXT_AUTH_URL,
        to: email,
        subject: "Reset your password",
        text: `Click the following link to reset your password: ${confirmationLink}`,
        html: `<p>Click the following link to reset your password:</p><a href="${confirmationLink}">Reset Password</a>`,
      };

      await transporter.sendMail(mailOptions);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
