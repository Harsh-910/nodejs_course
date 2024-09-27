const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const feedController = require("../controllers/feed");
const isAuth = require("../middleware/isAuth");

router.get("/posts", isAuth, feedController.getPosts);

router.get("/post/:postId", isAuth, feedController.getSinglePost);

router.post(
  "/post",
  isAuth,
  //   [body("title").trim().isLength({ min: 5 })],
  feedController.postPosts
);

router.put("/post/:postId", isAuth, feedController.putPostUpdate);

router.delete("/post/:postId", isAuth, feedController.deletePost);

module.exports = router;
