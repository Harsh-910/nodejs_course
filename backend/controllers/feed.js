exports.getPosts = (req, res, next) => {
  res.status(200).json({
    data: [{ title: "harsh", content: "text" }],
  });
};
