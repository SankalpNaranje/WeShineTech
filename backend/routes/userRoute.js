const express = require('express');
const user = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname, 'backpublic')));
const ExamUser = require('../models/User');
const Exam = require('../models/Exam')
// const app = express();
// app.use(bodyParser.json());

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
// const User = require('../models/User');
const fetchUser = require('../middleware/fetchUser');

// Handle file upload
user.post('/importuser', upload.single('file'), (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ success: false, msg: "No file uploaded" });
    }
    next(); // Pass control to the next middleware
}, userController.importUser);


user.post('/addcandidate',  async (req, res) => {
    console.log("reached 1")
    let success = false;
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ success, errors: errors.array() });
    // }
    
    try {
        console.log("body",req.body)
      const { name, rollno, prn,password } = req.body;
  
      // Create a new contact
      const contact = await ExamUser.create({
        name,
        rollno,
        prn,
        password,
        
      });

  
      // Send contact email
    //   sendContactEmail(name, email, message,mobileNumber, req.user.id, req);
  
      success = true;
      res.json({ success, message: "Contact created successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });


module.exports = user;


