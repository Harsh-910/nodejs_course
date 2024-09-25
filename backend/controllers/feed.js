const { validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    data: [{ title: "harsh", content: "text" }],
  });
};

exports.postPosts = (req, res, next) => {
  // const error = validationResult(req);
  // if (!error.isEmpty()) {
  //   res.status(422).json({ message: "validation error", error: error.array() });
  // }
  res.status(200).json({
    data: [{ title: "harsh", content: "text" }],
  });
};
