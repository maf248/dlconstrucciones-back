const {
    check,
    body
} = require('express-validator');
const db = require('../db/models');
const path = require('path');
const fs = require('fs');

const ErrorsDir = path.join(__dirname, '..', 'data', 'catchErrorsLog.json');

module.exports = [
    check('first_name')
    .isLength({
        min: 3
    })
    .withMessage('Este campo debe contener al menos 3 carateres'),
    check('last_name')
    .isLength({
        min: 3
    })
    .withMessage('Este campo debe contener al menos 3 carateres'),
    check('dni')
    .isNumeric()
    .withMessage('Debe ser un numero el DNI'),
    check('phone')
    .isNumeric()
    .withMessage('Debe ser un numero el telefono'),
    check('email')
    .isEmail()
    .withMessage('Tiene que tener un formato de email válido'),
    check('email')
    .custom(async function (value, {
        req
    }) {
        let user;
        try {
            user = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (user === null) {
                return true;

            } else if (user !== null) {
                return Promise.reject();
            }

        } catch (error) {
            console.log(error);
        }

    })
    .withMessage('El email introducido ya se encuentra registrado'),
    check('password')
    .isStrongPassword()
    .withMessage('La contraseña debe tener un mínimo de 8 caracteres, incluyendo una minúscula, una mayúscula, un número y un símbolo'),
    check('passwordRepeat')
    .custom(function (value, {
        req
    }) {
        if (value == req.body.password) {
            return true;
        }
        return false;
    })
    .withMessage('Las contraseñas no coinciden, intentá nuevamente')
]