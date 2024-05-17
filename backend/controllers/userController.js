const User = require("../models/userSchema"); // Import your User model

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  // Create a new user object with the provided data
  const user = new User({
    name,
    email,
    password,
    isAdmin,
  });

  console.log("User datadfsdfsdf:", user);
  // Save the user to the database
  await user.save();

  // Send the created user back in the response
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

// GET: Retrieve all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  console.log("Users:", users);

  res.send(users);
};
