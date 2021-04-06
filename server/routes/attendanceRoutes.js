const router = require('express').Router();
const AttendanceController=require('../controllers/AttendanceController');

router.get('',AttendanceController.getAttendance);

router.post('',(req,res)=>{
    let Attendance=req.body;
    console.log(Attendance);
    AttendanceController.addAttendance(Attendance);
    res.json(Attendance);
})
module.exports=router;