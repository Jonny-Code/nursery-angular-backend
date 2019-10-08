const express = require("express");
const router = express.Router();
const Product = require("../models/products");

// all products routes

router.post("/add", (req, res) => {
  let newProduct = new Product({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price
  });

  Product.addProduct(newProduct, err => {
    err
      ? res.json({ success: false, msg: "failed to add product" })
      : res.json({ success: true, msg: "Product has been added" });
  });
});

router.get("/get", (req, res) => {
  const name = req.body.name;
  Product.getProductByName(name, (err, product) => {
    if (err) throw err;
    if (!product)
      return res.json({ success: false, msg: "couldnt find that product" });
    res.json({
      success: true,
      product: {
        id: product._id,
        name: product.name,
        type: product.type,
        description: product.description,
        price: product.price
      }
    });
  });
});

router.get("/all", async (req, res) => {
  Product.find({}, function(err, prods) {
    var prodMap = {};
    prods.forEach(function(prod) {
      prodMap[prod._id] = prod;
    });
    res.send(prodMap);
  });
});

module.exports = router;
