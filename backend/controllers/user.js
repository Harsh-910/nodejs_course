const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .hash(password, 12)
    .then((hashPass) => {
      const user = new User({
        name: name,
        email: email,
        password: hashPass,
      });

      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "user created successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loginUser;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Auth failed" });
      }
      loginUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((result) => {
      if (result) {
        const token = jwt.sign(
          { email: email, id: loginUser._id.toString() },
          "super",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          message: "Auth successful",
          toke: token,
          userId: loginUser._id.toString(),
        });
      } else {
        return res.status(401).json({ message: "Wrong password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
