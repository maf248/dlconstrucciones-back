const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res, next) => {
    db.Type.findAll()
      .then((types) => {
        var response = {
          meta: {
            status: 200,
          },
          data: [...types],
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  detail: (req, res, next) => {
    db.Type.findByPk(req.params.id, {
      include: [
        {
          association: "Jobs",
        },
      ],
    })
      .then((jobs) => {
        var response = {
          meta: {
            status: 200,
          },
          data: jobs,
        };
        res.json(response);
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Type.update(
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
        .then((type) => {
          if (type) {
            res.redirect(`/api/types/${req.params.id}`);
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
      db.Type.create({
        title: req.body.title,
        image: req.file?.filename,
      })
        .then((type) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: type,
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
    db.Type.destroy({
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
            data: `Successfully deleted type id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 409,
            },
            data: `Could not delete type id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
