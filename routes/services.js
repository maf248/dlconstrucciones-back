var express = require('express');
var router = express.Router();

// Importing API controllers
const servicesController = require('../controllers/servicesController');

// Services Routes
router.get('/', servicesController.index);
router.get('/:id', servicesController.detail);

module.exports = router;