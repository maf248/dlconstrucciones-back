var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const picturesController = require("../controllers/picturesController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const serviceValidate = require("../middlewares/validation/serviceValidate");
const picturesValidate = require("../middlewares/validation/picturesValidate");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Servicio-picture" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Pictures Routes
router.post(
  "/create",
  adminWebTokenMiddleware,
  upload.any("pictures"),
  picturesValidate,
  picturesController.picturesCreate
);
// router.patch('/edit/:id', adminWebTokenMiddleware, upload.single('image'), serviceValidate, picturesController.picturesEdit);
// router.delete('/delete/:id', adminWebTokenMiddleware, picturesController.picturesDelete);

module.exports = router;
