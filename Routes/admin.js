const express = require("express");

const router = express.Router();

const product = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
    pageTitle: "Add product",
    formCss: true,
    productCss: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  product.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.product = product;
