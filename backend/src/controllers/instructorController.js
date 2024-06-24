const instructor = require("../models/Instructor");

const getAllInstructors = async (req, res) => {
  try {
    const instructors = await instructor.findAll();
    res.json(instructors);
  } catch (err) {
    console.error("Error retrieving courses:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllInstructors,
};
