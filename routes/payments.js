var express = require("express");
var router = express.Router();

// Importing API controllers
const paymentsController = require("../controllers/paymentsController");

// Importing middleware for protected routes
const masterWebTokenMiddleware = require("../middlewares/masterWebTokenMiddleware");

// Importing backend validations
const paymentCreationValidate = require("../middlewares/validation/paymentCreationValidate");
const paymentEditionValidate = require("../middlewares/validation/paymentEditionValidate");

// Payment Routes
router.post('/create', masterWebTokenMiddleware, paymentCreationValidate, paymentsController.create);
router.patch('/edit/:id', masterWebTokenMiddleware, paymentEditionValidate, paymentsController.edit);
router.delete('/delete/:id', masterWebTokenMiddleware, paymentsController.delete);

module.exports = router;
