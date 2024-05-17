const express = require("express");
const router = express.Router();

// Import your user controller or handlers here
const userController = require("./userController");

// POST: Create a new user
router.post("/user", userController.createUser);

// GET: Retrieve a user by ID
router.get("/user/:id", userController.getUserById);

// PUT: Update a user by ID
router.put("/user/:id", userController.updateUserById);

// DELETE: Delete a user by ID
router.delete("/user/:id", userController.deleteUserById);

module.exports = router;
