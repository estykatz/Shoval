const router = require('express').Router();
const coursesController=require('../controllers/coursesController');

router.get('',coursesController.getCourse);

router.post('',coursesController.addCourse);
  
    
    

module.exports=router;