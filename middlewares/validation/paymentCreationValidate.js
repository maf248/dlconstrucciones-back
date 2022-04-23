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
  check("coin")
    .notEmpty()
    .isIn(["USD", "ARS"])
    .withMessage("La moneda debe ser USD o ARS"),
  check("cotizacionUsd")
    .custom((value, { req }) => {
      if (req.body.cotizacionUsd >= 0.01) {
        return true;
      }
      return false;
    })
    .optional()
    .withMessage("El amount debe ser numerico y mayor a 0.01"),
  check("cotizacionUsd")
    .custom((value, { req }) => {
      if (req.body.amount >= 0.01) {
        return true;
      }
      return false;
    })
    .withMessage("La cotización debe ser numerica y mayor a 0.01"),
  check("amount")
    .custom(async function (value, { req }) {
      let project;
      try {
        project = await db.Project.findOne({
          where: {
            id: req.body.projects_id,
          },
          include: [
            {
              association: "Payments",
            },
          ],
        });
        if (project) {
          if (
            (project.coin === "USD" &&
              req.body.coin === "USD" &&
              Number(Number(project.balance) - Number(req.body.amount)) < 0) ||
            (project.coin === "USD" &&
              req.body.coin === "ARS" &&
              Number(Number(project.balance) - Number(req.body.amount / req.body.cotizacionUsd)) < 0) ||
            (project.coin === "ARS" &&
              req.body.coin === "ARS" &&
              Number(Number(project.balance) - Number(req.body.amount)) < 0) ||
            (project.coin === "ARS" &&
              req.body.coin === "USD" &&
              Number(Number(project.balance) - Number(req.body.amount * req.body.cotizacionUsd)) < 0)
          ) {
            return Promise.reject();
          } else {
            return true;
          }
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage(
      "El valor de pago excede el balance. Dejaría el balance en negativo!"
    ),
  check("amount")
    .custom((value, { req }) => {
      if (req.body.amount >= 0.01) {
        return true;
      }
      return false;
    })
    .withMessage("El amount debe ser numerico y mayor a 0.01"),
  check("receipt")
    .notEmpty()
    .optional()
    .withMessage("El recibo debe tener minimo 5 caracteres"),
  check("datetime")
    .isISO8601()
    .toDate()
    .withMessage(
      "La fecha debe tener el formato adecuado, ejemplo => 2022-01-08 15:25:00"
    ),
  check("description")
    .isLength({
      min: 10,
    })
    .withMessage("La descripción debe contener al menos 10 caracteres"),
  check("iva")
    .isBoolean()
    .withMessage("El IVA debe ser booleano, true o false"),
  check("wayToPay")
    .notEmpty()
    .isIn(["Efectivo", "Transferencia"])
    .withMessage("El medio de pago debe ser 'Transferencia' o 'Efectivo'"),
];
