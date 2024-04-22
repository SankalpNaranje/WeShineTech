const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Candidate_Information = require("../models/Candidate_information");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const fetchUser = require('../middleware/fetchUser');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ limit: '10mb' }); 


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if(file.mimetype === 'image/jpeg'|| file.mimetype ==='image/png'){
            cb(null, 'public/Profile_images');
        }
        else{
            cb(null , 'public/Aadhar_images');
        }
    },
    filename: function (req, file, cb) {
        const name = Date.now()+'-'+file.originalname;  
        cb(null, name);
    }
});

const fileFilter = (req , file , cb) => {
    if(file.fieldname === "images"){
        (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') ?cb(null, true):cb(null , false); 
    }else if(file.fieldname === "aadhar"){
        (file.mimetype === 'application/pdf')?cb(null,true):cb(new Error('Invalid File type! Only pdf is allowed'),false);
    }
}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter
}).fields([{name : 'images' , maxCount:1}  , {name:'aadhar',maxCount:1}]);

router.post('/add-candidate', upload, async (req, res) => {
    try {
        const { name, email, DOB, phoneNumber, address } = req.body;
        const images = (req.files['images'] && req.files['images'].length > 0) ? req.files['images'].map(file => file.filename) : [];
        const aadharFiles = (req.files['aadhar'] && req.files['aadhar'].length > 0) ? req.files['aadhar'].map(file => file.filename) : [];

        const candidate = new Candidate_Information({ name, email, DOB, phoneNumber, address, images, aadhar: aadharFiles });
        await candidate.save();
        
        res.status(200).json({ message: 'Candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});




module.exports = router
