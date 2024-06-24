// routes/courseRoute.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes for Course
router.post("/createCourse", courseController.createCourse);
router.get("/getAllCourses", courseController.getAllCourses);

module.exports = router;
