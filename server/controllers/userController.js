const usersService = require('../services/userConnectService');
//const { connection } = require('..Service/services/Service');
let Connection = require('../services/userService');


const getUser = async (req, res) => {
    try {
        return res.status(200).json({ "userName": "Tamar" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
<<<<<<< HEAD
const CheckUser=async(req, res)=> {
    let name = req.params.user;
    let user=req.body;
    //let pass = req.params.user.password;
    console.log(name);
    usersService.checkIfTheRightUser(user);
    
=======
const CheckUser = async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        let rightuser = await usersService.checkIfTheRightUser(user);
        console.log(rightuser);
        return res.status(200).json(rightuser);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error - try custom message");
    }
    //   return usersService.checkIfTheRightUser(user);

>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
}
const AddUser = (req, res) => {
    console.log('חחח');
    let user = req.body;
    usersService.createUser(user);
}
module.exports = {
    getUser, AddUser, CheckUser
}