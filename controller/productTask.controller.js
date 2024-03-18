const ProductServices = require('../services/product.service');
const ProductService = new ProductServices();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

exports.addProducts = async(req, res) => {
    let product = await productService.getProduct({title: req.body.title, isDelete: false})
        if(product){
return res.json({message: 'Product Is Alredy Exist...'});
        }
        product = await productService.addNewProducts({...res.body});
        res.status(201).json({product, meassage : `Product Added SuccesFully`}) 
}; 

exports.getAllProducts = async(req, res) => {
        let products = await productService.getAllProducts({isDelete: false});
        res.status(500).json(products);
}

exports.getProduct = async(req, res) => {
    const id = req.query.id;
        let product = await productService.getAllProducts({_id: id, isDelete: false});        
        res.status(200).json(product);
};

exports.updateProduct = async(req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : `No Product Found With the Given Id.`});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {$set : { ...req.body}}, { new : true});
        res.status(200).json({product,message : `Product Updated SuccesFully`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
};

exports.deleteProduct = async(req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : `No Product Found With The Given Id.`});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {isDelete: true},{new : true});
        res.status(200).json({product,message : `This Product will be Deleted.`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
}