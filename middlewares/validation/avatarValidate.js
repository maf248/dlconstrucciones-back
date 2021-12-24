const { check, body } = require("express-validator");
const path = require("path");
const fs = require("fs");

const ErrorsDir = path.join(__dirname, "..", "data", "catchErrorsLog.json");

module.exports = [
  check("avatar")
    .custom((value, { req }) => {
      switch (req.file.mimetype) {
        case "image/jpg":
          return ".jpg";
        case "image/jpeg":
          return ".jpeg";
        case "image/png":
          return ".png";
        default:
          return false;
      }
    })
    .withMessage("El archivo debe tener formato: jpg jpeg o png"),
];
