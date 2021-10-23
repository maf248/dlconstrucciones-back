var express = require('express');
var router = express.Router();

// Importing API controllers
const indexController = require('../controllers/indexController');
const interestsController = require('../controllers/interestsController');
const servicesController = require('../controllers/servicesController');
const typesController = require('../controllers/typesController')
const jobsController = require('../controllers/jobsController');
const batchesController = require('../controllers/batchesController');
const contactController = require('../controllers/contactController');


router.get('/interests', interestsController.index);

router.get('/services', servicesController.index);

router.get('/services/:id', servicesController.detail);

router.get('/types/', typesController.index);

router.get('/types/:id', typesController.detail);

router.get('/jobs', jobsController.index); // generar /:id

router.get('/jobs/:id', jobsController.detail);

router.get('/batches', batchesController.index); // generar /:id agregar array de imagenes en detalle de servicio

// generar endpoint get /categories pa' el Tobi

router.get('/contact', contactController.index);

router.get('/', indexController.index);


module.exports = router;
