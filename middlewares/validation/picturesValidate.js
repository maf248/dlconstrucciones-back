const { check, body } = require("express-validator");
const path = require("path");
const fs = require("fs");

const ErrorsDir = path.join(__dirname, "..", "data", "catchErrorsLog.json");

module.exports = [
  check("pictures")
    .custom((value, { req }) => {
      console.log(req.files);
      req.files.forEach((element) => {
        if (
          element.mimetype !== "image/jpg" ||
          element.mimetype !== "image/jpeg" ||
          element.mimetype !== "image/png"
        ) {
          console.log("Falla");
          return false;
        }
      });
      console.log("Pasa");
      return true;
    })
    .withMessage("Los archivos deben tener formato: jpg jpeg o png"),
];
