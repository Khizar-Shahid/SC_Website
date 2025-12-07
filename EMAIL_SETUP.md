# Email Setup Instructions - Nodemailer

## Contact Form Email Configuration

The contact form is configured to send inquiries to: **sutherland.club2025@gmail.com**

## Setup Steps

### 1. Install Dependencies

Run this command to install Nodemailer:
```bash
npm install
```

### 2. Create Environment File

Create a file named `.env.local` in the root of your project with your SMTP settings:

```
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# From email address
FROM_EMAIL=contact@sutherlandclubvenue.com

# Contact email (where inquiries will be sent)
CONTACT_EMAIL=sutherland.club2025@gmail.com
```

**Important:** 
- Add `.env.local` to `.gitignore` (it should already be there)
- Never commit your `.env.local` file to Git

### 3. SMTP Configuration Examples

#### Gmail Setup:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=contact@sutherlandclubvenue.com
```

**For Gmail, you need to:**
1. Enable 2-Step Verification
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password (not your regular password) in `SMTP_PASS`

#### Outlook/Hotmail Setup:
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
FROM_EMAIL=contact@sutherlandclubvenue.com
```

#### Custom SMTP Server:
```
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=contact@sutherlandclubvenue.com
SMTP_PASS=your-password
FROM_EMAIL=contact@sutherlandclubvenue.com
```

### 4. Test the Form

After setup, test the contact form. Inquiries will be sent to:
- **To:** sutherland.club2025@gmail.com
- **From:** contact@sutherlandclubvenue.com (or your SMTP_USER)
- **Reply-To:** The email address entered by the user in the form

## Email Content

The email will include:
- Contact information (name, email, phone)
- Event details (type, date, number of guests)
- Message content
- Formatted in both plain text and HTML

## Troubleshooting

- **Emails not sending?** 
  - Check your SMTP credentials in `.env.local`
  - Verify SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS are correct
  - Check server logs for error messages

- **Gmail not working?**
  - Make sure you're using an App Password, not your regular password
  - Enable "Less secure app access" if App Passwords aren't available (not recommended)

- **Check server logs** for detailed error messages

## Development Mode

If SMTP is not configured, the form will still work but emails will only be logged to the console. This is useful for development and testing.
