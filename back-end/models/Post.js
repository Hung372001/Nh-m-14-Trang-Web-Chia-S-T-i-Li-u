const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
 
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
