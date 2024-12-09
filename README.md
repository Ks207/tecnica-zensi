# User Management System

A full-stack application for user management with CRUD operations and JWT authentication.

## Technologies Used

- Backend: Node.js, Express, Sequelize
- Frontend: React, Material-UI
- Database: PostgreSQL (Vercel/Neon Postgres serverless integration)
- Authentication: JWT
- Deployment: Vercel

## Project Structure

```
packages/
  ├── backend/         # Express backend
  │   ├── src/
  │   │   ├── models/
  │   │   ├── routes/
  │   │   ├── middleware/
  │   │   ├── scripts/    # Database initialization scripts
  │   │   └── index.js
  │   └── package.json
  └── frontend/        # React frontend
      ├── src/
      └── package.json
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Backend (.env):
   ```
   DATABASE_URL=your_neon_postgres_url
   JWT_SECRET=your_secret_key
   PORT=3001
   ```

   Frontend:
   - Development (.env.development):
   ```
   VITE_API_URL=http://localhost:3001
   ```
   - Production (.env.production):
   ```
   VITE_API_URL=https://your-backend-url
   ```

4. Initialize the database:
   ```bash
   # This will create the database tables and a sample admin user
   cd packages/backend
   npm run init-db
   ```
   Default admin credentials:
   - Email: admin@example.com
   - Password: admin123456

5. Run the development servers:
   ```bash
   # Run both frontend and backend
   npm run dev

   # Run backend only
   npm run dev:backend

   # Run frontend only
   npm run dev:frontend
   ```

## Deployment

### Backend Deployment (Vercel)

1. Create a new project in Vercel
2. Connect your repository
3. Set Root directory to packages/backend
4. Add Postgresql serverless integration (Neon)
5. Set environment variables in Vercel project settings:
   - `DATABASE_URL`: Your Neon Postgres connection string
   - `JWT_SECRET`: Your JWT secret key
6. Deploy the backend 

### Frontend Deployment (Vercel)

1. Create a new project in Vercel
2. Connect your repository
3. Set Root directory to packages/frontend
4. Set environment variables in Vercel project settings:
   - `VITE_API_URL`: Your backend URL (e.g., https://your-backend.vercel.app)
5. Deploy the frontend

## API Endpoints

### Authentication
- `POST /api/auth/login`
  - Body: `{ "email": "admin@example.com", "password": "admin123456" }`
  - Returns: JWT token and user data

### Users
- `GET /api/users` - Get all users (requires authentication)
  - Query Parameters:
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 10)
  - Returns: 
    ```json
    {
      "users": [...],
      "pagination": {
        "total": 100,
        "currentPage": 1,
        "totalPages": 10,
        "limit": 10
      }
    }
    ```
- `GET /api/users/:id` - Get user by ID (requires authentication)
- `POST /api/users` - Create new user
  - Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
- `PUT /api/users/:id` - Update user (requires authentication)
  - Body: `{ "name": "John Doe", "email": "john@example.com" }`
- `DELETE /api/users/:id` - Delete user (requires authentication)

## Example API Usage (curl)

### Login
```bash
curl -X POST https://prueba-zensi-backend.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123456"}'
```

### Create User
```bash
curl -X POST https://prueba-zensi-backend.vercel.app/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Get All Users
```bash
curl -X GET https://prueba-zensi-backend.vercel.app/api/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Update User
```bash
curl -X PUT https://prueba-zensi-backend.vercel.app/api/users/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name","email":"updated@example.com"}'
```

### Delete User
```bash
curl -X DELETE https://prueba-zensi-backend.vercel.app/api/users/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
