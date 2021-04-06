const emailService = require('../services/emailService');

const addEmail = async (req, res) => {
    try {
        const email = req.body;
        console.log(email);
        const message = await emailService.addEmail(email);
        return res.status(200).json(message);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
module.exports = {
    addEmail
}