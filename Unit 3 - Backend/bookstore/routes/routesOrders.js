const express = require("express");
const mongoose = require("mongoose");

const ProductModel = require("../models/Product");
const OrderModel = require("../models/Order");

const router = express.Router();

// Create a new order
router.post("/", async (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ error: "Items must be an array" });
  }

  try {
    // grab all the products ids from our item
    const productIds = items.map((x) => x.productId);

    // fetch all products that match the product Ids
    const products = await ProductModel.find({ _id: { $in: productIds } });

    const orderItems = [];

    for (const x of items) {
      const product = products.find((p) => p._id.toString() === x.productId);

      if (product) {
        orderItems.push({
          product: product._id,
          unitPrice: product.price,
          quantity: x.quantity,
        });
      }
    }

    const order = await OrderModel.create({ items: orderItems });

    res.status(201).json(order);
  } catch (error) {
    if (error.name === "validationError") {
      return res.status(400).json({ error: error.message });
    }

    console.error(error);
    res.status(500).json({ error: "Could not create order." });
  }
});

router.get("/:id", async (req, res) => {
  const incomingOrderId = req.params.id;

  if (!mongoose.isObjectIdOrHexString(incomingOrderId)) {
    return res.status(400).json({ error: "Invalid order ID" });
  }

  try {
    const order = await OrderModel.findById(incomingOrderId).populate(
      "items.product",
      "name category price",
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch order." });
  }
});

module.exports = router;
