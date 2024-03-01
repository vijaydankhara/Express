const express = require("express");
const app = express(); // server create
const port = 1111; // set the server
const morgan = require("morgan");
const products = require("./product.json");

// middlewar
app.use(express.json());
app.use(morgan("dev"));

// end points CRUD
app.post("/products", (req, res) => {
  // console.log(req.body);
  const product = req.body;
  product.push(product);
  // products.push({...req.body});
  res.status(201).json({ message: "Products is added......." });
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/single-product", (req, res) => {
  const id = +req.query.id;
  // console.log(id);
  let product = products.find((item) => item.id === id);
  res.status(200).json(product);
});

// replace singale product
app.put("/products/replace-product", (req, res) => {
  const id = +req.query.id;
  let productIndex = products.findIndex((item) => item.id === id);
  let product = products[productIndex];
  products.splice(productIndex, 1, { ...req.body });
  res.status(200).json({ message: "Product is successFully....." });
});


// Update Single Product
app.patch('/products/update-product',(req, res) => {
  const id = +req.query.id;
  let productIndex = Products.findIndex((item)=>item.id === id);
  let product = Products[productIndex];
  Products.splice(productIndex, 1,{...product,...req.body});
  // console.log(product);
  res.status(200).json({message:'Product Update successfully'});
});

// Delete Single Product

app.delete('/products/delete-product',(req, res) => {
  const id = +req.query.id;
  let productIndex = Products.findIndex((item)=>item.id === id);
  Products.splice(productIndex, 1);
  // console.log(product);
  res.status(200).json({message:'Product Delete successfully'});
});



app.listen(port, () => {
  console.log(`Server start at http://localhost:1111`);
});
