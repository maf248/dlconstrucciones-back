var express = require('express');
var router = express.Router();

// Importing API Users controller
const usersController = require('../controllers/usersController');

// Importing middleware for protected routes
const adminWebTokenMiddleware = require('../middlewares/adminWebTokenMiddleware');
const registrationValidate = require('../middlewares/registrationValidate');
const profileValidate = require('../middlewares/profileValidate');

/* GET home page. */
router.get('/', adminWebTokenMiddleware, usersController.list);

router.get('/:id', adminWebTokenMiddleware, usersController.detail);

router.post('/profile', profileValidate, usersController.profile);

router.post('/login', usersController.login);

router.post('/register', registrationValidate, usersController.register);

module.exports = router;
