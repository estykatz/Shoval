const paymentsservice = require('../services/paymentService');

const getPayment=async(req,res)=>{
    try {
        return res.status(200).json({ "payment": "mapal" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
function addPayment(payment) {
    paymentsservice.createPayment(payment);
}


module.exports = {
 addPayment,getPayment
}