var express = require("express");
var router = express.Router();

// Importing API controllers
const paymentsController = require("../controllers/paymentsController");

// Importing middleware for protected routes
const masterWebTokenMiddleware = require("../middlewares/masterWebTokenMiddleware");

// Importing backend validations
const paymentValidate = require("../middlewares/validation/paymentValidate");

// Payment Routes
router.post('/create', masterWebTokenMiddleware, paymentValidate, paymentsController.create);
router.patch('/edit/:id', masterWebTokenMiddleware, paymentValidate, paymentsController.edit);
router.delete('/delete/:id', masterWebTokenMiddleware, paymentsController.delete);

module.exports = router;
