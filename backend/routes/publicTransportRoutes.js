const express = require("express");
const router = express.Router();

const publicTransport = require("../controllers/publicTransportController");

// Add new public transport vehicle
router.post("/public", publicTransport.addNewVehicle);

// Get all public transport vehicles
router.get("/public", publicTransport.getAllVehicles);

// Update public transport location
router.patch("/public/:id", publicTransport.updateLocation);

module.exports = router;
