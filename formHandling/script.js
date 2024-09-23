const express = require("express");
const app = express();

app.use(express.json());     // Important for form handling
app.use(express.urlencoded({extended: true})); // Important for form handling

app.get("/", (req, res) => {
  res.send("This is the main page");
});

app.get("/about", (req, res) => {
  res.send("This is the profile page");
});

app.listen(3000);