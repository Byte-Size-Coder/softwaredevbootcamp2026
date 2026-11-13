const express = require("express");

const app = express();

// home route
// localhost:3000
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// student route
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
