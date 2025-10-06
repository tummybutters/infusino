# Qortana Website

## Overview
This is a static website for Qortana - "The definitive AI growth partner for fast-moving B2B companies." The site is a professional landing page showcasing their consulting services, client testimonials, and contact information.

## Project Structure
- `index.html` - Main landing page with responsive design and footer navigation
- `sms-privacy.html` - TCPA/Twilio-compliant SMS privacy policy page
- `sms-terms.html` - TCPA/Twilio-compliant SMS terms & conditions page
- `styles.css` - Complete styling with modern design system
- `server.py` - Python HTTP server for serving static files
- `attached_assets/stock_images/` - Professional stock images for service boxes

## Setup and Configuration
- **Language**: Python 3.11
- **Server**: Custom Python HTTP server
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows external access through proxy)
- **Cache Control**: Disabled for development

## Deployment
- **Type**: Autoscale (stateless website)
- **Command**: `python server.py`
- **Environment**: Configured for Replit deployment

## Features
- Responsive design with mobile-first approach
- Modern CSS with custom properties and animations
- Professional business landing page layout
- Client testimonials section with expandable reviews
- Services showcase with large image-dominant boxes
- Contact call-to-action sections
- Scroll-triggered fade-in animations on section titles
- Professional footer with company and legal navigation
- TCPA/Twilio-compliant SMS legal pages (privacy policy and terms)

## Recent Changes
- 2025-10-06: Added TCPA/Twilio-compliant SMS privacy policy and terms pages
- 2025-10-06: Implemented professional footer with navigation to legal pages
- 2025-10-06: Updated all branding from "cloudnow LLC" to "Qortana"
- 2025-09-24: Initial setup in Replit environment
- 2025-09-24: Configured Python HTTP server for static file serving
- 2025-09-24: Set up workflow and deployment configuration

## Notes
The website uses external images from Unsplash and Google Fonts. The design follows modern web standards with accessibility considerations.