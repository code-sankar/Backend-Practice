const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "sankar",
    email: "sankar@gmail.com",
    username: "sankar111",
  });

  res.send(createdUser);
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "dhiraj",
    email: "dhiraj@gmail.com",
    username: "dhiraj111",
  });

  res.send(createdUser);
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "sankar" },
    { name: "Jyoti Chetia" },
    { new: true }
  );

  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();

  res.send(users);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({username: "sankar"});

  res.send(users);
});

app.listen(3000);
