var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const batchesController = require("../controllers/batchesController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const batchValidate = require("../middlewares/validation/batchValidate");

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
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Lote" + "_" + Date.now() + path.extname(file.originalname.toLowerCase())
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Batches Routes
router.get("", batchesController.index);
router.get("/:id", batchesController.detail);
router.post(
  "/create",
  adminWebTokenMiddleware,
  upload.single("image"),
  batchValidate,
  batchesController.create
);
router.patch(
  "/edit/:id",
  adminWebTokenMiddleware,
  upload.single("image"),
  batchValidate,
  batchesController.edit
);
router.delete("/delete/:id", adminWebTokenMiddleware, batchesController.delete);

module.exports = router;
