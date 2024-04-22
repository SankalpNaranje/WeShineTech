const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SyncSchema = new Schema({
    examid:{
        type:String,
        
    },
    prn: {
        type: String,
        
    },
    password: {
        type: String,
       
    },
    user_isactive: {
        type: Boolean,
        
    },
    total_marks: {
        type: String,
        
    },
    time_alloted: {
        type: String,
        
    },
    exam_isactive:{
        type:Boolean,
        
    },

    
});

const Sync = mongoose.model('sync', SyncSchema);
module.exports = Sync;
