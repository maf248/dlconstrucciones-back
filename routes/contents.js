var express = require("express");
var router = express.Router();

// Importing API controllers
const contentsController = require("../controllers/contentsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const contentValidate = require("../middlewares/validation/contentValidate");

// Contents Routes
router.post('/create', adminWebTokenMiddleware, contentValidate, contentsController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, contentValidate, contentsController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, contentsController.delete);

module.exports = router;
