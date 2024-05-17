const User = require("../models/userSchema"); // Import your User model

// Create a new user
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).populate("transportPassId");
  if (!user) return res.status(404).send();
  res.send(user);
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  const updates = Object.keys(req.body);
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send();
  updates.forEach((update) => (user[update] = req.body[update]));
  await user.save();
  res.send(user);
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).send();
  res.send(user);
};
