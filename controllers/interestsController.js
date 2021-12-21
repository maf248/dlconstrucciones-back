const db = require('../db/models');
const {
    validationResult
} = require('express-validator');

module.exports = {
    index: (req, res, next) => {
        db.Interest.findAll()
            .then(interests => {


                var response = {
                    meta: {
                        status: 200,
                    },
                    data: [
                        ...interests
                    ]
                }
                res.json(response)
            })
            .catch(err => console.log(err))

    },
    detail: (req, res, next) => {
        db.Interest.findByPk(req.params.id)
            .then(interest => {


                var response = {
                    meta: {
                        status: 200,
                    },
                    data: interest
                }
                res.json(response)
            })
            .catch(err => console.log(err))
    },
    edit: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Interest.update({
                    title: req.body.title,
                    description: req.body.description,
                    image: req.file.filename
                }, {
                    where: {
                        id: {
                            [db.Sequelize.Op.like]: [req.params.id]
                        }
                    }
                })
                .then(interest => {

                    if (interest) {
                        res.redirect(`/api/interests/${req.params.id}`)
                    }
                })
                .catch(err => console.log(err))
        } else {
            return res.json({
                meta: {
                    status: 401
                },
                data: {
                    errors: errors.errors,
                    body: req.body
                }
            });
        }
    },
    create: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Interest.create({
                    title: req.body.title,
                    description: req.body.description,
                    image: req.file.filename
                })
                .then(interest => {
                    return res.json({
                        meta: {
                            status: 201
                        },
                        data: interest
                    });
                })
                .catch(err => console.log(err))
        } else {
            return res.json({
                meta: {
                    status: 401
                },
                data: {
                    errors: errors.errors,
                    body: req.body
                }
            });
        }
    },
    delete: (req, res, next) => {
        db.Interest.destroy({
                where: {
                    id: {
                        [db.Sequelize.Op.like]: [req.params.id]
                    }
                }
            })
            .then(x => {
                if (x) {
                    return res.json({
                        meta: {
                            status: 200
                        },
                        data: `Successfully deleted interest id: ${req.params.id}`
                    });
                } else {
                    return res.json({
                        meta: {
                            status: 409
                        },
                        data: `Could not delete interest id: ${req.params.id}`
                    });
                }
            })
            .catch(err => console.log(err))
    }
}