/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import express from 'express'

const app = express();

app.get("/users/1", (req, res) => {
  res.status(200).json({ name: 'Joe' });
});

export default app
