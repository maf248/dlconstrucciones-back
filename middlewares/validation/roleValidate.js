const { check } = require("express-validator");
const path = require("path");

const ErrorsDir = path.join(__dirname, "..", "data", "catchErrorsLog.json");

module.exports = [
  check("role")
    .notEmpty()
    .isIn(["user", "admin"])
    .withMessage("El rol debe ser USER o ADMIN"),
];
