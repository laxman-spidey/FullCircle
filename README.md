# FullCircle

FullCircle is a web application that connects neighbors and helpers to get everyday tasks done, such as errands, companionship, odd jobs, and more. The service is managed over WhatsApp and phone, providing a simple way for people to get help from trusted local helpers.

## Development Setup

### Using Dev Container (Recommended)

This project includes a devcontainer configuration for a consistent development environment. To use it:

1. Open the project in VS Code
2. When prompted, reopen the project in the dev container
3. Or select "Dev Containers: Reopen in Container" from the command palette

The dev container includes:
- Node.js 18
- Firebase CLI
- Recommended extensions for web development

### Local Setup

If you prefer to develop locally:

1. Install Node.js (v18 or later)
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. The application will be available at http://localhost:8080

### Running the Application

After setting up your environment:

1. Navigate to the project directory
2. Run `npm run dev` to start the development server
3. The application will be available at the address shown in the terminal

### Firebase Deployment

The project is configured for Firebase hosting. To deploy:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Deploy: `firebase deploy`

## Google Analytics Integration

This project includes Google Analytics 4 (GA4) tracking to monitor user interactions and site performance. The implementation includes:

### Tracking Features
- Page view tracking
- WhatsApp button click events
- Phone number click events
- Email link click events
- "Get Started" button click events
- Service card click events
- Timeline link click events
- Navigation menu click events

### Configuration
1. The Google Analytics code is located in the `public/index.html` file
2. A separate analytics file resides at `public/assets/js/analytics.js`
3. To use with your own Google Analytics account, replace the placeholder measurement ID `G-XXXXXXXXXX` with your actual GA4 measurement ID
4. Your measurement ID can be found in your Google Analytics property settings under "Data Streams"

### Custom Events Tracked
The implementation tracks important user interactions such as:
- Engagement events (WhatsApp, phone, email interactions)
- Navigation events (menu clicks, get started button)
- Service-related events (clicks on service cards)

## License

This project is open source and available under the MIT License.