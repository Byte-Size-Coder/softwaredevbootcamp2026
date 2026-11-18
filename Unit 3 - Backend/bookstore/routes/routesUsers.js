const express = require("express");

const router = express.Router();

// route to get all users
router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

// route to get a single user by ID
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  res.json({ message: `Get user with ID ${userId}` });
});

// CRUD
// Create (post request)
// Read (get request)
// Update (put request)
// Delete (delete request)

module.exports = router;
