var express = require("express");
var router = express.Router();

// Importing API controllers
const paymentsController = require("../controllers/paymentsController");

// Importing middleware for protected routes
const masterWebTokenMiddleware = require("../middlewares/masterWebTokenMiddleware");

// Importing backend validations
const paymentCreateValidate = require("../middlewares/validation/paymentCreateValidate");
const paymentEditValidate = require("../middlewares/validation/paymentEditValidate");

// Payment Routes
router.post('/create', masterWebTokenMiddleware, paymentCreateValidate, paymentsController.create);
router.patch('/edit/:id', masterWebTokenMiddleware, paymentCreateValidate, paymentsController.edit);
router.delete('/delete/:id', masterWebTokenMiddleware, paymentsController.delete);

module.exports = router;
