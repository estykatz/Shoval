const router = require('express').Router();
const attendanceController=require('../controllers/attendanceController');


router.get('',attendanceController.getListOfStudent);

module.exports=router;