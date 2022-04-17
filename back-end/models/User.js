const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    modeUser: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    StudentCode: {
      type: String,
      required: false,
    },
    TeacherCode: {
      type: String,
      required: false,
    },
    Marjor: {
      type: String,
      required: false,
    },
    Date: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    profilePic: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
