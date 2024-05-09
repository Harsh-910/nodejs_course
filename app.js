const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const User = require(`./models/User`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("663a3ca4fdf7c0a23ca518c2")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
  // next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://harsh:QartsBgC2RuaQfs3@cluster0.odidjca.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Harsh",
          email: "harsh@gmail.com",
          cart: {
            item: [],
          },
        });
        user.save();
      }
    });
    app.listen(9000);
  })
  .catch((err) => {
    console.log(err);
  });
