# SCIC Next.js

A Next.js application for managing and viewing items, with authentication and API integration. Built using Next.js 14, Tailwind CSS, and Express.js for backend API.

## Setup & Installation

1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Set up environment variables (if using NextAuth.js for optional social login).
4. Run the Express server (for API): `node server.js` (assuming server.js is in root).
5. Start the app: `npm run dev`
6. Open http://localhost:3000

## Route Summary

- `/`: Landing page (public) - 7 sections including Hero, Features, About, etc.
- `/login`: Login page (public) - Mock authentication form
- `/items`: Item list page (public) - Displays list of items from API
- `/items/[id]`: Item details page (public) - Shows full details of a single item

## Implemented Features

- Landing page with 7 relevant sections (besides Navbar and Footer)
- Navbar with navigation links to Login and Items/Lists
- Mock authentication using hardcoded email & password, stored in cookies
- Route protection for unauthenticated users (redirects to /login)
- Item list page fetching data from Express Server API/JSON
- Item details page with full product information
- Item cards displaying name, description, price, and image

## Brief Explanation of Features

- **Landing Page**: Public page with 7 sections (e.g., Hero, Features, About, Contact, etc.) and a Navbar for navigation. No authentication required.
- **Authentication**: Implements mock login with hardcoded credentials. On successful login, stores auth in cookies and redirects to /items. Protects private routes for unauthenticated users.
- **Item List Page**: Publicly accessible, fetches and displays items from an Express API. Each item card shows key properties like name, description, price, and thumbnail image.
- **Item Details Page**: Public page showing comprehensive details of a selected item, including all available properties.
