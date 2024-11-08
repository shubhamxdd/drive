const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    length: [3, "Username must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    length: [3, "Email must be at least 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    length: [3, "Password must be at least 3 characters long"],
  },
});

const user = mongoose.model("User", userModel);

module.exports = user;
