const router = require('express').Router();
const studentController=require('../controllers/studentController');

router.get('',studentController.getStudent);

router.post('',(req,res)=>{
    let student=req.body;
    console.log(student);
    studentController.addStudent(student);
    res.json(student);
})

module.exports=router;