var express = require("express");
var router = express.Router();

// Importing API controllers
const paymentsController = require("../controllers/paymentsController");

// Importing middleware for protected routes
const masterWebTokenMiddleware = require("../middlewares/masterWebTokenMiddleware");

// Importing backend validations
const paymentCreateValidate = require("../middlewares/validation/paymentCreateValidate");
const paymentEditValidate = require("../middlewares/validation/paymentCreateValidate");

// Payment Routes
router.post('/create', masterWebTokenMiddleware, paymentCreateValidate, paymentsController.create);
router.patch('/edit/:id', masterWebTokenMiddleware, paymentEditValidate, paymentsController.edit);
router.delete('/delete/:id', masterWebTokenMiddleware, paymentsController.delete);

module.exports = router;
