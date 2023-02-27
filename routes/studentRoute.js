
const express = require('express');
const router = express.Router();
const studentController = require('/Users/owner/desktop/M4-Graded-Videos/controllers/studentController');

router.route('/')
    .get(studentController.getData)
    .post(studentController.postData)

router.route('/:id')
    .get(studentController.getDataId)
    .post(studentController.postDataId)
    .put(studentController.updateDataId)
    .delete(studentController.deleteDataId); 
module.exports = router;



//app.get('/', (req, res) => res.send('Hello World! this is my first node app'));
//app.get('/student', (req, res) => res.send('Hello World! from student'));
//app.get('/student/grade', (req, res) => res.send('Hello World! from student grades'));
