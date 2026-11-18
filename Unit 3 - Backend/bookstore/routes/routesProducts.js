const express = require("express");
const products = require("../data/products");

// set up a router
// a router handles routes related to specifc data, for this instance, products
const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});

// : initiaties a dynamic route parameter
// this means we dont know what the value will be yet, but we expect something there

// http://localhost:3000/products/1
// http://localhost:3000/products/2
// http://localhost:3000/products/3
router.get("/:id", (req, res) => {
  //res.json({ x: req.params.id, type: typeof req.params.id });

  // "1" -> 1
  // "asdasd" -> NaN
  // parseInt is a built in function that converts a string to an integer
  const incomingProductId = parseInt(req.params.id);

  const foundProduct = products.find((p) => p.id === incomingProductId);

  if (foundProduct) {
    console.log("Hello here is a change");
    res.json(foundProduct);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
