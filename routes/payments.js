var express = require("express");
var router = express.Router();

// Importing API controllers
const paymentsController = require("../controllers/paymentsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const paymentValidate = require("../middlewares/validation/paymentValidate");

// Payment Routes
router.post('/create', adminWebTokenMiddleware, paymentValidate, paymentsController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, paymentValidate, paymentsController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, paymentsController.delete);

module.exports = router;
