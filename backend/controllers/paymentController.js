const Payment = require("../models/paymentSchema");

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get payment by ID
exports.getPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate("userId");
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a payment by ID
exports.updatePayment = async (req, res) => {
  try {
    const updates = req.body;
    const payment = await Payment.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a payment by ID
exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get all payment
exports.getAllPayment = async (req, res) => {
  try {
    console.log("Get all payment");
    const payments = await Payment.find().populate("userId");
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
