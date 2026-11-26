const express = require("express");
const mongoose = require("mongoose");

const ProductModel = require("../models/Product");

// set up a router
// a router handles routes related to specifc data, for this instance, products
const router = express.Router();

router.get("/", async (req, res) => {
  // using query parameters to filter products if needed
  // console.log("Query parameters:", req.query);

  const retreivedCategoryFromQueryPram = req.query.filterCategory;

  if (retreivedCategoryFromQueryPram) {
    const filter = { category: retreivedCategoryFromQueryPram };
    const fetchedFilteredProduct = await ProductModel.find(filter);
    return res.json(fetchedFilteredProduct);
  }

  const fetchedProducts = await ProductModel.find();

  res.json(fetchedProducts);
});

// : initiaties a dynamic route parameter
// this means we dont know what the value will be yet, but we expect something there

// http://localhost:3000/products/1
// http://localhost:3000/products/2
// http://localhost:3000/products/3
router.get("/:id", async (req, res) => {
  //res.json({ x: req.params.id, type: typeof req.params.id });

  const incomingProductId = req.params.id;

  if (!mongoose.isObjectIdOrHexString(incomingProductId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  const foundProduct = await ProductModel.findById(incomingProductId);

  if (!foundProduct) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(foundProduct);
});

// route to create a new product
// http://localhost:3000/products
router.post("/", async (req, res) => {
  // object deconstruction
  // takes the values from an object and stores them into seperate variables
  // const obj = {
  //   name: "test",
  //   category: "test",
  //   price: 0
  // }

  // const {name, category, price} = obj

  // console.log(name)
  // console.log(category)
  // (leftside) ?? (right side) -> ?? means if left side doesnt exists, use right side
  const { name, category, price } = req.body;

  try {
    console.log(name);
    const createdProduct = await ProductModel.create({
      name,
      category,
      price,
    });
    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.put("/:id", async (req, res) => {
  // update a product by ID
  const incomingProductId = req.params.id;

  if (!mongoose.isObjectIdOrHexString(incomingProductId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  // find the product by ID

  const foundProduct = await ProductModel.findById(incomingProductId);

  if (!foundProduct) {
    return res.status(404).json({ error: "Product not found" });
  }

  const updates = req.body;

  for (const field of ["name", "category", "price"]) {
    if (Object.hasOwn(updates, field)) {
      foundProduct[field] = updates[field];
    }
  }

  await foundProduct.save();
  res.json(foundProduct);
});

// delete a product by ID

router.delete("/:id", async (req, res) => {
  const incomingProductId = req.params.id;

  if (!mongoose.isObjectIdOrHexString(incomingProductId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  const deletedProduct =
    await ProductModel.findByIdAndDelete(incomingProductId);

  if (!deletedProduct) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json({ message: "Product deleted" });
});

module.exports = router;
