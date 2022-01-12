var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const projectsController = require("../controllers/projectsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");
const selfWebTokenMiddleware = require("../middlewares/selfWebTokenMiddleware");

// Importing backend validations
const projectValidate = require("../middlewares/validation/projectValidate");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("private");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Cashflow" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Projects Routes
router.get('/', adminWebTokenMiddleware, projectsController.index);
router.get('/:id', adminWebTokenMiddleware, projectsController.detail);
router.post('/create', adminWebTokenMiddleware, upload.single('cashflow'), projectValidate, projectsController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, upload.single('cashflow'), projectValidate, projectsController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, projectsController.delete);
router.get('/cashflow/:file', selfWebTokenMiddleware, projectsController.cashflow);
router.get('/assets/:file', selfWebTokenMiddleware, projectsController.assets);

module.exports = router;
