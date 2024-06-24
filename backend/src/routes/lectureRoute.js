const express = require("express");
const router = express.Router();
const lectureController = require("../controllers/lecturesController");

// Routes for instructors
router.post("/addLectures", lectureController.addLectures);
router.get("/getAllLectures", lectureController.getAllLectures);

module.exports = router;
