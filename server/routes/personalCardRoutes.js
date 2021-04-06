const router = require('express').Router();
const personalCardController = require('../controllers/personalCardController');

router.post('/getdetails', personalCardController.getDetails);

module.exports=router;