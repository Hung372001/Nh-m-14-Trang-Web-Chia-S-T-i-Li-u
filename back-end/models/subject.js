const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
  {
    nameSubject: {
      type: String,
      required: true,
    },
    marjor: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", SubjectSchema);
