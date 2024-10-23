import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akbarghulam47@gmail.com',
      pass: 'kbyqlyudjbjehxnl',
    },
  });

  const mailOptions = {
    from: email,
    to: 'akbarghulam47@gmail.com', 
    subject: `New contact form submission from ${name}`,
    text: `You have a new message from ${name} (${email}): \n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' });
  }
}
