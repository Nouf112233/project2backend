const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  kind: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  specifications: [{ type: String, required: true }],
  Notice: [[{type: String},{type: String}]],
  price: { type: Number, required: true },
  rating: { type: Number, required: true, default: 0 },
  newe: { type: Boolean, default: true },
  image: [{ type: String, required: true }],
  discound: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", productSchema);
