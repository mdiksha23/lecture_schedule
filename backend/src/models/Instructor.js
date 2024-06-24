// src/models/instructor.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

const Instructor = sequelize.define("Instructor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Instructor;
