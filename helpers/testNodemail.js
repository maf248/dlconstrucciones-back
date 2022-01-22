const nodemailer = require("nodemailer");
const contactFormHtml = require("./contactFormHtml");

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
      subject: "Sending Email using Node.js",
      html: contactFormHtml("pepe@gmail.com", "Mensaje de prueba de pepe"),
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