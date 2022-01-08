const { check, body } = require("express-validator");
const db = require("../../db/models");

module.exports = [
  check("projects_id")
    .isNumeric()
    .custom(async function (value, { req }) {
      let project;
      try {
        project = await db.Project.findOne({
          where: {
            id: req.body.projects_id,
          },
        });
        if (project) {
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage(
      "El project id debe ser numerico, y tiene que existir en la base de datos"
    ),
  check("amount")
    .isNumeric()
    .isInt({ gt: -1 })
    .withMessage("El pago debe ser numerico y mayor a 0"),
  check("receipt")
    .isLength({
      min: 5,
    })
    .optional()
    .withMessage("El recibo debe tener minimo 5 caracteres"),
  check("datetime")
    .isISO8601()
    .toDate()
    .withMessage(
      "La fecha debe tener el formato adecuado, ejemplo => 2022-01-08 15:25:00"
    ),
];