# Qortana Website

## Overview
This is a Next.js website for Qortana - "The definitive AI growth partner for fast-moving B2B companies." The site features a professional landing page showcasing consulting services, client testimonials, and an interactive calendar booking system for scheduling growth mapping calls.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Calendar**: react-day-picker v9
- **Fonts**: Inter (Google Fonts)

## Project Structure
- `app/` - Next.js app directory
  - `layout.tsx` - Root layout with metadata and fonts
  - `page.tsx` - Main landing page with all sections
  - `book/page.tsx` - Calendar appointment booking page
  - `globals.css` - Tailwind directives and CSS variables
- `components/ui/` - Reusable shadcn/ui components
  - `button.tsx` - Button component with variants
  - `card.tsx` - Card component for layouts
  - `calendar.tsx` - Calendar component for date selection
  - `scroll-area.tsx` - Scroll area for time slot selection
- `lib/utils.ts` - Utility functions (cn helper)
- `public/` - Static assets
  - `styles.css` - Legacy custom styles for landing page
  - `attached_assets/` - Stock images for service boxes
  - `sms-privacy.html` - TCPA/Twilio-compliant SMS privacy policy
  - `sms-terms.html` - TCPA/Twilio-compliant SMS terms & conditions

## Setup and Configuration
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Development Server**: `npm run dev` on port 5000
- **Build**: `npm run build`
- **Start**: `npm start` (production)

## Features
### Landing Page
- Responsive design with mobile-first approach
- Modern design system with Tailwind CSS and custom CSS
- Professional header with sticky navigation
- Hero section with gradient background
- About section with company introduction
- Services showcase grid with image backgrounds
- Client testimonials with expandable reviews
- Final CTA section
- Professional footer with company and legal navigation
- Scroll-triggered fade-in animations on section titles

### Booking Page
- Interactive calendar with date selection
- Time slot picker with scroll area
- Booked dates displayed with strikethrough
- Real-time booking confirmation message
- Responsive layout for mobile and desktop
- Back navigation to home page
- Professional gradient background

## Navigation
All "Let's talk" CTAs throughout the site navigate to `/book` for appointment scheduling:
- Header CTA button
- Hero section CTA
- About section CTA
- Final CTA section
- Footer contact link

## Recent Changes
- 2025-10-28: Migrated from static HTML to Next.js with TypeScript
- 2025-10-28: Implemented interactive calendar booking system with shadcn/ui
- 2025-10-28: Added /book route for appointment scheduling
- 2025-10-28: Configured all CTAs to navigate to booking page
- 2025-10-28: Set up Tailwind CSS with shadcn/ui design system
- 2025-10-06: Added TCPA/Twilio-compliant SMS privacy policy and terms pages
- 2025-10-06: Implemented professional footer with navigation to legal pages
- 2025-10-06: Updated all branding from "cloudnow LLC" to "Qortana"

## Future Enhancements
1. Replace hard-coded booking date/time with dynamic availability API
2. Implement booking submission flow with backend integration
3. Consider migrating legacy CSS styles to Tailwind for consistency
4. Add form validation for booking details
5. Integrate with calendar services (Google Calendar, Outlook, etc.)

## Notes
- The website uses external images from Unsplash for service boxes
- SMS legal pages are served as static HTML from the public directory
- The design follows modern web standards with accessibility considerations
- Development server runs on port 5000 for Replit compatibility
