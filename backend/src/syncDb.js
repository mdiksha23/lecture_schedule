// src/syncDB.js
const sequelize = require("./db-config/database");
const User = require("./models/User");
const Role = require("./models/Role");
const Course = require("./models/Course");
const Instructor = require("./models/Instructor");
const Lectures = require("./models/Lectures");

async function syncDB() {
  sequelize
    .sync()
    .then(() => {
      console.log("tables Created Successfully created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
}

syncDB();
