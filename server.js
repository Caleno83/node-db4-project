const express = require("express");
const helmet = require("helmet")
const recipeRouter = require("./recipe/recipeRouter");
const stepsRouter = require("./instructions/instructionsRouter")
const server = express();

server.use(helmet())
server.use(express.json());

server.use("/api/recipes", recipeRouter);
server.use("/api/steps", stepsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
});

server.get("/", (req, res) => {
  res.send(`<h2>Welcome To My DB4 Project</h2>`);
});

module.exports = server;