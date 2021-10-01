var express = require('express');
var router = express.Router();

// Importing API controller
const usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', usersController.index);

module.exports = router;
