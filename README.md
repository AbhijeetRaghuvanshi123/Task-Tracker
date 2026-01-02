# Task Tracker - MERN Stack Application

A modern, full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, read, update, and delete daily tasks with an intuitive and responsive user interface.

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete tasks
- **Task Management**: 
  - Set task title and description
  - Assign priority levels (Low, Medium, High)
  - Set due dates
  - Toggle task status (Pending/Completed)
- **Filtering**: Filter tasks by status (All, Pending, Completed)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Real-time Updates**: Instant UI updates after operations
- **Form Validation**: Client-side and server-side validation
- **Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠️ Technology Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

### Frontend
- **React**: UI library
- **Vite**: Build tool and development server
- **CSS3**: Modern styling with custom properties
- **Fetch API**: HTTP requests

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB Atlas** account (or local MongoDB installation)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Task-Tracker
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your MongoDB connection string
# Edit the .env file with your actual MongoDB URI
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/task-tracker?retryWrites=true&w=majority
PORT=5000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create .env file (optional - defaults to localhost:5000)
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

### Start Backend Server

```bash
# From backend directory
npm run dev
```

The backend server will start on `http://localhost:5000`

### Start Frontend Development Server

```bash
# From frontend directory
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📡 API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Request Body Example (POST/PUT)

```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "priority": "High",
  "dueDate": "2026-01-10",
  "status": "Pending"
}
```

### Response Format

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API documentation",
    "priority": "High",
    "dueDate": "2026-01-10T00:00:00.000Z",
    "status": "Pending",
    "createdAt": "2026-01-02T13:30:00.000Z",
    "updatedAt": "2026-01-02T13:30:00.000Z"
  }
}
```

## 📁 Project Structure

```
Task-Tracker/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # Database connection
│   │   ├── controllers/
│   │   │   └── taskcontroller.js  # Task CRUD logic
│   │   ├── models/
│   │   │   └── taskmodel.js       # Task schema
│   │   ├── routes/
│   │   │   └── taskroutes.js      # API routes
│   │   └── app.js                 # Express app config
│   ├── .env                       # Environment variables
│   ├── server.js                  # Server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx       # Task creation form
│   │   │   ├── TaskItem.jsx       # Individual task card
│   │   │   └── TaskList.jsx       # Task list container
│   │   ├── pages/
│   │   │   └── Home.jsx           # Main page
│   │   ├── services/
│   │   │   └── api.js             # API service layer
│   │   ├── App.jsx                # Root component
│   │   ├── App.css                # Component styles
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # Entry point
│   ├── .env                       # Environment variables
│   └── package.json
│
└── README.md
```

## 🎨 Features Breakdown

### Task Schema

- **title** (String, required): Task name (max 100 characters)
- **description** (String, optional): Task details (max 500 characters)
- **priority** (String, enum): Low, Medium, High (default: Medium)
- **dueDate** (Date, required): Task deadline
- **status** (String, enum): Pending, Completed (default: Pending)
- **timestamps**: Automatic createdAt and updatedAt fields

### Validation

- **Client-side**: Form validation prevents empty submissions
- **Server-side**: Mongoose schema validation ensures data integrity
- **Error Messages**: Clear, user-friendly error messages

## 🔒 Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Deployment

### Backend Deployment (Render, Railway, etc.)

1. Set environment variables in your hosting platform
2. Deploy the backend directory
3. Note the deployed backend URL

### Frontend Deployment (Vercel, Netlify, etc.)

1. Update `VITE_API_URL` to point to your deployed backend
2. Build the frontend: `npm run build`
3. Deploy the `dist` folder

### Database (MongoDB Atlas)

1. Create a MongoDB Atlas cluster
2. Whitelist your deployment IP addresses
3. Use the connection string in your backend `.env`

## 🧪 Testing

### Manual Testing Checklist

- [ ] Create a new task
- [ ] View all tasks
- [ ] Filter tasks by status
- [ ] Mark task as completed
- [ ] Reopen completed task
- [ ] Delete a task
- [ ] Test form validation
- [ ] Test responsive design on mobile
- [ ] Test error handling (stop backend and try operations)

## 🎯 Future Enhancements

- User authentication and authorization
- Task categories/tags
- Search functionality
- Sort by multiple criteria
- Task editing modal
- Due date notifications
- Dark/light theme toggle
- Export tasks to CSV/PDF
- Drag-and-drop task reordering
- Task sharing and collaboration

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a MERN stack demonstration project.

## 🙏 Acknowledgments

- MongoDB documentation
- Express.js documentation
- React documentation
- Vite documentation
