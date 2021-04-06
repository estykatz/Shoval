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
}