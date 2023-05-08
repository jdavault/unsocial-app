/* eslint-disable prettier/prettier */
// import express from "express";
// const app = express();

import app from "./app";

const port = 3003;

app.get("/users/1", (req, res) => {
  res.status(200).json({ name: 'Joe' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
