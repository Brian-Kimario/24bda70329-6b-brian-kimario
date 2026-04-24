# JWT Authentication for Banking API

## Project Overview

This project implements **JWT-based authentication** for a banking API
using Node.js, Express.js, and MongoDB. It demonstrates secure
authentication practices including password hashing, token generation,
protected routes, and token expiration handling.

The API allows users to: - Register an account - Log in securely -
Receive JSON Web Tokens (JWT) - Access protected banking routes - Store
passwords securely using hashing

------------------------------------------------------------------------

# Features

-   User registration and login system
-   Secure password hashing using bcrypt
-   JWT generation and verification
-   Protected API routes
-   Token expiration and refresh token mechanism
-   Secure storage of user credentials in the database
-   API testing using Postman

------------------------------------------------------------------------

# Tech Stack

## Backend

-   Node.js
-   Express.js

## Database

-   MongoDB

## Authentication

-   jsonwebtoken
-   bcrypt

## Tools

-   Postman
-   GitHub
-   Vercel

------------------------------------------------------------------------

# Project Structure

    jwt-banking-api
    │
    ├── config
    │   └── db.js
    │
    ├── models
    │   └── User.js
    │
    ├── routes
    │   └── authRoutes.js
    │
    ├── middleware
    │   └── authMiddleware.js
    │
    ├── index.js
    ├── .env
    ├── .gitignore
    └── package.json

------------------------------------------------------------------------

# Installation

Clone the repository

    git clone https://github.com/yourusername/jwt-banking-api.git

Navigate to the project folder

    cd jwt-banking-api

Install dependencies

    pnpm install

Start the development server

    pnpm dev

------------------------------------------------------------------------

# Environment Variables

Create a `.env` file in the root directory.

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_REFRESH_SECRET=your_refresh_secret

------------------------------------------------------------------------

# API Endpoints

## Register User

POST

    /api/auth/register

Body

    {
    "name":"Rahim",
    "email":"rahim@example.com",
    "password":"123456"
    }

------------------------------------------------------------------------

## Login

POST

    /api/auth/login

Response

    {
      "token": "...",
      "refreshToken": "..."
    }

------------------------------------------------------------------------

## Protected Route

GET

    /api/auth/account

Header

    Authorization: Bearer <token>

------------------------------------------------------------------------

# Security Features

-   Password hashing using bcrypt
-   Token-based authentication using JWT
-   Secure route protection using middleware
-   Token expiration handling
-   Sensitive data protection

------------------------------------------------------------------------

# Testing

API endpoints can be tested using Postman.

Steps: 1. Register a new user 2. Login to receive JWT 3. Use the token
to access protected routes

------------------------------------------------------------------------

# Deployment

This project can be deployed using Vercel.

Steps: 1. Push project to GitHub 2. Import repository into Vercel 3. Add
environment variables 4. Deploy API

------------------------------------------------------------------------

# Expected Output

-   User registration and login functionality
-   JWT token generated on successful login
-   Protected banking routes accessible only with valid token
-   Expired or invalid tokens rejected
-   Passwords securely stored in the database

------------------------------------------------------------------------

# Author
Brian Kimario
24BDA70329
