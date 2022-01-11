const db = require("../db/models");
const path = require("path");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Project.findAll({
      include: [
        {
          association: "Users",
        },
      ],
    })
      .then((projects) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...projects],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Project.findByPk(req.params.id, {
      include: [
        {
          association: "Payments",
        },
        {
          association: "Assets",
        },
      ],
    })
      .then((project) => {
        var response = project
          ? {
              meta: {
                status: 200,
              },
              data: project,
            }
          : {
              meta: {
                status: 404,
              },
              data: project,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Payment.sum("amount", {
        where: {
          projects_id: req.params.id,
        },
      })
        .then((newBalancePayments) => {
          db.Project.update(
            {
              users_id: req.body.user,
              title: req.body.title,
              description: req.body.description,
              total: req.body.total,
              balance: Number(
                Number(req.body.total) - Number(newBalancePayments)
              ),
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
            .then((project) => {
              if (project[0]) {
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
      db.Project.create({
        users_id: req.body.user,
        title: req.body.title,
        description: req.body.description,
        total: req.body.total,
        balance: req.body.total,
        cashflow: req.file.filename,
      })
        .then((project) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: project,
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
    db.Project.destroy({
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
            data: `Successfully deleted project id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete project id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
  cashflow: (req, res, next) => {
    db.Project.findOne({
      where: {
        cashflow: {
          [db.Sequelize.Op.like]: [req.params.file],
        },
      },
    })
      .then((project) => {
        if (project) {
          if (req.decoded.role === "master") {
            db.User.findOne({
              where: {
                id: {
                  [db.Sequelize.Op.like]: [project.users_id],
                },
              },
            })
              .then((user) => {
                if (user) {
                  res.sendFile(
                    path.join(__dirname, "../private", `${req.params.file}`)
                  );
                } else {
                  return res.json({
                    meta: {
                      status: 406,
                    },
                    data: `Not found user: ${project.users_id}`,
                  });
                }
              })
              .catch((err) => console.log(err));
          } else {
            db.User.findOne({
              where: {
                id: {
                  [db.Sequelize.Op.like]: [project.users_id],
                },
                hash_id: {
                  [db.Sequelize.Op.like]: [req.selfHashId],
                },
              },
            })
              .then((user) => {
                if (user) {
                  res.sendFile(
                    path.join(__dirname, "../private", `${req.params.file}`)
                  );
                } else {
                  return res.json({
                    meta: {
                      status: 406,
                    },
                    data: `Not found user: ${project.users_id}`,
                  });
                }
              })
              .catch((err) => console.log(err));
          }
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Not found file: ${req.params.file}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
