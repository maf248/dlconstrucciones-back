var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const cashflowsController = require("../controllers/cashflowsController");

// Importing middleware for protected routes
const masterWebTokenMiddleware = require("../middlewares/masterWebTokenMiddleware");

// Importing backend validations
const cashflowValidate = require("../middlewares/validation/cashflowValidate");

// Multer
const fileFilter = (req, file, cb) => {
  const validFormats = [
    ".pdf",
    ".xls",
    ".xlsx",
    ".doc",
    ".docx",
    ".jpg",
    ".jpeg",
    ".png",
  ];
  if (!validFormats.includes(path.extname(file.originalname.toLowerCase()))) {
    return cb(null, false);
  } else {
    cb(null, true);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("private");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Cashflow" +
        "_" +
        Date.now() +
        path.extname(file.originalname.toLowerCase())
    );
  },
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Cashflow Routes
router.post(
  "/create",
  masterWebTokenMiddleware,
  upload.array("cashflow", 10),
  cashflowValidate,
  cashflowsController.create
);
router.patch(
  "/edit/:id",
  masterWebTokenMiddleware,
  upload.single("cashflow"),
  cashflowValidate,
  cashflowsController.edit
);
router.delete("/delete/:id", masterWebTokenMiddleware, cashflowsController.delete);

module.exports = router;
