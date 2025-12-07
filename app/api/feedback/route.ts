import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import handlebars from 'handlebars';
import { createRequire } from 'module';

// Create a require function for CommonJS modules in ES modules
const require = createRequire(import.meta.url);
const mailer: any = require('../../../mailer.js');

/**
 * POST /api/feedback
 * Handles feedback submissions and sends emails to admin and user
 */
export async function POST(request: NextRequest) {
  try {
    console.log('Feedback received'); // Keep minimal logging

    const body = await request.json();

    // Input validation
    if (!body.fullname || !body.email) {
      return NextResponse.json(
        { error: 'name or email missing' },
        { status: 400 }
      );
    }

    // Sanitize and validate email format
    const email = body.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const fullname = body.fullname.toString().trim().substring(0, 100); // Limit length
    const subject = (body.subject || '').toString().trim().substring(0, 200);
    const message = (body.message || '').toString().trim().substring(0, 1000);
    const rating = (body.rating || 'N/A').toString().substring(0, 10);

    // Process the feedback - send emails to admin and acknowledge user
    // Read HTML templates for emails
    const readHTMLFile = async function (filePath: string): Promise<string> {
      try {
        const html = await fs.readFile(filePath, { encoding: 'utf-8' });
        return html;
      } catch (err) {
        console.error('File read error:', err);
        throw err;
      }
    };

    // Send feedback to admin
    try {
      const templatePath = path.resolve(process.cwd(), 'public', 'userfeedback.html');
      const htmlTemplate = await readHTMLFile(templatePath);

      // Compile the template with Handlebars
      const template = handlebars.compile(htmlTemplate);
      const replacements = {
        fullname: escapeHtml(fullname),
        email: escapeHtml(email),
        message: escapeHtml(message),
        subject: escapeHtml(subject),
        rating: escapeHtml(rating)
      };
      const htmlToSend = template(replacements);

      // Send email to admin
      mailer.sendEmail(
        'ourfullcircleservices@gmail.com',
        htmlToSend,
        'FullCircle Feedback Received: ' + (subject || 'No Subject'),
        email
      );
    } catch (err) {
      console.error('Error reading userfeedback.html:', err);
      // If template file is missing, send a basic notification to admin
      const basicMessage = `Feedback received from ${fullname} (${email}): ${message}. Rating: ${rating}`;
      mailer.sendEmail(
        'ourfullcircleservices@gmail.com',
        basicMessage,
        'FullCircle Feedback Received: ' + (subject || 'No Subject'),
        email
      );
    }

    // Send acknowledgment to user
    try {
      const templatePath = path.resolve(process.cwd(), 'public', 'useracknowledgment.html');
      const htmlTemplate = await readHTMLFile(templatePath);

      // Compile the template with Handlebars
      const template = handlebars.compile(htmlTemplate);
      const replacements = {
        fullname: escapeHtml(fullname),
        email: escapeHtml(email),
        message: escapeHtml(message),
        subject: escapeHtml(subject),
        rating: escapeHtml(rating)
      };
      const htmlToSend = template(replacements);

      // Send acknowledgment email to user
      mailer.sendEmail(
        email,
        htmlToSend,
        mailer.SUBJECTS.WELCOME
      );
    } catch (err) {
      console.error('Error reading useracknowledgment.html:', err);
      // If template file is missing, send a basic acknowledgment
      const basicAck = `Hello ${fullname},\n\nThank you for your feedback! We have received your message: ${message}.\nYour feedback is valuable to us and we will review it carefully.\n\nThanks,\nFullCircle Team`;
      mailer.sendEmail(
        email,
        basicAck,
        mailer.SUBJECTS.WELCOME
      );
    }

    return NextResponse.json({ message: 'Feedback submitted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error occurred:', error);
    return NextResponse.json(
      { error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}