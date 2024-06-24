// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
