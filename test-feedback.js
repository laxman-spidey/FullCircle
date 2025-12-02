// Script to test the feedback endpoint
const axios = require('axios');

async function testFeedbackEndpoint() {
    try {
        console.log('Testing feedback endpoint...');
        
        const response = await axios.post('http://localhost:3000/feedback', {
            fullname: 'Test User',
            email: 'maqdhum14@gmail.com',
            message: 'This is a test message from the feedback form',
            subject: 'Test Feedback',
            rating: '5'
        });
        
        console.log('Feedback submitted successfully:', response.data);
        
        // Wait a moment for emails to be processed
        setTimeout(() => {
            console.log('Check your email inbox for the test feedback emails.');
        }, 1000);
    } catch (error) {
        console.error('Error submitting feedback:', error.response?.data || error.message);
    }
}

testFeedbackEndpoint();