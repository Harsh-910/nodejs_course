const { validationResult } = require("express-validator");
const Post = require("../models/post");
const User = require("../models/user");

exports.getPosts = (req, res, next) => {
  const page = req.query.page || 1;
  const perPage = 2;
  let totalItem;

  Post.find()
    .countDocuments()
    .then((count) => {
      totalItem = count;
      return Post.find()
        .skip((page - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      res.status(200).json({
        message: "Posts fetched successfully",
        posts: result,
        total: totalItem,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSinglePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((result) => {
      res.status(200).json({
        message: "Posts fetched successfully",
        posts: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postPosts = (req, res, next) => {
  // const error = validationResult(req);
  // if (!error.isEmpty()) {
  //   res.status(422).json({ message: "validation error", error: error.array() });
  // }
  console.log(req.userId);

  const post = new Post({
    title: req.body.title,
    imageUrl: "d",
    content: req.body.content,
    creator: req.userId,
  });
  post
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      user.post.push(post);
      return user.save();
    })
    .then((result) => {
      res
        .status(201)
        .json({ message: "post created successfully", post: post });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "creating post failed" });
    });
};

exports.putPostUpdate = (req, res, next) => {
  const postId = req.params.postId;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422).json({ message: "validation error", error: error.array() });
  }
  const title = req.body.title;
  const content = req.body.content;
  let post;
  Post.findById(postId)
    .then((result) => {
      post = result;
      post.title = title;
      post.content = content;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Post updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "updating post failed" });
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (post) {
        return Post.findByIdAndDelete(postId);
      }
    })
    .then((result) => {
      res.status(200).json({ message: "Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Deleting failed" });
    });
};
