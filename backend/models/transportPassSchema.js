const mongoose = require("mongoose");
const { Schema } = mongoose;

const transportPassSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  passType: {
    type: String,
    enum: ["Daily", "Monthly", "Yearly"],
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
  },
});

const TransportPass = mongoose.model("TransportPass", transportPassSchema);
module.exports = TransportPass;
