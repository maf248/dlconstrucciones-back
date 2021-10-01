var express = require('express');
var router = express.Router();

// Importing API controllers
const indexController = require('../controllers/indexController');
const interestsController = require('../controllers/interestsController');
const servicesController = require('../controllers/servicesController');
const jobsController = require('../controllers/jobsController');
const batchesController = require('../controllers/batchesController');
const contactController = require('../controllers/contactController');


router.get('/interests', interestsController.index);

router.get('/services', servicesController.index);

router.get('/jobs', jobsController.index);

router.get('/batches', batchesController.index);

router.get('/contact', contactController.index);

router.get('/', indexController.index);


module.exports = router;
