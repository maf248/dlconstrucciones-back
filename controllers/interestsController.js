const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Interest.findAll()
      .then((interests) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...interests],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Interest.findByPk(req.params.id)
      .then((interest) => {
        var response = interest
          ? {
              meta: {
                status: 200,
              },
              data: interest,
            }
          : {
              meta: {
                status: 404,
              },
              data: interest,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Interest.update(
        {
          title: req.body.title,
          description: req.body.description,
          image: req.file?.filename,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((interest) => {
          if (interest[0]) {
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
                status: 404,
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
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty() && req.file !== undefined) {
      db.Interest.create({
        title: req.body.title,
        description: req.body.description,
        image: req.file?.filename,
      })
        .then((interest) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: interest,
          });
        })
        .catch((err) => console.log(err));
    } else if (errors.isEmpty() && req.file === undefined) {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          message:
            "No se subio ninguna imagen, o solo fueron en formato incorrecto. Acepta jpg, png y jpeg",
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
    db.Interest.destroy({
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
            data: `Successfully deleted interest id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete interest id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
