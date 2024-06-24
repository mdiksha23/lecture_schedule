const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");

// Routes for instructors
router.get("/getAllInstructors", instructorController.getAllInstructors);

module.exports = router;
