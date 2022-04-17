const mongoose = require("mongoose");

const MajorSchema = new mongoose.Schema(
  {
    nameMajor: {
      type: String,
      required: true,
      unique: true,
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Major", MajorSchema);
