import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    // Destructure the fields from your new form
    const { name, email, phone, message } = data;

    // Basic validation for the new fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Configure the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL_RECIPIENT,
      replyTo: email,
      // Create a default subject since the form doesn't have one
      subject: `New Inquiry from Modern Space Website`,
      // Update the HTML to include the phone number
      html: `
        <p>You have received a new inquiry:</p>
        <br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Your message has been sent. Thank you!' }, { status: 200 });

  } catch (error)
  {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'An error occurred while sending your message.' }, { status: 500 });
  }
}