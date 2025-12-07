import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, date, guests, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Recipient email address
    const recipientEmail = 'sutherland.club2025@gmail.com'

    // Format the email content
    const emailSubject = `New Event Inquiry from ${name}`
    const emailBody = `
New Event Inquiry Received

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Event Details:
- Event Type: ${eventType || 'Not specified'}
- Preferred Date: ${date || 'Not specified'}
- Number of Guests: ${guests || 'Not specified'}

Message:
${message || 'No message provided'}

---
This inquiry was submitted through the Sutherland Club Venue website contact form.
    `.trim()

    // HTML version of the email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #9333ea;">New Event Inquiry Received</h2>
        
        <h3 style="color: #581c87; margin-top: 20px;">Contact Information:</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
        
        <h3 style="color: #581c87; margin-top: 20px;">Event Details:</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Event Type:</strong> ${eventType || 'Not specified'}</li>
          <li><strong>Preferred Date:</strong> ${date || 'Not specified'}</li>
          <li><strong>Number of Guests:</strong> ${guests || 'Not specified'}</li>
        </ul>
        
        <h3 style="color: #581c87; margin-top: 20px;">Message:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
          ${message || 'No message provided'}
        </p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          This inquiry was submitted through the Sutherland Club Venue website contact form.
        </p>
      </div>
    `

    // Send email using Nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        // Create transporter
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        // Send email
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || process.env.SMTP_USER,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
          html: emailHtml,
        })

        console.log('Email sent successfully to:', recipientEmail)
      } catch (emailError) {
        console.error('Error sending email via Nodemailer:', emailError)
        // Don't fail the request if email fails, but log it
      }
    } else {
      // Log the email for development (when SMTP is not configured)
      console.log('Email would be sent to:', recipientEmail)
      console.log('Subject:', emailSubject)
      console.log('Body:', emailBody)
      console.log('⚠️  SMTP not configured. Set up SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local')
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}

