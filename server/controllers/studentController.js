const studentService = require('../services/studentService');

const getStudent = async (req, res) => {
    try {
        const allStudents = await studentService.getAllStudents();
        console.log(allStudents);
        return res.status(200).json(allStudents);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
const getLevelAndPrice = async (req, res) => {
    try {
        const levelsAndPrice = await studentService.getLevelandPrice();
        console.log(levelsAndPrice);
        return res.status(200).json(levelsAndPrice);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
const getStudentsPhone = async (req, res) => {
    try {
        const phone = req.body;
        const studentsPhone = await studentService.getStudentsPhone(phone);
        return res.status(200).json(studentsPhone);
    }
    catch {
        return res.status(500).send("Internal Server Error");
    }
}
const addStudent = (req, res) => {
    let student = req.body;
    studentService.createStudent(student);
}
module.exports = {
    getStudent, addStudent, getStudentsPhone,
    getLevelAndPrice
}