const express = require("express");
const userRoutes = express.Router();
const {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/user1.controller");

userRoutes.post("/add-user", addUser);
userRoutes.get("/get-all-users",getAllUsers);
userRoutes.get("/get-user",getUser);
userRoutes.put("/update-user",updateUser);
userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;
