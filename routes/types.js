var express = require('express');
var router = express.Router();

// Importing API controllers
const typesController = require('../controllers/typesController');

// Types Routes
router.get('/', typesController.index);
router.get('/:id', typesController.detail);

module.exports = router;