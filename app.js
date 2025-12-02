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
    console.log("Feedback received:", req.body);
    
    if (!req.body.fullname || !req.body.email) {
        next({ type: "InputError", message: "name or email missing" });
        return;
    } else {
        console.log("Feedback form is complete");

        // Process the feedback - send emails to admin and acknowledge user
        const mailer = require('./mailer.js');

        // Send feedback to admin
        var readHTMLFile = function (path, callback) {
            fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
                if (err) {
                    console.error(err);
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
                return;
            }
            var handlebars = require('handlebars');
            var template = handlebars.compile(html);
            var replacements = {
                fullname: req.body.fullname,
                email: req.body.email,
                message: req.body.message,
                rating: req.body.rating || 'N/A'
            };
            var htmlToSend = template(replacements);
            var mailOptions = {
                from: replacements.email, // sender address
                to: 'ourfullcircleservices@gmail.com',
                subject: 'FullCircle Feedback Received',
                html: htmlToSend
            };
            mailer.sendEmail(mailOptions.to, htmlToSend, mailer.SUBJECTS.FEEDBACK, mailOptions.from);
        });

        // Send acknowledgment to user
        readHTMLFile(__dirname + '/public/useracknowledgment.html', function (err, html) {
            if (err) {
                console.error('Error reading useracknowledgment.html:', err);
                return;
            }
            var handlebars = require('handlebars');
            var template = handlebars.compile(html);
            var replacements = {
                fullname: req.body.fullname,
                email: req.body.email,
                message: req.body.message,
                rating: req.body.rating || 'N/A'
            };

            var htmlToSend = template(replacements);
            mailer.sendEmail(replacements.email, htmlToSend, mailer.SUBJECTS.WELCOME);
        });

        res.status(200).json({ message: "Feedback submitted successfully" });
    }
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

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});

module.exports = app;