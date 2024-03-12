require('dotenv').config();
const express = require('express');
const user1 = express();
const port = process.env.PORT;
const morgan = require('morgan');
const mongoose = require('mongoose');
async function main (){
    await mongoose.connect(process.env.MONGO_DB_URL);
}

main()
.then(()=>console.log('DB Is Connected.....'))
.catch(err => console.log(err));

user1.use(express.json());
user1.use(morgan('dev'));

const userRoutes = require('./Routes/user1.routes');
user1.use('/api/user',userRoutes)

const productRoutes = require('./Routes/productTask.routes');
user1.use('/api/products', productRoutes);


user1.listen(port,()=>{
    console.log('server start at http://localhost:${port}');
});


