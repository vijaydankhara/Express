/***************** DAY 1 ********************/
// const express = require("express");
// const server = express();     // Server Create
// // const PORT = 1143;

// server.get("/",(req,res)=>{
//     res.end("Welcom  to  Express.js");
// });

// server.get("/user",(req,res)=>{
//     res.end("Welcome to user");
// });

// server.get("/product",(req,res)=>{
//     res.end("Welcome to Product");
// });


// server.listen(1143,()=>{
//     console.log(`Server  is running at http://localhost:1143`);
// });


/***************** DAY 2 ********************/

const express = require('express');
const server = express();
const path = require('path');

server.post('/',(req,res)=>{
    res.send('Post Method');
});
server.get('/',(req,res)=>{
    res.end('Welcome To Express.JS');
});
server.put('/',(req,res)=>{
    res.status(400).json({message: 'Put Method Call'});
});
server.patch('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'abc.txt'));
});
server.delete('/',(req,res)=>{
    res.sendStatus(201);
});

server.listen(1143,()=>{
    console.log(`Server  is running at http://localhost:1143`);
});