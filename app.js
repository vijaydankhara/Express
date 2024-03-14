require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const mongoose = require('mongoose');
// Database Connection
async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/dhaval');
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
.then(()=>console.log('DB is Connected SuccessFully.......'))
.catch( err =>{console.log(err)});

// Middlware
app.use(express.json());
app.use(morgan('dev'));


// User Server (mongoosh)
const userRoutes = require('./Routes/users.routes');
app.use('/api/user',userRoutes);
const productRoutes = require('./Routes/productTask.routes');
app.use('/api/product',productRoutes);
const cartRoutes = require('./Routes/cart.routes');
app.use('/api/cart',cartRoutes);

app.listen(port,()=>{
    console.log(`Server Start at http://localhost:${port}`);
}); 