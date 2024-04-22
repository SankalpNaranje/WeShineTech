const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaperSchema = new Schema({
    pprid: {
        type: String,
        required: true
    },
    pprsetid: {
        type: String,
        required: true
    },
    question_id: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    examid: { // Reference to Exam model's examid
        type:String, // This should match the name used when defining the Exam model
        required: true
    }
});

const Paper = mongoose.model('paper', PaperSchema);
module.exports = Paper;
