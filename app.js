const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const bookController = require("./controllers/bookController");
const commentsController = require("./controllers/commentsController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/books", bookController);
app.use("/comments", commentsController);

app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
