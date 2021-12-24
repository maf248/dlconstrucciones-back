var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const jobsController = require("../controllers/jobsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const jobValidate = require("../middlewares/validation/jobValidate");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Trabajo" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Jobs Routes
router.get('', jobsController.index);
router.get('/:id', jobsController.detail);
router.post('/create', adminWebTokenMiddleware, upload.single('image'), jobValidate, jobsController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, upload.single('image'), jobValidate, jobsController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, jobsController.delete);

module.exports = router;
