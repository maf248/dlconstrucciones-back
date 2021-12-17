var express = require('express');
var router = express.Router();

// Importing API controllers
const contactController = require('../controllers/contactController');

// Importing backend validations
const contactValidate = require('../middlewares/validation/contactValidate');

// Importing middleware for protected routes
const adminWebTokenMiddleware = require('../middlewares/adminWebTokenMiddleware');

// Contact Routes
router.post('/', contactValidate, contactController.contact);


module.exports = router;