const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const contactFormHtml = require("../helpers/contactFormHtml");
const constactClientHtml = require("../helpers/contactClientHtml");
const fs = require("fs");

module.exports = {
  contact: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        var transporter = nodemailer.createTransport({
          host: process.env.NODEMAILER_HOST,
          port: process.env.NODEMAILER_PORT,
          secure: false,
          auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
          },
          tls: {
            rejectUnauthorized: false,
            servername: "c1441202.ferozo.com"
          }
        });

        var mailContactFormOptions = {
          from: `${process.env.NODEMAILER_USER}`,
          to: `${req.body.email}`,
          subject: "Recibimos tu consulta - DLN Construcciones",
          html: contactFormHtml(req.body.email, req.body.comment),
        };

        transporter.sendMail(mailContactFormOptions, function (error, info) {
          if (error) {
            console.log(error);
            fs.appendFileSync(
              "../errors-log.txt",
              ", \n" +
                JSON.stringify({
                  mensaje: error,
                  lugar: `transporter.sendmail IF ERROR - contactController.js - nodemailer`,
                })
            );
          } else {
            console.log("Email sent: " + info.response);
            fs.appendFileSync(
              "../errors-log.txt",
              ", \n" +
                JSON.stringify({
                  mensaje: JSON.stringify(info),
                  lugar: `transporter.sendmail ELSE NO ERROR - contactController.js - nodemailer`,
                })
            );
          }
        });

        //   var mailClientFormOptions = {
        //     from: `${process.env.NODEMAILER_USER}`,
        //     to: `${process.env.NODEMAILER_USER}`,
        //     subject: "Recibiste una consulta del sitio web - DLN Construcciones",
        //     html: constactClientHtml(req.body.email, req.body.comment),
        //   };

        //   transporter.sendMail(mailClientFormOptions, function (error, info) {
        //     if (error) {
        //       console.log(error);
        //       fs.appendFileSync('../errors-log.txt', ", \n" + JSON.stringify({
        //         mensaje: error,
        //         lugar: `transporter.sendmail - contactController.js - nodemailer`
        //       }))
        //     } else {
        //       console.log("Email sent: " + info.response);
        //       fs.appendFileSync('../errors-log.txt', ", \n" + JSON.stringify({
        //         mensaje: JSON.stringify(info),
        //         lugar: `transporter.sendmail - contactController.js - nodemailer`
        //       }))
        //     }
        //   });
      }

      main()
        .then(() => {
          res.json({
            meta: {
              status: 200,
            },
            data: {
              email: req.body.email,
              comment: req.body.comment,
              message: "Emails Sent Correctly",
            },
          });

          fs.appendFileSync(
            "../errors-log.txt",
            ", \n" +
              JSON.stringify({
                mensaje: "ok",
                lugar: `main - then() - contactController.js - nodemailer`,
              })
          );
        })
        .catch((err) => {
          console.error(err);
          fs.appendFileSync(
            "../errors-log.txt",
            ", \n" +
              JSON.stringify({
                mensaje: err,
                lugar: `main - catch() - nodemailer - contactController.js`,
              })
          );
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
