require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database connection

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
  .then(()=>console.log('DB is Connected....'))
  .catch(err=>console.log(err));

app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./Routes/productTask.routes');
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log('Server running at http://localhost:5295');
});