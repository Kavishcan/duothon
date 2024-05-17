const mongoose = require("mongoose");
const { Schema } = mongoose;

const publicTransportSchema = new Schema({
  routeNumber: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  currentLocation: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true },
  },
  arrivalTimes: [
    {
      stop: String,
      time: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

publicTransportSchema.index({ currentLocation: "2dsphere" });

const PublicTransport = mongoose.model(
  "PublicTransport",
  publicTransportSchema
);
module.exports = PublicTransport;
