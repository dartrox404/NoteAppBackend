# Notes API - Backend

A clean and scalable REST API backend for a Notes application built with Node.js, Express, and MongoDB. This API handles complete CRUD operations and is ready to integrate with any frontend framework including Flutter, React, or Vue.

![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-800000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

---

## Features

- ✅ Create notes
- ✅ Read all notes and individual notes
- ✅ Update existing notes
- ✅ Delete notes
- ✅ RESTful API design
- ✅ MongoDB integration with Mongoose ODM
- ✅ CORS enabled for frontend integration
- ✅ Environment variable configuration
- ✅ Clean code architecture

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Middleware:** CORS, dotenv
- **Package Manager:** npm

---

## Project Structure

```
notes-backend/
├── config/
│   └── db.js                 # Database connection configuration
├── models/
│   └── Note.js              # Mongoose note schema
├── controllers/
│   └── noteController.js    # Request handlers for notes
├── routes/
│   └── noteRoutes.js        # API route definitions
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
├── server.js               # Main server file
├── package.json            # Project dependencies
└── package-lock.json       # Locked versions
```

---

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notes-backend.git
cd notes-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Server Configuration
PORT=5050
NODE_ENV=development

# Database Configuration (Local MongoDB)
MONGODBURL=mongodb://localhost:27017/notesdb

# Alternative: MongoDB Atlas
# MONGODBURL=mongodb+srv://username:password@cluster.mongodb.net/notesdb

# CORS Configuration
CORS_ORIGIN=http://localhost:5050
```

### 4. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The API will be available at: `http://localhost:5050`

---

## API Endpoints

### Notes Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/note` | Retrieve all notes |
| GET | `/api/note/:id` | Retrieve a single note by ID |
| POST | `/api/note` | Create a new note |
| PUT | `/api/note/:id` | Update an existing note |
| DELETE | `/api/note/:id` | Delete a note |

---

## API Examples

### Create a Note

**Request:**
```bash
curl -X POST http://localhost:5050/api/note \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Note",
    "content": "This is the content of my first note"
  }'
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My First Note",
  "content": "This is the content of my first note",
  "createdAt": "2024-06-09T10:30:00.000Z",
  "updatedAt": "2024-06-09T10:30:00.000Z"
}
```

### Get All Notes

**Request:**
```bash
curl http://localhost:5050/api/note
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "My First Note",
    "content": "This is the content of my first note",
    "createdAt": "2024-06-09T10:30:00.000Z",
    "updatedAt": "2024-06-09T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Second Note",
    "content": "Another note",
    "createdAt": "2024-06-09T10:35:00.000Z",
    "updatedAt": "2024-06-09T10:35:00.000Z"
  }
]
```

### Get Single Note

**Request:**
```bash
curl http://localhost:5050/api/note/507f1f77bcf86cd799439011
```

### Update a Note

**Request:**
```bash
curl -X PUT http://localhost:5050/api/note/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "Updated content"
  }'
```

### Delete a Note

**Request:**
```bash
curl -X DELETE http://localhost:5050/api/note/507f1f77bcf86cd799439011
```

---

## Database Schema

### Note Model

```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

---

## Learning Outcomes

Through this project, you'll learn:

- Building REST APIs with Express.js
- CRUD operations with MongoDB and Mongoose
- Project structure and organization
- Middleware implementation (CORS, JSON parsing)
- Error handling and validation
- Environment variable management
- Integration with frontend applications

---

## Future Enhancements

- 🔐 JWT authentication and user authorization
- 👤 User-based note management
- ☁️ Deployment (Render, Railway, or Heroku)
- 🔍 Full-text search functionality
- ✅ Input validation (Joi or Zod)
- 🏷️ Note categories and tagging
- 🧪 Unit and integration testing
- 🐳 Docker containerization
- 📝 API documentation (Swagger/OpenAPI)

---

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - OK (Successful request)
- `201` - Created (Resource created successfully)
- `400` - Bad Request (Invalid input)
- `404` - Not Found (Resource not found)
- `500` - Internal Server Error (Server error)

---

## License

This project is open source and available under the MIT License.

---

## Author

**Your Name**

- GitHub: [Your GitHub Profile](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

## Support

If you found this project helpful, please give it a ⭐ on GitHub!

For questions, issues, or suggestions, feel free to open an issue on the GitHub repository.

---

**Last Updated:** June 2024