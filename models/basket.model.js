const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const BasketSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    products: [ProductSchema],
    totalQuantity: {
      type: Number,
      default: 0,
    },
    totalSum: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = { Basket };
