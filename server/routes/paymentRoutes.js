const router = require('express').Router();
const paymentController=require('../controllers/paymentController');

router.get('',paymentController.getPayment);

router.post('',(req,res)=>{
    let payment=req.body;
    console.log(payment);
    paymentController.addPayment(payment);
    res.json(payment);
})
module.exports=router;