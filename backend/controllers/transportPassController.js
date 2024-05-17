const TransportPass = require('../models/transportPassSchema');
const User = require('../models/userSchema');

// Create a new transport pass
exports.createTransportPass = async (req, res) => {
  try {
    const { userId, passType, expiryDate } = req.body;
    const transportPass = new TransportPass({
      userId,
      passType,
      expiryDate,
    });
    await transportPass.save();

    await User.findByIdAndUpdate(userId, {
      transportPassId: transportPass._id,
    });

    res.status(201).send(transportPass);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get transport pass by ID
exports.getTransportPassById = async (req, res) => {
  try {
    const transportPass = await TransportPass.findById(req.params.id).populate('userId');
    if (!transportPass) {
      return res.status(404).send();
    }
    res.send(transportPass);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a transport pass by ID
exports.updateTransportPassById = async (req, res) => {
  try {
    const updates = req.body;
    const transportPass = await TransportPass.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!transportPass) {
      return res.status(404).send();
    }
    res.send(transportPass);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a transport pass by ID
exports.deleteTransportPassById = async (req, res) => {
  try {
    const transportPass = await TransportPass.findByIdAndDelete(req.params.id);
    if (!transportPass) {
      return res.status(404).send();
    }
    
    // Remove the reference to the deleted transport pass from the user
    await User.findByIdAndUpdate(transportPass.userId, { transportPassId: null });

    res.send(transportPass);
  } catch (error) {
    res.status(500).send(error);
  }
};
