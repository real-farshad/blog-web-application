# Blog Articles Web Application

A full-stack web application to showecase blog articles. Built with React, Express, and MongoDB.

## Features

- Single-page application (SPA) architecture
- RESTful API backend
- MongoDB database integration
- Responsive UI with React
- Client-side routing with React Router
- CRUD operations for blog articles

## Technologies

**Frontend:**

- React 19
- React Router
- Sass

**Backend:**

- Express.js
- Mongoose (MongoDB ODM)
- CORS

**Database:**

- MongoDB

## Installation

1. Clone repository
2. Run `npm run install-all` (installs both server & client dependencies)
3. Create `.env` file with MongoDB URI:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
4. Populate database: `npm run populate-database`
5. Start development servers: `npm run dev`

## Running

- Development: `npm run dev` (runs both server and client concurrently)
- Production build: `npm run build` then `npm start`

Access via:

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## Screenshots

![Feature 1 Demo](public/screenshots/1.jpg)

![Feature 1 Demo](public/screenshots/2.jpg)

![Feature 1 Demo](public/screenshots/3.jpg)
