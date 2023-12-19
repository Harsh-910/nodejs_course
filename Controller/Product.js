const products = [];

exports.getProductPage = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
    pageTitle: "Add product",
    formCss: true,
    productCss: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productCss: true,
  });
};
