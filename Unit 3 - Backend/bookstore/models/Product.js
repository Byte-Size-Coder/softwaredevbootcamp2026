const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: {
    type: Number,
    required: [true, "Price is required for our products."],
    min: [0, "Price cannot be negative."],
    // custom validation
    validate: {
      validator: function (value) {
        return Number(value.toFixed(2)) === value;
      },
      message: "Price must be a number with at most two decimal places.",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
