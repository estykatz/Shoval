const router = require('express').Router();

const usersController = require('../controllers/userController');
router.get('/login',usersController.CheckUser);
//router.get('/checkuser/:user',usersController.CheckUser);
router.get('', usersController.getUser);

    
    

//router.get('', usersController.AddUser('tzipora','323','esrtr@gmail.com'));
router.post('', (req, res) => {
    let user = req.body;
    console.log(user);
    usersController.AddUser(user);
    res.json(user);
})
module.exports = router;
