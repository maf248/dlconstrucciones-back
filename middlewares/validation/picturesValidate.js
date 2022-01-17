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
      return !req.files.some(
        (e) =>
          e.mimetype !== "image/jpg" &&
          e.mimetype !== "image/jpeg" &&
          e.mimetype !== "image/png"
      );
    })
    .withMessage("Los archivos deben tener formato: jpg jpeg o png"),
];
