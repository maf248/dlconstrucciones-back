var express = require('express');
var router = express.Router();

// Importing API controllers
const interestsController = require('../controllers/interestsController');

// Interests Routes
router.get('/', interestsController.index);

module.exports = router;