const express = require("express");
let products = require("../data/products");

// set up a router
// a router handles routes related to specifc data, for this instance, products
const router = express.Router();

router.get("/", (req, res) => {
  // using query parameters to filter products if needed
  console.log("Query parameters:", req.query);

  const retreivedCategoryFromQueryPram = req.query.filterCategory;

  if (retreivedCategoryFromQueryPram) {
    const filteredProductsByCategory = products.filter(
      (p) => p.category === retreivedCategoryFromQueryPram,
    );
    return res.json(filteredProductsByCategory);
  }

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

// route to create a new product
// http://localhost:3000/products
router.post("/", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  console.log("Prouct list updated", products);

  res.json({
    message: "Product created",
    newProductCreated: newProduct,
    allProducts: products,
  });
});

router.put("/:id", (req, res) => {
  // update a product by ID
  const incomingProductId = parseInt(req.params.id);
  const foundProduct = products.find((p) => p.id === incomingProductId);

  const updatedProductData = req.body;

  if (foundProduct) {
    if (updatedProductData.name) {
      foundProduct.name = updatedProductData.name;
    }

    if (updatedProductData.category) {
      foundProduct.category = updatedProductData.category;
    }

    if (updatedProductData.priceCents) {
      foundProduct.priceCents = updatedProductData.priceCents;
    }

    res.json({
      message: "Product updated",
      updatedProduct: foundProduct,
    });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// delete a product by ID

router.delete("/:id", (req, res) => {
  const incomingProductId = parseInt(req.params.id);

  products = products.filter((p) => p.id !== incomingProductId);

  res.json({
    message: "Product deleted",
    allProducts: products,
  });
});

module.exports = router;
