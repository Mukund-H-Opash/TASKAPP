# ✅ MERN Task Management App

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring JWT-based authentication and a sleek Tailwind CSS UI.

---

## 📌 Features

- User Authentication (Signup & Login)
- Create, Read, Update, and Delete (CRUD) tasks
- Task fields:
  - Title (required, max 100 chars)
  - Description (optional, max 500 chars)
  - Status: Pending | In Progress | Completed
  - Due Date (required)
- Secure password hashing with bcrypt
- JWT authentication and route protection
- Responsive UI with Tailwind CSS
- Status badges with color indicators

-

---

## 🧰 Tech Stack

- **Frontend**: React, Axios, Tailwind CSS, React Router
- **Backend**: Express.js, MongoDB, Mongoose, bcrypt, JWT
- **Deployment**: Vercel (Frontend) + Render/Heroku (Backend)

---

## ⚙️ Setup Instructions

### Backend

```bash
cd backend
npm install
touch .env

cd frontend
npm install
npm start


---