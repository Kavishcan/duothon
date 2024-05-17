const PublicTransport = require("../models/publicTransportSchema");

// Add new public transport vehicle
exports.addNewVehicle = async (req, res) => {
  try {
    const publicTransport = new PublicTransport(req.body);
    await publicTransport.save();
    res.status(201).send(publicTransport);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all public transport vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const publicTransport = await PublicTransport.find();
    res.send(publicTransport);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update public transport location
exports.updateLocation = async (req, res) => {
  try {
    const publicTransport = await PublicTransport.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!publicTransport) {
      return res.status(404).send();
    }
    res.send(publicTransport);
  } catch (error) {
    res.status(400).send(error);
  }
};
