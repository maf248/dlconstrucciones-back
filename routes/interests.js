var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const interestsController = require("../controllers/interestsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const interestValidate = require("../middlewares/validation/interestValidate");

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
      "Interes" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Interests Routes
router.get("/", interestsController.index);
router.get("/:id", interestsController.detail);
router.post(
  "/create",
  adminWebTokenMiddleware,
  upload.single("image"),
  interestValidate,
  interestsController.create
);
router.patch(
  "/edit/:id",
  adminWebTokenMiddleware,
  upload.single("image"),
  interestValidate,
  interestsController.edit
);
router.delete(
  "/delete/:id",
  adminWebTokenMiddleware,
  interestsController.delete
);

module.exports = router;
