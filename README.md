# DigitalWorld — Premium Tech E-Commerce Store

A fully-featured, production-ready e-commerce web application built with React, TypeScript, Tailwind CSS, and Vite. No backend database required — all cart, wishlist, and order data persists in the browser via localStorage.

## Features

### Shopping
- **Home Page** — Auto-sliding hero carousel, featured products, today's deals, flash sale with live countdown, new arrivals, best sellers, recently viewed
- **Product Listing** — Filter by category, brand, price range, rating, and stock status; sort by price, rating, newest, or discount
- **Product Details** — Multi-image gallery with hover zoom, full specifications, customer reviews with rating distribution, color selection, quantity controls, related products
- **Search** — Instant search with live suggestions and dropdown results
- **Categories** — Mobiles, Laptops, Headphones, Smart Watches, Cameras, Accessories

### Cart & Checkout
- **Shopping Cart** — Add/remove items, adjust quantities, live total calculation, promo code support (try `WELCOME20`), free shipping threshold
- **Wishlist** — Save favorites, move items to cart, remove individually
- **Checkout** — 3-step flow (shipping → delivery → payment) with form validation, order summary sidebar
- **Order Confirmation** — Order ID, status tracker, itemized summary, estimated delivery
- **Order History** — View all past orders

### User Interface
- **Dark Mode** — Toggle between light and dark themes, remembers preference
- **Responsive Design** — Optimized for desktop, tablet, and mobile with adaptive layouts
- **Sticky Header** — Navigation stays accessible while scrolling
- **Toast Notifications** — Visual feedback for cart/wishlist actions
- **Animations** — Smooth transitions, hover effects, fade-ins, and micro-interactions throughout

### Authentication (Frontend UI)
- **Login** — Email/password with validation, demo login button
- **Signup** — Name/email/password with live password strength checks
- **Forgot Password** — Email reset flow with confirmation screen
- **Logout** — Accessible from user menu in navbar

### Pages
- Home, Products, Product Detail, Cart, Wishlist, Checkout, Order Confirmation, Orders, Login, Signup, Forgot Password, Contact (with form, FAQ, and map), About (company story, mission, vision, journey timeline)

## Tech Stack
- **React 18** with TypeScript
- **Vite 5** for build tooling
- **Tailwind CSS 3** for styling
- **React Router 6** for routing
- **lucide-react** for icons
- **localStorage** for data persistence (no database)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run typecheck # type checking
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # Product catalog and categories
├── pages/          # Route-level page components
├── store/          # Context providers (store, theme)
├── types.ts        # TypeScript interfaces
├── App.tsx         # Root component with routing
└── main.tsx        # Entry point
```

## Promo Code
Use `WELCOME20` at checkout for 20% off your order.
