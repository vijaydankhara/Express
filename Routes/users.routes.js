const express = require('express');
const userRoutes = express.Router();
const { upload } =require('../helpers/imageUpload');
const { verifyToken } = require('../helpers/verifyToken');

const { 
        // addUsers,
        registerUser,
        loginUser, 
        getAllUsers, 
        getUser, 
        updateUser, 
        deleteUser,
        addNewUser
} = require('../controller/users.controller');

// userRoutes.post('/add-user', addUsers);

userRoutes.post('/register-user', registerUser);

userRoutes.post('/login-user', loginUser);

userRoutes.get('/getAll-users',verifyToken, getAllUsers);

userRoutes.get('/get-user',verifyToken, getUser);

userRoutes.put('/update-user',verifyToken, updateUser);

userRoutes.delete('/delete-user',verifyToken, deleteUser);

userRoutes.post('/add-user', upload.single('profileImage'), addNewUser);

module.exports = userRoutes;