const { check, body } = require("express-validator");
const db = require("../../db/models");

module.exports = [
  check("title")
    .isLength({
      min: 3,
    })
    .withMessage("El titulo debe contener al menos 3 carateres"),
  check("image")
    .optional()
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
