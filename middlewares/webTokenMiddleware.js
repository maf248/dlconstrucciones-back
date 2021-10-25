const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const config = require('../configs/config');

app.set('llave', config.llave);

function webTokenMiddleware (req, res, next) {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            console.log(err);
            console.log(decoded);
            if (err) {
                return res.json({
                    mensaje: 'Token inválida'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
};

module.exports = webTokenMiddleware;