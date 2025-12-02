const nodemailer = require('nodemailer');

console.log('Nodemailer object:', typeof nodemailer, nodemailer && typeof nodemailer.createTransport);

// Create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Using Gmail SMTP - you can change this to your email provider
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER || 'your_email@gmail.com', // Replace with your email
        pass: process.env.EMAIL_PASS || 'your_app_password'  // Replace with your app password
    }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Email transporter error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Module exports
module.exports.sendEmail = function (toEmail, emailText, subject, fromEmail) {
    var mailOptions = {
        from: fromEmail || '"FullCircle Services" <ourfullcircleservices@gmail.com>', // sender address
        to: toEmail,
        subject: subject,
        html: emailText
    };

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully to:', toEmail);
        }
    });
}

module.exports.SUBJECTS = {
    WELCOME: "Thank You for Your Feedback - FullCircle",
    FEEDBACK: "New Feedback Received - FullCircle"
}