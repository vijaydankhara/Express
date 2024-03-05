const express = require('express');
const user1 = express();
const port = 5295;
const morgan = require('morgan');
const mongoose = require('mongoose');
async function main (){
    await mongoose.connect('mongodb://127.0.0.1:27017/user1info');
}

main()
.then(()=>console.log('DB Is Connected.....'))
.catch(err => console.log(err));

user1.use(express.json());
user1.use(morgan('dev'));

const userRoutes = require('./Routes/user1.routes');
user1.use('/api/user',userRoutes)

user1.listen(port,()=>{
    console.log('server start at http://localhost:5295');
});


