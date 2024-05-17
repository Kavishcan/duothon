const express = require("express");
const router = express.Router();
const transportPassController = require("../controllers/transportPassController");

// Create a new transport pass
router.post("/issue", transportPassController.createTransportPass);

// Get transport pass by ID
router.get("/:id", transportPassController.getTransportPassById);

// Update a transport pass by ID
router.patch("/:id", transportPassController.updateTransportPassById);

// Delete a transport pass by ID
router.delete("/:id", transportPassController.deleteTransportPassById);

module.exports = router;
