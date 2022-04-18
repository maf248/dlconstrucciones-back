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
  check("cashflow")
    .custom((value, { req }) => {
      if (req.file !== undefined && req.files === undefined) {
        switch (req.file.mimetype) {
          case "image/jpg":
            return ".jpg";
          case "image/jpeg":
            return ".jpeg";
          case "image/png":
            return ".png";
          case "application/pdf":
            return ".pdf";
          case "application/msword":
            return ".doc";
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return ".docx";
          case "application/vnd.ms-excel":
            return ".xls";
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return ".xlsx";
          default:
            return false;
        }
      } else if (req.file === undefined && req.files !== undefined) {
        return !req.files.some(
          (e) =>
            e.mimetype !== "image/jpg" &&
            e.mimetype !== "image/jpeg" &&
            e.mimetype !== "image/png" &&
            e.mimetype !== "application/pdf" &&
            e.mimetype !== "application/msword" &&
            e.mimetype !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
            e.mimetype !== "application/vnd.ms-excel" &&
            e.mimetype !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
      }
      return false;
    })
    .optional()
    .withMessage(
      "El archivo debe tener formato de imagen (jpg,  jpeg o png) o formato documento pdf, excel o word (pdf, doc, docx, xls o xlsx)."
    ),
];
