const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://harsh:QartsBgC2RuaQfs3@cluster0.odidjca.mongodb.net/Rest-Crud"
  )
  .then((result) => {
    app.listen(9000);
  })
  .catch((err) => {
    console.log(err);
  });
