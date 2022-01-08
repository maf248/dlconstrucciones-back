const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Payment.update(
        {
          projects_id: req.body.projects_id,
          amount: req.body.amount,
          receipt: req.body.receipt,
          datetime: req.body.datetime,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((payment) => {
          if (payment[0]) {
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
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Payment.create({
        projects_id: req.body.projects_id,
        amount: req.body.amount,
        receipt: req.body.receipt,
        datetime: req.body.datetime,
      })
        .then((payment) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: payment,
          });
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
  delete: (req, res, next) => {
    db.Payment.destroy({
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
            data: `Successfully deleted payment id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete payment id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
