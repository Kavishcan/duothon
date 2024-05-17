const Payment = require("../models/Payment");

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

module.exports = router;
