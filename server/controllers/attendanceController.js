<<<<<<< HEAD
=======
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
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
const attendanceservice = require('../services/attendanceService');



function getListOfStudent() {
    attendanceservice
}
module.exports={
    getListOfStudent
<<<<<<< HEAD
=======
>>>>>>> 5ea2ff208d8f3e0e5ff46ca51286c3068303a73a
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
}