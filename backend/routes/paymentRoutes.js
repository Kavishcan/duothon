const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Create a new payment
router.post("/", paymentController.createPayment);

// Get payment by ID
router.get("/:id", paymentController.getPayment);

// Get all payment
router.get("/payments", paymentController.getAllPayment);

// Update a payment by ID
router.patch("/:id", paymentController.updatePayment);

// Delete a payment by ID
router.delete("/:id", paymentController.deletePayment);

module.exports = router;
