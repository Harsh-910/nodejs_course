const express = require("express");

const router = express.Router();
const ProductController=require("../Controller/Product")

router.get("/",ProductController.getProduct);

module.exports = router;
