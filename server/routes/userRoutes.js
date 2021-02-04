const router = require('express').Router();

const usersController = require('../controllers/userController');
router.get('', usersController.getUser);
router.post('/login', usersController.CheckUser);
router.post('/adduser',  usersController.AddUser);

module.exports = router;
