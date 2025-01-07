import * as nodemailer from 'nodemailer';
import { EmailData } from '@/models/interfaces';

export async function POST(req: Request) {
  const emailData: EmailData = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_MAIL,
      to: process.env.MY_MAIL,
      subject: emailData.from,
      text: `Subject: ${emailData.subject}\n\n${emailData.message}`,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log(response);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to send email', { status: 500 });
  }
}