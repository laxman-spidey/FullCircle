# Environment Variables for FullCircle

This document details all environment variables required and used by the FullCircle application in different environments.

## Local Development

For local development, environment variables are typically stored in a `.env` file in the project root. The following variables are required:

### Required Variables
- `EMAIL_USER`: The email address used for sending notifications and acknowledgments
- `EMAIL_PASS`: The app password for the email account (for Gmail, this is an application-specific password)
- `PORT`: (Optional) The port number for the server (defaults to 3000 if not specified)

### Example .env file
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=3000
```

## Production Environment (fullcircle-prod)

In the production environment, sensitive information is stored in Google Cloud Secret Manager and referenced in the apphosting.yaml configuration:

- `EMAIL_USER`: References secret `projects/fullcircle-37f07/secrets/EMAIL_USER/versions/latest`
- `EMAIL_PASS`: References secret `projects/fullcircle-37f07/secrets/EMAIL_PASS/versions/latest`

## Staging Environment (fullcircle-stage)

In the staging environment, separate secrets are used to isolate test and production data:

- `EMAIL_USER`: References secret `projects/fullcircle-37f07/secrets/EMAIL_USER_STAGING/versions/latest`
- `EMAIL_PASS`: References secret `projects/fullcircle-37f07/secrets/EMAIL_PASS_STAGING/versions/latest`
- `PORT`: Set by the hosting environment

## Setting up Environment Variables

### For Local Development
1. Create a `.env` file in the project root
2. Add the required variables as shown above
3. Ensure `.env` is in your `.gitignore` file to prevent committing sensitive data

### For Firebase App Hosting
1. Set up secrets in Google Cloud Secret Manager
2. Reference the secrets in the appropriate `apphosting.*.yaml` file
3. The application will automatically fetch these values at runtime

## Security Considerations
- Never commit `.env` files or other files containing secrets to the repository
- Use separate sets of credentials for staging and production
- Rotate secrets regularly for security
- Use Google Cloud Secret Manager in hosted environments rather than plain environment variables