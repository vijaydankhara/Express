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
    
    password: { 
        type:String
        }
        
});

module.exports = mongoose.model('users', user1Schema);