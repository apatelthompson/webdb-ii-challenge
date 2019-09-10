const express = require("express");

const carRouter = require("./carRouter");

const server = express();

server.use("/cars", carRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h2>It's Working!</h2>`);
});

module.exports = server;
