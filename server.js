const express = require('express');
const server = express();
const ejs = require('ejs');
const path = require('path');

server.set ( 'view engine', 'ejs' );

server.get('/student',(req,res)=>{
    let data = {
        name: "Virat", 
        country:"India", 
        city :"Delhi",
        skills : ["Batting","Bowling"],
        age:23
      }
    res.render("student",data);
});

app.listen(1111,()=>{
    console.log(`Server Start at http://localhost:1111`);
})