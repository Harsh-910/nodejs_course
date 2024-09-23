const express = require("express");

const router = express.Router();

const feedController = require("../controllers/feed");

router.get("/post", feedController.getPosts);

module.exports = router;
