
exports.getData = (req, res) => {
    //data from database
    const data = {
        subject: 'IFT 458',
        grade: "A",
        date: '01/01/1990'
    }
    res.send(`Hello world! from student GET ${JSON.stringify(data)}`)
};
exports.getData = (req, res) => res.send('Hello world! from student GET');
exports.postData = (req, res) => res.send('Hello world! from student POST');
exports.putData = (req, res) => res.send('Hello world! from student PUT');
exports.deleteData = (req, res) => res.send('Hello world! from student DELETE');
