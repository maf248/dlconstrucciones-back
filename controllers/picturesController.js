const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty() && req.files.length > 0) {
      console.log(req.files);

      req.files.forEach((picture) => {
        db.Picture.create({
          services_b_id: req.body.serviceId,
          picture: picture.filename,
        })
          .then((pictures) => {
            return res.json({
              meta: {
                status: 201,
              },
              data: pictures,
            });
          })
          .catch((err) => console.log(err));
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
  edit: (req, res, next) => {
    let errors = validationResult(req);
    console.log(req.file);
    if (errors.isEmpty()) {
      db.Picture.update(
        {
          services_b_id: req.body.serviceId,
          picture: req.file?.filename,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((picture) => {
          if (picture[0]) {
            return res.json({
              meta: {
                status: 200,
              },
              data: {
                message: "Picture editado correctamente",
              },
            });
          } else {
            return res.json({
              meta: {
                status: 406,
              },
              data: {
                message: "Picture id invalido",
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
    db.Picture.destroy({
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
            data: `Successfully deleted service picture id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete service picture id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
