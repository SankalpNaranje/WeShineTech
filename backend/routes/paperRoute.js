const express = require('express');
const paper = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

paper.use(bodyParser.urlencoded({ extended: true }));
paper.use(express.static(path.resolve(__dirname, 'backpublic')));

const Paper = require('../models/Papers')


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

paper.post('/addpaper',  async (req, res) => {
    console.log("reached 1")
    let success = false;
    
    
    try {
        console.log("body",req.body)
      const { pprid, pprsetid, question_id,description,answer,examid } = req.body;
  
      // Create a new contact
      const contact = await Paper.create({
        pprid,
        pprsetid,
        question_id,
        description,
        answer,
        examid
        
      });

      success = true;
      res.json({ success, message: "Contact created successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

  paper.get('/allPapers',async (req, res)=>{
    try{
        
        const allExam = await Paper.find()
        res.json(allExam)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = paper;


