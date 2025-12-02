require('rootpath')();
const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known')));

// Serve the main index page
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Feedback form endpoint
app.post('/feedback', function (req, res, next) {
    console.log("Feedback received"); // Keep minimal logging

    // Input validation
    if (!req.body.fullname || !req.body.email) {
        next({ type: "InputError", message: "name or email missing" });
        return;
    }

    // Sanitize and validate email format
    const email = req.body.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        next({ type: "InputError", message: "invalid email format" });
        return;
    }

    // Sanitize inputs to prevent XSS
    const fullname = req.body.fullname.toString().trim().substring(0, 100); // Limit length
    const subject = (req.body.subject || '').toString().trim().substring(0, 200);
    const message = (req.body.message || '').toString().trim().substring(0, 1000);
    const rating = (req.body.rating || 'N/A').toString().substring(0, 10);

    // Continue with feedback processing

    // Process the feedback - send emails to admin and acknowledge user
    const mailer = require('./mailer.js');

    // Send feedback to admin
    var readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                console.error('File read error:', err);
                callback(err);
            } else {
                callback(null, html);
            }
        });
    };

    // Send feedback to admin
    readHTMLFile(__dirname + '/public/userfeedback.html', function (err, html) {
        if (err) {
            console.error('Error reading userfeedback.html:', err);
            // If template file is missing, send a basic notification to admin
            const basicMessage = `Feedback received from ${fullname} (${email}): ${message}. Rating: ${rating}`;
            mailer.sendEmail('ourfullcircleservices@gmail.com', basicMessage, 'FullCircle Feedback Received: ' + (subject || 'No Subject'), email);
            return;
        }
        var handlebars = require('handlebars');
        var template = handlebars.compile(html);
        var replacements = {
            fullname: fullname,
            email: email,
            message: message,
            subject: subject,
            rating: rating
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: email, // sender address
            to: 'ourfullcircleservices@gmail.com',
            subject: 'FullCircle Feedback Received: ' + (subject || 'No Subject'),
            html: htmlToSend
        };
        mailer.sendEmail(mailOptions.to, htmlToSend, mailer.SUBJECTS.FEEDBACK, mailOptions.from);
    });

    // Send acknowledgment to user
    readHTMLFile(__dirname + '/public/useracknowledgment.html', function (err, html) {
        if (err) {
            console.error('Error reading useracknowledgment.html:', err);
            // If template file is missing, send a basic acknowledgment
            const basicAck = `Hello ${fullname},\n\nThank you for your feedback! We have received your message: ${message}.\nYour feedback is valuable to us and we will review it carefully.\n\nThanks,\nFullCircle Team`;
            mailer.sendEmail(email, basicAck, mailer.SUBJECTS.WELCOME);
            return;
        }
        var handlebars = require('handlebars');
        var template = handlebars.compile(html);
        var replacements = {
            fullname: fullname,
            email: email,
            message: message,
            subject: subject,
            rating: rating
        };

        var htmlToSend = template(replacements);
        mailer.sendEmail(email, htmlToSend, mailer.SUBJECTS.WELCOME);
    });

    res.status(200).json({ message: "Feedback submitted successfully" });
});

// Global error handler
app.use(function (err, req, res, next) {
    console.error('Error occurred:', err);
    if (err.type === "InputError") {
        res.status(400).json({
            error: err.message
        });
    } else {
        res.status(500).json({
            error: "Internal server error occurred"
        });
    }
});

// For Firebase App Hosting, we need to export the app without starting the server
// The platform will handle starting the server
const PORT = process.env.PORT || 3000;

// Only start the server if this file is run directly (not required by another module)
if (require.main === module) {
    const server = app.listen(PORT, function () {
        console.log(`FullCircle server listening on port ${PORT}`);
    });
}

module.exports = app;