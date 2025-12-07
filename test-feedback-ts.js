// Test script for the feedback API with the new TypeScript mailer
const axios = require('axios');

async function testFeedbackEndpoint() {
    try {
        console.log('Testing feedback endpoint with new TypeScript mailer...');

        const response = await axios.post('http://localhost:3000/api/feedback', {
            fullname: 'Test User',
            email: 'maqdhum14@gmail.com',
            message: 'This is a test message from the feedback form to test the new TypeScript mailer implementation',
            subject: 'Test Feedback - TS Mailer',
            rating: '5'
        });

        console.log('Feedback submitted successfully:', response.data);

        // Wait a moment for emails to be processed
        setTimeout(() => {
            console.log('Check your email inbox for the test feedback emails from the new TypeScript mailer.');
        }, 2000);
    } catch (error) {
        console.error('Error submitting feedback:', error.response?.data || error.message);
    }
}

testFeedbackEndpoint();
