const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema1 = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User1 = mongoose.model('user1', UserSchema1);
  module.exports = User1;