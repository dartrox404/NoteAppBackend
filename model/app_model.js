const mongoose = require("mongoose");
const model = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model("note", model);
