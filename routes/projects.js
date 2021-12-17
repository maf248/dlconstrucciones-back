var express = require('express');
var router = express.Router();

// Importing API controllers
const projectsController = require('../controllers/projectsController');

// Importing middleware for protected routes
const adminWebTokenMiddleware = require('../middlewares/adminWebTokenMiddleware');

// Projects Routes
router.get('/', adminWebTokenMiddleware, projectsController.index);
router.get('/:id', adminWebTokenMiddleware, projectsController.detail);

module.exports = router;