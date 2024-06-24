// src/database.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

console.log(
  "AAA======>",
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASS
);

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

console.log("------------------------------------------------------------");
console.log("sequelize --->", sequelize);
console.log("------------------------------------------------------------");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
