const router = require('express').Router();

const usersController = require('../controllers/userController');

router.get('', usersController.getUser);

module.exports = router;
