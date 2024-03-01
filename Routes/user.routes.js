const express = require('express'); 
const userRoutes = express.Router();
// Require controller modules.
const { 
        addUser,
        getAllUser,
        getUser,
        replaceUser,
        updateUser,
        deleteUser
} = require('../controller/user.controller');
// Create user
userRoutes.post('/',addUser);

// // get all user
// userRoutes.get('/',getAllUser);

// // get single user
userRoutes.get('/single-user',getUser);

// Replace Single user
userRoutes.put('/replace-user',replaceUser);

// Update Single user
userRoutes.patch('/update-user',updateUser);

// Delete Single user 
userRoutes.delete('/delete-user',deleteUser);

module.exports = userRoutes;











