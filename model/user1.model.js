const mongoose = require('mongoose');
const user1Schema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    surename: {
        type: String
    },
    gender: {
        type: String, 
        enum: ['Male', 'Female']
    },
    age: {
        type : Number
    },
    email: {
        type: String  
    },
    mobileNumber: {
        type: Number  
    },
    password: { 
        type:String
        }
        
});