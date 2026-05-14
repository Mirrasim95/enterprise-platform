# Enterprise E-commerce Platform

A Shopify-style e-commerce backend integration platform built with Next.js App Router, TypeScript, and TanStack Query.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- TanStack Query
- JWT Authentication
- Zod Validation
- bcryptjs

## Getting Started

```bash
npm install
npm run dev
```

## API Endpoints

### Products

- GET /api/products
- POST /api/products
- GET /api/products/[id]
- PUT /api/products/[id]
- DELETE /api/products/[id]

### Orders

- GET /api/orders
- POST /api/orders
- GET /api/orders/[id]
- PUT /api/orders/[id]
- DELETE /api/orders/[id]

### Auth

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- POST /api/auth/logout

## Features

- JWT Authentication with protected routes
- CRUD operations for products and orders
- Server Actions with Zod validation
- TanStack Query for data fetching
- AuthContext for global auth state
