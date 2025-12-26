# Silva Automation

## Overview
Silva Automation is a small marketing site built with React + Vite. It includes a contact form that sends submissions to an n8n webhook.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS
- react-router-dom
- lucide-react

## Getting Started

### Prerequisites
- Node.js (recommended: 18+)
- npm

### Install
```bash
npm install
```

### Environment Variables
Create a `.env` file in the project root (this repo ignores `.env` via `.gitignore`).

Required:
- `VITE_N8N_WEBHOOK_URL` - The n8n webhook URL that receives contact form submissions.

Example:
```bash
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/...
```

Notes:
- Vite exposes variables prefixed with `VITE_` to the browser. Treat the webhook URL as **configuration**, not a secret.
- If you need to keep credentials secret, proxy the request through a serverless function / backend.

### Run Locally
```bash
npm run dev
```

Then open the URL printed by Vite (usually `http://localhost:5173`).

## Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview the production build locally

## Contact Form (n8n)
The contact form lives in `src/sections/Contact.jsx` and POSTs JSON to `import.meta.env.VITE_N8N_WEBHOOK_URL`.

If you are testing locally, ensure your n8n webhook endpoint:
- Accepts `Content-Type: application/json`
- Allows requests from your site origin (CORS), if applicable

## Cookie Consent
The cookie banner (`src/components/CookieBanner.jsx`) stores a simple consent value in `localStorage` so the banner does not reappear after acceptance.

## Deployment
This is a static site. Build and host the `dist/` folder on your preferred provider (Netlify, Vercel, Cloudflare Pages, etc.).

Make sure to configure `VITE_N8N_WEBHOOK_URL` in your deployment environment variables before building.
