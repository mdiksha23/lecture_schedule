// controllers/courseController.js
const course = require("../models/Course");

const createCourse = async (req, res) => {
  try {
    const newCourse = await course.create(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await course.findAll();
    res.json(courses);
  } catch (err) {
    console.error("Error retrieving courses:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
};
