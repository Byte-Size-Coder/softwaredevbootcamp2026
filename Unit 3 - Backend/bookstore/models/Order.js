const mongoose = require("mongoose");

// embedded schema for order items within an order
const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // collection "products"
      required: true,
    },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false },
); // disable _id for embedded order items

const orderSchema = new mongoose.Schema({
  items: {
    type: [orderItemSchema],
    required: true,
    validate: {
      validator: function (value) {
        return value && value.length > 0; // ensure there is at least one order item
      },
      message: "Order must have at least one item",
    },
  },
});

module.exports = mongoose.model("Order", orderSchema);
