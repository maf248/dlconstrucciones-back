var express = require('express');
var router = express.Router();

// Importing API Users controller
const usersController = require('../controllers/usersController');

// Importing middleware for protected routes
const adminWebTokenMiddleware = require('../middlewares/adminWebTokenMiddleware');
const selfWebTokenMiddleware = require('../middlewares/selfWebTokenMiddleware');
const registrationValidate = require('../middlewares/registrationValidate');
const profileValidate = require('../middlewares/profileValidate');

/* GET home page. */

router.post('/profile', profileValidate, selfWebTokenMiddleware, usersController.profile);

router.post('/identify', selfWebTokenMiddleware, usersController.identify);

router.post('/login', usersController.login);

router.post('/register', registrationValidate, usersController.register);

router.get('/', adminWebTokenMiddleware, usersController.list);

router.get('/:id', adminWebTokenMiddleware, usersController.detail);

module.exports = router;