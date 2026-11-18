const express = require("express");
const productsRouter = require("./routes/routesProducts");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ name: "Campus Bookstore API" });
});

// data
// products
// users
// orders

//https://localhost:3000/products
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
