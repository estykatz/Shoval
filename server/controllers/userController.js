// const usersService = require('../services/UsersService');


const getUser = async (req, res) => {
    try {
        return res.status(200).json({"userName": "Tamar" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getUser 
}