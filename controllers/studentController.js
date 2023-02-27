const Student = require('/Users/owner/Desktop/M4-Graded-Videos/models/studentModels');
exports.getData = async (req, res) => {
   const student = await Student.find()
   res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
        users
    }
});
};

exports.getDataById = async (req, res) => {
    const {id} = req.params;
   const student = await Student.find({_id: id});
   res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
        users
    }
});
};
//exports.getData = (req, res) => res.send('Hello world! from student GET');

exports.postData = async (req, res) => {
    const newStudent = req. body;
    const student = await Student.create(newStudent);
    
    res.status(201).json({
        status: 'success',
        data: student
    });
};
exports.updatetDatabyId = (req, res) => res.send('Hello world! from student PUT');
exports.patchDatabyId = (req, res) => res.send('Hello world! from student PATCH');
exports.deleteDatabyId = (req, res) => res.send('Hello world! from student DELETE');
