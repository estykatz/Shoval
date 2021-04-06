const paymentsservice = require('../services/paymentService');

const getPayment = async (req, res) => {
    try {
        return res.status(200).json({ "payment": "mapal" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
const addPayment = (req, res) => {
    let payment = req.body;
    paymentsservice.createPayment(payment);
    res.json(payment);
}
const SisterandBrother = (req, res) => {
    let p = req.body;
    paymentsservice.SAndB(p);
}

module.exports = {
    addPayment, getPayment, SisterandBrother
}