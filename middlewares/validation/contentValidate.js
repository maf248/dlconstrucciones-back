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
  check("subtitle")
    .isLength({ min: 5 })
    .optional()
    .withMessage("El subtitulo debe contener al menos 5 carateres"),
  check("subtitle")
    .custom((value, { req }) => {
      if (req.body.subtitle || req.body.text) {
        console.log('tiene alguno de los dos')
        return true;
      } else {
        console.log('NO tiene alguno de los dos')
        return false;
      }
    })
    .withMessage("Debes ingresar o subtitulo o texto para crear un contenido"),
  check("text")
    .isLength({ min: 10 })
    .optional()
    .withMessage("El texto debe contener al menos 10 carateres"),
  check("text")
    .custom((value, { req }) => {
      if (req.body.subtitle || req.body.text) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Debes ingresar o subtitulo o texto para crear un contenido"),
];
