const express = require('express');    // require express
const apps = express();      // server create
const port = 1111;              // set the server
const morgan = require('morgan');


// Middleware
apps.use(express.json());   
apps.use(morgan("dev"));   // log every request to the console

const productRoutes = require('./Routes/product.routes');
apps.use('/products', productRoutes);

apps.listen(port, () => {
    console.log(`Server start at http://localhost:1111`);  
});





