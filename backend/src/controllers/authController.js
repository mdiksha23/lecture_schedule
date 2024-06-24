const User = require("../models/User");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username exists in the database
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  loginUser,
};
