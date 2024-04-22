const mongoose = require('mongoose');
const { Schema } = mongoose;

const Candidate_info_Schema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    aadhar:{
        type:[String]
    },
    images: {
        type:[String]
    },

})

const Candidate_Information = mongoose.model("Candidate_info", Candidate_info_Schema);
module.exports = Candidate_Information;