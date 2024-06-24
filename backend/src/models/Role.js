// src/models/role.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Role;
