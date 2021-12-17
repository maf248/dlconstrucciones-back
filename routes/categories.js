var express = require('express');
var router = express.Router();

// Importing API controllers
const categoriesController = require('../controllers/categoriesController');

// Categories Routes
router.get('/', categoriesController.index);
router.get('/:id', categoriesController.detail);

module.exports = router;