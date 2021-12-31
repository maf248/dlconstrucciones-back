const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const config = require("../configs/config");

app.set("llave", config.llave);

function masterWebTokenMiddleware(req, res, next) {
  const token = req.headers["access-token"];

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
        
        if (decoded.role === "master") {
          next();
        } else {
          return res.json({
            meta: {
              status: 403,
            },
            data: {
              message: "Token restringida",
            },
          });
        }
      }
    });
  } else {
    res.send({
      meta: {
        status: 401,
      },
      data: {
        message: "Token no proveída",
      },
    });
  }
}

module.exports = masterWebTokenMiddleware;
