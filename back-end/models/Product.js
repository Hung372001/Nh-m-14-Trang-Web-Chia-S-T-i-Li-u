const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    namefile: { type: String, required: true },
    dataFile: { type: String, required: false },
    desc: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: false,
    },
    file: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
