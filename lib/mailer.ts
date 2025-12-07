import * as nodemailer from "nodemailer";

// Create reusable transporter object using the default SMTP transport
// For Gmail setup:
// 1. Enable 2-factor authentication on your Google account
// 2. Generate an App Password: https://myaccount.google.com/apppasswords
// 3. Use the App Password instead of your regular password
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Using Gmail SMTP - you can change this to your email provider
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER as string, // Your email
        pass: process.env.EMAIL_PASS as string, // Your app password
    },
});

// Verify transporter configuration
transporter.verify(function (error: Error | null, _success: boolean) {
    if (error) {
        console.error("Email transporter error:", error);
    } else {
        console.log("Email transporter is ready");
    }
});

interface SendEmailOptions {
    toEmail: string;
    emailText: string;
    subject: string;
    fromEmail?: string;
}

export const sendEmail = async ({
    toEmail,
    emailText,
    subject,
    fromEmail,
}: SendEmailOptions): Promise<void> => {
    const mailOptions = {
        from:
            fromEmail ||
            `"FullCircle Services" <${process.env.EMAIL_USER || "no-reply@fullcircle.com"}>`, // sender address
        to: toEmail,
        subject: subject,
        html: emailText,
    };

    console.log("Sending email to:", toEmail); // Keep minimal logging

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", toEmail);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export const SUBJECTS = {
    WELCOME: "Thank You for Your Feedback - FullCircle",
    FEEDBACK: "New Feedback Received - FullCircle",
};
