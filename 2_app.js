const express = require('express');
const app =express();  // server create
const port =1111;   // set the server
const morgan = require('morgan');
const products = require("./product.json");

// middlewar
app.use(express.json());
app.use(morgan('dev'));


// end points CRUD
app.post('/products',(req, res)=>{
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});
    res.status(201).json({message: 'Products is added.......'})
});

app.get('/products',(req, res)=>{
    res.status(200).json(products);
});

app.get('/products/single-product',(req, res)=>{
    const id = +req.query.id;
    // console.log(id);
    res.status(200).json(product);
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:1111`);
    })
