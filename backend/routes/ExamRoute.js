const express = require('express');
const exam = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

exam.use(bodyParser.urlencoded({ extended: true }));
exam.use(express.static(path.resolve(__dirname, 'backpublic')));

const Exam = require('../models/Exam')


// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const userController = require('../controllers/userControllers');

const fetchUser = require('../middleware/fetchUser');

exam.post('/addexam',  async (req, res) => {
    console.log("reached 1")
    let success = false;
    
    
    try {
        console.log("body",req.body)
      const { examid, examname, total_marks,time_alloted,isactive } = req.body;
  
      // Create a new contact
      const contact = await Exam.create({
        examid,
        examname,
        total_marks,
        time_alloted,
        isactive
        
      });

      success = true;
      res.json({ success, message: "Contact created successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

  exam.get('/allExams',async (req, res)=>{
    try{
        
        const allExam = await Exam.find()
        res.json(allExam)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = exam;


