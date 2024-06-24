const Lecture = require("../../models/Lectures");
const { Op } = require("sequelize");

const isDateAssignedToInstructor = async (date, instructorId) => {
  try {
    // Ensure date is in the correct format
    const formattedDate = new Date(date).toISOString(); // Includes time component
    console.log("date====>", date);
    const lecture = await Lecture.findOne({
      where: {
        instructorId: instructorId,
        date: {
          [Op.eq]: formattedDate,
        },
      },
    });
    console.log("lectures====>", lecture);
    if (lecture != null) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("Error checking lecture date for instructor:", err);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  isDateAssignedToInstructor,
};
