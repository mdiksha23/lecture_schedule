// src/models/course.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

const Course = sequelize.define("Course", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM("beginner", "intermediate", "expert"),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Course;
