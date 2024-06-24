const { isDateAssignedToInstructor } = require("../common/services/services");
const Lecture = require("../models/Lectures");

const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.findAll();

    res.json(lectures);
  } catch (err) {
    console.error("Error retrieving lectures:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addLectures = async (req, res) => {
  try {
    const { date, instructorId } = req.body;

    if (!date || !instructorId) {
      return res
        .status(400)
        .json({ error: "Date and Instructor ID are required" });
    }
    const isAssigned = await isDateAssignedToInstructor(date, instructorId);

    if (isAssigned) {
      return res
        .status(400)
        .json({ error: "Date Already Assigned to this Instructor" });
    } else {
      const newLecture = await Lecture.create(req.body);
      res.status(201).json(newLecture);
    }
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLecturesByInstructor = async (req, res) => {
  const { instructorId } = req.params;

  try {
    // Find all lectures where instructorId matches
    const lectures = await Lecture.findAll({
      where: { instructorId },
    });

    res.json(lectures);
  } catch (error) {
    console.error("Error retrieving lectures by instructor ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllLectures,
  addLectures,
};
