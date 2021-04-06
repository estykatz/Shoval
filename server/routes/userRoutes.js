const router = require('express').Router();

const usersController = require('../controllers/userController');
<<<<<<< HEAD
router.get('/login',usersController.CheckUser);
//router.get('/checkuser/:user',usersController.CheckUser);
=======
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
router.get('', usersController.getUser);
router.post('/login', usersController.CheckUser);
router.post('/adduser',  usersController.AddUser);

module.exports = router;
