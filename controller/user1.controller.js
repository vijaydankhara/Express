const User = require('../model/user1.model');
exports.addUser = async (req,res)=>{
try{
    const {firstName,lastName,surename,gender,age,password} = req.body;
    console.log(req.body);
    let newUser = await User.create({
        firstName,
        lastName,
        surename,
        gender,
        age,
        password
    });
    newUser.save();
    res.status(201).json({user1: newUser, message: 'New User Is Added'});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal Server Error !!!'});
}
}