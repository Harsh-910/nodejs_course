const express = require("express");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.product;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productCss: true,
  });
});

module.exports = router;
