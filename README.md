# Shopora - React E-Commerce

Shopora is a modern, responsive, frontend-only online store built with React and Vite.

## Features
- Home page: hero banner, categories, featured and trending products, promo section, footer
- Products page: 14 products, search, category filter, price sorting, loading and empty states
- Product details with quantity selector
- Cart: add/remove, change quantity, auto totals, saved in localStorage
- Wishlist (localStorage), toast notifications, responsive mobile menu
- Demo login/registration with validation and a one-click demo login
- Simulated checkout with order summary and order-number confirmation page

## Technologies
React 18, Vite, React Router, Lucide React, CSS3, localStorage

## Screenshots
_Add screenshots here (e.g. `docs/home.png`)._

## Run Locally
```
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

## Build
```
npm run build
npm run preview
```

## Deploy on Netlify
1. Push this project to GitHub.
2. On netlify.com choose **Add new site -> Import an existing project** and select the repo.
3. Build command: `npm run build` - Publish directory: `dist`
4. Deploy. `public/_redirects` makes React Router work on page refresh.

## Limitations (Please Read)
- **Authentication is for demonstration only.** Accounts and passwords are stored unencrypted in the browser's localStorage, which is NOT secure. Never use real passwords or build real customer accounts this way; a real store needs a secure backend.
- **Checkout is simulated.** No payment details are collected and no payment is processed. Orders are not stored on any server.
- Product images are picsum.photos placeholders; replace the URLs in `src/data/products.js` with real product photos.
