# Project Approval Portal (PAP)

## ✅ Objective
A web-based portal to manage and track internal project approval requests with **role-based access**, **JWT authentication**, and **MongoDB** storage. It demonstrates real-world backend skills using the **MVC architecture** in Node.js.

---

## 🏗️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **Authorization**: Role-based (Employee, Manager, Admin)
- **Folder Structure**: MVC (Model, View/Routes, Controller + Middleware)
- **Version Control**: Git & GitHub
- **(Optional)**: Jest for testing

---

## 🗂️ Folder Structure
```
project-approval-portal/
│
├── controllers/
│   └── authController.js
│   └── projectController.js
│
├── models/
│   └── User.js
│   └── ProjectRequest.js
│
├── middlewares/
│   └── authMiddleware.js
│   └── roleMiddleware.js
│
├── routes/
│   └── authRoutes.js
│   └── projectRoutes.js
│
├── config/
│   └── db.js
│
├── utils/
│   └── jwt.js
│
├── app.js
├── .env
└── package.json
```

---

## 🔐 Features
### 1. Authentication
- Signup/Login using JWT
- Password hashing with bcrypt

### 2. Authorization
- Roles: Employee (default), Manager, Admin
- Managers can approve/reject
- Admins can manage all

### 3. Project Request Flow
- Employee submits a request
- Manager reviews and approves/rejects
- Admins have full visibility

---

## 📦 MongoDB Models
### `User.js`
- Fields: `name`, `email`, `password`, `role`
- Roles: `employee`, `manager`, `admin`

### `ProjectRequest.js`
- Fields: `title`, `description`, `status`, `remarks`, `submittedBy`

---

## 🔐 JWT + Middleware
- `authMiddleware.js`: Verifies JWT token
- `roleMiddleware.js`: Validates user role for route access

---

## 🔄 API Endpoints (Sample)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/signup` | Register a user |
| POST   | `/api/auth/login` | Login and get token |
| POST   | `/api/projects` | Submit a project request |
| GET    | `/api/projects` | View all requests |
| PUT    | `/api/projects/:id/approve` | Manager approves |
| PUT    | `/api/projects/:id/reject` | Manager rejects |

---

## 🔐 Security
- JWT tokens for authentication
- Role-based authorization middleware
- MongoDB with Mongoose for schema enforcement

---

## 🔄 Future Scope / Add-ons
- Email notifications (e.g., upon approval)
- Dashboard with filters
- File upload for project documents
- Admin panel UI (React frontend)

---

## 💰 Cost Estimation
- MongoDB Atlas: Free tier for small-scale usage
- Node.js + Express + JWT: Open-source
- Local development in VS Code

---

## ✅ Interview Value
This project:
- Proves your Node.js + MongoDB knowledge
- Demonstrates understanding of real-world architecture
- Covers clean code practices (MVC, JWT, RBAC)
