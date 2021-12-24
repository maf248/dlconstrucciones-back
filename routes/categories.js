var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const categoriesController = require("../controllers/categoriesController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const categoryValidate = require("../middlewares/validation/categoryValidate");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Category" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Categories Routes
router.get('/', categoriesController.index);
router.get('/:id', categoriesController.detail);
router.post('/create', adminWebTokenMiddleware, upload.single('image'), categoryValidate, categoriesController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, upload.single('image'), categoryValidate, categoriesController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, categoriesController.delete);

module.exports = router;
