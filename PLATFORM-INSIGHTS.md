# Platform Insights

## What I Learned

### Backend Integration

Building REST API routes in Next.js taught me how frontend and backend communicate. Every HTTP method has a purpose — GET reads, POST creates, PUT updates, DELETE removes.

### JWT Authentication

I learned how authentication works from scratch — hashing passwords with bcrypt, generating JWT tokens, and protecting routes by verifying tokens on every request.

### TanStack Query

Managing server state is different from UI state. TanStack Query handles caching, refetching, and loading states automatically which makes data fetching much cleaner than useEffect.

### Server Actions

Server Actions run on the server — this means sensitive operations like form processing happen securely without exposing API endpoints.

### Zod Validation

Validating data before processing prevents bad data from entering the system. This is critical in e-commerce where product prices and stock must be valid numbers.

## Challenges

- Understanding the difference between authentication and authorization
- Managing in-memory data persistence in Next.js dev mode
- Learning that params is a Promise in Next.js 15
