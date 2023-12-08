const express = require("express");
const path = require("path")

const router = express.Router();

const product=[];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  product.push({title:req.body.title})
  res.redirect("/");
});

exports.routes = router;
exports.product=product;
