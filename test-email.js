require('dotenv').config();
const mailer = require('./mailer.js');

// Test the email functionality
console.log('Testing email functionality...');

// Test email sending
mailer.sendEmail(
    process.env.EMAIL_USER || 'test@example.com',
    '<h1>This is a test email</h1><p>If you received this, email functionality is working!</p>',
    'Test Email from FullCircle'
);

// Test with proper email format
setTimeout(() => {
    console.log('Attempting to send a second test email...');
    mailer.sendEmail(
        'mittu.thefire@gmail.com',
        '<h2>Second Test Email</h2><p>This is another test to verify email functionality.</p>',
        'Second Test - FullCircle'
    );
}, 2000);