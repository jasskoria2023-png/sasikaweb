'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiryEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const month = formData.get('month') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  try {
    const data = await resend.emails.send({
      from: 'Tour Website <onboarding@resend.dev>', // Replace with your verified domain in production (e.g., info@yourdomain.com)
      to: ['jasskoria2023@gmail.com'], // Replace with your email address to receive inquiries
      subject: `New Trip Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Tour Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Preferred Travel Month:</strong> ${month || 'Any Month'}</p>
        <p><strong>Destination Goals / Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}