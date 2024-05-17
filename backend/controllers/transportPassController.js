const TransportPass = require("../models/transportPassSchema");
const User = require("../models/userSchema");

exports.getTransportPass = async (req, res) => {
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

exports.getTransportPassById = async (req, res) => {
  try {
    const transportPass = await TransportPass.findById(req.params.id).populate(
      "userId"
    );
    if (!transportPass) {
      return res.status(404).send();
    }
    res.send(transportPass);
  } catch (error) {
    res.status(500).send(error);
  }
};
