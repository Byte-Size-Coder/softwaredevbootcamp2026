const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/routesProducts");
const ordersRouter = require("./routes/routesOrders");
const usersRouter = require("./routes/routesUsers");

const app = express();

const port = 3000;

// middleware to parse JSON request bodies
// middleware is a function that runs before the route handler
// Must have this line before all your routes if you are expecting JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ name: "Campus Bookstore API" });
});

// data
// products
// users
// orders

//https://localhost:3000/products
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.use("/users", usersRouter);

async function startServer() {
  await mongoose.connect("mongodb://127.0.0.1:27017/campus_bookstore");
  console.log(`Connected to MongoDB database`);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer().catch(() => {
  console.error("Could not connect to MongoDb. Check that it is running");
  process.exitCode = 1;
});
