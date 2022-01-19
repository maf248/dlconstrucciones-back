var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const servicesController = require("../controllers/servicesController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const serviceValidate = require("../middlewares/validation/serviceValidate");

// Multer
const fileFilter = (req, file, cb) => {
  const validFormats = [".jpg", ".jpeg", ".png"];
  if (!validFormats.includes(path.extname(file.originalname))) {
    return cb(null, false);
  } else {
    cb(null, true);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Servicio" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Services Routes
router.get("/", servicesController.index);
router.get("/:id", servicesController.detail);
router.post(
  "/create",
  adminWebTokenMiddleware,
  upload.single("image"),
  serviceValidate,
  servicesController.create
);
router.patch(
  "/edit/:id",
  adminWebTokenMiddleware,
  upload.single("image"),
  serviceValidate,
  servicesController.edit
);
router.delete(
  "/delete/:id",
  adminWebTokenMiddleware,
  servicesController.delete
);

module.exports = router;
