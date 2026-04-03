# Women Helper and Assistance – Legal Advocate Finder

## Project Description

A local, privacy-focused web application that helps women find verified legal advocates, access emergency services, and read legal awareness resources. This project runs fully on your machine with no external cloud dependencies.

## Required Software

- Node.js (LTS)
- MongoDB Community Server

## Installation

Run everything via the provided script:

1. Double-click `run.bat` in the project root, or
2. From a terminal:
   - Windows: `.\run.bat`

The script:
- Checks Node.js installation
- Installs dependencies if missing
- Starts the backend server
- Starts the frontend dev server
- Opens your browser automatically

## Manual Setup (Optional)

If you prefer manual steps:

1. Install dependencies
   - Frontend:
     ```
     cd frontend
     npm install
     npm run dev
     ```
   - Backend:
     ```
     cd backend
     npm install
     node server.js
     ```

2. MongoDB
   - Ensure MongoDB is running locally (default port 27017)
   - Optionally set `MONGODB_URI` environment variable for a custom connection string

## How to Run

- Preferred: run `run.bat` from the project root to start both servers
- Frontend dev server runs on http://localhost:8080/
- Backend API runs on http://localhost:5000/

## Notes

- The project contains no references to third-party cloud services
- All assets and configurations are local
- Feel free to adjust environment variables as needed in your shell or system settings

## Tech Stack
- Frontend: React + Vite + TypeScript + Tailwind
- Backend: Node.js + Express.js + MongoDB (Mongoose)
