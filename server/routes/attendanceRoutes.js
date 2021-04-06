const router = require('express').Router();
<<<<<<< HEAD
const AttendanceController=require('../controllers/AttendanceController');

router.get('',AttendanceController.getAttendance);

router.post('',(req,res)=>{
    let Attendance=req.body;
    console.log(Attendance);
    AttendanceController.addAttendance(Attendance);
    res.json(Attendance);
})
=======
const attendanceController=require('../controllers/attendanceController');


router.get('',attendanceController.getListOfStudent);

>>>>>>> 5ea2ff208d8f3e0e5ff46ca51286c3068303a73a
module.exports=router;