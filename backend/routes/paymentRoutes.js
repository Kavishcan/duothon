const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");

// Create a new payment
router.post("/payment", paymentController.createPayment);

// Get payment by ID
router.get("/payment/:id", paymentController.getPayment);

module.exports = router;
