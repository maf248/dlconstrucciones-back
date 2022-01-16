const { check, body } = require("express-validator");
const path = require("path");
const fs = require("fs");
const db = require("../../db/models");

const ErrorsDir = path.join(__dirname, "..", "data", "catchErrorsLog.json");

module.exports = [
  check("serviceId")
    .isNumeric()
    .custom(async function (value, { req }) {
      let service;
      try {
        service = await db.Service.findOne({
          where: {
            id: req.body.serviceId,
          },
        });
        if (service) {
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage(
      "El service id debe ser numerico, y tiene que existir en la base de datos"
    ),
  check("pictures")
    .custom((value, { req }) => {
      if (
        req.file.mimetype === "image/jpg" ||
        req.file.mimetype === "image/jpeg" ||
        req.file.mimetype === "image/png"
      ) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("El archivo debe tener formato: jpg jpeg o png"),
];
