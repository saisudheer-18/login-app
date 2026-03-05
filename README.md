A simple full-stack login application built using **React (Frontend)** and **Node.js + Express (Backend)**.

This application allows a user to log in using a username and password. If the credentials are correct, the user is redirected to a welcome page. If the credentials are incorrect, an error message is displayed.

---

# Tech Stack

Frontend

* React
* React Hooks
* Axios
* React Router DOM

Backend

* Node.js
* Express
* CORS

---

# Features

* Login form with username and password
* Backend API for authentication
* API integration between React and Node.js
* Error handling for invalid credentials
* Redirect to Welcome page after successful login
* Username stored in localStorage for future logins
* Clean project structure

---

# Project Structure

login-app
│
├── backend
│   ├── routes
│   │   └── auth.js
│   ├── server.js
│   └── package.json
│
└── frontend
├── public
├── src
│   ├── components
│   │   ├── Login.js
│   │   └── Welcome.js
│   ├── App.js
│   └── index.js
└── package.json

---

# Installation and Setup

## 1. Clone the repository

git clone: https://github.com/saisudheer-18/login-app.git

cd login-app

---

# Backend Setup

Navigate to backend folder

cd backend

Install dependencies

npm install

Start the backend server

node server.js

Server will run on

http://localhost:5000

---

# Frontend Setup

Open a new terminal and navigate to frontend folder

cd frontend

Install dependencies

npm install

Start React application

npm start

Frontend will run on

http://localhost:3000

---

# API Endpoint

POST /api/login

Example request body

{
"username": "admin",
"password": "admin"
}

Successful response

{
"message": "Login successful",
"username": "admin"
}
<img width="709" height="404" alt="image" src="https://github.com/user-attachments/assets/3cbada13-8fae-4e6a-871f-a7df9096ace1" />



Error response

{
"message": "Invalid username or password"
}
<img width="956" height="515" alt="image" src="https://github.com/user-attachments/assets/ca414dc9-f7fa-4e91-a7fd-88b52c413950" />

---

# Test Credentials

Username
admin

Password
admin

---

# Application Flow

1. User opens the login page
2. User enters username and password
3. React sends a POST request to the backend API
4. Backend validates credentials
5. If valid → navigate to welcome page
6. If invalid → display error message

---

# Future Improvements

* Add JWT authentication
* Add protected routes
* Add logout functionality
* Improve UI design
* Connect to database

---

# Author

Developer: KANCHARLAPALLI SAI SUDHEER
