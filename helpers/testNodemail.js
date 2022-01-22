const nodemailer = require("nodemailer");
const contactFormHtml = require("./contactFormHtml");
const contactClientHtml = require("./contactClientHtml");
const validateUserHtml = require("./validateUserHtml");
const newPassHtml = require("./newPassHtml");

async function main() {
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: false,
      auth: {
        user: "lnconstrucciones0@gmail.com",
        pass: "pruebanodemailer",
      },
    });

    var mailOptions = {
      from: "lnconstrucciones0@gmail.com",
      to: "mafmaggot@gmail.com",
      subject: "Recibimos tu consulta - DLN Construcciones",
      html: contactClientHtml("pepe@gmail.com", "http://www.google.com.ar"),
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
    .then(
      console.log('Done!')
    )
    .catch(console.error);