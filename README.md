# SentiMate

SentiMate is an AI-powered emotional wellness companion built with the MERN stack.

## Setup

### Server
```
cd server
cp .env.example .env # update values
npm install
npm run dev
```

### Client
```
cd client
cp .env.example .env
npm install
npm run dev
```

The client expects the API to be served from `VITE_API_URL` (default `http://localhost:5000/api`).
