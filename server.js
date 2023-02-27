const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


//routes
const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRouter = require('./routes/gradeRouter');
app.use('/grade', gradeRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//Connecting to the database
const mongoose = require('mongoose');

//Syncronous connection
//mongoose.connect('mongodb://localhost:27017/StudentDB', {userNewUrlParser: true}, (err) => {
//    if (!err) {console.log('MongoDB Connection succeeded')}
//    else (console.log('Error in DB Connection : '+ err)}
//});

//asynchronus connection
mongoose.connect('mongodb+srv://user:test@cluster0.gcyik1w.mongodb.net/demodb', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.error(err));



