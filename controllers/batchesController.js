const db = require("../db/models");
const fs = require("fs");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Batch.findAll()
      .then((batches) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...batches],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Batch.findByPk(req.params.id, {
      include: [
        {
          association: "Images",
        },
      ],
    })
      .then((batch) => {
        var response = batch
          ? {
              meta: {
                status: 200,
              },
              data: batch,
            }
          : {
              meta: {
                status: 404,
              },
              data: batch,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Batch.update(
        {
          categories_id: req.body.category,
          title: req.body.title,
          description: req.body.description,
          image: req.file ? req.file.filename : undefined,
          price: req.body.price,
          sold: req.body.sold,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((batch) => {
          console.log(batch);
          if (batch[0]) {
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
      db.Batch.create({
        categories_id: req.body.category,
        title: req.body.title,
        description: req.body.description,
        image: req.file ? req.file.filename : undefined,
        price: req.body.price,
        sold: req.body.sold,
      })
        .then((batch) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: batch,
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
    db.Batch.findOne({
      where: {
        id: {
          [db.Sequelize.Op.like]: [req.params.id],
        },
      },
    })
      .then((batch) => {
        if (batch) {
          db.Batch.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              if (x) {
                try {
                  fs.unlinkSync(`./public/images/${batch.dataValues.image}`);
                } catch (err) {
                  console.error(err);
                }
                return res.json({
                  meta: {
                    status: 200,
                  },
                  data: `Successfully deleted batch id: ${req.params.id}`,
                });
              } else {
                return res.json({
                  meta: {
                    status: 406,
                  },
                  data: `Could not delete batch id: ${req.params.id}`,
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not find batch id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
