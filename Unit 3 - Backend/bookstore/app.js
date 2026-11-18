const express = require("express");
const productsRouter = require("./routes/routesProducts");
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

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
