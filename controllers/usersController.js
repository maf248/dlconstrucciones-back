const express = require("express");
const db = require("../db/models");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");

const config = require("../configs/config");

const app = express();
app.set("llave", config.llave);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

async function findUser(email) {
  let user;
  try {
    user = await db.User.findOne({
      where: {
        email: email,
      },
      include: [
        {
          association: "Projects",
          include: [
            {
              association: "Payments",
            },
            {
              association: "Assets",
            },
          ],
        },
      ],
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  list: (req, res, next) => {
    db.User.findAll({
      include: [
        {
          association: "Projects",
        },
      ],
    })
      .then((user) => {
        var response = {
          meta: {
            status: 200,
          },
          data: user,
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          association: "Projects",
        },
      ],
    })
      .then((user) => {
        var response = user
          ? {
              meta: {
                status: 200,
              },
              data: [user],
            }
          : {
              meta: {
                status: 404,
              },
              data: user,
            };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  profile: async (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          dni: req.body.dni,
          phone: req.body.phone,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
        },
        {
          where: {
            hash_id: req.selfHashId,
          },
        }
      )
        .then(() => {
          db.User.findOne({
            where: {
              hash_id: req.selfHashId,
            },
            include: [
              {
                association: "Projects",
                include: [
                  {
                    association: "Payments",
                  },
                  {
                    association: "Assets",
                  },
                ],
              },
            ],
          })
            .then((user) => {
              var response = {
                meta: {
                  status: 200,
                },
                data: user,
              };
              res.json(response);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (
      errors.errors.length < 3 &&
      errors.errors.some((x) => x.param === "password") &&
      errors.errors.some((x) => x.param === "passwordRepeat")
    ) {
      db.User.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          dni: req.body.dni,
          phone: req.body.phone,
          email: req.body.email,
        },
        {
          where: {
            hash_id: req.selfHashId,
          },
        }
      )
        .then(() => {
          db.User.findOne({
            where: {
              hash_id: req.selfHashId,
            },
            include: [
              {
                association: "Projects",
                include: [
                  {
                    association: "Payments",
                  },
                  {
                    association: "Assets",
                  },
                ],
              },
            ],
          })
            .then((user) => {
              var response = {
                meta: {
                  status: 200,
                },
                data: user,
              };
              res.json(response);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (
      errors.errors.length <= 3 &&
      (errors.errors.some((x) => x.param === "password") ||
        errors.errors.some((x) => x.param === "passwordRepeat")) &&
      errors.errors.some(
        (x) => x.msg === "El email introducido ya se encuentra registrado"
      )
    ) {
      db.User.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          dni: req.body.dni,
          phone: req.body.phone,
        },
        {
          where: {
            hash_id: req.selfHashId,
          },
        }
      )
        .then(() => {
          db.User.findOne({
            where: {
              hash_id: req.selfHashId,
            },
            include: [
              {
                association: "Projects",
                include: [
                  {
                    association: "Payments",
                  },
                  {
                    association: "Assets",
                  },
                ],
              },
            ],
          })
            .then((user) => {
              var response = {
                meta: {
                  status: 200,
                },
                data: user,
              };
              res.json(response);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (
      errors.errors.length === 1 &&
      errors.errors.some((x) => x.param === "email")
    ) {
      db.User.findOne({
        where: {
          hash_id: req.selfHashId,
        },
      })
        .then((user) => {
          if (user.email === req.body.email) {
            db.User.update(
              {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                dni: req.body.dni,
                phone: req.body.phone,
                password: bcryptjs.hashSync(req.body.password, 10),
              },
              {
                where: {
                  hash_id: req.selfHashId,
                },
              }
            )
              .then(() => {
                db.User.findOne({
                  where: {
                    hash_id: req.selfHashId,
                  },
                  include: [
                    {
                      association: "Projects",
                      include: [
                        {
                          association: "Payments",
                        },
                        {
                          association: "Assets",
                        },
                      ],
                    },
                  ],
                })
                  .then((user) => {
                    var response = {
                      meta: {
                        status: 200,
                      },
                      data: user,
                    };
                    res.json(response);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (
            errors.errors.msg ==
            "El email introducido ya se encuentra registrado"
          ) {
            return res.json({
              meta: {
                status: 401,
              },
              data: {
                errors: "Email ya registrado",
              },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.json({
        meta: {
          status: 401,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  avatar: async (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.update(
        {
          avatar: req.file.filename,
        },
        {
          where: {
            hash_id: req.selfHashId,
          },
        }
      )
        .then(() => {
          db.User.findOne({
            where: {
              hash_id: req.selfHashId,
            },
            include: [
              {
                association: "Projects",
                include: [
                  {
                    association: "Payments",
                  },
                  {
                    association: "Assets",
                  },
                ],
              },
            ],
          })
            .then((user) => {
              user.password = undefined;
              user.validation = undefined;
              var response = {
                meta: {
                  status: 200,
                },
                data: user,
              };
              res.json(response);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.json({
        meta: {
          status: 401,
        },
        data: {
          errors: errors.errors,
          file: req.file,
        },
      });
    }
  },
  login: async (req, res, next) => {
    const user = await findUser(req.body.email);
    console.log(user);

    if (user && user.validation === null) {
      var passwordCheck = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
      console.log(passwordCheck);
    }

    if (user && passwordCheck) {
      const payload = {
        check: true,
        role: user.role,
        hash_id: user.hash_id,
      };
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "12h",
      });
      user.password = undefined;
      user.validation = undefined;
      res.json({
        meta: {
          status: 200,
        },
        data: {
          message: "Autenticación correcta",
          token: token,
          user: user,
        },
      });
    } else if (user.validation === null) {
      res.json({
        meta: {
          status: 401,
        },
        data: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    } else {
      res.json({
        meta: {
          status: 401,
        },
        data: {
          message: "Email no validado",
        },
      });
    }
  },
  register: async (req, res, next) => {
    let errors = validationResult(req);
    console.log(errors.errors);
    if (errors.isEmpty()) {
      const hash_id = bcryptjs.hashSync("user name " + req.body.firstName, 10);
      const payload = {
        check: true,
        validation: true,
        hash_id: hash_id,
      };
      const validationToken = jwt.sign(payload, app.get("llave"), {
        expiresIn: "12h",
      });
      db.User.create({
        hash_id: hash_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        dni: req.body.dni,
        password: bcryptjs.hashSync(req.body.password, 10),
        role: "user",
        validation: validationToken,
      })
        .then((value) => {
          //Send validation email
          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
            var transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "lnconstrucciones0@gmail.com",
                pass: "pruebanodemailer",
              },
            });

            var mailOptions = {
              from: "lnconstrucciones0@gmail.com",
              to: `${req.body.email}`,
              subject: "Verificación de email",
              text: `http://localhost:3000/api/users/validate/${validationToken}`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
          }

          main()
            .then(() => {
              //Send response data for front-end
              value.dataValues.password = undefined;

              res.json({
                meta: {
                  status: 200,
                },
                data: {
                  message: "Mail de validacion mandado correctamente!",
                  user: {
                    ...value.dataValues,
                  },
                },
              });
            })
            .catch(console.error);
        })
        .catch((err) => console.log(err));
    } else {
      return res.json({
        meta: {
          status: 401,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
  validate: (req, res, next) => {
    if (req.selfHashId) {
      db.User.update(
        {
          validation: null,
        },
        {
          where: {
            hash_id: req.selfHashId,
          },
        }
      )
        .then((user) => {
          if (user) {
            //Redirect to login page, after email validation
            res.redirect('/main/auth/login');
          } else {
            res.json({
              meta: {
                status: 401,
              },
              message: "Unable to verify account. Wrong hash_id",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      return res.json({
        meta: {
          status: 401,
        },
        message: "Wrong token or not token provided",
      });
    }
  },
  identify: async (req, res, next) => {
    if (req.selfHashId) {
      db.User.findOne({
        where: {
          hash_id: req.selfHashId,
        },
        include: [
          {
            association: "Projects",
            include: [
              {
                association: "Payments",
              },
              {
                association: "Assets",
              },
            ],
          },
        ],
      })
        .then((user) => {
          user.password = undefined;
          user.validation = undefined;
          var response = {
            meta: {
              status: 200,
            },
            data: user,
          };
          res.json(response);
        })
        .catch((err) => console.log(err));
    } else {
      return res.json({
        meta: {
          status: 401,
        },
        data: {
          errors: "Token invalida",
        },
      });
    }
  },
  delete: (req, res, next) => {
    db.User.findOne({
      where: {
        hash_id: req.selfHashId,
      },
    })
      .then((user) => {
        if (Number(user.id) !== Number(req.params.id)) {
          db.User.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              console.log(x);
              if (x) {
                return res.json({
                  meta: {
                    status: 200,
                  },
                  data: `Successfully deleted user id: ${req.params.id}`,
                });
              } else {
                return res.json({
                  meta: {
                    status: 406,
                  },
                  data: `Could not delete user id: ${req.params.id}`,
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete self id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  role: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.findOne({
        where: {
          hash_id: req.selfHashId,
        },
      })
        .then((user) => {
          if (Number(user.id) !== Number(req.params.id)) {
            db.User.update(
              {
                role: req.body.role,
              },
              {
                where: {
                  id: {
                    [db.Sequelize.Op.like]: [req.params.id],
                  },
                },
              }
            )
              .then((user) => {
                if (user[0]) {
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
                status: 406,
              },
              data: `Could not edit self role for id: ${req.params.id}`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
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
};
