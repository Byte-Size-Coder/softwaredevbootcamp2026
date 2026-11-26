const mongoose = require("mongoose");
const ProductModel = require("../models/Product");

const fixtures = [
  { name: "Campus Reading Guide", category: "books", price: 0 },
  { name: "Campus Web Handbook", category: "books", price: 19.99 },
  { name: "MongoDB Field Guide", category: "books", price: 24.99 },
  { name: "Database Design Workbook", category: "books", price: 24.99 },
  { name: "JavaScript Desk Reference", category: "books", price: 34.95 },
  { name: "Grid Notebook", category: "stationery", price: 5.99 },
  { name: "Black Gel Pen Set", category: "stationery", price: 7.5 },
  { name: "Campus Bookstore Tote", category: "merch", price: 12 },
  { name: "USB-C Flash Drive", category: "tech", price: 18.99 },
];

async function seedProducts() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/campus_bookstore");

    let added = 0;
    let skipped = 0;

    for (const fixture of fixtures) {
      const existingProduct = await ProductModel.exists({
        name: fixture.name,
        category: fixture.category,
      });

      if (existingProduct) {
        skipped += 1;
        continue;
      }

      await ProductModel.create(fixture);
      added += 1;
    }

    console.log(
      `Added ${added} products. Skipped ${skipped} existing products.`,
    );
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts().catch((error) => {
  console.error("Could not seed products:", error.message);
  process.exitCode = 1;
});
