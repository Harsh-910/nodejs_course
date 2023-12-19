const express = require("express");

const router = express.Router();

const productController = require("../Controller/Product");

router.get("/add-product", productController.getProductPage);

router.post("/add-product", productController.postAddProduct);

module.exports=router;
