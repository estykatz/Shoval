const router = require('express').Router();
const coursesController=require('../controllers/coursesController');

router.get('',coursesController.getCourse);

router.post('',(req,res)=>{
    let course=req.body;
    console.log(course);
    coursesController.addCourse(course);
    res.json(course);
})
module.exports=router;