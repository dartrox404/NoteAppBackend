const mongoose = require("mongoose");
const model = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model("note", model);
