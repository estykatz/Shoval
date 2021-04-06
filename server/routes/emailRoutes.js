const router = require('express').Router();
const emailController=require('../controllers/emailController');

router.post('/add',emailController.addEmail);

module.exports=router;