const studentService=require('../services/studentService');

const getStudent=async(req,res)=>{
    try {
        return res.status(200).json({ "student": "moishi" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
function addStudent(student){
    studentService.createStudent(student);
}
module.exports={
    getStudent,addStudent
}