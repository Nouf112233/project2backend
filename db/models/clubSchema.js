const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  kind: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  title: [{ type: String, required: true }],
  comment: [[{type: String},{type: String}]]
});

module.exports = mongoose.model("club", clubSchema);