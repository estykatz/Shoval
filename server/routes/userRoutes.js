const router = require('express').Router();

const usersController = require('../controllers/userController');

//router.get('', usersController.getUser);
router.get('', usersController.AddUser('tzipora','323','esrtr@gmail.com'));

module.exports = router;
