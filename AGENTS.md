# AGENTS.md

This document provides essential information for agents working in this codebase to ensure they understand the project structure, conventions, and workflows.

## Project Overview

This is a Next.js 14 application built with TypeScript, Tailwind CSS, and React. The project is designed to be a web application for connecting neighbors and helpers for everyday tasks, managed over WhatsApp and phone.

The application uses:
- Next.js App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Firebase for hosting deployment

## Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   ├── assets/             # Image assets and icons
│   └── lib/                # Utility functions and hooks
├── .github/
├── .qwen/                  # Qwen agent configurations
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Essential Commands

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Start production server
npm run start
```

### Deployment
```bash
# Deploy to Firebase
npm run deploy

# Create static export for preview
npm run export
```

### Preview
```bash
# Serve built files locally
npm run preview
```

## Code Organization and Structure

### App Router Structure
- Pages are defined in `src/app/` directory using the new App Router convention
- Layouts are defined in `src/app/layout.tsx`
- Main page content is in `src/app/page.tsx`

### Component Architecture
- Components are organized in `src/components/` (not shown in current structure but expected)
- Utility functions and hooks are in `src/lib/utils.ts`
- Global styles are in `src/app/globals.css`

### Styling
- Uses Tailwind CSS for styling with custom color configuration
- Custom teal color palette defined in `tailwind.config.ts`
- Responsive design patterns implemented

## Naming Conventions and Style Patterns

- TypeScript interfaces use PascalCase (e.g., `RootLayoutProps`)
- Component files use PascalCase (e.g., `Header.tsx`)
- Utility functions use camelCase (e.g., `useScrollEffect`)
- CSS classes follow Tailwind conventions
- All components are functional with React hooks
- Type safety enforced through TypeScript interfaces

## Testing Approach

This project uses:
- ESLint for code linting (configured in package.json)
- No explicit test framework mentioned, but Next.js testing setup would typically involve Jest or React Testing Library

## Important Gotchas and Non-Obvious Patterns

1. **Static Export Configuration**: The `next.config.js` is configured with `output: 'export'`, which means the application will be statically exported for hosting on Firebase.

2. **Image Optimization**: Images are handled through Next.js image optimization but are currently unoptimized due to the export configuration (`images: { unoptimized: true }`).

3. **Tailwind CSS Configuration**: The Tailwind config defines a custom teal color palette that is used throughout the application.

4. **Component Hooks**: The `src/lib/utils.ts` file contains reusable React hooks:
   - `cn()` - className merger for Tailwind
   - `useScrollEffect()` - detects scroll position
   - `useScrollVisibility()` - detects element visibility using IntersectionObserver
   - `useSidebarToggle()` - manages sidebar state

5. **TypeScript Configuration**: The project uses TypeScript with Next.js specific configurations including:
   - Path aliases (`@/*` for `./src/*`)
   - Strict mode enabled
   - JSX preservation for Next.js compatibility

6. **Firebase Deployment**: The application is configured to be deployed to Firebase hosting, with deployment scripts in package.json.

## Migration Context

This project appears to be migrating from a plain HTML/CSS/JavaScript application to a React/Next.js application. There's already a Qwen agent configured specifically for this migration task (`react-migration-specialist.md`).

The current structure shows:
- Basic Next.js setup with App Router
- TypeScript configuration
- Tailwind CSS integration
- Firebase deployment setup
- Component hooks in lib directory

The project is likely in an early stage of the migration process, with a basic homepage and utility functions already implemented.