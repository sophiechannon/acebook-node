const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
    lowercase: true,
    validate: {
      validator: v => /.+\@.+\..+/.test(v),
      message: "INVALID EMAIL"
      }
    },
    password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
