const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const BasketSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
    },
    basketId: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true }
);

BasketSchema.plugin(AutoIncrement, { inc_field: "basketId" });

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = { Basket };
