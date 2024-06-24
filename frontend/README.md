# Getting Started with Create React App -- FrontEnd

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Backend

This is the backend server for the IdeaMagix project, built with Node.js, Express, Sequelize, and MySQL.

# Description

IdeaMagix Backend provides RESTful APIs to manage users, roles, courses, instructors, and lectures. It supports operations such as user authentication, course management, and scheduling lectures.

# Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js and npm installed.
MySQL database installed and running.

# Getting Started

1.Clone the Repository

2.Install Dependencies -- (npm install)

# Create DataBase

3.CREATE DATABASE ideamagix;

4.Run the Database Migrations
node src/syncDb.js

5.Import Database dump in your database ----(dump.sql)

6.start the Server
npm start
