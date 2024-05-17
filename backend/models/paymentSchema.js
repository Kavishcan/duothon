const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "Debit Card", "PayPal", "Other"],
    required: true,
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
