const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const config = require("../configs/config");

app.set("llave", config.llave);

function emailValidateJWTMiddleware(req, res, next) {
  const token = req.params.jwt

  if (token) {
    jwt.verify(token, app.get("llave"), (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({
          meta: {
            status: 401,
          },
          data: {
            message: "Token inválida",
          },
        });
      } else {
        req.decoded = decoded;
        req.selfHashId = decoded.hash_id;

        next();
      }
    });
  } else {
    res.send({
      meta: {
        status: 401,
      },
      data: {
        message: "Token no proveída.",
      },
    });
  }
}

module.exports = emailValidateJWTMiddleware;
