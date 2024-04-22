const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rollno:{
        type: String,
        required: true
    },
    prn:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;