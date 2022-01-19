const db = require("../db/models");
const { validationResult } = require("express-validator");

module.exports = {
  create: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty() && req.files.length > 0) {
      const promises = req.files.map((picture) =>
        db.Picture.create({
          services_b_id: req.body.serviceId,
          picture: picture.filename,
        })
      );
      Promise.all(promises)
        .then((pictures) => {
          return res.json({
            meta: {
              status: 201,
            },
            data: pictures,
          });
        })
        .catch((err) => console.log(err));
    } else if (!errors.isEmpty() && req.files && req.files?.length > 1) {
      const validFormats = ["image/jpg", "image/jpeg", "image/png"];

      const validFilesFormat = req.files.filter((x) =>
        validFormats.includes(x.mimetype)
      );
      if (validFilesFormat.length > 1) {
        const promises = validFilesFormat.map((picture) =>
          db.Picture.create({
            services_b_id: req.body.serviceId,
            picture: picture.filename,
          })
        );
        Promise.all(promises)
          .then((pictures) => {
            const filesOk = new Set(validFilesFormat);
            const wrongFilesFormat = req.files.filter((file) => {
              return !filesOk.has(file);
            });
            return res.json({
              meta: {
                status: 201,
              },
              data: pictures,
              log: {
                message:
                  "Data created OK but some file format were wrong and thus not created",
                errors: errors.errors,
                files: wrongFilesFormat,
              },
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
    } else if (errors.isEmpty() && req.files.length === 0) {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          message: "All files were in wrong formats.",
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
  edit: (req, res, next) => {
    let errors = validationResult(req);

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
