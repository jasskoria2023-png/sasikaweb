'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getEmailError(error: unknown, fallback: string) {
  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    return error.message;
  }

  return fallback;
}

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
    const { data, error } = await resend.emails.send({
      from: 'info@vactionstnh.com', // Replace with your verified domain in production (e.g., info@yourdomain.com)
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

    if (error) {
      return { success: false, error: error.message || 'The email service rejected the message.' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: getEmailError(error, 'Failed to send message. Please try again later.') };
  }
}

export async function sendJobApplicationEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const role = formData.get('role') as string;
  const message = formData.get('message') as string;
  const cv = formData.get('cv');
  const coverLetter = formData.get('coverLetter');

  if (!name || !email || !role || !(cv instanceof File) || !(coverLetter instanceof File)) {
    return { success: false, error: 'Please complete all required fields and attach your CV and covering letter.' };
  }

  const maxFileSize = 10 * 1024 * 1024;
  if (cv.size > maxFileSize || coverLetter.size > maxFileSize) {
    return { success: false, error: 'Each attachment must be smaller than 10 MB.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'jasskoria2023@gmail.com',
      to: ['info@vactionstnh.com'],
      subject: `Job Application: ${role} - ${name}`,
      replyTo: email,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Position:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'Not provided'}</p>
      `,
      attachments: [
        { filename: cv.name, content: Buffer.from(await cv.arrayBuffer()) },
        { filename: coverLetter.name, content: Buffer.from(await coverLetter.arrayBuffer()) },
      ],
    });

    if (error) {
      return { success: false, error: error.message || 'The email service rejected the application.' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send job application:', error);
    return { success: false, error: getEmailError(error, 'Failed to send application. Please try again later.') };
  }
}