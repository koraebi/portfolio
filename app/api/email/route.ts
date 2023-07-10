import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { subject, message: text } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_MAIL,
      to: process.env.MY_MAIL,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to send email', { status: 500 });
  }
}