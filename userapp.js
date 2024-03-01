const express = require('express');    // require express
const userapp = express();      // server create
const port = 1112;              // set the server
const morgan = require('morgan');


// Middleware
userapp.use(express.json());   
userapp.use(morgan("dev"));   // log every request to the console

const userRoutes = require('./Routes/user.routes');
userapp.use('/users', userRoutes);

userapp.listen(port, () => {
    console.log(`Server start at http://localhost:1112`);  
});





