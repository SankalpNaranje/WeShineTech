const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();


const app = express()
const port = 5000

// var userRoute = require('./routes/userRoute');



app.use(cors());

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/Candidate_info',require('./routes/Candidate_info'));
app.use('/api/userRoute',require('./routes/userRoute'));
app.use('/api/ExamRoute',require('./routes/ExamRoute'));
app.use('/api/paperRoute',require('./routes/paperRoute'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})