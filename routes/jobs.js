var express = require('express');
var router = express.Router();

// Importing API controllers
const jobsController = require('../controllers/jobsController');

// Jobs Routes
router.get('', jobsController.index);
router.get('/:id', jobsController.detail);

module.exports = router;