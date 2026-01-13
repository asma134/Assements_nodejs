# Node.js + MongoDB (NoSQL) Project

## How to Run (Step by Step)

### 1. Go to backend
```bash
cd backend
```

### 2. Install packages
```bash
npm install
```

### 3. Run server
```bash
node server.js
```

You should see:
MongoDB connected
Server running on port 5000

### 4. Test with Postman

POST http://localhost:5000/api/students

Body (JSON):
{
  "name": "Ali",
  "email": "ali@gmail.com",
  "department": "IT"
}

MongoDB will automatically create:
- database
- collections
- documents

## Notes
- Frontend is not required
- Tables are NOT used (NoSQL)
- Collections are auto-created