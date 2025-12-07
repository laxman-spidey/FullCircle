# FullCircle Next.js Project - QWEN Context

## Project Overview

FullCircle is a Next.js-based web application that connects neighbors and helpers to get everyday tasks done - errands, companionship, odd jobs, and more. The project is built with Next.js 16.0.7, React 19.2.0, and uses Tailwind CSS for styling with a distinctive "liquid glass" design aesthetic.

The application features:
- Landing page with service catalog
- WhatsApp integration for customer communication
- Feedback form with email notifications
- Responsive design with "liquid glass" visual effects
- Firebase hosting configuration

## Architecture & Tech Stack

**Core Technologies:**
- Next.js 16.0.7 (App Router)
- React 19.2.0
- TypeScript
- Tailwind CSS
- Node.js/Express.js for API routes

**Key Dependencies:**
- `nodemailer` for email functionality
- `handlebars` for email templating
- `lucide-react` for icons
- `@radix-ui/react-slot` for component utilities
- `dotenv` for environment variable management
- `firebase` for deployment

**Styling:**
- Tailwind CSS with custom glassmorphism effects
- CSS-in-JS for dynamic styling in components
- Custom CSS variables for teal color palette

## Project Structure

```
FullCircle/
├── app/                    # Next.js App Router pages and layout
│   ├── api/
│   │   └── feedback/       # Feedback form API route
│   ├── globals.css         # Global styles and glassmorphism effects
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page
├── components/             # React components
│   ├── icons/              # Icon components
│   ├── Button.tsx          # Custom button component
│   ├── FeedbackForm.tsx    # Feedback form component
│   └── Header.tsx          # Header component
├── lib/                    # Utility functions and shared code
│   ├── mailer.ts           # Email sending functionality
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
│   └── assets/             # Images, icons, HTML templates
├── .env                    # Environment variables (not committed)
├── next.config.ts          # Next.js configuration
├── firebase.json           # Firebase hosting configuration
└── package.json            # Project dependencies and scripts
```

## Building and Running

**Development:**
```bash
npm run dev
# or
pnpm dev
```
The development server runs on http://localhost:3000

**Production:**
```bash
npm run build
npm run start
```

**Email Testing:**
```bash
npm run test-email
```

**Deployment:**
```bash
npm run firebase:deploy
```

## Key Features & Functionality

### 1. Feedback Form
- Located in the main page component
- Validates inputs (name, email, rating)
- Submits data to `/api/feedback` endpoint
- Sends emails to admin and user acknowledgment
- Uses star rating system (1-5 stars)

### 2. Email System
- Powered by Nodemailer with Gmail SMTP
- Requires `.env` file with `EMAIL_USER` and `EMAIL_PASS`
- Sends notification to `ourfullcircleservices@gmail.com`
- Sends acknowledgment to the user
- Uses Handlebars templating for HTML emails

### 3. WhatsApp Integration
- Direct WhatsApp chat link
- Phone number: +919121346777
- Floating WhatsApp button that appears after scrolling

### 4. Service Categories
- Care & Companionship
- Children & Family Assistance
- Emergency Support
- Essential Errands
- Event & Occasion Support
- Financial & Administrative Help
- General On-field Assistance
- Home & Shop Support
- Personal Productivity & Lifestyle
- Pet Care Services
- Transport & Mobility

## API Endpoints

### `/api/feedback`
- **Method**: POST
- **Purpose**: Handles feedback submissions
- **Request Body**: `{ fullname, email, subject, message, rating }`
- **Response**: Success message or validation errors
- **Validation**: Checks for required fields and email format

## Development Conventions

### Styling
- Uses Tailwind CSS with custom extensions
- Custom CSS variables for the teal color palette
- Liquid glass effect implemented with backdrop-filter and gradients
- Responsive design with mobile-first approach

### Component Structure
- React components in TypeScript
- Atomic design principles (atomic components → composite sections)
- Proper TypeScript interfaces for props
- Accessibility features (ARIA labels, keyboard navigation)

### Environment Configuration
- Uses dotenv for local environment variables
- Email credentials stored in `.env` file with the following required variables:
  - `EMAIL_USER`: The email address for sending notifications
  - `EMAIL_PASS`: The app password for the email account
  - `PORT`: The port number for the server (defaults to 3000)
- For complete environment variable documentation, see `ENVIRONMENT_VARIABLES.md`
- Firebase configuration in `firebase.json`

### Error Handling
- Client-side validation in FeedbackForm
- Server-side validation in API routes
- Proper error responses with status codes
- Input sanitization to prevent XSS attacks

## Special Considerations

### Bootstrap vs Tailwind Conflict
> **Issue**: The project currently loads `bootstrap.min.css` which has high-specificity selectors that conflict with Tailwind's utility classes.
> 
> **Current Workaround**:
> 1. Bootstrap is imported before Tailwind in globals.css
> 2. Use of `!important` modifiers in some Tailwind classes to override Bootstrap
> 
> **Future Mitigation**: Plan to completely remove Bootstrap and migrate all components to Tailwind.

### Email Configuration
- Requires Gmail App Password for authentication
- Environment variables must be properly configured
- Both admin notifications and user acknowledgments are sent

### Firebase Hosting
- Configured for static hosting
- Custom domain setup available
- App Hosting configuration in firebase.json

## Testing & Validation

### Email Testing
- `test-email.js` for basic email functionality
- Template files in public directory
- Error handling for missing templates

### Form Validation
- Client-side validation with React state
- Server-side validation in API routes
- XSS prevention with HTML escaping

## Deployment Notes

The project is configured for Firebase hosting:
- Static asset serving from `/public`
- SPA routing with catch-all rewrites
- Environment-specific configurations
- App hosting with Node.js runtime

### Environments
- **Production**: Deployed as `fullcircle-prod` backend with following configuration:
  - Configuration file: `apphosting.yaml`
  - Runtime: Node.js 22
  - Scaling: 0-2 instances, concurrency 10
  - Resources: 1 CPU, 512MB Memory, 60s timeout
  - Environment Variables: Uses Google Cloud Secret Manager for EMAIL_USER and EMAIL_PASS
  - Build command: `npm run build`

- **Staging**: Deployed as `fullcircle-stage` backend with following configuration:
  - Configuration file: `apphosting.stage.yaml`
  - Runtime: Node.js 22
  - Scaling: 0-1 instances, concurrency 10 (lower than prod for cost efficiency)
  - Resources: 1 CPU, 512MB Memory, 60s timeout
  - Environment Variables: Uses Google Cloud Secret Manager for EMAIL_USER_STAGING and EMAIL_PASS_STAGING
  - Build command: `npm run build`

#Contribution
##commit message
<githubId>:<commit message>
