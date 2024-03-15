const express = require('express');
const orderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const{
    newOrder,
    getAllOrders
} =require('../controller/order.controller');

orderRoutes.post('/add-order', verifyToken,newOrder);
orderRoutes.get('/getAll-orders', verifyToken,getAllOrders);


module.exports = orderRoutes;