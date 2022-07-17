const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
