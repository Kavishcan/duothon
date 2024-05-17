const express = require("express");
const router = express.Router();

const transportPassController = require("../controllers/transportPassController");

// Issue a new transport pass
router.post("/transport/issue", transportPassController.getTransportPass);

// Get transport pass by ID
router.get("/transport/:id", transportPassController.getTransportPassById);

module.exports = router;
