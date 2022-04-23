const db = require("../db/models");
const { validationResult } = require("express-validator");
const { restart } = require("nodemon");

const subTotal = (iva, amount) => (iva ? amount * 0.79 : null);

const totalUsd = (coin, amount, cotizacion, iva) => {
  if (coin === "USD") {
    return iva ? amount * 0.79 : amount;
  } else if (coin === "ARS") {
    return iva ? (amount * 0.79) / cotizacion : amount / cotizacion;
  }
  return null;
};
const totalArs = (coin, amount, cotizacion, iva) => {
  if (coin === "USD") {
    return iva ? (amount * 0.79) * cotizacion : amount * cotizacion;
  } else if (coin === "ARS") {
    return iva ? amount * 0.79 : amount;
  }
  return null;
};

module.exports = {
  edit: (req, res, next) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Payment.update(
        {
          projects_id: req.body.projects_id,
          coin: req.body.coin,
          cotizacionUsd: req.body.cotizacionUsd,
          totalUsd: totalUsd(
            req.body.coin,
            req.body.amount,
            req.body.cotizacionUsd,
            req.body.iva
          ),
          totalArs: totalArs(
            req.body.coin,
            req.body.amount,
            req.body.cotizacionUsd,
            req.body.iva
          ),
          subTotal: subTotal(req.body.iva, req.body.amount),
          amount: req.body.amount,
          receipt: req.body.receipt,
          datetime: req.body.datetime,
          description: req.body.description,
          iva: req.body.iva.toString(),
          wayToPay: req.body.wayToPay,
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
            // Update project balance acording to all payments after creating new payment
            db.Project.findOne({
              where: {
                id: req.body.projects_id,
              },
            })
              .then((project) => {
                db.Payment.sum(
                  `${project.coin === "USD" ? "totalUsd" : "totalArs"}`,
                  {
                    where: {
                      projects_id: req.body.projects_id,
                    },
                  }
                )
                  .then((newBalancePayments) => {
                    db.Project.update(
                      {
                        balance: db.sequelize.literal(
                          `total - ${newBalancePayments}`
                        ),
                      },
                      {
                        where: {
                          id: req.body.projects_id,
                        },
                      }
                    )
                      .then((x) => {
                        return res.json({
                          meta: {
                            status: 200,
                          },
                          data: {
                            message: `Successfully edited payment and updated balance project id: ${req.body.projects_id}`,
                          },
                        });
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
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
        coin: req.body.coin,
        cotizacionUsd: req.body.cotizacionUsd,
        totalUsd: totalUsd(
          req.body.coin,
          req.body.amount,
          req.body.cotizacionUsd,
          req.body.iva
        ),
        totalArs: totalArs(
          req.body.coin,
          req.body.amount,
          req.body.cotizacionUsd,
          req.body.iva
        ),
        subTotal: subTotal(req.body.iva, req.body.amount),
        amount: req.body.amount,
        receipt: req.body.receipt,
        datetime: req.body.datetime,
        description: req.body.description,
        iva: req.body.iva.toString(),
        wayToPay: req.body.wayToPay,
      })
        .then((payment) => {
          if (payment) {
            // Update project balance acording to all payments after creating new payment
            db.Project.findOne({
              where: {
                id: req.body.projects_id,
              },
            })
              .then((project) => {
                db.Payment.sum(
                  `${project.coin === "USD" ? "totalUsd" : "totalArs"}`,
                  {
                    where: {
                      projects_id: req.body.projects_id,
                    },
                  }
                )
                  .then((newBalancePayments) => {
                    db.Project.update(
                      {
                        balance: db.sequelize.literal(
                          `total - ${newBalancePayments}`
                        ),
                      },
                      {
                        where: {
                          id: req.body.projects_id,
                        },
                      }
                    )
                      .then((x) => {
                        return res.json({
                          meta: {
                            status: 200,
                          },
                          data: {
                            message: `Successfully created payment and updated balance project id: ${req.body.projects_id}`,
                          },
                        });
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          } else {
            return res.json({
              meta: {
                status: 406,
              },
              data: `Could not create payment id: ${payment.id}`,
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
    db.Payment.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((payment) => {
        if (payment) {
          db.Payment.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              if (x) {
                // Update project balance acording to all payments after creating new payment
                db.Project.findOne({
                  where: {
                    id: payment.projects_id,
                  },
                })
                  .then((project) => {
                    if (project) {
                      db.Payment.sum(
                        `${project.coin === "USD" ? "totalUsd" : "totalArs"}`,
                        {
                          where: {
                            projects_id: payment.projects_id,
                          },
                        }
                      )
                        .then((newBalancePayments) => {
                          db.Project.update(
                            {
                              balance: db.sequelize.literal(
                                `total - ${Number(newBalancePayments)}`
                              ),
                            },
                            {
                              where: {
                                id: payment.projects_id,
                              },
                            }
                          )
                            .then((y) => {
                              if (y) {
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
                                  data: `Successfully deleted payment id: ${req.params.id} but could not update balance.`,
                                });
                              }
                            })
                            .catch((err) => console.log(err));
                        })
                        .catch((err) => console.log(err));
                    } else {
                      return res.json({
                        meta: {
                          status: 406,
                        },
                        data: `Successfully deleted payment id: ${req.params.id} but couldn't find project ID: ${payment.projects_id} to update balance.`,
                      });
                    }
                  })
                  .catch((err) => console.log(err));
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
