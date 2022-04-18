const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty() && req.file) {
      db.Cashflow.update(
        {
          projects_id: req.body.projects_id,
          cashflow: req.file.filename,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((asset) => {
          if (asset[0]) {
            return res.json({
              meta: {
                status: 200,
              },
              data: {
                message: "Editado correctamente",
              },
            });
          } else {
            return res.json({
              meta: {
                status: 406,
              },
              data: {
                message: "Id invalido",
              },
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          errors: !req.file ? "No file or wrong formats only" : errors.errors,
          body: req.body,
        },
      });

    }
  },
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty() && req.files.length > 0) {
      const promises = req.files.map((cashflow) =>
        db.Cashflow.create({
          projects_id: req.body.projects_id,
          cashflow: cashflow.filename,
        })
      );
      Promise.all(promises)
        .then((cashflows) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: cashflows,
          });
        })
        .catch((err) => console.log(err));
    } else if (
      errors.isEmpty() &&
      (req.files === undefined || req.files.length < 1)
    ) {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          message:
            "No se subio ninguna documento, o solo fueron en formato incorrecto. Acepta imagenes jpg, png y jpeg, documentos pdf doc docx xls y xlsx.",
        },
      });
    } else {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  delete: (req, res, next) => {
    db.Cashflow.destroy({
      where: {
        id: {
          [db.Sequelize.Op.like]: [req.params.id],
        },
      },
    })
      .then((x) => {
        if (x) {
          return res.json({
            meta: {
              status: 200,
            },
            data: `Successfully deleted cashflow id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete cashflow id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
