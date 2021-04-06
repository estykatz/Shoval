<<<<<<< HEAD
const attendanceService=require('../services/attendanceService');

const getAttendance=async(req,res)=>{
    try {
        return res.status(200).json({ "attendance": "beggining" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
function addattendance(attendance){
    AttendanceService.createAttendance(attendance);
}
module.exports={
    addAttendance,getAttendance
=======
const attendanceservice = require('../services/attendanceService');



function getListOfStudent() {
    attendanceservice
}
module.exports={
    getListOfStudent
>>>>>>> 5ea2ff208d8f3e0e5ff46ca51286c3068303a73a
}