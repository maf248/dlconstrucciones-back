const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Category.findAll()
      .then((categories) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...categories],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Category.findByPk(req.params.id, {
      include: [
        {
          association: "Batches",
        },
      ],
    })
      .then((batch) => {
        var response = {
          meta: {
            status: 200,
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
      db.Category.update(
        {
          title: req.body.title,
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
        .then((category) => {
          if (category) {
            res.redirect(`/api/categories/${req.params.id}`);
          }
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
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Category.create({
        title: req.body.title,
        image: req.file?.filename,
      })
        .then((category) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: category,
          });
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
  delete: (req, res, next) => {
    db.Category.destroy({
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
            data: `Successfully deleted category id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 409,
            },
            data: `Could not delete category id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
