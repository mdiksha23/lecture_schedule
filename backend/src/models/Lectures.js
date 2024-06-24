const { DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");
const Course = require("./Course");
const Instructor = require("./Instructor");

const Lecture = sequelize.define("Lecture", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define associations
Lecture.belongsTo(Course, { foreignKey: "courseId" });
Lecture.belongsTo(Instructor, { foreignKey: "instructorId" });

module.exports = Lecture;
