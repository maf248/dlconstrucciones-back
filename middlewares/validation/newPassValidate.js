const { check, body } = require("express-validator");
const db = require("../../db/models");
const path = require("path");
const fs = require("fs");

const ErrorsDir = path.join(__dirname, "..", "data", "catchErrorsLog.json");

module.exports = [
  check("email")
    .isEmail()
    .withMessage("Tiene que tener un formato de email válido"),
  check("email")
    .custom(async function (value, { req }) {
      let user;
      try {
        user = await db.User.findOne({
          where: {
            email: req.body.email,
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
    .withMessage("El email introducido no se encuentra registrado"),
  check("password")
    .isStrongPassword()
    .withMessage(
      "La contraseña debe tener un mínimo de 8 caracteres, incluyendo una minúscula, una mayúscula, un número y un símbolo"
    ),
  check("password")
    .custom(async function (value, { req }) {
      let user;
      try {
        user = await db.User.findOne({
          where: {
            email: req.body.email,
          },
        });

        if (user.password === 'restorepass') {
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage("Esta cuenta no validó su mail para cambiar la contraseña"),
  check("passwordRepeat")
    .custom(function (value, { req }) {
      if (value == req.body.password) {
        return true;
      }
      return false;
    })
    .withMessage("Las contraseñas no coinciden, intentá nuevamente"),
];
