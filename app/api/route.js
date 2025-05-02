import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'saddamkhan.khan705@gmail.com', // Note: You should use environment variables for sensitive data
        pass: "Sdhusain786@"
      }
    });

    const mailOptions = {
      from: 'saddamkhan.khan705@gmail.com',
      to: 'shkhone92@gmail.com',
      subject: 'Test Email from API',
      text: 'This is a test email sent from the API'
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
