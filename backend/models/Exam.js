const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExamSchema = new Schema({
    examid:{
        type: String,
        required: true,
        unique:true
    },
    examname:{
        type: String,
        required: true
    },
    total_marks:{
        type: String,
        required: true
    },
    time_alloted:{
        type: String,
        required: true
    },
    isactive:{
        type: String,
        required: true
    },
    
  });
  const Exam = mongoose.model('exam', ExamSchema);
  module.exports = Exam;