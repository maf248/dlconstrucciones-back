const express = require('express');
const db = require('../db/models');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const config = require('../configs/config');

const app = express();
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

async function findUser(email) {
    let user;
    try {
        user = await db.User.findOne({
            where: {
                email: email
            }
        })
        return user;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index: (req, res, next) => {
        db.User.findAll()
            .then(users => {


                var response = {
                    meta: {
                        status: 200,
                    },
                    data: [
                        ...users
                    ]
                }
                res.json(response)
            })
            .catch(err => console.log(err))
    },
    login: async (req, res, next) => {

        const user = await findUser(req.body.email);
        console.log(user);
        
        if (user) {
            var passwordCheck = bcryptjs.compareSync(req.body.password, user.password);
            console.log(passwordCheck);
        }
        
        if (user && passwordCheck) {
            const payload = {
                check: true,
                role: user.role
            };
            const token = jwt.sign(payload, app.get('llave'), {
                expiresIn: '12h'
            });
            // user.password = undefined;
            res.json({
                meta: {
                    status: 200
                },
                data: {
                    message: 'Autenticación correcta',
                    token: token,
                    user: user
                },
                

            });
        } else {
            res.json({
                meta: {
                    status: 401
                },
                data: {
                    message: "Usuario o contraseña incorrectos"
                }
            })
        }
    },
    register: async (req, res, next) => {

        let errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {

            return res.json({
                meta: {
                    status: 401
                },
                data: {
                    errors: errors.errors,
                    body: req.body
                }
            });

        } else {

            db.User.create({
                hash_id: bcryptjs.hashSync("user name " + req.body.firstName, 10),
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                dni: req.body.dni,
                password: bcryptjs.hashSync(req.body.password, 10),
                role: 'user'
            }).then(value => {

                value.dataValues.password = undefined;
            
                res.json({
                    meta: {
                        status: 200
                    },
                    data: {
                        user: {...value.dataValues}
                    }
                });
            }).catch(err => console.log(err))

        }
    },

}