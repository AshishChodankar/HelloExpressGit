import express from "express";
import { getAllUser } from "./user.js";
const app = express();

// GET API :: FAKE API
// https://jsonplaceholder.typicode.com:80/posts
// PRODUCE API

// http://localhost:4000/posts
app.get("/posts", (req, res) => {
  res.json({ id: 1, msg: "hello World" });
});

// http://localhost:4000/users
app.get("/users", (req, res) => {
  const list = getAllUser();
  res.json(list);
});

// server start
app.listen(4000, () => console.log("server started..."));
