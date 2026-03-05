# Qortana Company Website

Marketing website built with Next.js and Framer Motion, deployed on Vercel.

## Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure
- `app/layout.tsx` - app shell, metadata, analytics script
- `app/page.tsx` - main landing page
- `app/websites/page.tsx` - portfolio page
- `app/globals.css` - base Tailwind styles/tokens
- `public/styles.css` - site-specific styling used by page layouts

## Local Development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run start
```

## Notes
- This repo is now frontend-only.
- Legacy Replit/Google Calendar API connector code has been removed.
