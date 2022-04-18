const { check, body } = require("express-validator");
const db = require("../../db/models");

module.exports = [
  check("user")
    .isNumeric()
    .custom(async function (value, { req }) {
      let user;
      try {
        user = await db.User.findOne({
          where: {
            id: req.body.user,
          },
        });
        if (user) {
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage("El ID de usuario debe ser numerico y existir"),
  check("title")
    .isLength({
      min: 3,
    })
    .optional()
    .withMessage("El titulo debe contener al menos 3 carateres"),
  check("description")
    .isLength({
      min: 10,
    })
    .optional()
    .withMessage("La descripción debe contener al menos 10 carateres"),
  check("coin")
    .notEmpty()
    .isIn(["USD", "ARS"])
    .withMessage("La moneda debe ser USD o ARS"),
  check("total")
    .isNumeric()
    .isInt({ gt: -1 })
    .withMessage("El total debe ser numerico y mayor a 0"),
  check("balance")
    .isNumeric()
    .isInt({ gt: -1 })
    .optional()
    .withMessage("El balance debe ser mayor a 0"),
];
