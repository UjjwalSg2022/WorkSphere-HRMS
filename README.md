# WorkSphere HRMS

WorkSphere HRMS is a modern enterprise-grade Human Resource Management System built with the MERN stack. Phase 2 elevates the product into a premium SaaS experience with polished UI, announcements, notifications, settings, search, and stronger production readiness.

## Features

- Role-based authentication and protected routes
- Employee, department, attendance, leave, and payroll management
- Premium dashboard with KPI cards and activity summaries
- Announcements for HR/admin and employee visibility
- Notification center and in-app updates
- Company settings and operational preferences
- Global search across key modules
- Improved backend security middleware

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router
- Backend: Node.js, Express, MongoDB, Mongoose
- Security: Helmet, rate limiting, sanitization

## Project Structure

- client/src/components — reusable UI components
- client/src/pages — main application pages
- server/src/controllers — request handlers
- server/src/models — MongoDB schemas
- server/src/routes — API routes
- server/src/middleware — auth and error handling

## Getting Started

1. Install dependencies:
   npm install
2. Start the app:
   npm run dev
3. Open http://localhost:5173

## Environment Variables

Create a .env file in the server folder with:

- PORT=5000
- MONGO_URI=mongodb://127.0.0.1:27017/worksphere
- JWT_SECRET=your-secret
- CLIENT_URL=http://localhost:5173

## Deployment Notes

- Frontend: deploy to Vercel
- Backend: deploy to Render
- Database: use MongoDB Atlas
