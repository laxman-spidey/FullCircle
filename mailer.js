require('dotenv').config();
const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
// For Gmail setup:
// 1. Enable 2-factor authentication on your Google account
// 2. Generate an App Password: https://myaccount.google.com/apppasswords
// 3. Use the App Password instead of your regular password
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Using Gmail SMTP - you can change this to your email provider
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your app password
    }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error('Email transporter error:', error);
    } else {
        console.log('Email transporter is ready');
    }
});

// Module exports
module.exports.sendEmail = function (toEmail, emailText, subject, fromEmail) {
    var mailOptions = {
        from: fromEmail || '"FullCircle Services" <' + (process.env.EMAIL_USER || 'no-reply@fullcircle.com') + '>', // sender address
        to: toEmail,
        subject: subject,
        html: emailText
    };
    console.log('Sending email to:', toEmail); // Keep minimal logging
    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.error('Error sending email:', error);
        }
        // Don't log successful email sending to avoid excessive logs
    });
}

module.exports.SUBJECTS = {
    WELCOME: "Thank You for Your Feedback - FullCircle",
    FEEDBACK: "New Feedback Received - FullCircle"
}