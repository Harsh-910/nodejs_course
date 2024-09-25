const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const feedController = require("../controllers/feed");

router.get("/post", feedController.getPosts);

router.post(
  "/post",
  //   [body("title").trim().isLength({ min: 5 })],
  feedController.postPosts
);

module.exports = router;
