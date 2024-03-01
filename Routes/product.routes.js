const express = require('express'); 
const productRoutes = express.Router();
const { 
        addProduct,
        getAllProducts,
        deleteProduct,
        getProduct,
        replaceProduct,
        updateProduct
} = require('../controller/product.controller');
// Create Product
productRoutes.post('/',addProduct);

// get all products
productRoutes.get('/',getAllProducts);

// get single product
productRoutes.get('/single-product',getProduct);               

// // Replace Single Product
productRoutes.put('/replace-product',replaceProduct);

// // Update Single Product
productRoutes.patch('/update-product',updateProduct);

// // Delete Single Product 
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;











