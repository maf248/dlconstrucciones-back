const db = require("../db/models");
const { validationResult } = require("express-validator");
const { type } = require("express/lib/response");
const assetTypeSetter = require("../helpers/assetTypeSetter");
module.exports = {
  edit: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Asset.update(
        {
          projects_id: req.body.projects_id,
          asset: req.file.filename,
          type: assetTypeSetter(req.file.mimetype),
        },
        {
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        }
      )
        .then((asset) => {
          if (asset[0]) {
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
    
    if (errors.isEmpty() && req.files.length > 0) {
      const promises = req.files.map((asset) =>
        db.Asset.create({
          projects_id: req.body.projects_id,
          asset: asset.filename,
          type: assetTypeSetter(asset.mimetype),
        })
      );
      Promise.all(promises)
        .then((assets) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: assets,
          });
        })
        .catch((err) => console.log(err));
    } else if (errors.isEmpty() && (req.files === undefined || req.files.length < 1)) {
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
    db.Asset.destroy({
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
            data: `Successfully deleted asset id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete asset id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
