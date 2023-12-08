const express = require("express");
const path = require("path")

const router = express.Router();
const adminData = require("./admin")

router.get("/", (req, res, next) => {
  console.log('shop',adminData.product)
  res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports = router;
