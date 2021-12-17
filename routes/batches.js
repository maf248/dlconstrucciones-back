var express = require('express');
var router = express.Router();

// Importing API controllers
const batchesController = require('../controllers/batchesController');

// Importing middleware for protected routes
const adminWebTokenMiddleware = require('../middlewares/adminWebTokenMiddleware');

// Importing backend validations
const batchValidate = require('../middlewares/validation/batchValidate');

// Batches Routes
router.get('', batchesController.index);
router.get('/:id', batchesController.detail);
router.patch('/edit/:id/', adminWebTokenMiddleware, batchValidate, batchesController.edit);

module.exports = router;