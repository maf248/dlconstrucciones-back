const { check, body } = require("express-validator");
const db = require("../../db/models");

module.exports = [
  check("type")
    .isNumeric()
    .custom(async function (value, { req }) {
      let type;
      try {
        type = await db.Type.findOne({
          where: {
            id: req.body.type,
          },
        });
        if (type) {
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    })
    .withMessage(
      "La categoría debe ser numerica, y tiene que existir en la base de datos"
    ),
  check("image")
    .custom((value, { req }) => {
      if (req.file !== undefined && req.files === undefined) {
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
      } else if (req.file === undefined && req.files !== undefined) {
        return !req.files.some(
          (e) =>
            e.mimetype !== "image/jpg" &&
            e.mimetype !== "image/jpeg" &&
            e.mimetype !== "image/png"
        );
      }
      return false;
    })
    .optional()
    .withMessage("El archivo debe tener formato: jpg jpeg o png"),
];
