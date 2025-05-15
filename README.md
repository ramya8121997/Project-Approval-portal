# Project-Approval-portal

A Node.js-based web application to manage and approve project requests within an organization. This project follows the MVC architecture and includes JWT-based authentication and MongoDB integration.

## 🚀 Features

- User registration and login
- JWT-based authentication and authorization
- Project request submission (user)
- Approve/Reject project requests (admin)
- Role-based access control
- Data validation middleware
- MongoDB for data storage

## 🏗️ Tech Stack

| Component       | Technology             |
|----------------|-------------------------|
| Backend         | Node.js + Express.js   |
| Auth            | JWT (JSON Web Tokens)  |
| Database        | MongoDB (Atlas)        |
| Validation      | express-validator      |
| Deployment      | Render / Railway (optional) |

## 📁 Project Structure
roject-approval-portal/
├── controllers/ # Business logic
├── middleware/ # Auth & validation
├── models/ # Mongoose schemas
├── routes/ # Route definitions
├── utils/ # JWT, config, helpers
├── .env # Environment variables
├── app.js # App entry point
└── package.json

## 🛠️ Architecture

Frontend (React/Postman)
Express.js (Controller - Middleware - Routes)
MongoDB Atlas

## 📌 Purpose

This mini-project demonstrates:
- Backend development with Node.js
- Secure REST APIs with JWT
- Scalable MVC project structure
- Real-world business logic implementation

