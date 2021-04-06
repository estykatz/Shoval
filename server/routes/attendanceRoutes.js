const router = require('express').Router();
<<<<<<< HEAD
=======
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
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
const attendanceController=require('../controllers/attendanceController');


router.get('',attendanceController.getListOfStudent);

<<<<<<< HEAD
=======
>>>>>>> 5ea2ff208d8f3e0e5ff46ca51286c3068303a73a
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
module.exports=router;