const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  kind: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  new: { type: Boolean, default: true },
  img: { type: String, required: true },
  discound: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", productSchema);
