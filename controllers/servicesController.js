const db = require("../db/models");
const fs = require("fs");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Service.findAll()
      .then((services) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...services],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Service.findByPk(req.params.id, {
      include: [
        {
          association: "Pictures",
        },
        {
          association: "Contents",
        },
      ],
    })
      .then((service) => {
        var response = service
          ? {
              meta: {
                status: 200,
              },
              data: service,
            }
          : {
              meta: {
                status: 404,
              },
              data: service,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Service.update(
        {
          title: req.body.title,
          image: req.file ? req.file.filename : undefined,
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((service) => {
          if (service[0]) {
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

    if (errors.isEmpty() && req.file !== undefined) {
      db.Service.create({
        title: req.body.title,
        image: req.file ? req.file.filename : undefined,
      })
        .then((service) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: service,
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
    db.Service.findByPk(req.params.id, {
      include: [
        {
          association: "Pictures",
        },
      ],
    })
      .then((service) => {
        if (service) {
          db.Service.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              if (x) {
                try {
                  fs.unlinkSync(`./public/images/${service.dataValues.image}`);
                } catch (err) {
                  console.error(err);
                }

                if (service.dataValues.Pictures.length) {
                  service.dataValues.Pictures.forEach((element) => {
                    db.Picture.destroy({
                      where: {
                        id: {
                          [db.Sequelize.Op.like]: [element.id],
                        },
                      },
                    })
                      .then((x) => {
                        if (x) {
                          try {
                            fs.unlinkSync(`./public/images/${element.picture}`);
                          } catch (err) {
                            console.error(err);
                          }
                        }
                      })
                      .catch((err) => console.log(err));
                  });
                  return res.json({
                    meta: {
                      status: 200,
                    },
                    data: `Successfully deleted all pictures and service id: ${req.params.id}`,
                  });
                }

                return res.json({
                  meta: {
                    status: 200,
                  },
                  data: `Successfully deleted service id: ${req.params.id}`,
                });
              } else {
                return res.json({
                  meta: {
                    status: 406,
                  },
                  data: `Could not delete service id: ${req.params.id}`,
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not find service id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
