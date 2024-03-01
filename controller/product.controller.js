const products = require('../public/product.json');

exports.addProduct = (req, res) => {
  // console.log(req.body);
  const product = req.body;
  product.push(product);
  // products.push({...req.body});
  res.status(201).json({ message: "Products is added......." });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProduct = (req, res) => {
  const id = +req.query.id;
  let product = products.find((item) => item.id === id);
  res.status(200).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.query.id;
  let productIndex = products.findIndex((item) => item.id === id);
  let product = products[productIndex];
  products.splice(productIndex, 1, { ...req.body });
  // console.log(product);
  res.status(200).json({ message: "Product is successFully....." });
};

exports.updateProduct = (req, res) => {
  const id = +req.query.id;
  let productIndex = products.findIndex((item) => item.id === id);
  let product = products[productIndex];
  let item = products.splice(productIndex, 1, { ...product, ...req.body });
  // console.log(product);
  res.status(200).json({ message: "Product Update successfully" });
};

exports.deleteProduct = (req, res) => {
  const id = +req.query.id;
  let productIndex = products.findIndex((item) => item.id === id);
  let product = products[productIndex];
  let item = products.splice(productIndex, 1);
  // console.log(product);
  res.status(200).json({ message: "Product Delete successfully" });
};
