const router = require('express').Router();
const paymentController=require('../controllers/paymentController');


router.get('',paymentController.getPayment);
router.post('/addpayment',paymentController.addPayment);
router.post('/sisterandbrother', paymentController.SisterandBrother);
   

module.exports=router;