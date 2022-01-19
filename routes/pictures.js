var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const picturesController = require("../controllers/picturesController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const picturesValidate = require("../middlewares/validation/picturesValidate");
const pictureValidate = require("../middlewares/validation/pictureValidate");

// Multer
const fileFilter = (req, file, cb) => {
  const validFormats = [".jpg", ".jpeg", ".png"];
  if (!validFormats.includes(path.extname(file.originalname.toLowerCase()))) {
    return cb(null, false);
  } else {
    cb(null, true);
  }
};
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Servicio-picture" +
        "_" +
        Date.now() +
        path.extname(file.originalname.toLowerCase())
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Pictures Routes
router.post(
  "/create",
  adminWebTokenMiddleware,
  upload.array("pictures", 10),
  picturesValidate,
  picturesController.create
);
router.patch(
  "/edit/:id",
  adminWebTokenMiddleware,
  upload.single("pictures"),
  pictureValidate,
  picturesController.edit
);
router.delete(
  "/delete/:id",
  adminWebTokenMiddleware,
  picturesController.delete
);

module.exports = router;
