var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const assetsController = require("../controllers/assetsController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const assetValidate = require("../middlewares/validation/assetValidate");

// Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let dirImage = path.join("private");
      return cb(null, dirImage);
    },
    filename: function (req, file, cb) {
      return cb(
        null,
        "Asset-proyecto" + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({ storage: storage });

// Asset Routes
router.post('/create', adminWebTokenMiddleware, upload.single("asset"), assetValidate, assetsController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, upload.single("asset"), assetValidate, assetsController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, assetsController.delete);

module.exports = router;