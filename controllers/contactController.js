const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const contactFormHtml = require("../helpers/contactFormHtml");
const constactClientHtml = require("../helpers/contactClientHtml");

module.exports = {
  contact: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        var transporter = nodemailer.createTransport({
          host: process.env.NODEMAILER_HOST,
          port: process.env.NODEMAILER_PORT,
          secure: true,
          auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
          },
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
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        var mailClientFormOptions = {
          from: `${process.env.NODEMAILER_USER}`,
          to: `${process.env.NODEMAILER_USER}`,
          subject: "Recibiste una consulta del sitio web - DLN Construcciones",
          html: constactClientHtml(req.body.email, req.body.comment),
        };

        transporter.sendMail(mailClientFormOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }

      main()
        .then(
          res.json({
            meta: {
              status: 200,
            },
            data: {
              email: req.body.email,
              comment: req.body.comment,
              message: "Emails Sent Correctly",
            },
          })
        )
        .catch(console.error);
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
