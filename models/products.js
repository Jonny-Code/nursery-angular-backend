const mongoose = require("mongoose");

// User Scheme
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = (module.exports = mongoose.model("Product", productSchema));

module.exports.getProductById = function(id, callback) {
  Product.findById(id, callback);
};

module.exports.getProductByName = function(name, callback) {
  const query = { name: name };
  Product.findOne(query, callback);
};

module.exports.getAllProducts = function() {
  Product.find({});
};

module.exports.addProduct = function(newProduct, callback) {
  newProduct.save(callback);
};
