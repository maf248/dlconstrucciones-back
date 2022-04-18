var express = require("express");
var router = express.Router();
const path = require("path");

// Importing API controllers
const projectsController = require("../controllers/projectsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");
const selfWebTokenMiddleware = require("../middlewares/selfWebTokenMiddleware");

// Importing backend validations
const projectValidate = require("../middlewares/validation/projectValidate");


// Projects Routes
router.get("/", adminWebTokenMiddleware, projectsController.index);
router.get("/:id", adminWebTokenMiddleware, projectsController.detail);
router.post(
  "/create",
  adminWebTokenMiddleware,
  projectValidate,
  projectsController.create
);
router.patch(
  "/edit/:id",
  adminWebTokenMiddleware,
  projectValidate,
  projectsController.edit
);
router.delete(
  "/delete/:id",
  adminWebTokenMiddleware,
  projectsController.delete
);
router.get(
  "/cashflow/:file",
  selfWebTokenMiddleware,
  projectsController.cashflow
);
router.get("/assets/:file", selfWebTokenMiddleware, projectsController.assets);

module.exports = router;
