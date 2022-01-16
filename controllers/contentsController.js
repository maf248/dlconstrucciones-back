const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Content.create({
        services_a_id: req.body.serviceId,
        subtitle: req.body.subtitle,
        text: req.body.text,
      })
        .then((content) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: content,
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
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Content.update(
        {
          services_a_id: req.body.serviceId,
          subtitle: req.body.subtitle ? req.body.subtitle : null,
          text: req.body.text ? req.body.text : null,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((content) => {
            if (content[0]) {
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
  delete: (req, res, next) => {
    db.Content.destroy({
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
            data: `Successfully deleted content id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete content id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
