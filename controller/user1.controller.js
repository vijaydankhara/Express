const User = require('../model/user1.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req,res)=>{
try{
    const {firstName,lastName,email,gender,age,password} = req.body;
    let user = await User.findOne({email: email,isdelete: false});
     if(user){
         return res.status(400).json({ message: "User Is Already Registred..."})
     }
     // hash Password
     let hashPassword =  await bcrypt.hash(password,10);
    user = await User.create({
        firstName,  lastName,   email,
        gender,     age,        password
    });
    newUser.save();
    res.status(201).json({user1: newUser, message: 'New User Is Added'});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal Server Error !!!'});
}
}


exports.loginUser = async (req,res) => {
    try{
        let user = await User.findOne({email: req.body.email, isdelete :false});
        if(!user){
            return res.status(404).json({message:'User Is Not Found!'});
        }
        let chaekPassword = await  bcrypt.compare(req.body.password, user.password);
        if (!chaekPassword) {
            return res.status(400).json({ message: 'Password Is Not Match!'})
        }
       let token = jwt.sign({ userId: user._id},'Skill Qode');
       res.status(200).json({token, message: 'Login Successfully'})
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
};


exports.getAllUsers = async(req,res)=>{
    try{
        let users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error !!! "});
    }
};

exports.getUser = async(req,res) =>{
    try{
        let userId = req.query.userId;
        let user = await User.findById(userId);
        // let user = await User.findone({ firstName: userId});
        if (!user) {
            return res.status(404).json({ message: 'User Is Not Found'});
        }
        res.status(200).json(user);
    }catch (error){
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error !!! '})
    }
};



exports.updateUser = async (req,res) => {
try{
    let userId = req.query.userId;
    let user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User Is Not Found'});
    }
    // user = await User.findByIdAndUpdate(user._id,{$set: { req.body }}, {new:true}); 
user = await User.findOneAndUpdate({_id:user._id},{$set: {...req.body }}, {new:true}); 
    res.status(200).json({user, message: 'User Is Updated....'});
}catch (error){
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error !!! '})
}    
};
exports.deleteUser = async(req,res)=>{
    try{
        let userId = req.query.userId;
        let user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User Is Not Found'});
            }
            res.status(200).json(user);
        user = await User.findOneAndDelete({_id:user._id});
        res.status(200).json({user, message: 'User Is Deleted... '});        
        }catch (error){
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error !!! '})
        }

};

