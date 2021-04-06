const router = require('express').Router();
const studentController = require('../controllers/studentController');


router.get('/table',studentController.getStudent);
router.get('/getlevel',studentController.getLevelAndPrice);
router.post('/addstudent', studentController.addStudent);
router.post('/getphone',studentController.getStudentsPhone);
module.exports = router;